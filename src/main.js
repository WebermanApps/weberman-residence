/* Plan images are encrypted (files/*.enc); mwEncUrl decrypts via enc_file_viewer.js after unlock. */
window.mwEncUrl=window.mwEncUrl||function(p){return new Promise(function(res,rej){var n=0;(function t(){if(window.mwEncFile)return window.mwEncFile.decrypt(p).then(function(r){res(r.url)},rej);if(++n>150)return rej(new Error('enc viewer missing'));setTimeout(t,100)})()})};
import './brand-tokens.css';
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { setQuality } from './textures.js';
import { buildAll, pickMeshes, cutPlane, W, CX, CY, OUTDOOR, P } from './build.js';

const $ = (id) => document.getElementById(id);
const SF2M2 = 0.09290304, FT2M = 0.3048;
const fmtFt = (v) => { const f = Math.floor(v + 1e-6), i = Math.round((v - f) * 12); return i ? `${f}' ${i}"` : `${f}'`; };
const isMobile = () => window.innerWidth < 700;

// ---------- renderer / scene ----------
const host = $('viewport');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.localClippingEnabled = true;
host.appendChild(renderer.domElement);
const labelR = new CSS2DRenderer(); labelR.domElement.style.position = 'absolute'; labelR.domElement.style.inset = '0'; labelR.domElement.style.pointerEvents = 'none'; host.appendChild(labelR.domElement);

const scene = new THREE.Scene();
const groups = {}; for (const k of ['walls', 'glass', 'roof', 'floors', 'furn', 'detail', 'site', 'ground', 'mtn', 'pick', 'labels', 'fx']) { groups[k] = new THREE.Group(); groups[k].name = k; scene.add(groups[k]); }
groups.pick.visible = true;

// sky dome
const skyU = { top: { value: new THREE.Color(0x8fb3d1) }, mid: { value: new THREE.Color(0xdfe6e6) }, bot: { value: new THREE.Color(0xe9e4d6) } };
const sky = new THREE.Mesh(new THREE.SphereGeometry(30000, 32, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: skyU,
  vertexShader: 'varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
  fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vp; void main(){ float h = vp.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*2.2,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*8.0,0.0,1.0)); gl_FragColor = vec4(c,1.0);\n#include <colorspace_fragment>\n}' }));
sky.renderOrder = -10; scene.add(sky);
scene.fog = new THREE.Fog(0xd5dde0, 1600, 9000);

// lights
const hemi = new THREE.HemisphereLight(0xeaf2ff, 0x8b7a5e, 1.15); scene.add(hemi);
const amb = new THREE.AmbientLight(0xfff4e6, 0.35); scene.add(amb);
const sun = new THREE.DirectionalLight(0xfff1dc, 2.6);
sun.castShadow = true; sun.shadow.mapSize.set(isMobile() ? 1024 : 2048, isMobile() ? 1024 : 2048);
Object.assign(sun.shadow.camera, { left: -150, right: 150, top: 150, bottom: -150, near: 10, far: 900 }); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
scene.add(sun); scene.add(sun.target);
const interiorLights = [];

// ---------- build ----------
setQuality(isMobile() ? 0.5 : 1);
const { M, blocking, roofUnder } = buildAll(groups);
const lampMats = new Set(); scene.traverse(o => { if (o.material && o.material.name === 'lamp') lampMats.add(o.material); });
let fireMat = null; groups.site.traverse(o => { if (o.material && o.material.name === 'fire') fireMat = o.material; });
for (const r of P.rooms) {
  if (r.area < 90 || !r.cond) continue;
  const L = new THREE.PointLight(0xffc98a, 0, 34, 1.6); const c = W((r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2, Math.min(9, roofUnder((r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2) - 1.5)); L.position.copy(c); groups.fx.add(L); interiorLights.push(L);
}

// plan overlay
const ovMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.85, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
let overlay = null;
fetch('./plan_overlay.json').then(r => r.json()).then(ext => {
  window.mwEncUrl('files/35o73egm3y39.enc').then(u => new THREE.TextureLoader().load(u, (t) => {
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; ovMat.map = t; ovMat.needsUpdate = true;
    const w = ext.x1 - ext.x0, h = ext.y1 - ext.y0; const g = new THREE.PlaneGeometry(w, h); g.rotateX(-Math.PI / 2);
    overlay = new THREE.Mesh(g, ovMat); overlay.position.copy(W((ext.x0 + ext.x1) / 2, (ext.y0 + ext.y1) / 2, 0.06)); overlay.renderOrder = 3; overlay.visible = state.overlay; scene.add(overlay);
  })).catch(() => {});
});

// highlight
const hl = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), M.highlight); hl.visible = false; hl.renderOrder = 4; scene.add(hl);
const hlEdge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: 0x4d593e })); hlEdge.visible = false; scene.add(hlEdge);

// ---------- cameras / controls ----------
const persp = new THREE.PerspectiveCamera(42, 1, 0.5, 60000);
const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.5, 3000);
let camera = persp;
const controls = new OrbitControls(persp, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.08; controls.maxPolarAngle = 1.5; controls.minDistance = 4; controls.maxDistance = 1400; controls.screenSpacePanning = true;
controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
const pcontrols = new OrbitControls(ortho, renderer.domElement);
pcontrols.enableRotate = false; pcontrols.screenSpacePanning = true; pcontrols.enableDamping = true; pcontrols.minZoom = 0.4; pcontrols.maxZoom = 8;
pcontrols.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
pcontrols.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN }; pcontrols.enabled = false;

