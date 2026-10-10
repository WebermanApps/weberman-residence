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
  M.plaster = std({ map: T.lime, normalMap: T.limeN, normalScale: new THREE.Vector2(0.4, 0.4), roughness: 0.96 }); // lime plaster
  M.charred = std({ map: T.charred, normalMap: T.charredN, roughness: 0.82 });
  M.rammed = std({ map: T.rammed, normalMap: T.rammedN, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.95 });
  M.stone = std({ map: T.stone, roughness: 0.8 });
  M.flag = std({ map: T.flag, normalMap: T.flagN, roughness: 0.88 });
  M.plinth = std({ map: T.plinth, roughness: 0.9 });
  M.oak = std({ map: T.oak, roughness: 0.6 });
  M.honey = std({ map: T.honey, normalMap: T.honeyN, normalScale: new THREE.Vector2(0.5, 0.5), roughness: 0.48 });
  M.herring = std({ map: T.herring, normalMap: T.herringN, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.5 });
  M.stonetile = std({ map: T.stonetile, normalMap: T.stonetileN, normalScale: new THREE.Vector2(0.5, 0.5), roughness: 0.62 });
  M.blackstone = std({ map: T.blackstone, normalMap: T.blackstoneN, normalScale: new THREE.Vector2(0.4, 0.4), roughness: 0.42 });
  M.marble = std({ map: T.marble, roughness: 0.18 });
  M.zellige = std({ map: T.zellige, normalMap: T.zelligeN, roughness: 0.12, metalness: 0.05 });
  M.aspen = std({ map: T.aspen, normalMap: T.aspenN, normalScale: new THREE.Vector2(0.4, 0.4), roughness: 0.7 });
  M.pooltile = std({ map: T.pooltile, normalMap: T.pooltileN, roughness: 0.3 });
  M.linen = std({ map: T.linen, color: 0xf2ece0, roughness: 0.95 });
  M.lacq = std({ color: 0xf4f2ed, roughness: 0.32 });
  M.steel = std({ color: 0xb8bcbe, roughness: 0.3, metalness: 0.85 });
  M.deck = std({ map: T.deck, roughness: 0.8 });
  M.soffit = std({ map: T.soffit, roughness: 0.75 });
  M.tatami = std({ map: T.tatami, normalMap: T.tatamiN, roughness: 0.9 });
  M.rubber = std({ map: T.rubber, roughness: 0.95 });
  M.seam = std({ map: T.seam, normalMap: T.seamN, roughness: 0.42, metalness: 0.35, color: 0xe6e6e6 });
  M.gravel = std({ map: T.gravel, normalMap: T.gravelN, roughness: 1 });
  M.turf = std({ map: T.turf, roughness: 1 });
  M.meadow = std({ map: T.meadow, roughness: 1 });
  M.cedar = std({ map: T.cedar, roughness: 0.8 });
  M.concrete = std({ map: T.concrete, roughness: 0.9 });
  M.frame = std({ color: 0x1f1d1b, roughness: 0.45, metalness: 0.5 });
  M.glass = new THREE.MeshPhysicalMaterial({ color: 0xcfe3e6, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide, emissive: 0x000000 });
  M.sheer = std({ color: 0xfbf7ee, roughness: 1, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false });
  M.paper = std({ color: 0xf6efe0, roughness: 1, emissive: 0xffd9a0, emissiveIntensity: 0.25 }); M.paper.name = 'lamp';
  M.lamp = std({ color: 0xfff1d6, emissive: 0xffc77a, emissiveIntensity: 0.6 }); M.lamp.name = 'lamp';
  M.rgb = std({ color: 0xb04de0, emissive: 0x9b3bff, emissiveIntensity: 1.2 });
  M.mirror = std({ color: 0xc9d3d6, roughness: 0.04, metalness: 0.9 });
  M.brass = std({ color: 0xc9a14a, roughness: 0.3, metalness: 0.9 });
  M.leather = std({ color: 0x8a5a34, roughness: 0.55 });
  M.water = std({ color: 0x4d9fb3, roughness: 0.08, metalness: 0.1, transparent: true, opacity: 0.88 });
  M.poolwater = std({ color: 0x3f9a92, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.8 });
  M.white = std({ color: 0xf1eee7, roughness: 0.6 });
  M.dark = std({ color: 0x2c2a27, roughness: 0.7 });
  M.fir = std({ color: 0xc89a66, roughness: 0.7 });
  M.teak = std({ color: 0x9c6a3c, roughness: 0.6 });
  M.highlight = new THREE.MeshBasicMaterial({ color: 0x75805f, transparent: true, opacity: 0.28, depthWrite: false });
  // clipped twins for everything inside the building (section cuts)
  M.c = {};
  for (const k of ['stucco', 'plaster', 'charred', 'rammed', 'cedar', 'stone', 'frame', 'glass', 'oak', 'fir', 'honey', 'herring', 'stonetile', 'blackstone', 'marble', 'zellige', 'aspen', 'linen', 'lacq', 'steel', 'sheer', 'paper', 'lamp', 'rgb', 'mirror', 'brass', 'leather', 'water', 'rubber', 'tatami', 'white', 'dark', 'teak', 'flag']) {
    const m = M[k].clone(); m.name = M[k].name; m.clippingPlanes = clip; m.clipShadows = true; M.c[k] = m;
  }
  M.T = T;
  return M;
}
const colorMats = {};
function colorMat(hex) {
  if (!colorMats[hex]) { const m = new THREE.MeshStandardMaterial({ color: new THREE.Color(hex), roughness: 0.75 }); m.clippingPlanes = clip; m.clipShadows = true; colorMats[hex] = m; }
  return colorMats[hex];
}
let MM = null;
function matFor(c) { return typeof c === 'string' && c.startsWith('mat:') ? (MM.c[c.slice(4)] || MM[c.slice(4)]) : colorMat(c); }

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
function addBox(layer, mat, x0, y0, x1, y1, z0, z1, shear) {
  const w = Math.abs(x1 - x0), d = Math.abs(y1 - y0), h = Math.abs(z1 - z0);
  if (w < 1e-3 || d < 1e-3 || h < 1e-3) return;
  let g = boxGeo(w, h, d); g.translate((x0 + x1) / 2 - CX, (z0 + z1) / 2, -((y0 + y1) / 2 - CY));
  if (shear) { g = g.toNonIndexed(); const p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) + shear(p.getX(i) + CX, CY - p.getZ(i))); g.computeVertexNormals(); }
  if (Array.isArray(mat)) { // per-face materials: split faces
    const idx = [0, 1, 2, 3, 4, 5];
    const ni = g.index ? g.toNonIndexed() : g;
    idx.forEach(f => { const part = new THREE.BufferGeometry(); for (const a of ['position', 'normal', 'uv']) { const src = ni.attributes[a]; part.setAttribute(a, new THREE.BufferAttribute(src.array.slice(f * 6 * src.itemSize, (f + 1) * 6 * src.itemSize), src.itemSize)); } B.add(layer, mat[f], part); });
  } else B.add(layer, mat, g);
}
function addCyl(layer, mat, cx, cy, r, z0, z1, seg = 20, r2) {
  const g = new THREE.CylinderGeometry(r2 ?? r, r, z1 - z0, seg); g.translate(cx - CX, (z0 + z1) / 2, -(cy - CY)); B.add(layer, mat, g);
}
function addGeo(layer, mat, g, x, y, z) { g.translate(x - CX, z, -(y - CY)); B.add(layer, mat, g); }

