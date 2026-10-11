"""Generate the DD sheet set (SVG + vector PDF) from the same BIM model the 3D viewer reads."""
import math, os, subprocess, sys, html
from model import *
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, '..', 'drawings')
os.makedirs(OUT, exist_ok=True)
WS, HS = 841, 594          # A1 landscape, mm
TBX = 765                  # title block strip starts here
DATE = '11 Oct 2026'
esc = html.escape
SHEETS = [
    ('G-001', 'Cover Sheet + Sheet Index', 'As Noted'),
    ('G-002', 'Sustainability Summary', 'NTS'),
    ('G-003', 'Construction Standards (Thai vs Western)', 'NTS'),
    ('A-101', 'Floor Plan (Dimensioned)', '1/8" = 1\'-0"'),
    ('A-102', 'Roof Plan', '1/8" = 1\'-0"'),
    ('A-201', 'Exterior Elevations', '1/8" = 1\'-0"'),
    ('A-301', 'Building Sections', '3/16" = 1\'-0"'),
    ('A-401', 'Kitchen Plan + Elevations', '1/4" = 1\'-0"'),
    ('S-101', 'Foundation + Structural Plan', '1/8" = 1\'-0"'),
    ('S-102', 'Wall Framing + Roof Framing Plans', '3/32" = 1\'-0"'),
    ('E-101', 'Power + Lighting Plan', '1/8" = 1\'-0"'),
    ('P-101', 'Plumbing + Site Utilities Plan', '3/32" = 1\'-0"'),
    ('M-101', 'HVAC Plan', '1/8" = 1\'-0"'),
    ('E-102', 'Solar PV Plan + Single-Line Diagram', '3/32" = 1\'-0"'),
    ('E-103', 'Controls + Monitoring', 'NTS'),
    ('P-102', 'Rainwater, Irrigation + Kitchen Garden Plan', '1/16" = 1\'-0"'),
    ('P-103', 'Water Source + Treatment', 'NTS'),
]
FONT = "font-family:Hind,sans-serif"
class Sheet:
    def __init__(s, no, title, scale):
        s.no, s.title, s.scale, s.b = no, title, scale, []
    def add(s, x): s.b.append(x)
    def text(s, x, y, t, size=2.5, anchor='start', weight=400, fill='#0a0a0a', font='Hind', rot=0, extra=''):
        tr = f' transform="rotate({rot} {x:.2f} {y:.2f})"' if rot else ''
        s.add(f'<text x="{x:.2f}" y="{y:.2f}" font-family="{font}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}" fill="{fill}"{tr}{extra}>{esc(str(t))}</text>')
    def line(s, x0, y0, x1, y1, w=0.25, c='#0a0a0a', dash=None, cap='butt'):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        s.add(f'<line x1="{x0:.2f}" y1="{y0:.2f}" x2="{x1:.2f}" y2="{y1:.2f}" stroke="{c}" stroke-width="{w}" stroke-linecap="{cap}"{d}/>')
    def rect(s, x, y, w, h, fill='none', stroke='#0a0a0a', sw=0.25, dash=None, rx=0):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        s.add(f'<rect x="{min(x,x+w):.2f}" y="{min(y,y+h):.2f}" width="{abs(w):.2f}" height="{abs(h):.2f}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}/>')
    def poly(s, pts, fill='none', stroke='#0a0a0a', sw=0.25, dash=None, close=False):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        tag = 'polygon' if close else 'polyline'
        s.add(f'<{tag} points="{" ".join(f"{x:.2f},{y:.2f}" for x, y in pts)}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round"{d}/>')
    def circle(s, x, y, r, fill='none', stroke='#0a0a0a', sw=0.25):
        s.add(f'<circle cx="{x:.2f}" cy="{y:.2f}" r="{r:.2f}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
    def frame(s):
        s.rect(8, 8, WS - 16, HS - 16, sw=0.7)
        x = TBX; s.line(x, 8, x, HS - 8, 0.7)
        y = 14
        s.text(x + 5, y + 6, 'WEBERMAN', 8, weight=600, font='Khand'); s.text(x + 5, y + 14, 'RESIDENCE', 8, weight=600, font='Khand')
        s.text(x + 5, y + 21, 'Mountain courtyard house, Thailand', 2.4, fill='#404040')
        s.text(x + 5, y + 25, 'Owner: Max Weberman', 2.4, fill='#404040')
        s.line(x, y + 30, WS - 8, y + 30, .35)
        s.text(x + 5, y + 37, 'ISSUE', 2.2, weight=600, fill='#737373', extra=' letter-spacing="0.3"')
        s.text(x + 5, y + 43, 'Design Development', 3.6, weight=600)
        s.rect(x + 4, y + 47, WS - 8 - x - 8, 9, fill='#0a0a0a', stroke='none')
        s.text((x + WS - 8) / 2, y + 53, 'NOT FOR CONSTRUCTION', 3.3, 'middle', 600, '#fafafa', 'Khand', extra=' letter-spacing="0.4"')
        s.line(x, y + 62, WS - 8, y + 62, .35)
        rows = [('Date', DATE), ('Scale', s.scale), ('Model', 'bim.json (from plan.json)'), ('Units', "Feet + inches (mm for members)"), ('Revision', 'DD-01')]
        yy = y + 70
        for k, v in rows:
            s.text(x + 5, yy, k.upper(), 2.0, weight=600, fill='#737373'); s.text(x + 5, yy + 4.2, v, 2.8); yy += 11
        # sheet-specific notes area
        s.notes_y = yy + 4
        s.line(x, HS - 70, WS - 8, HS - 70, .35)
        s.text(x + 5, HS - 63, 'SHEET TITLE', 2.0, weight=600, fill='#737373')
        words = s.title.split(' '); lines, cur = [], ''
        for w_ in words:
            if len(cur + ' ' + w_) > 22: lines.append(cur); cur = w_
            else: cur = (cur + ' ' + w_).strip()
        lines.append(cur)
        for i, l in enumerate(lines): s.text(x + 5, HS - 56 + i * 5.5, l, 4.4, weight=600, font='Khand')
        s.line(x, HS - 36, WS - 8, HS - 36, .35)
        s.text(x + 5, HS - 30, 'SHEET', 2.0, weight=600, fill='#737373')
        s.text(x + 5, HS - 14, s.no, 15, weight=600, font='Khand')
        idx = [q[0] for q in SHEETS].index(s.no) + 1
        s.text(WS - 12, HS - 14, f'{idx} of {len(SHEETS)}', 2.4, 'end', fill='#737373')
    def tbnotes(s, title, notes, w=62):
        y = s.notes_y; s.text(TBX + 5, y, title.upper(), 2.0, weight=600, fill='#737373'); y += 4.5
        for n in notes:
            for l in wrap(n, 40):
                s.text(TBX + 5, y, l, 2.2); y += 3.2
            y += 1.2
        s.notes_y = y + 2
    def svg(s):
        return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{WS}mm" height="{HS}mm" viewBox="0 0 {WS} {HS}">'
                f'<rect width="{WS}" height="{HS}" fill="#ffffff"/>' + ''.join(s.b) + '</svg>')
def wrap(t, n):
    out, cur = [], ''
    for w_ in str(t).split(' '):
        if len(cur) + len(w_) + 1 > n and cur: out.append(cur); cur = w_
        else: cur = (cur + ' ' + w_).strip()
    if cur: out.append(cur)
    return out
class View:
    """plan-to-sheet transform: feet -> mm"""
    def __init__(v, sh, sc, ox, oy): v.sh, v.k, v.ox, v.oy = sh, sc, ox, oy
    def P(v, x, y): return (v.ox + x * v.k, v.oy - y * v.k)
K8 = 25.4 / 8   # mm per ft at 1/8"=1'
def layer(t): return [e for e in EL if e['layer'] == t and e.get('cat') != 'casework']
def title_mark(sh, x, y, n, t, scale):
    sh.circle(x + 5, y - 1.5, 5, sw=.4); sh.text(x + 5, y - 0.3, n, 3.2, 'middle', 600, font='Khand')
    sh.text(x + 13, y - 1, t.upper(), 4, weight=600, font='Khand', extra=' letter-spacing="0.3"'); sh.line(x + 13, y + 1, x + 13 + len(t) * 2.5 + 10, y + 1, .5)
    sh.text(x + 13, y + 5, 'SCALE: ' + scale, 2.3, fill='#404040')
def north(sh, x, y):
    sh.circle(x, y, 6, sw=.35); sh.poly([(x, y - 6), (x - 2.4, y + 3), (x, y + 1.5), (x + 2.4, y + 3)], fill='#0a0a0a', close=True, sw=.2)
    sh.text(x, y - 8, 'N', 3.2, 'middle', 600, font='Khand')

