import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeTextures } from './textures.js';
import P from './plan.json';

export const CX = 49, CY = 44;
export const W = (x, y, z = 0) => new THREE.Vector3(x - CX, z, -(y - CY));
export const cutPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1e5);
const clip = [cutPlane];

// ---------- materials ----------
export function makeMaterials() {
  const T = makeTextures();
  const M = {};
  const std = (o) => new THREE.MeshStandardMaterial(o);
  M.stucco = std({ map: T.stucco, roughness: 0.92 });
  M.plaster = std({ map: T.plaster, roughness: 0.95 });
  M.charred = std({ map: T.charred, roughness: 0.85 });
  M.rammed = std({ map: T.rammed, roughness: 0.95 });
  M.stone = std({ map: T.stone, roughness: 0.8 });
  M.plinth = std({ map: T.plinth, roughness: 0.9 });
  M.oak = std({ map: T.oak, roughness: 0.6 });
  M.deck = std({ map: T.deck, roughness: 0.8 });
  M.soffit = std({ map: T.soffit, roughness: 0.75 });
  M.tatami = std({ map: T.tatami, roughness: 0.9 });
  M.rubber = std({ map: T.rubber, roughness: 0.95 });
  M.seam = std({ map: T.seam, roughness: 0.55, metalness: 0.15 });
  M.gravel = std({ map: T.gravel, roughness: 1 });
  M.turf = std({ map: T.turf, roughness: 1 });
  M.meadow = std({ map: T.meadow, roughness: 1 });
  M.cedar = std({ map: T.cedar, roughness: 0.8 });
  M.concrete = std({ map: T.concrete, roughness: 0.9 });
  M.frame = std({ color: 0x3b352f, roughness: 0.5, metalness: 0.4 });
  M.glass = new THREE.MeshPhysicalMaterial({ color: 0xcfe3e6, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide, emissive: 0x000000 });
  M.water = std({ color: 0x4d9fb3, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.88 });
  M.white = std({ color: 0xf1eee7, roughness: 0.6 });
  M.dark = std({ color: 0x2c2a27, roughness: 0.7 });
  M.fir = std({ color: 0xc89a66, roughness: 0.7 });
  M.highlight = new THREE.MeshBasicMaterial({ color: 0x75805f, transparent: true, opacity: 0.28, depthWrite: false });
  // clipped twins for the building
  M.c = {};
  for (const k of ['stucco', 'plaster', 'charred', 'rammed', 'cedar', 'stone', 'frame', 'glass', 'oak', 'fir']) {
    const m = M[k].clone(); m.clippingPlanes = clip; m.clipShadows = true; M.c[k] = m;
  }
  M.T = T;
  return M;
}
const colorMats = {};
function colorMat(hex) {
  if (!colorMats[hex]) { const m = new THREE.MeshStandardMaterial({ color: new THREE.Color(hex), roughness: 0.75 }); m.clippingPlanes = clip; m.clipShadows = true; colorMats[hex] = m; }
  return colorMats[hex];
}

// ---------- geometry helpers ----------
function boxGeo(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv; const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0], uv.getY(k) * dims[f][1]); }
  return g;
}
class Buckets {
  constructor() { this.b = new Map(); }
  add(layer, mat, geo) { const key = layer + '|' + mat.uuid; if (!this.b.has(key)) this.b.set(key, { layer, mat, geos: [] }); this.b.get(key).geos.push(geo.index ? geo.toNonIndexed() : geo); }
  build(groups, opts = {}) {
    for (const { layer, mat, geos } of this.b.values()) {
      // strip to position/normal/uv for merge compatibility
      const clean = geos.map(g => { const n = new THREE.BufferGeometry(); n.setAttribute('position', g.attributes.position); n.setAttribute('normal', g.attributes.normal); if (g.attributes.uv) n.setAttribute('uv', g.attributes.uv); else n.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return n; });
      const merged = mergeGeometries(clean, false);
      const mesh = new THREE.Mesh(merged, mat);
      const noShadow = mat.transparent;
      mesh.castShadow = !noShadow && layer !== 'ground'; mesh.receiveShadow = !mat.transparent || mat === undefined;
      if (layer === 'glass') { mesh.renderOrder = 2; mesh.castShadow = false; }
      groups[layer].add(mesh);
    }
  }
}
const B = new Buckets();
function addBox(layer, mat, x0, y0, x1, y1, z0, z1) {
  const w = Math.abs(x1 - x0), d = Math.abs(y1 - y0), h = Math.abs(z1 - z0);
  if (w < 1e-3 || d < 1e-3 || h < 1e-3) return;
  const g = boxGeo(w, h, d); g.translate((x0 + x1) / 2 - CX, (z0 + z1) / 2, -((y0 + y1) / 2 - CY));
  if (Array.isArray(mat)) { // per-face materials: split faces
    const idx = [0, 1, 2, 3, 4, 5];
    const ni = g.toNonIndexed();
    idx.forEach(f => { const part = new THREE.BufferGeometry(); for (const a of ['position', 'normal', 'uv']) { const src = ni.attributes[a]; part.setAttribute(a, new THREE.BufferAttribute(src.array.slice(f * 6 * src.itemSize, (f + 1) * 6 * src.itemSize), src.itemSize)); } B.add(layer, mat[f], part); });
  } else B.add(layer, mat, g);
}
function addCyl(layer, mat, cx, cy, r, z0, z1, seg = 20, r2) {
  const g = new THREE.CylinderGeometry(r2 ?? r, r, z1 - z0, seg); g.translate(cx - CX, (z0 + z1) / 2, -(cy - CY)); B.add(layer, mat, g);
}