const VIEWS = {
  aerial: { name: 'Aerial', cam: [0, -128, 76], tgt: [50, 56, 28], fov: 50, roof: true, title: 'The whole house.', kicker: 'A DRAWING-BASED SPATIAL STUDY' },
  courtyard: { name: 'Courtyard', cam: [39, 29.5, 6.2], tgt: [67, 43, 6], roof: true, title: 'The courtyard.', kicker: 'VIEW · CEDAR ENGAWA, LOOKING NORTH-EAST', fov: 62 },
  living: { name: 'Living', cam: [48, 20, 54], tgt: [58, 67, 0], roof: false, cut: 8, title: 'Living pavilion.', kicker: 'ROOMS 101-103 · ROOF HIDDEN' },
  office: { name: 'Studio', cam: [48, -38, 58], tgt: [16, 11, 0], roof: false, cut: 8, title: 'Isolated studio / office.', kicker: 'ROOM 407 · ROOM-WITHIN-A-ROOM · TARGET STC 60+' },
  wellness: { name: 'Wellness', cam: [70, -44, 58], tgt: [52, 8, 0], roof: false, cut: 8, title: 'Wellness + gym wing.', kicker: 'ROOMS 301-306 · ON THE POOL · ROOF HIDDEN' },
  bath: { name: 'Bath', cam: [93, 66, 22], tgt: [93.8, 78, 0], roof: false, cut: 8, title: 'Master bath.', kicker: 'ROOM 202 · HINOKI SOAKING TUB BY THE WINDOW, SKYLIGHT', fov: 55 },
  utility: { name: 'Utility', cam: [126, -46, 62], tgt: [118, 9, 0], roof: false, title: 'Utility yard.', kicker: 'OUTDOORS · SCREENED SERVICE YARD · WATER, WASTEWATER, POWER, HVAC', fov: 50 },
  climb: { name: 'Climbing', cam: [-4, -34, 9], tgt: [-13, 14, 8], roof: true, title: 'Climbing pavilion.', kicker: 'OUTDOORS · COVERED OPEN-AIR · NOT CONDITIONED', fov: 50 },
  kitchen: { name: 'Kitchen', cam: [30, 43, 27], tgt: [39, 70, 0], roof: false, cut: 8, title: 'Kitchen + living.', kicker: 'ROOMS 101-103 · MARBLE ISLAND, ZELLIGE, CONVERSATION PIT', fov: 50 },
  gym: { name: 'Gym', cam: [52, -12, 24], tgt: [38, 11, 2], roof: false, cut: 8, title: 'Exercise room.', kicker: 'ROOM 302 · CALM STUDIO, RIG, CADILLAC, ROWER', fov: 50 },
  kids: { name: 'Kids', cam: [104, 20, 36], tgt: [90, 38, 0], roof: false, cut: 8, title: 'Kids\' rooms.', kicker: 'ROOMS 207-209 · WINDOW SEATS, DESKS BY THE WINDOW, CLIMBING WALLS', fov: 52 },
  master: { name: 'Master', cam: [124, 33, 64], tgt: [86, 71, 0], roof: false, cut: 8, title: 'Master suite.', kicker: 'ROOMS 201-203 · ROOF HIDDEN' },
};

// ---------- state ----------
const state = { mode: 'orbit', light: 'day', roof: true, cut: false, cutH: 4.5, furn: true, labels: false, overlay: false, ovOp: 0.85, site: true, mtn: true, shadows: true, sel: null, view: 'aerial' };

// ---------- labels ----------
const labelObjs = [];
const MINOR = new Set(['402', '405', '211', '206', '403', '306', '205', '203', '204', '301', '406', '104', '105', '210', '208']);
const HIDE = new Set(['402', '405', '211', '212', '213']);
const KEY = new Set(['W', '101', '103', '201', '207', '209', '302', '303', '407', '404', '401', 'C', 'P', 'L']);
const KEY2 = new Set(['W', '103', '201', '209', '302', '407', 'P', 'L']);
function addLabel(item, outdoor) {
  if (HIDE.has(item.id)) return;
  const el = document.createElement('div'); el.className = 'rlabel' + (['204','301','406'].includes(item.id) ? ' gal' : '') + (outdoor ? ' out' : '') + (MINOR.has(item.id) || outdoor ? ' minor' : '') + (KEY.has(item.id) ? ' key' : '') + (KEY2.has(item.id) ? ' key2' : '');
  el.innerHTML = outdoor ? `${item.name}` : `<span class="num">${item.id}</span>${item.name.replace(' + Conversation Pit', '').replace(' Gallery', '')}`;
  el.addEventListener('click', (e) => { e.stopPropagation(); select(item.id, true); });
  const o = new CSS2DObject(el); o.userData = { item, outdoor }; groups.labels.add(o); labelObjs.push(o);
}
P.rooms.forEach(r => addLabel(r, false)); OUTDOOR.forEach(r => addLabel(r, true));
function placeLabels() {
  for (const o of labelObjs) {
    const it = o.userData.item; let cx = (it.x0 + it.x1) / 2, cy = (it.y0 + it.y1) / 2;
    if (it.id === '103') { cx = 61; cy = 58; } if (it.id === 'K') { cx = 2; cy = 70; } if (it.id === '105') cy = 58; if (it.id === '404') cy = 31; if (it.id === '403') cy = 44; if (it.id === 'C') { cy = 44; cx = 47; } if (it.id === '204') cy = 42; if (it.id === '406') cy = 34; if (it.id === '301') cx = 54;
    let z = 1.5;
    if (!o.userData.outdoor) z = state.mode === 'plan' ? 1 : (state.roof && state.mode !== 'walk' ? roofUnder(cx, cy) + 2.2 : 4);
    if (o.userData.outdoor) z = it.id === 'C' ? 2.5 : 3;
    o.position.copy(W(cx, cy, z));
  }
}

