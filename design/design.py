"""Weberman Residence — single source of truth for plan, 3D data and drawings.
Units: feet. Plan coords: x = east, y = north. Origin = SW corner of the office."""
import json, math
FT2M = 0.3048
SF2M2 = 0.09290304

# id, name, wing, x0,y0,x1,y1, ceiling h, floor, conditioned, notes
ROOMS = [
 ('101', 'Kitchen', 'Living Pavilion', 20, 55, 36, 79, 12, 'stonetile', True, 'Kitchen Round 1 (swipe results Oct 11): two-island layout. A 10-ft quartzite waterfall island with stools along one side, a work island with flush induction, rift white oak flat-slab handleless cabinets, a 48" pro gas range with a high-heat wok burner under a hood hidden in the cabinetry, an integrated quartzite sink carved from the counter under a garden-view window, a lift-and-slide wall that pockets fully open to the pergola, a skylight with a linear suspended light, open oak shelves, an appliance garage, a built-in stainless fridge, a steam oven wall, the walk-in pantry and the hydroponic herb wall.'),
 ('102', 'Dining', 'Living Pavilion', 36, 55, 50, 79, 12, 'herring', True, 'Seats eight under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north.'),
 ('103', 'Living', 'Living Pavilion', 50, 55, 72, 79, 12, 'herring', True, 'The heart of the house, fully open to the garden: 21 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. Flat floor (the sunken conversation pit was dropped, Oct 20 deck) with a low modular sofa group, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace).'),
 ('104', 'Walk-in Pantry', 'Living Pavilion', 10, 67, 20, 79, 10, 'stonetile', True, 'Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter.'),
 ('105', 'Mudroom + Gear', 'Living Pavilion', 10, 55, 20, 67, 10, 'stonetile', True, 'Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash.'),
 ('201', 'Master Bedroom', 'Sleeping Wing', 72, 59, 86, 83, 11, 'honey', True, 'Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window.'),
 ('202', 'Master Bath', 'Sleeping Wing', 86, 69, 98, 83, 10, 'stone', True, 'Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden.'),
 ('203', 'Master Closet', 'Sleeping Wing', 86, 59, 98, 69, 10, 'honey', True, 'Walk-in closet with honey-oak millwork and a center island.'),
 ('204', 'East Engawa Gallery', 'Sleeping Wing', 72, 14, 78, 59, 10, 'honey', True, 'Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing.'),
 ('205', 'Laundry', 'Sleeping Wing', 78, 14, 88, 24, 10, 'stone', True, 'Stays in the sleeping wing, now at its south end off the east engawa: stacked W/D pair, folding counter, drying rack. Window to the south.'),
 ('206', 'Linen + Mechanical', 'Sleeping Wing', 78, 56, 104, 59, 10, 'concrete', True, "Shallow linen + mechanical closet run along the kids' wing: linen shelves, heat pump air handler, ERV, water heating."),
 ('207', "Kids' Room 1", 'Sleeping Wing', 90, 43, 104, 56, 14, 'honey', True, 'Grow-into-teen 14 x 13 ft room: bed under a bunk/play loft (about 8 x 13 ft at 7 ft up, ladder), a desk by the east window, window-seat reading nook, cube shelves, small bouldering wall. Reached through its walk-in closet; shares the Jack-and-Jill bath.'),
 ('208', 'Jack-and-Jill Bath', 'Sleeping Wing', 84, 37, 104, 43, 10, 'stone', True, "Kept: Jack-and-Jill between the two kids' rooms, one room with two sinks (a double cherry vanity), WC and a tiled tub-shower, lockable from each side. 20 x 6 ft."),
 ('209', "Kids' Room 2", 'Sleeping Wing', 90, 24, 104, 37, 14, 'honey', True, 'Kids only now (no longer the guest room). Grow-into-teen 14 x 13 ft room: twin/full bed under a bunk/play loft (about 8 x 13 ft at 7 ft up, ladder), a desk by the east window, window seat, cube shelves. Reached through its walk-in closet; no courtyard door (courtyard is reached from the engawa gallery). Shares the Jack-and-Jill bath.'),
 ('211', 'Pool Equipment', 'Sleeping Wing', 88, 14, 98, 24, 9, 'concrete', False, 'Unconditioned. Saltwater pool equipment: variable-speed pump, cartridge filter, heat pump heater and the salt chlorine generator cell (replace the cell about every 3-5 years). Ties into the utility yard next door. Exterior access only.'),
 ('212', "Kids' Entry + Lockers", 'Sleeping Wing', 78, 24, 84, 40, 10, 'honey', True, "The one kids' entry (replaces the two vestibules): one door from the east engawa, a bench and a row of honey-oak lockers with hooks and cubbies. Leads to both rooms' walk-in closets and the study nook."),
 ('213', 'Shared Study Nook', 'Sleeping Wing', 78, 40, 84, 56, 10, 'honey', True, "Shared homework nook open to the kids' entry: a 14-ft built-in desk for two, task lights, a pin-board wall and book shelves. Each room also has its own desk."),
 ('301', 'South Covered Walkway', 'Wellness + Gym Wing', 36, 22, 72, 27, 10, 'flagstone', False, 'Open-air covered walkway (not conditioned) under the wellness-wing eave, closing the courtyard ring. Flagstone floor, open to the courtyard, with glass doors into the east and west galleries.'),
 ('302', 'Exercise Room', 'Wellness + Gym Wing', 28, -5, 50, 22, 12, 'honey', True, 'Calm studio look: honey-oak floor with a rubber lifting area, a high wood ceiling, and a mirror wall. Free-standing rig with wood rings and a climbing rope, Pilates Cadillac and reformer, wood water rower, treadmill, kettlebell and dumbbell rack, and a bars-and-bands wall. Glass slides open to the sprint lane and an outdoor pull-up station. Enlarged Oct 20 (wellness is the top priority): now 22 x 27 ft.'),
 ('303', 'Wet Room', 'Wellness + Gym Wing', 50, 4, 66, 22, 10, 'stone', True, 'Black-stone wet room: two rain showers, a built-in cold plunge lined in green zellige (39-50 F), teak bench. Serves the sauna and steam room. Enlarged Oct 20 to 16 x 18 ft with a recovery lounge corner (zero-gravity chairs).'),
 ('304', 'Sauna', 'Wellness + Gym Wing', 50, -5, 58, 4, 8, 'aspen', True, 'Warm cedar walls with tiered pale-aspen benches, backlit underneath, and an electric rock heater (no wood stove). Low window toward the pool and meadow.'),
 ('305', 'Steam Room', 'Wellness + Gym Wing', 58, -5, 66, 4, 8, 'blackstone', True, 'Stone steam room (not a white hammam): honed black stone on the walls, floor and heated bench.'),
 ('306', 'Changing + Towels', 'Wellness + Gym Wing', 66, -5, 72, 22, 10, 'stone', True, 'Towels, robes, honey-oak lockers and a rinse shower. Pool access through the wellness wing: door to the pool deck and outdoor shower, and a door from the open south walkway, so the courtyard reaches the pool too.'),
 ('401', 'Entry Genkan', 'Studio + Arrival', 18, 46, 30, 55, 10, 'stonetile', True, 'Stone genkan with a step-up to the oak floor, a rammed-earth feature wall and one large artwork. Solid charred-oak pivot door (no glass entry). The first view lines up across the engawa into the courtyard.'),
 ('402', 'Coat + Shoe Closet', 'Studio + Arrival', 22, 40, 26, 46, 10, 'honey', True, 'Coat and shoe storage.'),
 ('403', 'Powder Room', 'Studio + Arrival', 26, 40, 30, 46, 10, 'stone', True, 'Compact powder room by the entry: integrated stone basin, lime-plaster walls.'),
 ('404', 'Tea + Reading Room', 'Studio + Arrival', 18, 28, 30, 40, 9, 'tatami', True, '8-mat (12 x 12 ft) tatami room, now a tea + reading room: tokonoma, low tea table, zabuton, a wall of book shelves and a reading lamp. Futons in the fusuma closet turn it into an extra guest bed. Shoji slide open to the engawa and courtyard.'),
 ('405', 'Sound Lock + AV Closet', 'Studio + Arrival', 18, 22, 30, 28, 10, 'honey', True, 'Sound lock vestibule between the west engawa and the studio: two solid-core doors with full perimeter seals and automatic drop seals, so one is always closed. Also holds the AV rack and instrument storage.'),
 ('406', 'West Engawa Gallery', 'Studio + Arrival', 30, 22, 36, 55, 10, 'honey', True, 'Glazed engawa from the entry to the office and great room.'),
 ('407', 'Isolated Studio / Office', 'Studio + Arrival', 0, 0, 28, 22, 14, 'honey', True, 'Fully isolated room-within-a-room studio that is still a great work office: sit-stand desk facing the garden, studio desk with mixer and MPC, digital piano, e-drums, guitar wall and sofa. Decoupled inner stud walls on resilient isolation mounts (about 14 in total wall build-up per side), a floated floor on isolation pads, an isolated ceiling on spring hangers, laminated double glazing with an air gap, and quiet decoupled HVAC with lined ducts and silencers. Target STC 60+ (about 60-65 dB isolation) and NC-20 inside. Enlarged Oct 20 to 28 x 22 ft: 616 SF gross, about 505 SF net inside the inner shell (25 ft 8 in x 19 ft 8 in). Still entered only through the sound lock (405).'),
 ('408', 'Guest Bedroom', 'Studio + Arrival', 4, 32, 18, 46, 10, 'honey', True, 'Full guest suite near the entry (west): 14 x 14 ft bedroom with a queen bed, reading chair and garden windows to the west. Reached from the genkan by a short guest hall, away from the family rooms.'),
 ('409', 'Guest Bath', 'Studio + Arrival', 4, 22, 12, 32, 10, 'stone', True, 'Guest full bath: walk-in shower, vanity, WC.'),
 ('410', 'Guest Closet', 'Studio + Arrival', 12, 22, 18, 32, 10, 'honey', True, 'Guest walk-in closet with luggage bench.'),
 ('411', 'Guest Hall', 'Studio + Arrival', 18, 40, 22, 46, 10, 'honey', True, 'Short hall from the genkan to the guest suite.'),
 ('214', "Kids' 2 Walk-in Closet", 'Sleeping Wing', 84, 24, 90, 37, 10, 'honey', True, "Small walk-through closet (6 x 13 ft) between the kids' entry and Kids' Room 2: hanging, drawers, a mirror."),
 ('215', "Kids' 1 Walk-in Closet", 'Sleeping Wing', 84, 43, 90, 56, 10, 'honey', True, "Small walk-through closet (6 x 13 ft) between the study nook and Kids' Room 1."),
]
FLOORS = {"flagstone":"Flagstone (open-air)","honey":"Wide-plank walnut","herring":"Walnut herringbone","stonetile":"Large-format honed limestone","stone":"Honed limestone","blackstone":"Honed black stone",
          "tatami":"Tatami (8 mats)","aspen":"Aspen duckboard","concrete":"Sealed concrete"}