# ---------- base architecture in plan ----------
def draw_base(v, grey=False, rooms=True, doors=True, roomtext=True, light=False):
    sh = v.sh; c = '#9a9a9a' if grey else '#0a0a0a'; fill = '#d4d4d4' if grey else '#3d3d3d'
    if light: c, fill = '#bdbdbd', '#ececec'
    for e in layer('framing'):
        if e['cat'] != 'wall': continue
        x0, y0, x1, y1 = e['plan']; t = e['t']
        o = 'h' if abs(y0 - y1) < 1e-6 else 'v'
        # subtract openings
        ops = sorted([(d['a'], d['b'], d['k']) for d in EL if d['layer'] == 'arch' and d.get('c') == (y0 if o == 'h' else x0) and d.get('o') == o and (min(x0, x1) - .01 <= d['a'] <= max(x0, x1) + .01 if o == 'h' else min(y0, y1) - .01 <= d['a'] <= max(y0, y1) + .01)])
        # include cased openings from plan.json
        w = next(w for w in WALLS if wall_xy(w) == ((x0, y0), (x1, y1)))
        ops = sorted([(f['a'], f['b'], f['k']) for f in w['feats']])
        a0 = w['a']; segs = []
        for a, b, k in ops:
            if a > a0: segs.append((a0, a))
            a0 = b
        if w['b'] > a0: segs.append((a0, w['b']))
        for a, b in segs:
            if o == 'h': p, q = v.P(a, w['c'] + t / 2), v.P(b, w['c'] - t / 2)
            else: p, q = v.P(w['c'] - t / 2, b), v.P(w['c'] + t / 2, a)
            sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill=fill, stroke=c, sw=.18)
        if not doors: continue
        for a, b, k in ops:
            if k == 'open': continue
            if o == 'h':
                p0, p1 = v.P(a, w['c']), v.P(b, w['c'])
                if k in ('window', 'fixed', 'glass', 'slide'):
                    for off in (-t / 2, 0, t / 2): q0, q1 = v.P(a, w['c'] + off), v.P(b, w['c'] + off); sh.line(q0[0], q0[1], q1[0], q1[1], .13, c)
                    for xx in (a, b): q0, q1 = v.P(xx, w['c'] - t / 2), v.P(xx, w['c'] + t / 2); sh.line(q0[0], q0[1], q1[0], q1[1], .18, c)
                else:
                    L = (b - a) * v.k
                    if k == 'door':  # sliding / shoji: two overlapping panels
                        sh.line(p0[0], p0[1] - .5, (p0[0] + p1[0]) / 2 + 1, p0[1] - .5, .3, c); sh.line((p0[0] + p1[0]) / 2 - 1, p0[1] + .5, p1[0], p1[1] + .5, .3, c)
                    else:  # swing
                        sgn = -1 if w['pos'] is None else 1
                        sh.line(p0[0], p0[1], p0[0], p0[1] - sgn * L, .3, c)
                        sh.add(f'<path d="M{p0[0] + L:.2f},{p0[1]:.2f} A{L:.2f},{L:.2f} 0 0 {0 if sgn > 0 else 1} {p0[0]:.2f},{p0[1] - sgn * L:.2f}" fill="none" stroke="{c}" stroke-width="0.13" stroke-dasharray="1,0.6"/>')
            else:
                p0, p1 = v.P(w['c'], a), v.P(w['c'], b)
                if k in ('window', 'fixed', 'glass', 'slide'):
                    for off in (-t / 2, 0, t / 2): q0, q1 = v.P(w['c'] + off, a), v.P(w['c'] + off, b); sh.line(q0[0], q0[1], q1[0], q1[1], .13, c)
                    for yy in (a, b): q0, q1 = v.P(w['c'] - t / 2, yy), v.P(w['c'] + t / 2, yy); sh.line(q0[0], q0[1], q1[0], q1[1], .18, c)
                else:
                    L = (b - a) * v.k
                    if k == 'door':
                        sh.line(p0[0] - .5, p0[1], p0[0] - .5, (p0[1] + p1[1]) / 2 - 1, .3, c); sh.line(p0[0] + .5, (p0[1] + p1[1]) / 2 + 1, p1[0] + .5, p1[1], .3, c)
                    else:
                        sgn = 1 if w['pos'] is None else -1
                        sh.line(p0[0], p0[1], p0[0] + sgn * L, p0[1], .3, c)
                        sh.add(f'<path d="M{p0[0]:.2f},{p0[1] - L:.2f} A{L:.2f},{L:.2f} 0 0 {1 if sgn > 0 else 0} {p0[0] + sgn * L:.2f},{p0[1]:.2f}" fill="none" stroke="{c}" stroke-width="0.13" stroke-dasharray="1,0.6"/>')
    nk = FARM['nook']; a_, b_ = v.P(nk['x0'], nk['y1']), v.P(nk['x1'], nk['y0']); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], 'none', c, .3)
    if roomtext and not grey and not light: sh.text((a_[0] + b_[0]) / 2, (a_[1] + b_[1]) / 2 + .7, 'HERB NOOK', 1.7, 'middle', 600, font='Khand')
    if rooms and roomtext:
        for r in P['rooms']:
            cx, cy = v.P((r['x0'] + r['x1']) / 2, (r['y0'] + r['y1']) / 2)
            sz = 2.3 if v.k > 3 else 1.6
            nm = r['name'] if len(r['name']) < 22 or v.k < 2 else r['name'].split(' + ')[0].split(' / ')[0]
            ww = (r['x1'] - r['x0']) * v.k
            lines = wrap(nm.upper(), max(6, int(ww / (sz * 0.62))))
            for i, l in enumerate(lines): sh.text(cx, cy - (len(lines) - 1) * sz * 0.6 + i * sz * 1.2, l, sz, 'middle', 600, '#9a9a9a' if (grey or light) else '#0a0a0a', 'Khand')
            if not grey and not light: sh.text(cx, cy + len(lines) * sz * 0.65 + 1.2, f"{r['id']} · {r['area']} SF", sz * 0.8, 'middle', fill='#525252')
def site_outline(v, c='#a3a3a3'):
    sh = v.sh
    pl = S['pool']; p, q = v.P(pl['x0'], pl['y1']), v.P(pl['x1'], pl['y0']); sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill='none', stroke=c, sw=.25)
    sh.text((p[0] + q[0]) / 2, (p[1] + q[1]) / 2 + 1, 'SALTWATER POOL', 2.2, 'middle', 600, c, 'Khand')
    u = S['util']; p, q = v.P(u['x0'], u['y1']), v.P(u['x1'], u['y0']); sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], stroke=c, sw=.25, dash='2,1')
    co = S['courtyard']; p = v.P((co['x0'] + co['x1']) / 2, (co['y0'] + co['y1']) / 2); sh.text(p[0], p[1], 'COURTYARD', 2.4, 'middle', 600, c, 'Khand')

def dim(sh, p, q, off, label, horiz=True, size=2.0):
    # dimension line offset from p-q
    if horiz:
        y = p[1] + off; sh.line(p[0], y, q[0], y, .15)
        for x in (p[0], q[0]):
            sh.line(x, p[1] + (1 if off > 0 else -1), x, y + (1.2 if off > 0 else -1.2), .12); sh.line(x - .9, y + .9, x + .9, y - .9, .3)
        sh.text((p[0] + q[0]) / 2, y - .8, label, size, 'middle')
    else:
        x = p[0] + off; sh.line(x, p[1], x, q[1], .15)
        for y in (p[1], q[1]):
            sh.line(p[0] + (1 if off > 0 else -1), y, x + (1.2 if off > 0 else -1.2), y, .12); sh.line(x - .9, y + .9, x + .9, y - .9, .3)
        sh.text(x - .8, (p[1] + q[1]) / 2, label, size, 'middle', rot=-90)
def ftin(v):
    f = int(v + 1e-6); i = round((v - f) * 12)
    if i == 12: f, i = f + 1, 0
    return f"{f}'-{i}\""

sheets = {}
def new(no):
    t = next(q for q in SHEETS if q[0] == no); s = Sheet(*t); s.frame(); sheets[no] = s; return s
def legend(sh, x, y, items, title='Legend'):
    sh.text(x, y, title.upper(), 2.6, weight=600, font='Khand', extra=' letter-spacing="0.3"'); y += 5
    for kind, args, label in items:
        if kind == 'line': sh.line(x, y - 1, x + 10, y - 1, args.get('w', .35), args.get('c', '#0a0a0a'), args.get('dash'))
        elif kind == 'circle': sh.circle(x + 5, y - 1, args.get('r', 1.2), args.get('fill', 'none'), sw=.25)
        elif kind == 'rect': sh.rect(x + 2, y - 2.5, 6, 3, args.get('fill', 'none'), sw=.25, dash=args.get('dash'))
        elif kind == 'sym': args['f'](x + 5, y - 1)
        sh.text(x + 13, y, label, 2.3); y += 4.6
    return y
def table(sh, x, y, cols, rows, widths, size=2.1, head=True):
    rh = size * 1.75
    if head:
        sh.rect(x, y, sum(widths), rh, fill='#f5f5f5', stroke='#e5e5e5', sw=.2); cx = x
        for c_, w_ in zip(cols, widths): sh.text(cx + 1, y + rh - 1.2, c_.upper(), size * .85, weight=600, fill='#404040'); cx += w_
        y += rh
    for r in rows:
        cx = x
        for c_, w_ in zip(r, widths):
            t = str(c_); mx = int(w_ / (size * .5))
            sh.text(cx + 1, y + rh - 1.2, t if len(t) <= mx else t[:mx - 1] + '…', size); cx += w_
        sh.line(x, y + rh, x + sum(widths), y + rh, .1, '#d4d4d4'); y += rh
    return y