// ---------- room list / chips ----------
const WINGS = ['Living Pavilion', 'Sleeping Wing', 'Wellness + Gym Wing', 'Studio + Arrival'];
function buildLists() {
  const list = $('room-list'), chips = $('chips');
  const mk = (id, n, name, parent, chip) => { const b = document.createElement('button'); b.dataset.id = id; b.innerHTML = chip ? `<span class="n">${n}</span>${name}` : `<span class="n">${n}</span><span>${name}</span>`; b.onclick = () => id === 'all' ? resetAll() : select(id, true); parent.appendChild(b); };
  mk('all', '⌂', 'Whole house', list); mk('all', '⌂', 'Whole house', chips, true);
  for (const w of WINGS) {
    const g = document.createElement('div'); g.className = 'grp'; g.textContent = w.toUpperCase(); list.appendChild(g);
    P.rooms.filter(r => r.wing === w && !HIDE.has(r.id)).forEach(r => { mk(r.id, r.id, r.name, list); if (!MINOR.has(r.id)) mk(r.id, r.id, r.name, chips, true); });
  }
  const g = document.createElement('div'); g.className = 'grp'; g.textContent = 'OUTDOORS'; list.appendChild(g);
  OUTDOOR.forEach(o => { mk(o.id, '·', o.name, list); if (['C', 'W', 'P', 'L', 'V', 'U'].includes(o.id)) mk(o.id, '·', o.name, chips, true); });
  document.querySelectorAll('[data-id="all"]').forEach(b => b.classList.add('on'));
}
buildLists();
$('hdr-total').textContent = `${P.total.toLocaleString()} SF conditioned (${Math.round(P.total * SF2M2)} m²)`;

// ---------- views / camera tweening ----------
const viewsEl = $('views');
Object.entries(VIEWS).forEach(([k, v]) => { const b = document.createElement('button'); b.textContent = v.name; b.dataset.view = k; b.onclick = () => goView(k); viewsEl.appendChild(b); });
let tween = null;
function flyTo(camP, tgtP, fov, dur = 1100, ease = 'inout') {
  const p0 = persp.position.clone(), t0 = controls.target.clone(), f0 = persp.fov; const t1 = performance.now();
  tween = { p0, t0, f0, p1: camP, t1v: tgtP, f1: fov ?? 42, start: t1, dur, ease };
}
function setCaption(k, t) { $('cap-kicker').textContent = k; $('cap-title').textContent = t; }
function goView(k, instant) {
  const v = VIEWS[k]; state.view = k; if (typeof prevView !== 'undefined') { prevView = null; $('btn-back').hidden = true; }
  if (state.mode !== 'orbit') setMode('orbit');
  setRoof(v.roof); setCut(!!v.cut, v.cut || 4.5);
  viewsEl.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.view === k));
  const mob = isMobile() && k === 'aerial'; const vc = mob ? [49, -178, 104] : v.cam, vt = mob ? [49, 46, 22] : v.tgt;
  const cp = W(...vc.slice(0, 2), vc[2]), tp = W(...vt.slice(0, 2), vt[2]);
  if (isMobile() && k !== 'courtyard' && k !== 'aerial') { const d = cp.clone().sub(tp).multiplyScalar(k === 'aerial' ? 1.2 : 1.45); cp.copy(tp).add(d); }
  if (instant) { persp.position.copy(cp); controls.target.copy(tp); persp.fov = v.fov ?? 42; persp.updateProjectionMatrix(); controls.update(); tween = null; }
  else flyTo(cp, tp, v.fov);
  setCaption(v.kicker, v.title);
}
function resetAll() { deselect(); goView('aerial'); document.querySelectorAll('[data-id]').forEach(b => b.classList.toggle('on', b.dataset.id === 'all')); }