FIN = {
 '101':'Large-format honed stone tile floor; lime plaster walls; rift white oak flat-slab handleless cabinets, flush inset in face frames (finger-pull reveals); honed quartzite counters, waterfall island + integrated quartzite sink; honed marble slab backsplash (zellige alternate); 48" pro gas range with wok burner; hidden 1,500 m3/h hood insert in oak cabinetry; brushed stainless faucet; built-in stainless fridge; steam oven + wall oven column; flush 2-zone induction in the work island; open rift oak shelves; skylight + linear suspended LED',
 '102':'Walnut herringbone; lime plaster; exposed fir beams; cedar ceiling; dining table (open item); mixed chairs: Windsor (walnut) on the courtyard side, Shaker (cherry) on the north side; paper lantern',
 '103':'Walnut herringbone; lime plaster; exposed fir beams; cedar ceiling; low linen sofa group (flat floor); classic leather lounger; paper lanterns over the seating + woven pendants by the north window; shoji screens; frameless corner glass at the courtyard corner; bronze frames elsewhere; art wall',
 '104':'Large-format honed limestone; lime plaster; walnut open shelving',
 '105':'Large-format honed limestone; lime plaster; built-in walnut cubbies; stone dog wash',
 '201':'Walnut floor; lime plaster; built-in cherry joinery (flush inset); shoji doors; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed; bronze window frames',
 '202':'Honed limestone floor and walls; green zellige shower wall; hinoki soaking tub; built-in cherry vanity recessed into the wall, flush inset doors, integrated basins; unlacquered brass taps (mount: open item); skylight',
 '203':'Walnut floor; cherry millwork; lime plaster; shoji door',
 '204':'Walnut floor; lime plaster; bronze sliding glass',
 '205':'Honed limestone; lime plaster; white cabinets',
 '206':'Sealed concrete; painted plaster',
 '207':'Walnut floor; calm white lime plaster; cherry desk, window seat and cube shelves; oak bunk/play loft with rail; bouldering panel',
 '208':'Honed limestone; white tile tub-shower; cherry double vanity; unlacquered brass taps',
 '209':'Walnut floor; calm white lime plaster; cherry desk, window seat and cube shelves; oak bunk/play loft with rail',
 '211':'Sealed concrete',
 '212':'Walnut floor; lime plaster; cherry lockers + bench',
 '213':'Walnut floor; lime plaster; cherry built-in desk + shelves; cork pin wall',
 '301':'Flagstone floor; open-air, covered by the wellness-wing roof; cedar soffit',
 '302':'Walnut floor; rubber lifting tiles; lime plaster; high wood ceiling; mirror wall; black steel rig; wood rings',
 '303':'Honed limestone floor; Japanese earth-plaster walls (tadelakt-style sealed); green zellige plunge; teak bench; unlacquered brass rain showers',
 '304':'Cedar walls and ceiling; pale aspen tiered benches, backlit; aspen duckboard floor; electric rock heater',
 '305':'Honed black stone floor, walls and heated bench (kept: steam needs an impervious stone)',
 '306':'Honed limestone; lime plaster; cherry lockers',
 '401':'Large-format honed limestone; rammed-earth feature wall; lime plaster; kumiko lattice screen; bronze front door (style + timber: open item)',
 '402':'Walnut floor; walnut millwork',
 '403':'Honed limestone; lime plaster; integrated stone basin; unlacquered brass tap',
 '404':'Tatami; lime plaster; shoji to the engawa; fusuma closet doors; walnut tokonoma; book shelves; futon storage',
 '405':'Walnut floor; painted plaster; two solid-core doors with perimeter + drop seals',
 '406':'Walnut floor; lime plaster; bronze sliding glass',
 '407':'Floated walnut floor on isolation pads; decoupled inner walls on resilient mounts; isolated ceiling; laminated double glazing in bronze frames; solid-core doors with seals (not shoji, to keep STC 60+); lined ducts; lime plaster; walnut desks; fabric acoustic panels; acoustic ceiling clouds; sculpted wood ceiling; skylight; layered pendants',
 '408':'Walnut floor; lime plaster; shoji to the hall; linen bed; bronze windows',
 '409':'Honed limestone; tiled walk-in shower; cherry vanity; unlacquered brass taps',
 '410':'Walnut floor; walnut millwork',
 '411':'Walnut floor; lime plaster',
 '214':'Walnut floor; white closet millwork',
 '215':'Walnut floor; white closet millwork',
}
rooms = [dict(id=r[0],name=r[1],wing=r[2],x0=r[3],y0=r[4],x1=r[5],y1=r[6],h=r[7],floor=r[8],cond=r[9],notes=r[10],fin=FIN[r[0]],floorName=FLOORS[r[8]]) for r in ROOMS]
for r in rooms:
    r["w"]=r["x1"]-r["x0"]; r["d"]=r["y1"]-r["y0"]; r["area"]=r["w"]*r["d"]
    if r["area"]==int(r["area"]): r["area"]=int(r["area"])
