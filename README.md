# Weberman Residence: Spatial Study

An interactive, drawing-referenced 3D model of a single-level mountain courtyard house. 

**Live:** https://webermanapps.github.io/weberman-residence/

## The House
- 6,334 SF conditioned (588 m², under the 6,400 SF cap; includes 208 SF of kids' bunk/play lofts; the isolated studio is 616 SF gross, about 505 SF net). Footprint 104' × 88'. The courtyard stays 36' × 28'.
- Four low pavilions under deep 6 to 8 ft eaves wrap a central courtyard and are linked by a glazed engawa:
  - **Living Pavilion** (north, facing the mountains): kitchen with a marble island, walk-in pantry, dining, and flat-floor living under a butterfly roof.
  - **Sleeping Wing** (east): the master suite with a hinoki soaking tub, two grow-into-teen kids' rooms (kids only) with bunk/play lofts and small walk-in closets, a two-sink Jack-and-Jill bath, one kids' entry with lockers, a shared study nook, laundry and linen/mechanical.
  - **Wellness + Gym Wing** (south, on the pool): enlarged exercise room (storage wall + rig), sauna, steam room, enlarged wet room with a cold plunge and recovery corner, and changing room with pool access.
  - **Studio + Arrival** (west): the entry genkan, a full guest suite (bedroom, bath, closet) off the genkan, powder room, tea + reading room (tatami, takes a guest futon), and the enlarged isolated studio / office behind a sound lock.
- Outdoors: an open-air **Climbing Pavilion** (18' × 18', 324 SF covered, not conditioned) with a kids' bouldering wall over soft-fall, next to the gym, sprint lane and a second bike rack; a 34' × 12' pool, a 20-yard turf sprint lane, an outdoor shower, a vegetable garden, bike racks, pergola dining, a sunken fire pit, and a carport.

## Finishes
- White smooth drywall by default, with pale plaster accents (entry gallery, fireplace, master headwall, gym); framed art provides the color.
- Tea + tatami room is traditional and warm, not white.
- Office / music room is white-based with acoustic panels.
- Kitchen, living and dining share one continuous large pale tile floor.
- 3D model last updated Nov 3, 2026 (commit 0bdeff1).

## The App
Vite and Three.js. Features: orbit, pan and zoom (with touch support), preset views (Aerial, Courtyard, Living, Office, Wellness, Climbing, Master), a roof toggle, floating room labels, a plan view with the 2D drawing overlaid on a 3D section cut, a click-a-room info panel, a walk-through mode, daylight and evening lighting, cutaway walls with a section-height slider, and image capture.

```
npm install
npm run dev      # local dev
npm run build    # builds to docs/ (served by GitHub Pages)
```

`design/design.py` is the single source of truth for rooms, walls, openings, furniture, roofs and site. It writes `src/plan.json`. `design/draw.py` renders the to-scale floor plan, the site plan and the plan overlay.

Concept study only. Not for construction.
