"""Weberman Residence BIM model builder.
Reads the single source of truth (app/design/plan.json) and derives element layers:
structure, walls + framing, roof framing, doors + windows, electrical, plumbing, HVAC, site utilities.
Units: feet, plan x = east, y = north, z = up from finished floor (FFL = 0).
Writes bim.json, which both the 2D sheet generator and the 3D viewer read."""
import json, math, os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
PLAN = os.path.join(HERE, '..', 'app', 'design', 'plan.json')
P = json.load(open(PLAN))
ROOMS = {r['id']: r for r in P['rooms']}
S = P['site']
EL = []
def add(layer, cat, typ, size, system, g, room=None, tag=None, **kw):
    e = dict(id=f"{layer[:2].upper()}-{len(EL)+1:04d}", layer=layer, cat=cat, type=typ, size=size, system=system, g=g)
    if room: e['room'] = room
    if tag: e['tag'] = tag
    e.update(kw); EL.append(e); return e
B = lambda x0, y0, z0, x1, y1, z1: ['b', round(x0,3), round(y0,3), round(z0,3), round(x1,3), round(y1,3), round(z1,3)]
BAR = lambda p, q, w, h: ['s', *[round(v,3) for v in p], *[round(v,3) for v in q], w, h]
PIPE = lambda pts, d: ['p', [[round(a,3) for a in pt] for pt in pts], d]
CYL = lambda cx, cy, r, z0, z1: ['c', cx, cy, r, z0, z1]
mm = lambda ft: round(ft * 304.8)
def fi(v):
    v = abs(v); f = int(v + 1e-6); i = round((v - f) * 12)
    if i == 12: f, i = f + 1, 0
    return f"{f}'-{i}\""

# ---------------- roof geometry helpers (mirror of build.js) ----------------
def shedH(r, x, y):
    p, a0, a1 = (x, r['x0'], r['x1']) if r['axis'] == 'x' else (y, r['y0'], r['y1'])
    return r['h0'] + (r['h1'] - r['h0']) * (p - a0) / (a1 - a0)
def roofUnderside(r, x, y):
    if r['type'] == 'shed': return shedH(r, x, y) - 0.6
    yn, ys = r['y1'] + r['oh']['n'], r['y0'] - r['oh']['s']
    return r['hv'] + (r['he'] - r['hv']) * ((y - r['valley']) / (yn - r['valley']) if y >= r['valley'] else (r['valley'] - y) / (r['valley'] - ys))
def roofTop(r, x, y): return roofUnderside(r, x, y) + (1.0 if r['type'] == 'shed' else 0.9)
def roofAt(x, y):
    best = None
    for r in P['roofs']:
        if r['x0'] - .01 <= x <= r['x1'] + .01 and r['y0'] - .01 <= y <= r['y1'] + .01:
            u = roofUnderside(r, x, y); best = u if best is None else max(best, u)
    return best if best is not None else 10
def ext(r): return r['x0'] - r['oh']['w'], r['y0'] - r['oh']['s'], r['x1'] + r['oh']['e'], r['y1'] + r['oh']['n']

WALLS = P['walls']
def wall_xy(w):
    return ((w['a'], w['c']), (w['b'], w['c'])) if w['o'] == 'h' else ((w['c'], w['a']), (w['c'], w['b']))
def wall_rooms(w): return [q for q in (w['pos'], w['neg']) if q]
WET = {'101', '104', '105', '202', '205', '206', '208', '210', '211', '303', '304', '305', '306', '403'}

# ================= STRUCTURE (RC frame, typical Thai practice) =================
TOP_BEAM_D = 400 / 304.8
pts = {}
def addpt(x, y, h):
    for k in pts:
        if abs(k[0] - x) < 1.6 and abs(k[1] - y) < 1.6:
            pts[k] = max(pts[k], h); return
    pts[(x, y)] = h
for w in WALLS:
    if not w['ext']: continue
    (x0, y0), (x1, y1) = wall_xy(w); L = math.hypot(x1 - x0, y1 - y0)
    n = max(1, math.ceil(L / 15.5))  # max ~4.7 m bay
    for i in range(n + 1):
        t = i / n; addpt(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, w['h'])
# interior columns at the middle of the deep pavilions where interior walls meet (keeps beam spans <= ~5 m)
for w in WALLS:
    if w['ext'] or set(wall_rooms(w)) & {'407'}: continue
    (x0, y0), (x1, y1) = wall_xy(w)
    if math.hypot(x1 - x0, y1 - y0) >= 10: addpt(x0, y0, w['h']); addpt(x1, y1, w['h'])
COLS = sorted(pts.items())
# structural grid (rounded unique coordinates)
def uniq(vals, tol=1.6):
    out = []
    for v in sorted(vals):
        if not out or v - out[-1] > tol: out.append(v)
    return out
GX = uniq([p[0] for p, _ in COLS]); GY = uniq([p[1] for p, _ in COLS])
def gname(i): s = ''; i += 1
def letters(i):
    s = ''
    while True:
        s = chr(65 + i % 26) + s; i = i // 26 - 1
        if i < 0: return s
GRID = {'x': [{'n': str(i + 1), 'v': v} for i, v in enumerate(GX)], 'y': [{'n': letters(i), 'v': v} for i, v in enumerate(GY)]}
def gridref(x, y):
    gx = min(GRID['x'], key=lambda g: abs(g['v'] - x)); gy = min(GRID['y'], key=lambda g: abs(g['v'] - y)); return f"{gy['n']}/{gx['n']}"
C1 = 250 / 304.8; F1 = 1500 / 304.8; F2 = 1800 / 304.8
FT_Z0, FT_Z1 = -5.25, -3.94   # footing 400 mm thick, underside about 1.6 m below FFL
for (x, y), h in COLS:
    corner = sum(1 for (xx, yy), _ in COLS if abs(xx - x) < 16 and abs(yy - y) < 16) <= 3
    f = F1 if corner else F2; ft = 'F1' if corner else 'F2'
    add('struct', 'footing', f'Spread Footing {ft}', f"{mm(f)} x {mm(f)} x 400 mm" , 'RC Foundation',
        [B(x - f/2, y - f/2, FT_Z0, x + f/2, y + f/2, FT_Z1)], tag=ft, grid=gridref(x, y))
    add('struct', 'column', 'RC Column C1', f"250 x 250 mm, H {fi(h)}", 'RC Frame',
        [B(x - C1/2, y - C1/2, FT_Z1, x + C1/2, y + C1/2, h)], tag='C1', grid=gridref(x, y))
# ground beams under every wall + roof (ring) beams on exterior / bearing lines
GB_W, GB_D = 200/304.8, 500/304.8
for w in WALLS:
    (x0, y0), (x1, y1) = wall_xy(w); hw = GB_W / 2
    g = B(x0 - hw, y0 - hw, -GB_D, x1 + hw, y1 + hw, -0.33) if w['o'] == 'h' else B(x0 - hw, y0 - hw, -GB_D, x1 + hw, y1 + hw, -0.33)
    add('struct', 'beam', 'RC Ground Beam GB1', '200 x 500 mm', 'RC Foundation', [g], tag='GB1')
    if w['ext'] or len(wall_rooms(w)) == 2 and w['h'] >= 10:
        rb = 'RB1' if w['ext'] else 'RB2'; d = TOP_BEAM_D if w['ext'] else 300/304.8
        add('struct', 'beam', f'RC Roof Beam {rb}', '200 x 400 mm' if w['ext'] else '150 x 300 mm', 'RC Frame',
            [B(x0 - hw, y0 - hw, w['h'] - d, x1 + hw, y1 + hw, w['h'])], tag=rb)
# slabs per room (suspended RC slab on ground beams; 125 mm with 50 mm drop in wet rooms)
for r in P['rooms']:
    wet = r['id'] in WET
    add('struct', 'slab', 'RC Floor Slab S1' + (' (Wet, Dropped)' if wet else ''), f"{r['w']}' x {r['d']}' ({round(r['area']*0.0929,1)} m²), 125 mm", 'RC Floor',
        [B(r['x0'], r['y0'], -0.41 - (0.16 if wet else 0), r['x1'], r['y1'], -0.33 if not wet else -0.49)], room=r['id'], tag='S1')
