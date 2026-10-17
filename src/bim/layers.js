// BIM Layers module for the Weberman Residence viewer.
// Reads ./bim/bim.json (generated from the same plan.json as the 2D sheets) and adds:
// a Layers panel (8 system layers, each with a View Sheet link) and click-to-inspect properties.
// Self-contained: it only uses window.app (scene, camera, renderer, setRoof) exposed by main.js.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import './brand-tokens.css';
import './layers.css';

const CX = 49, CY = 44;
const W = (x, y, z = 0) => new THREE.Vector3(x - CX, z, -(y - CY));
const COLORS = {
  arch: { _: 0xd6c7a8 },
  struct: { footing: 0x8d8f93, column: 0xa7a9ad, beam: 0xb9bbbf, slab: 0xcfd1d4, pool: 0x9fb6bf, _: 0xb0b2b6 },
  framing: { wall: 0xe4dccb, lintel: 0x9da0a5, _: 0xd9d2c3 },
  roof: { rafter: 0x4f5864, purlin: 0x9aa3ad, trimmer: 0x2f343b, _: 0x6b7480 },
  elec: { panel: 0x171717, outlet: 0xd99a00, light: 0xf2c94c, equip: 0xb7791f, homerun: 0xe0b341, feeder: 0x8a5a00, data: 0x2563eb, lv: 0x1e3a8a, lvrun: 0x60a5fa, ap: 0x3b82f6, solar: 0x1f2a44, _: 0xd99a00 },
  plumb: { fixture: 0xf5f5f5, main: 0x2f6fdf, branch: 0x5b8def, drain: 0x7a5a32, vent: 0x8f8f8f, rain: 0x1f9e8f, pool: 0x0ea5c6, poolpipe: 0x22b8d6, equip: 0x6b7280, _: 0x2f6fdf },
  hvac: { indoor: 0xf0f0f0, outdoor: 0xc7c9cc, lineset: 0xb87333, duct: 0x9aa5b1, diffuser: 0xdfe3e8, exhaust: 0x7a8691, erv: 0x8b95a1, sauna: 0xc2410c, steam: 0x94a3b8, dehum: 0x7c8794, _: 0x9aa5b1 },
  solar: { module: 0x1f2a44, inverter: 0x171717, battery: 0x3f3f46, enclosure: 0x9ca3af, dc: 0xe11d48, _: 0x1f2a44 },
  water: { tank: 0x3f5f3f, zone: 0x16a34a, ff: 0x0f766e, pump: 0x0e7490, treat: 0x0284c7, well: 0x2f6fdf, pipe: 0x0ea5e9, mains: 0x7c3aed, shed: 0xa8a29e, _: 0x0ea5e9 },
  ctrl: { device: 0x7c3aed, link: 0xa78bfa, leak: 0xdb2777, _: 0x7c3aed },
  farm: { coop: 0x8b5e34, run: 0xa3a3a3, bed: 0x6b4f2a, compost: 0x5b4636, greywater: 0x7c3aed, nook: 0xbfe3d0, rack: 0x16a34a, hvac: 0xe5e5e5, sensor: 0x7c3aed, equip: 0x737373, pipe: 0x7c3aed, _: 0x4d7c0f },
  site: { tank: 0x3f5f3f, equip: 0x7a7f86, pad: 0xbdbdbd, well: 0x2f6fdf, pipe: 0x4b5563, _: 0x7a7f86 },
};
const HOT = 0xd64545;
const LABEL = { arch: 'Architecture', struct: 'Structure', framing: 'Framing', roof: 'Roof', elec: 'Electrical', plumb: 'Plumbing', hvac: 'HVAC', site: 'Site Utilities', water: 'Water + Rainwater', solar: 'Solar', ctrl: 'Controls', farm: 'Landscape + Farm' };
const ARCH_GROUPS = ['walls', 'glass', 'floors', 'furn', 'detail'];

