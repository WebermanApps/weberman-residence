# executed inside model.py: Landscape + Farm layer, herb nook, sustainability list
FARM_COST = []
def fadd(cat, typ, size, g, tag, pos, cost=None, system='Landscape + Farm', **kw):
    e = add('farm', cat, typ, size, system, g, tag=tag, pos=pos, **kw)
    if cost: FARM_COST.append((typ, cost))
    return e
# chicken coop + run: west of the kitchen garden; the house sits upwind (NE dry-season breeze)
fadd('coop', 'Chicken Coop (4-6 Hens)', "6' x 8' raised teak coop, 6 nest boxes, perches, droppings tray to compost, insulated metal roof", [B(-46, 58, 1.5, -40, 64, 7), B(-46.3, 57.7, 7, -39.7, 64.3, 7.4)], 'COOP', [-43, 61], 65000)
fadd('run', 'Covered Chicken Run', "12' x 16', 13 mm welded mesh incl. roof, 450 mm buried apron (predator-proof), shade cloth + dust bath", [B(-46, 42, 0, -34, 58, 0.15), B(-46, 42, 0, -45.8, 58, 6.5), B(-34.2, 42, 0, -34, 58, 6.5), B(-46, 42, 0, -34, 42.2, 6.5), B(-46, 57.8, 0, -34, 58, 6.5), B(-46, 42, 6.4, -34, 58, 6.5)], 'RUN', [-40, 50])
fadd('equip', 'Auto Coop Door + Waterer (Rain-Fed)', 'Light-sensor door, 20 L nipple waterer topped from T-3 line, feeder', [B(-40.5, 57, 0, -39.5, 58, 2)], 'CD', [-40, 57.5], 12000)
# kitchen garden: raised beds + compost + greywater
q = S['veg']
for i in range(4):
    for j in range(2):
        x0 = q['x0'] + 2 + j * 11; y0 = q['y0'] + 2 + i * 5
        fadd('bed', 'Raised Bed (Teak-Faced, Wicking)', "4' x 10' x 2' high, drip + soil sensor", [B(x0, y0, 0, x0 + 10, y0 + 4, 2)], f"RB{i*2+j+1}", [x0 + 5, y0 + 2])
FARM_COST.append(('Raised beds x 8 + soil + drip', 70000))
for i in range(3):
    fadd('compost', 'Compost Bay', "4' x 4' slatted bay (hot / turning / finished), kitchen scraps + coop litter", [B(-30 + i * 4.5, 88, 0, -26 + i * 4.5, 92, 3)], f"CB{i+1}", [-28 + i * 4.5, 90])
FARM_COST.append(('Compost bays x 3 + worm farm', 25000))
fadd('greywater', 'Greywater Treatment GW-1', '1,000 L tank, 3-stage filter (screen, sand, 100 µm), from showers, basins + laundry; dosing pump to subsurface drip', [B(100, 62, -4, 104, 66, 0.3)], 'GW-1', [102, 64], 60000, system='Greywater Reuse')
add('farm', 'pipe', 'Greywater Collection (Laundry, Showers, Basins)', '50 mm uPVC, separate from WC/kitchen drains, 3-way divert valve to sewer', 'Greywater Reuse', [PIPE([(80, 57.5, -1), (99, 57.5, -1), (102, 64, -1)], 0.17)], pts=[[80, 57.5], [99, 57.5], [102, 64]])
add('farm', 'pipe', 'Greywater Subsurface Drip (Bath Garden + Orchard Edge)', '16 mm purple drip 150 mm below mulch', 'Greywater Reuse', [PIPE([(102, 66, -0.5), (102, 82, -0.5)], 0.08)], pts=[[102, 66], [102, 82]])
# indoor herb garden: glazed nook on the north side of the kitchen, under the 8 ft eave
NK = dict(x0=20.5, y0=79, x1=26, y1=84)
fadd('nook', 'Glazed Herb Nook (Climate-Controlled)', "5.5' x 5' bump-out behind the kitchen's north counter, seen through a glass backsplash window, door to the pergola, low-E double glazing, bronze frame, sealed + insulated base", [B(NK['x0'], NK['y0'], -0.4, NK['x1'], NK['y1'], 0), B(NK['x0'], NK['y1'] - 0.2, 0, NK['x1'], NK['y1'], 0.6), B(NK['x0'], NK['y0'], 9.2, NK['x1'], NK['y1'], 9.6)], 'HN', [23.25, 81.5], 450000)
for i in range(2):
    fadd('rack', 'Vertical Hydroponic Rack + LED Grow Lights', '5-tier NFT, 60 W full-spectrum LED per tier, 40 L reservoir, dosing', [B(21.2 + i * 2.5, 82.2, 0, 23.0 + i * 2.5, 83.6, 6.5)], f"HR{i+1}", [22.1 + i * 2.5, 82.9])
