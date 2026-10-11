# ---- executed inside model.py: SOLAR, WATER (rainwater, well, treatment), CONTROLS ----
# ===== energy estimate (kWh/yr) =====
LOADS = [('Split / VRF air-conditioning', 16400, 'Connected ~348k BTU/h (~25 kW elec); mountain climate, zoned scheduling'),
         ('Pool pump (VS) + salt cell', 2600, '0.6 kW avg x 10 h + cell'),
         ('Sauna heater 9 kW', 1700, '3 sessions/week incl. pre-heat'),
         ('Steam generator 9 kW', 750, '2 sessions/week'),
         ('Cold plunge chiller', 1100, '~3 kWh/day'),
         ('Heat-pump water heater', 900, '~2.5 kWh/day'),
         ('Kitchen, laundry, lighting, plugs, ERV, studio, network, pumps', 6600, '~18 kWh/day'),
         ('Water: well, booster, treatment, irrigation pumps', 500, '')]
BASE = sum(l[1] for l in LOADS); EV = 2400
YIELD = 1380   # kWh/kWp/yr, low-slope (~4 deg) roofs in N. Thailand, after losses
TARIFF, BUYBACK = 4.5, 2.2
def opt(name, kwp, batt, selfc, cost_pv=30000, cost_b=14000):
    gen = kwp * YIELD; used = min(gen * selfc, BASE); exp = gen - used
    exp_val = min(exp, 10 * YIELD * 0.3) * BUYBACK   # only a ~10 kWp share qualifies for the 2.20 THB buyback
    cost = kwp * cost_pv + batt * cost_b; sav = used * TARIFF + exp_val
    return dict(name=name, kwp=kwp, batt=batt, gen=round(gen), used=round(used), cover=round(100 * used / BASE), cost=round(cost, -3), save=round(sav, -3), payback=round(cost / sav, 1))
OPTS = [opt('A: 12 kWp + 15 kWh', 12, 15, 0.92), opt('B: 20 kWp + 30 kWh (Recommended)', 20, 30, 0.85), opt('B0: 20 kWp, no battery', 20, 0, 0.55), opt('C: Full roof ~125 kWp + 30 kWh', 125, 30, 0.15, 26000)]
# panel layout on south-facing / near-flat planes: master (faces S), living north half (faces S), east wing (faces E, 3 deg)
MOD_W, MOD_D, MOD_KW = 7.48, 3.71, 0.455   # 2278 x 1134 mm, 455 W
def roof(id_): return next(r for r in P['roofs'] if r['id'] == id_)
spots = []
def pack(r, x0, y0, x1, y1, holes=()):
    y = y0
    while y + MOD_D <= y1:
        x = x0
        while x + MOD_W <= x1:
            if not any(x < hx1 + 1 and x + MOD_W > hx0 - 1 and y < hy1 + 1 and y + MOD_D > hy0 - 1 for hx0, hy0, hx1, hy1 in holes):
                spots.append((r, x, y))
            x += MOD_W + 0.1
        y += MOD_D + 0.15
pack(roof('master'), 74, 61.5, 101, 85.5, roof('master').get('holes', []))
pack(roof('living'), 8, 69.5, 71.5, 84.5)
pack(roof('east'), 74, 16, 100, 57)
NMOD = 44; spots = spots[:NMOD]
for i, (r, x, y) in enumerate(spots):
    z = roofTop(r, x + MOD_W / 2, y + MOD_D / 2) + 0.35
    add('solar', 'module', 'PV Module 455 W (Mono PERC, Black Frame)', '2,278 x 1,134 mm on standing-seam clamps (no penetrations)', 'Solar PV',
        [B(x, y, z, x + MOD_W, y + MOD_D, z + 0.15)], roof=r['id'], tag=f"PV-{i+1:02d}", string=f"S{1 + i // 11}", pos=[x + MOD_W / 2, y + MOD_D / 2])
