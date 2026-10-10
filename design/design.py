"""Weberman Residence — single source of truth for plan, 3D data and drawings.
Units: feet. Plan coords: x = east, y = north. Origin = SW corner of the office."""
import json, math
FT2M = 0.3048
SF2M2 = 0.09290304

# id, name, wing, x0,y0,x1,y1, ceiling h, floor, conditioned, notes
ROOMS = [
 ("101","Kitchen","Living Pavilion",10,60,26,84,12,"stonetile",True,
  "Bright, sleek kitchen: white handleless cabinets, black stone counters and a green zellige backsplash. A 10-ft marble island seats five on stools. Stainless range under a glass chimney hood, white apron sink with a brass faucet, open honey-oak shelves."),
 ("102","Dining","Living Pavilion",26,60,44,84,12,"herring",True,
  "Seats ten under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north."),
 ("103","Living + Conversation Pit","Living Pavilion",44,72-12,72,84,12,"herring",True,
  "The heart of the house, fully open to the garden: 28 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. 16-ft sunken conversation pit with a low modular sofa, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace)."),
 ("104","Walk-in Pantry","Living Pavilion",0,72,10,84,10,"stonetile",True,
  "Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter."),
 ("105","Mudroom + Gear","Living Pavilion",0,60,10,72,10,"stonetile",True,
  "Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash."),
 ("201","Master Bedroom","Sleeping Wing",72,64,86,88,11,"honey",True,
  "Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window."),
 ("202","Master Bath","Sleeping Wing",86,74,98,88,10,"blackstone",True,
  "Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden."),
 ("203","Master Closet","Sleeping Wing",86,64,98,74,10,"honey",True,
  "Walk-in closet with honey-oak millwork and a center island."),
 ("204","East Engawa Gallery","Sleeping Wing",72,14,78,64,10,"honey",True,
  "Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing."),
 ("205","Laundry","Sleeping Wing",78,54,88,64,10,"stone",True,
  "Next to the bedrooms. Stacked W/D pair, folding counter, drying rack."),
 ("206","Linen + Mechanical","Sleeping Wing",88,54,98,64,10,"concrete",True,
  "Linen storage, heat pump air handler, ERV, water heating."),
 ("207","Kids' Room 1","Sleeping Wing",78,43,98,54,10,"honey",True,
  "Calm white room with a window-seat reading nook on the east window, a desk by the window, low cube shelves with bins and beanbags, and a small bouldering wall with a crash mat."),
 ("208","Jack-and-Jill Bath","Sleeping Wing",78,35,98,43,10,"stone",True,
  "Shared by the kids' rooms: two vanities, WC and a tiled tub-shower in the middle room, lockable from each side."),
 ("209","Kids' Room 2 / Guest","Sleeping Wing",78,24,98,35,10,"honey",True,
  "Fits a queen bed, so it doubles as the guest room. Window-seat nook, desk by the window, cube shelves and a beanbag, and a small climbing wall feature. The Guest / Pool Bath is just across the engawa."),
 ("210","Guest / Pool Bath","Sleeping Wing",78,14,88,24,10,"stone",True,
  "Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests."),
 ("211","Pool Equipment","Sleeping Wing",88,14,98,24,9,"concrete",False,
  "Unconditioned. Pool pump and filter, outdoor storage, exterior access only."),
 ("301","South Engawa Gallery","Wellness + Gym Wing",28,22,72,27,10,"honey",True,
  "Glazed engawa that closes the courtyard ring. Lets you reach the gym and wellness rooms in winter without going outside."),
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
 ("401","Entry Genkan","Studio + Arrival",10,48,22,60,10,"stonetile",True,
  "Stone genkan with a step-up to the oak floor, a rammed-earth feature wall and one large artwork. Solid charred-oak pivot door (no glass entry). The first view lines up across the engawa into the courtyard."),
 ("402","Coat + Shoe Closet","Studio + Arrival",10,41,16,48,10,"honey",True,"Coat and shoe storage."),
 ("403","Powder Room","Studio + Arrival",16,41,22,48,10,"stone",True,
  "Powder room by the entry: integrated stone basin, lime-plaster walls."),
 ("404","Tatami Room","Studio + Arrival",10,28,22,41,9,"tatami",True,
  "8-mat tatami room (loved) with a tokonoma alcove, low table, zabuton and a paper andon lantern. Shoji slide open to the engawa and courtyard; low garden window. Used for tea, meditation, or as an overflow guest room."),
 ("405","Instrument + AV Closet","Studio + Arrival",10,22,22,28,10,"honey",True,
  "Cases, cables, rack gear and the network closet. Opens to the office."),
 ("406","West Engawa Gallery","Studio + Arrival",22,22,28,60,10,"honey",True,
  "Glazed engawa from the entry to the office and great room."),
 ("407","Office / Music Loft","Studio + Arrival",4,0,28,22,14,"honey",True,
  "Loft-like room with a 14-ft sculpted wood ceiling, acoustic ceiling clouds and a skylight. Sit-stand desk facing the garden glass, studio desk with the mixer, monitors and MPC, digital piano, e-drum kit, a guitar wall, mic, PA speakers, fabric acoustic panels on lime-plaster walls, layered pendants and an RGB light strip. Double-stud walls keep it acoustically separate from the bedrooms."),
]
FLOORS = {"honey":"Wide-plank honey oak","herring":"Oak herringbone","stonetile":"Large-format limestone tiles","stone":"Honed limestone","blackstone":"Honed black stone",
          "tatami":"Tatami (8 mats)","aspen":"Aspen duckboard","concrete":"Sealed concrete"}
