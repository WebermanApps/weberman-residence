import json, math, random
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, Arc, Circle, Polygon, FancyBboxPatch
from matplotlib import font_manager as fm
from design import rooms, WALLS, furn, ROOFS, SITE, COURTYARD, COVERED, total_conditioned, FT2M, SF2M2

G="/usr/share/fonts/truetype/sand-box/google/"
import glob
for p in glob.glob(G+"Fira Sans/FiraSans-*.ttf"): fm.fontManager.addfont(p)
fm.fontManager.addfont(G+"Libre Caslon Text/LibreCaslonText-Regular.ttf")
SANS="Fira Sans"; SERIF="Libre Caslon Text"
plt.rcParams["font.family"]=SANS
INK="#34382d"; OLIVE="#4d593e"; PAPER="#f7f5ef"; LINE="#c9c7bc"; GLASS="#6fa7c0"; MUTED="#7d8073"; TERRA="#a3613d"
WALLFILL="#3b3a35"

def ftin(v):
    f=int(v); i=round((v-f)*12)
    if i==12: f+=1;i=0
    return f"{f}'" if i==0 else f"{f}'-{i}\""

def wall_pieces(s):
    """returns list of (a,b,kind,feature)"""
    feats=sorted(s['feats'],key=lambda f:f['a'])
    out=[]; cur=s['a']
    for f in feats:
        if f['a']>cur+1e-6: out.append((cur,f['a'],'solid',None))
        out.append((f['a'],f['b'],f['k'],f)); cur=f['b']
    if s['b']>cur+1e-6: out.append((cur,s['b'],'solid',None))
    return out

def rect_on(s,a,b,t,ext=0):
    if s['o']=='h': return (a-ext, s['c']-t/2, b-a+2*ext, t)
    return (s['c']-t/2, a-ext, t, b-a+2*ext)

def draw_walls(ax, lw=1.0, furniture=True, color=WALLFILL):
    # furniture first
    if furniture:
        for f in furn:
            if f['shape']=='pit':
                ax.add_patch(Rectangle((f['x0'],f['y0']),f['x1']-f['x0'],f['y1']-f['y0'],fc="#ebe4d6",ec=MUTED,lw=0.5*lw,ls=(0,(3,2)),zorder=2))
                continue
            if f['h']<0.12 and 'Rug' in f['label']:
                ax.add_patch(Rectangle((f['x0'],f['y0']),f['x1']-f['x0'],f['y1']-f['y0'],fc="none",ec="#cbbfa7",lw=0.4*lw,zorder=2)); continue
            fc = "#e9e3d6" if f['h']<6 else "#ddd5c4"
            if f['label'] in ("Cold plunge",): fc="#cfe3ea"
            if 'climbing' in f['label']: fc="#e3b9a3"
            ax.add_patch(Rectangle((f['x0'],f['y0']),f['x1']-f['x0'],f['y1']-f['y0'],fc=fc,ec="#8e8a7c",lw=0.4*lw,zorder=3))
    for s in WALLS:
        t = 0.75 if s['ext'] else 0.45
        for (a,b,k,f) in wall_pieces(s):
            if k=='solid':
                x,y,w,h=rect_on(s,a,b,t,ext=t/2 if True else 0)
                ax.add_patch(Rectangle((x,y),w,h,fc=color,ec=color,lw=0.1,zorder=6))
            elif k in ('glass','fixed'):
                x,y,w,h=rect_on(s,a,b,t*0.5)
                ax.add_patch(Rectangle((x,y),w,h,fc="#e4f0f4",ec=GLASS,lw=0.6*lw,zorder=6))
                if s['o']=='h': ax.plot([a,b],[s['c'],s['c']],color=GLASS,lw=0.5*lw,zorder=7)
                else: ax.plot([s['c'],s['c']],[a,b],color=GLASS,lw=0.5*lw,zorder=7)
                if k=='glass':  # slider panel ticks
                    n=max(2,int((b-a)/6)); 
                    for i in range(1,n):
                        p=a+(b-a)*i/n
                        if s['o']=='h': ax.plot([p,p],[s['c']-t*0.3,s['c']+t*0.3],color=GLASS,lw=0.5*lw,zorder=7)
                        else: ax.plot([s['c']-t*0.3,s['c']+t*0.3],[p,p],color=GLASS,lw=0.5*lw,zorder=7)
            elif k=='window':
                x,y,w,h=rect_on(s,a,b,t)
                ax.add_patch(Rectangle((x,y),w,h,fc="white",ec=color,lw=0.6*lw,zorder=6))
                if s['o']=='h': ax.plot([a,b],[s['c'],s['c']],color=GLASS,lw=0.6*lw,zorder=7)
                else: ax.plot([s['c'],s['c']],[a,b],color=GLASS,lw=0.6*lw,zorder=7)
            elif k in ('door','exdoor','front'):
                wd=b-a
                side = 1 if s['pos'] else -1
                if k in ('exdoor','front'): side = 1 if s['pos'] else -1
                if s['o']=='h':
                    hx,hy=a,s['c']
                    ax.plot([hx,hx],[hy,hy+side*wd],color=INK,lw=0.7*lw,zorder=7)
                    ax.add_patch(Arc((hx,hy),2*wd,2*wd,theta1=0 if side>0 else 270,theta2=90 if side>0 else 360,color=INK,lw=0.4*lw,zorder=7))
                else:
                    hx,hy=s['c'],a
                    ax.plot([hx,hx+side*wd],[hy,hy],color=INK,lw=0.7*lw,zorder=7)
                    ax.add_patch(Arc((hx,hy),2*wd,2*wd,theta1=0 if side>0 else 90,theta2=90 if side>0 else 180,color=INK,lw=0.4*lw,zorder=7))
            elif k=='slide':
                for off in (-0.18,0.18):
                    if s['o']=='h': ax.plot([a+(0 if off<0 else (b-a)*0.45), a+(b-a)*(0.55 if off<0 else 1)],[s['c']+off]*2,color=INK,lw=0.9*lw,zorder=7)
                    else: ax.plot([s['c']+off]*2,[a+(0 if off<0 else (b-a)*0.45), a+(b-a)*(0.55 if off<0 else 1)],color=INK,lw=0.9*lw,zorder=7)