# ======================= A-101 FLOOR PLAN =======================
sh = new('A-101')
v = View(sh, K8, 115, 410)   # x 0..98 -> 105..416 ; y 0..83 -> 330..66
draw_base(v)
site_outline(v)
# exterior dimension strings: overall + by-segment
xs = sorted(set([w['a'] for w in WALLS if w['ext'] and w['o'] == 'h'] + [w['b'] for w in WALLS if w['ext'] and w['o'] == 'h']))
ys = sorted(set([w['a'] for w in WALLS if w['ext'] and w['o'] == 'v'] + [w['b'] for w in WALLS if w['ext'] and w['o'] == 'v']))
X0, X1, Y0, Y1 = min(xs), max(xs), min(ys), max(ys)
top = v.P(0, Y1)[1]; bot = v.P(0, Y0)[1]; lft = v.P(X0, 0)[0]; rgt = v.P(X1, 0)[0]
def hdim(a, b, y, lab=None, size=2.0):
    p, q = (v.P(a, 0)[0], y), (v.P(b, 0)[0], y); sh.line(p[0], y, q[0], y, .15)
    for xx in (p[0], q[0]): sh.line(xx, y - 1.5, xx, y + 1.5, .12); sh.line(xx - .8, y + .8, xx + .8, y - .8, .3)
    if (q[0] - p[0]) > 6: sh.text((p[0] + q[0]) / 2, y - .9, lab or ftin(b - a), size, 'middle')
def vdim(a, b, x, lab=None, size=2.0):
    p, q = v.P(0, a)[1], v.P(0, b)[1]; sh.line(x, p, x, q, .15)
    for yy in (p, q): sh.line(x - 1.5, yy, x + 1.5, yy, .12); sh.line(x - .8, yy + .8, x + .8, yy - .8, .3)
    if (p - q) > 6: sh.text(x - .9, (p + q) / 2, lab or ftin(b - a), size, 'middle', rot=-90)
north_x = sorted(set(sum([[w['a'], w['b']] for w in WALLS if w['ext'] and w['o'] == 'h' and w['c'] >= 79], [])))
south_x = sorted(set(sum([[w['a'], w['b']] for w in WALLS if w['ext'] and w['o'] == 'h' and w['c'] <= 0.1], [])))
east_y = sorted(set(sum([[w['a'], w['b']] for w in WALLS if w['ext'] and w['o'] == 'v' and w['c'] >= 98], [])))
west_y = sorted(set(sum([[w['a'], w['b']] for w in WALLS if w['ext'] and w['o'] == 'v' and w['c'] <= 18], [])))
for a, b in zip(north_x, north_x[1:]): hdim(a, b, top - 14)
hdim(X0, X1, top - 22, f"{ftin(X1 - X0)}  ({(X1 - X0) * .3048:.2f} m) OVERALL", 2.4)
sx = sorted(set(south_x + [4, 28, 50, 58, 66, 72, 98]))
for a, b in zip(sx, sx[1:]): hdim(a, b, bot + 24)
for a, b in zip(east_y, east_y[1:]): vdim(a, b, rgt + 14)
vdim(Y0, Y1, rgt + 22, f"{ftin(Y1 - Y0)}  ({(Y1 - Y0) * .3048:.2f} m) OVERALL", 2.4)
wy = sorted(set(west_y + [0, 22, 55, 67, 79]))
for a, b in zip(wy, wy[1:]): vdim(a, b, lft - 14)
# courtyard dims
co = S['courtyard']; hdim(co['x0'], co['x1'], v.P(0, co['y0'])[1] - 4, f"COURTYARD {ftin(co['x1'] - co['x0'])}"); vdim(co['y0'], co['y1'], v.P(co['x1'], 0)[0] - 4, ftin(co['y1'] - co['y0']))
# door/window marks
for e in layer('arch'):
    if e['o'] == 'h': p = v.P((e['a'] + e['b']) / 2, e['c'])
    else: p = v.P(e['c'], (e['a'] + e['b']) / 2)
    if e['cat'] == 'door':
        sh.circle(p[0] + 3.5, p[1] - 3.5, 1.9, '#ffffff', sw=.2); sh.text(p[0] + 3.5, p[1] - 2.85, e['tag'], 1.5, 'middle', 600)
    else:
        sh.poly([(p[0] + 1.5, p[1] - 5.4), (p[0] + 5.5, p[1] - 5.4), (p[0] + 5.5, p[1] - 1.6), (p[0] + 1.5, p[1] - 1.6)], fill='#ffffff', sw=.2, close=True); sh.text(p[0] + 3.5, p[1] - 2.85, e['tag'], 1.5, 'middle', 600)
title_mark(sh, 115, 560, '1', 'Floor Plan', '1/8" = 1\'-0"'); north(sh, 560, 60)
# door + window schedule
yy = table(sh, 592, 40, ['Mark', 'Type', 'Size', 'Rooms'], [[e['tag'], e['type'], e['size'], ', '.join(e['rooms'])] for e in layer('arch')], [10, 58, 60, 40], 1.75)
sh.text(592, 36, 'DOOR + WINDOW SCHEDULE', 3, weight=600, font='Khand')
sh.tbnotes('Plan Notes', ['Dimensions to wall centerlines unless noted; exterior AAC walls 200 mm, partitions 100-150 mm.', f'Conditioned area {P["total"]:,} SF ({round(P["total"]*0.0929)} m²).', 'All glazing bronze-framed, low-E, laminated where below 900 mm; frameless corner at Living.', 'Wet rooms: 50 mm slab drop + waterproof membrane, 150 mm upturn.'])

# ======================= A-102 ROOF PLAN =======================
sh = new('A-102'); v = View(sh, K8, 110, 360)
draw_base(v, light=True, roomtext=False, doors=False)
for r in P['roofs']:
    x0, y0, x1, y1 = ext(r); p, q = v.P(x0, y1), v.P(x1, y0)
    sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill='#ffffff', stroke='#0a0a0a', sw=.5)
    # standing seams
    if r['type'] == 'butterfly' or r.get('axis') == 'y':
        n = int((x1 - x0) / 1.5)
        for i in range(1, n): xx = p[0] + (q[0] - p[0]) * i / n; sh.line(xx, p[1], xx, q[1], .07, '#a3a3a3')
    else:
        n = int((y1 - y0) / 1.5)
        for i in range(1, n): yy2 = p[1] + (q[1] - p[1]) * i / n; sh.line(p[0], yy2, q[0], yy2, .07, '#a3a3a3')
    for hx0, hy0, hx1, hy1 in r.get('holes', []):
        a_, b_ = v.P(hx0, hy1), v.P(hx1, hy0); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#f5f5f5', sw=.35); sh.line(a_[0], a_[1], b_[0], b_[1], .15); sh.line(a_[0], b_[1], b_[0], a_[1], .15)
        sh.text(b_[0] + 1, a_[1] - .5, 'SKYLIGHT', 1.8, weight=600)
    cx, cy = v.P((x0 + x1) / 2, (y0 + y1) / 2)
    if r['type'] == 'butterfly':
        vy = v.P(0, r['valley'])[1]; sh.line(p[0], vy, q[0], vy, .45, dash='3,1')
        sh.text(cx, vy - 1.5, f"VALLEY GUTTER  T.O. ROOF +{ftin(r['hv'] + .9)}", 2.1, 'middle', 600)
        for yy_ in (r['valley'] + 6, r['valley'] - 8):
            a_ = v.P(cx / 1 and (x0 + x1) / 2, yy_); sh.line(a_[0], a_[1] - 4, a_[0], a_[1] + 4, .3)
            dirn = 1 if yy_ > r['valley'] else -1; tip = (a_[0], a_[1] + 4 * dirn); sh.poly([(tip[0] - 1, tip[1] - 2 * dirn), tip, (tip[0] + 1, tip[1] - 2 * dirn)], fill='#0a0a0a', close=True, sw=.1)
        sh.text(cx + 3, p[1] + 6, f"BUTTERFLY ROOF ({r['id'].upper()}) · EAVE +{ftin(r['he'] + .9)}", 2.3, 'start', 600, font='Khand')
    else:
        hi = max(r['h0'], r['h1']); lo = min(r['h0'], r['h1'])
        if r['axis'] == 'y': d = (0, 1 if r['h1'] < r['h0'] else -1)
        else: d = (1 if r['h1'] < r['h0'] else -1, 0)
        sh.line(cx - d[0] * 8, cy + d[1] * 8, cx + d[0] * 8, cy - d[1] * 8, .35)
        tip = (cx + d[0] * 8, cy - d[1] * 8); sh.circle(tip[0], tip[1], .8, '#0a0a0a')
        rise = (hi - lo) / ((r['y1'] - r['y0']) if r['axis'] == 'y' else (r['x1'] - r['x0'])) * 12
        sh.text(cx, cy + 4.5, f"SHED ROOF ({r['id'].upper()})", 2.3, 'middle', 600, font='Khand')
        sh.text(cx, cy + 7.6, f"{rise:.1f}:12 SLOPE · +{ftin(hi + .4)} TO +{ftin(lo + .4)}", 1.9, 'middle')
for e in EL:
    if e['layer'] == 'plumb' and e['cat'] == 'rain' and e.get('tag') in ('G', 'DS'):
        if e.get('tag') == 'G': a_, b_ = v.P(*e['pts'][0]), v.P(*e['pts'][1]); sh.line(a_[0], a_[1], b_[0], b_[1], .7, '#525252')
        else: a_ = v.P(*e['pts'][0]); sh.circle(a_[0], a_[1], 1.2, '#ffffff', sw=.35); sh.circle(a_[0], a_[1], .4, '#0a0a0a')
