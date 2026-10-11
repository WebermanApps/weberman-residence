# executed inside sheets.py: E-102, E-103, P-102, P-103
def box(sh, x, y, w, h, title, sub='', fill='#ffffff', bold=True):
    sh.rect(x, y, w, h, fill, sw=.4)
    lines = wrap(title, max(8, int(w / 1.55)))
    for i, l in enumerate(lines): sh.text(x + w / 2, y + 4.5 + i * 3.4, l, 2.6, 'middle', 600 if bold else 400, font='Khand' if bold else 'Hind')
    for i, l in enumerate(wrap(sub, max(10, int(w / 1.05)))): sh.text(x + w / 2, y + 5 + len(lines) * 3.4 + i * 2.6, l, 1.8, 'middle', fill='#404040')
def arrow(sh, pts, dash=None, w=.35):
    sh.poly(pts, sw=w, dash=dash); (x0, y0), (x1, y1) = pts[-2], pts[-1]; a = math.atan2(y1 - y0, x1 - x0)
    sh.poly([(x1 - 2 * math.cos(a - .4), y1 - 2 * math.sin(a - .4)), (x1, y1), (x1 - 2 * math.cos(a + .4), y1 - 2 * math.sin(a + .4))], '#0a0a0a', sw=.1, close=True)
def para(sh, x, y, text, n=90, size=2.4, gap=3.4):
    for l in wrap(text, n): sh.text(x, y, l, size); y += gap
    return y
# ======================= E-102 SOLAR =======================
sh = new('E-102'); K16 = 25.4 * 3 / 32; v = View(sh, K16, 40, 255)
draw_base(v, light=True, roomtext=False, doors=False)
for r in P['roofs']:
    x0, y0, x1, y1 = ext(r); a_, b_ = v.P(x0, y1), v.P(x1, y0); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], sw=.35)
    c = v.P((x0 + x1) / 2, y0 + 2); face = {'master': 'FACES S', 'living': 'N HALF FACES S', 'east': 'FACES E', 'west': 'FACES E', 'south': 'FACES N', 'office': 'FACES N'}[r['id']]
    sh.text(c[0], c[1], f"{r['id'].upper()} · {face}", 1.6, 'middle', 600, '#525252')
SCOL = {'S1': '#d4d4d4', 'S2': '#a3a3a3', 'S3': '#d4d4d4', 'S4': '#a3a3a3'}
for e in layer('solar'):
    if e['cat'] == 'module':
        g = e['g'][0]; a_, b_ = v.P(g[1], g[5]), v.P(g[4], g[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], SCOL[e['string']], sw=.2)
        sh.text((a_[0] + b_[0]) / 2, (a_[1] + b_[1]) / 2 + .6, e['string'], 1.4, 'middle', 600)
for e in layer('solar'):
    if e['cat'] in ('inverter', 'battery'):
        g = e['g'][0]; a_, b_ = v.P(g[1], g[5]), v.P(g[4], g[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1] + .8, '#0a0a0a', sw=.2)
        sh.text(b_[0] + 1, a_[1] + 1.5, e['tag'], 1.8, weight=600)