// ---------- roofs ----------
const ROOFS = P.roofs;
function roofUnder(px, py) {
  let best = null;
  for (const r of ROOFS) {
    if (px < r.x0 - 0.01 || px > r.x1 + 0.01 || py < r.y0 - 0.01 || py > r.y1 + 0.01) continue;
    let u;
    if (r.type === 'flat') u = r.h - 0.6;
    else { const yn = r.y1 + r.oh.n, ys = r.y0 - r.oh.s; u = py >= r.valley ? r.hv + (r.he - r.hv) * (py - r.valley) / (yn - r.valley) : r.hv + (r.he - r.hv) * (r.valley - py) / (r.valley - ys); }
    best = best === null ? u : Math.max(best, u);
  }
  return best ?? 10;
}
function buildRoofs(M) {
  for (const r of ROOFS) {
    const x0 = r.x0 - r.oh.w, x1 = r.x1 + r.oh.e, y0 = r.y0 - r.oh.s, y1 = r.y1 + r.oh.n;
    if (r.type === 'flat') {
      const z0 = r.h - 0.6, z1 = r.h + 0.4;
      addBox('roof', [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred], x0, y0, x1, y1, z0, z1);
      // thin fascia reveal line
      addBox('roof', M.dark, x0 - 0.05, y0 - 0.05, x1 + 0.05, y1 + 0.05, z1 - 0.05, z1 + 0.05);
    } else {
      const th = 0.9; const xw = x1 - x0, cx = (x0 + x1) / 2 - CX;
      const slab = (ya, ha, yb, hb, mats, wOverride, xc, drop = 0) => { // ya<yb plan
        const za = -(ya - CY), zb = -(yb - CY); const L = Math.hypot(za - zb, ha - hb);
        const g = boxGeo(wOverride ?? xw, th, L); const ang = Math.atan2(hb - ha, za - zb);
        // +z end corresponds to za (ya). rotate so that +z end has height ha
        g.rotateX(ang); g.translate(xc ?? cx, (ha + hb) / 2 + th / 2 - drop, (za + zb) / 2);
        const ni = g.toNonIndexed();
        mats.forEach((m, f) => { const part = new THREE.BufferGeometry(); for (const a of ['position', 'normal', 'uv']) { const src = ni.attributes[a]; part.setAttribute(a, new THREE.BufferAttribute(src.array.slice(f * 6 * src.itemSize, (f + 1) * 6 * src.itemSize), src.itemSize)); } B.add('roof', m, part); });
      };
      const fm = [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred];
      slab(y0, r.he, r.valley, r.hv, fm);
      slab(r.valley, r.hv, y1, r.he, fm);
      // exposed fir beams under the butterfly (inside, every 8 ft)
      for (let bx = r.x0 + 10; bx < r.x1; bx += 8) {
        const bm = [M.c.fir, M.c.fir, M.c.fir, M.c.fir, M.c.fir, M.c.fir];
        slab(r.y0, roofUnder(bx, r.y0), r.valley, r.hv, bm, 0.55, bx - CX, 1.1);
        slab(r.valley, r.hv, r.y1, roofUnder(bx, r.y1), bm, 0.55, bx - CX, 1.1);
      }
      // valley gutter + rain chain into courtyard
      addBox('roof', M.frame, x0, r.valley - 0.4, x1, r.valley + 0.4, r.hv + 0.6, r.hv + 0.95);
    }
  }
}