def dim(ax, x0,y0,x1,y1, off, txt=None, fs=6.5, horiz=True):
    if horiz:
        y=y0+off
        ax.plot([x0,x1],[y,y],color=INK,lw=0.5)
        for x in (x0,x1):
            ax.plot([x,x],[y0+ (0.6 if off>0 else -0.6),y+(0.8 if off>0 else -0.8)],color=INK,lw=0.4)
            ax.plot([x-0.6,x+0.6],[y-0.6,y+0.6],color=INK,lw=0.7)
        L=x1-x0
        ax.text((x0+x1)/2,y+(0.7 if off>0 else -0.7),txt or f"{ftin(L)}  ({L*FT2M:.2f} m)",ha='center',va='bottom' if off>0 else 'top',fontsize=fs,color=INK)
    else:
        x=x0+off
        ax.plot([x,x],[y0,y1],color=INK,lw=0.5)
        for y in (y0,y1):
            ax.plot([x0+(0.6 if off>0 else -0.6),x+(0.8 if off>0 else -0.8)],[y,y],color=INK,lw=0.4)
            ax.plot([x-0.6,x+0.6],[y-0.6,y+0.6],color=INK,lw=0.7)
        L=y1-y0
        ax.text(x+(0.7 if off>0 else -0.7),(y0+y1)/2,txt or f"{ftin(L)}  ({L*FT2M:.2f} m)",ha='left' if off>0 else 'right',va='center',rotation=90,fontsize=fs,color=INK,rotation_mode='anchor') if False else \
        ax.text(x+(1.0 if off>0 else -1.0),(y0+y1)/2,txt or f"{ftin(L)}  ({L*FT2M:.2f} m)",ha='center',va='center',rotation=90,fontsize=fs,color=INK)

def courtyard_art(ax, lw=1):
    c=COURTYARD
    ax.add_patch(Rectangle((c['x0'],c['y0']),c['x1']-c['x0'],c['y1']-c['y0'],fc="#efeadf",ec="none",zorder=1))
    # engawa deck under eaves (4 ft)
    ax.add_patch(Rectangle((c['x0'],c['y0']),c['x1']-c['x0'],c['y1']-c['y0'],fc="#e4ded2",ec="#b9b1a3",lw=0.3*lw,zorder=1.4))
    for i in range(70):  # flagstone joints hint
        x=c['x0']+((i*37)%100)/100*(c['x1']-c['x0']); y=c['y0']+((i*61)%100)/100*(c['y1']-c['y0'])
        ax.plot([x,x+1.6],[y,y+0.7],color="#cbc3b5",lw=0.2*lw,zorder=1.45)
    lw_=SITE['lawn']; ax.add_patch(Rectangle((lw_['x0'],lw_['y0']),lw_['x1']-lw_['x0'],lw_['y1']-lw_['y0'],fc="#cfdcb4",ec="#8ea06a",lw=0.3*lw,zorder=1.6))
    z=SITE['zen']
    ax.add_patch(Rectangle((z['x0'],z['y0']),z['x1']-z['x0'],z['y1']-z['y0'],fc="#ebe6dc",ec="#a9a395",lw=0.5*lw,zorder=1.7))
    for i in range(1,12):
        yy=z['y0']+i*(z['y1']-z['y0'])/12
        ax.plot([z['x0']+0.5,z['x1']-0.5],[yy,yy],color="#cfc8b9",lw=0.3*lw,zorder=1.8)
    for (sx,sy,r) in [(38,37,1.6),(45.5,40.5,1.2),(47.5,36,0.9)]:
        ax.add_patch(Circle((sx,sy),r,fc="#9a958a",ec="#6d695f",lw=0.4*lw,zorder=2))
        ax.add_patch(Circle((sx,sy),r+0.9,fc="none",ec="#cfc8b9",lw=0.3*lw,zorder=1.9))
    w_=SITE['water']; ax.add_patch(Rectangle((w_['x0'],w_['y0']),w_['x1']-w_['x0'],w_['y1']-w_['y0'],fc="#bcd6de",ec="#3a3b3b",lw=0.6*lw,zorder=1.8))
    for i in range(10): ax.add_patch(Circle((w_['x0']+1+((i*41)%100)/100*9,w_['y0']+1+((i*67)%100)/100*7),0.45,fc="#8ea06a",ec="none",zorder=1.9))
    ax.add_patch(Circle((w_['x0']-1.8,w_['y0']+2.5),1.2,fc="#c9c2b4",ec="#6d695f",lw=0.4*lw,zorder=2))
    st=SITE['shadetree']; ax.add_patch(Circle((st['cx'],st['cy']),st['r'],fc="#a9bb84",ec="#6f8550",lw=0.5*lw,alpha=0.55,zorder=2.2))
    from matplotlib.patches import Arc
    ax.add_patch(Arc((st['cx'],st['cy']),12.4,12.4,theta1=189,theta2=279,color="#9c6a3c",lw=2.2*lw,zorder=2.3))
    for (mx,my) in SITE['maples']: ax.add_patch(Circle((mx,my),2.6,fc="#d9a37e",ec="#a86a45",lw=0.4*lw,alpha=0.75,zorder=2.2))
    for (lx,ly) in SITE['lanterns']: ax.add_patch(Rectangle((lx-0.5,ly-0.5),1,1,fc="#8e897e",ec=INK,lw=0.3*lw,zorder=2.3))
    cs=SITE['cshower']; ax.add_patch(Rectangle((cs['x0'],cs['y0']),cs['x1']-cs['x0'],cs['y1']-cs['y0'],fc="#55524c",ec=INK,lw=0.4*lw,zorder=2))