sh.poly([v.P(*p) for p in next(e for e in layer('solar') if e['cat'] == 'dc')['pts']], sw=.4, dash='2,.6')
title_mark(sh, 40, 275, '1', 'PV Roof Layout', '3/32" = 1\'-0"')
# single-line diagram
X, Y = 400, 40
sh.text(X, Y - 6, 'SINGLE-LINE DIAGRAM', 3.4, weight=600, font='Khand')
for i in range(4): box(sh, X + i * 30, Y, 26, 16, f'String S{i+1}', '11 x 455 W = 5.0 kWp, Voc ~ 545 V')
box(sh, X, Y + 26, 116, 10, 'PV Combiner / DC Isolators + SPD Type 2 (Rapid Shutdown Ready)', '')
for i in range(4): arrow(sh, [(X + 13 + i * 30, Y + 16), (X + 13 + i * 30, Y + 26)])
box(sh, X + 30, Y + 46, 56, 20, 'INV-1 Hybrid Inverter 20 kW', '3-ph 400 V, 4 MPPT, grid + backup ports, Modbus to HUB', '#f5f5f5')
arrow(sh, [(X + 58, Y + 36), (X + 58, Y + 46)])
box(sh, X + 100, Y + 48, 40, 16, 'BAT-1 LFP 30 kWh', 'BMS CAN to INV-1, DC breaker')
arrow(sh, [(X + 100, Y + 56), (X + 86, Y + 56)]); arrow(sh, [(X + 86, Y + 58), (X + 100, Y + 58)])
box(sh, X - 40, Y + 48, 34, 16, 'PEA Meter (Bi-Directional)', '3-ph 400 V, 30(100) A')
box(sh, X - 40, Y + 76, 34, 14, 'Generator 20 kVA', 'Auto-start via INV-1 dry contact')
box(sh, X + 30, Y + 78, 56, 12, 'ATS / Main Isolator 125 A + SPD Type 1', '')
arrow(sh, [(X - 6, Y + 56), (X + 30, Y + 56)]); arrow(sh, [(X - 6, Y + 83), (X + 30, Y + 83)]); arrow(sh, [(X + 58, Y + 66), (X + 58, Y + 78)])
box(sh, X + 10, Y + 100, 44, 14, 'MDB (Essential + General Loads)', '125 A, 3-ph, RCBO')
box(sh, X + 62, Y + 100, 44, 14, 'Backup Loads Panel', 'Lights, fridge, network, pumps, 2 AC zones')
arrow(sh, [(X + 50, Y + 90), (X + 32, Y + 100)]); arrow(sh, [(X + 66, Y + 90), (X + 84, Y + 100)])
box(sh, X + 10, Y + 122, 44, 10, 'SDB-W  ·  SDB-S', ''); arrow(sh, [(X + 32, Y + 114), (X + 32, Y + 122)])
sh.text(X - 40, Y + 142, 'Earthing: TN-C-S, PV frames bonded, separate DC SPD earth; all to < 5 ohm ring.', 2.2)
# energy + options tables
sh.text(40, 300, 'ANNUAL ENERGY ESTIMATE', 3.4, weight=600, font='Khand')
yy = table(sh, 40, 303, ['Load', 'kWh/yr', 'Basis'], [[a, f"{b:,}", c] for a, b, c in SOLAR['loads']] + [['Total (Without EV)', f"{SOLAR['base']:,}", f"~{SOLAR['base']//365} kWh/day avg; hot-season days ~110 kWh"], ['Optional EV (15,000 km/yr)', f"{SOLAR['ev']:,}", '7.4 kW charger, solar-timed']], [70, 18, 110], 2.1)
sh.text(40, yy + 6, f"Peak demand (coincident) about {SOLAR['peak_kw']} kW: AC 17 kW + sauna 9 kW + range 4 kW + misc; with EV ~40 kW.", 2.3)
sh.text(40, yy + 18, 'OPTIONS (ROUGH THB, 2026)', 3.4, weight=600, font='Khand')
yy = table(sh, 40, yy + 21, ['Option', 'kWp', 'Battery', 'kWh/yr Gen', 'Self-Used', 'Covers', 'Cost THB', 'Saves THB/yr', 'Payback'],
           [[o['name'], o['kwp'], f"{o['batt']} kWh", f"{o['gen']:,}", f"{o['used']:,}", f"{o['cover']}%", f"{o['cost']:,.0f}", f"{o['save']:,.0f}", f"{o['payback']} yr"] for o in SOLAR['options']], [62, 12, 18, 22, 20, 14, 24, 24, 16], 2.1)