// ---------- walls ----------
function cladFor(roomId) {
  const r = P.rooms.find(q => q.id === roomId); if (!r) return 'stucco';
  return P.cladOvr[roomId] || P.clad[r.wing] || 'stucco';
}
const blocking = []; // plan segments for walk collision
function wallPieces(s) {
  const fs = [...s.feats].sort((a, b) => a.a - b.a); const out = []; let cur = s.a;
  for (const f of fs) { if (f.a > cur + 1e-6) out.push({ a: cur, b: f.a, k: 'solid' }); out.push({ a: f.a, b: f.b, k: f.k, x: f.x }); cur = f.b; }
  if (s.b > cur + 1e-6) out.push({ a: cur, b: s.b, k: 'solid' });
  return out;
}
const pt = (s, v) => s.o === 'h' ? [v, s.c] : [s.c, v];
function extrudeOnWall(layer, mat, s, a, b, zb, zt, o1, o2) {
  // along-wall [a,b], heights zb..(zt or roof fn), across offsets o1<o2 (plan +y / +x positive)
  const shape = new THREE.Shape();
  shape.moveTo(a, zb); shape.lineTo(b, zb);
  if (zt != null) { shape.lineTo(b, zt); shape.lineTo(a, zt); }
  else {
    const kinks = [b];
    if (s.o === 'v') for (const r of ROOFS) if (r.type === 'butterfly' && s.c >= r.x0 - 0.01 && s.c <= r.x1 + 0.01 && r.valley > a && r.valley < b) kinks.unshift(r.valley);
    kinks.sort((p, q) => q - p);
    for (const k of kinks) { const [px, py] = pt(s, k); shape.lineTo(k, roofUnder(px, py)); }
    const [px, py] = pt(s, a); shape.lineTo(a, roofUnder(px, py));
  }
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: o2 - o1, bevelEnabled: false, steps: 1 });
  const m = new THREE.Matrix4();
  if (s.o === 'h') { // local x -> world x (plan x), local y -> up, local z -> world +z = plan -y
    m.makeTranslation(-CX, 0, -(s.c - CY) - o2);
  } else { // rotate +90 about Y: local x -> world -z, local z -> world +x
    m.makeRotationY(Math.PI / 2); m.premultiply(new THREE.Matrix4().makeTranslation(s.c - CX + o1, 0, CY));
  }
  g.applyMatrix4(m);
  B.add(layer, mat, g);
}
function wallSolid(M, s, a, b, zb, zt) {
  const t = s.ext ? 0.75 : 0.45;
  // extend exterior ends to close corners
  let aa = a, bb = b;
  if (s.ext) { if (Math.abs(a - s.a) < 1e-6) aa -= t / 2; if (Math.abs(b - s.b) < 1e-6) bb += t / 2; }
  if (s.ext) {
    const inside = s.pos || s.neg; const outSign = s.pos ? -1 : 1;
    const clad = M.c[cladFor(inside)]; const inner = inside === '304' ? M.c.cedar : M.c.plaster;
    const outRange = outSign > 0 ? [0, t / 2] : [-t / 2, 0]; const inRange = outSign > 0 ? [-t / 2, 0] : [0, t / 2];
    extrudeOnWall('walls', clad, s, aa, bb, zb, zt, outRange[0], outRange[1]);
    extrudeOnWall('walls', inner, s, aa, bb, zb, zt, inRange[0], inRange[1]);
  } else {
    const sauna = s.pos === '304' || s.neg === '304';
    extrudeOnWall('walls', sauna ? M.c.cedar : M.c.plaster, s, a - t / 2 + 0.001, b + t / 2 - 0.001, zb, zt, -t / 2, t / 2);
  }
}
function glassPanel(M, s, a, b, zb, zt, slider) {
  const t = 0.08;
  const box = (A, Bv, za, zz, o1, o2, mat, layer) => {
    if (s.o === 'h') addBox(layer, mat, A, s.c + o1, Bv, s.c + o2, za, zz); else addBox(layer, mat, s.c + o1, A, s.c + o2, Bv, za, zz);
  };
  box(a, b, zb, zt, -t / 2, t / 2, M.c.glass, 'glass');
  box(a, b, zb, zb + 0.25, -0.18, 0.18, M.c.frame, 'walls');
  box(a, b, zt - 0.3, zt, -0.18, 0.18, M.c.frame, 'walls');
  const n = Math.max(1, Math.round((b - a) / (slider ? 5.5 : 8)));
  for (let i = 0; i <= n; i++) { const p = a + (b - a) * i / n; box(p - 0.09, p + 0.09, zb, zt, -0.15, 0.15, M.c.frame, 'walls'); }
  blocking.push({ s, a, b });
}
function buildWalls(M) {
  for (const s of P.walls) {
    for (const p of wallPieces(s)) {
      const [mx, my] = pt(s, (p.a + p.b) / 2); const top = roofUnder(mx, my);
      if (p.k === 'solid') { wallSolid(M, s, p.a, p.b, 0, null); blocking.push({ s, a: p.a, b: p.b }); }
      else if (p.k === 'open') { /* no wall */ }
      else if (['door', 'exdoor', 'slide', 'front'].includes(p.k)) {
        const dh = p.k === 'front' ? 9 : p.k === 'slide' ? 8 : 7.5;
        if (top > dh + 0.05) wallSolid(M, s, p.a, p.b, dh, null);
        if (p.k === 'front') { // charred-oak pivot door, slightly open
          const L = p.b - p.a; const g = boxGeo(L * 0.62, dh - 0.05, 0.22); g.translate(L * 0.31, dh / 2, 0);
          g.rotateY(-0.55); const [hx, hy] = pt(s, p.a + L * 0.19); g.translate(hx - CX, 0, -(hy - CY)); B.add('walls', M.c.fir, g);
        }
      } else if (p.k === 'window') {
        const [sill, head] = p.x; wallSolid(M, s, p.a, p.b, 0, sill); glassPanel(M, s, p.a, p.b, sill, Math.min(head, top), false);
        if (top > head + 0.05) wallSolid(M, s, p.a, p.b, head, null);
      } else if (p.k === 'glass' || p.k === 'fixed') {
        glassPanel(M, s, p.a, p.b, 0, top, p.k === 'glass');
      }
    }
  }
}