COURTYARD = dict(x0=36,y0=27,x1=72,y1=55)

# Wall features: (orient, const, a, b, kind, extra) orient 'h': y=const, x in [a,b]; 'v': x=const, y in [a,b]
# kinds: open | glass (full-height slider) | fixed (full-height fixed glass) | window(sill,head) | door | slide | front | exdoor
F = [
 ('h', 55, 11, 17, 'window', [3, 7]),
 ('h', 55, 30, 36, 'open'),
 ('h', 55, 36.5, 49.5, 'glass'),
 ('h', 55, 50.5, 72, 'fixed'),
 ('h', 79, 20.8, 25.8, 'window', [3.0, 7.5]),
 ('h', 79, 26.2, 30, 'window', [3.6, 7.5]),
 ('h', 79, 30.5, 35.6, 'glass'),
 ('h', 79, 37, 49, 'glass'),
 ('h', 79, 51, 71, 'fixed'),
 ('v', 20, 59, 62, 'door'),
 ('v', 20, 71, 74, 'door'),
 ('v', 36, 22.5, 26.5, 'glass'),
 ('v', 36, 27.5, 54.5, 'glass'),
 ('v', 36, 55, 79, 'open'),
 ('v', 50, 10, 13, 'door'),
 ('v', 50, 55, 79, 'open'),
 ('v', 72, 16, 19, 'door'),
 ('v', 72, 22.5, 26.5, 'glass'),
 ('v', 72, 27.5, 55, 'fixed'),
 ('v', 72, 55, 59, 'open'),
 ('v', 10, 59, 62, 'exdoor'),
 ('v', 10, 71, 77, 'window', [3, 7]),
 ('h', 59, 73, 77, 'slide'),
 ('h', 83, 73, 85, 'fixed'),
 ('h', 83, 88, 97, 'window', [2, 8]),
 ('v', 86, 61, 64, 'door'),
 ('v', 86, 71, 74.5, 'slide'),
 ('v', 98, 62, 67, 'window', [6, 8]),
 ('v', 98, 71, 82, 'window', [2, 8]),
 ('h', 14, 73, 77, 'exdoor'),
 ('h', 14, 81, 85, 'window', [5.5, 8]),
 ('h', 22, 23, 27, 'door'),
 ('h', 22, 36, 42, 'slide'),
 ('h', 22, 56, 59, 'door'),
 ('h', 27, 36, 72, 'open'),
 ('h', 0, 7, 25, 'glass'),
 ('h', -5, 31, 47, 'glass'),
 ('h', -5, 51, 57, 'window', [3, 6]),
 ('h', -5, 68, 71, 'exdoor'),
 ('h', 4, 52, 54.5, 'door'),
 ('h', 4, 61, 63.5, 'door'),
 ('v', 66, 10, 13, 'door'),
 ('v', 18, 49, 53, 'front'),
 ('v', 30, 23, 26, 'door'),
 ('v', 30, 30, 38, 'slide'),
 ('v', 30, 41.5, 44, 'door'),
 ('v', 30, 47, 54, 'open'),
 ('v', 78, 30, 33, 'door'),
 ('v', 78, 17, 21, 'door'),
 ('v', 78, 56.3, 58.7, 'door'),
 ('h', 40, 78, 84, 'open'),
 ('v', 84, 28, 31, 'door'),
 ('v', 84, 49, 52, 'door'),
 ('v', 90, 32, 35, 'door'),
 ('v', 90, 45, 48, 'door'),
 ('h', 37, 96, 99, 'door'),
 ('h', 43, 96, 99, 'door'),
 ('v', 104, 27, 34, 'window', [2.5, 8]),
 ('v', 104, 46, 53, 'window', [2.5, 8]),
 ('v', 104, 38, 41, 'window', [5, 7]),
 ('h', 14, 94, 97, 'exdoor'),
 ('h', 46, 18.6, 21.4, 'door'),
 ('h', 46, 22.5, 25.5, 'door'),
 ('v', 18, 41.5, 44.5, 'door'),
 ('v', 4, 35, 43, 'window', [2.5, 8]),
 ('h', 46, 7, 15, 'window', [3, 7]),
 ('h', 32, 6, 9, 'door'),
 ('h', 32, 13.5, 16.5, 'door'),
 ('v', 4, 24, 28, 'window', [5, 7]),
 ('v', 0, 4, 18, 'window', [2.5, 9]),
 ('h', 22, 67, 70, 'door'),
]