yy = para(sh, 40, yy + 8, f"Assumptions: yield {SOLAR['yield_']} kWh/kWp/yr on ~4 degree roofs; tariff {SOLAR['tariff']} THB/kWh (PEA residential incl. Ft); export credit {SOLAR['buyback']} THB/kWh only for the first 10 kWp under the PEA/ERC residential rooftop scheme (10-yr contract), surplus above that self-consumed or curtailed (zero-export). Installed cost ~30k THB/kWp incl. hybrid inverter; LFP ~14k THB/kWh.", 170, 2.2, 3.1)
yy = para(sh, 40, yy + 3, "Recommendation: Option B. 20 kWp on the south-facing planes (master roof + living north half) plus the east wing, with a 30 kWh battery: about 77% of annual use from solar, 9-yr payback, and 6-10 h of backup for essentials during mountain grid outages. The full roof (C) exports mostly unpaid power and never pays back. The north-facing south-wing and studio roofs stay clear (lower yield, sauna/steam vents).", 170, 2.4, 3.3)
sh.tbnotes('Solar Notes', ['Clamp-on mounts to standing seam: no roof penetrations; keep 0.5 m from eaves for wind uplift.', 'Permits: PEA grid-connection approval, ERC exemption (< 1 MW), local building notice; engineer-signed roof check.', 'Tax deduction for residential rooftop solar (2025 measure, up to 200k THB) to be confirmed.'])

# ======================= E-103 CONTROLS =======================
sh = new('E-103')
sh.text(40, 34, 'CONTROLS + MONITORING BLOCK DIAGRAM', 4, weight=600, font='Khand')
HX, HY = 300, 150
box(sh, HX, HY, 110, 26, 'Home Controller (Home Assistant) + Zigbee/Thread + UPS', 'Local-first in AV rack 405; VPN for remote; nightly backup', '#f5f5f5')
groups = {
 'Energy': (40, 50, [('INV-1 Hybrid Inverter', 'Modbus RS485: PV, grid, load, surplus'), ('BAT-1 LFP 30 kWh', 'SoC, reserve 30%'), ('Per-Circuit CT Monitor', '32 ch at MDB + SDB-W'), ('Generator', 'Auto-start, run hours')]),
 'Water': (40, 200, [('Tank Levels', 'T-1, T-2, T-3, RT-1, TT-1'), ('Well Pump Controller', 'Flow, dry-run, run hours'), ('Treatment', 'Filter ΔP, backwash, UV lamp status'), ('Booster BP-1', 'Pressure, faults')]),
 'Garden': (40, 350, [('Irrigation Controller', '6 drip zones, IP-1 pump'), ('Soil Moisture x 6', 'One per zone'), ('Weather Station', 'Rain, ET, wind, irradiance'), ('Cistern Top-Up Valve', 'Well via air gap')]),
 'Pool + Wellness': (560, 50, [('Pool Pump VS + Salt Cell', 'Solar-surplus schedule'), ('Sauna + Steam', 'Pre-heat from app, interlocks'), ('Cold Plunge Chiller', 'Off-peak / surplus')]),
 'Climate': (560, 200, [('VRF Gateway CU-1/2/3', 'Setpoints, schedules, occupancy'), ('ERV-1, ERV-2', 'Boost on humidity/CO2'), ('Dehumidifier DH-1', 'Gym + wet room')]),
 'Safety + Leak': (560, 350, [('Leak Sensors x 14', 'Sinks, WCs, heater, washer, AHU'), ('Auto Shut-Off Valve', 'Main at 206 + flow meter'), ('Smoke / CO + Cameras', 'NVR in rack')]),
}
for g, (gx, gy, items) in groups.items():
    sh.text(gx, gy - 3, g.upper(), 3, weight=600, font='Khand')
    for i, (a, b_) in enumerate(items):
        box(sh, gx, gy + i * 24, 120, 19, a, b_, bold=True)
        sy = gy + i * 24 + 9.5
        if gx < HX: arrow(sh, [(gx + 120, sy), (HX - 10, sy), (HX - 10, HY + 13), (HX, HY + 13)], '1.2,.6', .25)
        else: arrow(sh, [(gx, sy), (HX + 120, sy), (HX + 120, HY + 13), (HX + 110, HY + 13)], '1.2,.6', .25)