# saltwater pool shell
pl = S['pool']
add('struct', 'pool', 'RC Pool Shell (Waterproof Concrete)', "34' x 12', 1.2-1.6 m deep, 250 mm walls", 'Pool Structure',
    [B(pl['x0'] - .8, pl['y0'] - .8, -5.6, pl['x1'] + .8, pl['y1'] + .8, -5.0), B(pl['x0'] - .8, pl['y0'] - .8, -5.0, pl['x0'], pl['y1'] + .8, 0), B(pl['x1'], pl['y0'] - .8, -5.0, pl['x1'] + .8, pl['y1'] + .8, 0),
     B(pl['x0'], pl['y0'] - .8, -5.0, pl['x1'], pl['y0'], 0), B(pl['x0'], pl['y1'], -5.0, pl['x1'], pl['y1'] + .8, 0)], tag='SP1')

# ================= WALLS + FRAMING; DOORS + WINDOWS =================
STUD_W, STUD_T = 92/304.8, 0.14
ACOUSTIC = {'407', '405', '201', '207', '209'}
def wtype(w):
    rs = wall_rooms(w)
    if w['ext']: return 'W1', 'AAC Block Exterior Wall', '200 mm AAC block in RC frame (RC lintels + stiffeners), 50 mm mineral-wool exterior insulation OR ventilated charred-timber cladding on aluminium battens, lime plaster both faces'
    if set(rs) & ACOUSTIC: return 'W3', 'Acoustic Steel Stud Partition', '92 mm LGS @ 400 mm (double stud on isolated tracks at studio 407), 75 mm acoustic mineral wool, 2 x 13 mm sound-rated board each side, resilient channel (STC 55+, 60+ at studio)'
    if set(rs) & WET: return 'W2', 'Steel Stud Partition (Wet Face)', '92 mm LGS @ 400 mm, cement board on wet face + liquid/sheet waterproofing membrane (min 1.8 m in showers, full height in steam), gypsum on dry face'
    return 'W2', 'Light-Gauge Steel Stud Partition', '92 mm LGS studs @ 400 mm o.c., 12.5 mm board each side, mineral wool infill'
OPEN = {'door': ('Shoji Sliding Door' , 'Interior'), 'exdoor': ('Bronze-Framed Glazed Door', 'Exterior'), 'front': ('Bronze Pivot Front Door', 'Exterior'),
        'window': ('Bronze-Framed Casement Window', 'Exterior'), 'glass': ('Bronze-Framed Pocketing Glass Wall', 'Exterior'), 'slide': ('Bronze Sliding Glass Door', 'Exterior'),
        'fixed': ('Frameless Fixed Glass', 'Exterior'), 'open': ('Cased Opening', 'Interior')}
def heights(f, wh):
    k = f['k']
    if f.get('x'): return f['x'][0], f['x'][1]
    if k in ('glass', 'fixed', 'slide'): return 0, min(wh - .8, 9)
    if k == 'front': return 0, 9
    return 0, 8
DOORS = []
for w in WALLS:
    tagt, name, spec = wtype(w); t = 0.67 if w['ext'] else (0.33 if tagt != 'W4' else 0.55)
    (x0, y0), (x1, y1) = wall_xy(w); L = math.hypot(x1 - x0, y1 - y0); hw = t / 2
    def seg(a, b, z0, z1):
        return B(a, w['c'] - hw, z0, b, w['c'] + hw, z1) if w['o'] == 'h' else B(w['c'] - hw, a, z0, w['c'] + hw, b, z1)
    g = []
    pieces, cur = [], w['a']
    feats = sorted(w['feats'], key=lambda f: f['a'])
    for f in feats:
        if f['a'] > cur: pieces.append((cur, f['a'], 0, w['h'] - TOP_BEAM_D))
        s0, s1 = heights(f, w['h'])
        if s0 > 0: pieces.append((f['a'], f['b'], 0, s0))
        if s1 < w['h'] - TOP_BEAM_D - 0.2: pieces.append((f['a'], f['b'], s1 + 0.5, w['h'] - TOP_BEAM_D))
        cur = f['b']
    if w['b'] > cur: pieces.append((cur, w['b'], 0, w['h'] - TOP_BEAM_D))
    studs = 0
    if tagt in ('W3', 'W4'):
        # studs at 400 mm o.c. + jambs, plus top and bottom tracks
        for a, b, z0, z1 in pieces:
            n = max(1, int((b - a) / 1.312))
            for i in range(n + 1):
                s = a + (b - a) * i / n; studs += 1
                g.append(seg(s - 0.06, s + 0.06, z0, z1) if True else None)
            g.append(seg(a, b, z0, z0 + 0.1)); g.append(seg(a, b, z1 - 0.1, z1))
    else:
        g = [seg(a, b, z0, z1) for a, b, z0, z1 in pieces]
    add('framing', 'wall', name, f"{fi(L)} long x {fi(w['h'])} high, {mm(t)} mm" + (f", {studs} studs" if studs else ''), 'Walls + Framing', g, tag=tagt, spec=spec,
        rooms=wall_rooms(w), plan=[x0, y0, x1, y1], t=t, ext=w['ext'])
    for f in feats:
        s0, s1 = heights(f, w['h']); nm, sysn = OPEN[f['k']]
        if f['k'] == 'door' and set(wall_rooms(w)) & {'202', '208', '210', '403', '205', '206', '211', '304', '305', '303'}: nm = 'Solid Cherry Pocket Door'
        if f['k'] == 'door' and '404' in wall_rooms(w): nm = 'Shoji + Fusuma Sliding Panels'
        if f['k'] == 'door' and set(wall_rooms(w)) & {'304', '305'}: nm = 'Tempered Glass Sauna/Steam Door'
        if f['k'] == 'door' and '407' in wall_rooms(w): nm = 'Acoustic Door Pair (STC 50+, Sound Lock)'
        a, b = f['a'], f['b']
        if f['k'] == 'open': continue
        hw2 = t / 2 + 0.05
        gg = B(a, w['c'] - hw2, s0, b, w['c'] + hw2, s1) if w['o'] == 'h' else B(w['c'] - hw2, a, s0, w['c'] + hw2, b, s1)
        cat = 'window' if f['k'] in ('window', 'fixed') else 'door'
        mark = ('D' if cat == 'door' else 'W') + f"{sum(1 for e in DOORS if e['cat']==cat)+1:02d}"
        e = add('arch', cat, nm, f"{fi(b-a)} W x {fi(s1-s0)} H" + (f", sill {fi(s0)}" if s0 else ''), f"Doors + Windows ({sysn})", [gg], tag=mark,
                rooms=wall_rooms(w), o=w['o'], c=w['c'], a=a, b=b, k=f['k'], z=[s0, s1])
        DOORS.append(e)
        # RC lintel over openings in masonry walls
        if tagt in ('W1', 'W2') and s1 < w['h'] - TOP_BEAM_D - 0.2:
            add('framing', 'lintel', 'RC Lintel L1', f"{fi(b-a+1)} x 150 mm deep", 'Walls + Framing', [seg(a - .5, b + .5, s1, s1 + 0.5)], tag='L1')
        elif s1 >= w['h'] - TOP_BEAM_D - 0.2 and (b - a) > 12:
            add('struct', 'beam', 'Steel Transfer Beam TB1 (Engineer to Size)', f"Span {fi(b-a)}; assume W250 x 25 kg/m", 'RC Frame + Steel', [seg(a, b, w['h'] - TOP_BEAM_D - 0.8, w['h'] - TOP_BEAM_D)], tag='TB1')