for e in layer('solar'):
    if e['cat'] == 'module':
        g = e['g'][0]; a_, b_ = v.P(g[1], g[5]), v.P(g[4], g[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#e5e5e5', sw=.2)
sh.text(*v.P(40, 88.5), f"{SOLAR['kwp']} kWp PV ({SOLAR['modules']} x 455 W), SEE E-102", 2, 'middle', 600)
title_mark(sh, 110, 560, '1', 'Roof Plan', '1/8" = 1\'-0"'); north(sh, 450, 70)
legend(sh, 480, 60, [('line', {'w': .7, 'c': '#525252'}, 'Gutter, 150 x 125 mm AZ steel'), ('sym', {'f': lambda x, y: (sh.circle(x, y, 1.2, '#ffffff', sw=.35), sh.circle(x, y, .4, '#0a0a0a'))}, 'Downspout / rain chain to buried leader'),
                     ('line', {'w': .45, 'dash': '3,1'}, 'Valley gutter'), ('line', {'w': .07, 'c': '#a3a3a3'}, 'Standing seam at 450 mm'), ('sym', {'f': lambda x, y: (sh.line(x - 4, y, x + 3, y, .35), sh.circle(x + 3, y, .8, '#0a0a0a'))}, 'Slope (dot = low side)')], 'Roof Legend')
sh.tbnotes('Roof Notes', ['Standing seam 0.5 mm AZ150, 75 mm PIR, vapor-open underlay on steel C-purlins (S-102).', 'Deep eaves 4-8 ft: cantilevered rafters; confirm for 0.6-1.0 kPa wind uplift (TIS / DPT 1311).', 'All roofs drain to the rainwater ring (P-101) and two 19,000 L tanks.'])

# ======================= A-201 ELEVATIONS =======================
sh = new('A-201'); k = K8
def elev(ox, oy, view, label, n):
    # view: 'N' looks south (x left->right reversed), 'S' looks north (x left->right), 'E' looks west (y left->right), 'W' looks east (y right->left)
    def H(px, py):
        if view == 'S': return px
        if view == 'N': return 100 - px
        if view == 'E': return py
        return 85 - py
    def depth(px, py):
        return {'S': -py, 'N': py, 'E': px, 'W': -px}[view]
    items = []
    for r in P['roofs']:
        x0, y0, x1, y1 = ext(r)
        if view in ('N', 'S'):
            yy_ = y1 if view == 'N' else y0
            a, b = sorted((H(x0, 0), H(x1, 0)))
            if r['type'] == 'butterfly': z0 = roofUnderside(r, x0, yy_); pts = [(a, z0), (b, z0), (b, z0 + .9), (a, z0 + .9)]
            elif r['axis'] == 'y': z0 = shedH(r, x0, yy_) - .6; pts = [(a, z0), (b, z0), (b, z0 + 1), (a, z0 + 1)]
            else:
                za, zb = shedH(r, x0, 0) - .6, shedH(r, x1, 0) - .6
                if view == 'N': za, zb = zb, za
                pts = [(a, za), (b, zb), (b, zb + 1), (a, za + 1)]
            items.append((depth(0, yy_), 'roof', pts))
        else:
            xx_ = x1 if view == 'E' else x0
            a, b = sorted((H(0, y0), H(0, y1)))
            if r['type'] == 'butterfly':
                ys_ = [y0, r['valley'], y1]; pts_b = [(H(0, q_), roofUnderside(r, xx_, q_)) for q_ in ys_]; pts_b.sort()
                pts = pts_b + [(pp[0], pp[1] + .9) for pp in reversed(pts_b)]
            elif r['axis'] == 'x': z0 = shedH(r, xx_, 0) - .6; pts = [(a, z0), (b, z0), (b, z0 + 1), (a, z0 + 1)]
            else:
                za, zb = shedH(r, 0, y0) - .6, shedH(r, 0, y1) - .6
                if view == 'W': za, zb = zb, za
                pts = [(a, za), (b, zb), (b, zb + 1), (a, za + 1)]
            items.append((depth(xx_, 0), 'roof', pts))
    for w in WALLS:
        if not w['ext']: continue
        facing = (w['o'] == 'h' and ((view == 'N' and w['pos'] is None and w['neg']) or (view == 'S' and w['neg'] is None and w['pos']))) or \
                 (w['o'] == 'v' and ((view == 'E' and w['pos'] is None and w['neg']) or (view == 'W' and w['neg'] is None and w['pos'])))
        if not facing: continue
        # skip courtyard-facing walls (hidden behind the far wing) unless they are the outermost
        if w['o'] == 'h': a, b = sorted((H(w['a'], 0), H(w['b'], 0))); d_ = depth(0, w['c'])
        else: a, b = sorted((H(0, w['a']), H(0, w['b']))); d_ = depth(w['c'], 0)
        items.append((d_, 'wall', (a, b, w)))
    items.sort(key=lambda t: t[0])
    def E(h, z): return (ox + h * k, oy - z * k)
    for d_, kind, data in items:
        if kind == 'roof':
            sh.poly([E(*pp) for pp in data], fill='#ffffff', sw=.45, close=True)
            sh.poly([E(*pp) for pp in data[:2]], sw=.2)
        else:
            a, b, w = data; hh = min(w['h'], 12)
            p, q = E(a, hh), E(b, 0)
            clad = P['clad'].get(ROOMS.get(w['pos'] or w['neg'], {}).get('wing'), 'whiteplaster')
            sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill='#ffffff', sw=.3)
            if clad == 'charred':
                n_ = int((b - a) / .5)
                for i in range(1, n_): xx = p[0] + (q[0] - p[0]) * i / n_; sh.line(xx, p[1], xx, q[1], .06, '#737373')
            for f in w['feats']:
                s0, s1 = heights(f, w['h']); s1 = min(s1, hh - .3)
                fa, fb = sorted((H(f['a'], 0), H(f['b'], 0)) if w['o'] == 'h' else (H(0, f['a']), H(0, f['b'])))
                a_, b_ = E(fa, s1), E(fb, s0)
                sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#f5f5f5', sw=.3)
                if f['k'] in ('glass', 'slide', 'exdoor', 'front'):
                    nn = max(1, int((fb - fa) / 4))
                    for i in range(1, nn): xx = a_[0] + (b_[0] - a_[0]) * i / nn; sh.line(xx, a_[1], xx, b_[1], .15)
                sh.line(a_[0], a_[1], b_[0], b_[1], .06, '#a3a3a3')
    g0, g1 = E(-8, 0), E(108 if view in 'NS' else 93, 0)
    sh.line(g0[0], g0[1], g1[0], g1[1], .8)
    for zlab, z in (('FFL ±0', 0), ("T.O. WALL", 10), ("T.O. ROOF (MAX)", 16.4)):
        a_ = E(-8, z); sh.line(a_[0], a_[1], a_[0] + 4, a_[1], .2); sh.text(a_[0] - 1, a_[1] + .8, f"{zlab} {'' if not z else '+' + ftin(z)}", 1.9, 'end')
    title_mark(sh, ox, oy + 12, n, label, '1/8" = 1\'-0"')
elev(60, 120, 'N', 'North Elevation (Mountain Side)', '1'); elev(430, 120, 'S', 'South Elevation (Pool Side)', '2')
elev(60, 290, 'E', 'East Elevation (Sleeping Wing)', '3'); elev(430, 290, 'W', 'West Elevation (Arrival)', '4')
legend(sh, 60, 350, [('rect', {'fill': '#ffffff'}, 'White lime plaster with black timber trim'), ('sym', {'f': lambda x, y: [sh.rect(x - 3, y - 2.5, 6, 3, '#ffffff', sw=.25)] + [sh.line(x - 3 + i, y - 2.5, x - 3 + i, y + .5, .06, '#737373') for i in range(1, 6)]}, 'Charred timber (yakisugi) siding'),
                    ('rect', {'fill': '#f5f5f5'}, 'Bronze-framed glazing / doors'), ('rect', {}, 'Standing-seam roof, charred fascia')], 'Material Legend')
sh.tbnotes('Elevation Notes', ['Elevations generated from the shared model; walls are drawn to 12 ft max where they continue up under the roof.', 'Grade shown level; final site grading and retaining by civil engineer.'])

# ======================= A-301 SECTIONS =======================
sh = new('A-301')
k = 25.4 * 3 / 16
def section(ox, oy, axis, at, label, n, lo, hi):
    def E(h, z): return (ox + (h - lo) * k, oy - z * k)
    # ground + footings
    g0, g1 = E(lo - 4, 0), E(hi + 4, 0)
    sh.rect(g0[0], g0[1] + 0.33 * k * 0, g1[0] - g0[0], 6 * k, fill='#fafafa', stroke='none')
    sh.line(g0[0], g0[1] + .41 * k, g1[0], g1[1] + .41 * k, .5)
    for e in layer('struct'):
        for gg in e['g']:
            if gg[0] != 'b': continue
            _, x0, y0, z0, x1, y1, z1 = gg
            if axis == 'x' and x0 - .05 <= at <= x1 + .05: a, b = y0, y1
            elif axis == 'y' and y0 - .05 <= at <= y1 + .05: a, b = x0, x1
            else: continue
            if b < lo - 4 or a > hi + 4: continue
            if e['cat'] in ('footing', 'beam', 'slab', 'column', 'pool'):
                p, q = E(a, z1), E(b, z0); sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill='#bdbdbd' if e['cat'] != 'column' else '#737373', stroke='#0a0a0a', sw=.15)
    for w in WALLS:
        if axis == 'x' and w['o'] == 'h' and w['a'] <= at <= w['b']: c_ = w['c']
        elif axis == 'y' and w['o'] == 'v' and w['a'] <= at <= w['b']: c_ = w['c']
        else: continue
        t = .67 if w['ext'] else .33
        f = next((f for f in w['feats'] if f['a'] <= at <= f['b']), None)
        if f is None: spans = [(0, w['h'])]
        else:
            s0, s1 = heights(f, w['h']); spans = ([(0, s0)] if s0 > 0 else []) + [(s1, w['h'])]
            if f['k'] != 'open':
                a_, b_ = E(c_ - .1, s1), E(c_ + .1, s0); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#e5e5e5', sw=.2)
        for z0, z1 in spans:
            p, q = E(c_ - t / 2, z1), E(c_ + t / 2, z0); sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill='#3d3d3d', sw=.15)
    for r in P['roofs']:
        x0, y0, x1, y1 = ext(r)
        if axis == 'x' and x0 <= at <= x1: a, b = y0, y1; f_ = lambda s: (at, s)
        elif axis == 'y' and y0 <= at <= y1: a, b = x0, x1; f_ = lambda s: (s, at)
        else: continue
        ss = [a + (b - a) * i / 40 for i in range(41)]
        if r['type'] == 'butterfly' and axis == 'x': ss = sorted(set(ss + [r['valley']]))
        bot_ = [E(s_, roofUnderside(r, *f_(s_))) for s_ in ss]; top_ = [E(s_, roofTop(r, *f_(s_))) for s_ in reversed(ss)]
        sh.poly(bot_ + top_, fill='#0a0a0a', close=True, sw=.1)
        # rafter / beam zone below
        sh.poly([(p[0], p[1] + .5 * k) for p in bot_], sw=.2, dash='1,.6')
    for r in P['rooms']:
        if axis == 'x' and r['x0'] <= at <= r['x1']: a, b = r['y0'], r['y1']
        elif axis == 'y' and r['y0'] <= at <= r['y1']: a, b = r['x0'], r['x1']
        else: continue
        p = E((a + b) / 2, 4.5)
        for i, l in enumerate(wrap(r['name'].upper(), max(6, int((b - a) * k / 1.5)))): sh.text(p[0], p[1] + i * 2.6, l, 2.1, 'middle', 600, font='Khand')
        cz = min(r['h'], roofAt(*((at, (a + b) / 2) if axis == 'x' else ((a + b) / 2, at))))
        sh.text(p[0], p[1] + 9, f"CLG +{ftin(cz)}", 1.8, 'middle', fill='#525252')
    if axis == 'x':
        pl = S['pool']; p, q = E(pl['y0'], 0), E(pl['y1'], -4.6); sh.rect(p[0], p[1], q[0] - p[0], q[1] - p[1], fill='#f5f5f5', sw=.3); sh.text((p[0] + q[0]) / 2, (p[1] + q[1]) / 2, 'POOL', 2, 'middle', 600)
    for zlab, z in (('FFL ±0', 0), ('U/S FOOTING', FT_Z0)):
        a_ = E(lo - 4, z); sh.line(a_[0] - 4, a_[1], a_[0], a_[1], .2); sh.text(a_[0] - 5, a_[1] + .8, f"{zlab} {'' if not z else ftin(z).replace(chr(39), chr(39))}", 1.9, 'end')
    title_mark(sh, ox, oy + 36, n, label, '3/16" = 1\'-0"')