// ---------- floors, rooms ----------
const FLOOR = { oak: 'oak', stone: 'stone', tatami: 'tatami', rubber: 'rubber', cedar: 'cedar', concrete: 'concrete' };
export const pickMeshes = [];
function buildFloors(M, groups) {
  const pickMat = new THREE.MeshBasicMaterial({ visible: false });
  for (const r of P.rooms) {
    const fm = M[FLOOR[r.floor]] || M.oak; const mats = [M.plinth, M.plinth, fm, M.plinth, M.plinth, M.plinth];
    const pit = P.furn.find(f => f.room === r.id && f.shape === 'pit');
    if (pit) {
      addBox('floors', mats, r.x0, r.y0, r.x1, pit.y0, -1.8, 0); addBox('floors', mats, r.x0, pit.y1, r.x1, r.y1, -1.8, 0);
      addBox('floors', mats, r.x0, pit.y0, pit.x0, pit.y1, -1.8, 0); addBox('floors', mats, pit.x1, pit.y0, r.x1, pit.y1, -1.8, 0);
      addBox('floors', [M.oak, M.oak, M.oak, M.oak, M.oak, M.oak], pit.x0, pit.y0, pit.x1, pit.y1, -2.0, -1.5);
    } else addBox('floors', mats, r.x0, r.y0, r.x1, r.y1, -1.8, 0);
    const top = roofUnder((r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2);
    const g = new THREE.BoxGeometry(r.w - 0.2, top, r.d - 0.2); g.translate((r.x0 + r.x1) / 2 - CX, top / 2, -((r.y0 + r.y1) / 2 - CY));
    const m = new THREE.Mesh(g, pickMat); m.userData.room = r.id; groups.pick.add(m); pickMeshes.push(m);
  }
}

// ---------- furniture ----------
function buildFurniture(M) {
  for (const f of P.furn) {
    if (f.shape === 'pit') continue;
    const mat = colorMat(f.color);
    const z0 = f.z0, z1 = f.z0 + Math.max(f.h, 0.04);
    if (f.shape === 'frame') {
      const p = 0.25; const posts = [[f.x0, f.y0], [f.x1 - p, f.y0], [f.x0, f.y1 - p], [f.x1 - p, f.y1 - p]];
      posts.forEach(([x, y]) => addBox('furn', mat, x, y, x + p, y + p, z0, z1));
      addBox('furn', mat, f.x0, f.y0, f.x1, f.y0 + p, z1 - p, z1); addBox('furn', mat, f.x0, f.y1 - p, f.x1, f.y1, z1 - p, z1);
      addBox('furn', mat, f.x0, f.y0, f.x0 + p, f.y1, z1 - p, z1); addBox('furn', mat, f.x1 - p, f.y0, f.x1, f.y1, z1 - p, z1);
      if (f.label.includes('Cadillac')) { addBox('furn', colorMat('#e6dccb'), f.x0 + 0.2, f.y0 + 0.2, f.x1 - 0.2, f.y1 - 0.2, 1.9, 2.4); addBox('furn', mat, f.x0, f.y0, f.x1, f.y1, 0, 1.9); }
      else { for (let k = 1; k < 4; k++) addBox('furn', mat, f.x0, f.y0 + (f.y1 - f.y0) * k / 4, f.x1, f.y0 + (f.y1 - f.y0) * k / 4 + 0.12, z1 - 0.5, z1 - 0.38); }
    } else if (f.shape === 'drums') {
      const cx = (f.x0 + f.x1) / 2, cy = (f.y0 + f.y1) / 2;
      [[0, -1.4, 0.9, 1.1], [-1.5, 0, 0.6, 2.4], [1.5, 0.2, 0.55, 2.6], [-0.8, 1.3, 0.5, 2.8], [0.9, 1.4, 0.5, 2.8], [-2, 1.6, 0.7, 3.6], [2.1, 1.7, 0.75, 3.8]].forEach(([dx, dy, r, z], i) => {
        if (i >= 5) { addCyl('furn', colorMat('#b39a5a'), cx + dx, cy + dy, r, z, z + 0.05, 16); addCyl('furn', mat, cx + dx, cy + dy, 0.05, 0, z, 6); }
        else addCyl('furn', i === 0 ? colorMat('#444') : mat, cx + dx, cy + dy, r, i === 0 ? 0 : z - 0.35, i === 0 ? 1.8 : z, 16);
      });
      addCyl('furn', colorMat('#6f7a55'), cx, cy + 2.4, 0.6, 0, 1.6, 12);
    } else if (f.shape === 'wall') {
      addBox('furn', mat, f.x0, f.y0, f.x1, f.y1, z0, z1);
      const holds = ['#e8c547', '#3f7fbf', '#d0573c', '#4e9a52', '#8e5cc2'];
      for (let i = 0; i < 46; i++) { const y = f.y0 + 0.4 + ((i * 37) % 100) / 100 * (f.y1 - f.y0 - 0.8); const z = 0.8 + ((i * 53) % 100) / 100 * (z1 - 1.6); addBox('furn', colorMat(holds[i % 5]), f.x1, y, f.x1 + 0.22, y + 0.35, z, z + 0.3); }
    } else {
      addBox('furn', mat, f.x0, f.y0, f.x1, f.y1, z0, z1);
      if (f.label.includes('Guitar')) { addCyl('furn', colorMat('#a8743f'), (f.x0 + f.x1) / 2, (f.y0 + f.y1) / 2, 0.6, 1.0, 2.6, 16); addBox('furn', colorMat('#3a2a20'), (f.x0 + f.x1) / 2 - 0.08, (f.y0 + f.y1) / 2 - 0.08, (f.x0 + f.x1) / 2 + 0.08, (f.y0 + f.y1) / 2 + 0.08, 2.6, 4.2); }
      if (f.label.includes('Mic')) addCyl('furn', colorMat('#222'), (f.x0 + f.x1) / 2, (f.y0 + f.y1) / 2, 0.18, z1, z1 + 0.45, 10);
    }
  }
  // dumbbells on rack
  for (let i = 0; i < 6; i++) { const x = 44.4 + i * 0.8; addCyl('furn', colorMat('#222'), x, 21.3, 0.18, 3, 3.5, 10); }
  // balance boards rollers / plyo
  addCyl('furn', colorMat('#6b4a33'), 42.2, 20.5, 0.35, 0, 0.7, 12);
}

// ---------- site & landscape ----------
function slats(layer, mat, x0, y0, x1, y1, z0, z1, gap = 0.45, w = 0.15) {
  const L = Math.hypot(x1 - x0, y1 - y0); const n = Math.floor(L / gap);
  for (let i = 0; i <= n; i++) { const t = i / n; const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t; addBox(layer, mat, x - w / 2, y - w / 2, x + w / 2, y + w / 2, z0, z1); }
}
function buildSite(M, groups) {
  const S = P.site; const G = -1.7;
  // ground
  const gg = new THREE.PlaneGeometry(1600, 1600, 1, 1); gg.rotateX(-Math.PI / 2);
  const uv = gg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 1600, uv.getY(i) * 1600);
  const ground = new THREE.Mesh(gg, M.meadow); ground.position.y = G; ground.receiveShadow = true; groups.ground.add(ground);
  // courtyard: stone base, engawa deck, zen gravel
  const c = P.courtyard;
  addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], c.x0, c.y0, c.x1, c.y1, G, -0.45);
  const dk = [M.deck, M.deck, M.deck, M.deck, M.deck, M.deck];
  addBox('site', dk, c.x0, c.y1 - 4, c.x1, c.y1, -0.45, -0.2); addBox('site', dk, c.x0, c.y0, c.x1, c.y0 + 4, -0.45, -0.2);
  addBox('site', dk, c.x0, c.y0 + 4, c.x0 + 4, c.y1 - 4, -0.45, -0.2); addBox('site', dk, c.x1 - 4, c.y0 + 4, c.x1, c.y1 - 4, -0.45, -0.2);
  const z = S.zen; addBox('site', M.plinth, z.x0 - 0.3, z.y0 - 0.3, z.x1 + 0.3, z.y1 + 0.3, -0.45, -0.3); addBox('site', M.gravel, z.x0, z.y0, z.x1, z.y1, -0.45, -0.32);
  [[41, 44, 1.6, 1.4], [52, 39, 1.2, 1.0], [54, 46, 0.9, 0.8]].forEach(([x, y, r, h]) => { const g = new THREE.DodecahedronGeometry(r, 0); g.scale(1, h / r * 0.7, 1); g.translate(x - CX, -0.3 + h * 0.3, -(y - CY)); B.add('site', M.plinth, g); });
  [[64, 32.5], [66, 36], [65, 52], [62, 55.5], [60, 40.5]].forEach(([x, y]) => addBox('site', M.stone, x - 1, y - 0.7, x + 1, y + 0.7, -0.45, -0.25));
  addCyl('site', M.plinth, 47, 54, 1.1, -0.45, 0.9, 14); addCyl('site', M.water, 47, 54, 0.8, 0.9, 0.95, 14);
  // maple
  const m = S.maple; addCyl('site', M.dark, m.cx, m.cy, 0.35, -0.45, 6, 8, 0.25);
  const leaf = new THREE.MeshStandardMaterial({ color: 0xc0562e, roughness: 0.9 });
  [[0, 0, 7.5, 3.2], [2, 1, 6.5, 2.4], [-2, -1, 6.8, 2.5], [1, -2, 8.5, 2.1], [-1, 2, 8.6, 2]].forEach(([dx, dy, h, r]) => { const g = new THREE.IcosahedronGeometry(r, 1); g.scale(1, 0.7, 1); g.translate(m.cx + dx - CX, h, -(m.cy + dy - CY)); B.add('site', leaf, g); });
  // plinth band around the house footprint under exterior walls handled by floors
  // pool + deck
  const pd = S.pooldeck, p = S.pool;
  addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], pd.x0, pd.y0, pd.x1, p.y0, G, -1.0);
  addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], pd.x0, p.y1, pd.x1, pd.y1, G, -1.0);
  addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], pd.x0, p.y0, p.x0, p.y1, G, -1.0);
  addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], p.x1, p.y0, pd.x1, p.y1, G, -1.0);
  addBox('site', new THREE.MeshStandardMaterial({ color: 0x7fb6c2, roughness: 0.6 }), p.x0, p.y0, p.x1, p.y1, -5.5, -5.4);
  addBox('site', M.water, p.x0, p.y0, p.x1, p.y1, -5.4, -1.4);
  // loungers
  for (let i = 0; i < 3; i++) addBox('site', colorMat('#d8cbb3'), 60 + i * 7, -27, 62.5 + i * 7, -23.5, -1, -0.2);
  // outdoor shower w/ slat screen
  const os = S.outdoor_shower; addBox('site', M.stone, os.x0, os.y0, os.x1, os.y1, -1.2, -0.9);
  slats('site', M.c.fir, os.x0, os.y0, os.x0, os.y1, -0.9, 7); slats('site', M.c.fir, os.x0, os.y0, os.x1, os.y0, -0.9, 7);
  addBox('site', M.frame, os.x1 - 0.8, os.y1 - 1, os.x1 - 0.6, os.y1 - 0.8, -0.9, 7.2); addBox('site', M.frame, os.x1 - 1.8, os.y1 - 1, os.x1 - 0.6, os.y1 - 0.8, 7.0, 7.2);
  // sprint lane
  const l = S.lane; addBox('site', M.turf, l.x0, l.y0, l.x1, l.y1, G, -1.05);
  for (let i = 0; i <= 4; i++) { const x = l.x0 + i * 15; addBox('site', M.white, x - 0.15, l.y0, x + 0.15, l.y1, -1.05, -1.02); }
  addBox('site', M.white, l.x0, (l.y0 + l.y1) / 2 - 0.08, l.x1, (l.y0 + l.y1) / 2 + 0.08, -1.05, -1.03);
  addBox('site', M.c.charred, l.x1 + 0.5, l.y0 - 1, l.x1 + 1.5, l.y1 + 1, G, 2.5); // run-out end wall
  // gym path to lane
  addBox('site', M.stone, 4, -8, 48, 0, G, -1.05);
  // veg garden
  const v = S.veg; addBox('site', M.gravel, v.x0, v.y0, v.x1, v.y1, G, -1.1);
  for (let i = 0; i < 4; i++) { const x = v.x0 + 1.5 + i * 5.8; addBox('site', M.c.fir, x, v.y0 + 2, x + 4, v.y0 + 20, G, 0.6); addBox('site', colorMat('#4a3a2c'), x + 0.2, v.y0 + 2.2, x + 3.8, v.y0 + 19.8, 0.6, 0.65);
    for (let k = 0; k < 8; k++) { const g = new THREE.IcosahedronGeometry(0.75, 0); g.translate(x + 2 - CX, 1.1, -(v.y0 + 3.5 + k * 2.1 - CY)); B.add('site', colorMat(k % 3 ? '#5f8a3e' : '#7aa64c'), g); } }
  slats('site', M.c.fir, v.x0, v.y0, v.x0, v.y1, G, 3.5, 1.2, 0.2); slats('site', M.c.fir, v.x0, v.y1, v.x1, v.y1, G, 3.5, 1.2, 0.2);
  // bike racks + bikes (torus wheels)
  const bk = S.bikes; addBox('site', M.stone, bk.x0 - 1, bk.y0, bk.x1, bk.y1, G, -1.05);
  const tire = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 });
  for (let i = 0; i < 4; i++) { const y = bk.y0 + 1.2 + i * 2.4; addBox('site', M.frame, bk.x0 + 0.2, y - 0.05, bk.x1 - 0.2, y + 0.05, -1.05, 1.3);
    [0, 2.5].forEach(dx => { const g = new THREE.TorusGeometry(1.1, 0.12, 6, 18); g.rotateY(Math.PI / 2 * 0); g.translate(bk.x0 - 1.2 + dx - CX, 0.0, -(y - CY)); B.add('site', tire, g); });
    addBox('site', colorMat(['#a3613d', '#3f7fbf', '#4e9a52', '#e8c547'][i]), bk.x0 - 1.2, y - 0.06, bk.x0 + 1.3, y + 0.06, 0.6, 0.75); }
  // entry court + drive + carport
  const ec = S.entrycourt; addBox('site', M.stone, ec.x0, ec.y0, ec.x1, ec.y1, G, -1.05);
  addBox('site', M.gravel, -46, 16, -20, 58, G, -1.1);
  const dr = new THREE.Shape(); [[-90, 4], [-60, 10], [-44, 24], [-46, 16], [-62, 0], [-90, -6]].forEach(([x, y], i) => i ? dr.lineTo(x - CX, (y - CY)) : dr.moveTo(x - CX, (y - CY)));
  const dg = new THREE.ShapeGeometry(dr); dg.rotateX(-Math.PI / 2); dg.scale(1, 1, 1); dg.translate(0, G + 0.08, 0);
  // ShapeGeometry after rotateX(-90): shape y -> -z, matches world z = -(y-CY)
  B.add('site', M.gravel, dg);
  const cp = S.carport; [[cp.x0, cp.y0], [cp.x1 - 0.6, cp.y0], [cp.x0, cp.y1 - 0.6], [cp.x1 - 0.6, cp.y1 - 0.6]].forEach(([x, y]) => addBox('site', M.c.charred, x, y, x + 0.6, y + 0.6, G, 9));
  addBox('site', [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred], cp.x0 - 3, cp.y0 - 3, cp.x1 + 3, cp.y1 + 3, 9, 9.8);
  // cars (simple blocks)
  addBox('site', colorMat('#8d9399'), cp.x0 + 3, cp.y0 + 3, cp.x0 + 9.5, cp.y1 - 4, G, 3.6); addBox('site', colorMat('#5b6e5a'), cp.x0 + 13, cp.y0 + 3, cp.x0 + 19.5, cp.y1 - 4, G, 4.8);
  // entry slat screen + low rammed earth wall
  slats('site', M.c.fir, -2, 30, -2, 46, G, 8, 0.5); addBox('site', M.c.rammed, -2.5, 46.5, -1.5, 59.5, G, 4);
  // north veranda deck + pergola + fire pit
  const ve = S.veranda; addBox('site', [M.plinth, M.plinth, M.deck, M.plinth, M.plinth, M.plinth], ve.x0, ve.y0, ve.x1, ve.y1, G, -0.25);
  const pg = S.pergola; addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], pg.x0, pg.y0, pg.x1, pg.y1, G, -0.25);
  [[pg.x0, pg.y0 + 0.5], [pg.x1 - 0.7, pg.y0 + 0.5], [pg.x0, pg.y1 - 0.7], [pg.x1 - 0.7, pg.y1 - 0.7]].forEach(([x, y]) => addBox('site', M.c.charred, x, y, x + 0.7, y + 0.7, -0.25, 9));
  addBox('site', M.c.charred, pg.x0 - 1, pg.y0 + 0.5, pg.x1 + 1, pg.y0 + 1.1, 8.4, 9.2); addBox('site', M.c.charred, pg.x0 - 1, pg.y1 - 1.1, pg.x1 + 1, pg.y1 - 0.5, 8.4, 9.2);
  for (let x = pg.x0; x <= pg.x1; x += 1.2) addBox('site', M.c.fir, x, pg.y0 - 0.5, x + 0.25, pg.y1 + 0.5, 9.2, 9.7);
  addBox('site', colorMat('#6b4a33'), 12, 90, 22, 94, 2.2, 2.5); [12.5, 21].forEach(x => addBox('site', colorMat('#6b4a33'), x, 90.5, x + 0.4, 93.5, -0.25, 2.2));
  addBox('site', colorMat('#d9cbb5'), 12, 88.4, 22, 89.6, -0.25, 1.3); addBox('site', colorMat('#d9cbb5'), 12, 94.4, 22, 95.6, -0.25, 1.3);
  const fp = S.firepit;
  { const g = new THREE.CylinderGeometry(fp.r + 1.5, fp.r + 1.5, 0.4, 40); g.translate(fp.cx - CX, G + 0.1, -(fp.cy - CY)); B.add('site', M.stone, g);
    const ring = new THREE.TorusGeometry(fp.r - 1.2, 0.9, 6, 40); ring.rotateX(Math.PI / 2); ring.translate(fp.cx - CX, G + 0.3, -(fp.cy - CY)); B.add('site', colorMat('#cdbfa6'), ring);
    addCyl('site', M.plinth, fp.cx, fp.cy, 1.6, G, -0.2, 16);
    const fire = new THREE.MeshStandardMaterial({ color: 0xff8a3d, emissive: 0xff6a1a, emissiveIntensity: 1.5 }); fire.name = 'fire';
    const g2 = new THREE.ConeGeometry(0.9, 1.6, 8); g2.translate(fp.cx - CX, 0.6, -(fp.cy - CY)); B.add('site', fire, g2); }
  // climbing pavilion (open-air, timber + standing seam, soft-fall)
  { const cl = S.climb, o = cl.oh;
    addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], cl.x0 - 1, cl.y0 - 1, cl.x1 + 1, cl.y1 + 1, G, -1.0);
    addBox('site', colorMat('#b5694a'), cl.x0, cl.y0, cl.x1, cl.y1, -1.0, -0.6); // poured rubber soft-fall
    [[cl.x0, cl.y0], [cl.x1 - 0.7, cl.y0], [cl.x0, cl.y1 - 0.7], [cl.x1 - 0.7, cl.y1 - 0.7]].forEach(([x, y]) => addBox('site', M.c.fir, x, y, x + 0.7, y + 0.7, -0.6, cl.h - 1));
    addBox('site', M.c.fir, cl.x0 - 0.5, cl.y0, cl.x1 + 0.5, cl.y0 + 0.7, cl.h - 2, cl.h - 1); addBox('site', M.c.fir, cl.x0 - 0.5, cl.y1 - 0.7, cl.x1 + 0.5, cl.y1, cl.h - 2, cl.h - 1);
    for (let x = cl.x0 + 3; x < cl.x1 - 1; x += 3) addBox('site', M.c.fir, x, cl.y0 - o + 0.5, x + 0.35, cl.y1 + o - 0.5, cl.h - 1.0, cl.h - 0.6);
    addBox('site', [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred], cl.x0 - o, cl.y0 - o, cl.x1 + o, cl.y1 + o, cl.h - 0.6, cl.h + 0.3);
    // climbing wall on the north side, facing south, with holds and a volume
    addBox('site', M.c.charred, cl.x0 + 1, cl.y1 - 1.6, cl.x1 - 1, cl.y1 - 0.9, -0.6, 11.4);
    addBox('site', M.c.fir, cl.x0 + 1.2, cl.y1 - 2.0, cl.x1 - 1.2, cl.y1 - 1.6, -0.4, 11.2);
    const holds = ['#e8c547', '#3f7fbf', '#d0573c', '#4e9a52', '#8e5cc2', '#f1eee7'];
    for (let i = 0; i < 70; i++) { const x = cl.x0 + 1.6 + ((i * 37) % 100) / 100 * 14.6; const z = 0.6 + ((i * 53) % 100) / 100 * 10; addBox('site', colorMat(holds[i % 6]), x, cl.y1 - 2.3, x + 0.38, cl.y1 - 2.0, z, z + 0.3); }
    addBox('site', colorMat('#d9cbb5'), cl.x0 + 9, cl.y1 - 3.4, cl.x0 + 12, cl.y1 - 2.0, 4, 6.5); // volume
    addBox('site', colorMat('#55524c'), cl.x0 + 1.2, cl.y1 - 7, cl.x1 - 1.2, cl.y1 - 2.3, -0.6, 0.2); // crash pad
    // second bike rack in the active zone
    for (let i = 0; i < 4; i++) { const y = cl.y0 + 3 + i * 2.4; addBox('site', M.frame, cl.x1 - 2.2, y - 0.05, cl.x1 - 0.9, y + 0.05, -0.6, 1.8);
      [0, 2.3].forEach(dx => { const g = new THREE.TorusGeometry(1.0, 0.11, 6, 18); g.translate(cl.x1 - 3.6 + dx - CX, 0.5, -(y - CY)); B.add('site', tire, g); });
      addBox('site', colorMat(['#4e9a52', '#e8c547', '#3f7fbf', '#a3613d'][i]), cl.x1 - 3.6, y - 0.06, cl.x1 - 1.2, y + 0.06, 1.0, 1.15); }
    addBox('site', M.stone, cl.x1 + 1, 2, 4, 6, G, -1.0); // path to gym/office
  }
  // bath garden wall
  const bg = S.bathgarden; addBox('site', M.c.stucco, bg.x1 - 0.5, bg.y0, bg.x1, bg.y1, G, 7); addBox('site', M.c.stucco, bg.x0, bg.y1 - 0.5, bg.x1, bg.y1, G, 7);
  addBox('site', M.gravel, bg.x0, bg.y0, bg.x1 - 0.5, bg.y1 - 0.5, G, -1.1);
  // stepping path from entry court to front door + gallery deck to pool
  addBox('site', M.stone, 72, 0, 78, 14, G, -0.9); addBox('site', M.stone, 66, -0, 72, 1, G, -0.95);
}
function buildTrees(groups) {
  const trunkG = new THREE.CylinderGeometry(0.35, 0.5, 1, 6); trunkG.translate(0, 0.5, 0);
  const pineG = new THREE.ConeGeometry(1, 1, 7); pineG.translate(0, 0.5, 0);
  const aspG = new THREE.IcosahedronGeometry(1, 1);
  const pts = []; let s = 11; const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < 400 && pts.length < 120; i++) {
    const x = -170 + r() * 420, y = -140 + r() * 340;
    if (x > -70 && x < 135 && y > -50 && y < 125) continue;
    if (y > 90 && x > -40 && x < 140) continue;
    if (y < -45 && x > -80 && x < 130) continue;
    if (x > -100 && x < -40 && y > -10 && y < 30) continue;
    pts.push([x, y, r()]);
  }
  const trunks = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0xdedad0, roughness: 0.9 }), pts.length);
  const pines = new THREE.InstancedMesh(pineG, new THREE.MeshStandardMaterial({ color: 0x3e5536, roughness: 0.9 }), pts.length);
  const asp = new THREE.InstancedMesh(aspG, new THREE.MeshStandardMaterial({ color: 0xb7b04a, roughness: 0.9 }), pts.length);
  const m = new THREE.Matrix4(); let np = 0, na = 0;
  pts.forEach(([x, y, k], i) => {
    const pine = y > 60 ? k < 0.6 : k < 0.35; const h = pine ? 26 + k * 30 : 22 + k * 16;
    m.compose(W(x, y, -1.7), new THREE.Quaternion(), new THREE.Vector3(1, pine ? h * 0.25 : h * 0.6, 1)); trunks.setMatrixAt(i, m);
    if (pine) { m.compose(W(x, y, h * 0.18), new THREE.Quaternion(), new THREE.Vector3(5 + k * 3, h * 0.85, 5 + k * 3)); pines.setMatrixAt(np++, m); }
    else { m.compose(W(x, y, h * 0.7), new THREE.Quaternion(), new THREE.Vector3(4 + k * 2, h * 0.32, 4 + k * 2)); asp.setMatrixAt(na++, m); }
  });
  pines.count = np; asp.count = na;
  [trunks, pines, asp].forEach(o => { o.castShadow = true; o.receiveShadow = true; groups.site.add(o); });
}