# ================= ROOF FRAMING (steel rafters + C-purlins, standing seam) =================
RAF_D, RAF_W, PUR = 0.5, 0.25, 0.33
for r in P['roofs']:
    x0, y0, x1, y1 = ext(r)
    along_y = (r['type'] == 'butterfly') or r.get('axis') == 'y'   # rafters run down the slope
    sp = 4.0
    if along_y:
        n = int((x1 - x0) / sp)
        for i in range(n + 1):
            x = x0 + 0.3 + (x1 - x0 - 0.6) * i / n
            if r['type'] == 'butterfly':
                for ya, yb in ((y0, r['valley']), (r['valley'], y1)):
                    za, zb = roofUnderside(r, x, ya), roofUnderside(r, x, yb)
                    add('roof', 'rafter', 'Steel Rafter R1', 'H-150 x 75 x 5 x 7 mm @ 1.2 m', 'Roof Framing', [BAR((x, ya, za - RAF_D/2), (x, yb, zb - RAF_D/2), RAF_W, RAF_D)], tag='R1', roof=r['id'])
            else:
                add('roof', 'rafter', 'Steel Rafter R1', 'H-150 x 75 x 5 x 7 mm @ 1.2 m', 'Roof Framing',
                    [BAR((x, y0, roofUnderside(r, x, y0) - RAF_D/2), (x, y1, roofUnderside(r, x, y1) - RAF_D/2), RAF_W, RAF_D)], tag='R1', roof=r['id'])
        m = int((y1 - y0) / 3.6)
        for j in range(m + 1):
            y = y0 + 0.2 + (y1 - y0 - 0.4) * j / m; z = roofUnderside(r, x0, y) + 0.02
            add('roof', 'purlin', 'C-Purlin P1', 'C-100 x 50 x 20 x 2.3 mm @ 1.1 m', 'Roof Framing', [BAR((x0, y, z + PUR/2 - 0.0), (x1, y, z + PUR/2), 0.17, PUR)], tag='P1', roof=r['id'])
    else:
        n = int((y1 - y0) / sp)
        for i in range(n + 1):
            y = y0 + 0.3 + (y1 - y0 - 0.6) * i / n
            add('roof', 'rafter', 'Steel Rafter R1', 'H-150 x 75 x 5 x 7 mm @ 1.2 m', 'Roof Framing',
                [BAR((x0, y, roofUnderside(r, x0, y) - RAF_D/2), (x1, y, roofUnderside(r, x1, y) - RAF_D/2), RAF_W, RAF_D)], tag='R1', roof=r['id'])
        m = int((x1 - x0) / 3.6)
        for j in range(m + 1):
            x = x0 + 0.2 + (x1 - x0 - 0.4) * j / m; z = roofUnderside(r, x, y0) + 0.02
            add('roof', 'purlin', 'C-Purlin P1', 'C-100 x 50 x 20 x 2.3 mm @ 1.1 m', 'Roof Framing', [BAR((x, y0, z + PUR/2), (x, y1, z + PUR/2), 0.17, PUR)], tag='P1', roof=r['id'])
    for hx0, hy0, hx1, hy1 in r.get('holes', []):
        z = roofUnderside(r, (hx0+hx1)/2, (hy0+hy1)/2)
        add('roof', 'trimmer', 'Skylight Trimmer Frame', f"{fi(hx1-hx0)} x {fi(hy1-hy0)}, RHS 100 x 50 mm", 'Roof Framing', [B(hx0-.2, hy0-.2, z-.4, hx1+.2, hy1+.2, z)], roof=r['id'], tag='SK')
    add('roof', 'deck', 'Standing-Seam Roof Assembly', 'Standing seam 0.5 mm AZ150 on steel purlins, 40 mm ventilated cavity (eave-to-ridge), reflective radiant barrier, 75 mm PIR insulation, vapor-open underlay; no timber', 'Roof', [], roof=r['id'],
        plan=[x0, y0, x1, y1], slope=r['type'])

# ================= ELECTRICAL =================
PANELS = {
    'MDB': dict(x=97.3, y=51.0, room='206', name='Main Distribution Board MDB', size='3-phase 400/230 V, 125 A, 36-way, RCBO protected'),
    'SDB-W': dict(x=71.4, y=15.0, room='306', name='Sub-Board SDB-W (Wellness)', size='3-phase, 63 A, 18-way'),
    'SDB-S': dict(x=26.6, y=1.0, room='407', name='Sub-Board SDB-S (Studio, Isolated Ground)', size='1-phase, 40 A, 12-way'),
    'ATS': dict(x=126.0, y=4.3, room=None, name='Utility Yard: PEA Meter + ATS + Hybrid Inverter', size='3-phase 400 V meter (PEA), 125 A ATS; 20 kW hybrid inverter + 30 kWh LFP (see E-102)'),
}
for k, p in PANELS.items():
    add('elec', 'panel', p['name'], p['size'], 'Power Distribution', [B(p['x'] - .25, p['y'] - 1.2, 3.5, p['x'] + .25, p['y'] + 1.2, 6.5)], room=p['room'], tag=k)
def panel_for(rid):
    r = ROOMS.get(rid)
    if rid == '407': return 'SDB-S'
    if r and r['wing'] == 'Wellness + Gym Wing': return 'SDB-W'
    return 'MDB'
CIRC = []
def circuit(panel, desc, load, breaker, kind):
    c = dict(no=f"{panel}-{sum(1 for q in CIRC if q['panel']==panel)+1:02d}", panel=panel, desc=desc, load=load, breaker=breaker, kind=kind); CIRC.append(c); return c
# feeders
add('elec', 'feeder', 'Underground Feeder ATS to MDB', '4 x 35 mm² + E 16 mm² Cu in 2" HDPE', 'Power Distribution', [PIPE([(126, 4.3, 4), (126, 4.3, -2), (99.6, 4.3, -2), (99.6, 51, -2), (97.3, 51, 3.5)], 0.17)], tag='F-1')
add('elec', 'feeder', 'Feeder MDB to SDB-W', '4 x 16 mm² + E 10 mm² Cu', 'Power Distribution', [PIPE([(97.3, 51, 6.5), (97.3, 51, 9), (75, 51, 9), (75, 15, 9), (71.4, 15, 9), (71.4, 15, 6.5)], 0.12)], tag='F-2')
add('elec', 'feeder', 'Feeder MDB to SDB-S', '2 x 10 mm² + E 6 mm² Cu (isolated ground)', 'Power Distribution', [PIPE([(97.3, 51, 6.5), (97.3, 51, 9.2), (75.2, 51, 9.2), (75.2, 57, 9.2), (33, 57, 9.2), (33, 24.5, 9.2), (26.6, 24.5, 9.2), (26.6, 1, 9.2), (26.6, 1, 6.5)], 0.1)], tag='F-3')
LIGHT_SKIP = set()
OUT_SKIP = {'304', '305', '211'}
outlets_by_panel = {}
lights_by_panel = {}
def ceiling(r): return min(r['h'], roofAt((r['x0']+r['x1'])/2, (r['y0']+r['y1'])/2)) - 0.3
for r in P['rooms']:
    x0, y0, x1, y1 = r['x0'], r['y0'], r['x1'], r['y1']; pnl = panel_for(r['id']); zc = ceiling(r)
    # lighting: recessed downlights on a ~8 ft grid (pendants/lanterns from the furniture data)
    nx, ny = max(1, round((x1 - x0) / 8)), max(1, round((y1 - y0) / 8))
    for i in range(nx):
        for j in range(ny):
            x = x0 + (x1 - x0) * (i + .5) / nx; y = y0 + (y1 - y0) * (j + .5) / ny
            typ = 'LED Downlight (IP65)' if r['id'] in WET else 'LED Downlight 2700 K, Dimmable'
            if r['id'] == '304': typ = 'Sauna-Rated Backlight Strip'
            lights_by_panel.setdefault((pnl, r['wing']), []).append(add('elec', 'light', typ, '8 W, 90 mm cutout', 'Lighting', [CYL(x, y, 0.3, zc - 0.15, zc)], room=r['id'], tag='L', pos=[x, y]))
    # receptacles every ~12 ft of perimeter, 300 mm AFF (1,100 mm at counters)
    if r['id'] not in OUT_SKIP and r['area'] >= 30:
        per = []
        for (ax, ay, bx, by, nx_, ny_) in ((x0, y0, x1, y0, 0, 1), (x1, y0, x1, y1, -1, 0), (x1, y1, x0, y1, 0, -1), (x0, y1, x0, y0, 1, 0)):
            L = math.hypot(bx - ax, by - ay); n = max(1, round(L / 12))
            for i in range(n):
                t = (i + .5) / n; per.append((ax + (bx - ax) * t + nx_ * 0.25, ay + (by - ay) * t + ny_ * 0.25))
        z = 3.6 if r['id'] in ('101', '205') or r['id'] in WET else 1.0
        gf = r['id'] in WET
        for x, y in per:
            outlets_by_panel.setdefault((pnl, r['wing']), []).append(add('elec', 'outlet', 'Duplex Receptacle 16 A' + (' (RCBO / GFCI)' if gf else ''), 'Universal 2-pin/3-pin, 250 V', 'Power', [B(x - .15, y - .15, z, x + .15, y + .15, z + .4)], room=r['id'], tag='R', pos=[x, y]))