FIN = {
 "101":"Large stone tiles; lime plaster; white handleless cabinets; black stone counters; green zellige backsplash; marble island; honey-oak open shelves; stainless range; glass chimney hood; white apron sink; brass faucet",
 "102":"Oak herringbone; lime plaster; exposed fir beams; cedar ceiling; honey-oak table; paper lantern",
 "103":"Oak herringbone; lime plaster; exposed fir beams; cedar ceiling; linen pit upholstery; cognac leather; paper lanterns; shoji screens; art wall",
 "104":"Large stone tiles; lime plaster; honey-oak open shelving",
 "105":"Large stone tiles; lime plaster; honey-oak cubbies; stone dog wash",
 "201":"Honey-oak floor; lime plaster; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed",
 "202":"Black stone floor and shower wall; lime plaster; hinoki soaking tub; floating oak vanity, integrated basins; matte black taps; skylight",
 "203":"Honey-oak floor and millwork; lime plaster",
 "204":"Honey-oak floor; lime plaster; black steel sliding glass",
 "205":"Honed limestone; lime plaster; white cabinets",
 "206":"Sealed concrete; painted plaster",
 "207":"Honey-oak floor; calm white lime plaster; oak window seat with linen cushion; cube bins; bouldering panel",
 "208":"Honed limestone; white tile tub-shower; oak vanities",
 "209":"Honey-oak floor; calm white lime plaster; oak window seat; cube bins; climbing panel",
 "210":"Honed limestone; tiled walk-in shower; oak vanity",
 "211":"Sealed concrete",
 "301":"Honey-oak floor; lime plaster; black steel sliding glass",
 "302":"Honey-oak floor; rubber lifting tiles; lime plaster; high wood ceiling; mirror wall; black steel rig; wood rings",
 "303":"Black stone floor and walls; green zellige plunge; teak bench",
 "304":"Cedar walls and ceiling; pale aspen tiered benches, backlit; aspen duckboard floor; electric rock heater",
 "305":"Honed black stone floor, walls and heated bench",
 "306":"Honed limestone; lime plaster; honey-oak lockers",
 "401":"Large stone tiles; rammed-earth feature wall; lime plaster; charred-oak pivot door",
 "402":"Honey-oak floor; oak millwork",
 "403":"Honed limestone; lime plaster; integrated stone basin",
 "404":"Tatami; lime plaster; shoji; walnut tokonoma",
 "405":"Honey-oak floor; painted plaster",
 "406":"Honey-oak floor; lime plaster; black steel sliding glass",
 "407":"Honey-oak floor; lime plaster; fabric acoustic panels; acoustic ceiling clouds; sculpted wood ceiling; skylight; layered pendants",
}
rooms = [dict(id=r[0],name=r[1],wing=r[2],x0=r[3],y0=r[4],x1=r[5],y1=r[6],h=r[7],floor=r[8],cond=r[9],notes=r[10],fin=FIN[r[0]],floorName=FLOORS[r[8]]) for r in ROOMS]
for r in rooms:
    r["w"]=r["x1"]-r["x0"]; r["d"]=r["y1"]-r["y0"]; r["area"]=r["w"]*r["d"]