def segments():
    """Split all room edges into wall segments with adjacency."""
    lines = {}
    for r in rooms:
        for (o,c,a,b,side) in [('h',r['y0'],r['x0'],r['x1'],'+'),('h',r['y1'],r['x0'],r['x1'],'-'),
                               ('v',r['x0'],r['y0'],r['y1'],'+'),('v',r['x1'],r['y0'],r['y1'],'-')]:
            lines.setdefault((o,c),[]).append((a,b,side,r['id']))
    segs=[]
    for (o,c),es in lines.items():
        pts=sorted(set([p for e in es for p in e[:2]]))
        cur=None
        for i in range(len(pts)-1):
            a,b=pts[i],pts[i+1]; m=(a+b)/2
            sig={'+':None,'-':None}
            for (ea,eb,s,rid) in es:
                if ea<=m<=eb: sig[s]=rid
            key=(sig['+'],sig['-'])
            if key==(None,None): cur=None; continue
            if cur and cur['key']==key and abs(cur['b']-a)<1e-9: cur['b']=b
            else:
                cur=dict(o=o,c=c,a=a,b=b,key=key); segs.append(cur)
    out=[]
    rid={r['id']:r for r in rooms}
    for s in segs:
        p,m=s['key']; ext = (p is None) or (m is None)
        hs=[rid[x]['h'] for x in (p,m) if x]
        feats=[f for f in F if f[0]==s['o'] and abs(f[1]-s['c'])<1e-9 and f[2]>=s['a']-1e-9 and f[3]<=s['b']+1e-9]
        out.append(dict(o=s['o'],c=s['c'],a=s['a'],b=s['b'],pos=p,neg=m,ext=ext,h=max(hs),
            feats=[dict(a=f[2],b=f[3],k=f[4],x=(f[5] if len(f)>5 else None)) for f in feats]))
    # sanity: every feature used
    used=set()
    for s in out:
        for f in s['feats']: used.add((s['o'],s['c'],f['a'],f['b']))
    miss=[f for f in F if (f[0],f[1],f[2],f[3]) not in used]
    if miss: print("UNUSED FEATURES", miss)
    return out
WALLS = segments()

# Exterior material per room (cladding)
CLAD = {"Living Pavilion":"whiteplaster","Sleeping Wing":"charred","Wellness + Gym Wing":"charred","Studio + Arrival":"whiteplaster"}
CLAD_OVR = {"401":"rammed"}

# Furniture & equipment: (room, label, x0,y0,x1,y1, h, z0, color, shape)
C = dict(oak="#c39a6b",walnut="#6b4a33",marble="#ece8e1",linen="#e6dfd2",olive="#6f7a55",terra="#b0684a",
         black="#2a2a2a",steel="#9aa0a3",cedar="#c08552",stone="#b9b1a3",white="#f3f1ec",rubber="#3a3a3a",
         cushion="#d9cbb5",hinoki="#e2c894",water="#5fa3b5",plant="#5f7a45",slate="#55524c",rug="#cdbfa6")