for f in P['furn']:
    lab = f['label'].lower()
    if 'pendant' in lab or 'lantern' in lab:
        r = ROOMS[f['room']]; zc = ceiling(r)
        add('elec', 'light', 'Decorative Pendant (' + f['label'] + ')', 'Owner-selected fixture, 40 W max', 'Lighting', [CYL((f['x0']+f['x1'])/2, (f['y0']+f['y1'])/2, 0.6, zc - 2.5, zc - 1.8)], room=f['room'], tag='PL', pos=[(f['x0']+f['x1'])/2, (f['y0']+f['y1'])/2])
# group into circuits
def chunk(lst, n):
    for i in range(0, len(lst), n): yield lst[i:i+n]
HOMERUN = []
for (pnl, wing), lst in lights_by_panel.items():
    for ch in chunk(lst, 14):
        c = circuit(pnl, f"Lighting, {wing} ({len(ch)} fixtures)", f"{len(ch)*10} W", '10 A RCBO', 'light')
        for e in ch: e['circuit'] = c['no']
        HOMERUN.append((c, ch[0]['pos']))
for (pnl, wing), lst in outlets_by_panel.items():
    for ch in chunk(lst, 8):
        c = circuit(pnl, f"Receptacles, {wing} ({len(ch)})", '1,800 VA', '16 A RCBO', 'power')
        for e in ch: e['circuit'] = c['no']
        HOMERUN.append((c, ch[0]['pos']))
DED = [  # panel, desc, load, breaker, x, y, z, room
    ('MDB', 'Pro Gas Range 48" (Igniters + Convection Oven)', '1.8 kW', '16 A', 25, 55.6, 1, '101'), ('MDB', 'Steam Oven + Wall Oven Column', '6.5 kW', '32 A 2P', 21.5, 69, 3, '101'),
    ('MDB', 'Built-In Stainless Refrigerator', '0.6 kW', '16 A', 21.5, 66, 1, '101'), ('MDB', 'Dishwasher (Left of Sink)', '1.8 kW', '16 A', 25.5, 77.3, 1, '101'),
    ('MDB', 'Hidden Hood Inline Blower 1,500 m³/h + Make-Up Air Fan', '0.8 kW', '16 A', 25, 56.3, 9, '101'), ('MDB', 'Flush Induction 2-Zone (Work Island)', '3.7 kW', '20 A', 27.5, 62, 2.5, '101'),
    ('MDB', 'Appliance Garage Counter Outlets (2 x Duplex, GFCI)', '1.8 kW', '16 A RCBO', 21.5, 63.4, 3.6, '101'), ('MDB', 'Island Pop-Up Outlets (Waterfall Island, GFCI)', '1.8 kW', '16 A RCBO', 28, 69, 2.9, '101'),
    ('MDB', 'Washer', '2.2 kW', '16 A', 80, 57.5, 3, '205'),
    ('MDB', 'Heat-Pump Dryer', '1.0 kW', '16 A', 82, 57.5, 3, '205'), ('MDB', 'Heat-Pump Water Heater HWH-1', '1.5 kW', '16 A', 90, 57, 4, '206'),
    ('MDB', 'ERV-1 + Air Handler', '0.4 kW', '10 A', 95.8, 56.8, 6, '206'), ('MDB', 'Pool Pump + Salt Cell', '1.5 kW', '16 A', 93, 16.5, 3, '211'),
    ('MDB', 'Water Treatment Booster Pump', '1.1 kW', '16 A', 128, 18, 3, None), ('MDB', 'Well Pump (Submersible)', '1.5 kW', '16 A', 140, 95, 1, None),
    ('MDB', 'EV Charger (Carport)', '7.4 kW', '32 A 2P', -43.5, 42, 4, None), ('MDB', 'Outdoor Unit CU-1', '9.0 kW', '3P 25 A', 119, 1, 2, None),
    ('MDB', 'Outdoor Unit CU-2', '9.0 kW', '3P 25 A', 119, 5, 2, None), ('MDB', 'Kids\' Bath Exhaust + Towel Warmer', '0.2 kW', '10 A', 81, 38, 8, '208'),
    ('SDB-W', 'Sauna Heater 9 kW', '9.0 kW', '3P 16 A', 56.9, 1.5, 2, '304'), ('SDB-W', 'Steam Generator 9 kW', '9.0 kW', '3P 16 A', 70.8, 14, 2, '306'),
    ('SDB-W', 'Cold Plunge Chiller', '1.2 kW', '16 A', 64.5, 22.3, 1, '303'), ('SDB-W', 'Exercise Room Equipment', '2.0 kW', '16 A', 40, 1, 1, '302'),
    ('SDB-W', 'Wellness Exhaust Fans', '0.3 kW', '10 A', 60, 12, 9, '303'),
    ('SDB-S', 'Studio Audio (Clean Power, Isolated Ground)', '2.0 kW', '16 A IG', 22.5, 3, 1, '407'), ('SDB-S', 'Studio Audio 2 (Clean Power)', '2.0 kW', '16 A IG', 6.5, 10, 1, '407'),
    ('SDB-S', 'Outdoor Unit CU-3 (Studio)', '4.5 kW', '25 A', 119, 9, 2, None), ('SDB-S', 'Studio ERV-2', '0.2 kW', '10 A', 6, 20, 9, '407'),
]
for pnl, desc, load, brk, x, y, z, room in DED:
    c = circuit(pnl, desc, load, brk, 'dedicated')
    add('elec', 'equip', 'Dedicated Outlet / Connection: ' + desc, f"{load}, {brk}", 'Power (Dedicated)', [B(x - .3, y - .3, z, x + .3, y + .3, z + .5)], room=room, tag='J', circuit=c['no'], pos=[x, y])
    HOMERUN.append((c, [x, y]))
for c, pos in HOMERUN:
    p = PANELS[c['panel']]; zr = 9.3
    add('elec', 'homerun', f"Home Run {c['no']}", c['breaker'] + ', 2.5 mm² THW in EMT/PVC conduit' if c['kind'] != 'dedicated' else c['breaker'], 'Circuits',
        [PIPE([(pos[0], pos[1], zr), (pos[0], p['y'], zr), (p['x'], p['y'], zr)], 0.06)], tag=c['no'], circuit=c['no'], pts=[pos, [pos[0], p['y']], [p['x'], p['y']]])
# low voltage / data
RACK = (20, 24.2)
add('elec', 'lv', 'Network + AV Rack', '24U rack, fiber ONT, router, PoE switch, NVR, UPS', 'Low Voltage + Data', [B(18.6, 22.6, 0, 21.4, 25.0, 6)], room='405', tag='RACK')
for rid in ['101', '102', '103', '201', '207', '209', '404', '407', '302', '401', '206']:
    r = ROOMS[rid]; x, y = (r['x0'] + r['x1']) / 2, r['y0'] + 0.3
    add('elec', 'data', 'Data Outlet (2 x Cat6A)', 'Cat6A to rack', 'Low Voltage + Data', [B(x - .15, y - .1, 1.0, x + .15, y + .1, 1.4)], room=rid, tag='D', pos=[x, y])
    add('elec', 'lvrun', f"Data Home Run {rid}", 'Cat6A in 25 mm conduit', 'Low Voltage + Data', [PIPE([(x, y, 9.6), (x, RACK[1], 9.6), (RACK[0], RACK[1], 9.6)], 0.05)], pts=[[x, y], [x, RACK[1]], list(RACK)])
