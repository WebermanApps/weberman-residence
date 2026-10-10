"""Weberman Residence — single source of truth for plan, 3D data and drawings.
Units: feet. Plan coords: x = east, y = north. Origin = SW corner of the office."""
import json, math
FT2M = 0.3048
SF2M2 = 0.09290304

# id, name, wing, x0,y0,x1,y1, ceiling h, floor, conditioned, notes
ROOMS = [
 ("101","Kitchen","Living Pavilion",20,55,36,79,12,"stonetile",True,
  "Bright, sleek kitchen: white handleless cabinets, black stone counters and a green zellige backsplash. A 10-ft marble island seats five on stools. Stainless range under a glass chimney hood, white apron sink with a brass faucet, open honey-oak shelves."),
 ("102","Dining","Living Pavilion",36,55,50,79,12,"herring",True,
  "Seats eight under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north."),
 ("103","Living + Conversation Pit","Living Pavilion",50,55,72,79,12,"herring",True,
  "The heart of the house, fully open to the garden: 21 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. 16-ft sunken conversation pit with a low modular sofa, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace)."),
 ("104","Walk-in Pantry","Living Pavilion",10,67,20,79,10,"stonetile",True,
  "Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter."),
 ("105","Mudroom + Gear","Living Pavilion",10,55,20,67,10,"stonetile",True,
  "Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash."),
 ("201","Master Bedroom","Sleeping Wing",72,59,86,83,11,"honey",True,
  "Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window."),
 ("202","Master Bath","Sleeping Wing",86,69,98,83,10,"blackstone",True,
  "Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden."),
 ("203","Master Closet","Sleeping Wing",86,59,98,69,10,"honey",True,
  "Walk-in closet with honey-oak millwork and a center island."),
 ("204","East Engawa Gallery","Sleeping Wing",72,14,78,59,10,"honey",True,
  "Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing."),
 ("205","Laundry","Sleeping Wing",78,49,88,59,10,"stone",True,
  "Next to the bedrooms. Stacked W/D pair, folding counter, drying rack."),
 ("206","Linen + Mechanical","Sleeping Wing",88,49,98,59,10,"concrete",True,
  "Linen storage, heat pump air handler, ERV, water heating."),
 ("207","Kids' Room 1","Sleeping Wing",85,36.5,98,49,10,"honey",True,
  "Compact 13 x 12.5 ft calm white room: window-seat reading nook on the east window, desk by the window, wardrobe, low cube shelves with bins, a beanbag, and a small bouldering wall with a crash mat."),
 ("208","Jack-and-Jill Bath","Sleeping Wing",78,30,85,45.5,10,"stone",True,
  "Tighter 7 x 15.5 ft bath (about 109 SF) between the kids' rooms: two vanities, WC and a tiled tub-shower, lockable from each side."),
 ("209","Kids' Room 2 / Guest","Sleeping Wing",85,24,98,36.5,10,"honey",True,
  "Compact 13 x 12.5 ft room that still fits a queen bed, so it doubles as the guest room. Window-seat nook, desk by the window, cube shelves, and a small climbing wall feature. The Guest / Pool Bath is just down the engawa."),
 ("210","Guest / Pool Bath","Sleeping Wing",78,14,88,24,10,"stone",True,
  "Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests."),
 ("211","Pool Equipment","Sleeping Wing",88,14,98,24,9,"concrete",False,
  "Unconditioned. Saltwater pool equipment: variable-speed pump, cartridge filter, heat pump heater and the salt chlorine generator cell (replace the cell about every 3-5 years). Ties into the utility yard next door. Exterior access only."),
 ("212","Kids' Entry + Closet","Sleeping Wing",78,24,85,30,10,"honey",True,
  "Entry vestibule from the east engawa to Kids' Room 2, with a wardrobe."),
 ("213","Kids' Entry","Sleeping Wing",78,45.5,85,49,10,"honey",True,
  "Short entry vestibule from the east engawa to Kids' Room 1."),
 ("301","South Covered Walkway","Wellness + Gym Wing",36,22,72,27,10,"flagstone",False,
  "Open-air covered walkway (not conditioned) under the wellness-wing eave, closing the courtyard ring. Flagstone floor, open to the courtyard, with glass doors into the east and west galleries."),
 ("302","Exercise Room","Wellness + Gym Wing",28,0,50,22,12,"honey",True,
  "Calm studio look: honey-oak floor with a rubber lifting area, a high wood ceiling, and a mirror wall. Free-standing rig with wood rings and a climbing rope, Pilates Cadillac and reformer, wood water rower, treadmill, kettlebell and dumbbell rack, and a bars-and-bands wall. Glass slides open to the sprint lane and an outdoor pull-up station."),
 ("303","Wet Room","Wellness + Gym Wing",50,9,66,22,10,"blackstone",True,
  "Black-stone wet room: two rain showers, a built-in cold plunge lined in green zellige (39-50 F), teak bench. Serves the sauna and steam room."),
 ("304","Sauna","Wellness + Gym Wing",50,0,58,9,8,"aspen",True,
  "Warm cedar walls with tiered pale-aspen benches, backlit underneath, and an electric rock heater (no wood stove). Low window toward the pool and meadow."),
 ("305","Steam Room","Wellness + Gym Wing",58,0,66,9,8,"blackstone",True,
  "Stone steam room (not a white hammam): honed black stone on the walls, floor and heated bench."),
 ("306","Changing + Towels","Wellness + Gym Wing",66,0,72,22,10,"stone",True,
  "Towels, robes, honey-oak lockers. Door to the pool deck and outdoor shower."),
 ("401","Entry Genkan","Studio + Arrival",18,46,30,55,10,"stonetile",True,
  "Stone genkan with a step-up to the oak floor, a rammed-earth feature wall and one large artwork. Solid charred-oak pivot door (no glass entry). The first view lines up across the engawa into the courtyard."),
 ("402","Coat + Shoe Closet","Studio + Arrival",18,40,24,46,10,"honey",True,"Coat and shoe storage."),
 ("403","Powder Room","Studio + Arrival",24,40,30,46,10,"stone",True,
  "Powder room by the entry: integrated stone basin, lime-plaster walls."),
 ("404","Tatami Room","Studio + Arrival",18,28,30,40,9,"tatami",True,
  "8-mat (12 x 12 ft) tatami room (loved) with a tokonoma alcove, low table, zabuton and a paper andon lantern. Shoji slide open to the engawa and courtyard; low garden window. Used for tea, meditation, or as an overflow guest room."),
 ("405","Sound Lock + AV Closet","Studio + Arrival",18,22,30,28,10,"honey",True,
  "Sound lock vestibule between the west engawa and the studio: two solid-core doors with full perimeter seals and automatic drop seals, so one is always closed. Also holds the AV rack and instrument storage."),
 ("406","West Engawa Gallery","Studio + Arrival",30,22,36,55,10,"honey",True,
  "Glazed engawa from the entry to the office and great room."),
 ("407","Isolated Studio / Office","Studio + Arrival",4,0,28,22,14,"honey",True,
  "Fully isolated room-within-a-room studio that is still a great work office: sit-stand desk facing the garden, studio desk with mixer and MPC, digital piano, e-drums, guitar wall and sofa. Decoupled inner stud walls on resilient isolation mounts (about 14 in total wall build-up per side), a floated floor on isolation pads, an isolated ceiling on spring hangers, laminated double glazing with an air gap, and quiet decoupled HVAC with lined ducts and silencers. Target STC 60+ (about 60-65 dB isolation) and NC-20 inside. 528 SF gross, about 426 SF net inside the inner shell (21 ft 8 in x 19 ft 8 in)."),
]
FLOORS = {"flagstone":"Flagstone (open-air)","honey":"Wide-plank honey oak","herring":"Oak herringbone","stonetile":"Large-format limestone tiles","stone":"Honed limestone","blackstone":"Honed black stone",
          "tatami":"Tatami (8 mats)","aspen":"Aspen duckboard","concrete":"Sealed concrete"}
