"""Weberman Residence — single source of truth for plan, 3D data and drawings.
Units: feet. Plan coords: x = east, y = north. Origin = SW corner of the office."""
import json, math
FT2M = 0.3048
SF2M2 = 0.09290304

# id, name, wing, x0,y0,x1,y1, ceiling h, floor, conditioned, notes
ROOMS = [
 ("101","Kitchen","Living Pavilion",10,60,26,84,12,"oak",True,
  "Bright, sleek kitchen: 10' honed Calacatta marble island with seating for four, flat-panel rift oak cabinetry, open oak shelving on the north wall under a ribbon window, integrated appliances."),
 ("102","Dining","Living Pavilion",26,60,44,84,12,"oak",True,
  "Seats ten under exposed fir beams. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north."),
 ("103","Living + Conversation Pit","Living Pavilion",44,72-12,72,84,12,"oak",True,
  "The heart of the house. 16-ft sunken conversation pit (18\" down), big fixed mountain-view window to the north, 28 ft of pocketing glass to the courtyard. No stone fireplace: a slim linear gas fire set in a plaster plinth."),
 ("104","Walk-in Pantry","Living Pavilion",0,72,10,84,10,"stone",True,
  "Floor-to-ceiling open shelving, second fridge, appliance counter."),
 ("105","Mudroom + Gear","Living Pavilion",0,60,10,72,10,"stone",True,
  "Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash."),
 ("201","Master Bedroom","Sleeping Wing",72,64,86,88,11,"oak",True,
  "Pushed north for the best mountain view, full-height glass on the north. Private, at the end of the east engawa."),
 ("202","Master Bath","Sleeping Wing",86,74,98,88,10,"stone",True,
  "Japanese hinoki soaking tub at the corner window, 8-ft walk-in rain shower, double floating vanity, WC room. Opens to a walled bath garden."),
 ("203","Master Closet","Sleeping Wing",86,64,98,74,10,"oak",True,
  "Walk-in closet with oak millwork."),
 ("204","East Engawa Gallery","Sleeping Wing",72,14,78,64,10,"oak",True,
  "Glazed engawa along the courtyard: oak floor, shoji-style sliding glass, built-in bench and book wall. Links living, bedrooms and the wellness wing."),
 ("205","Laundry","Sleeping Wing",78,54,88,64,10,"stone",True,
  "Next to the bedrooms. Stacked W/D pair, folding counter, drying rack."),
 ("206","Linen + Mechanical","Sleeping Wing",88,54,98,64,10,"stone",True,
  "Linen storage, heat pump air handler, ERV, water heating."),
 ("207","Kids' Room 1","Sleeping Wing",78,43,98,54,10,"oak",True,
  "20 x 11 ft with a bed alcove, desk and built-in closet; east window to the meadow."),
 ("208","Jack-and-Jill Bath","Sleeping Wing",78,35,98,43,10,"stone",True,
  "Shared by the kids' rooms: two vanities, WC and tub-shower in the middle room, lockable from each side."),
 ("209","Kids' Room 2 / Guest","Sleeping Wing",78,24,98,35,10,"oak",True,
  "Fits a queen bed. Doubles as the guest room; the Guest / Pool Bath is just across the engawa."),
 ("210","Guest / Pool Bath","Sleeping Wing",78,14,88,24,10,"stone",True,
  "Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests."),
 ("211","Pool Equipment","Sleeping Wing",88,14,98,24,9,"concrete",False,
  "Unconditioned. Pool pump and filter, outdoor storage, exterior access only."),
 ("301","South Engawa Gallery","Wellness + Gym Wing",28,22,72,27,10,"oak",True,
  "Glazed engawa that closes the courtyard ring. Lets you reach the gym and wellness rooms in winter without going outside."),
 ("302","Exercise Room","Wellness + Gym Wing",28,0,50,22,12,"rubber",True,
  "Athlete-style training room: Pilates Cadillac, pull-up rig, dumbbells, plyo boxes, balance boards, band anchors, kids' climbing wall on the west wall. Glass slides open to the turf sprint lane."),
 ("303","Wet Room","Wellness + Gym Wing",50,9,66,22,10,"stone",True,
  "Stone wet room: two rain showers, a sunken cold plunge (39-50 F), teak bench. Serves the sauna and hammam."),
 ("304","Sauna","Wellness + Gym Wing",50,0,58,9,8,"cedar",True,
  "Cedar sauna for 4 to 5 people, with a low window toward the pool and meadow."),
 ("305","Hammam","Wellness + Gym Wing",58,0,66,9,8,"stone",True,
  "Marble steam room with a heated bench and a vaulted ceiling."),
 ("306","Changing + Towels","Wellness + Gym Wing",66,0,72,22,10,"stone",True,
  "Towels, robes, lockers. Door to the pool deck and outdoor shower."),
 ("401","Entry Genkan","Studio + Arrival",10,48,22,60,10,"stone",True,
  "Stone genkan with a step-up to the oak floor and a rammed-earth feature wall. The first view lines up across the engawa into the courtyard."),
 ("402","Coat + Shoe Closet","Studio + Arrival",10,41,16,48,10,"oak",True,"Coat and shoe storage."),
 ("403","Powder Room","Studio + Arrival",16,41,22,48,10,"stone",True,
  "Powder room by the entry: stone vessel sink, plaster walls."),
 ("404","Tatami Room","Studio + Arrival",10,28,22,41,9,"tatami",True,
  "8-mat tatami room with a tokonoma alcove. Shoji slide open to the engawa and courtyard, and a low garden window. Used for tea, meditation, or as an overflow guest room."),
 ("405","Instrument + AV Closet","Studio + Arrival",10,22,22,28,10,"oak",True,
  "Cases, cables, rack gear and the network closet. Opens to the office."),
 ("406","West Engawa Gallery","Studio + Arrival",22,22,28,60,10,"oak",True,
  "Glazed engawa from the entry to the office and great room."),
 ("407","Office / Music Loft","Studio + Arrival",4,0,28,22,14,"oak",True,
  "Loft-like 24 x 22 ft room with a 14-ft ceiling, clerestory and acoustic slat ceiling. Work desk and computer with the MPC, digital piano, e-drum kit, acoustic-electric guitar, mic, PA speakers and mixer. Double-stud walls keep it acoustically separate; it sits as far from the bedrooms as possible."),
]
rooms = [dict(id=r[0],name=r[1],wing=r[2],x0=r[3],y0=r[4],x1=r[5],y1=r[6],h=r[7],floor=r[8],cond=r[9],notes=r[10]) for r in ROOMS]
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
 ('h',84,11,25,'window',(3.5,8)),('h',84,27,43,'glass'),('h',84,45,71,'fixed'),
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
 ('v',10,52,56,'front'),('v',10,49,51.5,'fixed'),('v',10,56.5,59,'fixed'),('h',48,11,15,'door'),
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
CLAD = {"Living Pavilion":"stucco","Sleeping Wing":"stucco","Wellness + Gym Wing":"rammed","Studio + Arrival":"charred"}
CLAD_OVR = {"401":"rammed","407":"charred","104":"charred","105":"charred","304":"rammed","305":"rammed"}

