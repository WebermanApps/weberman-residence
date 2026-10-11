# executed inside sheets.py after sheets_extra.py: A-401 Kitchen Plan + Elevations, kitchen overlays on A-101 / E-101 / P-101
KFURN = [f for f in P['furn'] if f.get('room') == '101']
def kfill(f):
    c = f['color']; return {'mat:oak': '#e9dcc4', 'mat:marble': '#f3f1ec', 'mat:steel': '#c9cdd0', 'mat:glass': '#e6eef0', 'mat:lamp': '#fff3c4'}.get(c, '#d9d2c5')
def casework(v, sh, lw=.18, labels=False):
    for f in sorted(KFURN, key=lambda f: f['z0'] + f['h']):
        if 'skylight' in f['label'].lower() or 'pendant' in f['label'].lower() or 'stools' == f['label'].lower(): continue
        a_, b_ = v.P(f['x0'], f['y1']), v.P(f['x1'], f['y0'])
        dash = '1.2,.6' if f['z0'] > 4 else None
        sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], 'none' if dash else kfill(f), sw=lw, dash=dash)
# ---------- A-101 overlay ----------
sh = sheets['A-101']; v = View(sh, K8, 115, 410); casework(v, sh, .12)
p = v.P(28, 52.5); sh.text(p[0], p[1], 'KITCHEN: SEE A-401', 1.6, 'middle', 600, font='Khand')
# ---------- E-101 / P-101 kitchen notes ----------
sh = sheets['E-101']; sh.tbnotes('Kitchen (Round 1)', ['Pro gas range 16 A (igniters); flush induction 20 A; steam + wall oven 32 A 2P; built-in stainless fridge 16 A; hood blower + MUA 16 A.', 'GFCI counter outlets at the appliance garage and island pop-ups; linear suspended LED on DALI. Detail on A-401.'])
sh = sheets['P-101']; v = View(sh, 25.4 * 3 / 32, 70, 330)
for e in EL:
    if e.get('system') == 'Gas (LPG)':
        if 'pts' in e: sh.poly([v.P(*q[:2]) for q in e['pts']], stroke='#0a0a0a', sw=.4, dash='4,1,1,1,1,1')
        elif e['cat'] == 'gas': g = e['g'][0]; a_, b_ = v.P(g[1], g[5]), v.P(g[4], g[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#ffffff', sw=.3); sh.text(a_[0], a_[1] - 1, 'LPG', 1.7, weight=600)
p = v.P(5, 60); sh.text(p[0] - 1, p[1], 'GAS 22 mm TO RANGE', 1.6, 'end', 600)
sh.tbnotes('Kitchen Gas + Water', ['LPG 2 x 48 kg cage, auto-changeover regulator; 22 mm line in sleeve to the 48" range (wok burner) with leak-interlocked solenoid. Optional 15 mm branch to the outdoor wok station.', 'Integrated quartzite sink: 50 mm waste to grease trap GT-1; RO-1 drinking tap + fridge ice line. See A-401.'])
# ======================= A-401 KITCHEN PLAN + ELEVATIONS =======================
sh = new('A-401'); K4 = 25.4 / 4
v = View(sh, K4, 40 - 2 * K4, 50 + 92 * K4)
sh.add('<clipPath id="kclip"><rect x="20" y="40" width="262" height="290"/></clipPath><g clip-path="url(#kclip)">')
draw_base(v, roomtext=False)
casework(v, sh, .25)
for f in KFURN:
    if f['label'] == 'Stools':
        for i in range(5): c = v.P(f['x0'] + 0.8 + i * 1.6, (f['y0'] + f['y1']) / 2); sh.circle(c[0], c[1], 3.4, '#ffffff', sw=.25)
og = next(e for e in EL if e.get('tag') == 'OWK')['g'][0]; a_, b_ = v.P(og[1], og[5]), v.P(og[4], og[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#f3f1ec', sw=.25, dash='2,1')
sk = v.P(24, 70.6); sk2 = v.P(32, 68.4); sh.rect(sk[0], sk[1], sk2[0] - sk[0], sk2[1] - sk[1], 'none', sw=.35, dash='3,1')
for e in EL:
    if e.get('system') == 'Gas (LPG)' and 'pts' in e: sh.poly([v.P(*q[:2]) for q in e['pts']], stroke='#0a0a0a', sw=.35, dash='4,1,1,1,1,1')
sh.add('</g>')
sh.rect(20, 40, 262, 290, sw=.3)
TAGS = [(25, 56.5, '1'), (21.5, 63.4, '2'), (21.5, 66, '3'), (21.5, 69.1, '4'), (27.5, 62, '5'), (28, 69, '6'), (28.1, 77.5, '7'), (24, 77.5, '8'), (33, 79, '9'), (23.25, 81.5, '10'), (28.7, 55.8, '11'), (15, 73, '12'), (22.5, 88.75, '13'), (28, 70.2, '14')]
for x, y, n in TAGS:
    c = v.P(x, y); sh.circle(c[0], c[1], 2.6, '#0a0a0a', sw=0); sh.text(c[0], c[1] + 1, n, 2.6, 'middle', 600, '#ffffff', 'Khand')
KEYN = ['48" pro gas range, wok burner, hood hidden in oak cabinetry above', 'Appliance garage, oak pocket doors, GFCI outlets', 'Built-in stainless fridge 36" (not panel-ready)', 'Steam oven + wall oven column', 'Work island: flush 2-zone induction, quartzite top', '10\' quartzite waterfall island, 5 stools on one side', 'Integrated quartzite sink + brushed stainless faucet, garden-view window', 'Dishwasher left of sink', 'Lift-and-slide pocket wall, opens fully to the pergola', 'Hydroponic herb wall (glazed nook) behind glass backsplash', 'Open rift oak shelves', 'Walk-in pantry (104), no scullery', 'Optional covered outdoor wok station', 'Skylight SK-1 over island + linear suspended LED']
title_mark(sh, 20, 340, '1', 'Kitchen Plan', '1/4" = 1\'-0"'); north(sh, 270, 55)
yy = 352; sh.text(20, yy, 'KEYNOTES', 3, weight=600, font='Khand'); yy += 5
for i, t in enumerate(KEYN): sh.text(20, yy, f"{i+1}.  {t}", 2.3); yy += 3.6
# elevations
def elev(ox, oy, title, n, span, items, flip=False, wallh=12):
    s0, s1 = span; L = (s1 - s0) * K4
    def X(a): return ox + ((s1 - a) if flip else (a - s0)) * K4
    def Z(z): return oy - z * K4
    sh.line(ox - 4, oy, ox + L + 4, oy, .6); sh.rect(ox, Z(wallh), L, wallh * K4, 'none', sw=.35)
    for lab, a, b, z0, z1, fill, dash in items:
        xa, xb = sorted((X(a), X(b))); sh.rect(xa, Z(z1), xb - xa, (z1 - z0) * K4, fill, sw=.25, dash=dash)
        if (xb - xa) > 14 and (z1 - z0) > 1.2:
            for i, l in enumerate(wrap(lab, int((xb - xa) / 1.2))[:3]): sh.text((xa + xb) / 2, Z((z0 + z1) / 2) + i * 2.4 - 1, l, 1.7, 'middle', 600)
    title_mark(sh, ox, oy + 12, n, title, '1/4" = 1\'-0"')
OAK, Q, ST, GL = '#e9dcc4', '#f3f1ec', '#c9cdd0', '#e6eef0'
elev(300, 150, 'North Elevation: Sink + Slide Wall', '2', (20, 36), [
    ('Oak base, handleless', 20.6, 30.3, 0, 2.85, OAK, None), ('Quartzite counter + sink', 20.5, 30.4, 2.85, 3.0, Q, None),
    ('Herb wall behind glass', 20.8, 25.8, 3.0, 7.5, GL, None), ('Garden window', 26.2, 30, 3.6, 7.5, GL, None),
    ('Lift-and-slide pocket wall (opens fully)', 30.5, 35.6, 0, 8, GL, '2,1')])
elev(440, 150, 'South Elevation: Range Wall', '3', (20, 36), [
    ('Oak base', 20.6, 30, 0, 2.85, OAK, None), ('48" range + wok', 23, 27, 0, 3.0, ST, None), ('Marble slab splash', 20.6, 30, 3.0, 6.4, Q, None),
    ('Oak cabinetry, hidden hood', 22.6, 27.4, 6.4, 9.8, OAK, None), ('Open oak shelves', 27.6, 29.8, 4.2, 7.4, 'none', '1,.6'), ('Open to engawa', 30, 36, 0, 9, 'none', '2,1')], flip=True)
elev(300, 290, 'West Elevation: Tall Wall + Pantry', '4', (55, 79), [
    ('Mudroom door', 59, 62, 0, 7.5, 'none', '2,1'), ('Appl. garage', 62.4, 64.4, 2.85, 5.85, OAK, None), ('Base', 62.4, 64.4, 0, 2.85, OAK, None),
    ('Built-in stainless fridge', 64.5, 67.5, 0, 7.2, ST, None), ('Steam + wall oven column', 67.6, 70.6, 0, 8.5, OAK, None), ('Pantry door', 71, 74, 0, 7.5, 'none', '2,1'),
    ('Oak base', 76.4, 78.6, 0, 2.85, OAK, None)], flip=True)
elev(480, 290, 'Island Elevation: Quartzite Waterfall', '5', (22, 34), [
    ('Waterfall end', 22.9, 23.15, 0, 3.03, Q, None), ('Rift oak base, flat slab', 23.15, 32.85, 0.15, 2.85, OAK, None), ('Waterfall end', 32.85, 33.1, 0, 3.03, Q, None),
    ('Quartzite top', 22.9, 33.1, 2.85, 3.03, Q, None), ('Linear suspended LED', 24, 32, 8.6, 8.75, '#fff3c4', None), ('Skylight SK-1 above', 24, 32, 11.4, 11.9, GL, '2,1')], wallh=12)
# schedules
sh.text(300, 350, 'MATERIAL + APPLIANCE SCHEDULE', 3, weight=600, font='Khand')
yy = table(sh, 300, 353, ['Item', 'Selection'], [['Cabinets', 'Rift white oak, flat slab, handleless (finger-pull reveal)'], ['Counters', 'Honed quartzite, 30 mm, mitred 60 mm edge'], ['Island', '10\' quartzite waterfall, stools on one side'], ['Sink', 'Integrated quartzite, carved from the counter'], ['Faucet', 'Brushed stainless (not brass, kitchen only)'], ['Backsplash', 'Honed marble slab (zellige or plaster alternate)'], ['Range', '48" pro gas with high-heat wok burner'], ['Hood', 'Insert hidden in oak cabinetry, 1,500 m3/h + MUA'], ['Fridge', '36" built-in stainless'], ['Ovens', 'Steam oven + wall oven column'], ['Cooktop 2', 'Flush 2-zone induction in work island'], ['Lighting', 'Skylight + linear suspended LED; shelf strips'], ['Opening', 'Lift-and-slide pocket wall to pergola']], [40, 95], 2.0)
sh.text(545, 350, 'ROUGH COST (THB, EXCL. VAT)', 3, weight=600, font='Khand')
yy2 = table(sh, 545, 353, ['Item', 'THB'], [[a, f"{c:,}"] for a, c in KITCHEN['costs']], [170, 25], 1.9)
sh.text(545, yy2 + 6, f"Kitchen total about {sum(c for _, c in KITCHEN['costs']):,} THB", 2.6, weight=600)
yy3 = para(sh, 545, yy2 + 14, 'Excluded per swipe: scullery/back kitchen, table-extension or furniture-style island, limestone, terrazzo, walnut, painted or plaster cabinets, shaker doors, undermount stainless sink, unlacquered brass faucet, panel-ready fridge.', 95, 2.2, 3.2)
sh.tbnotes('Kitchen Notes', ['Wok burner stays in the main kitchen (no scullery) with a wok-rated hidden hood and interlocked make-up air; outdoor wok station is optional.', 'Gas leak detector closes the range solenoid and boosts the hood (E-103).', 'Clearances: 42" min between islands and runs.'])