section(70, 140, 'x', 60, 'Section A-A (North-South Through Living, Courtyard, Wet Room, Pool)', '1', -26, 90)
section(70, 320, 'y', 67, 'Section B-B (East-West Through Kitchen, Dining, Living, Master)', '2', 6, 100)
section(70, 490, 'y', 11, 'Section C-C (East-West Through Studio, Gym, Wet Room, Changing)', '3', 0, 100)
sh.tbnotes('Section Notes', ['Section cuts at x = 60 ft (A), y = 67 ft (B) and y = 11 ft (C) in model coordinates; see key on S-101.', 'Footing depth 1.5-1.6 m assumed pending soil investigation.', 'Black = roof assembly; dashed = steel rafter zone; dark gray = walls cut; light gray = RC.'])

# ======================= S-101 FOUNDATION + STRUCTURE =======================
sh = new('S-101'); v = View(sh, K8, 120, 340)
draw_base(v, light=True, roomtext=False, doors=False)
for g in GRID['x']:
    a_, b_ = v.P(g['v'], 92), v.P(g['v'], -8); sh.line(a_[0], a_[1], b_[0], b_[1], .12, '#737373', '6,1,1,1')
    sh.circle(a_[0], a_[1] - 3, 3, '#ffffff', sw=.25); sh.text(a_[0], a_[1] - 2.1, g['n'], 2.4, 'middle', 600, font='Khand')
for g in GRID['y']:
    a_, b_ = v.P(-6, g['v']), v.P(104, g['v']); sh.line(a_[0], a_[1], b_[0], b_[1], .12, '#737373', '6,1,1,1')
    sh.circle(a_[0] - 3, a_[1], 3, '#ffffff', sw=.25); sh.text(a_[0] - 3, a_[1] + .9, g['n'], 2.4, 'middle', 600, font='Khand')
for e in layer('struct'):
    gg = e['g'][0]
    if e['cat'] == 'footing':
        a_, b_ = v.P(gg[1], gg[5]), v.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], sw=.25, dash='1,.6')
        sh.text(b_[0] + .3, a_[1] - .3, e['tag'], 1.5, weight=600)
    elif e['cat'] == 'beam' and 'GB' in e['tag']:
        a_, b_ = v.P(gg[1], gg[5]), v.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], sw=.15, dash='1.2,.6')
    elif e['cat'] == 'column':
        a_, b_ = v.P(gg[1], gg[5]), v.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#0a0a0a', sw=.1)
    elif e['cat'] == 'pool':
        for g2 in e['g'][1:]:
            a_, b_ = v.P(g2[1], g2[5]), v.P(g2[4], g2[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#bdbdbd', sw=.15)
        sh.text(*v.P(71, -16), 'RC POOL SHELL SP1', 2.2, 'middle', 600)
    elif e['cat'] == 'beam' and e['tag'] == 'TB1':
        a_, b_ = v.P(gg[1], gg[5]), v.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#525252', sw=.1); sh.text((a_[0] + b_[0]) / 2, a_[1] - 1.5, 'TB1', 1.8, 'middle', 600)
for axis, at, lab in (('x', 60, 'A'), ('y', 67, 'B'), ('y', 11, 'C')):
    if axis == 'x': a_, b_ = v.P(at, 95), v.P(at, -26)
    else: a_, b_ = v.P(-8, at), v.P(106, at)
    sh.line(a_[0], a_[1], b_[0], b_[1], .3, dash='4,1,1,1')
    for p in (a_, b_): sh.circle(p[0], p[1], 2.4, '#0a0a0a'); sh.text(p[0], p[1] + .9, lab, 2.4, 'middle', 600, '#fafafa', 'Khand')
sh.text(*v.P(30, -18), 'SLAB S1: 125 mm RC on ground beams, DB12 @ 200 both ways; wet rooms dropped 50 mm', 2.1)
title_mark(sh, 120, 560, '1', 'Foundation + Structural Plan', '1/8" = 1\'-0"'); north(sh, 460, 60)
rows = [['F1', 'Spread footing (corner / edge)', '1,500 x 1,500 x 400', '10-DB16 each way, 75 mm cover', sum(1 for e in EL if e.get('tag') == 'F1')],
        ['F2', 'Spread footing (interior / multi-bay)', '1,800 x 1,800 x 400', '12-DB16 each way', sum(1 for e in EL if e.get('tag') == 'F2')],
        ['C1', 'RC column', '250 x 250', '4-DB16 (8-DB16 at TB1), RB9 ties @ 150', sum(1 for e in EL if e.get('tag') == 'C1')],
        ['GB1', 'Ground beam', '200 x 500', '3-DB16 top + bot, RB9 @ 150', sum(1 for e in EL if e.get('tag') == 'GB1')],
        ['RB1', 'Roof ring beam (exterior)', '200 x 400', '2-DB16 top + bot, RB9 @ 150', sum(1 for e in EL if e.get('tag') == 'RB1')],
        ['RB2', 'Roof beam (interior bearing)', '150 x 300', '2-DB12 top + bot, RB6 @ 150', sum(1 for e in EL if e.get('tag') == 'RB2')],
        ['TB1', 'Steel transfer beam over wide glazing', 'W250 assumed', 'Engineer to size, deflection L/600 for glass', sum(1 for e in EL if e.get('tag') == 'TB1')],
        ['S1', 'Suspended floor slab', '125 thick', 'DB12 @ 200 B.W., WP membrane in wet rooms', sum(1 for e in EL if e.get('tag') == 'S1')],
        ['SP1', 'Pool shell', '250 walls + floor', 'Waterproof concrete, DB16 @ 150 E.F.', 1]]
sh.text(490, 300, 'STRUCTURAL SCHEDULE', 3, weight=600, font='Khand')
yy = table(sh, 490, 303, ['Mark', 'Element', 'Size (mm)', 'Reinforcement (Indicative)', 'Qty'], rows, [12, 62, 36, 72, 10], 1.9)
y2 = legend(sh, 490, yy + 10, [('rect', {'fill': '#0a0a0a'}, 'RC column C1'), ('rect', {'dash': '1,.6'}, 'Footing (below)'), ('rect', {'dash': '1.2,.6'}, 'Ground beam GB1 (below)'), ('line', {'w': .12, 'c': '#737373', 'dash': '6,1,1,1'}, 'Structural grid')], 'Structural Legend')
sh.tbnotes('Structural Notes (Indicative)', ['Concrete: fc\' 240 ksc (cylinder) footings + frame; 280 ksc pool. Rebar: SD40 deformed, SR24 round.', 'Allowable soil bearing assumed 10 t/m² pending a soil test; footings 1.5 m below grade.', 'Seismic zone + wind per DPT 1301/1302 and 1311 to be confirmed by a licensed Thai civil engineer (Saman Witsawakon).', 'All sizes are concept placeholders for coordination only.'])

# ======================= S-102 FRAMING + ROOF FRAMING =======================
sh = new('S-102'); K16 = 25.4 * 3 / 32
v1 = View(sh, K16, 50, 260); v2 = View(sh, K16, 400, 260)
draw_base(v1, light=True, roomtext=False, doors=False); draw_base(v2, light=True, roomtext=False, doors=False)
WCOL = {'W1': ('#0a0a0a', None), 'W2': ('#525252', None), 'W3': ('#0a0a0a', '0.6,0.4'), 'W4': ('#0a0a0a', '2,.5')}
for e in layer('framing'):
    if e['cat'] == 'wall':
        x0, y0, x1, y1 = e['plan']; a_, b_ = v1.P(x0, y0), v1.P(x1, y1)
        c_, d_ = WCOL[e['tag']]; sh.line(a_[0], a_[1], b_[0], b_[1], 1.0 if e['tag'] in ('W1', 'W4') else .6, c_, d_)
    elif e['cat'] == 'lintel':
        gg = e['g'][0]; a_, b_ = v1.P(gg[1], gg[5]), v1.P(gg[4], gg[2]); sh.rect(a_[0] - .3, a_[1] - .3, b_[0] - a_[0] + .6, b_[1] - a_[1] + .6, stroke='#737373', sw=.15)
for r in P['rooms']:
    p = v1.P((r['x0'] + r['x1']) / 2, (r['y0'] + r['y1']) / 2); sh.text(p[0], p[1] + .6, r['id'], 1.6, 'middle', fill='#737373')
for e in layer('roof'):
    for gg in e['g']:
        if gg[0] != 's': continue
        a_, b_ = v2.P(gg[1], gg[2]), v2.P(gg[4], gg[5])
        sh.line(a_[0], a_[1], b_[0], b_[1], .3 if e['cat'] == 'rafter' else .1, '#0a0a0a' if e['cat'] == 'rafter' else '#737373', None if e['cat'] == 'rafter' else '1,.5')
    if e['cat'] == 'trimmer':
        gg = e['g'][0]; a_, b_ = v2.P(gg[1], gg[5]), v2.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], fill='#ffffff', sw=.4)