function prim(g) {
  const k = g[0];
  if (k === 'b') {
    const [, x0, y0, z0, x1, y1, z1] = g;
    const geo = new THREE.BoxGeometry(Math.max(0.05, x1 - x0), Math.max(0.05, z1 - z0), Math.max(0.05, y1 - y0));
    const c = W((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); geo.translate(c.x, c.y, c.z); return [geo];
  }
  if (k === 's') {
    const [, x0, y0, z0, x1, y1, z1, w, h] = g; const a = W(x0, y0, z0), b = W(x1, y1, z1);
    const L = a.distanceTo(b); const geo = new THREE.BoxGeometry(w, h, L);
    const o = new THREE.Object3D(); o.position.copy(a).add(b).multiplyScalar(0.5); o.lookAt(b); o.updateMatrix(); geo.applyMatrix4(o.matrix); return [geo];
  }
  if (k === 'c') {
    const [, cx, cy, r, z0, z1] = g; const geo = new THREE.CylinderGeometry(r, r, Math.max(0.05, z1 - z0), 20);
    const c = W(cx, cy, (z0 + z1) / 2); geo.translate(c.x, c.y, c.z); return [geo];
  }
  if (k === 'p') {
    const [, pts, d] = g; const r = Math.max(0.07, d / 2); const out = [];
    for (let i = 1; i < pts.length; i++) {
      const a = W(...pts[i - 1]), b = W(...pts[i]); const L = a.distanceTo(b); if (L < 1e-3) continue;
      const geo = new THREE.CylinderGeometry(r, r, L, 8, 1, false);
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
      geo.applyQuaternion(q); const m = a.clone().add(b).multiplyScalar(0.5); geo.translate(m.x, m.y, m.z); out.push(geo);
      if (i < pts.length - 1) { const s = new THREE.SphereGeometry(r, 8, 6); s.translate(b.x, b.y, b.z); out.push(s); }
    }
    return out;
  }
  return [];
}
function norm(geos) { return geos.map(g => { const n = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(n.attributes)) if (!['position', 'normal'].includes(k)) n.deleteAttribute(k); return n; }); }