FURN = [
 ('104', 'Pantry shelving', 10.4, 68, 11.8, 78.6, 7.5, 0, 'mat:honey', 'box'),
 ('104', 'Pantry shelving', 18.2, 72, 19.6, 78.6, 7.5, 0, 'mat:honey', 'box'),
 ('105', 'Cubbies + bench', 10.4, 62.5, 12, 66.6, 7, 0, 'mat:honey', 'box'),
 ('105', 'Dog wash', 16.5, 55.4, 19.6, 58, 2.6, 0, 'mat:stone', 'box'),
 ('201', 'Low linen-wrapped bed (king)', 76, 69.4, 82.6, 76, 1.6, 0, 'mat:linen', 'bed'),
 ('201', 'Lime-plaster headwall ledge', 75, 68.4, 83.6, 69.4, 3.4, 0, 'mat:plaster', 'box'),
 ('201', 'Pair of lounge chairs', 74, 78.4, 80.6, 81.2, 2.5, 0, '#b9a27e', 'lounge2'),
 ('201', 'Sheer linen curtains', 73, 82.3, 85, 82.5, 10.3, 0.1, '#f6f1e6', 'curtain'),
 ('201', 'Big fan under wood ceiling', 76.5, 69.5, 82.5, 75.5, 0.6, 9.6, '#6b4a33', 'fan'),
 ('201', 'Cove lighting', 72.3, 59.3, 85.7, 82.7, 0.12, 10.2, '#ffd9a0', 'cove'),
 ('201', 'Rug', 75, 67.2, 84, 78, 0.05, 0, '#cdbfa6', 'box'),
 ('202', 'Deep hinoki soaking tub by the window', 93, 78, 97.4, 82.4, 2.3, 0, '#e2c894', 'tub'),
 ('202', 'Walk-in rain shower (floor: open item, limestone shown)', 86.6, 75.4, 92, 82.4, 0.12, 0, 'mat:stone', 'box'),
 ('202', 'Green zellige shower wall + unlacquered brass rain head', 86.6, 74.9, 91.2, 75.4, 7.5, 0, 'mat:zellige', 'box'),
 ('202', 'Floating built-in cherry vanity (flush inset doors), integrated basins', 95.4, 69.6, 97.4, 76.5, 1.5, 1.4, 'mat:cherry', 'vanity'),
 ('202', 'WC', 87, 69.6, 89, 72, 1.4, 0, '#f3f1ec', 'box'),
 ('203', 'Closet millwork', 86.4, 59.4, 88.4, 68.6, 7.5, 0, 'mat:cherry', 'box'),
 ('203', 'Closet millwork', 95.6, 59.4, 97.6, 68.6, 7.5, 0, 'mat:cherry', 'box'),
 ('203', 'Island', 90.5, 62, 93.5, 66, 3, 0, 'mat:cherry', 'box'),
 ('211', 'Pump + filter', 90, 15, 96, 18, 3, 0, 'mat:steel', 'box'),
 ('211', 'Salt chlorine generator cell + controller', 92, 21, 96.5, 23.4, 4.5, 0, '#9aa0a3', 'box'),
 ('302', 'Rubber lifting area', 30, -4, 40, 6.5, 0.06, 0, 'mat:rubber', 'box'),
 ('302', 'Free-standing rig, wood rings + climbing rope', 30.8, -2, 35.8, 4, 9.5, 0, '#2a2a2a', 'rig'),
 ('302', 'Pilates Cadillac', 40, 14, 47.5, 16.6, 6.8, 0, 'mat:honey', 'frame'),
 ('302', 'Pilates reformer', 40, 18.4, 48, 20.0, 1.3, 0, 'mat:honey', 'reformer'),
 ('302', 'Wood water rower', 41, -1.6, 48.5, 0.20000000000000018, 1.7, 0, 'mat:honey', 'rower'),
 ('302', 'Treadmill', 41, 2.5, 47.5, 5.6, 4.4, 0, '#2a2a2a', 'treadmill'),
 ('302', 'Kettlebell + dumbbell rack', 42.6, 20.7, 49.4, 21.8, 3, 0, '#2a2a2a', 'krack'),
 ('302', 'Bars-and-bands wall', 28.3, 5.5, 29.2, 15.5, 8, 0, '#2a2a2a', 'bands'),
 ('302', 'Mirror wall', 49.58, -4, 49.74, 6.5, 7.5, 0.3, '#dfe7ea', 'mirror'),
 ('302', 'Storage wall (mats, plyo boxes)', 28.3, -4, 29.7, 4.5, 8, 0, 'mat:honey', 'box'),
 ('302', 'Plyo boxes', 33, 18.5, 35, 20.5, 2, 0, 'mat:honey', 'box'),
 ('302', 'Plyo boxes', 35.4, 19, 37, 20.6, 1.5, 0, 'mat:honey', 'box'),
 ('302', 'Balance boards', 30.5, 13, 33.5, 14.4, 0.4, 0, '#6b4a33', 'box'),
 ('303', 'Built-in cold plunge (green zellige)', 60, 17, 65.4, 21.4, 0.5, 0, 'mat:zellige', 'plunge'),
 ('303', 'Rain showers', 51, 18.2, 56, 21.6, 0.12, 0, 'mat:blackstone', 'box'),
 ('303', 'Teak bench', 51, 10, 57, 11.4, 1.5, 0, '#9c6a3c', 'box'),
 ('304', 'Tiered aspen benches, backlit', 50.4, -0.5999999999999996, 57.6, 3.5999999999999996, 3, 0, 'mat:aspen', 'benches'),
 ('304', 'Electric rock heater', 56.2, -4.4, 57.6, -2.6, 2.6, 0, '#2f2c29', 'heater'),
 ('305', 'Heated black-stone bench', 58.4, 0.7999999999999998, 65.6, 3.5999999999999996, 1.6, 0, 'mat:blackstone', 'box'),
 ('306', 'Lockers + towels', 70.6, -4, 71.6, 12, 7, 0, 'mat:cherry', 'box'),
 ('405', 'Gear racks', 18.4, 22.4, 29.6, 24, 7, 0, 'mat:steel', 'box'),
 ('407', 'Sit-stand desk facing the garden', 11, 2.6, 17, 5, 2.4, 0, 'mat:honey', 'standdesk'),
 ('407', 'Studio desk + mixer, monitors, MPC', 18.5, 2.2, 26.5, 4.8, 2.5, 0, 'mat:honey', 'studio'),
 ('407', 'Digital piano', 6, 8, 7.8, 13, 2.6, 0, '#1f1f1f', 'piano'),
 ('407', 'E-drum kit', 8, 14.5, 13, 19.5, 3.5, 0, '#2a2a2a', 'drums'),
 ('407', 'Guitar wall', 17.4, 20.55, 21.8, 20.75, 7.2, 3, '#a8743f', 'guitarwall'),
 ('407', 'Mic stand', 15.5, 14, 16.3, 14.8, 5.5, 0, '#9aa0a3', 'box'),
 ('407', 'PA speakers', 2.5, 4, 4, 5.6, 5.5, 0, '#2a2a2a', 'box'),
 ('407', 'PA speakers', 2.5, 15.4, 4, 17, 5.5, 0, '#2a2a2a', 'box'),
 ('407', 'Fabric acoustic panels', 26.6, 2.5, 26.8, 19.5, 4.5, 3, '#8d8a72', 'apanels'),
 ('407', 'Acoustic ceiling clouds', 8, 5, 24, 17, 0.3, 10.8, '#e8e2d6', 'clouds'),
 ('407', 'Sculpted wood ceiling', 1.3, 1.3, 26.7, 20.7, 0.8, 12.4, 'mat:honey', 'ribs'),
 ('407', 'Layered pendants', 12.5, 3, 15.5, 4.6, 1.2, 7.2, '#efe6d3', 'layered'),
 ('407', 'RGB studio light strip', 18.5, 20.6, 26, 20.7, 0.1, 9.2, '#b04de0', 'rgb'),
 ('407', 'Sofa', 19.5, 15.2, 26.2, 18.2, 2.6, 0, '#6f7a55', 'sofa'),
 ('407', 'Inner isolation wall (east)', 26.9, 0.6, 27.4, 21.4, 12.6, 0, 'mat:plaster', 'box'),
 ('407', 'Inner isolation wall (north)', 9.6, 20.9, 22.6, 21.4, 12.6, 0, 'mat:plaster', 'box'),
 ('407', 'Inner isolation wall (west)', 0.5999999999999996, 18.6, 1.0999999999999996, 21.4, 12.6, 0, 'mat:plaster', 'box'),
 ('407', 'Inner isolation wall (west)', 0.5999999999999996, 0.6, 1.0999999999999996, 3.4, 12.6, 0, 'mat:plaster', 'box'),
 ('407', 'Rug', 8, 6, 17, 13, 0.05, 0, '#cdbfa6', 'box'),
 ('102', 'Honey-oak dining table (8)', 39, 64, 47, 68, 2.5, 0, 'mat:honey', 'table'),
 ('102', 'Windsor chairs (walnut)', 39.5, 62.4, 46.5, 63.6, 1.5, 0, 'mat:honey', 'chairs'),
 ('102', 'Shaker chairs (cherry)', 39.5, 68.4, 46.5, 69.6, 1.5, 0, 'mat:cherry', 'chairs'),
 ('102', 'Paper lantern', 41, 64.5, 45, 67.5, 2.4, 6.6, '#f4ecdc', 'lantern'),
 ('102', 'Shoji screens', 49.7, 72.5, 50.0, 78.8, 8, 0, '#f4ecdc', 'shoji'),
 ('103', 'Low modular sofa', 51.8, 61.3, 67.2, 63.6, 1.0, 0, 'mat:linen', 'sofa'),
 ('103', 'Low modular sofa', 51.8, 70.4, 67.2, 72.7, 1.0, 0, 'mat:linen', 'sofa'),
 ('103', 'Low modular sofa', 51.8, 63.6, 54.1, 70.4, 1.0, 0, 'mat:linen', 'sofa'),
 ('103', 'Coffee table', 57, 65.2, 63, 68.8, 0.8, 0, '#6b4a33', 'box'),
 ('103', 'Paper lanterns', 55.5, 64, 63.5, 70, 2.0, 7.0, '#f4ecdc', 'lanterns'),
 ('103', 'Woven pendant', 52.3, 75.2, 54.3, 77.2, 1.6, 6.6, '#b48a56', 'woven'),
 ('103', 'Woven pendant', 58, 75.2, 60, 77.2, 1.6, 6.6, '#b48a56', 'woven'),
 ('103', 'Linear gas fire in plaster plinth', 69.4, 61, 71.4, 73, 1.6, 0, 'mat:plaster', 'fire'),
 ('103', 'Leather lounge chair', 52, 74.6, 55.2, 78, 2.6, 0, '#8a5a34', 'lounge'),
 ('103', 'Wall-mounted art', 71.4, 64, 71.6, 71, 4.2, 3.8, '#c9b48e', 'art'),
 ('204', 'Low bench', 76.8, 29.5, 77.6, 44.5, 1.5, 0, 'mat:honey', 'box'),
 ('204', 'Wall-mounted art', 77.55, 34, 77.75, 40, 3.5, 4, '#a7b39a', 'art'),
 ('401', 'Genkan bench', 26, 53.6, 29.6, 54.6, 1.5, 0, 'mat:honey', 'box'),
 ('401', 'Rammed earth wall', 19, 54.3, 25, 54.8, 9, 0, 'mat:rammed', 'box'),
 ('401', 'Wall-mounted art', 25, 46.25, 29, 46.45, 4, 3.5, '#b8836a', 'art'),
 ('404', 'Fusuma closet doors', 18.6, 28.15, 29.4, 28.45, 7, 0, '#e9dfc9', 'fusuma'),
 ('401', 'Kumiko lattice screen', 27.2, 47.6, 27.45, 52.4, 7, 0, 'mat:honey', 'kumiko'),
 ('404', 'Tokonoma', 18.4, 32, 20, 37, 1.0, 0, '#6b4a33', 'box'),
 ('404', 'Low table + zabuton', 22.5, 32, 26.5, 36, 1.2, 0, '#6b4a33', 'lowtable'),
 ('404', 'Paper andon lantern', 27.5, 37.6, 28.5, 38.6, 2.2, 0, '#f4ecdc', 'andon'),
 ('404', 'Shoji screens', 29.55, 30, 29.75, 34.5, 8, 0, '#f4ecdc', 'shoji'),
 ('101', 'Rift white oak base cabinets (north run)', 20.6, 76.4, 30.3, 78.6, 2.85, 0, 'mat:oak', 'box'),
 ('101', 'Honed quartzite counter (north run)', 20.5, 76.3, 30.4, 78.7, 0.15, 2.85, 'mat:marble', 'box'),
 ('101', 'Integrated quartzite sink + brushed stainless faucet', 26.6, 76.5, 29.6, 78.4, 0.25, 2.72, 'mat:marble', 'box'),
 ('101', 'Honed marble slab backsplash', 20.6, 78.45, 30.3, 78.62, 0.9, 3.0, 'mat:marble', 'box'),
 ('101', 'Rift white oak base cabinets (range wall)', 20.6, 55.3, 30, 57.5, 2.85, 0, 'mat:oak', 'box'),
 ('101', 'Honed quartzite counter (range wall)', 20.5, 55.2, 30.1, 57.6, 0.15, 2.85, 'mat:marble', 'box'),
 ('101', 'Pro gas range 48" with wok burner', 23, 55.35, 27, 57.7, 3.0, 0, 'mat:steel', 'box'),
 ('101', 'Hidden hood insert in oak cabinetry (1,500 m3/h)', 22.6, 55.3, 27.4, 57.1, 3.4, 6.4, 'mat:oak', 'box'),
 ('101', 'Honed marble slab backsplash (range wall)', 20.6, 55.3, 30, 55.45, 3.4, 3.0, 'mat:marble', 'box'),
 ('101', 'Open rift oak shelves', 27.6, 55.3, 29.8, 56.3, 3.2, 4.2, 'mat:oak', 'shelves'),
 ('101', 'Appliance garage (oak pocket doors)', 20.4, 62.4, 22.6, 64.4, 3.0, 2.85, 'mat:oak', 'box'),
 ('101', 'Appliance garage base', 20.4, 62.4, 22.6, 64.4, 2.85, 0, 'mat:oak', 'box'),
 ('101', 'Built-in stainless fridge 36"', 20.4, 64.5, 22.6, 67.5, 7.2, 0, 'mat:steel', 'box'),
 ('101', 'Steam oven + wall oven column (oak)', 20.4, 67.6, 22.6, 70.6, 8.5, 0, 'mat:oak', 'box'),
 ('101', 'Work island: rift oak + quartzite, flush induction', 23.5, 60.5, 31.5, 63.5, 2.85, 0, 'mat:oak', 'box'),
 ('101', 'Work island quartzite top', 23.4, 60.4, 31.6, 63.6, 0.15, 2.85, 'mat:marble', 'box'),
 ('101', "Quartzite waterfall island 10' (stools one side)", 23, 67, 33, 71, 2.85, 0.15, 'mat:oak', 'box'),
 ('101', 'Quartzite waterfall island top', 22.9, 66.9, 33.1, 71.1, 0.18, 2.85, 'mat:marble', 'box'),
 ('101', 'Waterfall edge west', 22.9, 66.9, 23.15, 71.1, 3.03, 0, 'mat:marble', 'box'),
 ('101', 'Waterfall edge east', 32.85, 66.9, 33.1, 71.1, 3.03, 0, 'mat:marble', 'box'),
 ('101', 'Stools', 24, 71.4, 32, 72.6, 2.5, 0, '#6b4a33', 'stools'),
 ('101', 'Skylight light well (glazed)', 24, 68.4, 32, 70.6, 0.3, 11.6, 'mat:glass', 'box'),
 ('101', 'Linear suspended LED pendant', 24, 69.3, 32, 69.7, 0.15, 8.6, 'mat:lamp', 'box'),
 ('205', 'Washer/dryer', 78.4, 20.6, 82.6, 23.6, 3, 0, '#f3f1ec', 'box'),
 ('205', 'Fold counter', 83, 21.6, 87.6, 23.6, 3, 0, 'mat:lacq', 'box'),
 ('206', 'Air handler + ERV', 99.8, 56.3, 103.6, 58.7, 6, 0, 'mat:steel', 'box'),
 ('206', 'Linen shelves', 86, 56.3, 92, 58.7, 7, 0, 'mat:honey', 'box'),
 ('212', 'Honey-oak lockers + hooks', 83.2, 24.4, 83.9, 39.6, 7, 0, 'mat:cherry', 'box'),
 ('212', 'Bench', 78.4, 34, 79.6, 39.6, 1.5, 0, 'mat:honey', 'box'),
 ('213', 'Built-in study desk for two', 82.2, 41, 83.9, 55, 2.5, 0, 'mat:cherry', 'table'),
 ('213', 'Book shelves', 78.3, 50, 78.9, 55.6, 7, 0, 'mat:cherry', 'box'),
 ('214', 'Closet millwork', 84.3, 24.3, 85.8, 36.7, 7.5, 0, 'mat:lacq', 'box'),
 ('215', 'Closet millwork', 84.3, 43.3, 85.8, 55.7, 7.5, 0, 'mat:lacq', 'box'),
 ('209', 'Bed under loft', 92, 25, 95.5, 31.6, 1.4, 0, 'mat:linen', 'bed'),
 ('209', 'Bunk / play loft (7 ft up)', 90.2, 24.2, 98, 36.8, 0.8, 7, 'mat:honey', 'box'),
 ('209', 'Desk by the window', 102, 31, 103.8, 35.6, 2.5, 0, 'mat:cherry', 'table'),
 ('209', 'Window-seat reading nook', 102.2, 26, 103.8, 30.5, 1.6, 0, 'mat:cherry', 'seat'),
 ('209', 'Low cube shelves + bins', 98.5, 24.3, 101.8, 25.5, 2.4, 0, 'mat:cherry', 'cubes'),
 ('207', 'Bed under loft', 92, 49, 95.5, 55.6, 1.4, 0, 'mat:linen', 'bed'),
 ('207', 'Bunk / play loft (7 ft up)', 90.2, 43.2, 98, 55.8, 0.8, 7, 'mat:honey', 'box'),
 ('207', 'Desk by the window', 102, 44, 103.8, 48.6, 2.5, 0, 'mat:cherry', 'table'),
 ('207', 'Window-seat reading nook', 102.2, 49.5, 103.8, 54, 1.6, 0, 'mat:cherry', 'seat'),
 ('207', 'Small bouldering wall + mat', 98.4, 55.6, 103.6, 55.9, 8, 0, 'mat:honey', 'kidwall'),
 ('208', 'Tub-shower', 84.4, 37.4, 89, 42.6, 1.8, 0, '#f3f1ec', 'box'),
 ('208', 'Double vanity (two sinks)', 91, 37.3, 95, 38.6, 2.8, 0, 'mat:cherry', 'box'),
 ('208', 'WC', 101.5, 40.5, 103.5, 42.6, 1.4, 0, '#f3f1ec', 'box'),
 ('402', 'Coats + shoes', 22.4, 40.4, 25.6, 41.6, 7, 0, 'mat:honey', 'box'),
 ('403', 'Integrated stone vanity', 26.4, 40.3, 29.6, 41.3, 2.8, 0, 'mat:stone', 'box'),
 ('403', 'WC', 27, 43.6, 29, 45.6, 1.4, 0, '#f3f1ec', 'box'),
 ('404', 'Book shelves', 18.3, 38.4, 24, 39.7, 7, 0, 'mat:cherry', 'box'),
 ('404', 'Reading lamp', 26.5, 33, 27.2, 33.7, 4.5, 0, '#efe6d3', 'box'),
 ('408', 'Queen bed', 8, 36, 13.2, 42.6, 1.6, 0, 'mat:linen', 'bed'),
 ('408', 'Reading chair', 14.5, 43, 16.8, 45.3, 2.5, 0, '#b9a27e', 'box'),
 ('409', 'Walk-in shower', 4.4, 22.4, 8.4, 26.4, 0.12, 0, 'mat:stone', 'box'),
 ('409', 'Vanity', 10.5, 26, 11.6, 30.5, 2.8, 0, 'mat:cherry', 'box'),
 ('409', 'WC', 4.5, 29.4, 6.5, 31.6, 1.4, 0, '#f3f1ec', 'box'),
 ('410', 'Closet millwork', 12.3, 22.3, 17.7, 23.6, 7.5, 0, 'mat:honey', 'box'),
 ('303', 'Zero-gravity recovery chairs', 51, 5, 56, 8, 2.4, 0, '#b9a27e', 'lounge2'),
]
furn=[dict(room=f[0],label=f[1],x0=f[2],y0=f[3],x1=f[4],y1=f[5],h=f[6],z0=f[7],color=f[8],shape=f[9]) for f in FURN]