COURTYARD = dict(x0=28,y0=27,x1=72,y1=60)

# Wall features: (orient, const, a, b, kind, extra) orient 'h': y=const, x in [a,b]; 'v': x=const, y in [a,b]
# kinds: open | glass (full-height slider) | fixed (full-height fixed glass) | window(sill,head) | door | slide | front | exdoor
F = [
 # Living pavilion
 ('v',26,60,84,'open'),('v',44,60,84,'open'),
 ('h',60,22,26,'open'),('h',60,26,28,'open'),
 ('h',60,28.5,43.5,'glass'),('h',60,44.5,71.5,'glass'),
 ('h',84,18,25,'window',(4.5,8)),('h',84,27,43,'glass'),('h',84,45,71,'fixed'),
 ('v',10,76,79,'door'),('v',10,64,67,'door'),
 ('v',0,64,67,'exdoor'),('v',0,76,82,'window',(3,7)),('h',60,2,8,'window',(3,7)),
 ('v',72,60,64,'open'),
 # Master suite
 ('h',64,73,77,'slide'),('h',88,73,85,'fixed'),('v',86,66,69,'door'),('v',86,76,79.5,'slide'),
 ('h',88,88,97,'window',(2,8)),('v',98,76,87,'window',(2,8)),('v',98,67,72,'window',(6,8)),
 # East gallery + bedrooms
 ('v',72,27.5,59.5,'glass'),('v',72,22,27,'open'),('v',72,16,19,'door'),('h',14,73,77,'exdoor'),
 ('v',78,58,61,'door'),('v',88,57,60,'door'),('v',98,56,59,'exdoor'),
 ('v',78,50,53,'door'),('v',78,27,30,'door'),('v',78,18,21,'door'),
 ('h',43,81,84,'door'),('h',35,81,84,'door'),
 ('v',98,45,52,'window',(2.5,8)),('v',98,26,33,'window',(2.5,8)),('v',98,37,41,'window',(5.5,8)),
 ('h',14,81,85,'window',(5.5,8)),('h',14,91,95,'exdoor'),
 # South gallery + wellness/gym
 ('h',27,28.5,71.5,'glass'),('v',28,22,27,'open'),
 ('h',22,36,42,'slide'),('h',22,56,59,'door'),
 ('h',0,31,47,'glass'),('v',50,12,15,'door'),('h',9,52,54.5,'door'),('h',9,61,63.5,'door'),
 ('v',66,12,15,'door'),('h',0,51,57,'window',(3,6)),('h',0,68,71,'exdoor'),
 # West wing
 ('v',28,27.5,59.5,'glass'),('v',22,50,58,'open'),('v',22,43,45.5,'door'),('v',22,30,39,'slide'),
 ('v',22,23,26,'door'),('h',22,23,27,'door'),('h',22,14,18,'door'),
 ('v',10,52,56,'front'),('h',48,11,15,'door'),
 ('v',10,31,38,'window',(1.2,6)),
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
 ("101","Marble island 10' (seats five)",13,69,23,73.5,3,0,"mat:marble","island"),
 ("101","Stools",14,67.3,22,68.5,2.5,0,"#6b4a33","stools"),
 ("101","White handleless base cabinets",12.6,81.4,25.6,83.6,2.85,0,"mat:lacq","box"),
 ("101","Black stone counter",12.5,81.3,25.7,83.7,0.15,2.85,"mat:blackstone","box"),
 ("101","Green zellige backsplash",12.6,83.45,25.6,83.62,1.5,3.0,"mat:zellige","box"),
 ("101","Green zellige range wall",12.6,83.45,18,83.62,4.5,4.5,"mat:zellige","box"),
 ("101","Stainless range 36\"",13.8,81.15,16.8,83.4,3.02,0,"mat:steel","range"),
 ("101","Glass chimney hood",13.6,81.8,17,83.4,0.2,6.6,"#cfe3e6","hood"),
 ("101","White apron sink + brass faucet",20,81.2,22.6,83.4,0.9,2.05,"#f6f4ef","sink"),
 ("101","Open wood shelves",10.25,79.6,11.1,83.6,3.2,4.4,"mat:honey","shelves"),
 ("101","Open wood shelves",10.25,60.6,11.1,63.6,3.2,4.4,"mat:honey","shelves"),
 ("101","Integrated fridge + ovens (handleless)",10.4,68.5,12.6,75,8.5,0,"mat:lacq","box"),
 ("101","Pendants",14,70.6,22,71.9,0.7,7.4,"#efe6d3","pendants"),
 # Dining
 ("102","Honey-oak dining table (10)",30,69,40,73,2.5,0,"mat:honey","table"),
 ("102","Chairs",30.5,67.4,39.5,68.6,1.5,0,"#d9cbb5","chairs"),
 ("102","Chairs",30.5,73.4,39.5,74.6,1.5,0,"#d9cbb5","chairs"),
 ("102","Paper lantern",33,69.5,37,72.5,2.4,6.6,"#f4ecdc","lantern"),
 ("102","Shoji screens",43.7,77.5,44.0,83.8,8,0,"#f4ecdc","shoji"),
 # Living
 ("103","Conversation pit (18\" down)",49,66,65,78,-1.5,0,"#e6dfd2","pit"),
 ("103","Low modular sofa (pit)",49.3,66.3,64.7,68.6,1.0,-1.5,"mat:linen","sofa"),
 ("103","Low modular sofa (pit)",49.3,75.4,64.7,77.7,1.0,-1.5,"mat:linen","sofa"),
 ("103","Low modular sofa (pit)",49.3,68.6,51.6,75.4,1.0,-1.5,"mat:linen","sofa"),
 ("103","Coffee table",54,70.2,60,73.8,0.8,-1.5,"#6b4a33","box"),
 ("103","Paper lanterns",53,69,61,75,2.0,7.0,"#f4ecdc","lanterns"),
 ("103","Linear gas fire in plaster plinth",67,66,69,78,1.6,0,"mat:plaster","fire"),
 ("103","Leather lounge chair",45.4,78.6,48.6,82,2.6,0,"#8a5a34","lounge"),
 ("103","Wall-mounted art",71.4,69,71.6,76,4.2,3.8,"#c9b48e","art"),
 # Pantry/mud
 ("104","Pantry shelving",0.4,73,1.8,83.6,7.5,0,"mat:honey","box"),
 ("104","Pantry shelving",8.2,77,9.6,83.6,7.5,0,"mat:honey","box"),
 ("105","Cubbies + bench",0.4,67.5,2,71.6,7,0,"mat:honey","box"),
 ("105","Dog wash",6.5,60.4,9.6,63,2.6,0,"mat:stone","box"),
 # Master
 ("201","Low linen-wrapped bed (king)",76,74.4,82.6,81,1.6,0,"mat:linen","bed"),
 ("201","Lime-plaster headwall ledge",75,73.4,83.6,74.4,3.4,0,"mat:plaster","box"),
 ("201","Pair of lounge chairs",74,83.4,80.6,86.2,2.5,0,"#b9a27e","lounge2"),
 ("201","Sheer linen curtains",73,87.3,85,87.5,10.3,0.1,"#f6f1e6","curtain"),
 ("201","Big fan under wood ceiling",76.5,74.5,82.5,80.5,0.6,9.6,"#6b4a33","fan"),
 ("201","Cove lighting",72.3,64.3,85.7,87.7,0.12,10.2,"#ffd9a0","cove"),
 ("201","Rug",75,72.2,84,83,0.05,0,"#cdbfa6","box"),
 ("202","Deep hinoki soaking tub by the window",93,83,97.4,87.4,2.3,0,"#e2c894","tub"),
 ("202","Walk-in rain shower",86.6,80.4,92,87.4,0.12,0,"mat:blackstone","box"),
 ("202","Black stone shower wall",86.6,79.9,91.2,80.4,7.5,0,"mat:blackstone","box"),
 ("202","Floating oak vanity, integrated basins",95.4,74.6,97.4,81.5,1.5,1.4,"mat:honey","vanity"),
 ("202","WC",87,74.6,89,77,1.4,0,"#f3f1ec","box"),
 ("203","Closet millwork",86.4,64.4,88.4,73.6,7.5,0,"mat:honey","box"),
 ("203","Closet millwork",95.6,64.4,97.6,73.6,7.5,0,"mat:honey","box"),
 ("203","Island",90.5,67,93.5,71,3,0,"mat:honey","box"),
 # East gallery
 ("204","Low bench",76.8,30,77.6,58,1.5,0,"mat:honey","box"),
 ("204","Wall-mounted art",77.55,40,77.75,46,3.5,4,"#a7b39a","art"),
 ("205","Washer/dryer",78.4,61.2,82.6,63.6,3,0,"#f3f1ec","box"),
 ("205","Fold counter",83,61.6,87.6,63.6,3,0,"mat:lacq","box"),
 ("206","Air handler + ERV",94,59,97.6,63.6,6,0,"mat:steel","box"),
 ("206","Linen shelves",88.4,54.4,92,56,7,0,"mat:honey","box"),
 # Kids 1
 ("207","Window-seat reading nook",96.2,45,97.8,52,1.6,0,"mat:honey","seat"),
 ("207","Twin bed",83,47,86.6,53.6,1.4,0,"mat:linen","bed"),
 ("207","Desk by the window",92,43.4,96,45,2.5,0,"mat:honey","table"),
 ("207","Low cube shelves + bins",85.5,43.3,91.5,44.6,2.4,0,"mat:honey","cubes"),
 ("207","Beanbags",87,45.6,91,48,1.3,0,"#c98f6a","beanbags"),
 ("207","Small bouldering wall + mat",78.25,43.4,78.6,49.4,8,0,"mat:honey","kidwall"),
 ("207","Closet",89,53,95,53.7,7,0,"mat:lacq","box"),
 ("208","Vanity 1",81,41.4,86,42.7,2.8,0,"mat:honey","box"),
 ("208","Vanity 2",81,35.3,86,36.6,2.8,0,"mat:honey","box"),
 ("208","Tub-shower",91.5,35.4,97.6,38.5,1.8,0,"#f3f1ec","box"),
 ("208","WC",95,40,97,42.6,1.4,0,"#f3f1ec","box"),
 # Kids 2
 ("209","Window-seat reading nook",96.2,26,97.8,33,1.6,0,"mat:honey","seat"),
 ("209","Queen bed (guest)",85.2,24.3,90.4,31,1.6,0,"mat:linen","bed"),
 ("209","Desk by the window",92,33.4,96,34.9,2.5,0,"mat:honey","table"),
 ("209","Low cube shelves + bins",78.3,31,79.6,34.7,2.4,0,"mat:honey","cubes"),
 ("209","Beanbag",81,32,83,34,1.3,0,"#8ea06a","beanbags"),
 ("209","Small climbing wall + mat",79,24.25,84.4,24.6,8,0,"mat:honey","kidwall"),
 ("210","Walk-in shower",83,14.4,87.6,18.4,0.12,0,"mat:stone","box"),
 ("210","Vanity",78.4,14.6,80,19,2.8,0,"mat:honey","box"),
 ("210","WC",84,21.5,86,23.6,1.4,0,"#f3f1ec","box"),
 ("211","Pump + filter",90,15,96,18,3,0,"mat:steel","box"),
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
 ("401","Genkan bench",18,58.6,21.6,59.6,1.5,0,"mat:honey","box"),
 ("401","Rammed earth wall",10.5,48.6,11.2,51.6,9,0,"mat:rammed","box"),
 ("401","Wall-mounted art",21.55,50,21.75,56,4,3.5,"#b8836a","art"),
 ("402","Coats",10.4,41.4,11.6,47.6,7,0,"mat:honey","box"),
 ("403","Integrated stone vanity",20.6,44.5,21.6,47.6,2.8,0,"mat:stone","box"),
 ("403","WC",16.4,41.4,18.6,43.4,1.4,0,"#f3f1ec","box"),
 ("404","Tokonoma",10.4,33,12,38,1.0,0,"#6b4a33","box"),
 ("404","Low table + zabuton",14.5,32.5,18.5,36.5,1.2,0,"#6b4a33","lowtable"),
 ("404","Paper andon lantern",19.5,38.6,20.5,39.6,2.2,0,"#f4ecdc","andon"),
 ("404","Shoji screens",21.55,30,21.75,34.5,8,0,"#f4ecdc","shoji"),
 ("405","Gear racks",10.4,22.4,21.6,24,7,0,"mat:steel","box"),
 # Office / music
 ("407","Sit-stand desk facing the garden",11,2.6,17,5,2.4,0,"mat:honey","standdesk"),
 ("407","Studio desk + mixer, monitors, MPC",18.5,2.2,26.5,4.8,2.5,0,"mat:honey","studio"),
 ("407","Digital piano",5,8,6.8,13,2.6,0,"#1f1f1f","piano"),
 ("407","E-drum kit",7,15,12,20,3.5,0,"#2a2a2a","drums"),
 ("407","Guitar wall",18.4,21.55,22.8,21.75,7.2,3,"#a8743f","guitarwall"),
 ("407","Mic stand",15.5,14,16.3,14.8,5.5,0,"#9aa0a3","box"),
 ("407","PA speakers",4.5,4,6,5.6,5.5,0,"#2a2a2a","box"),
 ("407","PA speakers",4.5,16.4,6,18,5.5,0,"#2a2a2a","box"),
 ("407","Fabric acoustic panels",27.6,2,27.8,20,4.5,3,"#8d8a72","apanels"),
 ("407","Acoustic ceiling clouds",8,5,24,18,0.3,11.2,"#e8e2d6","clouds"),
 ("407","Sculpted wood ceiling",4.3,0.3,27.7,21.7,0.8,13.1,"mat:honey","ribs"),
 ("407","Layered pendants",12.5,3,15.5,4.6,1.2,7.2,"#efe6d3","layered"),
 ("407","RGB studio light strip",18.5,21.6,26.5,21.7,0.1,9.2,"#b04de0","rgb"),
 ("407","Sofa",20,15.5,27.4,18.5,2.6,0,"#6f7a55","sofa"),
 ("407","Rug",8,6,17,13,0.05,0,"#cdbfa6","box"),
]
furn=[dict(room=f[0],label=f[1],x0=f[2],y0=f[3],x1=f[4],y1=f[5],h=f[6],z0=f[7],color=f[8],shape=f[9]) for f in FURN]