// ---------- selection / info ----------
function findItem(id) { return P.rooms.find(r => r.id === id) || OUTDOOR.find(o => o.id === id); }
function select(id, fly) {
  const it = findItem(id); if (!it) return; state.sel = id;
  document.querySelectorAll('[data-id]').forEach(b => b.classList.toggle('on', b.dataset.id === id));
  document.querySelectorAll('.chips button.on, .room-list button.on').forEach(b => b.scrollIntoView?.({ block: 'nearest', inline: 'center', behavior: 'smooth' }));
  labelObjs.forEach(o => o.element.classList.toggle('on', o.userData.item.id === id));
  const w = it.x1 - it.x0, d = it.y1 - it.y0, cx = (it.x0 + it.x1) / 2, cy = (it.y0 + it.y1) / 2;
  const outdoor = !it.area; const area = it.cov ?? it.area ?? Math.round(w * d);
  const h = outdoor ? 0.3 : roofUnder(cx, cy);
  hl.scale.set(w, 1, d); hl.position.copy(W(cx, cy, outdoor ? 0.2 : 0.08)); hl.visible = true;
  hlEdge.scale.set(w, Math.max(0.2, h), d); hlEdge.position.copy(W(cx, cy, Math.max(0.2, h) / 2)); hlEdge.visible = true;
  $('info').hidden = false;
  $('info-kicker').textContent = outdoor ? 'OUTDOORS · SITE' : `ROOM ${it.id} · ${it.wing.toUpperCase()}`;
  $('info-title').textContent = it.name;
  $('info-notes').textContent = it.notes;
  $('info-size').textContent = `${fmtFt(w)} × ${fmtFt(d)}  (${(w * FT2M).toFixed(1)} × ${(d * FT2M).toFixed(1)} m)`;
  $('info-area').textContent = `${area.toLocaleString()} SF · ${(area * SF2M2).toFixed(1)} m²${!outdoor && !it.cond ? ' (unconditioned)' : ''}${it.cov ? ' covered (not conditioned)' : ''}`;
  $('info-ceil').parentElement.hidden = outdoor; $('info-ceil').textContent = outdoor ? '' : `${fmtFt(it.h)} (roof deck ${fmtFt(Math.round(h * 2) / 2)})`;
  $('info-floor').textContent = outdoor ? it.floor : (it.floorName || it.floor);
  $('info-fin').textContent = it.fin || '';  $('info-fin').parentElement.hidden = !it.fin;
  const eq = it.equip || [...new Set(P.furn.filter(f => f.room === id && f.shape !== 'pit').map(f => f.label))];
  $('info-equip').innerHTML = eq.map(e => `<span>${e}</span>`).join('');
  $('info-walk').parentElement.hidden = outdoor && id !== 'C';
  setCaption(outdoor ? 'OUTDOORS' : `ROOM ${it.id} / SPATIAL STUDY`, it.name);
  if (fly && state.mode === 'orbit') {
    if (!prevView) prevView = { p: persp.position.clone(), t: controls.target.clone(), fov: persp.fov, roof: state.roof, cut: state.cut, cutH: state.cutH, view: state.view };
    if (!outdoor) { setRoof(false); setCut(true, Math.min(8, Math.max(6, (it.h || 10) - 2))); } // temporary roof cutaway over the room
    const rh = outdoor ? 4 : Math.min(h, 10); const rad = Math.max(11, 0.5 * Math.hypot(w, d, rh) + 3);
    const fov = 42, vf = THREE.MathUtils.degToRad(fov) / 2, hf = Math.atan(Math.tan(vf) * persp.aspect);
    const dist = rad / Math.sin(Math.min(vf, hf)) * (isMobile() ? 1.5 : 1.3);
    const tp = W(cx, cy, rh * 0.25); const dir = new THREE.Vector3(0.55, 1.05, 0.8).normalize(); // pleasant 3/4 view from the south-east, above
    flyTo(tp.clone().add(dir.multiplyScalar(dist)), tp, fov, 600, 'out');
    viewsEl.querySelectorAll('button').forEach(b => b.classList.remove('on'));
    $('btn-back').hidden = false;
  }
  if (fly && state.mode === 'plan') { pcontrols.target.copy(W(cx, cy, 0)); ortho.position.set(pcontrols.target.x, 400, pcontrols.target.z + 0.01); ortho.zoom = Math.min(4, 70 / Math.max(w, d, 14)); ortho.updateProjectionMatrix(); }
  if (fly && state.mode === 'walk') enterWalkAt(cx, cy);
}
let prevView = null;
function backToHouse() {
  clearHover(); deselect(); $('btn-back').hidden = true;
  const pv = prevView; prevView = null;
  if (!pv) { goView('aerial'); return; }
  setRoof(pv.roof); setCut(pv.cut, pv.cutH); flyTo(pv.p, pv.t, pv.fov, 600, 'out');
  if (pv.view && VIEWS[pv.view]) { viewsEl.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.view === pv.view)); setCaption(VIEWS[pv.view].kicker, VIEWS[pv.view].title); }
}
function deselect() { state.sel = null; $('info').hidden = true; hl.visible = false; hlEdge.visible = false; labelObjs.forEach(o => o.element.classList.remove('on')); }
$('info-close').onclick = deselect;
$('info-walk').onclick = () => { const it = findItem(state.sel); if (!it) return; setMode('walk'); enterWalkAt((it.x0 + it.x1) / 2, (it.y0 + it.y1) / 2); };