# Roofs: rect + overhang + heights. type flat|butterfly
ROOFS = [{'he': 14.6, 'hv': 12.6, 'id': 'living', 'oh': {'e': 0, 'n': 8, 's': 6, 'w': 6}, 'type': 'butterfly', 'valley': 67, 'wall': 12, 'x0': 10, 'x1': 72, 'y0': 55, 'y1': 79},
 {'axis': 'y', 'h0': 11.6, 'h1': 13.4, 'holes': [[93, 78, 97, 82]], 'id': 'master', 'oh': {'e': 6, 'n': 6, 's': 0, 'w': 0}, 'type': 'shed', 'x0': 72, 'x1': 98, 'y0': 59, 'y1': 83},
 {'axis': 'x', 'h0': 11.8, 'h1': 10.6, 'id': 'east', 'oh': {'e': 6, 'n': 0, 's': 6, 'w': 6}, 'type': 'shed', 'x0': 72, 'x1': 84, 'y0': 14, 'y1': 59},
 {'axis': 'y', 'h0': 14.0, 'h1': 12.6, 'id': 'south', 'oh': {'e': 0, 'n': 6, 's': 6, 'w': 0}, 'type': 'shed', 'x0': 28, 'x1': 72, 'y0': -5, 'y1': 27},
 {'axis': 'y', 'h0': 16.0, 'h1': 14.6, 'holes': [[13, 9, 19, 14]], 'id': 'office', 'oh': {'e': 6, 'n': 0, 's': 6, 'w': 6}, 'type': 'shed', 'x0': 0, 'x1': 28, 'y0': 0, 'y1': 22},
 {'axis': 'x', 'h0': 11.8, 'h1': 10.6, 'id': 'west', 'oh': {'e': 6, 'n': 0, 's': 0, 'w': 6}, 'type': 'shed', 'x0': 18, 'x1': 36, 'y0': 22, 'y1': 55},
 {'axis': 'x', 'h0': 16.0, 'h1': 15.0, 'id': 'kids', 'oh': {'e': 6, 'n': 0, 's': 0, 'w': 0}, 'type': 'shed', 'x0': 84, 'x1': 104, 'y0': 24, 'y1': 59},
 {'axis': 'x', 'h0': 11.8, 'h1': 10.6, 'id': 'laundry', 'oh': {'e': 6, 'n': 0, 's': 6, 'w': 0}, 'type': 'shed', 'x0': 84, 'x1': 98, 'y0': 14, 'y1': 24},
 {'axis': 'x', 'h0': 11.0, 'h1': 12.0, 'id': 'guest', 'oh': {'e': 0, 'n': 6, 's': 0, 'w': 6}, 'type': 'shed', 'x0': 4, 'x1': 18, 'y0': 22, 'y1': 46}]