def room_labels(ax, fs=6.2, small=4.6):
    for r in rooms:
        cx=(r['x0']+r['x1'])/2; cy=(r['y0']+r['y1'])/2
        tiny = r['w']<8 or r['d']<7
        name=r['name']
        # nudge labels away from furniture
        nud={"103":(0,-9.5),"101":(0,4.5),"102":(0,4),"201":(0,-6),"202":(-2,-1),"302":(0,-1.5),"407":(0,-2.5),"209":(-4,-1),"207":(-4,-1),"204":(0,-14),"406":(0,-4),"301":(-12,0)}
        dx,dy=nud.get(r['id'],(0,0)); cx+=dx; cy+=dy
        rot=90 if r['id'] in ("204","406") else 0
        if r['id'] in ("204","406","301"):
            ax.text(cx,cy,f"{r['id']}  {name.upper()}",ha='center',va='center',fontsize=small,color=MUTED,rotation=rot,zorder=9)
            continue
        if tiny:
            ax.text(cx,cy+0.6,name.replace(" + ","+\n").replace(" / ","/\n") if len(name)>9 else name,ha='center',va='center',fontsize=small,color=INK,zorder=9,linespacing=0.95,weight='bold')
            ax.text(cx,cy-1.9,f"{r['area']} SF",ha='center',va='center',fontsize=small-0.6,color=MUTED,zorder=9)
            continue
        ax.text(cx,cy+1.6,f"{r['id']}",ha='center',va='center',fontsize=small,color=TERRA,zorder=9)
        ax.text(cx,cy+0.2,name.upper(),ha='center',va='center',fontsize=fs if len(name)<18 else fs-0.9,color=INK,weight='bold',zorder=9)
        ax.text(cx,cy-1.3,f"{ftin(r['w'])} × {ftin(r['d'])}",ha='center',va='center',fontsize=small,color=INK,zorder=9)
        ax.text(cx,cy-2.6,f"{r['area']} SF · {r['area']*SF2M2:.1f} m²",ha='center',va='center',fontsize=small-0.3,color=MUTED,zorder=9)

def climb_art(ax,lw=1,labels=True):
    c=SITE['climb']; o=c['oh']
    ax.add_patch(Rectangle((c['x0'],c['y0']),c['x1']-c['x0'],c['y1']-c['y0'],fc="#c9a58c",ec="#7d5a44",lw=0.5*lw,zorder=0.6))
    for i in range(1,18):
        ax.plot([c['x0'],c['x1']],[c['y0']+i,c['y0']+i],color="#b8917a",lw=0.15*lw,zorder=0.65)
    ax.add_patch(Rectangle((c['x0']-o,c['y0']-o),c['x1']-c['x0']+2*o,c['y1']-c['y0']+2*o,fc="none",ec="#5a5850",lw=0.6*lw,ls=(0,(5,2.5)),zorder=0.7))
    ax.add_patch(Rectangle((c['x0']+1,c['y1']-1.2),16,1.0,fc="#a3613d",ec=INK,lw=0.5*lw,zorder=0.8))
    for (px,py) in [(c['x0'],c['y0']),(c['x1']-0.7,c['y0']),(c['x0'],c['y1']-0.7),(c['x1']-0.7,c['y1']-0.7)]:
        ax.add_patch(Rectangle((px,py),0.7,0.7,fc=INK,ec=INK,zorder=0.9))
    ax.add_patch(Rectangle((c['x1']-2.4,c['y0']+2),1.8,10,fc="none",ec=INK,lw=0.5*lw,zorder=0.8))
    if labels:
        ax.text((c['x0']+c['x1'])/2,9.6,"C1",ha='center',fontsize=4.6,color=TERRA,zorder=9)
        ax.text((c['x0']+c['x1'])/2,8.2,"CLIMBING PAVILION",ha='center',fontsize=5.4,color=INK,weight='bold',zorder=9)
        ax.text((c['x0']+c['x1'])/2,6.8,"18' × 18' · 324 SF covered, open-air",ha='center',fontsize=4.2,color=INK,zorder=9)
        ax.text((c['x0']+c['x1'])/2,5.6,"soft-fall rubber · not conditioned",ha='center',fontsize=4.0,color=MUTED,zorder=9)
        ax.text((c['x0']+c['x1'])/2,c['y1']-2.2,"16' CLIMBING WALL, 12' H",ha='center',fontsize=3.8,color="#7a3b22",zorder=9)
        ax.text(c['x1']-1.5,c['y0']+1.2,"BIKES",ha='center',fontsize=3.6,color=MUTED,zorder=9)
        ax.text((c['x0']+c['x1'])/2,c['y0']-o-1.6,"ROOF + 5' EAVES (DASHED)",ha='center',fontsize=3.6,color=MUTED,zorder=9)

def scalebar(ax,x,y,fs=6,step=5,mstep=1):
    k=step/5; hh=0.7*k
    for i in range(4):
        ax.add_patch(Rectangle((x+i*step,y),step,hh,fc=INK if i%2==0 else "white",ec=INK,lw=0.5))
    for i in range(5): ax.text(x+i*step,y+hh+0.4*k,f"{i*step}",ha='center',fontsize=fs-1)
    ax.text(x+4*step+1.5*k,y+hh/2,"FEET",fontsize=fs-1,va='center')
    m=mstep/FT2M; n=int(4*step/m+0.999)
    for i in range(n):
        ax.add_patch(Rectangle((x+i*m,y-2*hh),m,hh,fc=INK if i%2==0 else "white",ec=INK,lw=0.5))
    for i in range(0,n+1,2): ax.text(x+i*m,y-2*hh-0.5*k,f"{i*mstep}",ha='center',va='top',fontsize=fs-1)
    ax.text(x+4*step+1.5*k,y-1.5*hh,"METERS",fontsize=fs-1,va='center')