// ---------- roofs ----------
const ROOFS = P.roofs;
function shedH(r, px, py) { const [p, a0, a1] = r.axis === 'x' ? [px, r.x0, r.x1] : [py, r.y0, r.y1]; return r.h0 + (r.h1 - r.h0) * (p - a0) / (a1 - a0); }
function roofUnder(px, py) {
  let best = null;
  for (const r of ROOFS) {
    if (px < r.x0 - 0.01 || px > r.x1 + 0.01 || py < r.y0 - 0.01 || py > r.y1 + 0.01) continue;
    let u;
    if (r.type === 'flat') u = r.h - 0.6;
    else if (r.type === 'shed') u = shedH(r, px, py) - 0.6;
    else { const yn = r.y1 + r.oh.n, ys = r.y0 - r.oh.s; u = py >= r.valley ? r.hv + (r.he - r.hv) * (py - r.valley) / (yn - r.valley) : r.hv + (r.he - r.hv) * (r.valley - py) / (r.valley - ys); }
    best = best === null ? u : Math.max(best, u);
  }
  return best ?? 10;
}
function buildRoofs(M) {
  for (const r of ROOFS) {
    const x0 = r.x0 - r.oh.w, x1 = r.x1 + r.oh.e, y0 = r.y0 - r.oh.s, y1 = r.y1 + r.oh.n;
    if (r.type === 'shed') { // low-slung mono-pitch standing seam with deep eaves (+ skylight openings)
      const sh = (px, py) => shedH(r, px, py) - (r.axis === 'x' ? r.h0 + (r.h1 - r.h0) * ((r.x0 + r.x1) / 2 - r.x0) / (r.x1 - r.x0) : r.h0 + (r.h1 - r.h0) * ((r.y0 + r.y1) / 2 - r.y0) / (r.y1 - r.y0));
      const hm = shedH(r, (r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2);
      const fm = [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred];
      let rects = [[x0, y0, x1, y1]];
      for (const [hx0, hy0, hx1, hy1] of (r.holes || [])) {
        rects = [[x0, y0, x1, hy0], [x0, hy1, x1, y1], [x0, hy0, hx0, hy1], [hx1, hy0, x1, hy1]];
        const zt = shedH(r, (hx0 + hx1) / 2, (hy0 + hy1) / 2);
        addBox('roof', M.frame, hx0 - 0.25, hy0 - 0.25, hx1 + 0.25, hy1 + 0.25, zt + 0.35, zt + 0.75);
        addBox('roof', M.glass, hx0, hy0, hx1, hy1, zt + 0.7, zt + 0.78);
      }
      for (const [a, b2, c2, d2] of rects) addBox('roof', fm, a, b2, c2, d2, hm - 0.6, hm + 0.4, sh);
      addBox('roof', M.dark, x0 - 0.05, y0 - 0.05, x1 + 0.05, y1 + 0.05, hm + 0.35, hm + 0.45, sh);
    } else if (r.type === 'flat') {
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
    const clad = M.c[cladFor(inside)]; const inner = inside === '304' ? M.c.cedar : (inside === '305' || inside === '303') ? M.c.blackstone : M.c.plaster;
    const outRange = outSign > 0 ? [0, t / 2] : [-t / 2, 0]; const inRange = outSign > 0 ? [-t / 2, 0] : [0, t / 2];
    extrudeOnWall('walls', clad, s, aa, bb, zb, zt, outRange[0], outRange[1]);
    extrudeOnWall('walls', inner, s, aa, bb, zb, zt, inRange[0], inRange[1]);
  } else {
    const has = (id) => s.pos === id || s.neg === id;
    extrudeOnWall('walls', has('304') ? M.c.cedar : (has('305') || has('303')) ? M.c.blackstone : M.c.plaster, s, a - t / 2 + 0.001, b + t / 2 - 0.001, zb, zt, -t / 2, t / 2);
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
const FLOOR = { oak: 'oak', honey: 'honey', herring: 'herring', stonetile: 'stonetile', blackstone: 'blackstone', aspen: 'aspen', stone: 'stone', tatami: 'tatami', rubber: 'rubber', cedar: 'cedar', concrete: 'concrete' };
export const pickMeshes = [];
function buildFloors(M, groups) {
  const pickMat = new THREE.MeshBasicMaterial({ visible: false });
  for (const r of P.rooms) {
    const fm = M[FLOOR[r.floor]] || M.oak; const mats = [M.plinth, M.plinth, fm, M.plinth, M.plinth, M.plinth];
    const pit = P.furn.find(f => f.room === r.id && f.shape === 'pit');
    if (pit) {
      addBox('floors', mats, r.x0, r.y0, r.x1, pit.y0, -1.8, 0); addBox('floors', mats, r.x0, pit.y1, r.x1, r.y1, -1.8, 0);
      addBox('floors', mats, r.x0, pit.y0, pit.x0, pit.y1, -1.8, 0); addBox('floors', mats, pit.x1, pit.y0, r.x1, pit.y1, -1.8, 0);
      addBox('floors', [M.herring, M.herring, M.herring, M.herring, M.herring, M.herring], pit.x0, pit.y0, pit.x1, pit.y1, -2.0, -1.5);
    } else addBox('floors', mats, r.x0, r.y0, r.x1, r.y1, -1.8, 0);
    const top = roofUnder((r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2);
    const g = new THREE.BoxGeometry(r.w - 0.2, top, r.d - 0.2); g.translate((r.x0 + r.x1) / 2 - CX, top / 2, -((r.y0 + r.y1) / 2 - CY));
    const m = new THREE.Mesh(g, pickMat); m.userData.room = r.id; groups.pick.add(m); pickMeshes.push(m);
  }
}

// ---------- furniture & equipment (real-world sizes in feet) ----------
const F_ = 'furn', D_ = 'detail';
function roomOf(id) { return P.rooms.find(r => r.id === id); }
function sphere(layer, mat, x, y, z, r, sy = 1, seg = 12) { const g = new THREE.SphereGeometry(r, seg, Math.max(6, seg / 2)); g.scale(1, sy, 1); addGeo(layer, mat, g, x, y, z); }
function bed(M, f, mat) {
  const r = roomOf(f.room); const headY0 = (f.y0 - r.y0) < (r.y1 - f.y1); const hd = headY0 ? f.y0 : f.y1, sg = headY0 ? 1 : -1;
  addBox(F_, M.c.dark, f.x0 + 0.3, f.y0 + 0.3, f.x1 - 0.3, f.y1 - 0.3, 0, 0.35); // shadow-gap plinth
  addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0.35, f.h - 0.35);
  addBox(F_, M.c.white, f.x0 + 0.05, f.y0 + 0.05, f.x1 - 0.05, f.y1 - 0.05, f.h - 0.35, f.h);
  addBox(F_, colorMat('#d8cdb8'), f.x0 - 0.05, Math.min(hd + sg * 2.2, hd + sg * (f.y1 - f.y0) * 0.95), f.x1 + 0.05, Math.max(hd + sg * 2.2, hd + sg * (f.y1 - f.y0) * 0.95), f.h - 0.3, f.h + 0.12); // duvet
  const n = (f.x1 - f.x0) > 4.5 ? 2 : 1; for (let i = 0; i < n; i++) { const pw = (f.x1 - f.x0 - 0.6) / n; const px = f.x0 + 0.3 + i * pw; addBox(F_, M.c.linen, px + 0.1, Math.min(hd + sg * 0.3, hd + sg * 1.6), px + pw - 0.1, Math.max(hd + sg * 0.3, hd + sg * 1.6), f.h, f.h + 0.45); }
}
function chairsRow(f, mat, faceUp) {
  const n = Math.max(1, Math.round((f.x1 - f.x0) / 2.2)); const cw = 1.6;
  for (let i = 0; i < n; i++) { const cx = f.x0 + (f.x1 - f.x0) * (i + 0.5) / n;
    addBox(F_, mat, cx - cw / 2, f.y0, cx + cw / 2, f.y1, 1.45, 1.6);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sy]) => addBox(F_, colorMat('#6b4a33'), cx + sx * (cw / 2 - 0.1) - 0.05, (sy < 0 ? f.y0 + 0.05 : f.y1 - 0.15), cx + sx * (cw / 2 - 0.1) + 0.05, (sy < 0 ? f.y0 + 0.15 : f.y1 - 0.05), 0, 1.45));
    const by = faceUp ? f.y0 : f.y1 - 0.12; addBox(F_, colorMat('#6b4a33'), cx - cw / 2, by, cx + cw / 2, by + 0.12, 1.6, 2.9); }
}
function lounge(M, x0, y0, x1, y1, mat, backAtY0) {
  addBox(F_, M.c.frame, x0 + 0.2, y0 + 0.2, x1 - 0.2, y1 - 0.2, 0, 0.5);
  addBox(F_, mat, x0, y0, x1, y1, 0.5, 1.25);
  const by0 = backAtY0 ? y0 : y1 - 0.6, by1 = backAtY0 ? y0 + 0.6 : y1; addBox(F_, mat, x0, by0, x1, by1, 1.25, 2.7);
  addBox(F_, mat, x0, y0, x0 + 0.35, y1, 1.25, 1.9); addBox(F_, mat, x1 - 0.35, y0, x1, y1, 1.25, 1.9);
}
function guitar(cx, z, col, cy, t) {
  const body = new THREE.CylinderGeometry(0.62, 0.62, t, 18); body.rotateX(Math.PI / 2); addGeo(F_, colorMat(col), body, cx, cy, z);
  const up = new THREE.CylinderGeometry(0.48, 0.48, t, 18); up.rotateX(Math.PI / 2); addGeo(F_, colorMat(col), up, cx, cy, z + 0.75);
  addBox(F_, colorMat('#3a2a20'), cx - 0.08, cy - t / 2, cx + 0.08, cy + t / 2, z + 1.0, z + 2.6); addBox(F_, colorMat('#2a1d15'), cx - 0.13, cy - t / 2, cx + 0.13, cy + t / 2, z + 2.6, z + 3.0);
}
function buildFurniture(M) {
  MM = M;
  for (const f of P.furn) {
    if (f.shape === 'pit') continue;
    const mat = matFor(f.color);
    const z0 = f.z0, z1 = f.z0 + Math.max(f.h, 0.04), cx = (f.x0 + f.x1) / 2, cy = (f.y0 + f.y1) / 2, w = f.x1 - f.x0, d = f.y1 - f.y0, alongX = w >= d;
    switch (f.shape) {
      case 'island': addBox(F_, M.c.lacq, f.x0 + 0.4, f.y0 + 1.2, f.x1 - 0.4, f.y1 - 0.1, 0, 2.85); addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 2.85, 3.0); addBox(F_, mat, f.x0, f.y0 + 0.2, f.x0 + 0.15, f.y1, 0, 2.85); addBox(F_, mat, f.x1 - 0.15, f.y0 + 0.2, f.x1, f.y1, 0, 2.85); break;
      case 'stools': { const n = Math.round(w / 1.7); for (let i = 0; i < n; i++) { const x = f.x0 + w * (i + 0.5) / n; addCyl(F_, mat, x, cy, 0.62, z1 - 0.12, z1, 16); addCyl(F_, M.c.frame, x, cy, 0.07, 0, z1 - 0.12, 6); const ring = new THREE.TorusGeometry(0.4, 0.035, 4, 16); ring.rotateX(Math.PI / 2); addGeo(F_, M.c.brass, ring, x, cy, 0.85); addCyl(F_, M.c.frame, x, cy, 0.5, 0, 0.05, 14); } break; }
      case 'range': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, z1 - 0.05); addBox(F_, M.c.dark, f.x0 + 0.1, f.y0 + 0.1, f.x1 - 0.1, f.y1 - 0.2, z1 - 0.05, z1 + 0.05); addBox(F_, M.c.dark, f.x0 + 0.3, f.y0 - 0.02, f.x1 - 0.3, f.y0 + 0.02, 0.6, 2.2); for (let i = 0; i < 5; i++) addCyl(D_, M.c.frame, f.x0 + 0.4 + i * 0.55, f.y0 - 0.05, 0.08, 2.6, 2.75, 8); break;
      case 'hood': addBox(F_, M.c.glass, f.x0, f.y0, f.x1, f.y1, z0, z1); addBox(F_, M.c.steel, f.x0 + 0.1, f.y0 + 0.1, f.x1 - 0.1, f.y1 - 0.1, z0 - 0.06, z0); addBox(F_, M.c.steel, cx - 0.5, f.y1 - 1.1, cx + 0.5, f.y1 - 0.05, z1, 12); break;
      case 'sink': addBox(F_, mat, f.x0, f.y0, f.x1, f.y0 + 0.12, z0, z0 + 0.95); addBox(F_, mat, f.x0, f.y0, f.x1, f.y1 - 0.2, z0, z0 + 0.12); addBox(F_, M.c.dark, f.x0 + 0.15, f.y0 + 0.15, f.x1 - 0.15, f.y1 - 0.3, z0 + 0.12, z0 + 0.13);
        addCyl(F_, M.c.brass, cx, f.y1 - 0.15, 0.06, 3.0, 4.2, 8); addBox(F_, M.c.brass, cx - 0.05, f.y1 - 0.95, cx + 0.05, f.y1 - 0.15, 4.1, 4.2); addCyl(F_, M.c.brass, cx, f.y1 - 0.95, 0.05, 3.85, 4.15, 8); break;
      case 'shelves': for (let k = 0; k < 3; k++) { const z = z0 + k * 1.3; addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z, z + 0.13); for (let q = 0; q < 5; q++) { const yy = f.y0 + 0.4 + q * (d - 0.8) / 4; if ((q + k) % 3) addCyl(D_, M.c.white, cx, yy, 0.28, z + 0.13, z + 0.55 + (q % 2) * 0.25, 10); else addBox(D_, colorMat('#c4b49a'), cx - 0.2, yy - 0.3, cx + 0.2, yy + 0.3, z + 0.13, z + 0.9); } } break;
      case 'pendants': { for (let i = 0; i < 3; i++) { const x = f.x0 + w * (i + 0.5) / 3; const g = new THREE.SphereGeometry(0.55, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2); addGeo(F_, M.c.lacq, g, x, cy, z0 + 0.15); addCyl(F_, M.c.lamp, x, cy, 0.3, z0, z0 + 0.15, 12); addCyl(F_, M.c.frame, x, cy, 0.02, z0 + 0.7, 11.8, 4); } break; }
      case 'table': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z1 - 0.15, z1); [[f.x0 + 0.4, f.y0 + 0.4], [f.x1 - 0.6, f.y0 + 0.4], [f.x0 + 0.4, f.y1 - 0.6], [f.x1 - 0.6, f.y1 - 0.6]].forEach(([x, y]) => addBox(F_, mat, x, y, x + 0.2, y + 0.2, 0, z1 - 0.15)); break;
      case 'chairs': chairsRow(f, mat, f.y0 > 70); break;
      case 'lantern': sphere(F_, M.c.paper, cx, cy, z0 + f.h / 2, Math.min(w, d) / 2, f.h / Math.min(w, d)); addCyl(F_, M.c.frame, cx, cy, 0.02, z0 + f.h, 11.8, 4); break;
      case 'lanterns': [[f.x0 + 1.5, f.y0 + 2, 1.3, 7.6], [cx, cy, 1.8, 7.0], [f.x1 - 1.5, f.y1 - 2, 1.1, 8.0]].forEach(([x, y, r, z]) => { sphere(F_, M.c.paper, x, y, z, r, 1.15); addCyl(F_, M.c.frame, x, y, 0.02, z + r, 11.8, 4); }); break;
      case 'shoji': { const n = Math.max(1, Math.round((alongX ? w : d) / 3)); for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n; const off = (i % 2) * 0.25;
          const [a0, a1] = alongX ? [f.x0 + w * t0, f.x0 + w * t1] : [f.y0 + d * t0, f.y0 + d * t1];
          const bx = (A, Bv, za, zz, o1, o2, m) => alongX ? addBox(F_, m, A, f.y0 + o1, Bv, f.y0 + o2, za, zz) : addBox(F_, m, f.x0 + o1, A, f.x0 + o2, Bv, za, zz);
          bx(a0, a1, 0.1, z1 - 0.2, off + 0.07, off + 0.13, M.c.paper);
          for (let k = 0; k <= 3; k++) { const a = a0 + (a1 - a0) * k / 3; bx(a - 0.04, a + 0.04, 0, z1, off, off + 0.2, colorMat('#5a4632')); }
          for (let zz = 0; zz <= z1; zz += 1.0) bx(a0, a1, zz, zz + 0.06, off, off + 0.2, colorMat('#5a4632')); } break; }
      case 'sofa': { const n = Math.max(1, Math.round((alongX ? w : d) / 2.8)); for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n;
          const [xa, ya, xb, yb] = alongX ? [f.x0 + w * t0 + 0.04, f.y0, f.x0 + w * t1 - 0.04, f.y1] : [f.x0, f.y0 + d * t0 + 0.04, f.x1, f.y0 + d * t1 - 0.04];
          addBox(F_, mat, xa, ya, xb, yb, z0, z0 + f.h * 0.75); addBox(F_, mat, xa + 0.05, ya + 0.05, xb - 0.05, yb - 0.05, z0 + f.h * 0.75, z0 + f.h); }
        if (f.room === '407') { addBox(F_, mat, f.x0, f.y1 - 0.8, f.x1, f.y1, z0, z0 + 2.6); } break; }
      case 'fire': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, z1); addBox(F_, M.c.dark, f.x0 - 0.02, f.y0 + 1.5, f.x0 + 0.4, f.y1 - 1.5, 0.6, 1.3);
        { const fire = new THREE.MeshStandardMaterial({ color: 0xff8a3d, emissive: 0xff6a1a, emissiveIntensity: 1.4 }); addBox(F_, fire, f.x0 - 0.03, f.y0 + 1.8, f.x0 + 0.1, f.y1 - 1.8, 0.65, 0.95); } break;
      case 'lounge': lounge(M, f.x0, f.y0, f.x1, f.y1, M.c.leather, false); addBox(F_, M.c.leather, f.x0 + 0.4, f.y0 - 1.8, f.x1 - 0.4, f.y0 - 0.3, 0.3, 1.25); break;
      case 'lounge2': lounge(M, f.x0, f.y0, f.x0 + 2.6, f.y1, mat, true); lounge(M, f.x1 - 2.6, f.y0, f.x1, f.y1, mat, true); addCyl(F_, M.c.honey, cx, cy, 0.7, 0, 1.6, 16); break;
      case 'art': { const pad = 0.2; const [a, b] = alongX ? [[f.x0 - pad, f.y0, f.x1 + pad, f.y1], 0] : [[f.x0, f.y0 - pad, f.x1, f.y1 + pad], 0];
        addBox(F_, M.c.frame, a[0], a[1], a[2], a[3], z0 - pad, z1 + pad); const inset = alongX ? [f.x0, f.y0 - 0.03, f.x1, f.y1 + 0.03] : [f.x0 - 0.03, f.y0, f.x1 + 0.03, f.y1];
        addBox(F_, mat, inset[0], inset[1], inset[2], inset[3], z0, z1); const L = alongX ? w : d;
        for (let k = 0; k < 3; k++) { const t = 0.15 + k * 0.28; const col = ['#2f4a3c', '#b8643f', '#e8dfc9'][k]; if (alongX) addBox(F_, colorMat(col), f.x0 + L * t, f.y0 - 0.05, f.x0 + L * (t + 0.22), f.y1 + 0.05, z0 + 0.6 + k * 0.5, z1 - 0.8 + k * 0.2); else addBox(F_, colorMat(col), f.x0 - 0.05, f.y0 + L * t, f.x1 + 0.05, f.y0 + L * (t + 0.22), z0 + 0.6 + k * 0.5, z1 - 0.8 + k * 0.2); } break; }
      case 'bed': bed(M, f, mat); break;
      case 'curtain': { addBox(F_, M.c.sheer, f.x0 + 1.6, f.y0, f.x1 - 1.6, f.y1, z0, z1); for (const xs of [f.x0, f.x1 - 1.6]) for (let k = 0; k < 6; k++) addBox(F_, M.c.linen, xs + k * 0.27, f.y0 - (k % 2) * 0.15, xs + k * 0.27 + 0.22, f.y1 + 0.1 - (k % 2) * 0.15, z0, z1); addBox(F_, M.c.frame, f.x0, f.y0, f.x1, f.y1, z1, z1 + 0.08); break; }
      case 'fan': addCyl(F_, M.c.frame, cx, cy, 0.05, z0, 10.6, 6); addCyl(F_, mat, cx, cy, 0.35, z0 - 0.15, z0 + 0.15, 14); for (let k = 0; k < 3; k++) { const g = boxGeo(2.6, 0.06, 0.5); g.translate(1.6, 0, 0); g.rotateY(k * Math.PI * 2 / 3 + 0.3); addGeo(F_, mat, g, cx, cy, z0); } break;
      case 'cove': { const t = 0.3; addBox(F_, M.c.lamp, f.x0, f.y0, f.x1, f.y0 + t, z0, z1); addBox(F_, M.c.lamp, f.x0, f.y1 - t, f.x1, f.y1, z0, z1); addBox(F_, M.c.lamp, f.x0, f.y0, f.x0 + t, f.y1, z0, z1); addBox(F_, M.c.lamp, f.x1 - t, f.y0, f.x1, f.y1, z0, z1); break; }
      case 'tub': { const t = 0.28; addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, 0.3); addBox(F_, mat, f.x0, f.y0, f.x1, f.y0 + t, 0, z1); addBox(F_, mat, f.x0, f.y1 - t, f.x1, f.y1, 0, z1); addBox(F_, mat, f.x0, f.y0, f.x0 + t, f.y1, 0, z1); addBox(F_, mat, f.x1 - t, f.y0, f.x1, f.y1, 0, z1);
        addBox(F_, M.c.water, f.x0 + t, f.y0 + t, f.x1 - t, f.y1 - t, 0.3, z1 - 0.35); addBox(F_, mat, f.x0 + t, f.y0 + t, f.x0 + 1.4, f.y1 - t, 0.3, 1.2); break; }
      case 'vanity': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z0, z0 + f.h); addBox(F_, M.c.blackstone, f.x0 - 0.05, f.y0 - 0.05, f.x1, f.y1 + 0.05, z0 + f.h, z0 + f.h + 0.15);
        for (const yy of [f.y0 + d * 0.28, f.y0 + d * 0.72]) { addBox(F_, M.c.dark, f.x0 + 0.35, yy - 0.8, f.x1 - 0.5, yy + 0.8, z0 + f.h + 0.14, z0 + f.h + 0.16); addBox(F_, M.c.frame, f.x1 - 0.35, yy - 0.04, f.x1 - 0.1, yy + 0.04, z0 + f.h + 0.15, z0 + f.h + 1.0); addBox(F_, M.c.frame, f.x1 - 0.7, yy - 0.04, f.x1 - 0.1, yy + 0.04, z0 + f.h + 0.92, z0 + f.h + 1.0); }
        addBox(F_, M.c.mirror, f.x1 + 0.08, f.y0 + 0.3, f.x1 + 0.2, f.y1 - 0.3, 4.2, 7.2); break;
      case 'seat': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, 1.35); addBox(F_, M.c.linen, f.x0 + 0.05, f.y0 + 0.05, f.x1 - 0.05, f.y1 - 0.05, 1.35, 1.65); for (let k = 0; k < 3; k++) addBox(F_, colorMat(['#a7b39a', '#e2c894', '#d9cbb5'][k]), f.x1 - 0.5, f.y0 + 0.6 + k * 2.1, f.x1 - 0.1, f.y0 + 2.0 + k * 2.1, 1.65, 2.8); break;
      case 'cubes': { addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, z1); const n = Math.round((alongX ? w : d) / 1.1); const cols = ['#a7b39a', '#e2c894', '#c98f6a', '#8fa9b8'];
        for (let i = 0; i < n; i++) for (let k = 0; k < 2; k++) { const t0 = (i + 0.08) / n, t1 = (i + 0.92) / n; const za = 0.15 + k * 1.1, zb = za + 0.9; const col = colorMat(cols[(i + k) % 4]);
          if (alongX) addBox(D_, col, f.x0 + w * t0, f.y1 - 0.02, f.x0 + w * t1, f.y1 + 0.05, za, zb); else addBox(D_, col, f.x1 - 0.02, f.y0 + d * t0, f.x1 + 0.05, f.y0 + d * t1, za, zb); } break; }
      case 'beanbags': { const n = w > 3 ? 2 : 1; for (let i = 0; i < n; i++) sphere(F_, mat, f.x0 + w * (i + 0.5) / n, cy + (i ? 0.4 : -0.3), 0.55, 1.05, 0.55, 14); break; }
      case 'kidwall': { addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, z1); const holds = ['#e8c547', '#3f7fbf', '#d0573c', '#4e9a52', '#8e5cc2'];
        const L = alongX ? w : d; for (let i = 0; i < 24; i++) { const t = 0.05 + ((i * 37) % 100) / 100 * 0.9, z = 0.6 + ((i * 53) % 100) / 100 * (z1 - 1.2); const a = (alongX ? f.x0 : f.y0) + L * t;
          if (alongX) addBox(D_, colorMat(holds[i % 5]), a, f.y1, a + 0.3, f.y1 + 0.18, z, z + 0.25); else addBox(D_, colorMat(holds[i % 5]), f.x1, a, f.x1 + 0.18, a + 0.3, z, z + 0.25); }
        if (alongX) addBox(F_, colorMat('#4f5e66'), f.x0, f.y1, f.x1, f.y1 + 3.2, 0, 0.6); else addBox(F_, colorMat('#4f5e66'), f.x1, f.y0, f.x1 + 3.2, f.y1, 0, 0.6); break; }
      case 'rig': { const p = 0.3; [[f.x0, f.y0], [f.x1 - p, f.y0], [f.x0, f.y1 - p], [f.x1 - p, f.y1 - p]].forEach(([x, y]) => { addBox(F_, mat, x, y, x + p, y + p, 0, z1); addBox(F_, mat, x - 0.4, y - 0.4, x + p + 0.4, y + p + 0.4, 0, 0.05); });
        addBox(F_, mat, f.x0, f.y0, f.x1, f.y0 + p, z1 - p, z1); addBox(F_, mat, f.x0, f.y1 - p, f.x1, f.y1, z1 - p, z1);
        for (let k = 0; k < 4; k++) { const x = f.x0 + w * (k + 0.5) / 4; addCyl(F_, M.c.steel, x, cy, 0.06, z1 - 0.25, z1 - 0.1, 6); addBox(F_, M.c.steel, x - 0.05, f.y0, x + 0.05, f.y1, z1 - 0.25, z1 - 0.12); }
        for (const yy of [cy - 0.9, cy + 0.9]) { addBox(F_, colorMat('#c9b48e'), f.x0 + 1.15, yy - 0.03, f.x0 + 1.25, yy + 0.03, 6.2, z1 - 0.2); const ring = new THREE.TorusGeometry(0.4, 0.07, 6, 18); addGeo(F_, M.c.honey, ring, f.x0 + 1.2, yy, 5.8); }
        addCyl(F_, colorMat('#c8b083'), f.x1 - 1.0, cy, 0.09, 0.4, z1 - 0.2, 8); addCyl(F_, colorMat('#c8b083'), f.x1 - 1.0, cy, 0.35, 0.05, 0.4, 10); break; }
      case 'frame': { const p = 0.25; const posts = [[f.x0, f.y0], [f.x1 - p, f.y0], [f.x0, f.y1 - p], [f.x1 - p, f.y1 - p]];
        posts.forEach(([x, y]) => addBox(F_, mat, x, y, x + p, y + p, z0, z1));
        addBox(F_, mat, f.x0, f.y0, f.x1, f.y0 + p, z1 - p, z1); addBox(F_, mat, f.x0, f.y1 - p, f.x1, f.y1, z1 - p, z1); addBox(F_, mat, f.x0, f.y0, f.x0 + p, f.y1, z1 - p, z1); addBox(F_, mat, f.x1 - p, f.y0, f.x1, f.y1, z1 - p, z1);
        addBox(F_, colorMat('#e6dccb'), f.x0 + 0.2, f.y0 + 0.2, f.x1 - 0.2, f.y1 - 0.2, 1.9, 2.4); addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, 1.9);
        for (let k = 1; k < 4; k++) addBox(F_, M.c.steel, f.x0 + w * k / 4, f.y0, f.x0 + w * k / 4 + 0.06, f.y1, z1 - 0.5, z1 - 0.44); break; }
      case 'reformer': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0.3, 0.8); [[f.x0 + 0.2, f.y0], [f.x1 - 0.5, f.y0], [f.x0 + 0.2, f.y1 - 0.3], [f.x1 - 0.5, f.y1 - 0.3]].forEach(([x, y]) => addBox(F_, mat, x, y, x + 0.3, y + 0.3, 0, 0.3));
        addBox(F_, colorMat('#e6dccb'), f.x0 + 2.2, f.y0 + 0.15, f.x0 + 4.6, f.y1 - 0.15, 0.8, z1); addBox(F_, M.c.steel, f.x1 - 0.5, f.y0, f.x1 - 0.35, f.y1, 0.8, 2.0); break;
      case 'rower': addBox(F_, mat, f.x0, cy - 0.3, f.x1 - 1.2, cy + 0.3, 0.5, 0.75); addBox(F_, mat, f.x0, cy - 0.5, f.x0 + 0.3, cy + 0.5, 0, 0.75); addBox(F_, colorMat('#2a2a2a'), f.x0 + 1.4, cy - 0.45, f.x0 + 2.4, cy + 0.45, 0.75, 1.0);
        { const g = new THREE.CylinderGeometry(0.95, 0.95, 0.9, 20); g.rotateZ(Math.PI / 2); g.rotateY(Math.PI / 2); addGeo(F_, M.c.glass, g, f.x1 - 0.95, cy, 0.95); addBox(F_, M.c.water, f.x1 - 1.7, cy - 0.35, f.x1 - 0.2, cy + 0.35, 0.3, 0.9); addBox(F_, mat, f.x1 - 2.0, cy - 0.6, f.x1 - 1.8, cy + 0.6, 0, 1.9); } break;
      case 'treadmill': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0, 0.6); addBox(F_, colorMat('#1a1a1a'), f.x0 + 0.3, f.y0 + 0.3, f.x1 - 1, f.y1 - 0.3, 0.6, 0.65); addBox(F_, mat, f.x1 - 0.9, f.y0, f.x1 - 0.6, f.y0 + 0.25, 0.6, z1); addBox(F_, mat, f.x1 - 0.9, f.y1 - 0.25, f.x1 - 0.6, f.y1, 0.6, z1); addBox(F_, mat, f.x1 - 1.3, f.y0, f.x1 - 0.6, f.y1, z1 - 0.3, z1); break;
      case 'krack': addBox(F_, mat, f.x0, f.y0, f.x0 + 0.2, f.y1, 0, z1); addBox(F_, mat, f.x1 - 0.2, f.y0, f.x1, f.y1, 0, z1); addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 1.6, 1.7); addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z1 - 0.1, z1);
        for (let i = 0; i < 8; i++) { const x = f.x0 + 0.5 + i * (w - 1) / 7; for (const z of [1.7, z1]) { const g = new THREE.CylinderGeometry(0.17 + i * 0.012, 0.17 + i * 0.012, 0.25, 10); g.rotateX(Math.PI / 2); addGeo(D_, colorMat('#1d1d1d'), g.clone(), x, f.y0 + 0.25, z + 0.2); addGeo(D_, colorMat('#1d1d1d'), g, x, f.y1 - 0.25, z + 0.2); } }
        for (let i = 0; i < 6; i++) { const x = f.x0 + 0.6 + i * 1.05; sphere(D_, colorMat('#232323'), x, f.y0 - 0.6, 0.35 + i * 0.03, 0.35 + i * 0.03, 1, 10); const h = new THREE.TorusGeometry(0.22, 0.05, 4, 10, Math.PI); addGeo(D_, colorMat('#232323'), h, x, f.y0 - 0.6, 0.65 + i * 0.06); } break;
      case 'bands': { for (let k = 0; k < 3; k++) addBox(F_, mat, f.x0, f.y0 + k * (d - 0.3) / 2, f.x1, f.y0 + k * (d - 0.3) / 2 + 0.3, 0, z1); for (const z of [3.5, 5.5, 7.6]) addBox(F_, M.c.steel, f.x1 - 0.2, f.y0, f.x1, f.y1, z, z + 0.1);
        const bc = ['#d0573c', '#3f7fbf', '#4e9a52', '#e8c547', '#2a2a2a']; for (let i = 0; i < 10; i++) addBox(D_, colorMat(bc[i % 5]), f.x1, f.y0 + 0.6 + i * 0.85, f.x1 + 0.06, f.y0 + 0.75 + i * 0.85, 5.6 - (i % 3) * 0.8, 7.6); break; }
      case 'mirror': addBox(F_, M.c.mirror, f.x0, f.y0, f.x1, f.y1, z0, z1); addBox(F_, M.c.frame, f.x0 - 0.02, f.y0, f.x1 + 0.02, f.y1, z0 - 0.05, z0); break;
      case 'plunge': { const t = 0.35; addBox(F_, mat, f.x0, f.y0, f.x1, f.y0 + t, 0, z1); addBox(F_, mat, f.x0, f.y1 - t, f.x1, f.y1, 0, z1); addBox(F_, mat, f.x0, f.y0, f.x0 + t, f.y1, 0, z1); addBox(F_, mat, f.x1 - t, f.y0, f.x1, f.y1, 0, z1); addBox(F_, M.c.zellige, f.x0 + t, f.y0 + t, f.x1 - t, f.y1 - t, -0.02, 0); addBox(F_, M.c.water, f.x0 + t, f.y0 + t, f.x1 - t, f.y1 - t, 0, z1 - 0.12); break; }
      case 'benches': { addBox(F_, mat, f.x0, f.y0, f.x1, f.y0 + 1.8, 1.4, 1.6); addBox(F_, mat, f.x0, f.y0 + 1.8, f.x1, f.y1, z1 - 0.2, z1); addBox(F_, mat, f.x0, f.y0 + 1.6, f.x1, f.y0 + 1.8, 1.6, z1);
        addBox(F_, M.c.lamp, f.x0, f.y0 + 0.15, f.x1, f.y0 + 0.25, 1.3, 1.38); addBox(F_, M.c.lamp, f.x0, f.y0 + 1.95, f.x1, f.y0 + 2.05, z1 - 0.3, z1 - 0.22); addBox(F_, mat, f.x0, f.y1 - 0.2, f.x1, f.y1, z1, z1 + 2.5); break; }
      case 'heater': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0.3, z1 - 0.4); for (let i = 0; i < 9; i++) { const g = new THREE.DodecahedronGeometry(0.22, 0); addGeo(F_, colorMat(i % 2 ? '#6d6a66' : '#8a8580'), g, f.x0 + 0.3 + (i % 3) * 0.4, f.y0 + 0.4 + Math.floor(i / 3) * 0.5, z1 - 0.3); }
        for (let i = 0; i < 4; i++) addBox(F_, M.c.aspen, f.x0 - 0.2 + i * 0.5, f.y1 + 0.1, f.x0 - 0.05 + i * 0.5, f.y1 + 0.2, 0.2, z1); break;
      case 'lowtable': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 0.9, 1.2); addBox(F_, mat, f.x0 + 0.3, f.y0 + 0.3, f.x1 - 0.3, f.y1 - 0.3, 0, 0.9); [[cx, f.y0 - 1.0], [cx, f.y1 + 1.0], [f.x0 - 1.0, cy], [f.x1 + 1.0, cy]].forEach(([x, y]) => addBox(F_, colorMat('#6f7a55'), x - 0.85, y - 0.85, x + 0.85, y + 0.85, 0, 0.3)); break;
      case 'andon': addBox(F_, M.c.paper, f.x0 + 0.05, f.y0 + 0.05, f.x1 - 0.05, f.y1 - 0.05, 0.3, z1); [[f.x0, f.y0], [f.x1 - 0.08, f.y0], [f.x0, f.y1 - 0.08], [f.x1 - 0.08, f.y1 - 0.08]].forEach(([x, y]) => addBox(F_, colorMat('#3d2c20'), x, y, x + 0.08, y + 0.08, 0, z1)); break;
      case 'standdesk': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z1 - 0.12, z1); for (const x of [f.x0 + 0.5, f.x1 - 0.7]) { addBox(F_, M.c.frame, x, cy - 0.1, x + 0.2, cy + 0.1, 0, z1 - 0.12); addBox(F_, M.c.frame, x - 0.1, f.y0 + 0.2, x + 0.3, f.y1 - 0.2, 0, 0.1); }
        addBox(F_, M.c.frame, cx - 1.4, f.y0 + 0.5, cx + 1.4, f.y0 + 0.6, z1 + 0.5, z1 + 2.0); addBox(F_, M.c.frame, cx - 0.1, f.y0 + 0.55, cx + 0.1, f.y0 + 0.9, z1, z1 + 0.6); addBox(D_, colorMat('#bfc3c5'), cx - 0.6, f.y1 - 1.1, cx + 0.6, f.y1 - 0.4, z1, z1 + 0.04);
        addCyl(F_, M.c.frame, cx, f.y1 + 1.4, 0.1, 0, 1.6, 8); addBox(F_, colorMat('#4a4a46'), cx - 0.9, f.y1 + 0.6, cx + 0.9, f.y1 + 2.2, 1.6, 1.85); addBox(F_, colorMat('#4a4a46'), cx - 0.9, f.y1 + 2.0, cx + 0.9, f.y1 + 2.25, 1.85, 3.6); break;
      case 'studio': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z1 - 0.15, z1); addBox(F_, M.c.frame, f.x0 + 0.2, f.y0 + 0.2, f.x0 + 2.2, f.y1 - 0.2, 0, z1 - 0.15); addBox(F_, M.c.frame, f.x1 - 2.2, f.y0 + 0.2, f.x1 - 0.2, f.y1 - 0.2, 0, z1 - 0.15);
        addBox(F_, colorMat('#2b2b2b'), cx - 1.6, f.y1 - 1.6, cx + 1.6, f.y1 - 0.2, z1, z1 + 0.25); for (let i = 0; i < 12; i++) addBox(D_, colorMat(i % 3 ? '#cfcfcf' : '#e8c547'), cx - 1.4 + i * 0.25, f.y1 - 1.3, cx - 1.3 + i * 0.25, f.y1 - 0.6, z1 + 0.25, z1 + 0.32);
        addBox(F_, colorMat('#1d1d1d'), f.x0 + 0.5, f.y0 + 0.4, f.x0 + 1.4, f.y0 + 1.4, z1, z1 + 0.15); for (let i = 0; i < 16; i++) addBox(D_, colorMat('#d0573c'), f.x0 + 0.58 + (i % 4) * 0.2, f.y0 + 0.48 + Math.floor(i / 4) * 0.22, f.x0 + 0.72 + (i % 4) * 0.2, f.y0 + 0.62 + Math.floor(i / 4) * 0.22, z1 + 0.15, z1 + 0.18);
        addBox(F_, M.c.frame, cx - 2.6, f.y0 + 0.3, cx - 0.2, f.y0 + 0.4, z1 + 0.6, z1 + 2.0); addBox(F_, M.c.frame, cx + 0.2, f.y0 + 0.3, cx + 2.6, f.y0 + 0.4, z1 + 0.6, z1 + 2.0);
        for (const x of [f.x0 + 0.4, f.x1 - 1.3]) addBox(F_, colorMat('#2a2a2a'), x, f.y0 + 0.2, x + 0.9, f.y0 + 1.1, z1, z1 + 1.3); break;
      case 'piano': addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, 2.15, 2.6); addBox(F_, mat, f.x0, f.y0, f.x1 - 0.4, f.y0 + 0.15, 0, 2.15); addBox(F_, mat, f.x0, f.y1 - 0.15, f.x1 - 0.4, f.y1, 0, 2.15); addBox(F_, M.c.white, f.x1 - 0.55, f.y0 + 0.2, f.x1 - 0.05, f.y1 - 0.2, 2.6, 2.66);
        for (let i = 0; i < 16; i++) addBox(D_, colorMat('#111'), f.x1 - 0.55, f.y0 + 0.3 + i * 0.27, f.x1 - 0.25, f.y0 + 0.4 + i * 0.27, 2.66, 2.72); addBox(F_, mat, f.x1 + 1.0, cy - 0.9, f.x1 + 2.0, cy + 0.9, 1.4, 1.65); break;
      case 'drums': { [[0, -1.4, 0.9, 1.1], [-1.5, 0, 0.6, 2.4], [1.5, 0.2, 0.55, 2.6], [-0.8, 1.3, 0.5, 2.8], [0.9, 1.4, 0.5, 2.8], [-2, 1.6, 0.7, 3.6], [2.1, 1.7, 0.75, 3.8]].forEach(([dx, dy, r, z], i) => {
          if (i >= 5) { addCyl(F_, colorMat('#b39a5a'), cx + dx, cy + dy, r, z, z + 0.05, 16); addCyl(F_, mat, cx + dx, cy + dy, 0.05, 0, z, 6); }
          else addCyl(F_, i === 0 ? colorMat('#444') : mat, cx + dx, cy + dy, r, i === 0 ? 0 : z - 0.35, i === 0 ? 1.8 : z, 16); });
        addCyl(F_, colorMat('#6f7a55'), cx, cy - 2.6, 0.6, 0, 1.6, 12); break; }
      case 'guitarwall': { addBox(F_, M.c.honey, f.x0, f.y0 + 0.1, f.x1, f.y1, z0 + 2.9, z0 + 3.1); const cols = ['#c98a3c', '#1d1d1d', '#a33a2a', '#e6d3a8']; const n = 4; for (let i = 0; i < n; i++) guitar(f.x0 + w * (i + 0.5) / n, z0, cols[i], f.y0 + 0.05, 0.28); break; }
      case 'apanels': { const n = Math.floor(d / 4.2); for (let i = 0; i < n; i++) { const y = f.y0 + i * (d / n) + 0.2; addBox(F_, colorMat(['#8d8a72', '#6f7a68', '#a39a86'][i % 3]), f.x0, y, f.x1, y + d / n - 0.4, z0 + (i % 2) * 0.6, z0 + 4.5 + (i % 2) * 0.6); } break; }
      case 'clouds': for (let i = 0; i < 2; i++) for (let k = 0; k < 2; k++) { const xa = f.x0 + i * w / 2 + 0.4, ya = f.y0 + k * d / 2 + 0.4; addBox(F_, mat, xa, ya, xa + w / 2 - 0.8, ya + d / 2 - 0.8, z0 + (i + k) % 2 * 0.4, z0 + 0.3 + (i + k) % 2 * 0.4); } break;
      case 'ribs': { const n = Math.floor(w / 0.9); for (let i = 0; i <= n; i++) { const x = f.x0 + i * w / n; const dep = 0.3 + 0.55 * (0.5 + 0.5 * Math.sin(i / n * Math.PI * 2.2)); addBox(F_, mat, x - 0.12, f.y0, x + 0.12, f.y1, z1 - dep, z1); } break; }
      case 'layered': addCyl(F_, M.c.frame, cx, cy, 0.02, z0 + f.h, 12.8, 4); [[1.1, 0], [0.8, 0.35], [0.5, 0.7]].forEach(([r, dz]) => addCyl(F_, mat, cx, cy, r * 0.35, z0 + dz, z0 + dz + 0.25, 18, r)); addCyl(F_, M.c.lamp, cx, cy, 0.3, z0 - 0.05, z0, 12);
        addCyl(F_, M.c.frame, 23.7, 15, 0.02, 7.6, 12.8, 4); [[1.1, 0], [0.8, 0.35], [0.5, 0.7]].forEach(([r, dz]) => addCyl(F_, mat, 23.7, 15, r * 0.35, 6.6 + dz, 6.85 + dz, 18, r)); break;
      case 'rgb': addBox(F_, M.c.rgb, f.x0, f.y0, f.x1, f.y1, z0, z1); break;
      default: addBox(F_, mat, f.x0, f.y0, f.x1, f.y1, z0, z1);
        if (f.label.includes('Mic')) addCyl(F_, colorMat('#222'), cx, cy, 0.18, z1, z1 + 0.45, 10);
    }
  }
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
  // courtyard: flagstone terrace ring (no timber engawa deck), raked gravel, planted water court, lawn, shade tree, maples
  const c = P.courtyard; const FL = [M.plinth, M.plinth, M.flag, M.plinth, M.plinth, M.plinth];
  addBox('site', FL, c.x0, c.y0, c.x1, c.y1, G, -0.3);
  const lw = S.lawn; addBox('site', [M.plinth, M.plinth, M.turf, M.plinth, M.plinth, M.plinth], lw.x0, lw.y0, lw.x1, lw.y1, -0.5, -0.28);
  const z = S.zen; addBox('site', M.plinth, z.x0 - 0.3, z.y0 - 0.3, z.x1 + 0.3, z.y1 + 0.3, -0.5, -0.26); addBox('site', M.gravel, z.x0, z.y0, z.x1, z.y1, -0.5, -0.27);
  [[42, 33, 1.6, 1.4], [48.5, 36.5, 1.2, 1.0], [50, 32, 0.9, 0.8]].forEach(([x, y, r, h]) => { const g = new THREE.DodecahedronGeometry(r, 0); g.scale(1, h / r * 0.7, 1); g.translate(x - CX, -0.3 + h * 0.3, -(y - CY)); B.add('site', M.plinth, g); });
  // planted water court with reeds + stone water basin (tsukubai)
  const wc = S.water; addBox('site', M.c.blackstone, wc.x0 - 0.6, wc.y0 - 0.6, wc.x1 + 0.6, wc.y1 + 0.6, G, 0.1); addBox('site', M.poolwater, wc.x0, wc.y0, wc.x1, wc.y1, G, -0.05);
  { const reed = new THREE.MeshStandardMaterial({ color: 0x6f8a45, roughness: 0.9 }); const lily = new THREE.MeshStandardMaterial({ color: 0x4f7a3a, roughness: 0.6 });
    for (let i = 0; i < 26; i++) { const x = wc.x0 + 0.8 + ((i * 41) % 100) / 100 * (wc.x1 - wc.x0 - 1.6), y = wc.y0 + 0.8 + ((i * 67) % 100) / 100 * (wc.y1 - wc.y0 - 1.6);
      if (i % 3) { addCyl('site', reed, x, y, 0.06, -0.05, 2.2 + (i % 4) * 0.5, 4, 0.02); } else addCyl('site', lily, x, y, 0.6, 0, 0.03, 10); } }
  addCyl('site', M.c.stone, wc.x0 - 1.8, wc.y0 + 2.5, 1.2, -0.3, 1.1, 12); addCyl('site', M.water, wc.x0 - 1.8, wc.y0 + 2.5, 0.8, 1.1, 1.13, 12); addBox('site', M.c.fir, wc.x0 - 1.85, wc.y0 + 2.5, wc.x0 - 0.2, wc.y0 + 2.62, 1.6, 1.72);
  // big shade tree (katsura) + Japanese maples
  const st = S.shadetree; addCyl('site', M.dark, st.cx, st.cy, 0.9, -0.3, 11, 10, 0.55);
  { const crown = new THREE.MeshStandardMaterial({ color: 0x6d8a3e, roughness: 0.9 }); [[0, 0, 17, 5.6], [2.8, 1.6, 15.5, 3.7], [-2.8, -1.2, 16, 3.8], [1.2, -2.8, 19, 3.4], [-1.6, 2.4, 19.5, 3.5], [0, 0, 22, 3.2]].forEach(([dx, dy, h, r]) => { const g = new THREE.IcosahedronGeometry(r, 1); g.scale(1, 0.72, 1); g.translate(st.cx + dx - CX, h, -(st.cy + dy - CY)); B.add('site', crown, g); }); }
  { const leaf = new THREE.MeshStandardMaterial({ color: 0xb8442a, roughness: 0.9 }); const leaf2 = new THREE.MeshStandardMaterial({ color: 0xd06a2e, roughness: 0.9 });
    S.maples.forEach(([mx, my], j) => { addCyl('site', M.dark, mx, my, 0.22, -0.3, 4.5, 6, 0.14); [[0, 0, 5.6, 2.5], [1.3, 0.6, 4.9, 1.8], [-1.4, -0.6, 5.1, 1.9], [0.4, -1.2, 6.5, 1.6]].forEach(([dx, dy, h, r]) => { const g = new THREE.IcosahedronGeometry(r, 1); g.scale(1.15, 0.55, 1.15); g.translate(mx + dx - CX, h, -(my + dy - CY)); B.add('site', j % 2 ? leaf2 : leaf, g); }); }); }
  // stone lanterns (ishidoro)
  S.lanterns.forEach(([x, y]) => { addCyl('site', M.c.stone, x, y, 0.55, -0.3, 0.1, 6); addCyl('site', M.c.stone, x, y, 0.2, 0.1, 1.8, 6); addBox('site', M.c.stone, x - 0.5, y - 0.5, x + 0.5, y + 0.5, 1.8, 2.6); addBox('site', M.paper, x - 0.32, y - 0.52, x + 0.32, y + 0.52, 1.95, 2.45); addCyl('site', M.c.stone, x, y, 0.15, 2.6, 3.3, 6, 0.9); addCyl('site', M.c.stone, x, y, 0.05, 3.3, 3.55, 6, 0.18); });
  // curved teak bench around the shade tree
  { for (let k = 0; k < 9; k++) { const a0 = Math.PI * (1.05 + k * 0.06); const g = boxGeo(1.25, 0.18, 1.5); g.translate(0, 0, 0); g.rotateY(a0 + Math.PI / 2); const r = 6.2; addGeo('site', M.teak, g, st.cx + Math.cos(a0) * r, st.cy + Math.sin(a0) * r, 1.4);
      if (k % 2 === 0) { const g2 = boxGeo(0.25, 1.4, 1.1); g2.rotateY(a0 + Math.PI / 2); addGeo('site', M.c.blackstone, g2, st.cx + Math.cos(a0) * r, st.cy + Math.sin(a0) * r, 0.0); } } }
  // tropical planting clumps (broad leaves) along the terrace
  { const trop = new THREE.MeshStandardMaterial({ color: 0x3f6b35, roughness: 0.8 }); [[38.5, 29.5], [56, 41.2], [42.5, 52.5], [69.5, 51.5], [54, 29], [70, 36.5]].forEach(([x, y], i) => { for (let k = 0; k < 5; k++) { const g = new THREE.ConeGeometry(0.5, 3 + (k % 3), 4); g.rotateZ((k - 2) * 0.35); g.rotateY(k * 1.3); addGeo('site', trop, g, x + (k - 2) * 0.3, y + ((k * 7) % 3 - 1) * 0.3, 1.0); } }); }
  // lit garden path lights (instanced)
  { const pts = []; for (let x = 39; x <= 69; x += 6) { pts.push([x, 28.4], [x, 53.8]); } for (let y = 34; y <= 50; y += 5.3) { pts.push([37.2, y], [70.8, y]); }
    const g = new THREE.CylinderGeometry(0.12, 0.14, 1.6, 6); g.translate(0, 0.8, 0); const im = new THREE.InstancedMesh(g, M.frame, pts.length); const g2 = new THREE.CylinderGeometry(0.16, 0.16, 0.3, 8); const im2 = new THREE.InstancedMesh(g2, M.lamp, pts.length);
    const mm = new THREE.Matrix4(); pts.forEach(([x, y], i) => { mm.makeTranslation(x - CX, -0.3, -(y - CY)); im.setMatrixAt(i, mm); mm.makeTranslation(x - CX, 1.35, -(y - CY)); im2.setMatrixAt(i, mm); }); groups.detail.add(im); groups.detail.add(im2); }
  // courtyard shower (charred board wall, stone floor)
  { const cs = S.cshower; addBox('site', M.c.blackstone, cs.x0, cs.y0, cs.x1, cs.y1, -0.3, -0.18); addBox('site', M.c.charred, cs.x0, cs.y1 - 0.3, cs.x1, cs.y1, -0.3, 7); addBox('site', M.c.charred, cs.x0, cs.y0, cs.x0 + 0.3, cs.y1, -0.3, 7);
    addBox('site', M.c.brass, cs.x0 + 2.4, cs.y1 - 0.5, cs.x0 + 2.55, cs.y1 - 0.3, -0.2, 7.2); addBox('site', M.c.brass, cs.x0 + 2.3, cs.y1 - 1.6, cs.x0 + 2.65, cs.y1 - 0.4, 7.0, 7.15); addCyl('site', M.c.brass, cs.x0 + 2.47, cs.y1 - 1.5, 0.45, 6.85, 7.0, 14); }
  // plinth band around the house footprint under exterior walls handled by floors
  // pool + deck
  const pd = S.pooldeck, p = S.pool;
  addBox('site', FL, pd.x0, pd.y0, pd.x1, p.y0, G, -1.0);
  addBox('site', FL, pd.x0, p.y1, pd.x1, pd.y1, G, -1.0);
  addBox('site', FL, pd.x0, p.y0, p.x0, p.y1, G, -1.0);
  addBox('site', FL, p.x1, p.y0, pd.x1, p.y1, G, -1.0);
  addBox('site', M.pooltile, p.x0, p.y0, p.x1, p.y1, -5.6, -5.4);
  addBox('site', M.pooltile, p.x0, p.y0 - 0.02, p.x1, p.y0 + 0.02, -5.4, -1.0); addBox('site', M.pooltile, p.x0, p.y1 - 0.02, p.x1, p.y1 + 0.02, -5.4, -1.0);
  addBox('site', M.pooltile, p.x0 - 0.02, p.y0, p.x0 + 0.02, p.y1, -5.4, -1.0); addBox('site', M.pooltile, p.x1 - 0.02, p.y0, p.x1 + 0.02, p.y1, -5.4, -1.0);
  addBox('site', M.poolwater, p.x0, p.y0, p.x1, p.y1, -5.4, -1.4);
  // bale pavilion (raised timber platform, low standing-seam roof)
  { const ba = S.bale; addBox('site', M.c.honey, ba.x0, ba.y0, ba.x1, ba.y1, -1.0, 0.4); addBox('site', M.c.linen, ba.x0 + 0.4, ba.y0 + 0.4, ba.x1 - 0.4, ba.y1 - 0.4, 0.4, 0.9);
    [[ba.x0 + 1, ba.y0 + 2], [ba.x1 - 2, ba.y0 + 2], [ba.x0 + 1.5, ba.y1 - 1.5]].forEach(([x, y], i) => addBox('site', colorMat(['#a7b39a', '#e2c894', '#c98f6a'][i]), x, y, x + 1.2, y + 1.2, 0.9, 1.5));
    [[ba.x0, ba.y0], [ba.x1 - 0.5, ba.y0], [ba.x0, ba.y1 - 0.5], [ba.x1 - 0.5, ba.y1 - 0.5]].forEach(([x, y]) => addBox('site', M.c.fir, x, y, x + 0.5, y + 0.5, 0.4, ba.h));
    addBox('site', [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred], ba.x0 - 3, ba.y0 - 3, ba.x1 + 3, ba.y1 + 3, ba.h, ba.h + 0.6, (px, py) => (py - (ba.y0 + ba.y1) / 2) * 0.12); }
  // loungers
  for (let i = 0; i < 3; i++) { addBox('site', M.c.teak, 60 + i * 7, -27, 62.5 + i * 7, -23.5, -1, -0.5); addBox('site', M.c.linen, 60.1 + i * 7, -26.9, 62.4 + i * 7, -23.6, -0.5, -0.25); }
  // outdoor shower w/ slat screen
  const os = S.outdoor_shower; addBox('site', M.stone, os.x0, os.y0, os.x1, os.y1, -1.2, -0.9);
  addBox('site', M.c.charred, os.x0, os.y0, os.x0 + 0.3, os.y1, -0.9, 7); addBox('site', M.c.charred, os.x0, os.y0, os.x1, os.y0 + 0.3, -0.9, 7);
  addBox('site', M.brass, os.x0 + 0.3, os.y0 + 2.4, os.x0 + 0.5, os.y0 + 2.6, -0.9, 7.2); addBox('site', M.brass, os.x0 + 0.3, os.y0 + 2.4, os.x0 + 1.5, os.y0 + 2.6, 7.0, 7.2); addCyl('site', M.brass, os.x0 + 1.4, os.y0 + 2.5, 0.4, 6.85, 7.0, 12);
  // sprint lane
  const l = S.lane; addBox('site', M.turf, l.x0, l.y0, l.x1, l.y1, G, -1.05);
  for (let i = 0; i <= 4; i++) { const x = l.x0 + i * 15; addBox('site', M.white, x - 0.15, l.y0, x + 0.15, l.y1, -1.05, -1.02); }
  addBox('site', M.white, l.x0, (l.y0 + l.y1) / 2 - 0.08, l.x1, (l.y0 + l.y1) / 2 + 0.08, -1.05, -1.03);
  addBox('site', M.c.charred, l.x1 + 0.5, l.y0 - 1, l.x1 + 1.5, l.y1 + 1, G, 2.5); // run-out end wall
  // outdoor pull-up station by the lane
  { const pu = S.pullup; [pu.x0, pu.x1 - 0.3].forEach(x => addBox('site', M.frame, x, (pu.y0 + pu.y1) / 2 - 0.15, x + 0.3, (pu.y0 + pu.y1) / 2 + 0.15, -1.05, 8.5)); addBox('site', M.steel, pu.x0, (pu.y0 + pu.y1) / 2 - 0.05, pu.x1, (pu.y0 + pu.y1) / 2 + 0.05, 8.0, 8.12); addBox('site', M.steel, pu.x0, (pu.y0 + pu.y1) / 2 - 0.05, pu.x1, (pu.y0 + pu.y1) / 2 + 0.05, 5.6, 5.72); }
  // gym path to lane
  addBox('site', M.flag, 4, -8, 50, 0, G, -1.05);
  // veg garden
  const v = S.veg; addBox('site', M.gravel, v.x0, v.y0, v.x1, v.y1, G, -1.1);
  for (let i = 0; i < 4; i++) { const x = v.x0 + 1.5 + i * 5.8; addBox('site', M.c.fir, x, v.y0 + 2, x + 4, v.y0 + 20, G, 0.6); addBox('site', colorMat('#4a3a2c'), x + 0.2, v.y0 + 2.2, x + 3.8, v.y0 + 19.8, 0.6, 0.65);
    for (let k = 0; k < 8; k++) { const g = new THREE.IcosahedronGeometry(0.75, 0); g.translate(x + 2 - CX, 1.1, -(v.y0 + 3.5 + k * 2.1 - CY)); B.add('site', colorMat(k % 3 ? '#5f8a3e' : '#7aa64c'), g); } }
  slats('site', M.c.fir, v.x0, v.y0, v.x0, v.y1, G, 3.5, 1.2, 0.2); slats('site', M.c.fir, v.x0, v.y1, v.x1, v.y1, G, 3.5, 1.2, 0.2);
  // fruit trees (instanced)
  { const trunkG = new THREE.CylinderGeometry(0.25, 0.35, 5, 6); trunkG.translate(0, 2.5, 0); const crownG = new THREE.IcosahedronGeometry(3.2, 1); crownG.scale(1, 0.8, 1); const fruitG = new THREE.SphereGeometry(0.28, 6, 4);
    const n = S.orchard.length; const it = new THREE.InstancedMesh(trunkG, M.dark, n), ic = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: 0x5e8a3a, roughness: 0.9 }), n), ifr = new THREE.InstancedMesh(fruitG, new THREE.MeshStandardMaterial({ color: 0xd2502e, roughness: 0.5 }), n * 8);
    const mm = new THREE.Matrix4(); S.orchard.forEach(([x, y], i) => { mm.makeTranslation(x - CX, G, -(y - CY)); it.setMatrixAt(i, mm); mm.makeTranslation(x - CX, G + 7.2, -(y - CY)); ic.setMatrixAt(i, mm);
      for (let k = 0; k < 8; k++) { const a = k * 0.785 + i; mm.makeTranslation(x - CX + Math.cos(a) * 2.9, G + 6.2 + (k % 3) * 0.8, -(y - CY) + Math.sin(a) * 2.9); ifr.setMatrixAt(i * 8 + k, mm); } });
    [it, ic].forEach(o => { o.castShadow = true; groups.site.add(o); }); groups.detail.add(ifr); }
  // bike racks + bikes (torus wheels)
  const bk = S.bikes; addBox('site', M.stone, bk.x0 - 1, bk.y0, bk.x1, bk.y1, G, -1.05);
  const tire = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 });
  for (let i = 0; i < 4; i++) { const y = bk.y0 + 1.2 + i * 2.4; addBox('site', M.frame, bk.x0 + 0.2, y - 0.05, bk.x1 - 0.2, y + 0.05, -1.05, 1.3);
    [0, 2.5].forEach(dx => { const g = new THREE.TorusGeometry(1.1, 0.12, 6, 18); g.rotateY(Math.PI / 2 * 0); g.translate(bk.x0 - 1.2 + dx - CX, 0.0, -(y - CY)); B.add('site', tire, g); });
    addBox('site', colorMat(['#a3613d', '#3f7fbf', '#4e9a52', '#e8c547'][i]), bk.x0 - 1.2, y - 0.06, bk.x0 + 1.3, y + 0.06, 0.6, 0.75); }
  // entry court + drive + carport
  const ec = S.entrycourt; addBox('site', M.flag, ec.x0, ec.y0, ec.x1, ec.y1, G, -1.05);
  addBox('site', M.gravel, -46, 16, -20, 58, G, -1.1);
  const dr = new THREE.Shape(); [[-90, 4], [-60, 10], [-44, 24], [-46, 16], [-62, 0], [-90, -6]].forEach(([x, y], i) => i ? dr.lineTo(x - CX, (y - CY)) : dr.moveTo(x - CX, (y - CY)));
  const dg = new THREE.ShapeGeometry(dr); dg.rotateX(-Math.PI / 2); dg.scale(1, 1, 1); dg.translate(0, G + 0.08, 0);
  // ShapeGeometry after rotateX(-90): shape y -> -z, matches world z = -(y-CY)
  B.add('site', M.gravel, dg);
  const cp = S.carport; [[cp.x0, cp.y0], [cp.x1 - 0.4, cp.y0], [cp.x0, cp.y1 - 0.4], [cp.x1 - 0.4, cp.y1 - 0.4], [cp.x0, (cp.y0 + cp.y1) / 2], [cp.x1 - 0.4, (cp.y0 + cp.y1) / 2]].forEach(([x, y]) => addBox('site', M.frame, x, y, x + 0.4, y + 0.4, G, 9));
  { const sh = (px, py) => (px - (cp.x0 + cp.x1) / 2) * 0.06; addBox('site', [M.frame, M.frame, M.seam, M.frame, M.frame, M.frame], cp.x0 - 3, cp.y0 - 3, cp.x1 + 3, cp.y1 + 3, 9, 9.7, sh); }
  // cars (simple blocks)
  addBox('site', colorMat('#8d9399'), cp.x0 + 3, cp.y0 + 3, cp.x0 + 9.5, cp.y1 - 4, G, 3.6); addBox('site', colorMat('#5b6e5a'), cp.x0 + 13, cp.y0 + 3, cp.x0 + 19.5, cp.y1 - 4, G, 4.8);
  // entry slat screen + low rammed earth wall
  addBox('site', M.c.rammed, 1, 36, 2, 47, G, 4);
  // front garden beds (grasses, low shrubs, a multi-stem tree)
  { const grass = new THREE.MeshStandardMaterial({ color: 0x9aa25a, roughness: 1 }), shrub = new THREE.MeshStandardMaterial({ color: 0x4f6e3c, roughness: 0.9 });
    S.frontgarden.forEach(([x0, y0, x1, y1], j) => { addBox('site', M.plinth, x0, y0, x1, y1, G, -1.0); addBox('site', colorMat('#4a3a2c'), x0 + 0.3, y0 + 0.3, x1 - 0.3, y1 - 0.3, -1.0, -0.95);
      for (let i = 0; i < 18; i++) { const x = x0 + 1 + ((i * 37 + j * 11) % 100) / 100 * (x1 - x0 - 2), y = y0 + 1 + ((i * 59) % 100) / 100 * (y1 - y0 - 2); if (i % 3) { const g = new THREE.ConeGeometry(0.7, 2.2, 5); addGeo('site', grass, g, x, y, 0.1); } else sphere('site', shrub, x, y, -0.3, 1.1, 0.7, 8); } });
    addCyl('site', M.dark, -10, 44, 0.25, G, 7, 6, 0.15); [[0, 0, 9, 3], [1.5, 1, 8, 2], [-1.4, -0.8, 8.3, 2.2]].forEach(([dx, dy, h, r]) => { const g = new THREE.IcosahedronGeometry(r, 1); g.scale(1, 0.75, 1); addGeo('site', new THREE.MeshStandardMaterial({ color: 0x8aa04c, roughness: 0.9 }), g, -10 + dx, 44 + dy, h); }); }
  // covered walkway carport -> front door (black steel, standing seam)
  { const wk = S.walkway; addBox('site', M.flag, wk.x0, wk.y0, wk.x1 + 5, wk.y1, G, -1.0);
    for (let x = wk.x0 + 0.5; x < wk.x1; x += 6) { addBox('site', M.frame, x, wk.y0 + 0.3, x + 0.3, wk.y0 + 0.6, -1.0, wk.h); addBox('site', M.frame, x, wk.y1 - 0.6, x + 0.3, wk.y1 - 0.3, -1.0, wk.h); }
    addBox('site', [M.frame, M.frame, M.seam, M.soffit, M.frame, M.frame], wk.x0 - 0.5, wk.y0 - 1, wk.x1 + 0.5, wk.y1 + 1, wk.h, wk.h + 0.5, (px, py) => (py - (wk.y0 + wk.y1) / 2) * -0.08); }
  // north veranda deck + pergola + fire pit
  const ve = S.veranda; addBox('site', FL, ve.x0, ve.y0, ve.x1, ve.y1, G, -0.25);
  const pg = S.pergola; addBox('site', FL, pg.x0, pg.y0, pg.x1, pg.y1, G, -0.25);
  [[pg.x0, pg.y0 + 0.5], [pg.x1 - 0.7, pg.y0 + 0.5], [pg.x0, pg.y1 - 0.7], [pg.x1 - 0.7, pg.y1 - 0.7]].forEach(([x, y]) => addBox('site', M.c.charred, x, y, x + 0.7, y + 0.7, -0.25, 9));
  addBox('site', M.c.charred, pg.x0 - 1, pg.y0 + 0.5, pg.x1 + 1, pg.y0 + 1.1, 8.4, 9.2); addBox('site', M.c.charred, pg.x0 - 1, pg.y1 - 1.1, pg.x1 + 1, pg.y1 - 0.5, 8.4, 9.2);
  for (let x = pg.x0; x <= pg.x1; x += 1.2) addBox('site', M.c.fir, x, pg.y0 - 0.5, x + 0.25, pg.y1 + 0.5, 9.2, 9.7);
  addBox('site', colorMat('#6b4a33'), 23, 85, 33, 89, 2.2, 2.5); [23.5, 32].forEach(x => addBox('site', colorMat('#6b4a33'), x, 85.5, x + 0.4, 88.5, -0.25, 2.2));
  addBox('site', colorMat('#d9cbb5'), 23, 83.4, 33, 84.6, -0.25, 1.3); addBox('site', colorMat('#d9cbb5'), 23, 89.4, 33, 90.6, -0.25, 1.3);
  const fp = S.firepit;
  { const g = new THREE.CylinderGeometry(fp.r + 1.5, fp.r + 1.5, 0.5, 40); g.translate(fp.cx - CX, G + 0.2, -(fp.cy - CY)); B.add('site', M.flag, g);
    addCyl('site', M.c.stone, fp.cx, fp.cy, 2.8, G, -0.2, 28); addCyl('site', M.dark, fp.cx, fp.cy, 2.1, -0.2, -0.18, 24);
    for (let k = 0; k < 4; k++) { const a0 = k * Math.PI / 2 + 0.4; const g2 = new THREE.CylinderGeometry(fp.r - 0.6, fp.r - 0.6, 1.4, 20, 1, true, a0, 1.0); g2.translate(fp.cx - CX, G + 1.2, -(fp.cy - CY)); B.add('site', M.c.stone, g2); }
    const fire = new THREE.MeshStandardMaterial({ color: 0xff8a3d, emissive: 0xff6a1a, emissiveIntensity: 1.5 }); fire.name = 'fire';
    const g3 = new THREE.ConeGeometry(0.9, 1.6, 8); g3.translate(fp.cx - CX, 0.6, -(fp.cy - CY)); B.add('site', fire, g3); }
  // climbing pavilion (open-air, timber + standing seam, soft-fall)
  { const cl = S.climb, o = cl.oh;
    addBox('site', [M.plinth, M.plinth, M.stone, M.plinth, M.plinth, M.plinth], cl.x0 - 1, cl.y0 - 1, cl.x1 + 1, cl.y1 + 1, G, -1.0);
    addBox('site', colorMat('#b5694a'), cl.x0, cl.y0, cl.x1, cl.y1, -1.0, -0.6); // poured rubber soft-fall
    [[cl.x0, cl.y0], [cl.x1 - 0.7, cl.y0], [cl.x0, cl.y1 - 0.7], [cl.x1 - 0.7, cl.y1 - 0.7]].forEach(([x, y]) => addBox('site', M.c.fir, x, y, x + 0.7, y + 0.7, -0.6, cl.h - 1));
    addBox('site', M.c.fir, cl.x0 - 0.5, cl.y0, cl.x1 + 0.5, cl.y0 + 0.7, cl.h - 2, cl.h - 1); addBox('site', M.c.fir, cl.x0 - 0.5, cl.y1 - 0.7, cl.x1 + 0.5, cl.y1, cl.h - 2, cl.h - 1);
    for (let x = cl.x0 + 3; x < cl.x1 - 1; x += 3) addBox('site', M.c.fir, x, cl.y0 - o + 0.5, x + 0.35, cl.y1 + o - 0.5, cl.h - 1.0, cl.h - 0.6);
    addBox('site', [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred], cl.x0 - o, cl.y0 - o, cl.x1 + o, cl.y1 + o, cl.h - 0.6, cl.h + 0.3, (px, py) => (py - (cl.y0 + cl.y1) / 2) * 0.07);
    // climbing wall on the north side, facing south, with holds and a volume
    addBox('site', M.c.charred, cl.x0 + 1, cl.y1 - 1.6, cl.x1 - 1, cl.y1 - 0.9, -0.6, cl.wall);
    addBox('site', M.c.fir, cl.x0 + 1.2, cl.y1 - 2.0, cl.x1 - 1.2, cl.y1 - 1.6, -0.4, cl.wall - 0.2);
    const holds = ['#e8c547', '#3f7fbf', '#d0573c', '#4e9a52', '#8e5cc2', '#f1eee7'];
    for (let i = 0; i < 84; i++) { const x = cl.x0 + 1.6 + ((i * 37) % 100) / 100 * 14.6; const z = 0.6 + ((i * 53) % 100) / 100 * (cl.wall - 1.4); addBox('detail', colorMat(holds[i % 6]), x, cl.y1 - 2.3, x + 0.38, cl.y1 - 2.0, z, z + 0.3); }
    addBox('site', colorMat('#d9cbb5'), cl.x0 + 9, cl.y1 - 3.4, cl.x0 + 12, cl.y1 - 2.0, 4, 6.5); // volume
    addBox('site', colorMat('#55524c'), cl.x0 + 1.2, cl.y1 - 8, cl.x1 - 1.2, cl.y1 - 2.3, -0.6, 0.4); // crash pads
    [cl.x0 + 5.5, cl.x0 + 10.5].forEach(x => addBox('site', colorMat('#3d3b37'), x, cl.y1 - 8, x + 0.08, cl.y1 - 2.3, 0.4, 0.42));
    addBox('site', colorMat('#d9cbb5'), cl.x0 + 3, cl.y1 - 3.0, cl.x0 + 5.5, cl.y1 - 2.0, 8.5, 10.5); // upper volume
    // second bike rack in the active zone
    for (let i = 0; i < 4; i++) { const y = cl.y0 + 3 + i * 2.4; addBox('site', M.frame, cl.x1 - 2.2, y - 0.05, cl.x1 - 0.9, y + 0.05, -0.6, 1.8);
      [0, 2.3].forEach(dx => { const g = new THREE.TorusGeometry(1.0, 0.11, 6, 18); g.translate(cl.x1 - 3.6 + dx - CX, 0.5, -(y - CY)); B.add('site', tire, g); });
      addBox('site', colorMat(['#4e9a52', '#e8c547', '#3f7fbf', '#a3613d'][i]), cl.x1 - 3.6, y - 0.06, cl.x1 - 1.2, y + 0.06, 1.0, 1.15); }
    addBox('site', M.stone, cl.x1 + 1, 2, 4, 6, G, -1.0); // path to gym/office
  }
  // utility yard: charred-timber screen, tanks, treatment, ATU, power pad, condensers
  { const u = S.util, sh = 7, gx = u.gate;
    addBox('site', M.gravel, u.x0, u.y0, u.x1, u.y1, G, -1.15);
    addBox('site', M.c.charred, u.x0, u.y1 - 0.4, u.x1, u.y1, G, sh); addBox('site', M.c.charred, u.x0, u.y0, u.x0 + 0.4, u.y1, G, sh); addBox('site', M.c.charred, u.x1 - 0.4, u.y0, u.x1, u.y1, G, sh);
    addBox('site', M.c.charred, u.x0, u.y0, gx[0], u.y0 + 0.4, G, sh); addBox('site', M.c.charred, gx[1], u.y0, u.x1, u.y0 + 0.4, G, sh);
    addBox('site', M.c.charred, gx[0] + 0.3, u.y0 - 0.6, gx[0] + 5.8, u.y0 - 0.3, -0.6, sh - 0.6); addBox('site', M.c.charred, gx[1] - 5.8, u.y0 - 0.6, gx[1] - 0.3, u.y0 - 0.3, -0.6, sh - 0.6); // gate leaves (open)
    S.tanks.forEach(([x, y, r]) => { addCyl('site', colorMat('#5f6b5a'), x, y, r, -1.1, 8.5, 28); addCyl('site', colorMat('#4f5a4b'), x, y, r * 0.98, 8.5, 9.2, 28); });
    const wt = S.watertreat; addBox('site', M.concrete || M.stone, wt.x0, wt.y0, wt.x1, wt.y1, G, -0.6);
    addBox('site', [M.charred, M.charred, M.seam, M.soffit, M.charred, M.charred], wt.x0 - 0.5, wt.y0 - 0.5, wt.x1 + 0.5, wt.y1 + 0.5, 8.4, 8.8);
    addBox('site', M.c.charred, wt.x0, wt.y1 - 0.4, wt.x1, wt.y1, -0.6, 8.4); addBox('site', M.c.charred, wt.x1 - 0.4, wt.y0, wt.x1, wt.y1, -0.6, 8.4);
    [[wt.x0 + 0.8, 0.9, '#3f7fbf'], [wt.x0 + 2.3, 0.9, '#9aa0a3'], [wt.x0 + 3.8, 0.9, '#9aa0a3'], [wt.x0 + 5.3, 0.6, '#c9c2b4']].forEach(([x, r, c]) => addCyl('site', colorMat(c), x, wt.y1 - 1.6, r * 0.6, -0.6, 4.5, 14));
    addCyl('site', colorMat('#2f4f7a'), wt.x0 + 7.6, wt.y1 - 1.8, 0.9, -0.6, 4.8, 16); addBox('site', colorMat('#2a2a2a'), wt.x0 + 1, wt.y0 + 1.5, wt.x0 + 3.5, wt.y0 + 4, -0.6, 1.8); // softener + pressure pump
    const at = S.atu; addBox('site', colorMat('#7d7a70'), at.x0, at.y0, at.x1, at.y1, G, -1.0); [at.x0 + 2, at.x0 + 6, at.x0 + 10].forEach(x => addCyl('site', colorMat('#3d4a3a'), x, (at.y0 + at.y1) / 2, 1.0, -1.0, -0.8, 16));
    const pw = S.power; addBox('site', M.stone, pw.x0, pw.y0, pw.x1, pw.y1, G, -0.6); addBox('site', colorMat('#e6e3dc'), pw.x0 + 0.5, pw.y0 + 0.5, pw.x0 + 6, pw.y0 + 3.5, -0.6, 3.6); addBox('site', colorMat('#2d2d2d'), pw.x0 + 0.5, pw.y1 - 3.2, pw.x0 + 3.5, pw.y1 - 0.8, -0.6, 4.2); addBox('site', colorMat('#2d2d2d'), pw.x0 + 4.2, pw.y1 - 3.2, pw.x0 + 7.2, pw.y1 - 0.8, -0.6, 4.2);
    S.condensers.forEach(([x, y]) => { addBox('site', colorMat('#cfccc4'), x, y, x + 3, y + 3, -0.6, 3.2); addCyl('site', colorMat('#3a3a3a'), x + 1.5, y + 1.5, 1.1, 3.2, 3.3, 18); });
    // service lane from the drive + drain field + well
    for (let i = 0; i < S.service.length - 1; i++) { const [ax, ay] = S.service[i], [bx, by] = S.service[i + 1]; addBox('site', M.gravel, Math.min(ax, bx) - 5, Math.min(ay, by) - 5, Math.max(ax, bx) + 5, Math.max(ay, by) + 5, G, -1.2); }
    const df = S.drainfield; addBox('site', colorMat('#9fb07a'), df.x0, df.y0, df.x1, df.y1, G, -1.25); for (let y = df.y0 + 3; y < df.y1; y += 5) addBox('site', colorMat('#8a9c66'), df.x0 + 2, y, df.x1 - 2, y + 0.6, G, -1.2);
    const wl = S.well; addCyl('site', colorMat('#7d7a70'), wl.cx, wl.cy, 1.6, G, 1.2, 16); addCyl('site', M.c.charred, wl.cx, wl.cy, 0.5, 1.2, 3.2, 10);
  }
  // bath garden wall
  const bg = S.bathgarden; addBox('site', M.c.charred, bg.x1 - 0.5, bg.y0, bg.x1, bg.y1, G, 7); addBox('site', M.c.charred, bg.x0, bg.y1 - 0.5, bg.x1, bg.y1, G, 7);
  addBox('site', M.gravel, bg.x0, bg.y0, bg.x1 - 0.5, bg.y1 - 0.5, G, -1.1);
  // stepping path from entry court to front door + gallery deck to pool
  addBox('site', M.flag, 72, 0, 78, 14, G, -0.9); addBox('site', M.flag, 66, -0, 72, 1, G, -0.95);
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
  { id: 'U1', name: 'Rainwater Tanks', wing: 'Outdoor', x0: 100.5, y0: 12.5, x1: 122.5, y1: 23.5, notes: 'Two 10-ft-diameter tanks (about 5,000 gal each) fed by gutters and leaders from the big standing-seam roofs, with first-flush diverters. Backup from the well (or municipal water where available).', floor: 'Concrete pads', fin: 'Dark green steel tanks inside the charred-timber screen' },
  { id: 'U2', name: 'Water Treatment', wing: 'Outdoor', x0: 124, y0: 13, x1: 135, y1: 23, notes: 'Roofed lean-to: pressure pump with pressure tank, sediment filter, carbon filter, UV sterilizer and a water softener, then on to the house.', floor: 'Concrete pad', fin: 'Charred timber; standing-seam roof' },
  { id: 'U3', name: 'Septic + Aerobic Treatment', wing: 'Outdoor', x0: 103, y0: -3, x1: 115, y1: 3, notes: 'Buried septic tank plus an aerobic treatment unit (ATU), lids at grade for pumping from the service lane. Feeds the drain field down-slope to the south-east, well away from the vegetable garden and the well.', floor: 'Gravel over buried tanks', fin: 'Traffic-rated lids' },
  { id: 'U4', name: 'Generator + Battery Pad', wing: 'Outdoor', x0: 125, y0: -4, x1: 135, y1: 5, notes: 'Standby generator plus two home batteries tied to roof solar, on a concrete pad with clearance from the screen.', floor: 'Concrete pad', fin: 'Concrete' },
  { id: 'U5', name: 'HVAC Condensers', wing: 'Outdoor', x0: 118.5, y0: 0.5, x1: 122.5, y1: 12.5, notes: 'Three heat-pump condensers (house zones plus the studio\'s decoupled system) on pads, line sets running to the sleeping and wellness wings.', floor: 'Concrete pads', fin: 'Screened by charred timber' },
  { id: 'U', name: 'Utility Yard', wing: 'Outdoor', x0: 100, y0: -6, x1: 136, y1: 24, area: 0, notes: '36 x 30 ft screened service yard beside the Pool Equipment room (211, which keeps the pool pump, filter and salt cell) and the wellness wing. 7-ft charred-timber screen matching the house, with a 12-ft service gate on the gravel service lane from the drive for pump trucks and deliveries.', floor: 'Compacted gravel + concrete pads', fin: 'Charred-timber screen; gravel; concrete pads' },
  { id: 'U6', name: 'Drain Field', wing: 'Outdoor', x0: 30, y0: -74, x1: 90, y1: -52, notes: 'On-site wastewater drain field in the south meadow below the service lane, more than 100 ft from the vegetable garden and the well, kept clear of the service lane. Size to the perc test.', floor: 'Meadow grass', fin: 'Meadow over trenches' },
  { id: 'U7', name: 'Well', wing: 'Outdoor', x0: 137, y0: 92, x1: 143, y1: 98, notes: 'Well head up-slope in the north-east, far from the drain field. Backup supply to the rainwater tanks.', floor: 'Gravel', fin: 'Stone pad; charred timber cover' },
  { id: 'C', name: 'Courtyard', wing: 'Outdoor', x0: 36, y0: 27, x1: 72, y1: 55, notes: 'The heart of the house, now 36 x 28 ft. A katsura shade tree with a curved teak bench, Japanese maples, a lawn, a raked-gravel garden with three stones, a planted water court with a stone water basin, stone lanterns and lit paths, all on a flagstone terrace under 6-ft eaves. Every main room opens onto it.', h: null, floor: 'Flagstone, lawn, raked gravel', fin: 'Flagstone terrace; raked gravel; lawn; black-stone water court edge; stone lanterns and basin; teak bench; path lights' },
  { id: 'P', name: 'Saltwater Pool', wing: 'Outdoor', x0: 54, y0: -22, x1: 88, y1: -10, notes: 'Small 34 x 12 ft saltwater pool lined in green stone tile, on the sunny south side outside the wellness wing. A salt chlorine generator in the Pool Equipment room (cell replaced about every 3-5 years), marine-grade 316 stainless fittings, a sealed flagstone deck, teak loungers, and a bale pavilion at the east end.', floor: 'Sealed flagstone deck', fin: 'Green stone pool tile; sealed flagstone deck; 316 stainless fittings; teak and linen loungers' },
  { id: 'B', name: 'Bale Pavilion', wing: 'Outdoor', x0: 90, y0: -27, x1: 97, y1: -19, notes: 'Balinese-style bale by the pool: a raised honey-oak platform with linen cushions under a low standing-seam roof on fir posts.', floor: 'Honey-oak platform', fin: 'Honey oak; fir posts; standing-seam roof; linen cushions' },
  { id: 'L', name: 'Turf Sprint Lane', wing: 'Outdoor', x0: -32, y0: -16, x1: 43, y1: -8, notes: '20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. An outdoor pull-up station stands at the gym end.', floor: 'Synthetic turf', fin: 'Turf; charred-timber end wall; black steel pull-up station' },
  { id: 'V', name: 'Vegetable Garden', wing: 'Outdoor', x0: -30, y0: 64, x1: -6, y1: 86, notes: 'Loved: four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry, with a small orchard of fruit trees beside it.', floor: 'Gravel', fin: 'Cedar beds; gravel paths; fruit trees' },
  { id: 'F', name: 'Round Stone Fire Pit', wing: 'Outdoor', x0: 51, y0: 92, x1: 65, y1: 106, notes: 'Round stone fire pit with a curved stone seat wall on a flagstone circle, facing the mountains off the covered veranda.', floor: 'Flagstone', fin: 'Natural stone ring and seat walls; flagstone' },
  { id: 'D', name: 'Pergola Dining', wing: 'Outdoor', x0: 19, y0: 81, x1: 37, y1: 95, notes: 'Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.', floor: 'Flagstone', fin: 'Flagstone; charred timber and fir pergola' },
  { id: 'W', name: 'Climbing Pavilion', wing: 'Outdoor', x0: -22, y0: 0, x1: -4, y1: 18, area: 0, cov: 324, notes: 'Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A full 16-ft-wide, 12-ft-high climbing wall from day one sits on the north side facing the sprint lane, over poured-rubber soft-fall and thick crash pads. The roof was raised to 17 ft so the beams clear the top of the wall by about 3 ft and the roof by about 4 ft. Sits in the active zone with the exercise room, sprint lane and a 4-bike rack. Covered outdoor area, not conditioned.', floor: 'Poured-rubber soft-fall + crash pads', equip: ['Climbing wall 16\' × 12\'', 'Two bouldering volumes', 'Crash pads', '4-bike rack'], fin: 'Fir frame; standing-seam roof at 17 ft; charred fascia; poured rubber' },
  { id: 'S', name: 'Outdoor Shower', wing: 'Outdoor', x0: 72.5, y0: 4, x1: 77.5, y1: 10, notes: 'Loved: stone shower by the pool behind solid charred-timber walls (no slat enclosure), next to the changing room.', floor: 'Stone', fin: 'Charred timber walls; stone floor; brass rain head' },
  { id: 'Q', name: 'Courtyard Shower', wing: 'Outdoor', x0: 66.5, y0: 27.5, x1: 71.5, y1: 31.5, notes: 'A second open-air shower in the courtyard corner by the wellness wing, with a charred-timber privacy wall and a brass rain head.', floor: 'Black stone', fin: 'Black stone; charred timber; brass' },
  { id: 'K', name: 'Bike Racks', wing: 'Outdoor', x0: 3, y0: 62, x1: 7.5, y1: 72, notes: 'Six-bike rack under the mudroom eave, with gear storage just inside.', floor: 'Stone', fin: 'Stone; black steel' },
  { id: 'R', name: 'Carport', wing: 'Outdoor', x0: -44, y0: 30, x1: -20, y1: 54, notes: 'Modern black carport for two cars: slim black steel posts and a low standing-seam roof, off the gravel drive. A covered walkway leads past the front garden to the door.', floor: 'Gravel', fin: 'Black steel; standing-seam roof; gravel drive' },
  { id: 'E', name: 'Covered Walkway + Front Garden', wing: 'Outdoor', x0: -20, y0: 48, x1: 13, y1: 54, notes: 'Black-steel covered walkway on flagstone from the carport to the front door, past front-garden beds of grasses, low shrubs and a multi-stem tree.', floor: 'Flagstone', fin: 'Flagstone; black steel; standing-seam roof; planted beds' },
];

export function buildAll(groups) {
  const M = makeMaterials();
  MM = M; buildRoofs(M); buildWalls(M); buildFloors(M, groups); buildFurniture(M); buildSite(M, groups);
  B.build(groups);
  buildTrees(groups); buildMountains(groups);
  return { M, blocking, roofUnder };
}
export { P };