for x, y, rid in [(60, 67, '103'), (28, 60, '101'), (85, 71, '201'), (90, 36.5, '207'), (75, 40, '204'), (40, 11, '302'), (16, 11, '407'), (24, 49, '401'), (60, 30, None), (110, 10, None)]:
    add('elec', 'ap', 'Wi-Fi 7 Access Point (PoE)' if rid else 'Outdoor Wi-Fi AP / Camera (PoE)', 'Ceiling / eave mount', 'Low Voltage + Data', [CYL(x, y, 0.4, (ceiling(ROOMS[rid]) - 0.15) if rid else 8.5, (ceiling(ROOMS[rid])) if rid else 8.7)], room=rid, tag='AP', pos=[x, y])

# ================= PLUMBING =================
FIX = []
def fixture(name, x, y, rid, hot=True, dfu=1, size='', vent=True):
    e = add('plumb', 'fixture', name, size, 'Plumbing Fixtures', [B(x - .5, y - .5, 0, x + .5, y + .5, 2.5)], room=rid, tag='FX', pos=[x, y], hot=hot, dfu=dfu)
    FIX.append(e); return e
for f in P['furn']:
    lab = f['label'].lower(); x, y = (f['x0'] + f['x1']) / 2, (f['y0'] + f['y1']) / 2; rid = f['room']
    if lab.startswith('wc'): fixture('Water Closet (Wall-Hung, Dual Flush)', x, y, rid, hot=False, dfu=4, size='3/6 L, 100 mm drain')
    elif 'vanity' in lab or 'basin' in lab: fixture('Lavatory', x, y, rid, dfu=1, size='40 mm drain, 15 mm supplies')
    elif 'integrated quartzite sink' in lab: fixture('Integrated Quartzite Sink + Dishwasher + Kitchen RO Tap', x, y, rid, dfu=3, size='50 mm drain to grease trap; RO-1 under sink')
    elif 'tub-shower' in lab: fixture('Tub-Shower', x, y, rid, dfu=2, size='50 mm drain')
    elif 'tub' in lab: fixture('Hinoki Soaking Tub', x, y, rid, dfu=2, size='50 mm drain, 20 mm fill')
    elif 'shower' in lab: fixture('Shower (Linear Drain)', x, y, rid, dfu=2, size='50 mm drain, thermostatic valve')
    elif 'washer' in lab: fixture('Washer Box', x, y, rid, dfu=3, size='50 mm standpipe')
    elif 'plunge' in lab: fixture('Cold Plunge (Chiller + Filter)', x, y, rid, hot=False, dfu=2, size='Auto-fill + 50 mm drain')
    elif 'dog wash' in lab: fixture('Dog Wash Basin', x, y, rid, dfu=2, size='50 mm drain with hair trap')
for nm, k, rid in [('Outdoor Shower', 'outdoor_shower', None), ('Courtyard Shower', 'cshower', None)]:
    q = S[k]; fixture(nm, (q['x0'] + q['x1']) / 2, (q['y0'] + q['y1']) / 2, rid, dfu=2, size='Cold + hot, to rain garden', vent=False)
fixture('Steam Generator Feed', 70.8, 14, '306', hot=False, dfu=1, size='15 mm cold + drain')
fixture('Utility Sink', 91, 52, '206', dfu=2, size='40 mm drain')
# supply trunk ring (ceiling, recirculating hot loop)
RING = [(93, 52), (75, 52), (75, 57.5), (13, 57.5), (13, 57.5)]
RING_S = [(75, 52), (75, 24.5), (33, 24.5), (33, 57.5)]
TRUNKS = [RING[:4], RING_S, [(75, 24.5), (75, 11), (67, 11)], [(33, 24.5), (33, 12), (28.5, 12)]]
def nearest(pt):
    best = None
    for tr in TRUNKS:
        for (ax, ay), (bx, by) in zip(tr, tr[1:]):
            dx, dy = bx - ax, by - ay; L2 = dx*dx + dy*dy or 1
            t = max(0, min(1, ((pt[0]-ax)*dx + (pt[1]-ay)*dy) / L2)); q = (ax + dx*t, ay + dy*t)
            d = math.hypot(pt[0]-q[0], pt[1]-q[1]); horiz = abs(dy) < 1e-6
            if best is None or d < best[0]: best = (d, q, horiz)
    return best
def lroute(pt, z, off=0):
    d, q, horiz = nearest(pt); q = (q[0] + off, q[1] + off)
    mid = (q[0], pt[1]) if horiz else (pt[0], q[1])
    return [(q[0], q[1], z), (mid[0], mid[1], z), (pt[0], pt[1], z), (pt[0], pt[1], 2.0)]
ZS = 9.0
add('plumb', 'main', 'Cold Water Service (Treated)', '32 mm PPR PN20, buried 600 mm', 'Domestic Cold Water', [PIPE([(124, 16, 1), (124, 10, -2), (99.4, 10, -2), (99.4, 52, -2), (97, 52, 0), (93, 52, ZS)], 0.12)], tag='CW')
for tr in TRUNKS:
    add('plumb', 'main', 'Cold Water Trunk', '25 mm PPR PN20', 'Domestic Cold Water', [PIPE([(x, y, ZS) for x, y in tr], 0.09)], tag='CW', pts=[list(p) for p in tr])
    add('plumb', 'main', 'Hot Water Trunk + Recirculation Loop', '25 mm PPR PN20 insulated, recirc pump RP-1', 'Domestic Hot Water', [PIPE([(x + .5, y + .5, ZS + .3) for x, y in tr], 0.09)], tag='HW', pts=[[x + .5, y + .5] for x, y in tr])
add('plumb', 'equip', 'Heat-Pump Water Heater HWH-1', '300 L, 1.5 kW heat pump with 3 kW backup element', 'Domestic Hot Water', [CYL(90, 57, 1.1, 0, 6)], room='206', tag='HWH-1', pos=[90, 57])
add('plumb', 'equip', 'Recirculation Pump RP-1 + Manifold', 'Timer + thermostat control, 15 mm', 'Domestic Hot Water', [B(91.5, 51.5, 3, 93.5, 52.5, 5)], room='206', tag='RP-1', pos=[92.5, 52])
for e in FIX:
    x, y = e['pos']
    add('plumb', 'branch', f"Cold Branch to {e['type']}", '20 mm PPR', 'Domestic Cold Water', [PIPE(lroute((x, y), ZS), 0.06)], room=e.get('room'), pts=[p[:2] for p in lroute((x, y), ZS)][:3])
    if e['hot']:
        add('plumb', 'branch', f"Hot Branch to {e['type']}", '20 mm PPR insulated', 'Domestic Hot Water', [PIPE(lroute((x + .4, y + .4), ZS + .3, .5), 0.06)], room=e.get('room'), pts=[p[:2] for p in lroute((x + .4, y + .4), ZS + .3, .5)][:3])
# sanitary drainage (under slab, 1:50 fall) to grease trap / septic + ATU
DR = [(12, 58.5), (75.6, 58.5), (75.6, 3), (103, 0)]
DR2 = [(33.6, 58.5), (33.6, 12.5), (28, 12.5)]
DR3 = [(75.6, 11.5), (50, 11.5)]
DTR = [DR, DR2, DR3]
def droute(pt):
    best = None
    for tr in DTR:
        for (ax, ay), (bx, by) in zip(tr, tr[1:]):
            dx, dy = bx - ax, by - ay; L2 = dx*dx + dy*dy or 1
            t = max(0, min(1, ((pt[0]-ax)*dx + (pt[1]-ay)*dy) / L2)); q = (ax + dx*t, ay + dy*t)
            d = math.hypot(pt[0]-q[0], pt[1]-q[1])
            if best is None or d < best[0]: best = (d, q, abs(dy) < 1e-6)
    _, q, horiz = best; mid = (q[0], pt[1]) if horiz else (pt[0], q[1]); return [pt, mid, q]
for tr in DTR:
    L = 0; pts3 = []
    for i, (x, y) in enumerate(tr):
        if i: L += math.hypot(x - tr[i-1][0], y - tr[i-1][1])
        pts3.append((x, y, -1.4 - L * 0.02))
    add('plumb', 'drain', 'Building Drain (Sanitary)', '100 mm uPVC Class 8.5, 1:50 fall, cleanouts at bends', 'Sanitary Drainage', [PIPE(pts3, 0.33)], tag='SAN', pts=[list(p) for p in tr])