for e in layer('struct'):
    if e['cat'] == 'column':
        gg = e['g'][0]; a_ = v2.P((gg[1] + gg[4]) / 2, (gg[2] + gg[5]) / 2); sh.rect(a_[0] - .5, a_[1] - .5, 1, 1, fill='#0a0a0a', stroke='none')
for r in P['roofs']:
    x0, y0, x1, y1 = ext(r); p = v2.P((x0 + x1) / 2, (y0 + y1) / 2); sh.rect(p[0] - 9, p[1] - 2.6, 18, 3.6, '#ffffff', 'none'); sh.text(p[0], p[1], r['id'].upper() + ' ROOF', 1.8, 'middle', 600)
title_mark(sh, 50, 300, '1', 'Wall Framing Plan', '3/32" = 1\'-0"'); title_mark(sh, 400, 300, '2', 'Roof Framing Plan', '3/32" = 1\'-0"')
north(sh, 735, 30)
wt = {}
for e in layer('framing'):
    if e['cat'] == 'wall': wt.setdefault(e['tag'], [e['type'], e['spec'], 0]); wt[e['tag']][2] += math.hypot(e['plan'][2] - e['plan'][0], e['plan'][3] - e['plan'][1])
sh.text(50, 335, 'WALL TYPES', 3, weight=600, font='Khand')
yy = table(sh, 50, 338, ['Type', 'Description', 'Build-Up', 'Length'], [[k_, a, b, f"{round(c)} ft"] for k_, (a, b, c) in sorted(wt.items())], [12, 58, 230, 18], 1.9)
y2 = legend(sh, 50, yy + 10, [('line', {'w': 1.0}, 'W1 AAC exterior wall 200 mm'), ('line', {'w': .6, 'c': '#525252'}, 'W2 LGS steel stud partition'), ('line', {'w': .6, 'dash': '0.6,0.4'}, 'W3 Acoustic steel stud (studio + bedrooms)'), ('line', {'w': 1.0, 'dash': '2,.5'}, 'W4 RC wall (pool, retaining, cistern, shear)'), ('rect', {}, 'L1 RC lintel over opening')], 'Wall Legend')
sh.text(400, 440, 'ROOF FRAMING SCHEDULE', 3, weight=600, font='Khand')
rr = [['R1', 'Steel rafter', 'H-150 x 75 x 5 x 7, SS400, @ 1.2 m, cantilevers to eaves', sum(1 for e in EL if e.get('tag') == 'R1')],
      ['P1', 'C-purlin', 'C-100 x 50 x 20 x 2.3, @ 1.1 m max', sum(1 for e in EL if e.get('tag') == 'P1')],
      ['SK', 'Skylight trimmer', 'RHS 100 x 50 x 3.2 frame', sum(1 for e in EL if e.get('tag') == 'SK')],
      ['--', 'Roof deck', 'Standing seam 0.5 mm AZ150 + 75 mm PIR + underlay', 6],
      ['--', 'Connections', 'Rafter to RB1 via cast-in plate 200 x 200 x 12 + 4-M16 anchors', '-'],
      ['--', 'Corrosion', 'Hot-dip galvanized or 2-coat epoxy (humid mountain climate)', '-']]
yy = table(sh, 400, 443, ['Mark', 'Member', 'Section / Spec', 'Qty'], rr, [12, 34, 100, 12], 1.9)
legend(sh, 400, yy + 10, [('line', {'w': .3}, 'Steel rafter R1'), ('line', {'w': .1, 'c': '#737373', 'dash': '1,.5'}, 'C-purlin P1'), ('rect', {'fill': '#0a0a0a'}, 'Column below (bearing)')], 'Roof Framing Legend')
sh.tbnotes('Framing Notes', ['Interior LGS: 0.75 mm BMT studs, deflection head track at slab/beam.', 'AAC: thin-bed mortar; RC stiffener columns 100 x wall width at max 3 m and at openings > 2 m.', 'Studio double-stud walls on separate tracks + resilient ceiling (STC 60+).'])

# ======================= E-101 POWER + LIGHTING =======================
sh = new('E-101'); v = View(sh, K8, 90, 345)
draw_base(v, grey=True, roomtext=False)
for r in P['rooms']:
    p = v.P((r['x0'] + r['x1']) / 2, (r['y0'] + r['y1']) / 2 - 1.4); sh.text(p[0], p[1], r['id'], 1.8, 'middle', fill='#a3a3a3')
def sym_out(x, y): sh.circle(x, y, .9, '#ffffff', sw=.22); sh.line(x - .45, y - .5, x - .45, y + .5, .18); sh.line(x + .45, y - .5, x + .45, y + .5, .18)
def sym_light(x, y, r=.9): sh.circle(x, y, r, '#ffffff', sw=.22); sh.line(x - r * .7, y - r * .7, x + r * .7, y + r * .7, .15); sh.line(x - r * .7, y + r * .7, x + r * .7, y - r * .7, .15)
def sym_pend(x, y): sh.circle(x, y, 1.3, '#0a0a0a', sw=.2); sh.circle(x, y, .5, '#ffffff', sw=0)
def sym_data(x, y): sh.poly([(x, y - 1), (x - 1, y + .8), (x + 1, y + .8)], '#ffffff', sw=.22, close=True)
def sym_ap(x, y): sh.rect(x - 1.1, y - 1.1, 2.2, 2.2, '#ffffff', sw=.22); sh.text(x, y + .6, 'AP', 1.2, 'middle', 600)
def sym_j(x, y): sh.rect(x - 1, y - 1, 2, 2, '#ffffff', sw=.22); sh.text(x, y + .55, 'J', 1.4, 'middle', 600)
def sym_panel(x, y): sh.rect(x - 2, y - 1.2, 4, 2.4, '#0a0a0a', sw=.2)
for e in EL:
    if e['layer'] != 'elec': continue
    if e['cat'] == 'homerun' and min(p[0] for p in e['pts']) > -10:
        pts = [v.P(*p) for p in e['pts']]; sh.poly(pts, stroke='#737373', sw=.12, dash='2,.8')
for e in EL:
    if e['layer'] != 'elec' or 'pos' not in e or e['pos'][0] < -10: continue
    x, y = v.P(*e['pos'])
    if e['cat'] == 'outlet': sym_out(x, y)
    elif e['cat'] == 'light': sym_pend(x, y) if e.get('tag') == 'PL' else sym_light(x, y)
    elif e['cat'] == 'data': sym_data(x, y)
    elif e['cat'] == 'ap': sym_ap(x, y)
    elif e['cat'] == 'equip': sym_j(x, y)