# Roofs: rect + overhang + heights. type flat|butterfly
ROOFS = [
 dict(id="living",x0=0,y0=60,x1=72,y1=84,oh=dict(n=8,s=6,w=4,e=0),type="butterfly",valley=72,hv=12.6,he=14.6,wall=12),
 dict(id="master",x0=72,y0=64,x1=98,y1=88,oh=dict(n=6,s=0,w=0,e=4),type="shed",axis="y",h0=11.6,h1=13.4,holes=[(93,83,97,87)]),
 dict(id="east",x0=72,y0=14,x1=98,y1=64,oh=dict(n=0,s=4,w=6,e=4),type="shed",axis="x",h0=11.8,h1=10.6),
 dict(id="south",x0=28,y0=0,x1=72,y1=27,oh=dict(n=6,s=6,w=0,e=0),type="shed",axis="y",h0=14.0,h1=12.6),
 dict(id="office",x0=4,y0=0,x1=28,y1=22,oh=dict(n=4,s=6,w=4,e=1),type="shed",axis="y",h0=16.0,h1=14.6,holes=[(13,9,19,14)]),
 dict(id="west",x0=10,y0=22,x1=28,y1=60,oh=dict(n=0,s=0,w=5,e=6),type="shed",axis="x",h0=11.8,h1=10.6),
]