SE = dict(x0=125.5, y0=6.5, x1=134.5, y1=11.5)
add('solar', 'inverter', 'Hybrid Inverter INV-1 (3-Phase)', '20 kW, 4 MPPT, 400 V 3-ph, backup port, Modbus/RS485 + Wi-Fi', 'Solar PV', [B(126, 10.6, 2.5, 129, 11.3, 5.8)], tag='INV-1', pos=[127.5, 11])
add('solar', 'battery', 'LFP Battery Bank BAT-1', '30 kWh (6 x 5 kWh rack modules, 51.2 V or HV stack), BMS CAN link', 'Solar PV', [B(129.5, 10.4, 0.3, 134, 11.4, 5)], tag='BAT-1', pos=[131.8, 11])
add('solar', 'enclosure', 'Solar Equipment Lean-To', 'Roofed, ventilated, IP55 isolators, 1 m clear access, smoke detector', 'Solar PV', [B(SE['x0'], SE['y0'], 8, SE['x1'], SE['y1'], 8.3)], tag='SE', pos=[130, 9])
add('solar', 'dc', 'DC Home Runs (4 Strings)', '2 x 6 mm² PV1-F per string in UV-rated conduit, rapid-shutdown ready', 'Solar PV',
    [PIPE([(87, 62, 12), (99.6, 62, 12), (99.6, 62, -2), (99.6, 11, -2), (126, 11, -2), (127.5, 11, 2.5)], 0.12)], pts=[[87, 62], [99.6, 62], [99.6, 11], [127.5, 11]])
SOLAR = dict(loads=LOADS, base=BASE, ev=EV, peak_kw=32, yield_=YIELD, tariff=TARIFF, buyback=BUYBACK, options=OPTS, modules=len(spots), kwp=round(len(spots) * MOD_KW, 1), rec='B')

# ===== rainwater for the garden =====
ROOF_M2 = round(sum((ext(r)[2] - ext(r)[0]) * (ext(r)[3] - ext(r)[1]) for r in P['roofs']) * 0.0929)
RAINMM = dict(Jan=8, Feb=12, Mar=25, Apr=60, May=160, Jun=150, Jul=170, Aug=220, Sep=230, Oct=120, Nov=40, Dec=12)   # northern-Thai upland, ~1,200 mm
DEM = dict(Jan=24, Feb=24, Mar=27, Apr=27, May=10, Jun=4, Jul=4, Aug=3, Sep=3, Oct=8, Nov=18, Dec=22)   # m3/month drip demand
# garden: vegetable garden 24x22 ft (49 m²) + 4 Japanese maples + orchard (7 trees) + bath/front gardens ~120 m² planting
def simulate(CIST):
  store = CIST; bal = []
  for mo in ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] * 2:
    inflow = ROOF_M2 * RAINMM[mo] / 1000 * 0.8 * 0.35   # ~35% of roof area (living + master + east planes) piped to the garden cisterns
    store = min(CIST, store + inflow); use = min(store, DEM[mo]); store -= use
    bal.append((mo, round(inflow, 1), DEM[mo], round(use, 1), round(store, 1)))
  bal = bal[12:]; dry = [b for b in bal if b[0] in ('Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr')]
  return bal, round(100 * sum(b[3] for b in dry) / sum(b[2] for b in dry))
SIZES = [(v, simulate(v)[1], round(v * 7000 + 150000, -3)) for v in (38, 60, 80, 120)]
CIST = 80.0
bal, DRYCOV = simulate(CIST)
RAIN = dict(sizes=SIZES, roof_m2=ROOF_M2, annual_mm=sum(RAINMM.values()), rain=RAINMM, demand=DEM, cistern_m3=CIST, balance=bal, dry_coverage=DRYCOV,
            annual_harvest=round(ROOF_M2 * sum(RAINMM.values()) / 1000 * 0.8), dry_demand=sum(DEM[m_] for m_ in ('Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr')))