for k_, p_ in PANELS.items():
    x, y = v.P(p_['x'], p_['y']); sym_panel(x, y); sh.rect(x + 2.5, y - 2.4, len(k_) * 1.4 + 2, 3.4, '#ffffff', sw=.2); sh.text(x + 3.5, y, k_, 2, weight=600)
rk = v.P(20, 24.2); sh.rect(rk[0] - 2, rk[1] - 2, 4, 4, '#ffffff', sw=.35); sh.text(rk[0] + 3, rk[1] + 3.5, 'AV/NETWORK RACK (405)', 1.7, weight=600)
fd = next(e for e in EL if e.get('tag') == 'F-1'); sh.poly([v.P(126, 4.3), v.P(99.6, 4.3), v.P(99.6, 51), v.P(97.3, 51)], stroke='#0a0a0a', sw=.45, dash='3,1,.6,1')
sh.text(*v.P(106, 5.3), 'F-1 UG FEEDER', 1.7, weight=600)
sh.text(*v.P(-2, 40), 'TO EV CHARGER (CARPORT) MDB-EV 32 A, SEE SITE', 1.7, 'end', 600)
site_outline(v)
title_mark(sh, 90, 560, '1', 'Power + Lighting Plan', '1/8" = 1\'-0"'); north(sh, 400, 50)
legend(sh, 90, 390, [('sym', {'f': sym_out}, 'Duplex receptacle 16 A (RCBO in wet areas)'), ('sym', {'f': sym_light}, 'LED downlight 2700 K dimmable'), ('sym', {'f': sym_pend}, 'Decorative pendant / lantern'),
                     ('sym', {'f': sym_j}, 'Dedicated circuit / equipment connection'), ('sym', {'f': sym_data}, 'Data outlet 2 x Cat6A'), ('sym', {'f': sym_ap}, 'Wi-Fi access point (PoE)'),
                     ('sym', {'f': sym_panel}, 'Distribution board'), ('line', {'w': .12, 'c': '#737373', 'dash': '2,.8'}, 'Circuit home run (conduit in ceiling)'), ('line', {'w': .45, 'dash': '3,1,.6,1'}, 'Underground feeder')], 'Electrical Legend')
sh.text(470, 40, 'PANEL SCHEDULES', 3, weight=600, font='Khand')
yy = 43
for pnl in ('MDB', 'SDB-W', 'SDB-S'):
    cs = [c for c in CIRC if c['panel'] == pnl]
    sh.text(470, yy + 4, f"{PANELS[pnl]['name']}  ·  {PANELS[pnl]['size']}", 2.2, weight=600); yy += 5.5
    yy = table(sh, 470, yy, ['Ckt', 'Description', 'Load', 'Breaker'], [[c['no'], c['desc'], c['load'], c['breaker']] for c in cs], [16, 160, 30, 30] if False else [15, 140, 22, 30], 1.6) + 3
sh.tbnotes('Electrical Notes', ['PEA 3-phase 400/230 V service; TN-C-S earthing per EIT standard, < 5 ohm.', 'RCBO (30 mA) on all receptacle, wet-area and outdoor circuits.', 'Light switch style is an open item (Round 2); switching and dimming zones to be shown at CD.', 'Wire sizes per EIT 2001-56 at CD; load calc pending equipment selection.'])

# ======================= P-101 PLUMBING + SITE UTILITIES =======================
sh = new('P-101'); K332 = 25.4 * 3 / 32; v = View(sh, K332, 70, 330)
draw_base(v, grey=True, roomtext=False)
site_outline(v)
STY = {'Domestic Cold Water': ('#0a0a0a', .3, None), 'Domestic Hot Water': ('#0a0a0a', .3, '2.5,.6,.6,.6'), 'Sanitary Drainage': ('#0a0a0a', .55, '3,1'),
       'Rainwater Harvesting': ('#737373', .45, '5,1.2'), 'Saltwater Pool': ('#0a0a0a', .35, '1,.6'), 'Water Supply': ('#0a0a0a', .3, None), 'Wastewater': ('#0a0a0a', .55, '3,1')}
for e in EL:
    if e['layer'] not in ('plumb', 'site') or 'pts' not in e: continue
    c_, w_, d_ = STY.get(e['system'], ('#0a0a0a', .3, None)); sh.poly([v.P(*p[:2]) for p in e['pts']], stroke=c_, sw=w_, dash=d_)
for e in EL:
    if e['layer'] not in ('plumb', 'site'): continue
    if 'pos' in e:
        x, y = v.P(*e['pos'])
        if e['cat'] == 'fixture': sh.circle(x, y, 1.1, '#ffffff', sw=.3); sh.circle(x, y, .35, '#0a0a0a')
        elif e['cat'] == 'vent': sh.circle(x, y, .7, '#ffffff', sw=.25); sh.line(x - .5, y - .5, x + .5, y + .5, .2)
        elif e.get('tag') in ('DS',): pass
        elif e['cat'] in ('equip', 'pool', 'tank', 'well', 'pad'):
            gg = e['g'][0] if e['g'] else None
            if gg and gg[0] == 'b':
                a_, b_ = v.P(gg[1], gg[5]), v.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#ffffff', sw=.3)
            elif gg and gg[0] == 'c':
                sh.circle(x, y, gg[3] * v.k, '#ffffff', sw=.35)
            if e.get('tag') and e['cat'] != 'pad': sh.text(x, y + .7, e['tag'], 1.7, 'middle', 600)
for e in EL:
    if e['layer'] == 'site' and e['cat'] == 'screen':
        x0, y0, x1, y1 = e['plan']; a_, b_ = v.P(x0, y1), v.P(x1, y0); sh.text(a_[0] + 1, a_[1] - 1.2, 'UTILITY YARD (7\' CHARRED-TIMBER SCREEN)', 1.8, weight=600)
lbl = [(124, 10, 'CW SERVICE 32 mm'), (12, 86, 'KITCHEN WASTE VIA GT-1'), (-3, 40, 'RAINWATER RING 150 mm'), (60, -14, 'SALTWATER POOL'), (99, -26, 'BACKWASH TO SOAKAWAY'), (75.6, 30, 'BLDG DRAIN 100 mm'), (60, -52, 'DRAIN FIELD')]
for x, y, t in lbl:
    p = v.P(x, y); sh.rect(p[0] - len(t) * .55, p[1] - 2.2, len(t) * 1.1, 2.9, '#ffffff', 'none'); sh.text(p[0], p[1], t, 1.6, 'middle', 600)
title_mark(sh, 70, 560, '1', 'Plumbing + Site Utilities Plan', '3/32" = 1\'-0"'); north(sh, 60, 40)
legend(sh, 460, 40, [('line', {'w': .3}, 'Domestic cold water (PPR)'), ('line', {'w': .3, 'dash': '2.5,.6,.6,.6'}, 'Domestic hot water + recirculation'), ('line', {'w': .55, 'dash': '3,1'}, 'Sanitary drainage (uPVC, under slab)'),
                     ('sym', {'f': lambda x, y: (sh.circle(x, y, .7, '#ffffff', sw=.25), sh.line(x - .5, y - .5, x + .5, y + .5, .2))}, 'Vent stack through roof'), ('line', {'w': .45, 'c': '#737373', 'dash': '5,1.2'}, 'Rainwater leader + collector'),
                     ('line', {'w': .35, 'dash': '1,.6'}, 'Pool suction / return / fill'), ('sym', {'f': lambda x, y: (sh.circle(x, y, 1.1, '#ffffff', sw=.3), sh.circle(x, y, .35, '#0a0a0a'))}, 'Plumbing fixture')], 'Plumbing Legend')
fx = [e for e in EL if e['cat'] == 'fixture']
from collections import Counter
cnt = Counter((e['type'], e['size']) for e in fx)
sh.text(460, 90, 'FIXTURE SCHEDULE', 3, weight=600, font='Khand')
yy = table(sh, 460, 93, ['Fixture', 'Connection', 'Qty'], [[a, b, n] for (a, b), n in sorted(cnt.items())], [62, 70, 10], 1.75)
eq = [e for e in EL if e['layer'] in ('plumb', 'site') and e['cat'] in ('equip', 'pool', 'tank', 'well') and e.get('tag')]
sh.text(460, yy + 8, 'EQUIPMENT SCHEDULE', 3, weight=600, font='Khand')
table(sh, 460, yy + 11, ['Tag', 'Equipment', 'Specification'], [[e['tag'], e['type'], e['size']] for e in eq], [14, 70, 140], 1.6)
sh.tbnotes('Plumbing Notes', ['Supply: well + rainwater, treated (sediment, carbon, UV, softener), booster pump 3 bar.', 'Sanitary to septic + ATU (TIS 2550 effluent) and drain field; perc test required.', 'Saltwater backwash and pool drain go to a lined soakaway, never to septic or garden.', 'Kitchen through grease interceptor GT-1 (Thai Building Control Act).'])

# ======================= M-101 HVAC =======================
sh = new('M-101'); v = View(sh, K8, 90, 345)
draw_base(v, grey=True, roomtext=False)
site_outline(v)
for r in P['rooms']:
    p = v.P((r['x0'] + r['x1']) / 2, (r['y0'] + r['y1']) / 2 - 1.6); sh.text(p[0], p[1], r['id'], 1.8, 'middle', fill='#a3a3a3')