for e in FIX:
    rt = droute(tuple(e['pos'])); dia = 0.33 if e['dfu'] >= 4 else 0.17
    add('plumb', 'drain', f"Waste from {e['type']}", '100 mm uPVC' if dia > .2 else '50 mm uPVC, P-trap', 'Sanitary Drainage', [PIPE([(x, y, -1.2) for x, y in rt], dia)], room=e.get('room'), pts=[list(p) for p in rt])
add('plumb', 'equip', 'Grease Interceptor GT-1', '100 L, precast, lid at grade', 'Sanitary Drainage', [B(29.5, 80.2, -3, 32.5, 82.2, 0)], tag='GT-1', pos=[31, 81.2])
add('plumb', 'drain', 'Kitchen Waste via Grease Trap', '75 mm uPVC', 'Sanitary Drainage', [PIPE([(31.3, 77.3, -1.2), (31, 81.2, -1.5), (31, 81.2, -2), (31, 85, -2), (12, 85, -2), (12, 58.5, -1.4)], 0.25)], pts=[[31.3, 77.3], [31, 81.2], [31, 85], [12, 85], [12, 58.5]])
# vents (one stack per wet room through roof)
done = set()
for e in FIX:
    rid = e.get('room')
    if not rid or rid in done or rid in ('206',): continue
    done.add(rid); x, y = e['pos']; top = roofAt(x, y) + 1.6
    add('plumb', 'vent', f"Vent Stack, {ROOMS[rid]['name']}", '50 mm uPVC, through roof with flashing boot (or air-admittance valve)', 'Vent', [PIPE([(x + .7, y, 0), (x + .7, y, top)], 0.17)], room=rid, tag='VS', pos=[x + .7, y])
# rainwater: gutters on low eaves, downspouts, underground collector ring to the tanks
RW_RING = [(101.5, 13), (101.5, 90), (-3, 90), (-3, -9), (101.5, -9), (101.5, 13)]
add('plumb', 'rain', 'Rainwater Collector Ring', '150 mm uPVC, buried, to first-flush diverters + garden cisterns', 'Rainwater Harvesting', [PIPE([(x, y, -1.5) for x, y in RW_RING] + [(106, 13, -1.0)], 0.5)], tag='RWL', pts=[list(p) for p in RW_RING] + [[106, 13]])
for r in P['roofs']:
    x0, y0, x1, y1 = ext(r)
    if r['type'] == 'butterfly':
        gut = [(x0, r['valley']), (x1, r['valley'])]; z = r['hv'] + 0.6; dsp = [(x0 + 1, r['valley']), (36.5, r['valley'])]
    elif r['axis'] == 'y':
        low = y0 if r['h0'] < r['h1'] else y1; gut = [(x0, low), (x1, low)]; z = shedH(r, x0, low) - 0.6; dsp = [(x0 + .5, low), (x1 - .5, low)]
    else:
        low = x0 if r['h0'] < r['h1'] else x1; gut = [(low, y0), (low, y1)]; z = shedH(r, low, y0) - 0.6; dsp = [(low, y0 + .5), (low, y1 - .5)]
    add('plumb', 'rain', 'Box Gutter / Eave Gutter', '150 x 125 mm AZ steel, 1:200 fall', 'Rainwater Harvesting', [PIPE([(gut[0][0], gut[0][1], z), (gut[1][0], gut[1][1], z)], 0.45)], roof=r['id'], tag='G', pts=[list(p) for p in gut])
    for dx, dy in dsp:
        # nearest ring side
        opts = [((dx, 90), abs(90 - dy)), ((101.5, dy), abs(101.5 - dx)), ((dx, -9), abs(dy + 9)), ((-3, dy), abs(dx + 3))]
        tgt = min(opts, key=lambda o: o[1])[0]
        add('plumb', 'rain', 'Downspout / Rain Chain + Leader', '100 mm round, to buried leader', 'Rainwater Harvesting', [PIPE([(dx, dy, z), (dx, dy, -1.0), (tgt[0], tgt[1], -1.5)], 0.33)], roof=r['id'], tag='DS', pts=[[dx, dy], list(tgt)], pos=[dx, dy])
# saltwater pool plant, tied to the utility yard
add('plumb', 'pool', 'Pool Pump (Variable Speed)', '1.5 kW VS pump, 50 mm suction / return', 'Saltwater Pool', [B(90, 15, 0, 92.5, 18, 2.5)], room='211', tag='PP-1', pos=[91.2, 16.5])
add('plumb', 'pool', 'Pool Media Filter', '600 mm glass-media filter with 6-way valve', 'Saltwater Pool', [CYL(94.5, 16.5, 1.0, 0, 4)], room='211', tag='PF-1', pos=[94.5, 16.5])
add('plumb', 'pool', 'Salt Chlorine Generator Cell + Controller', 'Sized for 60 m³, 3,000-4,000 ppm', 'Saltwater Pool', [B(92, 21, 3, 96.5, 23.4, 4.5)], room='211', tag='SC-1', pos=[94.2, 22.2])
add('plumb', 'pool', 'Pool Heat Pump (Optional)', '13 kW, in utility yard', 'Saltwater Pool', [B(101, 5.5, 0, 104, 8.5, 3)], tag='PHP', pos=[102.5, 7])
for x in (60, 70, 80):
    add('plumb', 'pool', 'Pool Return Inlet', '40 mm', 'Saltwater Pool', [CYL(x, -10.4, 0.2, -1.2, -0.9)], tag='RI', pos=[x, -10.4])
for x in (57, 85):
    add('plumb', 'pool', 'Skimmer', 'Wide-mouth', 'Saltwater Pool', [B(x - .7, -10.3, -1.2, x + .7, -9.5, -0.2)], tag='SK', pos=[x, -9.9])
add('plumb', 'pool', 'Main Drains (Dual, Anti-Entrapment)', '2 x VGB-compliant covers', 'Saltwater Pool', [B(70, -16.5, -5.0, 73, -15.5, -4.8)], tag='MD', pos=[71.5, -16])
add('plumb', 'poolpipe', 'Pool Suction Line', '63 mm uPVC PN13.5 (salt-resistant)', 'Saltwater Pool', [PIPE([(71.5, -16, -4.8), (89, -16, -2), (89, -9.5, -2), (91, -9.5, -2), (91, 15, -1), (91.2, 16.5, 1)], 0.21)], tag='PS', pts=[[71.5, -16], [89, -16], [89, -9.5], [91, -9.5], [91, 15]])
add('plumb', 'poolpipe', 'Pool Suction from Skimmers', '50 mm uPVC', 'Saltwater Pool', [PIPE([(57, -9.9, -0.8), (85, -9.9, -0.8), (89, -9.9, -2)], 0.17)], pts=[[57, -9.9], [85, -9.9], [89, -9.9]])
add('plumb', 'poolpipe', 'Pool Return Line', '50 mm uPVC via heat pump + salt cell', 'Saltwater Pool', [PIPE([(94.2, 22.2, 1), (96.5, 15, -1), (96.5, -10.8, -1.2), (60, -10.8, -1.2)], 0.17)], tag='PR', pts=[[94.2, 22.2], [96.5, 15], [96.5, -10.8], [60, -10.8]])
add('plumb', 'poolpipe', 'Pool Auto-Fill (from Water Treatment)', '20 mm PPR with backflow preventer', 'Saltwater Pool', [PIPE([(124, 14, 1), (124, 11, -1.5), (88, 11, -1.5), (88, -9.5, -0.5)], 0.06)], tag='AF', pts=[[124, 14], [124, 11], [88, 11], [88, -9.5]])
add('plumb', 'poolpipe', 'Backwash to Saltwater Soakaway (Not to Septic)', '50 mm uPVC', 'Saltwater Pool', [PIPE([(94.5, 16.5, 0), (99, 12, -1.5), (99, -30, -2.5)], 0.17)], tag='BW', pts=[[94.5, 16.5], [99, 12], [99, -30]])

