# executed inside sheets.py: approved construction standard -> G-003, wall tags (A-101, S-102), A-301 details, P-101 traps/vents/grease
def wtag(sh, x, y, t, s=1.5):
    sh.poly([(x - s * 1.4, y), (x - s * .7, y - s), (x + s * .7, y - s), (x + s * 1.4, y), (x + s * .7, y + s), (x - s * .7, y + s)], '#ffffff', sw=.2, close=True); sh.text(x, y + s * .45, t, s * 1.15, 'middle', 600, font='Khand')
def wall_tags(sh, v, s=1.5):
    for e in EL:
        if e['layer'] != 'framing' or e['cat'] != 'wall' or 'plan' not in e: continue
        x0, y0, x1, y1 = e['plan']
        if max(abs(x1 - x0), abs(y1 - y0)) < 6: continue
        x, y = v.P((x0 + x1) / 2, (y0 + y1) / 2); wtag(sh, x, y, e['tag'], s)
WT_LEG = [('sym', {'f': (lambda t: (lambda x, y: wtag(sh, x, y, t, 1.3)))(k)}, f"{k} {a}: {b}") for k, a, b in WALLTYPES]
# A-101
sh = sheets['A-101']; v = View(sh, K8, 115, 410); wall_tags(sh, v, 1.4)
legend(sh, 560, 470, WT_LEG, 'Wall Types')
# S-102
sh = sheets['S-102']; v = View(sh, 25.4 * 3 / 32, 0, 0)
legend(sh, 560, 470, WT_LEG, 'Wall Types (Approved Standard)')
sh.tbnotes('Standard', ['No timber framing (termites): RC frame, AAC, LGS studs, steel roof.', 'Poured concrete only at pool, retaining walls, cistern and engineer-required shear walls (W4).'])
# A-301 typical details
sh = sheets['A-301']
def layers_detail(x, y, title, n, rows, horiz=True):
    sh.text(x, y, '', 1); yy = y; w = 0
    for lab, th, fill, dash in rows:
        hh = max(th, 1.2)
        sh.rect(x, yy, 70, hh, fill, sw=.25, dash=dash); sh.line(x + 70, yy + hh / 2, x + 76, yy + hh / 2, .15); sh.text(x + 77, yy + hh / 2 + .7, lab, 1.9); yy += hh
    title_mark(sh, x, yy + 8, n, title, '1:10 (NTS)')
    return yy + 18
yb = layers_detail(585, 120, 'Typical Exterior Wall W1 (Plan Cut, Out to In)', '4', [
    ('Charred-timber cladding on aluminium battens (or lime render)', 4, '#3d3d3d', None), ('25 mm ventilated cavity, insect mesh top + bottom', 5, '#ffffff', '1,.6'),
    ('Breather membrane', 1.2, '#d4d4d4', None), ('50 mm mineral-wool exterior insulation', 10, '#f5f0d8', None), ('200 mm AAC block, thin-bed mortar', 40, '#e5e5e5', None), ('Lime plaster 15 mm', 3, '#fafafa', None)])
yb = layers_detail(585, yb, 'Typical Roof (Top Down)', '5', [
    ('Standing-seam metal 0.5 mm AZ150', 2, '#3d3d3d', None), ('Vapor-open underlay', 1.2, '#d4d4d4', None), ('40 mm ventilated cavity, eave intake to ridge vent', 8, '#ffffff', '1,.6'),
    ('Reflective radiant barrier', 1.2, '#cfd8dc', None), ('75 mm PIR insulation', 15, '#f5f0d8', None), ('C-purlins on steel H-rafters (no timber)', 12, '#ffffff', '2,1'), ('Ceiling: board on steel furring', 3, '#fafafa', None)])
yb = layers_detail(585, yb, 'Typical Partition W2 / W3', '6', [
    ('Board (cement board + membrane on wet faces)', 3, '#fafafa', None), ('92 mm LGS stud @ 400 mm + mineral wool (W3: 75 mm acoustic wool, resilient channel, 2 x sound board)', 18, '#f5f0d8', None), ('Board', 3, '#fafafa', None)])
sh.tbnotes('Standard', ['RC frame + AAC + LGS + steel roof; no timber framing.', 'Wet areas: membrane, flood test 24 h.'])
# P-101 traps, vents, floor drains, grease trap
sh = sheets['P-101']; v = View(sh, 25.4 * 3 / 32, 70, 330)
def fd(x, y): sh.rect(x - .9, y - .9, 1.8, 1.8, '#ffffff', sw=.25); sh.line(x - .9, y - .9, x + .9, y + .9, .15); sh.line(x - .9, y + .9, x + .9, y - .9, .15)
def ptrap(x, y): sh.add(f'<path d="M{x - 1:.2f},{y - 1:.2f} v1 a1,1 0 0 0 2,0 v-1" fill="none" stroke="#0a0a0a" stroke-width="0.22"/>')
for e in EL:
    if e['layer'] != 'plumb' or 'pos' not in e: continue
    x, y = v.P(*e['pos'])
    if e['cat'] == 'floordrain': fd(x, y)
    elif e['cat'] == 'fixture': ptrap(x + 1.6, y + 1.6)
gt = next(e for e in EL if e.get('tag') == 'GT-1'); x, y = v.P(*gt['pos']); sh.rect(x - 2, y - 1.5, 4, 3, '#0a0a0a', sw=0); sh.text(x + 2.6, y + .6, 'GT-1 GREASE TRAP', 1.6, weight=600)
legend(sh, 460, 470, [('sym', {'f': fd}, 'Trapped floor drain FD (deep seal + trap primer)'), ('sym', {'f': ptrap}, 'P-trap at every fixture'), ('sym', {'f': lambda x, y: (sh.circle(x, y, .7, '#ffffff', sw=.25), sh.line(x - .5, y - .5, x + .5, y + .5, .2))}, 'Vent stack to open air above roof'), ('sym', {'f': lambda x, y: sh.rect(x - 2, y - 1.5, 4, 3, '#0a0a0a', sw=0)}, 'Grease interceptor GT-1 (kitchen, before septic)')], 'Traps, Vents + Grease')
sh.tbnotes('Standard', ['PPR fusion-welded supply, pressure test 1.5 x WP (min 10 bar, 2 h).', 'Waterproofing membrane in all wet areas; central heat-pump hot water.'])
# ======================= G-003 CONSTRUCTION STANDARDS =======================
sh = new('G-003')
sh.text(40, 50, 'CONSTRUCTION STANDARDS: THAI VS WESTERN', 16, weight=600, font='Khand', extra=' letter-spacing="0.6"')
sh.text(40, 61, 'Approved project standard (Oct 11 2026). Applies to every sheet and to the element properties in the 3D model.', 3.6, fill='#404040')
rows = []
for t, th, ours, why in STANDARDS: rows.append([t, th, ours, why])
yy = table(sh, 40, 72, ['Topic', 'Common Thai Practice', 'Our Standard', 'Why'], rows, [80, 220, 220, 180], 2.6)
yy = legend(sh, 40, yy + 14, WT_LEG, 'Wall Types')
sh.tbnotes('Notes', ['Western standard = trapped + vented DWV, tested PPR, full earthing + RCBO, membranes, central hot water.', 'Engineer to confirm shear walls (W4) and all member sizes.'])