for e in layer('hvac'):
    if 'pts' in e:
        if e['cat'] == 'lineset': sh.poly([v.P(*p) for p in e['pts']], stroke='#525252', sw=.2, dash='.8,.5')
        elif e['cat'] == 'duct': sh.poly([v.P(*p) for p in e['pts']], stroke='#0a0a0a', sw=.6, dash='4,1')
        else: sh.poly([v.P(*p) for p in e['pts']], stroke='#0a0a0a', sw=.35)
for e in layer('hvac'):
    if 'pos' not in e: continue
    x, y = v.P(*e['pos']); gg = e['g'][0]
    if gg[0] == 'b':
        a_, b_ = v.P(gg[1], gg[5]), v.P(gg[4], gg[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#ffffff', sw=.35)
        if e['cat'] == 'indoor' and 'Cassette' in e['type']: sh.line(a_[0], a_[1], b_[0], b_[1], .15); sh.line(a_[0], b_[1], b_[0], a_[1], .15)
    elif gg[0] == 'c': sh.circle(x, y, gg[3] * v.k, '#ffffff', sw=.3)
    else: sh.circle(x, y, 1, '#ffffff', sw=.3)
    if e['cat'] in ('indoor', 'outdoor', 'erv', 'sauna', 'steam', 'dehum') and e.get('tag') not in ('SI',):
        lab = e['tag']; sz = 1.5
        sh.rect(x - len(lab) * .45, y + 1.4, len(lab) * .9, 2.4, '#ffffff', 'none'); sh.text(x, y + 3.3, lab, sz, 'middle', 600)
title_mark(sh, 90, 560, '1', 'HVAC Plan', '1/8" = 1\'-0"'); north(sh, 400, 50)
legend(sh, 90, 390, [('rect', {}, 'High-wall split indoor unit (R32 inverter)'), ('sym', {'f': lambda x, y: (sh.rect(x - 1.5, y - 1.5, 3, 3, '#ffffff', sw=.3), sh.line(x - 1.5, y - 1.5, x + 1.5, y + 1.5, .15), sh.line(x - 1.5, y + 1.5, x + 1.5, y - 1.5, .15))}, '4-way ceiling cassette'),
                     ('line', {'w': .2, 'c': '#525252', 'dash': '.8,.5'}, 'Refrigerant line set + condensate'), ('line', {'w': .6, 'dash': '4,1'}, 'ERV supply duct'), ('line', {'w': .35}, 'Exhaust / steam line'), ('rect', {'fill': '#ffffff'}, 'Exhaust grille / equipment')], 'HVAC Legend')
units = [e for e in layer('hvac') if e['cat'] in ('indoor', 'outdoor', 'erv', 'sauna', 'steam', 'dehum') and e.get('tag')]
sh.text(470, 40, 'MECHANICAL EQUIPMENT SCHEDULE', 3, weight=600, font='Khand')
table(sh, 470, 43, ['Tag', 'Room', 'Type', 'Capacity / Spec', 'System'], [[e['tag'], ROOMS[e['room']]['name'] if e.get('room') else 'Utility Yard', e['type'], e['size'], e['system']] for e in units], [16, 40, 80, 82, 40] if False else [14, 36, 72, 76, 32], 1.5)
sh.tbnotes('HVAC Notes', ['Cooling sized at about 850 BTU/h per m² (Thai rule of thumb for glazed rooms); verify with a heat-load calc.', 'ERV runs continuously for fresh air + humidity control; bath boost on humidity sensor.', 'Sauna: low inlet behind heater, high exhaust opposite. Steam: vapor-sealed, sloped ceiling, purge fan.'])

# ======================= G-001 COVER =======================
sh = new('G-001')
sh.text(40, 70, 'WEBERMAN RESIDENCE', 22, weight=600, font='Khand', extra=' letter-spacing="1"')
sh.text(40, 84, 'Design Development Concept Construction Set', 7, font='Khand')
sh.text(40, 94, 'Mountain courtyard house, Thailand  ·  Owner: Max Weberman  ·  Issue DD-01, ' + DATE, 3.4, fill='#404040')
sh.rect(40, 100, 128, 10, '#0a0a0a', 'none'); sh.text(104, 107, 'DESIGN DEVELOPMENT, NOT FOR CONSTRUCTION', 4, 'middle', 600, '#fafafa', 'Khand', extra=' letter-spacing="0.5"')
sh.text(40, 130, 'SHEET INDEX', 4.5, weight=600, font='Khand')
yy = table(sh, 40, 134, ['Sheet', 'Title', 'Scale'], [list(q) for q in SHEETS], [22, 100, 32], 3.0)
sh.text(40, yy + 14, 'ONE SHARED MODEL', 4.5, weight=600, font='Khand')
yy2 = yy + 20
from collections import Counter as _C
lc = _C(e['layer'] for e in EL)
for l in wrap(f"Every sheet in this set and the interactive 3D model are generated from one data model: plan.json (rooms, walls, openings, roofs, site) extended into bim.json with {len(EL):,} elements in twelve layers ({", ".join(f"{l['name']} {lc[l['id']]}" for l in LAYERS)}). Change the model and both regenerate, so drawings and 3D always match.", 95):
    sh.text(40, yy2, l, 3); yy2 += 4.6
sh.text(40, yy2 + 8, 'PROJECT DATA', 4.5, weight=600, font='Khand')
pd = [['Conditioned area', f"{P['total']:,} SF ({round(P['total']*0.0929)} m²), single level"], ['Footprint', "94' x 83' around a 36' x 28' courtyard"], ['Structure', 'RC frame on spread footings, AAC + LGS walls, steel roof framing'],
      ['Roofs', 'Standing seam: butterfly (Living) + 5 shed roofs, 4-8 ft eaves'], ['Services', 'PEA 3-phase + solar/battery/generator; well + rainwater; septic + ATU; saltwater pool'], ['Codes (to confirm)', 'Building Control Act B.E. 2522, Ministerial Regs, EIT electrical standard, DPT 1301/1302/1311']]
table(sh, 40, yy2 + 12, ['Item', 'Value'], pd, [40, 150], 2.6, head=False)
# key plan
v = View(sh, K8 * 0.75, 480, 265); draw_base(v, roomtext=False, doors=True); site_outline(v)
for r in P['rooms']:
    p = v.P((r['x0'] + r['x1']) / 2, (r['y0'] + r['y1']) / 2); sh.text(p[0], p[1] + .6, r['id'], 1.8, 'middle', fill='#525252')
for wing, (x, y) in {'LIVING PAVILION': (41, 82), 'SLEEPING WING': (104, 40), 'WELLNESS + GYM': (50, -6), 'STUDIO + ARRIVAL': (-12, 40)}.items():
    p = v.P(x, y); sh.text(p[0], p[1], wing, 2.4, 'middle', 600, font='Khand')
title_mark(sh, 470, 300, 'K', 'Key Plan', '3/32" = 1\'-0"'); north(sh, 730, 220)
sh.text(470, 330, 'ASSUMPTIONS FOR THAI ENGINEER VERIFICATION', 4, weight=600, font='Khand')
ASSUME = ['Allowable soil bearing 10 t/m² and footing depth 1.5 m (no soil test yet). Mountain slope may require piles or stepped footings.',
          'RC member sizes (C1 250x250, GB1 200x500, RB1 200x400, S1 125 mm) and rebar are placeholders for a 1-storey frame at about 4.5 m bays.',
          'Steel transfer beams TB1 over the 21 ft pocketing glass and frameless corner: assumed W250, deflection limit L/600 for glass.',
          'Steel rafters H-150 cantilevering 4-8 ft at eaves; uplift and connection design by engineer (DPT 1311 wind).',
          'Electrical: 3-phase 400/230 V PEA service, 125 A main; load calc, cable sizes and RCBO selection to EIT standard at CD.',
          'Cooling at about 850 BTU/h per m²; VRF/multi-split outdoor units CU-1/2/3 sized by connected load, not by a heat-load calc.',
          'Plumbing pipe sizes by fixture count rule of thumb; septic + ATU and drain field sized for 6 people, perc test required.',
          'Rainwater ring, tanks (2 x 19,000 L), well and pool routes are schematic; final routes per survey and civil grading.',
          'Saltwater pool: corrosion-resistant fittings, backwash to lined soakaway; bonding/equipotential grid per EIT.']
yy3 = 336
for i, a in enumerate(ASSUME):
    for j, l in enumerate(wrap(f"{i+1}. {a}" if True else a, 120)): sh.text(470, yy3, l, 2.5); yy3 += 3.6
    yy3 += 1.2
sh.tbnotes('General Notes', ['Concept design development set for coordination and pricing. Not for permit or construction.', 'Model coordinates: feet, x east, y north, FFL = 0.', 'Interactive 3D: webermanapps.github.io/weberman-residence (Layers panel).'])

exec(open(os.path.join(HERE, 'sheets_extra.py')).read())
exec(open(os.path.join(HERE, 'sheets_kitchen.py')).read())
exec(open(os.path.join(HERE, 'sheets_std.py')).read())
# ---------- write ----------
pdfs = []
for no, _, _ in SHEETS:
    s = sheets[no]; fn = os.path.join(OUT, f"{no}.svg")
    open(fn, 'w').write(s.svg())
    pdf = os.path.join(OUT, f"{no}.pdf"); subprocess.run(['rsvg-convert', '-f', 'pdf', '-o', pdf, fn], check=True); pdfs.append(pdf)
subprocess.run(['pdfunite', *pdfs, os.path.join(OUT, 'Weberman_Residence_DD_Set.pdf')], check=True)
print('sheets written to', OUT)