# ================= HVAC =================
CU = {'CU-1': (119, 1), 'CU-2': (119, 5), 'CU-3': (119, 9)}
STD = [9000, 12000, 18000, 24000, 30000, 36000]
NOAC = {'104', '105', '202', '203', '205', '206', '208', '210', '211', '212', '213', '303', '304', '305', '306', '402', '403', '301'}
CUload = {k: 0 for k in CU}
def cu_for(r):
    if r['id'] == '407': return 'CU-3'
    return 'CU-1' if r['wing'] in ('Living Pavilion', 'Studio + Arrival') else 'CU-2'
for r in P['rooms']:
    if r['id'] in NOAC or not r['cond']: continue
    btu = r['area'] * 0.0929 * 850  # Thai rule of thumb ~800-900 BTU/h per m2 for glazed rooms
    n = 1 if btu <= 36000 else math.ceil(btu / 30000)
    each = next((s for s in STD if s >= btu / n), 36000)
    cu = cu_for(r); CUload[cu] += each * n
    for i in range(n):
        cassette = r['area'] >= 300
        if cassette:
            x = r['x0'] + (r['x1'] - r['x0']) * (i + .5) / n if (r['x1'] - r['x0']) >= (r['y1'] - r['y0']) else (r['x0'] + r['x1']) / 2
            y = (r['y0'] + r['y1']) / 2 if (r['x1'] - r['x0']) >= (r['y1'] - r['y0']) else r['y0'] + (r['y1'] - r['y0']) * (i + .5) / n
            zc = ceiling(r); g = B(x - 1.4, y - 1.4, zc - 0.9, x + 1.4, y + 1.4, zc); typ = '4-Way Ceiling Cassette (Inverter, R32)'
        else:
            x = (r['x0'] + r['x1']) / 2; y = r['y1'] - 0.6 if r['id'] not in ('204', '406') else (r['y0'] + r['y1']) / 2
            if r['id'] in ('204', '406'): x = r['x0'] + 0.6 if r['id'] == '406' else r['x1'] - 0.6
            zc = min(r['h'], 9.5); g = B(x - 1.5, y - .4, zc - 1.5, x + 1.5, y + .4, zc - .5) if r['id'] not in ('204', '406') else B(x - .4, y - 1.5, zc - 1.5, x + .4, y + 1.5, zc - .5)
            typ = 'High-Wall Split Indoor Unit (Inverter, R32)'
            if r['id'] == '407': typ = 'Ducted Low-Static Indoor Unit (Studio, With Silencers)'
        tag = f"FCU-{r['id']}" + (chr(97 + i) if n > 1 else '')
        add('hvac', 'indoor', typ, f"{each:,} BTU/h ({each/3412:.1f} kW)", f"Multi-Split / VRF {cu}", [g], room=r['id'], tag=tag, pos=[x, y], cu=cu, btu=each)
        cx, cy = CU[cu]; zl = 9.6
        rt = [(cx, cy, 2), (cx - 2, cy, zl), (75.4, cy, zl)]
        if cu == 'CU-3': rt = [(cx, cy, 2), (cx - 2, cy, -1.5), (30, -3, -1.5), (27.5, 3, 9)]
        else:
            if y > 24.5 and x < 75: rt += [(75.4, 57.2 if y >= 55 else 24.8, zl), (x, 57.2 if y >= 55 else 24.8, zl)]
            elif x < 75: rt += [(75.4, 11.5, zl), (x, 11.5, zl)]
            else: rt += [(75.4, y, zl)]
            rt += [(x, y, zl)]
        add('hvac', 'lineset', f"Refrigerant Line Set to {tag}", 'Insulated Cu pair 6.35/12.7 mm + condensate 20 mm uPVC to rain garden', f"Multi-Split / VRF {cu}", [PIPE(rt, 0.08)], tag='RL', pts=[[p[0], p[1]] for p in rt])
for k, (x, y) in CU.items():
    cap = CUload[k]
    add('hvac', 'outdoor', f"Outdoor Heat-Pump Unit {k}", f"{cap:,} BTU/h connected ({cap/3412:.1f} kW), inverter VRF/multi-split", f"Multi-Split / VRF {k}", [B(x - 1.6, y - 1.4, 0.3, x + 1.6, y + 1.4, 4.2)], tag=k, pos=[x, y])
# ERV + exhaust
add('hvac', 'erv', 'Energy Recovery Ventilator ERV-1', '350 m³/h, enthalpy core, MERV 13 + PM2.5 filter', 'Ventilation (ERV)', [B(94, 55, 6.5, 97.6, 58.6, 8.5)], room='206', tag='ERV-1', pos=[95.8, 56.8])
add('hvac', 'erv', 'Energy Recovery Ventilator ERV-2 (Studio)', '120 m³/h, acoustic-lined ducts', 'Ventilation (ERV)', [B(5, 18.5, 11, 9, 21, 12.5)], room='407', tag='ERV-2', pos=[7, 19.7])
SUP = ['201', '207', '209', '103', '102', '404', '302', '401']
for rid in SUP:
    r = ROOMS[rid]; x, y = (r['x0'] + r['x1']) / 2 + 2, (r['y0'] + r['y1']) / 2 + 2; zd = 9.8
    if y > 24.5 and x < 75: rt = [(95.8, 56.8, zd), (75.8, 56.8, zd), (75.8, 57.0 if y >= 55 else 25, zd), (x, 57.0 if y >= 55 else 25, zd), (x, y, zd)]
    elif x < 75: rt = [(95.8, 56.8, zd), (75.8, 56.8, zd), (75.8, 12, zd), (x, 12, zd), (x, y, zd)]
    else: rt = [(95.8, 56.8, zd), (75.8, 56.8, zd), (75.8, y, zd), (x, y, zd)]
    add('hvac', 'duct', f"ERV Supply Duct to {r['name']}", '125 mm insulated flex / 150 mm rigid trunk', 'Ventilation (ERV)', [PIPE(rt, 0.4)], room=rid, tag='SA', pts=[[p[0], p[1]] for p in rt])
    add('hvac', 'diffuser', 'Supply Diffuser', '150 mm round, ceiling', 'Ventilation (ERV)', [CYL(x, y, 0.45, zd - .2, zd)], room=rid, tag='SA', pos=[x, y])
for rid, cfm, x, y in [('202', '50 L/s boost', 92, 76), ('208', '25 L/s', 81.5, 34), ('210', '25 L/s', 84, 19), ('403', '15 L/s', 27, 43), ('205', '25 L/s', 84, 54), ('303', '60 L/s', 58, 15)]:
    add('hvac', 'exhaust', 'Exhaust Grille (ERV Return / Boost Fan)', cfm, 'Exhaust', [B(x - .5, y - .5, 8.6, x + .5, y + .5, 9)], room=rid, tag='EX', pos=[x, y])
r = ROOMS['101']
add('hvac', 'exhaust', 'Kitchen Hood Exhaust Duct (Wok-Rated)', '300 mm welded galvanized, grease-tight, to roof cap, 1,500 m³/h inline blower, interlocked make-up air damper', 'Exhaust', [PIPE([(25, 56.3, 7), (25, 56.3, roofAt(25, 56.3) + 2)], 1.0)], room='101', tag='KEX', pos=[25, 56.3])
# sauna + steam
add('hvac', 'sauna', 'Sauna Heater SH-1', '9 kW electric rock heater, 400 V 3-phase, guard rail', 'Sauna', [B(56.2, 0.6, 0, 57.6, 2.4, 3)], room='304', tag='SH-1', pos=[56.9, 1.5])
add('hvac', 'sauna', 'Sauna Fresh-Air Inlet (Low, Behind Heater)', '100 mm, from crawl / exterior', 'Sauna', [B(56.5, 0.3, 0.6, 57.3, 0.6, 1.2)], room='304', tag='SI', pos=[56.9, 0.45])
add('hvac', 'sauna', 'Sauna Exhaust (High, Opposite Wall) + Fan', '100 mm, 2 air changes/h, to outside', 'Sauna', [PIPE([(50.6, 8.4, 6.5), (50.6, 8.4, 9), (50.6, 4, 9), (50.6, -0.5, 9)], 0.33)], room='304', tag='SX', pos=[50.6, 8.4])
add('hvac', 'steam', 'Steam Generator SG-1', '9 kW, 400 V 3-phase, auto-flush, in Changing Room cabinet', 'Steam', [B(70.4, 13, 0.3, 71.6, 15, 3)], room='306', tag='SG-1', pos=[71, 14])
add('hvac', 'steam', 'Steam Line to Steam Head', '15 mm copper, sloped to head, insulated', 'Steam', [PIPE([(71, 14, 1.5), (71, 7, 1.5), (65.6, 7, 1.5), (65.2, 7, 1.2)], 0.06)], room='305', tag='ST', pts=[[71, 14], [71, 7], [65.6, 7]])
add('hvac', 'steam', 'Steam Room Exhaust Fan (Post-Use Purge)', '40 L/s, timer, to outside', 'Steam', [PIPE([(62, 4.5, 7.4), (62, 4.5, 9), (62, -0.5, 9)], 0.33)], room='305', tag='SX', pos=[62, 4.5])
add('hvac', 'dehum', 'Ducted Dehumidifier DH-1', '90 L/day, for wet-room + gym humidity', 'Dehumidification', [B(44, 19, 10, 48, 21, 11.2)], room='302', tag='DH-1', pos=[46, 20])