add('water', 'tank', 'Buried Garden Cistern T-3', '42,000 L modular crate tank, 6 x 4 x 1.75 m, geomembrane, traffic lid, level sensor', 'Rainwater Harvesting', [B(100.5, -20, -7, 120, -7, -0.8)], tag='T-3', pos=[110, -13.5])
for x, y in ((101.5, 14.5), (101.5, 88)):
    add('water', 'ff', 'First-Flush Diverter + Leaf Screen', '150 mm, 1 mm/m² diversion (~40 L), auto-drain', 'Rainwater Harvesting', [CYL(x, y, 0.6, 0, 4)], tag='FF', pos=[x, y])
add('water', 'pump', 'Irrigation Pump + Disc Filter', '0.75 kW pressure pump, 120 mesh disc filter, 6-zone controller (smart)', 'Irrigation', [B(112.5, 16, 0, 115.5, 18.5, 2.5)], tag='IP-1', pos=[114, 17.2])
ZONES = [('Z1 Vegetable Garden', [(-30, 64), (-6, 64), (-6, 86), (-30, 86)], 'Inline drip 16 mm, 2 L/h @ 300 mm'), ('Z2 Orchard', [(-56, 70), (-46, 70), (-46, 90), (-36, 94)], 'Point drippers 4 x 8 L/h per tree'),
         ('Z3 Courtyard Maples + Lawn Edge', [(40.5, 46.5), (39, 52.3), (62, 51.8), (66.5, 47.5)], 'Bubblers 2 x 4 L/h per maple, soil sensor'), ('Z4 Bath Garden', [(98, 69), (106, 69), (106, 83), (98, 83)], 'Drip 2 L/h'),
         ('Z5 Front Gardens', [(-16, 38), (-2, 38), (-2, 46), (-16, 57), (2, 57), (2, 62)], 'Drip 2 L/h'), ('Z6 Pool Deck Planting', [(48, -26), (98, -26)], 'Drip 2 L/h')]
for nm, pts_, spec in ZONES:
    main = [(114, 17.2)] + [(114, -32), (-60, -32), (-60, 66)] if pts_[0][0] < 0 else [(114, 17.2), (114, 26), (pts_[0][0], 26)]
    add('water', 'zone', 'Drip Zone ' + nm, spec, 'Irrigation', [PIPE([(x, y, -0.6) for x, y in main + pts_], 0.08)], tag=nm.split()[0], pts=[list(p) for p in main + pts_])
# ===== well + treatment (P-103) =====
WELL = dict(depth='60-120 m (typical Thai deep well), confirm by DGR hydro-survey', casing='150 mm (6") PVC Class 13.5 + steel surface casing, grouted 6 m', pump='Submersible 1.5 kW (2 HP), 3 m³/h @ 60 m head, dry-run + low-level cut-out',
            demand='6 people x 200 L + pool/plunge make-up ≈ 1.5 m³/day; peak 60 L/min', test='Lab water test (Fe, Mn, hardness, TDS, pH, nitrate, arsenic, coliform) BEFORE final treatment selection; about 3,000-5,000 THB')
TRAIN = [('RT-1', 'Raw Water Tank + Aeration (Oxidizes Fe/Mn)', '2,000 L PE tank, venturi aerator, float + level sensor', 126, 21, 18000),
         ('F-1', 'Multimedia Sediment Filter', '10" x 54" vessel, auto backwash', 128.5, 21.5, 25000),
         ('F-2', 'Iron + Manganese Filter (Greensand / Birm)', '10" x 54", auto backwash, ΔP sensor', 130.5, 21.5, 45000),
         ('F-3', 'Water Softener (If Hardness > 150 mg/L)', '30 L resin, brine tank, meter-initiated regen', 132.5, 21.5, 40000),
         ('F-4', 'Activated Carbon Filter', '10" x 54" GAC, ΔP sensor', 132.5, 18.5, 30000),
         ('F-5', 'Cartridge Filter 5 µm', 'Big Blue 20"', 130.5, 18.2, 6000),
         ('UV-1', 'UV Disinfection', '12 GPM, 40 mJ/cm², lamp + intensity alarm', 128.5, 18.2, 25000),
         ('TT-1', 'Treated Water Tank', '4,000 L PE, level sensor', 126, 15, 20000),
         ('BP-1', 'Booster Pump (VSD) + 300 L Pressure Tank', 'Constant 3 bar, dry-run protect', 129.5, 14.5, 42000)]
