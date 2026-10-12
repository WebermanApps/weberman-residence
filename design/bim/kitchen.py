# executed inside model.py: Kitchen Round 1 (swipe results, Oct 11 2026) -> model elements, gas, outlets, A-401 data
KF = [f for f in P['furn'] if f.get('room') == '101']
for f in KF:  # casework + appliances as clickable Architecture elements
    add('arch', 'casework', f['label'], f"{f['x1']-f['x0']:.1f}' x {f['y1']-f['y0']:.1f}' x {f['h']:.2f}' high", 'Kitchen (A-401)',
        [B(f['x0'], f['y0'], f['z0'], f['x1'], f['y1'], f['z0'] + f['h'])], room='101', tag='K', pos=[(f['x0']+f['x1'])/2, (f['y0']+f['y1'])/2], hide3d=True)
zr = roofAt(28, 69.5)
add('roof', 'skylight', 'Kitchen Skylight SK-1 (Walk-On Rated Curb, Low-E Laminated)', "8' x 2'-3\", off the butterfly valley, solar-control glass + interior blind", 'Daylighting',
    [B(23.75, 68.15, zr + 0.4, 32.25, 70.85, zr + 0.8), B(24, 68.4, zr + 0.75, 32, 70.6, zr + 0.85)], room='101', tag='SK-1', pos=[28, 69.5])
add('elec', 'light', 'Linear Suspended LED (Over Waterfall Island)', "8' bronze extrusion, 2700 K, 40 W, DALI dimming", 'Lighting', [B(24, 69.3, 8.6, 32, 69.7, 8.75)], room='101', tag='LS', pos=[28, 69.5])
add('elec', 'light', 'Under-Cabinet + Shelf LED Strips', '2700 K, 10 W/m, on dimmer', 'Lighting', [B(27.6, 55.4, 4.1, 29.8, 56.2, 4.2)], room='101', tag='UC', pos=[28.7, 55.8])
# gas: LPG bulk cylinders in a ventilated cage west of the pantry
LPG = (5, 76)
add('plumb', 'gas', 'LPG Cylinder Cage (2 x 48 kg, Auto-Changeover Regulator)', 'Ventilated masonry cage, > 1.5 m from openings and drains, per DOEB/TISI LPG rules', 'Gas (LPG)', [B(3, 74, 0, 7, 78, 5)], tag='LPG', pos=list(LPG))
gas = [(5, 76, 0.5), (5, 52.5, -0.5), (25, 52.5, -0.5), (25, 55.6, 0.3)]
add('plumb', 'gaspipe', 'Gas Line to Pro Range + Wok Burner', '22 mm (3/4") copper/CSST in sleeve under slab; ~110,000 BTU/h connected (range ~80k incl. 25k wok + outdoor wok 30k)', 'Gas (LPG)', [PIPE(gas, 0.12)], pts=[[p[0], p[1]] for p in gas], tag='G')
add('plumb', 'gasvalve', 'Gas Solenoid Shutoff + Manual Valve (Range)', 'Normally-closed 24 V solenoid, closes on leak alarm, fire alarm or hood-off', 'Gas (LPG)', [B(24.6, 55.4, 0.3, 25.4, 55.9, 0.9)], room='101', tag='GV', pos=[25, 55.6])
og = [(5, 78, 0.5), (5, 88, -0.5), (21.5, 88, 0.3)]
add('plumb', 'gaspipe', 'Gas Branch to Covered Outdoor Wok Station (Optional)', '15 mm copper, own valve; 30,000 BTU/h jet wok under the pergola', 'Gas (LPG)', [PIPE(og, 0.08)], pts=[[p[0], p[1]] for p in og], tag='G2')
add('arch', 'casework', 'Outdoor Wok Station (Optional, Under Pergola)', "6' stone counter, jet wok burner, stainless backsplash, extraction by open air", 'Kitchen (A-401)', [B(19.5, 87.5, 0, 25.5, 90, 3)], tag='OWK', pos=[22.5, 88.75])
add('ctrl', 'device', 'Kitchen Gas + CO Leak Detector (Interlocked)', 'LPG detector at 300 mm AFF + CO at 1.5 m; closes GV solenoid, starts hood, alerts phone', 'Controls: Leak', [B(28.5, 55.4, 0.8, 29.3, 55.8, 1.4)], room='101', tag='GD', pos=[29, 55.6], cost=9000)
add('ctrl', 'device', 'Hood Auto-Boost + Make-Up Air Interlock', 'Hood boosts on burner heat/VOC; MUA damper opens before blower > 600 m³/h', 'Controls: HVAC', [B(26.5, 56, 7, 27.3, 56.6, 7.6)], room='101', tag='HD', pos=[26.9, 56.3], cost=6000)
add('hvac', 'mua', 'Make-Up Air Unit MUA-1 (Kitchen)', '1,200 m³/h tempered, filtered, motorized damper, from north eave', 'Exhaust', [PIPE([(21, 78.5, 9), (21, 80, 9)], 0.8)], room='101', tag='MUA', pos=[21, 78.5])
add('plumb', 'supply', 'RO Drinking Water Tap + Ice Maker Line', 'RO-1 4-stage under sink, 6 mm PE to tap + fridge', 'Water Treatment', [PIPE([(28.1, 77.5, 1), (21.5, 77.5, 1), (21.5, 66, 1)], 0.05)], room='101', tag='RO', pos=[28.1, 77.5], pts=[[28.1, 77.5], [21.5, 77.5], [21.5, 66]])
KITCHEN = dict(
    layout='Two islands: 10 ft quartzite waterfall island (stools one side) + 8 ft work island with flush induction',
    loves_used=['Two-island layout', 'High-heat wok burner', 'Waterfall-edge island with stools along one side', 'Quartzite counters', 'Rift white oak flat-slab handleless cabinets (flush inset)', 'Integrated stone sink carved from the counter', 'Hood hidden in cabinets', 'Pro gas range', 'Walk-in pantry', 'Appliance garage', 'Skylight + linear suspended light', 'Open shelves', 'Garden-view window over sink', 'Wall that slides fully open', 'Hydroponic herb wall'],
    excluded=['Scullery / back kitchen', 'Table-extension island', 'Furniture-style island', 'Limestone', 'Terrazzo', 'Walnut', 'Painted or plaster cabinets', 'Shaker doors', 'Undermount stainless sink', 'Unlacquered brass faucet (kitchen only; reverses Round 2)', 'Panel-ready fridge'],
    costs=[('Rift white oak flat-slab handleless flush-inset cabinetry (~11 m run + 2 islands + tall wall)', 1350000), ('Quartzite slabs: counters, waterfall island, integrated sink', 950000), ('48" pro gas range with wok burner', 420000), ('Hidden hood insert + 1,500 m³/h blower + MUA-1', 220000), ('Steam oven + wall oven column', 330000), ('Built-in stainless fridge 36"', 380000), ('Flush 2-zone induction (work island)', 85000), ('Skylight SK-1 + linear suspended LED', 210000), ('Lift-and-slide pocket wall (5 m, bronze)', 520000), ('LPG cage, gas line, solenoid + detector', 65000), ('Outdoor wok station (optional)', 120000)])