# Site & landscape items (plan coords)
SITE = dict(
 lot=dict(x0=-90,y0=-80,x1=170,y1=150),
 courtyard=COURTYARD,
 pool=dict(x0=54,y0=-22,x1=88,y1=-10,label="Pool 34' x 12'"),
 pooldeck=dict(x0=48,y0=-28,x1=98,y1=0),
 lane=dict(x0=-32,y0=-16,x1=43,y1=-8,label="Turf Sprint Lane 20 yd + 15' run-out"),
 outdoor_shower=dict(x0=72.5,y0=4,x1=77.5,y1=10,label="Outdoor Shower"),
 veg=dict(x0=-36,y0=66,x1=-12,y1=88,label="Vegetable Garden"),
 bikes=dict(x0=-5,y0=61,x1=-1.5,y1=71,label="Bike Racks"),
 carport=dict(x0=-44,y0=30,x1=-20,y1=54,label="Carport (2 cars, open)"),
 entrycourt=dict(x0=-20,y0=26,x1=10,y1=60),
 pergola=dict(x0=8,y0=86,x1=26,y1=100,label="Pergola Dining"),
 veranda=dict(x0=26,y0=84,x1=72,y1=92,label="Covered Veranda"),
 firepit=dict(cx=58,cy=104,r=7,label="Round Stone Fire Pit"),
 zen=dict(x0=34,y0=33,x1=50,y1=44,label="Raked Gravel"),
 water=dict(x0=55,y0=35,x1=66,y1=44,label="Planted Water Court"),
 lawn=dict(x0=34,y0=46,x1=66,y1=54),
 shadetree=dict(cx=46,cy=48,r=8),
 maples=[(62,50),(37,50.5),(67.5,33),(58.5,51.5)],
 lanterns=[(53.5,45),(33.5,45),(66.5,46.5)],
 cshower=dict(x0=66.5,y0=27.5,x1=71.5,y1=31.5,label="Courtyard Shower"),
 bale=dict(x0=90,y0=-27,x1=97,y1=-19,h=9,label="Bale Pavilion"),
 pullup=dict(x0=45,y0=-7,x1=48.5,y1=-5,label="Outdoor Pull-Up Station"),
 orchard=[(-62,72),(-52,72),(-62,82),(-52,82),(-62,92),(-52,92),(-42,96)],
 walkway=dict(x0=-20,y0=51,x1=5,y1=57,h=9,label="Covered Walkway"),
 frontgarden=[(-16,40,-4,48),(-16,59,4,64)],
 bathgarden=dict(x0=98,y0=74,x1=106,y1=88,label="Bath Garden"),
 meadow_label=(120,-40),
 drive=[(-90,10),(-60,18),(-44,30)],
 climb=dict(x0=-22,y0=0,x1=-4,y1=18,oh=5,h=13,label="Climbing Pavilion"),
)