for tag, nm, spec, x, y, c in TRAIN:
    add('water', 'treat', nm, spec, 'Water Treatment', [CYL(x, y, 0.9, 0, 5)] if tag.startswith('F') else [B(x - 1.2, y - 1.2, 0, x + 1.2, y + 1.2, 4)], tag=tag, pos=[x, y], cost=c)
add('water', 'pipe', 'Treatment Train Piping', '40 mm PPR', 'Water Treatment', [PIPE([(126, 21, 3), (128.5, 21.5, 3), (130.5, 21.5, 3), (132.5, 21.5, 3), (132.5, 18.5, 3), (130.5, 18.2, 3), (128.5, 18.2, 3), (126, 15, 3), (129.5, 14.5, 3), (124, 14, 1)], 0.13)], pts=[[126, 21], [128.5, 21.5], [130.5, 21.5], [132.5, 21.5], [132.5, 18.5], [130.5, 18.2], [128.5, 18.2], [126, 15], [129.5, 14.5], [124, 14]])
add('water', 'mains', 'Mains (PWA) Backup Connection', '25 mm, meter + RPZ backflow preventer, discharges via 50 mm AIR GAP into RT-1', 'Water Supply', [PIPE([(136, 26, -2), (127, 26, -2), (126, 22.5, 6)], 0.08)], tag='AG', pts=[[136, 26], [127, 26], [126, 22.5]])
add('water', 'mains', 'Well Top-Up to Garden Cistern (Air Gap)', '20 mm via solenoid, 50 mm air gap above T-1 overflow', 'Water Supply', [PIPE([(126, 21, 4), (117, 21, 10)], 0.06)], tag='AG', pts=[[126, 21], [117, 21]])
add('water', 'treat', 'Kitchen RO Drinking Water Unit', '75 GPD, 5-stage + remineralizer, under sink', 'Water Treatment', [B(30.2, 77, 0.5, 31.8, 78.3, 2)], room='101', tag='RO-1', pos=[31, 77.6], cost=15000)
WELL['train'] = [(t, n, s, c) for t, n, s, x, y, c in TRAIN]
WELL['costs'] = [('Drilling 100 m incl. casing, gravel pack, grout, development', 180000), ('Submersible pump, controller, cable, wellhead', 40000), ('Treatment train (RT-1 to BP-1)', sum(t[5] for t in TRAIN)), ('Kitchen RO', 15000), ('Mains backup, RPZ, air gaps, piping, install', 70000), ('Water test', 5000)]
WELL['total'] = sum(c for _, c in WELL['costs'])