# Site & landscape items (plan coords)
SITE = {'atu': {'label': 'Septic + Aerobic Treatment', 'x0': 103, 'x1': 115, 'y0': -3, 'y1': 3},
 'bale': {'h': 9, 'label': 'Bale Pavilion', 'x0': 90, 'x1': 97, 'y0': -27, 'y1': -19},
 'bathgarden': {'label': 'Bath Garden', 'x0': 98, 'x1': 106, 'y0': 69, 'y1': 83},
 'bikes': {'label': 'Bike Racks', 'x0': 4, 'x1': 7.5, 'y0': 62, 'y1': 72},
 'carport': {'label': 'Carport (2 cars, open)', 'x0': -44, 'x1': -20, 'y0': 30, 'y1': 54},
 'climb': {'h': 17, 'label': 'Climbing Pavilion', 'oh': 5, 'wall': 12, 'x0': -22, 'x1': -4, 'y0': 0, 'y1': 18},
 'condensers': [[119, 1], [119, 5], [119, 9]],
 'courtyard': {'x0': 36, 'x1': 72, 'y0': 27, 'y1': 55},
 'cshower': {'label': 'Courtyard Shower', 'x0': 66.5, 'x1': 71.5, 'y0': 27.5, 'y1': 31.5},
 'drainfield': {'label': 'Drain Field', 'x0': 30, 'x1': 90, 'y0': -74, 'y1': -52},
 'drive': [[-90, 10], [-60, 18], [-44, 30]],
 'entrycourt': {'x0': -20, 'x1': 18, 'y0': 46, 'y1': 55},
 'firepit': {'cx': 58, 'cy': 99, 'label': 'Round Stone Fire Pit', 'r': 7},
 'frontgarden': [[-16, 38, -2, 46], [-16, 57, 2, 62]],
 'lane': {'label': "Turf Sprint Lane 20 yd + 15' run-out", 'x0': -32, 'x1': 43, 'y0': -16, 'y1': -8},
 'lanterns': [[55, 40.6], [38.5, 41], [69.5, 42]],
 'lawn': {'x0': 39, 'x1': 69, 'y0': 42, 'y1': 50},
 'lot': {'x0': -90, 'x1': 170, 'y0': -80, 'y1': 150},
 'maples': [[66.5, 47.5], [40.5, 46.5], [39, 52.3], [62, 51.8]],
 'meadow_label': [120, -40],
 'orchard': [[-56, 70], [-46, 70], [-56, 80], [-46, 80], [-56, 90], [-46, 90], [-36, 94]],
 'outdoor_shower': {'label': 'Outdoor Shower', 'x0': 72.5, 'x1': 77.5, 'y0': 4, 'y1': 10},
 'pergola': {'label': 'Pergola Dining', 'x0': 19, 'x1': 37, 'y0': 81, 'y1': 95},
 'pool': {'label': "Saltwater Pool 34' x 12'", 'x0': 54, 'x1': 88, 'y0': -22, 'y1': -10},
 'pooldeck': {'x0': 48, 'x1': 98, 'y0': -28, 'y1': -5},
 'power': {'label': 'Generator + Battery Pad', 'x0': 125, 'x1': 135, 'y0': -4, 'y1': 5},
 'pullup': {'label': 'Outdoor Pull-Up Station', 'x0': 45, 'x1': 48.5, 'y0': -10, 'y1': -8},
 'service': [[-62, 2], [-62, -38], [118, -38], [118, -6]],
 'shadetree': {'cx': 53, 'cy': 45, 'r': 6},
 'tanks': [[106, 18, 5], [117, 18, 5]],
 'util': {'gate': [112, 124], 'label': 'Utility Yard', 'x0': 100, 'x1': 136, 'y0': -6, 'y1': 24},
 'veg': {'label': 'Vegetable Garden', 'x0': -30, 'x1': -6, 'y0': 64, 'y1': 86},
 'veranda': {'label': 'Covered Veranda', 'x0': 36, 'x1': 72, 'y0': 79, 'y1': 87},
 'walkway': {'h': 9, 'label': 'Covered Walkway', 'x0': -20, 'x1': 13, 'y0': 48, 'y1': 54},
 'water': {'label': 'Planted Water Court', 'x0': 57, 'x1': 68, 'y0': 31, 'y1': 39},
 'watertreat': {'label': 'Water Treatment', 'x0': 124, 'x1': 135, 'y0': 13, 'y1': 23},
 'well': {'cx': 140, 'cy': 95, 'label': 'Well'},
 'zen': {'label': 'Raked Gravel', 'x0': 39, 'x1': 52, 'y0': 30, 'y1': 40}}

