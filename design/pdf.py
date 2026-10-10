import sys, json
sys.path.insert(0,'/workspace/dreamhome/v2/design')
from design import rooms, total_conditioned, SF2M2, COVERED
from reportlab.lib.pagesizes import letter, landscape
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph, Table, TableStyle, Frame
from reportlab.lib.styles import ParagraphStyle
G="/usr/share/fonts/truetype/sand-box/google/"
pdfmetrics.registerFont(TTFont("Serif",G+"Libre Caslon Text/LibreCaslonText-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Sans",G+"Fira Sans/FiraSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("SansB",G+"Fira Sans/FiraSans-SemiBold.ttf"))
from reportlab.pdfbase.pdfmetrics import registerFontFamily
registerFontFamily("Sans",normal="Sans",bold="SansB",italic="Sans",boldItalic="SansB")
INK=HexColor("#34382d"); OLIVE=HexColor("#4d593e"); MUTED=HexColor("#7d8073"); PAPER=HexColor("#f7f5ef"); LINE=HexColor("#dddcd3"); TERRA=HexColor("#a3613d")
W,H=landscape(letter); M=36
OUT="/workspace/dreamhome/v2/Weberman_Residence_Plan.pdf"
S="/workspace/dreamhome/v2/shots/"; S4=S+"v4/"; D="/workspace/dreamhome/v2/out/"
URL="https://webermanapps.github.io/weberman-residence/"; REPO="https://github.com/WebermanApps/weberman-residence"
c=canvas.Canvas(OUT,pagesize=(W,H)); c.setTitle("Weberman Residence: Spatial Study"); c.setAuthor("Grok Bot for Max Weberman")
body=ParagraphStyle("b",fontName="Sans",fontSize=10,leading=14.2,textColor=INK,spaceAfter=9)
bodys=ParagraphStyle("bs",parent=body,fontSize=9.2,leading=13,spaceAfter=10)
cell=ParagraphStyle("c",fontName="Sans",fontSize=8.2,leading=10.2,textColor=INK)
cellh=ParagraphStyle("ch",parent=cell,fontName="SansB",textColor=OLIVE)
pg=[0]
def page(title, kicker):
    if pg[0]: c.showPage()
    pg[0]+=1
    c.setFillColor(PAPER); c.rect(0,0,W,H,fill=1,stroke=0)
    c.setFillColor(OLIVE); c.setFont("SansB",7.5); c.drawString(M,H-M-2,kicker.upper())
    c.setFillColor(INK); c.setFont("Serif",24); c.drawString(M,H-M-30,title)
    c.setStrokeColor(LINE); c.line(M,H-M-42,W-M,H-M-42)
    c.setFont("Sans",7.5); c.setFillColor(MUTED)
    c.drawString(M,18,"Weberman Residence: Spatial Study  ·  Concept Study, Not for Construction")
    c.drawRightString(W-M,18,f"{pg[0]}")
def img(path,x,y,w,h,border=True):
    ir=ImageReader(path); iw,ih=ir.getSize(); s=min(w/iw,h/ih); dw,dh=iw*s,ih*s
    ox=x+(w-dw)/2; oy=y+(h-dh)/2
    c.drawImage(ir,ox,oy,dw,dh)
    if border: c.setStrokeColor(LINE); c.rect(ox,oy,dw,dh,fill=0,stroke=1)
    return ox,oy,dw,dh
def para(text,x,y,w,h,style=body):
    f=Frame(x,y,w,h,showBoundary=0,leftPadding=0,rightPadding=0,topPadding=0,bottomPadding=0)
    f.addFromList([Paragraph(t,style) for t in text],c)
T=total_conditioned()
# 1 cover
pg[0]+=1
c.setFillColor(PAPER); c.rect(0,0,W,H,fill=1,stroke=0)
img(S4+"desktop_aerial.png",M,M+40,W*0.62,H-2*M-40)
x0=M+W*0.62+20; tw=W-x0-M
c.setFillColor(OLIVE); c.setFont("SansB",8); c.drawString(x0,H-M-10,"A MOUNTAIN COURTYARD HOUSE")
c.setFillColor(INK); c.setFont("Serif",30); c.drawString(x0,H-M-50,"Weberman"); c.drawString(x0,H-M-84,"Residence:")
c.setFillColor(HexColor("#75805f")); c.drawString(x0,H-M-118,"Spatial Study")
c.setFillColor(INK)
stats=[("Conditioned Area",f"{T:,} SF  ·  {T*SF2M2:,.0f} m²"),("Levels","One (single-level courtyard plan)"),("Footprint","98' × 88'  ·  29.9 × 26.8 m"),("Courtyard","44' × 33'  ·  13.4 × 10.1 m"),
       ("Bedrooms / Baths","3 bedrooms  ·  3.5 baths"),("Prepared","October 9, 2026  ·  for Max Weberman")]
y=H-M-160
for k,v in stats:
    c.setFont("SansB",7.5); c.setFillColor(OLIVE); c.drawString(x0,y,k.upper()); c.setFont("Sans",10.5); c.setFillColor(INK); c.drawString(x0,y-14,v); y-=36
c.setFont("SansB",7.5); c.setFillColor(OLIVE); c.drawString(x0,y,"INTERACTIVE 3D MODEL"); c.setFont("Sans",9); c.setFillColor(INK); c.drawString(x0,y-14,URL); c.linkURL(URL,(x0,y-18,x0+tw,y-4)); 
c.drawString(x0,y-28,REPO); c.linkURL(REPO,(x0,y-32,x0+tw,y-18))
c.setFont("Sans",7.5); c.setFillColor(MUTED); c.drawString(M,M+20,"Aerial view from the live model, looking north toward the mountains.")
# 2 concept
page("Design Concept","01 · Concept")
cw=(W-2*M-30)/2
para([
"<b>One low house around one garden.</b> Four single-storey pavilions wrap a 44 × 33 ft courtyard, the heart of the house. The <b>Living Pavilion</b> faces north to the mountains, the <b>Sleeping Wing</b> runs along the quiet east side, the <b>Wellness + Gym Wing</b> sits on the sunny south side next to the pool, and <b>Studio + Arrival</b> on the west holds the entry, tatami room and office / music loft. A glazed engawa ties them together, so every trip through the house runs along the garden.",
"<b>Warm, low, open resort-modern.</b> Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, and low standing-seam roofs elsewhere. Outside it is a black timber house: shou sugi ban cladding under standing-seam metal roofs, with a rammed-earth wall at the entry, flagstone terraces and a gravel drive. Inside: lime plaster, honey oak and oak herringbone, black stone, marble, green zellige, cedar and aspen. The room-by-room swipe decks removed white render, glass at the entry, timber decks, slat enclosures, flat roofs, wood-burning stoves, white hammams, glass shower enclosures, brass taps in the bath, bunk beds and wood headboards. No gables, logs, stone fireplaces, clay tile, freestanding tubs or koi ponds.",
"<b>Fine, not showy.</b> The craft is in the details: pocketing glass that disappears into the walls, slim black frames, a hinoki soaking tub under a skylight, cedar soffits, a 10-ft marble island against green zellige, and a sculpted wood ceiling over the music loft. There is one big mountain window rather than walls of glass everywhere.",
],M,M+30,cw,H-2*M-100)
rows=[["Loved in the swipe test","Where it lives in the plan"],
["Central courtyard as the heart","Shade tree with a curved teak bench, Japanese maples, raked gravel, a planted water court, stone lanterns and a basin"],["Engawa walkway","Glazed engawa on three sides; flagstone terrace under the eaves (no timber deck)"],
["Deep eaves","6' to 8' overhangs, cedar soffits"],["Disappearing glass walls","Pocketing sliders from the living, dining and galleries to the courtyard"],
["Big mountain-view window","28-ft fixed window in the living room; full-height glass in the master"],["Tatami room","8-mat room with a tokonoma, off the west engawa"],
["Japanese soaking tub","Hinoki tub at the master bath corner window"],["Loft-like office","24' × 22' office / music loft with a 14' ceiling"],
["Sauna + outdoor shower","Cedar sauna with backlit aspen benches and an electric heater, stone steam room, zellige plunge, pool and courtyard showers"],["Climbing wall","Kids' bouldering wall in an open-air Climbing Pavilion by the gym, sprint lane and bike rack"],
["Liked: conversation pit, butterfly roof, pergola, fire pit, meadow","Sunken pit with a low modular sofa, butterfly roof, pergola dining, round stone fire pit, bale pavilion, meadow, vegetable garden and fruit trees"]]
rows=[[Paragraph(a,cellh if i==0 else cell),Paragraph(b,cellh if i==0 else cell)] for i,(a,b) in enumerate(rows)]
t=Table(rows,colWidths=[cw*0.40,cw*0.60])
t.setStyle(TableStyle([("FONT",(0,0),(-1,-1),"Sans",8.4),("FONT",(0,0),(-1,0),"SansB",8.4),("TEXTCOLOR",(0,0),(-1,0),OLIVE),("TEXTCOLOR",(0,1),(-1,-1),INK),
  ("LINEBELOW",(0,0),(-1,-1),0.4,LINE),("VALIGN",(0,0),(-1,-1),"TOP"),("BOTTOMPADDING",(0,0),(-1,-1),4.5),("TOPPADDING",(0,0),(-1,-1),4.5),("LEFTPADDING",(0,0),(-1,-1),2)]))
tw_,th_=t.wrapOn(c,cw,400); t.drawOn(c,M+cw+30,H-M-60-th_)
# materials swatches
sw=[("Lime plaster","#efe9de"),("Shou sugi ban","#2f2a26"),("Honey oak","#c88f4e"),("Black stone","#2b2c2c"),("Green zellige","#2f7a5c"),("Marble","#ece8e1"),("Flagstone","#a79d8c"),("Standing seam","#6a645c")]
y=M+40; x=M+cw+30
c.setFont("SansB",7.5); c.setFillColor(OLIVE); c.drawString(x,y+44,"MATERIAL PALETTE")
for i,(n,col) in enumerate(sw):
    xx=x+i*(cw/8); c.setFillColor(HexColor(col)); c.setStrokeColor(LINE); c.rect(xx,y+4,cw/8-6,30,fill=1,stroke=1)
    c.setFillColor(INK); c.setFont("Sans",6.3); c.drawString(xx,y-6,n)
# 3 floor plan
page("Floor Plan","02 · Plan  ·  single level  ·  dimensions in feet and meters")
img(D+"Floor_Plan.png",M,M+10,W-2*M,H-2*M-62,border=False)
# 4 site plan
page("Site Plan","03 · Site  ·  assumed 1.37-acre mountain parcel")
img(D+"Site_Plan.png",M,M+10,W-2*M,H-2*M-62,border=False)
# 5 program
page("Room Program","04 · Program  ·  areas to wall centerlines")
wings=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"]
cols=[[],[]]
for i,w in enumerate(wings):
    rs=[r for r in rooms if r['wing']==w]
    data=[[w,"","Size","SF","m²"]]+[[r['id'],r['name']+("" if r['cond'] else " (uncond.)"),f"{r['w']}' × {r['d']}'",f"{r['area']:,}",f"{r['area']*SF2M2:.1f}"] for r in rs]
    tot=sum(r['area'] for r in rs if r['cond']); data.append(["","Subtotal (conditioned)","",f"{tot:,}",f"{tot*SF2M2:.1f}"])
    cols[i//2].append(data)
cols[1].append([["Covered Outdoor (Not Conditioned)","","Size","SF","m²"]]+[[cv['id'],cv['name'],f"{cv['w']}' × {cv['d']}'",f"{cv['area']:,}",f"{cv['area']*SF2M2:.1f}"] for cv in COVERED]+[["","Subtotal (covered, open-air)","",f"{sum(cv['area'] for cv in COVERED):,}",f"{sum(cv['area'] for cv in COVERED)*SF2M2:.1f}"]])
colw=(W-2*M-30)/2
for ci,col in enumerate(cols):
    y=H-M-60
    for data in col:
        t=Table(data,colWidths=[colw*0.09,colw*0.49,colw*0.17,colw*0.12,colw*0.13])
        t.setStyle(TableStyle([("FONT",(0,0),(-1,-1),"Sans",8.2),("FONT",(0,0),(-1,0),"SansB",8.2),("FONT",(0,-1),(-1,-1),"SansB",8.2),("TEXTCOLOR",(0,0),(-1,0),OLIVE),
            ("TEXTCOLOR",(0,1),(0,-1),TERRA),("ALIGN",(2,0),(-1,-1),"RIGHT"),("LINEBELOW",(0,0),(-1,0),0.8,OLIVE),("LINEBELOW",(0,1),(-1,-2),0.3,LINE),
            ("BOTTOMPADDING",(0,0),(-1,-1),2.6),("TOPPADDING",(0,0),(-1,-1),2.6),("LEFTPADDING",(0,0),(-1,-1),2)]))
        _,th=t.wrapOn(c,colw,500); t.drawOn(c,M+ci*(colw+30),y-th); y-=th+16
c.setFillColor(HexColor("#e0e6d5")); c.rect(M+colw+30,M+30,colw,34,fill=1,stroke=0)
c.setFillColor(OLIVE); c.setFont("SansB",11); c.drawString(M+colw+40,M+43,"Total Conditioned"); c.drawRightString(M+2*colw+20,M+43,f"{T:,} SF  ·  {T*SF2M2:,.0f} m²")
c.setFont("Sans",7.5); c.setFillColor(MUTED); c.drawString(M+colw+30,M+18,"Excludes the Climbing Pavilion (covered outdoor), pool equipment room, carport, veranda, pergola and courtyard.")
# 6 screenshots
page("Interactive Model Screenshots","05 · Live model  ·  "+URL)
gw=(W-2*M-20)/2; gh=(H-2*M-130)/3
for i,(f,cap) in enumerate([("desktop_aerial","Aerial: black timber pavilions under standing-seam roofs"),("desktop_courtyard","Courtyard: shade tree, teak bench, maples, lanterns, water court"),("desktop_kitchen_living","Kitchen + living: marble island, zellige, herringbone, conversation pit"),("desktop_office","Office / music loft: sit-stand desk to the garden, studio desk, guitar wall"),("desktop_gym","Gym: rig with rings and rope, Cadillac, reformer, rower, mirror wall"),("desktop_master_bath","Master bath: hinoki tub by the window, black stone, skylight")]):
    x=M+(i%2)*(gw+20); y=H-M-62-(i//2+1)*gh-(i//2)*20
    img(S4+f+".png",x,y,gw,gh-6); c.setFont("Sans",7.2); c.setFillColor(MUTED); c.drawString(x,y-9,cap)
page("Climbing Pavilion","05b · Revision 10.10.26  ·  climbing wall moved outdoors")
img(S+"desktop_climb.png",M,M+120,W-2*M,H-2*M-182)
para(["<b>What changed.</b> The kids' climbing wall left the exercise room and now has its own open-air pavilion, 18 × 18 ft (324 SF covered, not conditioned). It has a fir post-and-beam frame, a standing-seam roof with 5-ft eaves and a charred-timber fascia to match the house, and a poured-rubber soft-fall surface. A 16-ft-wide, 12-ft-high bouldering wall faces south onto the sprint lane, with a crash pad and a 4-bike rack. It sits just west of the office and exercise room, so the gym, lane, wall and bikes form one active zone. The gym's west wall is now a full-height storage wall with a wall-mounted rig and rings."],M,M+10,W-2*M,100,bodys)
page("Mobile Viewport","06 · Live model on a 390 × 844 phone viewport")
mw=(W-2*M-40)/3
for i,(f,cap) in enumerate([("mobile_aerial","Aerial"),("mobile_kitchen_living","Kitchen + living"),("mobile_master_bath","Master bath")]):
    x=M+i*(mw+20); img(S4+f+".png",x,M+30,mw,H-2*M-100); c.setFont("Sans",8); c.setFillColor(MUTED); c.drawCentredString(x+mw/2,M+16,cap)
# finish schedule
from design import OUTDOOR_FIN
fs_rows=[["Room","Floor","Finishes + key fixtures (from the room-by-room swipe decks)"]]+[[f"{r['id']}  {r['name']}",r['floorName'],r['fin']] for r in rooms]+[[n,fl,fi] for (n,fl,fi) in OUTDOOR_FIN]
fst=ParagraphStyle('fs',fontName='Sans',fontSize=6.9,leading=8.3,textColor=INK); fsh=ParagraphStyle('fsh',fontName='SansB',fontSize=7.2,leading=8.6,textColor=OLIVE)
allrows=[[Paragraph(str(v),fsh if i==0 else fst) for v in row] for i,row in enumerate(fs_rows)]
fw=W-2*M; cols=[fw*0.22,fw*0.16,fw*0.62]
def fstable(rows):
    t=Table(rows,colWidths=cols,repeatRows=1); t.setStyle(TableStyle([("LINEBELOW",(0,0),(-1,0),0.8,OLIVE),("LINEBELOW",(0,1),(-1,-1),0.25,LINE),("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),2.4),("BOTTOMPADDING",(0,0),(-1,-1),2.4),("LEFTPADDING",(0,0),(-1,-1),2)])); return t
avail=H-2*M-95; start=1; fpg=1
while start<len(allrows):
    end=start+1
    while end<=len(allrows):
        t=fstable([allrows[0]]+allrows[start:end]); _,th=t.wrapOn(c,fw,2000)
        if th>avail: end-=1; break
        end+=1
    end=min(end,len(allrows))
    page("Finish Schedule" if fpg==1 else "Finish Schedule (Continued)","06b · Materials and fixtures, room by room")
    t=fstable([allrows[0]]+allrows[start:end]); _,th=t.wrapOn(c,fw,2000); t.drawOn(c,M,H-M-62-th)
    start=end; fpg+=1
# 7 open questions
page("Open Design Questions for Max","07 · Next steps")
qs=["<b>Site and orientation.</b> Is there a real parcel? The plan assumes the mountain view is to the north and a gentle slope. A view to the west or south would mean rotating the courtyard. A steeper lot could become the gentle split (living pavilion 2 to 3 steps down).",
"<b>Size.</b> At 5,952 SF this is generous. The three glazed engawa galleries add about 750 SF. Options: make the south engawa an open-air covered walkway (about -220 SF), trim the kids' rooms and office by 2 ft each, or drop the tatami room into the west engawa. Any of these gets toward 5,000 to 5,400 SF.",
"<b>Garage.</b> The plan shows an open two-car carport. Do you want an enclosed garage or a ski / bike workshop? It would sit beside the mudroom.",
"<b>Guest strategy.</b> Kids' Room 2 is the guest room and uses the Guest / Pool Bath across the engawa. Do you want a separate guest suite instead (for example, the tatami room with its own bath), or a casita by the pool?",
"<b>Music room acoustics.</b> How loud do you play, and do you record? Full isolation (room-in-room, floated floor, sound-lock vestibule) costs more than the double-stud walls assumed here.",
"<b>Pool and pond.</b> Keep a small chlorinated or salt pool, or switch to a natural swimming pond, which you liked in the swipe test? Cold plunge indoors only, or a second one outside?",
"<b>Fire.</b> The plan uses a slim linear gas fire in the living room (no stone fireplace) and a wood-burning sunken fire pit outside. Is that the right balance? Is a wood stove or sauna stove allowed in your wildfire zone?",
"<b>Climate and snow.</b> Deep, low eaves and a butterfly valley need snow-load engineering and heated valley gutters. Confirm the snow region, and whether you prefer a single low shed roof over the butterfly.",
"<b>Climbing pavilion.</b> The wall is now outdoors in its own covered pavilion (as drawn). What ages are the kids? That sets the wall height (12 ft drawn) and the fall zone. Should one side get roll-down screens or a heater for winter use?",
"<b>Budget and level of finish.</b> How far to push the details: hinoki, Calacatta, pocketing steel-framed glass, rammed earth? Each has a lower-cost stand-in."]
para(qs[:5],M,M+30,cw,H-2*M-100,bodys); para(qs[5:],M+cw+30,M+30,cw,H-2*M-100,bodys)
c.save(); print(OUT)