box(sh, HX, HY + 50, 110, 22, 'Phone Dashboard + Genkan Wall Tablet', 'Energy · Water · Pool · Climate · Alerts')
arrow(sh, [(HX + 55, HY + 26), (HX + 55, HY + 50)])
# phone mock
PX, PY = 330, 250
sh.rect(PX, PY, 52, 104, '#ffffff', sw=.6, rx=5); sh.rect(PX + 3, PY + 7, 46, 90, '#fafafa', sw=.2)
cards = [('Solar Now', '12.4 kW · Battery 82%'), ('Today', '64 kWh made · 51 used'), ('Water', 'Cisterns 71% · House tank 90%'), ('Garden', 'Z1-Z6 skipped: rain 6 mm'), ('Pool', 'Running on surplus · 4.2 h'), ('Climate', 'Living 25 °C · Kids 26 °C'), ('Alerts', 'All clear')]
for i, (a, b_) in enumerate(cards):
    sh.rect(PX + 5, PY + 10 + i * 12, 42, 10.5, '#ffffff', '#e5e5e5', .2, rx=1.5); sh.text(PX + 7, PY + 14.3 + i * 12, a.upper(), 1.7, weight=600, font='Khand'); sh.text(PX + 7, PY + 18 + i * 12, b_, 1.6, fill='#404040')
sh.text(PX + 26, PY + 112, 'PHONE DASHBOARD CONCEPT', 2.4, 'middle', 600, font='Khand')
sh.text(40, 470, 'KEY AUTOMATIONS', 3.4, weight=600, font='Khand'); yy = 476
for a in CTRL_SUM['automations']: yy = para(sh, 42, yy, '• ' + a, 150, 2.3, 3.1)
sh.text(400, 470, 'CONTROLS BUDGET (ROUGH THB)', 3.4, weight=600, font='Khand')
table(sh, 400, 473, ['Tag', 'Item', 'THB'], [[t, n, f"{c:,}"] for t, n, s_, g, c in CTRL_SUM['items']] + [['', 'Total', f"{CTRL_SUM['total']:,}"]], [12, 120, 20], 1.75)
sh.tbnotes('Controls Notes', ['Local-first: automations keep running without internet.', 'Open protocols (Modbus, Zigbee, Matter) so devices can be swapped.', 'Device locations shown on the Controls layer in the 3D viewer.'])

# ======================= P-102 RAINWATER + IRRIGATION =======================
sh = new('P-102'); K32 = 25.4 / 32; v = View(sh, K32 * 2, 200, 300)
draw_base(v, light=True, roomtext=False, doors=False); site_outline(v)
for e in EL:
    if e['layer'] == 'water' and e['cat'] == 'zone':
        sh.poly([v.P(*p) for p in e['pts']], sw=.3, dash='1.5,.6'); p = v.P(*e['pts'][-1]); sh.text(p[0] + 1, p[1] - 1, e['tag'], 2, weight=600)
    if e['layer'] == 'plumb' and e['cat'] == 'rain' and 'pts' in e: sh.poly([v.P(*p[:2]) for p in e['pts']], stroke='#737373', sw=.3 if e.get('tag') != 'RWL' else .6, dash='4,1')