COVERED = [dict(id="C1",name="Climbing Pavilion",x0=-22,y0=0,x1=-4,y1=18,w=18,d=18,area=324,
  notes="Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack.")]

OUTDOOR_FIN = [
 ("Exterior","Flagstone terraces","Split by zone: white lime-plaster panels with black timber trim on the Living Pavilion and Studio + Arrival wings (entry and view faces); charred-timber (shou sugi ban) siding on the Sleeping and Wellness wings; bronze window and door frames; bronze front door (style + timber: open item); koshi street lattice on the entry face; standing-seam metal roofs; rammed-earth entry wall; exterior wall light: open item"),
 ("Engawa + courtyard","Western red cedar engawa deck with a bluestone step; slate paving with bluestone paths; lawn; raked gravel","Timber engawa on the north, east and west edges under the eaves; recessed step lights in the bluestone step + string lights under the eave; two teak loungers on the east engawa; big shade tree; Japanese maples; planted water court; stone lanterns + mushroom path lights in the planting; stone water basin; curved teak bench; courtyard table: open item; courtyard shower"),
 ("Saltwater pool + bale","Basalt deck with flamed-granite coping (both sealed, salt-resistant)","Saltwater pool with salt chlorine generator (cell replaced about every 3-5 years); marine-grade 316 stainless fittings, ladders and drains; green stone pool tile; teak loungers with linen; bale pavilion with walnut platform and standing-seam roof"),
 ("Landscape","Meadow, gravel","Wildflower meadow; vegetable garden in western red cedar beds; fruit trees; round stone fire pit; front garden beds; cedar pergola with teak table"),
 ("Arrival","Gravel drive, flagstone","Modern black steel carport (decided); covered walkway to the front door"),
 ("Climbing Pavilion","Poured-rubber soft-fall + crash pads","Fir frame; standing-seam roof raised to 17 ft (about 4 ft clear over the wall); full 16 ft wide x 12 ft high climbing wall"),
 ("Utility Yard","Floor: open item (gravel + concrete pads shown)","7 ft charred-timber screen with service gate; 2 rainwater tanks; water treatment lean-to; septic/ATU lids; generator + battery pad; HVAC condensers"),
 ("Active zone","Turf","Sprint lane; outdoor pull-up station in black steel"),
]
OPEN_ITEMS = [
 ("Front door style + timber","Bronze chosen; panel style and timber species still open"),
 ("Bath faucet mount","Neither deck- nor wall-mount chosen"),
 ("Light switches","Neither option chosen"),
 ("Door hardware","Skipped"),
 ("Cabinet pulls","Skipped (kitchen stays handleless for now)"),
 ("Exterior wall light","Neither option chosen"),
 ("Bath accent stone","Neither option chosen (green zellige used as the accent for now)"),
 ("Terracotta","Skipped (none used)"),
 ("Shower floor","Skipped (honed limestone shown)"),
 ("Utility yard floor","Skipped (gravel + concrete pads shown)"),
 ("Dining table","Skipped (placeholder table shown)"),
 ("Courtyard table","Neither option chosen (none shown)"),
]

# Bunk / play lofts over the kids' rooms (Oct 20 deck): counted as conditioned floor area
LOFTS = [{'id': 'L1', 'name': "Kids' 1 Bunk + Play Loft", 'room': '207', 'x0': 90, 'y0': 43, 'x1': 98, 'y1': 56, 'area': 104}, {'id': 'L2', 'name': "Kids' 2 Bunk + Play Loft", 'room': '209', 'x0': 90, 'y0': 24, 'x1': 98, 'y1': 37, 'area': 104}]

def total_conditioned():
    t=sum(r['area'] for r in rooms if r['cond'])+sum(l['area'] for l in LOFTS); return int(t) if t==int(t) else t

if __name__=="__main__":
    t=total_conditioned()
    print("Conditioned SF:",t, "m2:",round(t*SF2M2,1))
    for w in ["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"]:
        print(w, sum(r['area'] for r in rooms if r['wing']==w and r['cond']))
    data=dict(openItems=OPEN_ITEMS,frameless=[["h",55,50.5,72],["v",72,27.5,55]],rooms=rooms,walls=WALLS,furn=furn,roofs=ROOFS,site=SITE,clad=CLAD,cladOvr=CLAD_OVR,
              total=t,courtyard=COURTYARD,covered=COVERED,lofts=LOFTS)
    json.dump(data,open("plan.json","w"),indent=1)
    print("walls",len(WALLS))