COVERED = [dict(id="C1",name="Climbing Pavilion",x0=-22,y0=0,x1=-4,y1=18,w=18,d=18,area=324,
  notes="Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack.")]

OUTDOOR_FIN = [
 ("Exterior","Flagstone terraces","Black charred-timber (shou sugi ban) cladding; standing-seam metal roofs, low mono-pitch and butterfly; rammed-earth entry wall; solid charred-oak pivot door"),
 ("Courtyard","Flagstone, lawn, raked gravel","Big shade tree; Japanese maples; planted water court; stone lanterns; stone water basin; curved teak bench; lit path lights; courtyard shower"),
 ("Pool + bale","Flagstone deck","Green stone pool tile; teak and linen loungers; bale pavilion with honey-oak platform and standing-seam roof"),
 ("Landscape","Meadow, gravel","Wildflower meadow; vegetable garden in cedar beds; fruit trees; round stone fire pit; front garden beds"),
 ("Arrival","Gravel drive, flagstone","Modern black steel carport; covered walkway to the front door"),
 ("Climbing Pavilion","Poured-rubber soft-fall","Fir frame; standing-seam roof; 16 x 12 ft bouldering wall"),
 ("Active zone","Turf","Sprint lane; outdoor pull-up station in black steel"),
]

def total_conditioned():
    return sum(r['area'] for r in rooms if r['cond'])

if __name__=="__main__":
    t=total_conditioned()
    print("Conditioned SF:",t, "m2:",round(t*SF2M2,1))
    for w in ["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"]:
        print(w, sum(r['area'] for r in rooms if r['wing']==w and r['cond']))
    data=dict(rooms=rooms,walls=WALLS,furn=furn,roofs=ROOFS,site=SITE,clad=CLAD,cladOvr=CLAD_OVR,
              total=t,courtyard=COURTYARD,covered=COVERED)
    json.dump(data,open("plan.json","w"),indent=1)
    print("walls",len(WALLS))