// ---------- layers ----------
function setRoof(on) { state.roof = on; groups.roof.visible = on; host.classList.toggle('roof-on', on); $('ly-roof').checked = on; const b = $('btn-roof'); b.setAttribute('aria-pressed', on); b.querySelector('span').textContent = on ? 'Roof On' : 'Roof Off'; placeLabels(); }
function setCut(on, h) { state.cut = on; if (h != null) state.cutH = h; cutPlane.constant = on ? state.cutH : 1e5; $('ly-cut').checked = on; $('cut-val').textContent = fmtFt(state.cutH); $('cut-h').value = state.cutH; }
function setOverlay(on) { state.overlay = on; if (overlay) overlay.visible = on; $('ly-overlay').checked = on; }
$('btn-roof').onclick = () => setRoof(!state.roof);
$('ly-roof').onchange = (e) => setRoof(e.target.checked);
$('ly-cut').onchange = (e) => setCut(e.target.checked);
$('cut-h').oninput = (e) => setCut(true, parseFloat(e.target.value));
$('ly-furn').onchange = (e) => { state.furn = e.target.checked; groups.furn.visible = state.furn; groups.detail.visible = state.furn; };
host.classList.add('labels-off');
$('ly-labels').onchange = (e) => { state.labels = e.target.checked; host.classList.toggle('labels-off', !state.labels); };
$('ly-overlay').onchange = (e) => setOverlay(e.target.checked);
$('ov-op').oninput = (e) => { ovMat.opacity = parseFloat(e.target.value); $('ov-val').textContent = Math.round(ovMat.opacity * 100) + '%'; };
$('ly-site').onchange = (e) => { groups.site.visible = e.target.checked; };
$('ly-mtn').onchange = (e) => { groups.mtn.visible = e.target.checked; };
$('ly-shadow').onchange = (e) => { sun.castShadow = e.target.checked; };
$('btn-layers').onclick = () => { $('layers').hidden = !$('layers').hidden; };
$('layers-close').onclick = () => { $('layers').hidden = true; };

// ---------- lighting modes ----------
function setLight(l) {
  document.getElementById('app').classList.toggle('evening', l !== 'day');
  state.light = l; document.querySelectorAll('#light-seg button').forEach(b => b.classList.toggle('on', b.dataset.light === l));
  const day = l === 'day';
  skyU.top.value.set(day ? 0x86acd0 : 0x2b3550); skyU.mid.value.set(day ? 0xe3e8e6 : 0xd99a6c); skyU.bot.value.set(day ? 0xe9e4d6 : 0x6b5a50);
  scene.fog.color.set(day ? 0xd5dde0 : 0x8d7b78);
  hemi.intensity = day ? 1.15 : 0.35; hemi.color.set(day ? 0xeaf2ff : 0x8c96c0); amb.intensity = day ? 0.35 : 0.12;
  sun.intensity = day ? 2.6 : 0.9; sun.color.set(day ? 0xfff1dc : 0xff9a5a);
  const sd = day ? new THREE.Vector3(-0.55, 0.78, 0.62) : new THREE.Vector3(0.85, 0.16, 0.35); sun.position.copy(sd.normalize().multiplyScalar(400)); sun.target.position.set(0, 0, 0);
  interiorLights.forEach(L => L.intensity = day ? 0 : 260);
  lampMats.forEach(m => m.emissiveIntensity = day ? (m.color.r > 0.97 ? 0.5 : 0.2) : 1.8);
  M.glass.emissive?.set(day ? 0x000000 : 0x3a2a14); M.c.glass.emissive?.set(day ? 0x000000 : 0x5a3c18);
  if (fireMat) fireMat.emissiveIntensity = day ? 1.2 : 4;
  renderer.toneMappingExposure = day ? 1.05 : 1.25;
}
document.querySelectorAll('#light-seg button').forEach(b => b.onclick = () => setLight(b.dataset.light));

// ---------- modes ----------
const walk = { x: 16, y: 54, yaw: -Math.PI / 2, pitch: 0, keys: {} };
function setMode(m) {
  const prev = state.mode; state.mode = m; host.classList.toggle('plan-mode', m === 'plan'); host.classList.toggle('walk-mode', m === 'walk');
  document.querySelectorAll('#mode-seg button').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
  controls.enabled = m === 'orbit'; pcontrols.enabled = m === 'plan';
  $('walk-pad').hidden = m !== 'walk'; viewsEl.hidden = m === 'walk';
  if (m === 'plan') {
    camera = ortho; setRoof(false); setCut(true, 4.5); setOverlay(true);
    pcontrols.target.copy(W(isMobile() ? 49 : 40, isMobile() ? 56 : 47, 0)); ortho.position.set(pcontrols.target.x, 400, pcontrols.target.z + 0.01); ortho.zoom = isMobile() ? 0.56 : 0.92; resize();
    $('hint').textContent = 'Drag to pan · Scroll or pinch to zoom · Tap a room';
    setCaption('PLAN VIEW · DRAWING OVERLAY ON 3D CUT AT 4\' 6"', 'Floor plan.');
    viewsEl.querySelectorAll('button').forEach(b => b.classList.remove('on'));
  } else if (m === 'walk') {
    camera = persp; setCut(false); setOverlay(false); setRoof(true); persp.fov = 68; persp.updateProjectionMatrix();
    if (prev !== 'walk') { const it = state.sel && findItem(state.sel); it ? enterWalkAt((it.x0 + it.x1) / 2, (it.y0 + it.y1) / 2) : enterWalkAt(16, 54, -Math.PI / 2); }
    $('hint').textContent = 'Drag to look · W A S D or arrows to move · Esc to exit';
    setCaption('WALK THROUGH · EYE HEIGHT 5\' 4"', state.sel ? findItem(state.sel).name : 'Entry genkan.');
  } else {
    camera = persp; setCut(false); setOverlay(false); persp.fov = 42; persp.updateProjectionMatrix();
    $('hint').textContent = 'Drag to orbit · Scroll or pinch to zoom · Right-drag or two fingers to pan · Tap a room';
    if (prev !== 'orbit') goView('aerial', true);
  }
  placeLabels();
}
document.querySelectorAll('#mode-seg button').forEach(b => b.onclick = () => setMode(b.dataset.mode));