for e in EL:
    if e['layer'] == 'water' and e['cat'] in ('tank', 'ff', 'pump') and 'pos' in e:
        g = e['g'][0]; x, y = v.P(*e['pos'])
        if g[0] == 'c': sh.circle(x, y, g[3] * v.k, '#ffffff', sw=.4)
        else: a_, b_ = v.P(g[1], g[5]), v.P(g[4], g[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#ffffff', sw=.4, dash='1.5,.6' if 'Buried' in e['type'] else None)
        sh.text(x, y + .7, e['tag'], 1.8, 'middle', 600)
q = S['veg']; a_, b_ = v.P(q['x0'], q['y1']), v.P(q['x1'], q['y0']); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], sw=.3); sh.text(a_[0], a_[1] - 1, 'VEGETABLE GARDEN', 1.8, weight=600)
for x, y in S['maples']: p = v.P(x, y); sh.circle(p[0], p[1], 2, sw=.3)
for x, y in S['orchard']: p = v.P(x, y); sh.circle(p[0], p[1], 2.5, sw=.3)
sh.poly([v.P(110, 24.5), v.P(136, 24.5)], sw=.5, dash='4,1'); sh.text(*v.P(136, 26), 'OVERFLOW TO SWALE + SOAKAWAY', 1.8, 'end', 600)
for e in layer('farm'):
    if 'pos' not in e or not e['g']: continue
    g = e['g'][0]
    if g[0] == 'b':
        a_, b_ = v.P(g[1], g[5]), v.P(g[4], g[2]); sh.rect(a_[0], a_[1], b_[0] - a_[0], b_[1] - a_[1], '#f5f5f5' if e['cat'] in ('bed', 'compost') else '#ffffff', sw=.3)
    if e['cat'] in ('coop', 'run', 'greywater', 'nook'): sh.text(*v.P(*e['pos']), e['tag'], 1.8, 'middle', 600)
for e in layer('farm'):
    if 'pts' in e: sh.poly([v.P(*p) for p in e['pts']], stroke='#7c3aed', sw=.35, dash='2,.5')
sh.text(*v.P(-40, 39), 'COOP + RUN (DOWNWIND OF HOUSE)', 1.7, 'middle', 600); sh.text(*v.P(-18, 94), 'COMPOST', 1.7, 'middle', 600)
title_mark(sh, 40, 395, '1', 'Rainwater, Irrigation + Kitchen Garden Plan', '1/16" = 1\'-0"'); north(sh, 50, 40)
sh.text(470, 40, 'CISTERN SIZING', 3.4, weight=600, font='Khand')
yy = para(sh, 470, 47, f"Roof catchment {RAIN['roof_m2']} m² (all planes incl. eaves); about 35% (living, master, east) piped to the garden cisterns, the rest to swales. Rainfall about {RAIN['annual_mm']:,} mm/yr, ~88% May-Oct (monsoon). Runoff factor 0.8 (metal roof, first flush). Dry-season (Nov-Apr) drip demand {RAIN['dry_demand']} m³ for the vegetable garden (49 m²), 4 maples, 7 orchard trees and ~120 m² planting.", 120, 2.2, 3.1)
yy = table(sh, 470, yy + 2, ['Month', 'Inflow m³', 'Demand m³', 'Supplied m³', 'Stored m³'], [list(b) for b in RAIN['balance']], [18, 22, 22, 24, 22], 1.9)
sh.text(470, yy + 8, 'OPTIONS', 3, weight=600, font='Khand')
yy = table(sh, 470, yy + 11, ['Total Storage', 'Dry-Season Coverage', 'Rough THB (Incl. Gutters, FF, Pump, Drip)'], [[f"{a} m³", f"{b}%", f"{c:,}"] for a, b, c in RAIN['sizes']], [30, 36, 70], 2.0)
yy = para(sh, 470, yy + 6, f"Selected: {int(RAIN['cistern_m3'])} m³ = T-1 + T-2 (2 x 19 m³, utility yard) + buried T-3 (42 m³ crate tank). Covers about {RAIN['dry_coverage']}% of dry-season irrigation; the balance (Jan-Apr) is topped up from the well through an air gap, controlled by tank level + soil moisture.", 120, 2.3, 3.2)
legend(sh, 470, yy + 6, [('line', {'w': .3, 'dash': '1.5,.6'}, 'Drip zone lateral (Z1-Z6)'), ('line', {'w': .6, 'c': '#737373', 'dash': '4,1'}, 'Rainwater collector + leaders'), ('rect', {'dash': '1.5,.6'}, 'Buried cistern'), ('circle', {'r': 1.5}, 'Tree / maple (bubblers)')], 'Legend')
sh.tbnotes('Rainwater Notes', ['Gutters on every low eave with leaf screens; first-flush diverters (~1 mm/m²) at both ring inlets.', 'Garden water is non-potable: purple pipe, labels, no cross-connection with house supply.', 'Overflow to a planted swale + soakaway down-slope, away from the drain field.'])