// ---------- mountains ----------
function hash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function vnoise(x, y) { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi; const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; }
function ridged(x, y) { let f = 0, amp = 0.5, fr = 1; for (let i = 0; i < 6; i++) { const n = 1 - Math.abs(vnoise(x * fr, y * fr) * 2 - 1); f += n * n * amp; amp *= 0.5; fr *= 2.05; } return f; }
function buildMountains(groups) {
  const nr = 90, nt = 320, r0 = 700, r1 = 20000;
  const pos = [], col = [], idx = [];
  const cLow = new THREE.Color(0x8d9460), cForest = new THREE.Color(0x3c4f37), cRock = new THREE.Color(0x857e74), cSnow = new THREE.Color(0xf5f6f4), cHaze = new THREE.Color(0xb4c0cb);
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let i = 0; i <= nr; i++) {
    const t = i / nr; const r = r0 + (r1 - r0) * Math.pow(t, 1.9);
    for (let j = 0; j <= nt; j++) {
      const th = j / nt * Math.PI * 2; const x = Math.sin(th) * r, z = -Math.cos(th) * r; // th=0 -> north (-z)
      const north = 0.55 + 0.75 * Math.pow(Math.max(0, Math.cos(th)), 2);
      const foot = vnoise(x / 600 + 9, z / 600 + 2) * 260 * sm(900, 2600, r) * (1 - sm(5000, 9000, r) * 0.5);
      const big = Math.pow(ridged(x / 5200 + 3.1, z / 5200 + 7.7), 1.6) * r * 0.5 * north * sm(2400, 6000, r);
      let h = foot + big;
      if (r > 15000) h *= 1 - sm(15000, 20000, r) * 0.6;
      h += -1.75;
      pos.push(x, h, z);
      const c = cLow.clone();
      c.lerp(cForest, sm(40, 260, h));
      if (h > 900) c.lerp(cRock, sm(900, 1500, h));
      if (h > 1700) c.lerp(cSnow, sm(1700, 2100, h));
      c.lerp(cHaze, Math.min(0.42, sm(3000, 20000, r) * 0.5));
      col.push(c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < nr; i++) for (let j = 0; j < nt; j++) { const a = i * (nt + 1) + j, b = a + nt + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }); mat.fog = false;
  const mesh = new THREE.Mesh(g, mat); groups.mtn.add(mesh);
}