// ---------- walk ----------
function enterWalkAt(x, y, yaw) {
  walk.x = x; walk.y = y; walk.pitch = 0;
  if (yaw != null) walk.yaw = yaw; else { const dx = 50 - x, dy = 44 - y; walk.yaw = Math.atan2(-dx, dy) + Math.PI; walk.yaw = Math.atan2(dx, dy); }
}
function blocked(x, y) {
  if (x < -150 || x > 220 || y < -120 || y > 200) return true;
  for (const { s, a, b } of blocking) {
    const [px, py, qx, qy] = s.o === 'h' ? [a, s.c, b, s.c] : [s.c, a, s.c, b];
    const vx = qx - px, vy = qy - py; const t = Math.max(0, Math.min(1, ((x - px) * vx + (y - py) * vy) / (vx * vx + vy * vy)));
    const dx = x - (px + vx * t), dy = y - (py + vy * t); if (dx * dx + dy * dy < 0.8 * 0.8) return true;
  }
  return false;
}
function walkStep(dt) {
  const k = walk.keys; let f = 0, s = 0;
  if (k.KeyW || k.ArrowUp || k.f) f += 1; if (k.KeyS || k.ArrowDown || k.b) f -= 1; if (k.KeyA || k.ArrowLeft || k.l) s -= 1; if (k.KeyD || k.ArrowRight || k.r) s += 1;
  if (f || s) {
    const sp = 9 * dt; const fx = Math.sin(walk.yaw), fy = Math.cos(walk.yaw); // plan forward
    const dx = (fx * f + fy * s) * sp, dy = (fy * f - fx * s) * sp;
    if (!blocked(walk.x + dx, walk.y + dy)) { walk.x += dx; walk.y += dy; } else if (!blocked(walk.x + dx, walk.y)) walk.x += dx; else if (!blocked(walk.x, walk.y + dy)) walk.y += dy;
  }
  const r = P.rooms.find(q => walk.x >= q.x0 && walk.x <= q.x1 && walk.y >= q.y0 && walk.y <= q.y1);
  const floor = r ? (r.id === '103' && walk.x > 49 && walk.x < 65 && walk.y > 66 && walk.y < 78 ? -1.5 : 0) : -1.0;
  const eye = floor + 5.33; persp.position.copy(W(walk.x, walk.y, eye));
  const look = new THREE.Vector3(Math.sin(walk.yaw) * Math.cos(walk.pitch), Math.sin(walk.pitch), -Math.cos(walk.yaw) * Math.cos(walk.pitch));
  persp.lookAt(persp.position.clone().add(look));
  if (r && r.id !== walk.room) { walk.room = r.id; setCaption('WALK THROUGH · EYE HEIGHT 5\' 4"', r.name); }
}
window.addEventListener('keydown', (e) => { if (state.mode !== 'walk') return; if (e.code === 'Escape') { setMode('orbit'); return; } walk.keys[e.code] = true; if (e.code.startsWith('Arrow')) e.preventDefault(); });
window.addEventListener('keyup', (e) => { walk.keys[e.code] = false; });
document.querySelectorAll('#walk-pad button').forEach(b => { const k = b.dataset.k; const on = (e) => { e.preventDefault(); walk.keys[k] = true; }; const off = () => { walk.keys[k] = false; };
  b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointerleave', off); b.addEventListener('pointercancel', off); });

// ---------- pointer: pick + walk look ----------
const ray = new THREE.Raycaster(); let down = null;
renderer.domElement.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now(), lx: e.clientX, ly: e.clientY }; if (state.mode === 'walk') renderer.domElement.setPointerCapture(e.pointerId); });
renderer.domElement.addEventListener('pointermove', (e) => {
  if (state.mode === 'walk' && down) { walk.yaw += (e.clientX - down.lx) * 0.005; walk.pitch = Math.max(-1.2, Math.min(1.2, walk.pitch - (e.clientY - down.ly) * 0.004)); down.lx = e.clientX; down.ly = e.clientY; }
});
renderer.domElement.addEventListener('pointerup', (e) => {
  if (!down) return; const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y); const dt = performance.now() - down.t; down = null;
  if (moved > 6 || dt > 600 || state.mode === 'walk') return;
  const rect = renderer.domElement.getBoundingClientRect();
  const v = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
  const id = pickAt(e.clientX, e.clientY);
  if (e.pointerType === 'touch' || e.pointerType === 'pen') { // touch: first tap highlights + names, second tap on the same room zooms
    if (!id) { clearHover(); deselect(); return; }
    if (hoverId === id) { select(id, true); return; }
    setHover(id, null); return;
  }
  if (id) { select(id, true); return; }
  clearHover(); deselect();
});
// ---------- hover highlight + name tag ----------
function pickAt(x, y) {
  const rect = renderer.domElement.getBoundingClientRect();
  const v = new THREE.Vector2(((x - rect.left) / rect.width) * 2 - 1, -((y - rect.top) / rect.height) * 2 + 1);
  ray.setFromCamera(v, camera);
  const hit = ray.intersectObjects(pickMeshes, false)[0];
  if (hit) return hit.object.userData.room;
  const g = ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 1.0), new THREE.Vector3());
  if (g) { const px = g.x + CX, py = -g.z + CY; const o = OUTDOOR.find(q => px >= q.x0 && px <= q.x1 && py >= q.y0 && py <= q.y1); if (o) return o.id; }
  return null;
}
const hvMat = new THREE.MeshBasicMaterial({ color: 0x737373, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide });
const hvFloor = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), hvMat); hvFloor.visible = false; hvFloor.renderOrder = 5; scene.add(hvFloor);
const hvBox = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xd4d4d4, transparent: true, opacity: 0.12, depthWrite: false })); hvBox.visible = false; hvBox.renderOrder = 5; scene.add(hvBox);
const hvEdge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: 0x171717, transparent: true, opacity: 0.85 })); hvEdge.visible = false; hvEdge.renderOrder = 6; scene.add(hvEdge);
const tag = document.createElement('div'); tag.className = 'hovertag'; tag.hidden = true; tag.setAttribute('role', 'status'); host.appendChild(tag);
let hoverId = null, hvPend = null, hvLast = 0, hvRaf = 0;
function setHover(id, at) {
  const it = findItem(id); if (!it) return clearHover();
  const w = it.x1 - it.x0, d = it.y1 - it.y0, cx = (it.x0 + it.x1) / 2, cy = (it.y0 + it.y1) / 2, outdoor = !it.area;
  if (hoverId !== id) {
    hoverId = id; const h = outdoor ? 0.4 : Math.min(roofUnder(cx, cy), state.roof ? 99 : 30);
    hvFloor.scale.set(w, 1, d); hvFloor.position.copy(W(cx, cy, outdoor ? 0.25 : 0.12));
    hvBox.scale.set(w - 0.1, Math.max(0.3, h), d - 0.1); hvBox.position.copy(W(cx, cy, Math.max(0.3, h) / 2));
    hvEdge.scale.copy(hvBox.scale); hvEdge.position.copy(hvBox.position);
    hvFloor.visible = hvEdge.visible = true; hvBox.visible = !outdoor;
    const area = it.cov ?? it.area ?? Math.round(w * d);
    tag.innerHTML = `<b>${it.name}</b><span>${fmtFt(w)} × ${fmtFt(d)} · ${area.toLocaleString()} SF</span>`; tag.hidden = false;
    renderer.domElement.style.cursor = 'pointer';
  }
  if (at) { tag.style.left = at[0] + 'px'; tag.style.top = at[1] + 'px'; tag.classList.remove('center'); }
  else { const p = W(cx, cy, outdoor ? 1 : 2).project(camera); const r = renderer.domElement.getBoundingClientRect(); tag.style.left = ((p.x + 1) / 2 * r.width) + 'px'; tag.style.top = ((1 - p.y) / 2 * r.height) + 'px'; tag.classList.add('center'); }
}
function clearHover() { hoverId = null; hvFloor.visible = hvBox.visible = hvEdge.visible = false; tag.hidden = true; renderer.domElement.style.cursor = ''; }
renderer.domElement.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || state.mode === 'walk' || (down && e.buttons)) return;
  const r = renderer.domElement.getBoundingClientRect(); hvPend = [e.clientX, e.clientY, e.clientX - r.left, e.clientY - r.top];
  if (hvRaf) return;
  hvRaf = requestAnimationFrame(function step(now) { // throttle: at most one raycast per ~40 ms, on animation frames
    if (now - hvLast < 40) { hvRaf = requestAnimationFrame(step); return; }
    hvRaf = 0; hvLast = now; const [x, y, lx, ly] = hvPend; const id = pickAt(x, y);
    if (id) setHover(id, [lx, ly]); else if (hoverId) clearHover();
  });
});
renderer.domElement.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') clearHover(); });
window.addEventListener('keydown', (e) => { if (e.code === 'Escape' && state.mode !== 'walk' && (prevView || state.sel)) backToHouse(); });
$('btn-back').onclick = backToHouse;