def north(ax,x,y,s=3):
    ax.add_patch(Polygon([(x,y+s),(x-s*0.45,y-s*0.6),(x,y-s*0.25),(x+s*0.45,y-s*0.6)],fc=INK,ec=INK,zorder=9))
    ax.text(x,y+s+1.0,"N",ha='center',fontsize=8,weight='bold')

def floor_plan(path, overlay=False):
    X0,X1,Y0,Y1 = (-36,112,-24,100) if not overlay else (-30,110,-10,100)
    W=X1-X0; H=Y1-Y0
    if overlay:
        fig=plt.figure(figsize=(W/10,H/10),dpi=200)
        ax=fig.add_axes([0,0,1,1]); ax.set_xlim(X0,X1); ax.set_ylim(Y0,Y1); ax.axis('off')
        courtyard_art(ax,lw=1.4)
        for r in rooms:
            ax.add_patch(Rectangle((r['x0'],r['y0']),r['w'],r['d'],fc="#fbfaf6",ec="none",alpha=0.85,zorder=1))
        climb_art(ax,lw=1.6,labels=False)
        draw_walls(ax,lw=1.6)
        fig.savefig(path,transparent=True); plt.close(fig)
        json.dump(dict(x0=X0,x1=X1,y0=Y0,y1=Y1),open(path.replace('.png','.json'),'w'))
        return
    fig=plt.figure(figsize=(17,12.5),dpi=200)
    fig.patch.set_facecolor(PAPER)
    ax=fig.add_axes([0.03,0.04,0.70,0.86]); ax.set_xlim(X0,X1); ax.set_ylim(Y0,Y1); ax.set_aspect('equal'); ax.axis('off')
    courtyard_art(ax)
    for r in rooms:
        ax.add_patch(Rectangle((r['x0'],r['y0']),r['w'],r['d'],fc="white" if r['cond'] else "#ece9e0",ec="none",zorder=1))
    # isolated studio inner shell (room-within-a-room, ~14 in build-up per side)
    t=1.17; ax.add_patch(Rectangle((4+t,0+t),24-2*t,22-2*t,fc="none",ec=TERRA,lw=0.7,ls=(0,(3,1.5)),zorder=6))
    ax.text(16,1.9,"INNER ISOLATION SHELL · TARGET STC 60+ · 426 SF NET",ha='center',fontsize=3.6,color=TERRA,zorder=9)
    ax.text(24,24.6,"SOUND LOCK",ha='center',fontsize=3.4,color=TERRA,zorder=9)
    # outdoor items near house
    ax.add_patch(Rectangle((36,79),36,8,fc="#e8dcc6",ec="#c2ab88",lw=0.4,zorder=0.5)); ax.text(54,84.5,"COVERED VERANDA",ha='center',fontsize=5,color=MUTED)
    ax.add_patch(Rectangle((19,81),18,14,fc="none",ec="#a39a86",lw=0.6,ls=(0,(4,2)),zorder=0.5)); ax.text(28,88,"PERGOLA\nDINING",ha='center',va='center',fontsize=5,color=MUTED)
    ax.add_patch(Rectangle((48,-16),50,16,fc="#e9e4d8",ec="none",zorder=0.4))
    ax.add_patch(Rectangle((54,-16),34,6,fc="#cfe3ea",ec=GLASS,lw=0.6,zorder=0.5)); ax.text(71,-13,"SALTWATER POOL 34' × 12' (CONT.)",ha='center',va='center',fontsize=5,color="#2e6b80")
    ax.add_patch(Rectangle((72.5,4),5,6,fc="#dfe9ec",ec="#8e897e",lw=0.5,zorder=0.5)); ax.text(75,7,"OUTDOOR\nSHOWER",ha='center',va='center',fontsize=4.2,color=MUTED)
    ax.add_patch(Rectangle((-14,-16),57,8,fc="#cfdcb4",ec="#8ea06a",lw=0.5,zorder=0.5)); ax.text(14,-12,"TURF SPRINT LANE (CONT.)",ha='center',va='center',fontsize=5,color="#4e5f2f")
    ax.add_patch(Rectangle((98,69),8,14,fc="#e3e8d6",ec="#a8b08f",lw=0.5,zorder=0.5)); ax.text(102,76,"BATH\nGARDEN",ha='center',va='center',fontsize=4.2,color=MUTED)
    ax.add_patch(Rectangle((4,62),3.5,10,fc="none",ec=INK,lw=0.5,zorder=0.5)); ax.text(5.7,73.5,"BIKES",ha='center',fontsize=4.2,color=MUTED)
    climb_art(ax)
    ax.text(48,46.5,"COURTYARD",ha='center',fontsize=9,color=OLIVE,weight='bold',zorder=9,family=SERIF)
    ax.text(48,44.6,"36' × 28'  ·  1,008 SF open to sky",ha='center',fontsize=5.2,color=MUTED,zorder=9)
    ax.text(45.5,30.9,"RAKED GRAVEL",ha='center',fontsize=4.4,color=MUTED,zorder=9)
    ax.text(60.5,39.5,"PLANTED\nWATER COURT",ha='center',va='center',fontsize=4.2,color="#2e6b80",zorder=9)
    ax.text(53,51.2,"SHADE TREE + TEAK BENCH",ha='center',fontsize=4.2,color="#4e5f2f",zorder=9)
    c_=COURTYARD
    for (x0_,y0_,x1_,y1_) in [(c_['x0'],c_['y1']-4.5,c_['x1'],c_['y1']),(c_['x0'],c_['y0']+0.2,c_['x0']+4.5,c_['y1']-4.5),(c_['x1']-4.5,c_['y0']+5,c_['x1'],c_['y1']-4.5)]:
        ax.add_patch(Rectangle((x0_,y0_),x1_-x0_,y1_-y0_,fc="#d9b48c",ec="#a5825c",lw=0.3,alpha=0.55,zorder=1.9))
    ax.text(54,53.0,"CEDAR ENGAWA + BLUESTONE STEP",ha='center',fontsize=4.2,color="#7a5a3a",zorder=9)
    ax.text(69,26.3,"CRT. SHOWER",ha='center',fontsize=3.4,color=MUTED,zorder=9)
    draw_walls(ax)
    room_labels(ax)
    # dims
    dim(ax,4,0,98,0,-22,None,7)
    for a,b in [(4,28),(28,50),(50,72),(72,98)]: dim(ax,a,0,b,0,-17.6,f"{ftin(b-a)}",5.5)
    
    for a,b in [(4,28),(28,50),(50,72),(72,98)]: dim(ax,a,0,b,0,-18.5+4.5,None,5.5) if False else None
    dim(ax,10,83,98,83,8.5,None,7)
    for a,b in [(10,20),(20,36),(36,50),(50,72),(72,86),(86,98)]: dim(ax,a,83,b,83,4.5,f"{ftin(b-a)}",5.5)
    dim(ax,-22,0,-22,83,-9.5,"83'  (25.30 m)",7,horiz=False)
    for a,b in [(0,22),(22,55),(55,79),(79,83)]: dim(ax,-22,a,-22,b,-6,f"{ftin(b-a)}",5.5,horiz=False)
    dim(ax,-22,18,-4,18,2.2,"18'  (5.49 m)",5.2)
    dim(ax,98,14,98,59,9,None,6,horiz=False)
    scalebar(ax,80,-14.5); north(ax,106,-6)
    # side panel
    sx=0.75
    fig.text(sx,0.95,"Weberman Residence: Spatial Study",fontsize=17,family=SERIF,color=INK)
    fig.text(sx,0.925,"FLOOR PLAN  ·  SINGLE LEVEL  ·  SCALE AS NOTED",fontsize=8,color=OLIVE,weight='bold')
    y=0.89
    wings=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"]
    for w in wings:
        rs=[r for r in rooms if r['wing']==w]
        fig.text(sx,y,w.upper(),fontsize=7.5,weight='bold',color=OLIVE); 
        tot=sum(r['area'] for r in rs if r['cond']); tot=int(tot) if tot==int(tot) else tot; fig.text(0.975,y,f"{tot:,} SF",fontsize=7.5,weight='bold',color=OLIVE,ha='right'); y-=0.016
        for r in rs:
            fig.text(sx,y,r['id'],fontsize=6.5,color=TERRA); fig.text(sx+0.022,y,r['name']+("" if r['cond'] else " (uncond.)"),fontsize=6.5,color=INK)
            fig.text(0.975,y,f"{r['area']} SF / {r['area']*SF2M2:.1f} m²",fontsize=6.5,ha='right',color=INK if r['cond'] else MUTED); y-=0.0135
        y-=0.008
    fig.text(sx,y,"COVERED OUTDOOR (NOT CONDITIONED)",fontsize=7.5,weight='bold',color=OLIVE); fig.text(0.975,y,f"{sum(c['area'] for c in COVERED):,} SF",fontsize=7.5,weight='bold',color=OLIVE,ha='right'); y-=0.016
    for cv in COVERED:
        fig.text(sx,y,cv['id'],fontsize=6.5,color=TERRA); fig.text(sx+0.022,y,cv['name'],fontsize=6.5,color=INK); fig.text(0.975,y,f"{cv['area']} SF / {cv['area']*SF2M2:.1f} m²",fontsize=6.5,ha='right',color=MUTED); y-=0.0135
    y-=0.008
    t=total_conditioned()
    fig.add_artist(Rectangle((sx-0.005,y-0.035),0.235,0.04,transform=fig.transFigure,fc="#e0e6d5",ec="none"))
    fig.text(sx,y-0.02,"TOTAL CONDITIONED",fontsize=8,weight='bold',color=OLIVE)
    fig.text(0.975,y-0.02,f"{t:,} SF · {t*SF2M2:,.0f} m²",fontsize=8,weight='bold',color=OLIVE,ha='right')
    y-=0.06
    notes=["Areas measured to wall centerlines.","Total includes 208 SF of kids' bunk + play lofts (2 × 8' × 13', over 207 + 209).","Footprint 104' × 88' (31.7 × 26.8 m) around a 36' × 28' courtyard.",
           "Ceilings: living 12' butterfly with clerestory, office 14',","bedrooms 10-11', sauna/steam 8'.",
           "Glass shown in blue: pocketing sliders to the courtyard.","Not for construction. Concept study for discussion."]
    for n in notes: fig.text(sx,y,n,fontsize=6.3,color=MUTED); y-=0.013
    fig.savefig(path,facecolor=PAPER); plt.close(fig)