# Furniture & equipment: (room, label, x0,y0,x1,y1, h, z0, color, shape)
C = dict(oak="#c39a6b",walnut="#6b4a33",marble="#ece8e1",linen="#e6dfd2",olive="#6f7a55",terra="#b0684a",
         black="#2a2a2a",steel="#9aa0a3",cedar="#c08552",stone="#b9b1a3",white="#f3f1ec",rubber="#3a3a3a",
         cushion="#d9cbb5",hinoki="#e2c894",water="#5fa3b5",plant="#5f7a45",slate="#55524c",rug="#cdbfa6")
FURN = [
 # Kitchen
 ("101","Marble island 10'",13,69,23,73.5,3,0,C['marble'],"box"),
 ("101","Back counter + range",12.6,81.4,25.6,83.6,3,0,C['oak'],"box"),
 ("101","Open oak shelving",10.3,60.8,11.2,63.6,7,0,C['oak'],"box"),
 ("101","Tall appliance wall",10.4,68.5,12.6,75,8.5,0,C['oak'],"box"),
 ("101","Stools",14,67.2,22,68.6,2.5,0,C['walnut'],"box"),
 # Dining
 ("102","Dining table (10)",30,69,40,73,2.5,0,C['walnut'],"box"),
 ("102","Chairs",30.5,67.4,39.5,68.6,1.5,0,C['cushion'],"box"),
 ("102","Chairs",30.5,73.4,39.5,74.6,1.5,0,C['cushion'],"box"),
 ("102","Sideboard",29,82.6,41,83.6,2.8,0,C['oak'],"box"),
 # Living
 ("103","Conversation pit (18\" down)",49,66,65,78,-1.5,0,C['linen'],"pit"),
 ("103","Pit banquette",49.3,66.3,64.7,68.3,1.0,-1.5,C['cushion'],"box"),
 ("103","Pit banquette",49.3,75.7,64.7,77.7,1.0,-1.5,C['cushion'],"box"),
 ("103","Pit banquette",49.3,68.3,51.3,75.7,1.0,-1.5,C['cushion'],"box"),
 ("103","Coffee table",54,70.2,60,73.8,0.8,-1.5,C['walnut'],"box"),
 ("103","Linear fire plinth",67,66,69,78,1.6,0,C['white'],"box"),
 ("103","Lounge chairs",45.5,79,48.5,82,2.4,0,C['olive'],"box"),
 # Pantry/mud
 ("104","Pantry shelving",0.4,73,1.8,83.6,7.5,0,C['oak'],"box"),
 ("104","Pantry shelving",8.2,77,9.6,83.6,7.5,0,C['oak'],"box"),
 ("105","Cubbies + bench",0.4,67.5,2,71.6,7,0,C['oak'],"box"),
 ("105","Dog wash",6.5,60.4,9.6,63,2.6,0,C['stone'],"box"),
 # Master
 ("201","King bed",76,74,82.6,81,2,0,C['linen'],"box"),
 ("201","Headboard",75.6,74,82.9,74.6,3.6,0,C['walnut'],"box"),
 ("201","Nightstands",74.4,74.2,75.6,75.8,1.8,0,C['oak'],"box"),
 ("201","Nightstands",82.9,74.2,84.1,75.8,1.8,0,C['oak'],"box"),
 ("201","Reading chairs",74.5,84.5,77.5,87,2.4,0,C['olive'],"box"),
 ("201","Rug",75,72.5,84,83,0.05,0,C['rug'],"box"),
 ("202","Hinoki soaking tub",93,83,97.4,87.4,2.2,0,C['hinoki'],"box"),
 ("202","Walk-in rain shower",86.6,80,92,87.4,0.2,0,C['slate'],"box"),
 ("202","Double vanity",94.4,74.6,97.4,81.5,2.9,0,C['oak'],"box"),
 ("202","WC",87,74.6,89,77,1.4,0,C['white'],"box"),
 ("203","Closet millwork",86.4,64.4,88.4,73.6,7.5,0,C['oak'],"box"),
 ("203","Closet millwork",95.6,64.4,97.6,73.6,7.5,0,C['oak'],"box"),
 ("203","Island",90.5,67,93.5,71,3,0,C['walnut'],"box"),
 # East gallery
 ("204","Engawa bench + books",76.8,30,77.6,58,1.5,0,C['oak'],"box"),
 ("205","Washer/dryer",78.4,61.2,82.6,63.6,3,0,C['white'],"box"),
 ("205","Fold counter",83,61.6,87.6,63.6,3,0,C['oak'],"box"),
 ("206","Air handler + ERV",94,59,97.6,63.6,6,0,C['steel'],"box"),
 ("206","Linen shelves",88.4,54.4,92,56,7,0,C['oak'],"box"),
 # Kids
 ("207","Bed (alcove)",92,46,97.6,53.6,2,0,C['linen'],"box"),
 ("207","Desk",79,43.4,84,45.4,2.5,0,C['oak'],"box"),
 ("207","Closet",88,53,92,53.7,7,0,C['oak'],"box"),
 ("208","Vanity 1",81,41.4,86,42.7,2.8,0,C['oak'],"box"),
 ("208","Vanity 2",81,35.3,86,36.6,2.8,0,C['oak'],"box"),
 ("208","Tub-shower",91.5,35.4,97.6,38.5,1.8,0,C['white'],"box"),
 ("208","WC",95,40,97,42.6,1.4,0,C['white'],"box"),
 ("209","Queen bed (guest)",90.5,26.5,97.6,32.5,2,0,C['linen'],"box"),
 ("209","Desk",79,32.6,84,34.6,2.5,0,C['oak'],"box"),
 ("209","Closet",84,24.3,89,25,7,0,C['oak'],"box"),
 ("210","Walk-in shower",83,14.4,87.6,18.4,0.2,0,C['slate'],"box"),
 ("210","Vanity",78.4,14.6,80,19,2.8,0,C['oak'],"box"),
 ("210","WC",84,21.5,86,23.6,1.4,0,C['white'],"box"),
 ("211","Pump + filter",90,15,96,18,3,0,C['steel'],"box"),
 # Gym
 ("302","Pilates Cadillac",40,14,47.5,16.6,6.8,0,C['oak'],"frame"),
 ("302","Pull-up rig",29.2,16,31.4,21.5,8.5,0,C['black'],"frame"),
 ("302","Dumbbell rack",44,20.8,49.2,21.8,3,0,C['black'],"box"),
 ("302","Plyo boxes",33,18.5,35,20.5,2,0,C['oak'],"box"),
 ("302","Plyo boxes",35.4,19,37,20.6,1.5,0,C['oak'],"box"),
 ("302","Balance boards",38,19.8,41,21.2,0.4,0,C['walnut'],"box"),
 ("302","Band anchor post",49,8,49.6,10,7,0,C['black'],"box"),
 ("302","Training mats",33,4,45,11,0.1,0,C['olive'],"box"),
 ("302","Kids' climbing wall",28.2,1,29.1,14.5,11,0,C['terra'],"wall"),
 ("302","Crash mat",29.1,1.5,32.5,14,0.9,0,C['slate'],"box"),
 # Wellness
 ("303","Cold plunge",60,17,65.4,21.4,0.4,0,C['water'],"box"),
 ("303","Rain showers",51,18.2,56,21.6,0.15,0,C['slate'],"box"),
 ("303","Teak bench",51,10,57,11.4,1.5,0,C['oak'],"box"),
 ("304","Sauna benches",50.4,4.6,57.6,8.6,1.5,0,C['cedar'],"box"),
 ("304","Upper bench",50.4,6.8,57.6,8.6,3,0,C['cedar'],"box"),
 ("305","Heated marble bench",58.4,5.8,65.6,8.6,1.6,0,C['marble'],"box"),
 ("306","Lockers + towels",70.6,1,71.6,12,7,0,C['oak'],"box"),
 # Studio
 ("401","Genkan bench",18,58.6,21.6,59.6,1.5,0,C['oak'],"box"),
 ("401","Rammed earth wall",10.5,48.6,11.2,51,9,0,"#b98d6c","box"),
 ("402","Coats",10.4,41.4,11.6,47.6,7,0,C['oak'],"box"),
 ("403","Vanity",20.6,44.5,21.6,47.6,2.8,0,C['stone'],"box"),
 ("403","WC",16.4,41.4,18.6,43.4,1.4,0,C['white'],"box"),
 ("404","Tatami mats",11,29,21,40,0.15,0,"#d8cf9a","box"),
 ("404","Tokonoma",10.4,33,12,38,1.0,0,C['walnut'],"box"),
 ("404","Low table",15,33,18,36,1.2,0,C['walnut'],"box"),
 ("405","Gear racks",10.4,22.4,21.6,24,7,0,C['steel'],"box"),
 ("407","Work desk + computer",18,2,26,4.6,2.5,0,C['walnut'],"box"),
 ("407","Monitors",19,3.4,25,3.8,1.5,2.5,C['black'],"box"),
 ("407","MPC",25,3,26,4,0.3,2.5,C['black'],"box"),
 ("407","Digital piano",5,8,6.8,13,3,0,C['black'],"box"),
 ("407","E-drum kit",7,15,12,20,3.5,0,C['black'],"drums"),
 ("407","Guitar stand",13,19.8,14.5,21,4,0,C['terra'],"box"),
 ("407","Mic stand",15.5,14,16.3,14.8,5.5,0,C['steel'],"box"),
 ("407","PA speakers",4.5,4,6,5.6,5.5,0,C['black'],"box"),
 ("407","PA speakers",4.5,16.4,6,18,5.5,0,C['black'],"box"),
 ("407","Mixer rack",9,1,13,2.6,3.2,0,C['slate'],"box"),
 ("407","Sofa",20,15.5,27.4,18.5,2.6,0,C['olive'],"box"),
 ("407","Rug",8,6,17,13,0.05,0,C['rug'],"box"),
]
furn=[dict(room=f[0],label=f[1],x0=f[2],y0=f[3],x1=f[4],y1=f[5],h=f[6],z0=f[7],color=f[8],shape=f[9]) for f in FURN]