FIN = {
 "101":"Large stone tiles; lime plaster; white handleless cabinets; black stone counters; green zellige backsplash; marble island; honey-oak open shelves; stainless range; glass chimney hood; white apron sink; brass faucet",
 "102":"Oak herringbone; lime plaster; exposed fir beams; cedar ceiling; honey-oak table for eight; paper lantern",
 "103":"Oak herringbone; lime plaster; exposed fir beams; cedar ceiling; linen pit upholstery; cognac leather; paper lanterns; shoji screens; art wall",
 "104":"Large stone tiles; lime plaster; honey-oak open shelving",
 "105":"Large stone tiles; lime plaster; honey-oak cubbies; stone dog wash",
 "201":"Honey-oak floor; lime plaster; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed",
 "202":"Black stone floor and shower wall; lime plaster; hinoki soaking tub; floating oak vanity, integrated basins; matte black taps; skylight",
 "203":"Honey-oak floor and millwork; lime plaster",
 "204":"Honey-oak floor; lime plaster; black steel sliding glass",
 "205":"Honed limestone; lime plaster; white cabinets",
 "206":"Sealed concrete; painted plaster",
 "207":"Honey-oak floor; calm white lime plaster; oak window seat with linen cushion; oak wardrobe; cube bins; bouldering panel",
 "212":"Honey-oak floor; lime plaster; oak wardrobe",
 "213":"Honey-oak floor; lime plaster",
 "208":"Honed limestone; white tile tub-shower; oak vanities",
 "209":"Honey-oak floor; calm white lime plaster; oak window seat; cube bins; climbing panel",
 "210":"Honed limestone; tiled walk-in shower; oak vanity",
 "211":"Sealed concrete",
 "301":"Flagstone floor; open-air, covered by the wellness-wing roof; cedar soffit",
 "302":"Honey-oak floor; rubber lifting tiles; lime plaster; high wood ceiling; mirror wall; black steel rig; wood rings",
 "303":"Black stone floor and walls; green zellige plunge; teak bench",
 "304":"Cedar walls and ceiling; pale aspen tiered benches, backlit; aspen duckboard floor; electric rock heater",
 "305":"Honed black stone floor, walls and heated bench",
 "306":"Honed limestone; lime plaster; honey-oak lockers",
 "401":"Large stone tiles; rammed-earth feature wall; lime plaster; charred-oak pivot door",
 "402":"Honey-oak floor; oak millwork",
 "403":"Honed limestone; lime plaster; integrated stone basin",
 "404":"Tatami; lime plaster; shoji; walnut tokonoma",
 "405":"Honey-oak floor; painted plaster; two solid-core doors with perimeter + drop seals",
 "406":"Honey-oak floor; lime plaster; black steel sliding glass",
 "407":"Floated honey-oak floor on isolation pads; decoupled inner walls on resilient mounts; isolated ceiling; laminated double glazing; solid-core doors with seals; lined ducts; lime plaster; fabric acoustic panels; acoustic ceiling clouds; sculpted wood ceiling; skylight; layered pendants",
}
rooms = [dict(id=r[0],name=r[1],wing=r[2],x0=r[3],y0=r[4],x1=r[5],y1=r[6],h=r[7],floor=r[8],cond=r[9],notes=r[10],fin=FIN[r[0]],floorName=FLOORS[r[8]]) for r in ROOMS]
for r in rooms:
    r["w"]=r["x1"]-r["x0"]; r["d"]=r["y1"]-r["y0"]; r["area"]=r["w"]*r["d"]
    if r["area"]==int(r["area"]): r["area"]=int(r["area"])