# ======================= P-103 WATER SOURCE + TREATMENT =======================
sh = new('P-103')
sh.text(40, 34, 'WATER SOURCE PRIORITY + TREATMENT SCHEMATIC', 4, weight=600, font='Khand')
pr = [('1. Rainwater', 'Garden cisterns T-1/T-2/T-3 for irrigation only'), ('2. Drilled Well', 'Primary house supply, via treatment'), ('3. Mains (PWA)', 'Backup into RT-1 via 50 mm air gap + RPZ')]
for i, (a, b_) in enumerate(pr): box(sh, 40 + i * 92, 42, 84, 18, a, b_, '#f5f5f5' if i == 1 else '#ffffff')
# well section
WX, WY = 60, 90
sh.line(WX - 20, WY + 10, WX + 40, WY + 10, .6); sh.rect(WX, WY + 10, 8, 150, '#fafafa', sw=.4)
for z in range(0, 150, 6): sh.line(WX - 6, WY + 16 + z, WX - 2, WY + 12 + z, .1, '#737373')
sh.rect(WX + 1.5, WY + 130, 5, 18, '#0a0a0a', sw=.2); sh.text(WX + 12, WY + 140, 'SUBMERSIBLE PUMP 1.5 kW', 2, weight=600)
sh.text(WX + 12, WY + 30, 'CASING 150 mm PVC CL.13.5', 2, weight=600); sh.text(WX + 12, WY + 34, 'Grouted surface seal 6 m', 1.9)
sh.text(WX + 12, WY + 100, 'SCREEN AT AQUIFER', 2, weight=600); sh.text(WX + 12, WY + 162, 'DEPTH 60-120 m (BY HYDRO-SURVEY)', 2, weight=600)
title_mark(sh, 40, 285, '1', 'Typical Deep Well', 'NTS')
# treatment train
TX, TY = 170, 100
items = WELL['train']; xs_ = []
for i, (t, n, s_, c) in enumerate(items):
    x = TX + (i % 5) * 58; y = TY + (i // 5) * 50
    box(sh, x, y, 50, 30, f"{t}: {n}", s_); xs_.append((x, y))
for i in range(len(xs_) - 1):
    (x0, y0), (x1, y1) = xs_[i], xs_[i + 1]
    if y0 == y1: arrow(sh, [(x0 + 50, y0 + 15), (x1, y1 + 15)])
    else: arrow(sh, [(x0 + 25, y0 + 30), (x0 + 25, y0 + 40), (x1 + 25, y0 + 40), (x1 + 25, y1)])
arrow(sh, [(WX + 4, WY + 10), (WX + 4, TY + 15 - 5), (TX, TY + 15 - 5)])
sh.text(TX - 2, TY + 6, 'WELL', 1.8, 'end', 600)
lx, ly = xs_[-1]; arrow(sh, [(lx + 50, ly + 15), (lx + 80, ly + 15)]); sh.text(lx + 82, ly + 16, 'TO HOUSE 3 bar', 2.2, weight=600)
sh.text(TX, TY - 6, 'TREATMENT TRAIN (WATER TREATMENT SHED, UTILITY YARD)', 3, weight=600, font='Khand')
box(sh, TX + 232, TY + 90, 58, 22, 'RO-1 Kitchen Drinking Water', '75 GPD under sink, remineralizer')
box(sh, TX, TY + 90, 70, 22, 'Mains Backup (PWA)', 'Meter + RPZ, 50 mm air gap into RT-1')
arrow(sh, [(TX + 35, TY + 90), (TX + 35, TY + 30)], '2,.6')
sh.text(170, 245, 'SIZING + PRIORITY', 3.4, weight=600, font='Khand')
yy = 252
for k_, lab in [('demand', 'Demand'), ('depth', 'Well depth'), ('casing', 'Casing'), ('pump', 'Pump')]: yy = para(sh, 172, yy, f"{lab}: {WELL[k_]}", 140, 2.3, 3.2)
yy = para(sh, 172, yy + 2, 'Storage: 2,000 L raw (aeration, contact time) + 4,000 L treated (≈ 2.5 days) + 300 L pressure tank. Cisterns T-1..T-3 stay garden-only.', 140, 2.3, 3.2)
yy = para(sh, 172, yy + 2, 'WATER TEST FIRST: ' + WELL['test'] + '. Iron/manganese and softening stages are installed only if the test shows they are needed.', 140, 2.4, 3.3)
yy = para(sh, 172, yy + 2, 'Controls: well pump on RT-1 level; ΔP alerts call a backwash on solar surplus; UV fault closes the house valve and alerts; tank levels on the dashboard (E-103).', 140, 2.3, 3.2)
sh.text(470, 245, 'ROUGH COST (THB)', 3.4, weight=600, font='Khand')
table(sh, 470, 249, ['Item', 'THB'], [[a, f"{b:,}"] for a, b in WELL['costs']] + [['Total', f"{WELL['total']:,}"]], [120, 24], 2.1)
sh.tbnotes('Water Notes', ['Well permit from the DGR (Groundwater Act) for wells > 15 m deep; licensed driller.', 'Backflow: RPZ on mains, air gaps on every top-up, no cross-connection with garden water.', 'Locate the well > 30 m from the drain field and septic.'])

# ======================= G-002 SUSTAINABILITY SUMMARY =======================
sh = new('G-002')
sh.text(40, 50, 'SUSTAINABLE LUXURY', 18, weight=600, font='Khand', extra=' letter-spacing="1"')
sh.text(40, 62, 'Quiet, high-craft living that makes its own energy and water and closes the food + waste loop.', 4.2, fill='#404040')
kp = [(f"{SOLAR['kwp']} kWp", 'Solar PV + 30 kWh battery'), ('~77%', 'Electricity from the sun'), (f"{int(RAIN['cistern_m3'])} m³", 'Rainwater storage for the garden'), (f"~{RAIN['dry_coverage']}%", 'Dry-season garden water from rain'), ('Well', 'Primary house water; mains backup only'), ('4-6 Hens', 'Eggs + compost loop')]
for i, (a, b_) in enumerate(kp):
    x0 = 40 + i * 118; sh.rect(x0, 74, 110, 34, '#f5f5f5', 'none', rx=3); sh.text(x0 + 6, 94, a, 11, weight=600, font='Khand'); sh.text(x0 + 6, 102, b_, 2.8, fill='#404040')
sh.text(40, 126, 'MOVES, STATUS + ROUGH COST (THB)', 4.5, weight=600, font='Khand')
yy = table(sh, 40, 130, ['Move', 'Status', 'Rough THB', 'Impact'], [[a, b_, (f"{c:,}" if c else 'Cost-neutral'), d] for a, b_, c, d in SUST], [300, 30, 34, 140], 2.6)
inc = sum(c for _, s_, c, _ in SUST if s_ == 'Included'); opt_ = sum(c for _, s_, c, _ in SUST if s_ == 'Optional')
sh.text(40, yy + 8, f"Included total about {inc:,} THB  ·  Optional add-ons about {opt_:,} THB  (concept-level, 2026 prices, excl. VAT)", 3.2, weight=600)
yy = para(sh, 40, yy + 20, 'Sheet references: E-102 Solar, E-103 Controls, P-102 Rainwater + Kitchen Garden, P-103 Well + Treatment, M-101 HVAC. In the 3D viewer, the Solar, Water + Rainwater, Controls and Landscape + Farm layers show each system in place.', 200, 2.8, 4)
sh.tbnotes('Notes', ['Costs are rough order-of-magnitude for budgeting; confirm with Thai contractors.', 'Carbon figures use the Thai grid factor ~0.5 kg CO2/kWh.'])