// ---------- tools ----------
function toast(msg) { const t = $('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 2200); }
$('t-reset').onclick = () => { if (state.mode === 'walk') setMode('orbit'); if (state.mode === 'plan') setMode('plan'); else resetAll(); };
$('t-save').onclick = () => { try { renderer.render(scene, camera); const a = document.createElement('a'); a.href = renderer.domElement.toDataURL('image/png'); a.download = 'weberman-residence.png'; a.click(); toast('Saved a view of the model.'); } catch { toast('The image could not be saved.'); } };
$('t-full').onclick = () => { const el = document.documentElement; if (!document.fullscreenElement) (el.requestFullscreen?.() ?? Promise.reject()).catch(() => toast('Full screen is unavailable in this browser.')); else document.exitFullscreen(); };

// ---------- modals ----------
function modal(title, html) { $('modal-title').textContent = title; $('modal-body').innerHTML = html; $('modal').hidden = false; }
$('modal-close').onclick = () => $('modal').hidden = true; $('modal').onclick = (e) => { if (e.target.id === 'modal') $('modal').hidden = true; };
const programTable = () => `<table>${WINGS.map(w => `<tr><td colspan="3"><b>${w}</b></td></tr>` + P.rooms.filter(r => r.wing === w).map(r => `<tr><td>${r.id}</td><td>${r.name}${r.cond ? '' : ' (unconditioned)'}</td><td style="text-align:right">${r.area} SF · ${(r.area * SF2M2).toFixed(1)} m²</td></tr>`).join('')).join('')}<tr><td colspan="3"><b>Covered Outdoor (Not Conditioned)</b></td></tr>${(P.covered||[]).map(c => `<tr><td>${c.id}</td><td>${c.name}</td><td style="text-align:right">${c.area} SF · ${(c.area * SF2M2).toFixed(1)} m²</td></tr>`).join('')}<tr><td></td><td><b>Total Conditioned</b></td><td style="text-align:right"><b>${P.total.toLocaleString()} SF · ${Math.round(P.total * SF2M2)} m²</b></td></tr></table>`;
$('btn-drawings').onclick = () => { modal('Drawings', `<div class="tabs"><button class="on" data-img="files/wo8o586bms0e.enc">Floor Plan</button><button data-img="files/v6xu73yamn4h.enc">Site Plan</button><button data-img="prog">Room Program</button></div><div id="dw"><img data-enc-img="files/wo8o586bms0e.enc" alt="Floor plan"></div>`);
  document.querySelectorAll('.tabs button').forEach(b => b.onclick = () => { document.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b)); $('dw').innerHTML = b.dataset.img === 'prog' ? programTable() : `<img data-enc-img="${b.dataset.img}" alt="${b.textContent}">`; }); };