COURTYARD = dict(x0=36,y0=27,x1=72,y1=55)

# Wall features: (orient, const, a, b, kind, extra) orient 'h': y=const, x in [a,b]; 'v': x=const, y in [a,b]
# kinds: open | glass (full-height slider) | fixed (full-height fixed glass) | window(sill,head) | door | slide | front | exdoor
F = [
 # Living pavilion
 ('v',36,55,79,'open'),('v',50,55,79,'open'),
 ('h',55,30,36,'open'),
 ('h',55,36.5,49.5,'glass'),('h',55,50.5,71.5,'glass'),
 ('h',79,28,35,'window',(4.5,8)),('h',79,37,49,'glass'),('h',79,51,71,'fixed'),
 ('v',20,71,74,'door'),('v',20,59,62,'door'),
 ('v',10,59,62,'exdoor'),('v',10,71,77,'window',(3,7)),('h',55,11,17,'window',(3,7)),
 ('v',72,55,59,'open'),
 # Master suite (unchanged sizes, moved 5 ft south)
 ('h',59,73,77,'slide'),('h',83,73,85,'fixed'),('v',86,61,64,'door'),('v',86,71,74.5,'slide'),
 ('h',83,88,97,'window',(2,8)),('v',98,71,82,'window',(2,8)),('v',98,62,67,'window',(6,8)),
 # East gallery + bedrooms
 ('v',72,27.5,54.5,'glass'),('v',72,22.5,26.5,'glass'),('v',72,16,19,'door'),('h',14,73,77,'exdoor'),
 ('v',78,18,21,'door'),('v',78,24.5,27.5,'door'),('v',78,45.75,48.75,'door'),('v',78,52,55,'door'),
 ('v',85,24.5,27.5,'door'),('v',85,31.5,34.5,'door'),('v',85,41,44,'door'),('v',85,45.75,48.75,'door'),
 ('v',88,52,55,'door'),('v',98,50,53,'exdoor'),
 ('v',98,26,34,'window',(2.5,8)),('v',98,39,47,'window',(2.5,8)),
 ('h',14,81,85,'window',(5.5,8)),('h',14,91,95,'exdoor'),
 # South covered walkway + wellness/gym
 ('h',27,36,72,'open'),('v',36,22.5,26.5,'glass'),
 ('h',22,36,42,'slide'),('h',22,56,59,'door'),
 ('h',0,31,47,'glass'),('v',50,12,15,'door'),('h',9,52,54.5,'door'),('h',9,61,63.5,'door'),
 ('v',66,12,15,'door'),('h',0,51,57,'window',(3,6)),('h',0,68,71,'exdoor'),
 # West wing (moved 8 ft east)
 ('v',36,27.5,54.5,'glass'),('v',30,47,54,'open'),('v',30,41.5,44,'door'),('v',30,30,38,'slide'),
 ('v',30,23,26,'door'),('h',22,23,27,'door'),
 ('v',18,49,53,'front'),('h',46,19,23,'door'),
 ('v',18,31,37,'window',(1.2,6)),
 ('h',22,5,9,'window',(3,9)),('v',4,4,18,'window',(2.5,9)),('h',0,7,25,'glass'),
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
CLAD = {"Living Pavilion":"charred","Sleeping Wing":"charred","Wellness + Gym Wing":"charred","Studio + Arrival":"charred"}
CLAD_OVR = {"401":"rammed"}

# Furniture & equipment: (room, label, x0,y0,x1,y1, h, z0, color, shape)
C = dict(oak="#c39a6b",walnut="#6b4a33",marble="#ece8e1",linen="#e6dfd2",olive="#6f7a55",terra="#b0684a",
         black="#2a2a2a",steel="#9aa0a3",cedar="#c08552",stone="#b9b1a3",white="#f3f1ec",rubber="#3a3a3a",
         cushion="#d9cbb5",hinoki="#e2c894",water="#5fa3b5",plant="#5f7a45",slate="#55524c",rug="#cdbfa6")
FURN = [
 # Kitchen
 ('101', "Marble island 10' (seats five)", 23, 64, 33, 68.5, 3, 0, 'mat:marble', 'island'),
 ('101', 'Stools', 24, 62.3, 32, 63.5, 2.5, 0, '#6b4a33', 'stools'),
 ('101', 'White handleless base cabinets', 22.6, 76.4, 35.6, 78.6, 2.85, 0, 'mat:lacq', 'box'),
 ('101', 'Black stone counter', 22.5, 76.3, 35.7, 78.7, 0.15, 2.85, 'mat:blackstone', 'box'),
 ('101', 'Green zellige backsplash', 22.6, 78.45, 35.6, 78.62, 1.5, 3.0, 'mat:zellige', 'box'),
 ('101', 'Green zellige range wall', 22.6, 78.45, 28, 78.62, 4.5, 4.5, 'mat:zellige', 'box'),
 ('101', 'Stainless range 36"', 23.8, 76.15, 26.8, 78.4, 3.02, 0, 'mat:steel', 'range'),
 ('101', 'Glass chimney hood', 23.6, 76.8, 27, 78.4, 0.2, 6.6, '#cfe3e6', 'hood'),
 ('101', 'White apron sink + brass faucet', 30, 76.2, 32.6, 78.4, 0.9, 2.05, '#f6f4ef', 'sink'),
 ('101', 'Open wood shelves', 20.25, 74.6, 21.1, 78.6, 3.2, 4.4, 'mat:honey', 'shelves'),
 ('101', 'Open wood shelves', 20.25, 55.6, 21.1, 58.6, 3.2, 4.4, 'mat:honey', 'shelves'),
 ('101', 'Integrated fridge + ovens (handleless)', 20.4, 63.5, 22.6, 70, 8.5, 0, 'mat:lacq', 'box'),
 ('101', 'Pendants', 24, 65.6, 32, 66.9, 0.7, 7.4, '#efe6d3', 'pendants'),
 # Dining
 # Living
 # Pantry/mud
 ('104', 'Pantry shelving', 10.4, 68, 11.8, 78.6, 7.5, 0, 'mat:honey', 'box'),
 ('104', 'Pantry shelving', 18.2, 72, 19.6, 78.6, 7.5, 0, 'mat:honey', 'box'),
 ('105', 'Cubbies + bench', 10.4, 62.5, 12, 66.6, 7, 0, 'mat:honey', 'box'),
 ('105', 'Dog wash', 16.5, 55.4, 19.6, 58, 2.6, 0, 'mat:stone', 'box'),
 # Master
 ('201', 'Low linen-wrapped bed (king)', 76, 69.4, 82.6, 76, 1.6, 0, 'mat:linen', 'bed'),
 ('201', 'Lime-plaster headwall ledge', 75, 68.4, 83.6, 69.4, 3.4, 0, 'mat:plaster', 'box'),
 ('201', 'Pair of lounge chairs', 74, 78.4, 80.6, 81.2, 2.5, 0, '#b9a27e', 'lounge2'),
 ('201', 'Sheer linen curtains', 73, 82.3, 85, 82.5, 10.3, 0.1, '#f6f1e6', 'curtain'),
 ('201', 'Big fan under wood ceiling', 76.5, 69.5, 82.5, 75.5, 0.6, 9.6, '#6b4a33', 'fan'),
 ('201', 'Cove lighting', 72.3, 59.3, 85.7, 82.7, 0.12, 10.2, '#ffd9a0', 'cove'),
 ('201', 'Rug', 75, 67.2, 84, 78, 0.05, 0, '#cdbfa6', 'box'),
 ('202', 'Deep hinoki soaking tub by the window', 93, 78, 97.4, 82.4, 2.3, 0, '#e2c894', 'tub'),
 ('202', 'Walk-in rain shower', 86.6, 75.4, 92, 82.4, 0.12, 0, 'mat:blackstone', 'box'),
 ('202', 'Black stone shower wall', 86.6, 74.9, 91.2, 75.4, 7.5, 0, 'mat:blackstone', 'box'),
 ('202', 'Floating oak vanity, integrated basins', 95.4, 69.6, 97.4, 76.5, 1.5, 1.4, 'mat:honey', 'vanity'),
 ('202', 'WC', 87, 69.6, 89, 72, 1.4, 0, '#f3f1ec', 'box'),
 ('203', 'Closet millwork', 86.4, 59.4, 88.4, 68.6, 7.5, 0, 'mat:honey', 'box'),
 ('203', 'Closet millwork', 95.6, 59.4, 97.6, 68.6, 7.5, 0, 'mat:honey', 'box'),
 ('203', 'Island', 90.5, 62, 93.5, 66, 3, 0, 'mat:honey', 'box'),
 # East gallery
 # Kids 1
 # Kids 2
 ("210","Walk-in shower",83,14.4,87.6,18.4,0.12,0,"mat:stone","box"),
 ("210","Vanity",78.4,14.6,80,19,2.8,0,"mat:honey","box"),
 ("210","WC",84,21.5,86,23.6,1.4,0,"#f3f1ec","box"),
 ("211","Pump + filter",90,15,96,18,3,0,"mat:steel","box"),
 ("211","Salt chlorine generator cell + controller",92,21,96.5,23.4,4.5,0,"#9aa0a3","box"),
 # Gym
 ("302","Rubber lifting area",30,1,40,11.5,0.06,0,"mat:rubber","box"),
 ("302","Free-standing rig, wood rings + climbing rope",30.8,3,35.8,9,9.5,0,"#2a2a2a","rig"),
 ("302","Pilates Cadillac",40,14,47.5,16.6,6.8,0,"mat:honey","frame"),
 ("302","Pilates reformer",40,18.4,48,20.0,1.3,0,"mat:honey","reformer"),
 ("302","Wood water rower",41,3.4,48.5,5.2,1.7,0,"mat:honey","rower"),
 ("302","Treadmill",41,7.5,47.5,10.6,4.4,0,"#2a2a2a","treadmill"),
 ("302","Kettlebell + dumbbell rack",42.6,20.7,49.4,21.8,3,0,"#2a2a2a","krack"),
 ("302","Bars-and-bands wall",28.3,10.5,29.2,20.5,8,0,"#2a2a2a","bands"),
 ("302","Mirror wall",49.58,1,49.74,11.5,7.5,0.3,"#dfe7ea","mirror"),
 ("302","Storage wall (mats, plyo boxes)",28.3,1,29.7,9.5,8,0,"mat:honey","box"),
 ("302","Plyo boxes",33,18.5,35,20.5,2,0,"mat:honey","box"),
 ("302","Plyo boxes",35.4,19,37,20.6,1.5,0,"mat:honey","box"),
 ("302","Balance boards",30.5,13,33.5,14.4,0.4,0,"#6b4a33","box"),
 # Wellness
 ("303","Built-in cold plunge (green zellige)",60,17,65.4,21.4,0.5,0,"mat:zellige","plunge"),
 ("303","Rain showers",51,18.2,56,21.6,0.12,0,"mat:blackstone","box"),
 ("303","Teak bench",51,10,57,11.4,1.5,0,"#9c6a3c","box"),
 ("304","Tiered aspen benches, backlit",50.4,4.4,57.6,8.6,3,0,"mat:aspen","benches"),
 ("304","Electric rock heater",56.2,0.6,57.6,2.4,2.6,0,"#2f2c29","heater"),
 ("305","Heated black-stone bench",58.4,5.8,65.6,8.6,1.6,0,"mat:blackstone","box"),
 ("306","Lockers + towels",70.6,1,71.6,12,7,0,"mat:honey","box"),
 # Studio
 ('405', 'Gear racks', 18.4, 22.4, 29.6, 24, 7, 0, 'mat:steel', 'box'),
 # Office / music
 ("407","Sit-stand desk facing the garden",11,2.6,17,5,2.4,0,"mat:honey","standdesk"),
 ("407","Studio desk + mixer, monitors, MPC",18.5,2.2,26.5,4.8,2.5,0,"mat:honey","studio"),
 ("407","Digital piano",6,8,7.8,13,2.6,0,"#1f1f1f","piano"),
 ("407","E-drum kit",8,14.5,13,19.5,3.5,0,"#2a2a2a","drums"),
 ("407","Guitar wall",17.4,20.55,21.8,20.75,7.2,3,"#a8743f","guitarwall"),
 ("407","Mic stand",15.5,14,16.3,14.8,5.5,0,"#9aa0a3","box"),
 ("407","PA speakers",5.5,4,7,5.6,5.5,0,"#2a2a2a","box"),
 ("407","PA speakers",5.5,15.4,7,17,5.5,0,"#2a2a2a","box"),
 ("407","Fabric acoustic panels",26.6,2.5,26.8,19.5,4.5,3,"#8d8a72","apanels"),
 ("407","Acoustic ceiling clouds",8,5,24,17,0.3,10.8,"#e8e2d6","clouds"),
 ("407","Sculpted wood ceiling",5.3,1.3,26.7,20.7,0.8,12.4,"mat:honey","ribs"),
 ("407","Layered pendants",12.5,3,15.5,4.6,1.2,7.2,"#efe6d3","layered"),
 ("407","RGB studio light strip",18.5,20.6,26,20.7,0.1,9.2,"#b04de0","rgb"),
 ("407","Sofa",19.5,15.2,26.2,18.2,2.6,0,"#6f7a55","sofa"),
 ("407","Inner isolation wall (east)",26.9,0.6,27.4,21.4,12.6,0,"mat:plaster","box"),
 ("407","Inner isolation wall (north)",9.6,20.9,22.6,21.4,12.6,0,"mat:plaster","box"),
 ("407","Inner isolation wall (west)",4.6,18.6,5.1,21.4,12.6,0,"mat:plaster","box"),
 ("407","Inner isolation wall (west)",4.6,0.6,5.1,3.4,12.6,0,"mat:plaster","box"),
 ("407","Rug",8,6,17,13,0.05,0,"#cdbfa6","box"),
 # Dining (14 x 24)
 ("102","Honey-oak dining table (8)",39,64,47,68,2.5,0,"mat:honey","table"),
 ("102","Chairs",39.5,62.4,46.5,63.6,1.5,0,"#d9cbb5","chairs"),
 ("102","Chairs",39.5,68.4,46.5,69.6,1.5,0,"#d9cbb5","chairs"),
 ("102","Paper lantern",41,64.5,45,67.5,2.4,6.6,"#f4ecdc","lantern"),
 ("102","Shoji screens",49.7,72.5,50.0,78.8,8,0,"#f4ecdc","shoji"),
 # Living (22 x 24) - pit kept at 16 x 12
 ("103","Conversation pit (18\" down)",51.5,61,67.5,73,-1.5,0,"#e6dfd2","pit"),
 ("103","Low modular sofa (pit)",51.8,61.3,67.2,63.6,1.0,-1.5,"mat:linen","sofa"),
 ("103","Low modular sofa (pit)",51.8,70.4,67.2,72.7,1.0,-1.5,"mat:linen","sofa"),
 ("103","Low modular sofa (pit)",51.8,63.6,54.1,70.4,1.0,-1.5,"mat:linen","sofa"),
 ("103","Coffee table",57,65.2,63,68.8,0.8,-1.5,"#6b4a33","box"),
 ("103","Paper lanterns",55.5,64,63.5,70,2.0,7.0,"#f4ecdc","lanterns"),
 ("103","Linear gas fire in plaster plinth",69.4,61,71.4,73,1.6,0,"mat:plaster","fire"),
 ("103","Leather lounge chair",52,74.6,55.2,78,2.6,0,"#8a5a34","lounge"),
 ("103","Wall-mounted art",71.4,64,71.6,71,4.2,3.8,"#c9b48e","art"),
 # East gallery, laundry, linen
 ("204","Low bench",76.8,29.5,77.6,44.5,1.5,0,"mat:honey","box"),
 ("204","Wall-mounted art",77.55,34,77.75,40,3.5,4,"#a7b39a","art"),
 ("205","Washer/dryer",79,56.6,83.2,58.6,3,0,"#f3f1ec","box"),
 ("205","Fold counter",83.6,56.6,87.6,58.6,3,0,"mat:lacq","box"),
 ("206","Air handler + ERV",94,55,97.6,58.6,6,0,"mat:steel","box"),
 ("206","Linen shelves",88.4,49.4,92,51,7,0,"mat:honey","box"),
 # Kids' Room 1 (13 x 12.5)
 ("207","Window-seat reading nook",96.2,39,97.8,45,1.6,0,"mat:honey","seat"),
 ("207","Twin bed",89.5,42,93.1,48.6,1.4,0,"mat:linen","bed"),
 ("207","Desk by the window",94,36.9,97.8,38.5,2.5,0,"mat:honey","table"),
 ("207","Wardrobe",85.3,36.9,87.3,39.6,7,0,"mat:lacq","box"),
 ("207","Low cube shelves + bins",87.6,36.9,91.6,38.2,2.4,0,"mat:honey","cubes"),
 ("207","Beanbag",90,39,92.5,41.5,1.3,0,"#c98f6a","beanbags"),
 ("207","Small bouldering wall + mat",93.5,48.65,97.8,48.95,8,0,"mat:honey","kidwall"),
 # Jack-and-Jill (7 x 15.5)
 ("208","Tub-shower",78.4,30.4,84.6,33,1.8,0,"#f3f1ec","box"),
 ("208","Vanity 1",78.4,35,79.7,39.5,2.8,0,"mat:honey","box"),
 ("208","Vanity 2",83.3,36,84.6,40,2.8,0,"mat:honey","box"),
 ("208","WC",78.4,41.5,80.4,43.5,1.4,0,"#f3f1ec","box"),
 # Kids' Room 2 / Guest (13 x 12.5)
 ("209","Window-seat reading nook",96.2,28,97.8,34,1.6,0,"mat:honey","seat"),
 ("209","Queen bed (guest)",88.5,29.6,93.7,36.3,1.6,0,"mat:linen","bed"),
 ("209","Desk by the window",94,24.4,97.8,26,2.5,0,"mat:honey","table"),
 ("209","Low cube shelves + bins",94.4,35.1,97.8,36.3,2.4,0,"mat:honey","cubes"),
 ("209","Small climbing wall + mat",86,24.25,93.5,24.6,8,0,"mat:honey","kidwall"),
 ("212","Wardrobe",79,27.8,84.6,29.8,7,0,"mat:lacq","box"),
 # Genkan, closets, powder, tatami (west wing moved 8 ft east)
 ("401","Genkan bench",26,53.6,29.6,54.6,1.5,0,"mat:honey","box"),
 ("401","Rammed earth wall",19,54.3,25,54.8,9,0,"mat:rammed","box"),
 ("401","Wall-mounted art",25,46.25,29,46.45,4,3.5,"#b8836a","art"),
 ("402","Coats",18.4,40.4,19.6,45.6,7,0,"mat:honey","box"),
 ("403","Integrated stone vanity",25.5,40.3,28.5,41.3,2.8,0,"mat:stone","box"),
 ("403","WC",24.4,43.6,26.4,45.6,1.4,0,"#f3f1ec","box"),
 ("404","Tokonoma",18.4,32,20,37,1.0,0,"#6b4a33","box"),
 ("404","Low table + zabuton",22.5,32,26.5,36,1.2,0,"#6b4a33","lowtable"),
 ("404","Paper andon lantern",27.5,37.6,28.5,38.6,2.2,0,"#f4ecdc","andon"),
 ("404","Shoji screens",29.55,30,29.75,34.5,8,0,"#f4ecdc","shoji"),
]
furn=[dict(room=f[0],label=f[1],x0=f[2],y0=f[3],x1=f[4],y1=f[5],h=f[6],z0=f[7],color=f[8],shape=f[9]) for f in FURN]

# Roofs: rect + overhang + heights. type flat|butterfly
ROOFS = [
 dict(id="living",x0=10,y0=55,x1=72,y1=79,oh=dict(n=8,s=6,w=4,e=0),type="butterfly",valley=67,hv=12.6,he=14.6,wall=12),
 dict(id="master",x0=72,y0=59,x1=98,y1=83,oh=dict(n=6,s=0,w=0,e=4),type="shed",axis="y",h0=11.6,h1=13.4,holes=[(93,78,97,82)]),
 dict(id="east",x0=72,y0=14,x1=98,y1=59,oh=dict(n=0,s=4,w=6,e=4),type="shed",axis="x",h0=11.8,h1=10.6),
 dict(id="south",x0=28,y0=0,x1=72,y1=27,oh=dict(n=6,s=6,w=0,e=0),type="shed",axis="y",h0=14.0,h1=12.6),
 dict(id="office",x0=4,y0=0,x1=28,y1=22,oh=dict(n=4,s=6,w=4,e=1),type="shed",axis="y",h0=16.0,h1=14.6,holes=[(13,9,19,14)]),
 dict(id="west",x0=18,y0=22,x1=36,y1=55,oh=dict(n=0,s=0,w=5,e=6),type="shed",axis="x",h0=11.8,h1=10.6),
]

# Site & landscape items (plan coords)
SITE = dict(
 lot=dict(x0=-90,y0=-80,x1=170,y1=150),
 courtyard=COURTYARD,
 pool=dict(x0=54,y0=-22,x1=88,y1=-10,label="Saltwater Pool 34' x 12'"),
 pooldeck=dict(x0=48,y0=-28,x1=98,y1=0),
 lane=dict(x0=-32,y0=-16,x1=43,y1=-8,label="Turf Sprint Lane 20 yd + 15' run-out"),
 outdoor_shower=dict(x0=72.5,y0=4,x1=77.5,y1=10,label="Outdoor Shower"),
 veg=dict(x0=-30,y0=64,x1=-6,y1=86,label="Vegetable Garden"),
 bikes=dict(x0=4,y0=62,x1=7.5,y1=72,label="Bike Racks"),
 carport=dict(x0=-44,y0=30,x1=-20,y1=54,label="Carport (2 cars, open)"),
 entrycourt=dict(x0=-20,y0=26,x1=18,y1=55),
 pergola=dict(x0=19,y0=81,x1=37,y1=95,label="Pergola Dining"),
 veranda=dict(x0=36,y0=79,x1=72,y1=87,label="Covered Veranda"),
 firepit=dict(cx=58,cy=99,r=7,label="Round Stone Fire Pit"),
 zen=dict(x0=39,y0=30,x1=52,y1=40,label="Raked Gravel"),
 water=dict(x0=57,y0=31,x1=68,y1=39,label="Planted Water Court"),
 lawn=dict(x0=39,y0=42,x1=69,y1=50),
 shadetree=dict(cx=53,cy=45,r=6),
 maples=[(66.5,47.5),(40.5,46.5),(39,52.3),(62,51.8)],
 lanterns=[(55,40.6),(38.5,41),(69.5,42)],
 cshower=dict(x0=66.5,y0=27.5,x1=71.5,y1=31.5,label="Courtyard Shower"),
 bale=dict(x0=90,y0=-27,x1=97,y1=-19,h=9,label="Bale Pavilion"),
 pullup=dict(x0=45,y0=-7,x1=48.5,y1=-5,label="Outdoor Pull-Up Station"),
 orchard=[(-56,70),(-46,70),(-56,80),(-46,80),(-56,90),(-46,90),(-36,94)],
 walkway=dict(x0=-20,y0=48,x1=13,y1=54,h=9,label="Covered Walkway"),
 frontgarden=[(-16,38,-2,46),(-16,57,2,62)],
 bathgarden=dict(x0=98,y0=69,x1=106,y1=83,label="Bath Garden"),
 meadow_label=(120,-40),
 drive=[(-90,10),(-60,18),(-44,30)],
 climb=dict(x0=-22,y0=0,x1=-4,y1=18,oh=5,h=17,wall=12,label="Climbing Pavilion"),
 util=dict(x0=100,y0=-6,x1=136,y1=24,gate=(112,124),label="Utility Yard"),
 tanks=[(106,18,5),(117,18,5)],
 watertreat=dict(x0=124,y0=13,x1=135,y1=23,label="Water Treatment"),
 atu=dict(x0=103,y0=-3,x1=115,y1=3,label="Septic + Aerobic Treatment"),
 power=dict(x0=125,y0=-4,x1=135,y1=5,label="Generator + Battery Pad"),
 condensers=[(119,1),(119,5),(119,9)],
 drainfield=dict(x0=30,y0=-74,x1=90,y1=-52,label="Drain Field"),
 well=dict(cx=140,cy=95,label="Well"),
 service=[(-62,2),(-62,-38),(118,-38),(118,-6)],
)

COVERED = [dict(id="C1",name="Climbing Pavilion",x0=-22,y0=0,x1=-4,y1=18,w=18,d=18,area=324,
  notes="Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack.")]

OUTDOOR_FIN = [
 ("Exterior","Flagstone terraces","Black charred-timber (shou sugi ban) cladding; standing-seam metal roofs, low mono-pitch and butterfly; rammed-earth entry wall; solid charred-oak pivot door"),
 ("Courtyard","Flagstone, lawn, raked gravel","Big shade tree; Japanese maples; planted water court; stone lanterns; stone water basin; curved teak bench; lit path lights; courtyard shower"),
 ("Saltwater pool + bale","Sealed flagstone deck (salt-resistant penetrating sealer)","Saltwater pool with salt chlorine generator (cell replaced about every 3-5 years); marine-grade 316 stainless fittings, ladders and drains; green stone pool tile; teak and linen loungers; bale pavilion with honey-oak platform and standing-seam roof"),
 ("Landscape","Meadow, gravel","Wildflower meadow; vegetable garden in cedar beds; fruit trees; round stone fire pit; front garden beds"),
 ("Arrival","Gravel drive, flagstone","Modern black steel carport; covered walkway to the front door"),
 ("Climbing Pavilion","Poured-rubber soft-fall + crash pads","Fir frame; standing-seam roof raised to 17 ft (about 4 ft clear over the wall); full 16 ft wide x 12 ft high climbing wall"),
 ("Utility Yard","Compacted gravel + concrete equipment pads","7 ft charred-timber screen with service gate; 2 rainwater tanks; water treatment lean-to; septic/ATU lids; generator + battery pad; HVAC condensers"),
 ("Active zone","Turf","Sprint lane; outdoor pull-up station in black steel"),
]

def total_conditioned():
    t=sum(r['area'] for r in rooms if r['cond']); return int(t) if t==int(t) else t

if __name__=="__main__":
    t=total_conditioned()
    print("Conditioned SF:",t, "m2:",round(t*SF2M2,1))
    for w in ["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"]:
        print(w, sum(r['area'] for r in rooms if r['wing']==w and r['cond']))
    data=dict(rooms=rooms,walls=WALLS,furn=furn,roofs=ROOFS,site=SITE,clad=CLAD,cladOvr=CLAD_OVR,
              total=t,courtyard=COURTYARD,covered=COVERED)
    json.dump(data,open("plan.json","w"),indent=1)
    print("walls",len(WALLS))