def site_plan(path):
    L=SITE['lot']
    fig=plt.figure(figsize=(17,12.5),dpi=200); fig.patch.set_facecolor(PAPER)
    ax=fig.add_axes([0.03,0.04,0.70,0.88]); ax.set_xlim(L['x0']-14,L['x1']+10); ax.set_ylim(L['y0']-16,L['y1']+10); ax.set_aspect('equal'); ax.axis('off')
    # contours (rising to north)
    random.seed(3)
    for k,yb in enumerate(range(-120,260,12)):
        xs=[L['x0']+i*2 for i in range(int((L['x1']-L['x0'])/2)+1)]
        ys=[yb+10*math.sin((x+40)/70)+6*math.sin(x/31+k) for x in xs]
        pts=[(x,y) for x,y in zip(xs,ys) if L['y0']<=y<=L['y1'] and not (-6<x<104 and -6<y<92)]
        # draw in runs
        run=[]
        for x,y in zip(xs,ys):
            inside = L['y0']<=y<=L['y1'] and not (-8<x<106 and -30<y<106) 
            if inside: run.append((x,y))
            else:
                if len(run)>1: ax.plot(*zip(*run),color="#cfc9b6",lw=0.5 if k%5 else 0.9,zorder=0.2)
                run=[]
        if len(run)>1: ax.plot(*zip(*run),color="#cfc9b6",lw=0.5 if k%5 else 0.9,zorder=0.2)
    ax.add_patch(Rectangle((L['x0'],L['y0']),L['x1']-L['x0'],L['y1']-L['y0'],fc="none",ec=INK,lw=1.2,ls=(0,(8,3,2,3)),zorder=5))
    # meadow dots
    for i in range(1400):
        x=random.uniform(L['x0']+2,L['x1']-2); y=random.uniform(L['y0']+2,L['y1']-2)
        if -50<x<112 and -32<y<112: continue
        ax.plot(x,y,'.',ms=1.2,color=random.choice(["#c9b45f","#b98aa6","#9fb07a","#d39a6a"]),zorder=0.3)
    for i in range(60):
        x=random.uniform(L['x0'],L['x1']); y=random.uniform(110,L['y1'])
        if random.random()<0.6: ax.add_patch(Circle((x,y),random.uniform(3,6),fc="#b6c19a",ec="#8b9a6b",lw=0.4,alpha=0.8,zorder=0.4))
    for (tx,ty) in [(-70,-50),(-60,100),(140,120),(150,-50),(130,40),(-80,60),(155,90)]:
        ax.add_patch(Circle((tx,ty),7,fc="#b6c19a",ec="#8b9a6b",lw=0.5,zorder=0.4))
    # drive + motor court
    ax.add_patch(Polygon([(-90,4),(-60,10),(-44,24),(-44,58),(-20,58),(-20,26),(18,26),(18,24),(-16,22),(-46,16),(-62,0),(-90,-6)],fc="#e3ddd0",ec="#b3ab98",lw=0.6,zorder=0.6))
    ax.text(-80,4,"GRAVEL DRIVE FROM ROAD",fontsize=8.0,color=MUTED,rotation=12,zorder=7)
    climb_art(ax,labels=False)
    ax.annotate("CLIMBING PAVILION\n18' × 18' open-air · 12' wall",(-13,9),(-78,-22),fontsize=7.3,ha='center',arrowprops=dict(arrowstyle='-',lw=0.5),zorder=7)
    c=SITE['carport']; ax.add_patch(Rectangle((c['x0'],c['y0']),c['x1']-c['x0'],c['y1']-c['y0'],fc="#d6d0c3",ec=INK,lw=0.8,zorder=1))
    ax.text((c['x0']+c['x1'])/2,(c['y0']+c['y1'])/2,"CARPORT\n2 cars · 24' × 24'",ha='center',va='center',fontsize=8.0,zorder=7)
    ax.add_patch(Rectangle((-20,26),38,29,fc="#ddd5c6",ec="none",zorder=0.7)); ax.text(-5,36,"STONE\nENTRY\nCOURT",ha='center',va='center',fontsize=8.0,color=MUTED,zorder=7)
    # house: roofs + footprint
    for r in ROOFS:
        oh=r['oh']; ax.add_patch(Rectangle((r['x0']-oh['w'],r['y0']-oh['s']),r['x1']-r['x0']+oh['w']+oh['e'],r['y1']-r['y0']+oh['s']+oh['n'],fc="#d9d6cf",ec="#77756d",lw=0.5,zorder=2))
    for rm in rooms:
        ax.add_patch(Rectangle((rm['x0'],rm['y0']),rm['w'],rm['d'],fc="#5a5850" if rm['cond'] else "#8a877e",ec="#5a5850",lw=0.3,alpha=0.25,zorder=2.5))
    cy=COURTYARD; ax.add_patch(Rectangle((cy['x0']+6,cy['y0']+5),cy['x1']-cy['x0']-12,cy['y1']-cy['y0']-11,fc="#efeadf",ec="#77756d",lw=0.5,zorder=3))
    ax.text(54,41,"COURTYARD",ha='center',fontsize=9.4,weight='bold',color=OLIVE,zorder=7,family=SERIF)
    for name,(x,y) in {"LIVING PAVILION":(41,67),"SLEEPING WING":(91,37),"WELLNESS + GYM":(50,12),"ISOLATED STUDIO":(16,10),"STUDIO + ARRIVAL":(24,40),"MASTER":(85,72)}.items():
        ax.text(x,y,name,ha='center',va='center',fontsize=7.5,weight='bold',color=INK,zorder=7,rotation=90 if name in("SLEEPING WING","STUDIO + ARRIVAL") else 0)
    # outdoor program
    s=SITE
    d=s['pooldeck']; ax.add_patch(Rectangle((d['x0'],d['y0']),d['x1']-d['x0'],d['y1']-d['y0'],fc="#e6e0d2",ec="#b3ab98",lw=0.5,zorder=1))
    p=s['pool']; ax.add_patch(Rectangle((p['x0'],p['y0']),p['x1']-p['x0'],p['y1']-p['y0'],fc="#a9d1c6",ec="#3f7a6e",lw=0.8,zorder=1.2))
    ax.text(71,-16,"SALTWATER POOL\n34' × 12' (10.4 × 3.7 m)",ha='center',va='center',fontsize=8.0,color="#2e6b80",zorder=7)
    ba=s['bale']; ax.add_patch(Rectangle((ba['x0']-3,ba['y0']-3),ba['x1']-ba['x0']+6,ba['y1']-ba['y0']+6,fc="#d6d0c3",ec=INK,lw=0.6,zorder=1.3)); ax.text((ba['x0']+ba['x1'])/2,ba['y0']-6,"BALE",ha='center',fontsize=6.5,zorder=7)
    for (ox,oy) in s['orchard']: ax.add_patch(Circle((ox,oy),3.2,fc="#a9bb84",ec="#6f8550",lw=0.5,zorder=1.3))
    ax.text(-46,98,"FRUIT TREES",ha='center',fontsize=6.5,zorder=7)
    wk=s['walkway']; ax.add_patch(Rectangle((wk['x0'],wk['y0']),wk['x1']-wk['x0'],wk['y1']-wk['y0'],fc="#2e2c29",ec=INK,lw=0.5,alpha=0.85,zorder=1.35))
    l=s['lane']; ax.add_patch(Rectangle((l['x0'],l['y0']),l['x1']-l['x0'],l['y1']-l['y0'],fc="#a9c27c",ec="#6f8a45",lw=0.6,zorder=1.2))
    for i in range(0,21,5):
        x=l['x0']+i*3; ax.plot([x,x],[l['y0'],l['y1']],color="white",lw=0.8,zorder=1.3); ax.text(x,l['y0']-2.4,f"{i}",ha='center',fontsize=6.5,color="#4e5f2f",zorder=7)
    ax.text((l['x0']+l['x1'])/2,l['y0']-5.5,"TURF SPRINT LANE · 20 YD (60' / 18.3 m) + 15' RUN-OUT · 8' WIDE",ha='center',fontsize=7.5,color="#4e5f2f",zorder=7)
    o=s['outdoor_shower']; ax.add_patch(Rectangle((o['x0'],o['y0']),o['x1']-o['x0'],o['y1']-o['y0'],fc="#dfe9ec",ec=INK,lw=0.5,zorder=3.5))
    ax.annotate("OUTDOOR SHOWER",(75,4),(80,-5),fontsize=7.2,arrowprops=dict(arrowstyle='-',lw=0.4,color=INK),zorder=7)
    v=s['veg']; ax.add_patch(Rectangle((v['x0'],v['y0']),v['x1']-v['x0'],v['y1']-v['y0'],fc="#ece4cf",ec="#a39a86",lw=0.5,zorder=1))
    for i in range(4): ax.add_patch(Rectangle((v['x0']+1.5+i*5.8,v['y0']+2),4,18,fc="#b7a27a",ec="#7d6c4c",lw=0.4,zorder=1.2))
    ax.text((v['x0']+v['x1'])/2,v['y1']+2.5,"VEGETABLE GARDEN\n4 raised beds 4' × 18'",ha='center',fontsize=7.5,zorder=7)
    b=s['bikes']; ax.add_patch(Rectangle((b['x0'],b['y0']),b['x1']-b['x0'],b['y1']-b['y0'],fc="#c9c2b4",ec=INK,lw=0.5,zorder=3))
    ax.annotate("BIKE RACKS (6)",(5,64),(-40,60),fontsize=7.2,arrowprops=dict(arrowstyle='-',lw=0.4),zorder=7)
    pg=s['pergola']; ax.add_patch(Rectangle((pg['x0'],pg['y0']),pg['x1']-pg['x0'],pg['y1']-pg['y0'],fc="none",ec=INK,lw=0.6,ls=(0,(3,1.5)),zorder=3))
    ax.text(28,96.8,"PERGOLA DINING",ha='center',fontsize=7.2,zorder=7)
    f=s['firepit']; ax.add_patch(Circle((f['cx'],f['cy']),f['r'],fc="#d8cfbf",ec=INK,lw=0.6,zorder=3)); ax.add_patch(Circle((f['cx'],f['cy']),1.6,fc="#a3613d",ec="none",zorder=3.1))
    ax.text(f['cx']+9,f['cy'],"ROUND STONE FIRE PIT\n14' dia.",fontsize=7.2,va='center',zorder=7)
    ax.text(54,89.3,"COVERED VERANDA",ha='center',fontsize=7.0,zorder=7)
    ax.text(104,77,"BATH\nGARDEN",fontsize=6.4,ha='left',zorder=7)
    # service lane, utility yard, drain field, well
    sv=s['service']
    for (ax_,ay_),(bx_,by_) in zip(sv[:-1],sv[1:]): ax.add_patch(Rectangle((min(ax_,bx_)-5,min(ay_,by_)-5),abs(bx_-ax_)+10,abs(by_-ay_)+10,fc="#e3ddd0",ec="none",zorder=0.55))
    ax.text(30,-41.5,"GRAVEL SERVICE LANE FROM DRIVE (12')",ha='center',fontsize=6.4,color=MUTED,zorder=7)
    u=s['util']; ax.add_patch(Rectangle((u['x0'],u['y0']),u['x1']-u['x0'],u['y1']-u['y0'],fc="#e7e2d6",ec="#2b2a27",lw=1.6,zorder=1.5))
    ax.add_patch(Rectangle((u['gate'][0],u['y0']-0.8),u['gate'][1]-u['gate'][0],1.6,fc="#e7e2d6",ec="none",zorder=1.55))
    for (tx,ty,tr) in s['tanks']: ax.add_patch(Circle((tx,ty),tr,fc="#9aa892",ec=INK,lw=0.5,zorder=1.6))
    ax.text(111.5,18,"T1  T2",ha='center',va='center',fontsize=5.6,zorder=7)
    for k,n in [('watertreat','W'),('atu','S'),('power','G')]:
        q=s[k]; ax.add_patch(Rectangle((q['x0'],q['y0']),q['x1']-q['x0'],q['y1']-q['y0'],fc="#d6d0c3",ec=INK,lw=0.5,zorder=1.6)); ax.text((q['x0']+q['x1'])/2,(q['y0']+q['y1'])/2,n,ha='center',va='center',fontsize=5.6,zorder=7)
    for (cx_,cy_) in s['condensers']: ax.add_patch(Rectangle((cx_,cy_),3,3,fc="#cfccc4",ec=INK,lw=0.4,zorder=1.6))
    ax.text(120.5,13.3,"AC",ha='center',fontsize=5,zorder=7)
    ax.text(125,-10.5,"UTILITY YARD 36' × 30'\nCHARRED-TIMBER SCREEN + GATE",ha='left',va='top',fontsize=6.0,weight='bold',zorder=7)
    ax.text(137.5,9,"T1-T2 RAINWATER TANKS (2 × 5,000 GAL)\nW  PUMP · SEDIMENT + CARBON · UV · SOFTENER\nS  SEPTIC + AEROBIC TREATMENT (BURIED)\nG  GENERATOR + BATTERY PAD\nAC HVAC CONDENSERS (3)\nPOOL PUMP + SALT CELL IN ROOM 211",fontsize=4.6,va='center',zorder=7,linespacing=1.35)
    df=s['drainfield']; ax.add_patch(Rectangle((df['x0'],df['y0']),df['x1']-df['x0'],df['y1']-df['y0'],fc="none",ec="#6f8550",lw=0.7,ls=(0,(4,2)),zorder=1.2))
    for yy in range(int(df['y0'])+3,int(df['y1']),5): ax.plot([df['x0']+2,df['x1']-2],[yy,yy],color="#8a9c66",lw=0.5,zorder=1.25)
    ax.text((df['x0']+df['x1'])/2,df['y0']-4,"DRAIN FIELD (SIZE TO PERC TEST)",ha='center',fontsize=6.2,zorder=7)
    wl=s['well']; ax.add_patch(Circle((wl['cx'],wl['cy']),2.2,fc="#7d7a70",ec=INK,lw=0.6,zorder=3)); ax.text(wl['cx']+4,wl['cy'],"WELL (150'+ FROM DRAIN FIELD)",fontsize=6.2,va='center',zorder=7)
    ax.text(100,-34,"WILDFLOWER MEADOW",fontsize=11.6,color="#7a6a3a",family=SERIF,zorder=7)
    ax.text(-80,-50,"WILDFLOWER MEADOW",fontsize=11.6,color="#7a6a3a",family=SERIF,zorder=7)
    ax.text(40,135,"Mountain View (North)",fontsize=14.5,color=OLIVE,family=SERIF,ha='center',zorder=7)
    ax.text(40,129,"Aspen + pine edge · ground rises gently to the north",fontsize=8.0,color=MUTED,ha='center',zorder=7)
    # dims
    def d2(x0,y0,x1,y1,off,txt,h=True,fs=5.5): dim(ax,x0,y0,x1,y1,off,txt,fs,h)
    d2(L['x0'],L['y0'],L['x1'],L['y0'],-7,f"LOT 260' (79.2 m)",True,9.1)
    d2(L['x1'],L['y0'],L['x1'],L['y1'],5,f"230' (70.1 m) · 1.37 AC (0.56 ha)",False,9.1)
    d2(-2,-8,98,-8,-28,"HOUSE 98' × 88' (29.9 × 26.8 m)",True,5.5) if False else None
    d2(L['x0'],50,-44,50,0,"46' (14.0 m)",True,7.0)
    d2(98,30,L['x1'],30,0,"72' (21.9 m)",True,7.0)
    d2(40,88,40,L['y1'],0,"62' (18.9 m) to north line",False,7.0)
    d2(10,-16,10,L['y0'],0,"64' (19.5 m)",False,7.0)
    scalebar(ax,-58,-72,8,step=20,mstep=5); 
    # scale bar bigger: 50 ft
    north(ax,160,-55,5)
    sx=0.75
    fig.text(sx,0.95,"Weberman Residence: Spatial Study",fontsize=17,family=SERIF,color=INK)
    fig.text(sx,0.925,"SITE PLAN  ·  MOUNTAIN PARCEL (ASSUMED)",fontsize=8,color=OLIVE,weight='bold')
    y=0.885
    items=[("Lot (assumed)","260' × 230' · 1.37 ac · 0.56 ha"),("House footprint","94' × 83' · 28.7 × 25.3 m"),
           ("Conditioned area",f"{total_conditioned():,} SF · {total_conditioned()*SF2M2:,.0f} m²"),
           ("Courtyard","36' × 28' · 11.0 × 8.5 m"),("Pool","34' × 12' · 10.4 × 3.7 m, 4'-5' deep"),
           ("Turf sprint lane","75' × 8' · 22.9 × 2.4 m (20 yd + run-out)"),("Vegetable garden","24' × 22' · 4 raised beds"),
           ("Carport","24' × 24' open · decided, no change"),("Fire pit","Round stone, 14' dia., north terrace"),
           ("Pergola dining","18' × 14' off the kitchen"),("Bike racks","6 at mudroom door + 4 at climbing pavilion"),("Climbing pavilion","18' × 18' · 12' wall · 17' roof · soft-fall · not conditioned"),
           ("Outdoor showers","By the pool + in the courtyard, charred-timber walls"),("Saltwater pool + bale","Salt cell (3-5 yr), sealed flagstone, 316 fittings"),
           ("Utility yard","36' × 30' screened · tanks, treatment, ATU, power, AC"),("Wastewater","Drain field S meadow · well up-slope NE"),]
    for k,v in items:
        fig.text(sx,y,k.upper(),fontsize=6.5,weight='bold',color=OLIVE); fig.text(sx,y-0.013,v,fontsize=7,color=INK); y-=0.034
    y-=0.01
    for n in ["Orientation: the living pavilion and master suite face north to the","mountains; the pool, gym and sprint lane get the sun on the south.",
              "The wildflower meadow wraps the house; aspen and pine screen the edges.","Lot, grades and setbacks are assumed. Verify with a survey."]:
        fig.text(sx,y,n,fontsize=6.3,color=MUTED); y-=0.013
    fig.savefig(path,facecolor=PAPER); plt.close(fig)

if __name__=="__main__":
    import os
    os.makedirs("../out",exist_ok=True)
    floor_plan("../out/Floor_Plan.png")
    floor_plan("../out/plan_overlay.png",overlay=True)
    site_plan("../out/Site_Plan.png")
    print("ok")