const ABOUT = `<h3>Concept</h3><p>A low, warm courtyard house for a mountain site, drawing on Bali, Japan and mid-century modernism rather than the cabin. Four single-storey pavilions wrap a 36 × 28 ft courtyard: <b>living</b> to the north facing the mountains, <b>sleeping</b> to the east, <b>wellness + gym</b> to the south on the pool, and <b>studio + arrival</b> to the west. Glazed engawas on the east and west and an open-air covered walkway on the south link them all, so every room looks into the garden. Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, standing seam metal, white lime-plaster panels with charred-timber siding, bronze windows, walnut and cherry inside, limestone, a cedar engawa and rammed earth.</p>
<h3>Model Notes</h3><p>Geometry is generated from the same plan data as the 2D drawings. Wall heights run up to the underside of each roof: 10 to 14 ft, with the butterfly roof rising from 12' 7" at the valley to about 14' at the walls. Areas are measured to wall centerlines. Furniture and equipment are simple blocks at true size. The lot, grades and mountain backdrop are illustrative only.</p>${programTable()}`;
$('btn-about').onclick = () => modal('About This Model', ABOUT); $('btn-notes').onclick = () => modal('Model Notes', ABOUT);

// ---------- resize / loop ----------
function resize() {
  const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h); labelR.setSize(w, h);
  persp.aspect = w / h; persp.updateProjectionMatrix();
  const half = 62; ortho.left = -half * w / h; ortho.right = half * w / h; ortho.top = half; ortho.bottom = -half; ortho.updateProjectionMatrix();
}
window.addEventListener('resize', resize); new ResizeObserver(resize).observe(host);
let last = performance.now(), frames = 0;
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (tween && state.mode === 'orbit') {
    let t = Math.min(1, (now - tween.start) / tween.dur); const e = tween.ease === 'out' ? 1 - Math.pow(1 - t, 3) : t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    persp.position.lerpVectors(tween.p0, tween.p1, e); controls.target.lerpVectors(tween.t0, tween.t1v, e); persp.fov = tween.f0 + (tween.f1 - tween.f0) * e; persp.updateProjectionMatrix();
    if (t >= 1) tween = null;
  }
  if (state.mode === 'orbit') controls.update(); else if (state.mode === 'plan') pcontrols.update(); else walkStep(dt);
  // LOD: small detail (holds, dishes, dumbbells, path lights, fruit) only when close enough to read it
  const camDist = state.mode === 'orbit' ? persp.position.distanceTo(controls.target) : state.mode === 'plan' ? 999 : 0;
  groups.detail.visible = state.furn && camDist < (isMobile() ? 150 : 240);
  renderer.render(scene, camera); labelR.render(scene, camera);
  if (++frames === 3) { $('loading').classList.add('done'); window.__ready = true; }
  requestAnimationFrame(loop);
}
// ---------- init ----------
resize(); setLight('day'); placeLabels();
const qs = new URLSearchParams(location.search);
goView(VIEWS[qs.get('view')] ? qs.get('view') : 'aerial', true);
if (qs.get('mode')) setMode(qs.get('mode'));
if (qs.get('light') === 'eve') setLight('eve');
if (qs.get('roof') !== '1') setRoof(false); // roof defaults off (Max, Oct 13 2026)
if (qs.get('room')) select(qs.get('room'), true);
requestAnimationFrame(loop);
controls.addEventListener('start', () => { tween = null; });
window.app = { goView, setMode, select, deselect, setRoof, setLight, setCut, setOverlay, state, renderer, scene, get camera() { return camera; } };