# Roofs: rect + overhang + heights. type flat|butterfly
ROOFS = [
 dict(id="living",x0=0,y0=60,x1=72,y1=84,oh=dict(n=8,s=6,w=4,e=0),type="butterfly",valley=72,hv=12.6,he=14.6,wall=12),
 dict(id="master",x0=72,y0=64,x1=98,y1=88,oh=dict(n=6,s=0,w=0,e=4),type="flat",h=11.6),
 dict(id="east",x0=72,y0=14,x1=98,y1=64,oh=dict(n=0,s=4,w=6,e=4),type="flat",h=10.6),
 dict(id="south",x0=28,y0=0,x1=72,y1=27,oh=dict(n=6,s=6,w=0,e=0),type="flat",h=12.6),
 dict(id="office",x0=4,y0=0,x1=28,y1=22,oh=dict(n=4,s=6,w=4,e=1),type="flat",h=14.6),
 dict(id="west",x0=10,y0=22,x1=28,y1=60,oh=dict(n=0,s=0,w=5,e=6),type="flat",h=10.6),
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
 firepit=dict(cx=58,cy=104,r=7,label="Sunken Fire Pit"),
 zen=dict(x0=36,y0=33,x1=58,y1=50,label="Zen Garden"),
 maple=dict(cx=63,cy=44,r=5),
 bathgarden=dict(x0=98,y0=74,x1=106,y1=88,label="Bath Garden"),
 meadow_label=(120,-40),
 drive=[(-90,10),(-60,18),(-44,30)],
)

def total_conditioned():
    return sum(r['area'] for r in rooms if r['cond'])

if __name__=="__main__":
    t=total_conditioned()
    print("Conditioned SF:",t, "m2:",round(t*SF2M2,1))
    for w in ["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"]:
        print(w, sum(r['area'] for r in rooms if r['wing']==w and r['cond']))
    data=dict(rooms=rooms,walls=WALLS,furn=furn,roofs=ROOFS,site=SITE,clad=CLAD,cladOvr=CLAD_OVR,
              total=t,courtyard=COURTYARD)
    json.dump(data,open("plan.json","w"),indent=1)
    print("walls",len(WALLS))