# ===== controls =====
HUB = (19.5, 26.2)
CTRL = [('HUB', 'Home Controller (Home Assistant on Mini-PC) + Zigbee/Thread + UPS', 'In AV rack 405; local-first, remote via VPN', 19.5, 26.2, 'Core', 30000),
        ('CTM', 'Per-Circuit Energy Monitor (CT Clamps, 32 ch)', 'At MDB + SDB-W; Modbus/Wi-Fi', 96.6, 51, 'Energy', 28000),
        ('INVG', 'Inverter + Battery Gateway (Modbus RS485)', 'INV-1/BAT-1 status, surplus signal', 128, 9, 'Energy', 6000),
        ('AVG', 'AC/VRF Gateway (BACnet/Modbus)', 'Schedules, setpoints, occupancy per zone', 119, 3, 'HVAC', 25000),
        ('POOL', 'Pool Pump + Salt Cell Controller', 'Runs on solar surplus window 10:00-15:00', 93, 19, 'Pool', 20000),
        ('IRR', 'Smart Irrigation Controller (6 Zones)', 'ET/weather skip + soil moisture', 114, 18.5, 'Water', 12000),
        ('WX', 'Weather Station (Roof)', 'Rain, wind, temp, RH, solar irradiance', 86, 85, 'Water', 12000),
        ('LVL1', 'Level Sensors (T-1, T-2, T-3, RT-1, TT-1)', 'Ultrasonic / pressure, 4-20 mA', 111, 18, 'Water', 25000),
        ('SM', 'Soil Moisture Sensors (6)', 'One per drip zone', -18, 75, 'Water', 12000),
        ('WP', 'Well Pump Controller + Flow Meter', 'Run hours, dry-run, low level', 140, 95, 'Water', 15000),
        ('DP', 'Filter ΔP Sensors + UV Status Relay', 'Backwash due / lamp fault alerts', 130.5, 20, 'Water', 14000),
        ('SOV', 'Motorized Auto Shut-Off Valve + Flow Meter', 'On main at 206 entry; closes on any leak', 97, 52.5, 'Leak', 18000),
        ('LK', 'Leak Sensors (14)', 'Under sinks, WCs, water heater, washer, AHU, pool room', 90, 57, 'Leak', 17000),
        ('DASH', 'Wall Dashboard Tablet (Genkan) + Phone App', 'Energy, water, pool, climate, alerts', 24, 54.5, 'Core', 15000),
        ('PRG', 'Wiring, Integration + Programming', 'Cat6 to gateways, commissioning', 20, 24, 'Core', 90000)]
for tag, nm, spec, x, y, grp, c in CTRL:
    add('ctrl', 'device', nm, spec, 'Controls: ' + grp, [B(x - .5, y - .5, 4.5, x + .5, y + .5, 5.5)], tag=tag, pos=[x, y], cost=c)
    if tag not in ('HUB', 'PRG'):
        add('ctrl', 'link', f"Control Link HUB to {tag}", 'Cat6 / RS485 / Zigbee mesh', 'Controls', [PIPE([(HUB[0], HUB[1], 10), (x, HUB[1], 10), (x, y, 10), (x, y, 5.5)], 0.05)], pts=[list(HUB), [x, HUB[1]], [x, y]])
for x, y, r_ in [(88, 70.5, '202'), (79.4, 42.5, '208'), (85, 22.5, '210'), (25.4, 44.5, '403'), (31.3, 77.3, '101'), (81, 57.5, '205'), (90, 57, '206'), (95.8, 56.8, '206'), (93, 16.5, '211'), (60, 18, '303'), (70.8, 14, '306'), (79, 37, '208'), (96, 72, '202'), (17, 57, '105')]:
    add('ctrl', 'leak', 'Leak Sensor (Zigbee)', 'Floor puck, 2-year battery', 'Controls: Leak', [B(x - .25, y - .25, 0, x + .25, y + .25, 0.15)], room=r_, tag='LK', pos=[x, y])
CTRL_SUM = dict(items=[(t, n, s, g, c) for t, n, s, x, y, g, c in CTRL], total=sum(c[6] for c in CTRL),
    automations=['Pool pump + salt cell run at 10:00-15:00 when PV surplus > 2 kW; minimum 6 h turnover guaranteed',
                 'Battery reserve 30% for outages; generator auto-start below 15% or on long outage',
                 'Irrigation: skip if rain > 3 mm forecast/24 h or soil moisture above threshold; water at 05:00 from cisterns, well top-up only if T-1..3 < 10%',
                 'Leak detected: close SOV, stop BP-1, push alert; daily micro-leak check by flow meter at 03:00',
                 'Filter ΔP high: schedule backwash on PV surplus; UV lamp fault: close SOV to house + alert',
                 'AC: zone schedules by occupancy, pre-cool on solar surplus, setback 27 °C when away; sauna/steam pre-heat from the app',
                 'Energy: per-circuit dashboard, monthly report, alert on abnormal baseload'])