FARM_COST.append(('Hydroponic racks x 2 + LEDs + dosing', 90000))
fadd('hvac', 'Mini-Split 9,000 BTU/h + Dehumidifier (Herb Nook)', 'Holds 22-26 °C, 55-65% RH; condensate to reservoir top-up', [B(22, 83.3, 7.2, 25, 83.9, 8.2)], 'FCU-HN', [23.5, 83.6], 37000, system='HVAC (Herb Nook)')
fadd('sensor', 'Herb Nook Sensors (Temp, RH, CO2, pH/EC, Reservoir Level)', 'Zigbee/Wi-Fi to HUB; light + nutrient schedules', [B(26.3, 80, 4, 26.6, 80.5, 4.5)], 'HNS', [26.5, 80.2], 12000, system='Controls')
c = circuit('MDB', 'Herb Nook: Grow Lights + Pumps', '1.0 kW', '16 A RCBO', 'dedicated'); c2 = circuit('MDB', 'Herb Nook: Mini-Split + Dehumidifier', '1.2 kW', '16 A', 'dedicated')
c3 = circuit('MDB', 'Coop: Auto Door + Light (Outdoor IP65)', '0.1 kW', '10 A RCBO', 'dedicated')
for cc, (x, y) in ((c, (28, 82.5)), (c2, (32, 83.6)), (c3, (-40, 57.5))):
    add('elec', 'equip', 'Dedicated Outlet / Connection: ' + cc['desc'], f"{cc['load']}, {cc['breaker']}", 'Power (Dedicated)', [B(x - .3, y - .3, 4, x + .3, y + .3, 4.5)], tag='J', circuit=cc['no'], pos=[x, y])
add('ctrl', 'device', 'Herb Nook + Coop Integration', 'Grow-light schedules, RH/temp alarms, coop door at dusk', 'Controls: Farm', [B(22.75, 80, 4.5, 23.75, 81, 5.5)], tag='FARM', pos=[23.25, 80.5], cost=8000)
add('ctrl', 'link', 'Control Link HUB to Herb Nook', 'Zigbee / Cat6', 'Controls', [PIPE([(HUB[0], HUB[1], 10), (23.25, HUB[1], 10), (23.25, 80.5, 10)], 0.05)], pts=[list(HUB), [23.25, HUB[1]], [23.25, 80.5]])
FARM = dict(costs=FARM_COST, total=sum(c_ for _, c_ in FARM_COST), nook=NK)
SUST = [  # move, status, rough THB, impact
    ('Rooftop solar 20 kWp + 30 kWh battery (E-102)', 'Included', 1020000, '~77% of electricity, ~13 t CO2/yr avoided'),
    ('Rainwater cisterns 80 m³ + smart drip (P-102)', 'Included', 710000, '~75% of dry-season garden water'),
    ('Drilled well + treatment, mains as backup only (P-103)', 'Included', 561000, 'Water self-sufficiency'),
    ('Home controller: solar-timed pool/irrigation, leak shut-off (E-103)', 'Included', 347000, '10-15% energy, leak protection'),
    ('Heat-pump water heater 300 L', 'Included', 85000, '~3x less energy than resistive'),
    ('Passive cooling: deep eaves, courtyard cross-ventilation, ceiling fans, light roofs', 'Included', 90000, 'Cuts AC hours 20-30%'),
    ('ERV fresh air with enthalpy core', 'Included', 180000, 'Healthy air at low cooling cost'),
    ('Greywater reuse to subsurface drip (GW-1)', 'Included', 60000, '~150-250 L/day reused'),
    ('Kitchen garden, raised beds, compost + 4-6 hens', 'Included', 160000, 'Food + closes the waste loop'),
    ('Indoor hydroponic herb nook (solar-powered LEDs)', 'Included', 589000, 'Year-round herbs, zero food miles'),
    ('EV-ready: 7.4 kW charger + spare conduit to carport', 'Included', 45000, 'Solar-charged driving'),
    ('Low-carbon materials: light-gauge steel stud walls with fiber-cement board, slag/fly-ash cement blend, plantation teak, charred timber (no paint), lime plaster', 'Included', 0, '~15-25% less embodied carbon (cost-neutral)'),
    ('Bidirectional EV charger (V2H backup)', 'Optional', 350000, 'Car becomes a 60 kWh home battery'),
    ('Solar-thermal / heat-pump pool heating on surplus', 'Optional', 120000, 'Warm pool without grid power'),
    ('Green (sedum) roof on studio, + acoustic + cooling', 'Optional', 250000, 'Cooler studio, habitat'),
    ('Biogas digester for kitchen + coop waste', 'Optional', 40000, 'Cooking gas, fertilizer'),
    ('Earth-tube pre-cooling for ERV intake', 'Optional', 150000, '2-4 °C cooler fresh air'),
]
