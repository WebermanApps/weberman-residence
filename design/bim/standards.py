# executed inside model.py: approved project construction + services standard (Oct 11 2026) applied to every element
STD_STRUCT = 'RC frame (columns, beams, slabs); poured concrete only for pool, retaining walls, cistern, engineer-required shear walls; no timber framing (termites)'
# trapped floor drains in every wet room with a fixture (plus laundry/mech)
for rid in ['202', '205', '206', '208', '409', '303', '305', '306', '403', '211']:
    r = ROOMS[rid]; x, y = r['x0'] + (r['x1'] - r['x0']) * 0.35, r['y0'] + (r['y1'] - r['y0']) * 0.35
    add('plumb', 'floordrain', 'Trapped Floor Drain FD (Deep-Seal + Trap Primer)', '100 mm SS grate, 50 mm deep-seal P-trap, membrane clamping flange, 1:80 fall to drain', 'Sanitary Drainage', [CYL(x, y, 0.3, -0.6, 0)], room=rid, tag='FD', pos=[x, y], standard='Trapped floor drain bonded to the wet-area membrane; trap primer keeps the seal')
for e in EL:
    L, c = e['layer'], e['cat']
    if L == 'struct':
        e['standard'] = STD_STRUCT
        if c == 'pool': e['wall_type'] = 'W4'
    elif L == 'framing' and c == 'wall':
        e['standard'] = {'W1': '150 mm LGS infill in RC frame, mineral-wool cavity, fiber-cement sheathing, ventilated rainscreen (white lime render or charred timber); fiber-cement + lime plaster inside, painted', 'W2': 'LGS stud + fiber-cement board (termite-proof), lime plaster, painted; cement board + membrane on wet faces', 'W3': 'Acoustic double LGS / resilient channel, mineral wool, 2 layers fiber-cement each side at studio + bedrooms', 'W4': 'RC wall (engineer-required)'}.get(e.get('tag'), STD_STRUCT)
    elif L == 'roof': e['standard'] = 'Metal roof over radiant barrier, insulation and a ventilated cavity; steel framing only'
    elif L == 'plumb':
        if c == 'fixture': e['size'] = (e['size'] + '; ' if e['size'] else '') + 'P-trap at fixture, vented'; e['standard'] = 'Every fixture trapped (P-trap) and vented; PPR supply pressure-tested 1.5 x working (min 10 bar, 2 h)'
        elif c == 'vent': e['standard'] = 'Proper vent stack system to open air above roof; AAV only where engineer approves'
        elif e.get('tag') == 'GT-1': e['standard'] = 'Kitchen grease interceptor before septic; quarterly clean-out'
        elif c in ('supply', 'hot'): e['standard'] = 'PPR PN20 (hot) / PN16 (cold), fusion-welded, pressure-tested before closing walls'
        else: e.setdefault('standard', 'Western-standard sanitary: trapped, vented, 1:50 fall, cleanouts at bends')
    elif L == 'elec': e['standard'] = 'TN-C-S earthing (< 5 ohm), 30 mA RCBO on every circuit, labelled panel schedule'
    elif L == 'water' and e['cat'] == 'tank' and 'Cistern' in e['type']: e['wall_type'] = 'W4'
for e in EL:
    if e['layer'] == 'hvac' and 'Water Heater' in e['type']: e['standard'] = 'Central heat-pump hot water with recirculation loop'
WALLTYPES = [('W1', 'Steel Stud Exterior', '150 mm LGS infill in RC frame, mineral wool, fiber-cement sheathing, ventilated rainscreen (white lime render or charred timber); inside fiber-cement + lime plaster, painted'),
             ('W2', 'Steel Stud', '92 mm LGS @ 400 mm, fiber-cement board both sides, mineral wool, lime plaster, painted; cement board + membrane on wet faces'),
             ('W3', 'Acoustic Stud', 'Double LGS / resilient channel, 75 mm mineral wool, 2 layers fiber-cement each side (studio + bedrooms)'),
             ('W4', 'RC Wall', 'Poured RC: pool, retaining walls, cistern, engineer-required shear walls only')]
STANDARDS = [
 ('Structure', 'RC frame with brick infill; timber roof/floor framing common', 'RC frame (columns, beams, slabs); steel roof framing; no timber framing', 'Termites and humidity destroy timber; RC + steel is durable and insurable'),
 ('Exterior Walls', 'Single-skin red clay brick or thin block, cement render, no insulation', 'LGS stud infill in RC frame, mineral-wool cavity, fiber-cement sheathing, ventilated rainscreen (white lime render or charred timber)', 'Rainscreen + insulation cut heat gain and AC load; termite-proof, light, straight'),
 ('Interior Partitions', 'Clay brick / block, rendered', 'LGS studs with moisture-resistant fiber-cement board (SCG Smartboard / Shera); double stud + 2 layers board at studio + bedrooms', 'Lighter, straighter, quieter; termite-proof; easy service routing'),
 ('Wall Finish', 'Cement render, emulsion paint', 'AR mesh tape, lime plaster skim, textured finish (TBD), mineral paint, white', 'Crack-resistant joints; breathable, resists mould'),
 ('Trim + Cabinetry', 'Ornate or stained trim; freestanding overlay cabinet boxes', 'Plain square-edge baseboards + casings painted white; all cabinetry built-in, flush inset or recessed', 'Clean, simple lines; no dust traps or gaps'),
 ('Concrete Walls', 'Poured where convenient', 'RC only for frame, pool, retaining walls, cisterns, engineer-required shear walls', 'Less embodied carbon and heat mass where not needed'),
 ('Roof', 'Metal sheet or tile on timber/steel, foil at best, little insulation', 'Metal over radiant barrier, 75 mm insulation, ventilated cavity', 'Hot-roof heat is the #1 cooling load; quiet in monsoon rain'),
 ('Traps', 'Bottle traps or none; floor drains often untrapped (smell)', 'P-trap on every fixture; deep-seal trapped floor drains with trap primers', 'Stops sewer gas, insects and odours'),
 ('Venting', 'Often unvented; drains glug and siphon traps', 'Proper vent stack system through the roof', 'Keeps trap seals; fast, quiet drainage'),
 ('Grease', 'Kitchen waste straight to sewer/septic', 'Kitchen grease interceptor GT-1 before septic', 'Protects septic + ATU and drain field'),
 ('Water Supply', 'PVC cold + mixed fittings, rarely tested', 'PPR fusion-welded, pressure-tested before walls close', 'No hidden leaks; rated for hot water'),
 ('Electrical', 'Partial earthing, RCD on some circuits, ad-hoc panel', 'TN-C-S earthing, 30 mA RCBO on all circuits, full panel schedule', 'Shock + fire safety in a wet climate'),
 ('Wet Areas', 'Tile on render; leaks common', 'Waterproofing membrane in all wet areas, flood-tested 24 h', 'Prevents leaks and mould into stud cavities'),
 ('Hot Water', 'Point-of-use electric heaters at each shower', 'Central heat-pump water heater + recirculation', '~3x more efficient; one serviceable unit; instant hot water'),
]
