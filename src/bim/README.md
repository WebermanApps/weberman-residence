# BIM Layers Module (Integration Note)

One shared model drives the 2D Design Development sheets and the 3D layers.

- Source of truth: `design/plan.json` (rooms, walls, openings, roofs, site).
- `../bim/model.py` (+ `extras.py`, `farm.py`) derives `bim.json`: about 1,450 elements in 12 layers
  (Architecture, Structure, Framing, Roof, Electrical, Plumbing, HVAC, Site Utilities, Water + Rainwater, Solar, Controls, Landscape + Farm).
- `../bim/sheets.py` (+ `sheets_extra.py`) renders the sheets as SVG + vector PDF and the combined set.
- `../bim/build.sh` regenerates everything and copies `bim.json` -> `public/bim/` and the sheets -> `public/sheets/`.

Viewer integration is a single line in `index.html`, after main.js:
`<script type="module" src="/src/bim/layers.js"></script>`

`layers.js` only uses `window.app` (scene, camera, renderer, state, setRoof). It does not edit main.js, build.js or style.css.
It adds the Systems button, the Layers panel (toggle + View Sheet + PDF per layer), and click-to-inspect.
Clicks are only intercepted when a system layer is on or the panel is open. Otherwise room select and zoom work as before.
Deep links: `?layers=struct,elec&arch=0&panel=1`.