# ================= SITE UTILITIES =================
U = S
for i, (cx, cy, rr) in enumerate(U['tanks']):
    add('water', 'tank', f"Garden Rainwater Cistern T-{i+1}", f"{rr*2}' dia, 19,000 L, leaf screen + first-flush inlet", 'Rainwater Harvesting', [CYL(cx, cy, rr, 0, 9)], tag=f"T-{i+1}", pos=[cx, cy])
q = U['watertreat']; add('water', 'shed', 'Water Treatment Shed', 'Houses the treatment train (P-103)', 'Water Supply', [B(q['x0'], q['y0'], 0, q['x1'], q['y1'], 8)], tag='WT', pos=[(q['x0']+q['x1'])/2, (q['y0']+q['y1'])/2])
q = U['atu']; add('site', 'equip', 'Septic Tank + Aerobic Treatment Unit', '3,000 L septic + 2,000 L ATU (TIS 2550 type), lids at grade', 'Wastewater', [B(q['x0'], q['y0'], -6, q['x1'], q['y1'], 0.3)], tag='ATU', pos=[(q['x0']+q['x1'])/2, (q['y0']+q['y1'])/2])
q = U['drainfield']; add('site', 'equip', 'Drain Field (Leach Trenches)', f"{q['x1']-q['x0']}' x {q['y1']-q['y0']}', 4 trenches, perc test required", 'Wastewater', [B(q['x0'], q['y0'], -2.5, q['x1'], q['y1'], -2.0)], tag='DF', pos=[(q['x0']+q['x1'])/2, (q['y0']+q['y1'])/2])
add('site', 'pipe', 'Treated Effluent to Drain Field', '100 mm uPVC, gravity / dosing', 'Wastewater', [PIPE([(109, -3, -2.5), (109, -40, -2.5), (90, -50, -2.5), (60, -52, -2.5)], 0.33)], pts=[[109, -3], [109, -40], [90, -50], [60, -52]])
q = U['power']; add('site', 'equip', 'Generator + Battery Pad', '20 kVA diesel standby (auto-start) + 2 x 13.5 kWh LFP batteries, hybrid inverter', 'Power', [B(q['x0'], q['y0'], 0, q['x1'], q['y1'], 5)], tag='GEN', pos=[(q['x0']+q['x1'])/2, (q['y0']+q['y1'])/2])
for k, (x, y) in CU.items(): add('site', 'pad', f"Condenser Pad {k}", "Concrete pad 1.2 x 1.0 m on anti-vibration mounts", 'HVAC', [B(x - 2, y - 1.8, 0, x + 2, y + 1.8, 0.3)], tag=k, pos=[x, y])
w = U['well']; add('water', 'well', 'Drilled Well + Submersible Pump', '150 mm casing, depth by hydro survey', 'Water Supply', [CYL(w['cx'], w['cy'], 1.5, -8, 1.5)], tag='WELL', pos=[w['cx'], w['cy']])
add('water', 'pipe', 'Well Line to Treatment', '32 mm HDPE PN10, buried 600 mm', 'Water Supply', [PIPE([(140, 95, -2), (140, 23, -2), (130, 23, 0)], 0.12)], pts=[[140, 95], [140, 23], [130, 23]])
add('water', 'pipe', 'Cistern Overflow to Swale + Soakaway', '150 mm uPVC', 'Rainwater Harvesting', [PIPE([(110, 18, 8), (110, 24.5, -1), (136, 24.5, -1)], 0.5)], pts=[[110, 18], [110, 24.5], [136, 24.5]])
q = U['util']; add('site', 'screen', 'Utility Yard Screen', "7' charred-timber screen, 12' service gate", 'Site', [], tag='UY', plan=[q['x0'], q['y0'], q['x1'], q['y1']])
add('site', 'equip', 'PEA Meter Pedestal + Main Isolator', '3-phase 400 V, 30(100) A meter, surge protection', 'Power', [B(116.5, -6.8, 0, 118.5, -6.2, 4.5)], tag='PEA', pos=[117.5, -6.5])
add('site', 'pipe', 'Earthing: Ground Rods + Ring', '2 x 16 mm x 2.4 m copper-bonded rods, < 5 ohm', 'Power', [PIPE([(126, -4.8, -1.5), (120, -4.8, -1.5)], 0.05)], tag='GND', pts=[[126, -4.8], [120, -4.8]])

exec(open(os.path.join(HERE, 'extras.py')).read())
exec(open(os.path.join(HERE, 'farm.py')).read())
exec(open(os.path.join(HERE, 'kitchen.py')).read())
exec(open(os.path.join(HERE, 'standards.py')).read())
LAYERS = [
    dict(id='arch', name='Architecture', sheet='A-101', desc='Walls, rooms, doors and windows'),
    dict(id='struct', name='Structure', sheet='S-101', desc='RC footings, columns, ground + roof beams, slabs, pool shell'),
    dict(id='framing', name='Framing', sheet='S-102', desc='AAC walls, LGS stud partitions, lintels'),
    dict(id='roof', name='Roof', sheet='A-102', desc='Steel rafters, C-purlins, skylight trimmers', sheet2='S-102'),
    dict(id='elec', name='Electrical', sheet='E-101', desc='Panels, circuits, outlets, lighting, data'),
    dict(id='plumb', name='Plumbing', sheet='P-101', desc='Supply, hot water, drainage, vents, rainwater, pool'),
    dict(id='hvac', name='HVAC', sheet='M-101', desc='Split units, ERV, exhaust, sauna + steam'),
    dict(id='site', name='Site Utilities', sheet='P-101', desc='Septic + ATU, drain field, power pad, condenser pads'),
    dict(id='water', name='Water + Rainwater', sheet='P-102', desc='Cisterns, drip zones, well, treatment train', sheet2='P-103'),
    dict(id='solar', name='Solar', sheet='E-102', desc='PV modules, hybrid inverter, battery'),
    dict(id='ctrl', name='Controls', sheet='E-103', desc='Home controller, sensors, valves, monitoring'),
    dict(id='farm', name='Landscape + Farm', sheet='P-102', desc='Coop + run, raised beds, compost, greywater, herb nook'),
]
out = dict(standards=STANDARDS, kitchen=KITCHEN, rooms={r['id']: r['name'] for r in P['rooms']}, project='Weberman Residence', units='ft', origin='plan.json (x east, y north, z up from FFL)', generated='2026-10-11', layers=LAYERS,
           grid=GRID, solar=SOLAR, rain=RAIN, well=WELL, controls=CTRL_SUM, farm=FARM, sustain=SUST, panels=PANELS, circuits=CIRC, cuLoad=CUload, elements=EL)
if __name__ == '__main__':
    dst = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'bim.json')
    json.dump(out, open(dst, 'w'), separators=(',', ':'))
    from collections import Counter
    print(len(EL), 'elements', Counter(e['layer'] for e in EL), os.path.getsize(dst) // 1024, 'KB', 'circuits', len(CIRC), CUload)