function boot(app) {
  const BASE = './';
  fetch(BASE + 'bim/bim.json').then(r => r.json()).then(M => init(app, M)).catch(err => console.warn('BIM layers unavailable', err));
}
function init(app, M) {
  const { scene, renderer } = app;
  const host = renderer.domElement.parentElement; const shell = host.parentElement;
  const root = new THREE.Group(); root.name = 'bim'; scene.add(root);
  const layerGroups = {}; const mats = {}; const pickables = [];
  const roomName = M.rooms || {};
  for (const L of M.layers) { const g = new THREE.Group(); g.name = 'bim-' + L.id; g.visible = false; root.add(g); layerGroups[L.id] = g; }
  const matFor = (e) => {
    let col = (COLORS[e.layer] || {})[e.cat] ?? (COLORS[e.layer] || {})._ ?? 0x888888;
    if (/Hot Water/.test(e.system)) col = HOT;
    const key = e.layer + col;
    if (!mats[key]) mats[key] = new THREE.MeshStandardMaterial({ color: col, roughness: 0.75, metalness: e.layer === 'roof' ? 0.35 : 0.05 });
    return mats[key];
  };
  const pickMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
  for (const e of M.elements) {
    if (!e.g || !e.g.length) continue;
    const geos = norm(e.g.flatMap(prim)); if (!geos.length) continue;
    const geo = geos.length === 1 ? geos[0] : mergeGeometries(geos, false);
    const mesh = new THREE.Mesh(geo, e.layer === 'arch' ? pickMat : matFor(e));
    mesh.userData.bim = e; mesh.castShadow = e.layer !== 'arch'; mesh.receiveShadow = false;
    layerGroups[e.layer].add(mesh); pickables.push(mesh);
  }
  // architecture layer = the viewer's existing geometry; doors + windows get invisible pick boxes
  const archGroups = ARCH_GROUPS.map(n => scene.getObjectByName(n)).filter(Boolean);
  layerGroups.arch.visible = true;
  const state = Object.fromEntries(M.layers.map(l => [l.id, l.id === 'arch']));
  const counts = {}; for (const e of M.elements) counts[e.layer] = (counts[e.layer] || 0) + 1;
  const sheetOf = Object.fromEntries(M.layers.map(l => [l.id, l.sheet]));

  // ---------- UI ----------
  const btn = document.createElement('button'); btn.className = 'bim-btn mw-hover'; btn.id = 'bim-btn'; btn.type = 'button';
  btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'bim-panel'); btn.title = 'Building Systems Layers';
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg><span>Systems</span>';
  const ctrls = shell.querySelector('.right-ctrls'); (ctrls || shell).appendChild(btn);
  const panel = document.createElement('section'); panel.className = 'bim-panel'; panel.id = 'bim-panel'; panel.hidden = true; panel.setAttribute('aria-label', 'Layers');
  const sw = (id) => '#' + ((COLORS[id][Object.keys(COLORS[id])[0]] ?? 0x888888).toString(16).padStart(6, '0'));
  panel.innerHTML = `<div class="bim-head"><div><h2>Layers</h2><p class="bim-sub">One shared model drives the 3D view and the Design Development sheets. Tap an element for its properties.</p></div><button class="bim-x mw-hover" type="button" aria-label="Close layers">×</button></div>` +
    M.layers.map(l => `<div class="bim-row"><label class="bim-tg mw-hover" title="${l.desc}"><span class="bim-sw" style="background:${sw(l.id)}"></span><span class="bim-name">${l.name} <span class="bim-n">${counts[l.id] || 0}</span></span><input type="checkbox" data-layer="${l.id}" ${state[l.id] ? 'checked' : ''} aria-label="Show ${l.name}"><i></i></label>` +
      `<a class="bim-link mw-hover" href="#" data-sheet-view="${l.sheet}" data-sheet="${l.sheet}" aria-label="View Sheet ${l.sheet} (${l.name})">View Sheet</a><a class="bim-link pdf mw-hover" href="https://webermanapps.github.io/blueprint-dashboard/#mw-projects" target="_blank" rel="noopener" aria-label="${l.sheet} PDF">PDF</a></div>`).join('') +
    `<div class="bim-foot"><a class="bim-link primary mw-hover" href="https://webermanapps.github.io/blueprint-dashboard/#mw-projects" target="_blank" rel="noopener">Full Set (PDF)</a><button class="bim-link mw-hover" type="button" data-act="all">Show All Systems</button></div><p class="bim-note">Design Development, Not for Construction. Sizes are concept placeholders for a Thai engineer to verify.</p>`;
  shell.appendChild(panel);
  const props = document.createElement('div'); props.className = 'bim-props'; props.hidden = true; props.setAttribute('role', 'dialog'); props.setAttribute('aria-label', 'Element Properties'); shell.appendChild(props);

  const setOpen = (o) => { panel.hidden = !o; btn.setAttribute('aria-expanded', String(o)); };
  btn.addEventListener('click', () => setOpen(panel.hidden));
  panel.querySelector('.bim-x').addEventListener('click', () => setOpen(false));
  function apply() {
    for (const id in state) layerGroups[id].visible = state[id];
    for (const g of archGroups) g.visible = state.arch && (g.name !== 'furn' && g.name !== 'detail' ? true : app.state.furn !== false);
    if (app.setRoof) { if (!state.arch && app.state.roof) app.setRoof(false); else if (state.arch && !app.state.roof && apply._roofWas) app.setRoof(true); }
    apply._roofWas = app.state.roof || apply._roofWas;
    panel.querySelectorAll('input[data-layer]').forEach(i => i.checked = state[i.dataset.layer]);
    const url = new URL(location.href); const on = Object.keys(state).filter(k => state[k] && k !== 'arch');
    if (on.length) url.searchParams.set('layers', on.join(',')); else url.searchParams.delete('layers');
    if (!state.arch) url.searchParams.set('arch', '0'); else url.searchParams.delete('arch');
    history.replaceState(null, '', url);
    if (selBox && sel && !sel.parent.visible) clearSel();
  }
  apply._roofWas = app.state.roof;
  panel.addEventListener('change', (e) => { const id = e.target.dataset.layer; if (!id) return; state[id] = e.target.checked; apply(); });
  panel.querySelector('[data-act="all"]').addEventListener('click', () => { const any = Object.keys(state).some(k => k !== 'arch' && !state[k]); for (const k in state) if (k !== 'arch') state[k] = any; state.arch = !any; apply(); });

  // ---------- inspect ----------
  let sel = null, selBox = null;
  const selMat = new THREE.LineBasicMaterial({ color: 0x0a0a0a, depthTest: false, transparent: true });
  function clearSel() { if (selBox) { scene.remove(selBox); selBox.geometry.dispose(); } selBox = null; sel = null; props.hidden = true; }
  function show(mesh) {
    clearSel(); sel = mesh; const e = mesh.userData.bim;
    selBox = new THREE.BoxHelper(mesh, 0x0a0a0a); selBox.material = selMat; selBox.renderOrder = 20; scene.add(selBox);
    const room = e.room ? (roomName[e.room] ? `${roomName[e.room]} (${e.room})` : e.room) : (e.rooms ? e.rooms.map(r => roomName[r] || r).join(' / ') : '');
    const rows = [['Type', e.type], ['Size', e.size], ['System', e.system], e.tag && ['Mark', e.tag], e.circuit && ['Circuit', e.circuit], room && ['Location', room], e.grid && ['Grid', e.grid], e.spec && ['Build-Up', e.spec], e.standard && ['Standard', e.standard], e.wall_type && ['Wall Type', e.wall_type]].filter(Boolean);
    const sheet = sheetOf[e.layer];
    props.innerHTML = `<button class="bim-x mw-hover" type="button" aria-label="Close properties">×</button><div class="bim-k">${LABEL[e.layer]} · ${e.id}</div><h3>${esc(e.type)}</h3><dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(String(v))}</dd>`).join('')}</dl><a class="bim-link mw-hover" href="#" data-sheet-view="${sheet}">View Sheet ${sheet}</a>`;
    props.querySelector('.bim-x').addEventListener('click', clearSel); props.hidden = false;
  }
  const esc = (s) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const visibleChain = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
  const ray = new THREE.Raycaster(); let down = null;
  const cv = renderer.domElement;
  cv.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; }, true);
  cv.addEventListener('pointerup', (e) => {
    if (!down) return; const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y), dt = performance.now() - down.t; down = null;
    if (moved > 6 || dt > 600 || app.state.mode === 'walk') return;
    const anySystem = Object.keys(state).some(k => k !== 'arch' && state[k]);
    if (!anySystem && panel.hidden) return; // default behaviour (room select + zoom) untouched
    const r = cv.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), app.camera);
    const cands = pickables.filter(m => visibleChain(m) && (m.userData.bim.layer !== 'arch' || !panel.hidden));
    const occluders = []; for (const g of archGroups) if (visibleChain(g)) occluders.push(g);
    const hit = ray.intersectObjects([...cands, ...occluders], true).find(h => h.object.visible && (h.object.userData.bim || occluders.length));
    if (hit && hit.object.userData.bim) { e.stopImmediatePropagation(); show(hit.object); }
  }, true);
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') { if (!props.hidden) clearSel(); else if (!panel.hidden) setOpen(false); } });
  (function tick() { if (selBox && sel) selBox.update(); requestAnimationFrame(tick); })();

  // deep links: ?layers=struct,elec&arch=0&panel=1
  const qs = new URLSearchParams(location.search);
  if (qs.get('layers')) for (const k of qs.get('layers').split(',')) if (k in state) state[k] = true;
  if (qs.get('arch') === '0') state.arch = false;
  if (qs.get('layers') || qs.get('arch')) apply();
  if (qs.get('panel') === '1') setOpen(true);
  window.bim = { state, apply, setOpen, show, layerGroups, model: M, select: (id) => { const m = pickables.find(p => p.userData.bim.id === id); if (m) show(m); return !!m; } };
}
(function wait() { if (window.app && window.app.scene) boot(window.app); else setTimeout(wait, 50); })();

/* Sheet viewer (locked plan files, Oct 17 2026): View Sheet shows the encrypted sheet via enc_file_viewer.js (data-enc-img). */
(function(){if(window.__mwSheetView)return;window.__mwSheetView=1;var M={"A-101":"files/hfmeac2npsaj.enc","A-102":"files/x5xy4cf5sqen.enc","A-201":"files/b9svxh0rqhb1.enc","A-301":"files/9b8no0a9fi86.enc","A-401":"files/7a1wq30fh9i0.enc","E-101":"files/60xxdwnxyulx.enc","E-102":"files/y2ulryrb4b60.enc","E-103":"files/2344ij11c8m2.enc","G-001":"files/hqbt2phf1aj4.enc","G-002":"files/ekyouw0mqf74.enc","G-003":"files/jc2zfl5dljri.enc","M-101":"files/7an5wbq2s1qb.enc","P-101":"files/gbag9ut7d1kv.enc","P-102":"files/ltfumoacq1uh.enc","P-103":"files/bu0paxket3de.enc","S-101":"files/lsu6vd6sm8af.enc","S-102":"files/d475sqykwe1a.enc"};
function close(){var o=document.getElementById('mw-sheet-ov');if(o)o.remove();}
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-sheet-view]');if(!a)return;e.preventDefault();e.stopPropagation();
var id=a.getAttribute('data-sheet-view'),f=M[id];if(!f)return;close();
var o=document.createElement('div');o.id='mw-sheet-ov';o.setAttribute('role','dialog');o.setAttribute('aria-label','Sheet '+id);
o.style.cssText='position:fixed;inset:0;z-index:2147483000;background:rgba(10,10,10,.88);display:flex;align-items:center;justify-content:center;padding:60px 12px 12px;box-sizing:border-box';
var b=document.createElement('button');b.type='button';b.className='mw-hover';b.setAttribute('aria-label','Close sheet');b.textContent='\u00d7';
b.style.cssText='position:absolute;top:10px;right:10px;width:44px;height:44px;border:0;background:#fff;color:#0a0a0a;font-size:26px;line-height:1;cursor:pointer';
var w=document.createElement('div');w.style.cssText='width:100%;height:100%;overflow:auto;display:flex;align-items:center;justify-content:center';
var i=document.createElement('img');i.alt='Sheet '+id;i.setAttribute('data-enc-img',f);i.style.cssText='max-width:100%;max-height:100%;background:#fff';
w.appendChild(i);o.appendChild(b);o.appendChild(w);o.addEventListener('click',function(ev){if(ev.target===o||ev.target===w||ev.target===b)close();});document.body.appendChild(o);},true);})();