// ---------- labels data ----------
export const OUTDOOR = [
  { id: 'C', name: 'Courtyard', wing: 'Outdoor', x0: 28, y0: 27, x1: 72, y1: 60, notes: 'The heart of the house. Raked-gravel Zen garden with three stones, a Japanese maple, a stone water basin, and a timber engawa deck under 6-ft eaves on all four sides. Every main room opens onto it.', h: null, floor: 'Stone, gravel, timber deck' },
  { id: 'P', name: 'Pool', wing: 'Outdoor', x0: 54, y0: -22, x1: 88, y1: -10, notes: 'Small 34 x 12 ft pool, 4 to 5 ft deep, on the sunny south side right outside the wellness wing. Stone deck, loungers, outdoor shower by the changing-room door.', floor: 'Stone deck' },
  { id: 'L', name: 'Turf Sprint Lane', wing: 'Outdoor', x0: -32, y0: -16, x1: 43, y1: -8, notes: '20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. Steps from the exercise room sliders.', floor: 'Synthetic turf' },
  { id: 'V', name: 'Vegetable Garden', wing: 'Outdoor', x0: -36, y0: 66, x1: -12, y1: 88, notes: 'Four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry.', floor: 'Gravel' },
  { id: 'F', name: 'Sunken Fire Pit', wing: 'Outdoor', x0: 51, y0: 97, x1: 65, y1: 111, notes: '14-ft sunken stone circle facing the mountains, off the covered veranda.', floor: 'Stone' },
  { id: 'D', name: 'Pergola Dining', wing: 'Outdoor', x0: 8, y0: 86, x1: 26, y1: 100, notes: 'Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.', floor: 'Stone' },
  { id: 'W', name: 'Climbing Pavilion', wing: 'Outdoor', x0: -22, y0: 0, x1: -4, y1: 18, area: 0, cov: 324, notes: 'Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A 16-ft-wide, 12-ft-high kids\' bouldering wall sits on the north side facing the sprint lane, over a poured-rubber soft-fall surface and crash pad. It sits in the active zone between the exercise room, the sprint lane and a second 4-bike rack. Covered outdoor area, not conditioned.', floor: 'Poured-rubber soft-fall', equip: ['Climbing wall 16\' × 12\'', 'Bouldering volume', 'Crash pad', '4-bike rack'] },
  { id: 'S', name: 'Outdoor Shower', wing: 'Outdoor', x0: 72.5, y0: 4, x1: 77.5, y1: 10, notes: 'Slat-screened stone shower by the pool, next to the changing room and the east engawa door.', floor: 'Stone' },
  { id: 'K', name: 'Bike Racks', wing: 'Outdoor', x0: -6, y0: 61, x1: -1.5, y1: 71, notes: 'Six-bike rack under the mudroom eave, with gear storage just inside.', floor: 'Stone' },
  { id: 'R', name: 'Carport', wing: 'Outdoor', x0: -44, y0: 30, x1: -20, y1: 54, notes: 'Open two-car carport with a standing-seam roof and a stone entry court. A garage is an open question.', floor: 'Gravel' },
];

export function buildAll(groups) {
  const M = makeMaterials();
  buildRoofs(M); buildWalls(M); buildFloors(M, groups); buildFurniture(M); buildSite(M, groups);
  B.build(groups);
  buildTrees(groups); buildMountains(groups);
  return { M, blocking, roofUnder };
}
export { P };
