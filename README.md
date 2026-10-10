# Weberman Residence: Spatial Study

An interactive, drawing-referenced 3D model of a single-level mountain courtyard house designed for Max Weberman. The approach follows the [Agnes spatial study](https://maxweberman.com/agnes).

**Live:** https://webermanapps.github.io/weberman-residence/

## The House
- 5,952 SF conditioned (553 m²), all on one level. Footprint 98' × 88'. The courtyard is 44' × 33'.
- Four low pavilions under deep 6 to 8 ft eaves wrap a central courtyard and are linked by a glazed engawa:
  - **Living Pavilion** (north, facing the mountains): kitchen with a marble island, walk-in pantry, dining, and living with a sunken conversation pit under a butterfly roof.
  - **Sleeping Wing** (east): the master suite with a hinoki soaking tub, two kids' rooms sharing a Jack-and-Jill bath (Kids' Room 2 doubles as the guest room), a guest / pool bath, and laundry.
  - **Wellness + Gym Wing** (south, on the pool): exercise room (storage wall + rig), sauna, hammam, wet room with a cold plunge, and changing room.
  - **Studio + Arrival** (west): the entry genkan, powder room, tatami room, and the office / music loft.
- Outdoors: an open-air **Climbing Pavilion** (18' × 18', 324 SF covered, not conditioned) with a kids' bouldering wall over soft-fall, next to the gym, sprint lane and a second bike rack; a 34' × 12' pool, a 20-yard turf sprint lane, an outdoor shower, a vegetable garden, bike racks, pergola dining, a sunken fire pit, and a carport.

## The App
Vite and Three.js. Features: orbit, pan and zoom (with touch support), preset views (Aerial, Courtyard, Living, Office, Wellness, Climbing, Master), a roof toggle, floating room labels, a plan view with the 2D drawing overlaid on a 3D section cut, a click-a-room info panel, a walk-through mode, daylight and evening lighting, cutaway walls with a section-height slider, and image capture.

```
npm install
npm run dev      # local dev
npm run build    # builds to docs/ (served by GitHub Pages)
```

`design/design.py` is the single source of truth for rooms, walls, openings, furniture, roofs and site. It writes `src/plan.json`. `design/draw.py` renders the to-scale floor plan, the site plan and the plan overlay.

Concept study only. Not for construction.
