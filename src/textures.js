import * as THREE from 'three';
// Procedural canvas textures. Each texture covers `size` feet; repeat set per-mesh via world UVs (UV units = feet).
let seed = 7;
const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
export let QUALITY = 1; // 0.5 on phones: half-res procedural textures
export function setQuality(q) { QUALITY = q; }
function canvas(n = 512) { n = Math.max(64, Math.round(n * QUALITY)); const c = document.createElement('canvas'); c.width = c.height = n; const g = c.getContext('2d', { willReadFrequently: true }); g.scale(n / (n / QUALITY), n / (n / QUALITY)); return [c, g]; }
// normal map from a canvas' luminance (height), PBR-style relief for tiles, boards and stone
function normalFrom(c, sizeFt, strength = 2, invert = false) {
  const n = c.width; const src = c.getContext('2d').getImageData(0, 0, n, n).data;
  const out = document.createElement('canvas'); out.width = out.height = n; const og = out.getContext('2d'); const img = og.createImageData(n, n);
  const H = (x, y) => { x = (x + n) % n; y = (y + n) % n; const i = (y * n + x) * 4; const v = (src[i] * 0.3 + src[i + 1] * 0.59 + src[i + 2] * 0.11) / 255; return invert ? 1 - v : v; };
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength, dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1); const i = (y * n + x) * 4;
    img.data[i] = (-dx / l * 0.5 + 0.5) * 255; img.data[i + 1] = (dy / l * 0.5 + 0.5) * 255; img.data[i + 2] = (1 / l * 0.5 + 0.5) * 255; img.data[i + 3] = 255;
  }
  og.putImageData(img, 0, 0); return tex(out, sizeFt, false);
}
function tex(c, sizeFt, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1 / sizeFt, 1 / sizeFt);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function noise(g, n, alpha, cols, count) {
  for (let i = 0; i < count; i++) { g.fillStyle = cols[(rnd() * cols.length) | 0]; g.globalAlpha = alpha * rnd(); const s = 1 + rnd() * 2.5; g.fillRect(rnd() * n, rnd() * n, s, s); }
  g.globalAlpha = 1;
}
export function makeTextures() {
  const T = {};
  { // white stucco
    const [c, g] = canvas(256); g.fillStyle = '#efebe3'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.25, ['#ffffff', '#ddd6ca', '#e6e0d5'], 5000); T.stucco = tex(c, 6);
  }
  { // warm interior plaster
    const [c, g] = canvas(256); g.fillStyle = '#f2ece2'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.18, ['#fbf7f0', '#e4dccf'], 3000); T.plaster = tex(c, 6);
  }
  { // shou sugi ban (charred vertical boards, 6" wide)
    const [c, g] = canvas(512); g.fillStyle = '#2b2724'; g.fillRect(0, 0, 512, 512);
    const bw = 512 / 12;
    for (let i = 0; i < 12; i++) {
      const l = 30 + rnd() * 14; g.fillStyle = `rgb(${l + 6},${l + 2},${l})`; g.fillRect(i * bw, 0, bw - 2, 512);
      for (let k = 0; k < 140; k++) { g.fillStyle = rnd() < 0.5 ? '#1c1a18' : '#45403a'; g.globalAlpha = 0.5; g.fillRect(i * bw + rnd() * bw, rnd() * 512, 2 + rnd() * 8, 1 + rnd() * 2); }
      g.globalAlpha = 1; g.fillStyle = '#151311'; g.fillRect(i * bw + bw - 2, 0, 2, 512);
    }
    T.charred = tex(c, 6);
  }
  { // rammed earth strata
    const [c, g] = canvas(512); let y = 0;
    const cols = ['#b98d6c', '#c49a78', '#a87d5f', '#cfa888', '#b48a6a', '#9f7558', '#c8a080'];
    while (y < 512) { const h = 10 + rnd() * 34; g.fillStyle = cols[(rnd() * cols.length) | 0]; g.fillRect(0, y, 512, h); y += h; }
    noise(g, 512, 0.35, ['#8a654b', '#dcc0a2', '#9a7458'], 9000);
    T.rammed = tex(c, 8);
  }
  { // natural stone pavers
    const [c, g] = canvas(512); g.fillStyle = '#9d968a'; g.fillRect(0, 0, 512, 512);
    const rows = 4; const rh = 512 / rows;
    for (let r = 0; r < rows; r++) { let x = -rnd() * 100; while (x < 512) { const w = 90 + rnd() * 120; const l = 175 + rnd() * 25; g.fillStyle = `rgb(${l},${l - 6},${l - 16})`; g.fillRect(x + 2, r * rh + 2, w - 4, rh - 4); x += w; } }
    noise(g, 512, 0.25, ['#8e877b', '#d8d1c4'], 6000); T.stone = tex(c, 8);
  }
  { // plinth stone (darker, coursed)
    const [c, g] = canvas(256); g.fillStyle = '#6f6a62'; g.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 4; r++) { let x = -rnd() * 60; while (x < 256) { const w = 40 + rnd() * 70; const l = 120 + rnd() * 30; g.fillStyle = `rgb(${l},${l - 4},${l - 10})`; g.fillRect(x + 2, r * 64 + 2, w - 3, 60); x += w; } }
    T.plinth = tex(c, 4);
  }
  { // white oak floor
    const [c, g] = canvas(512); g.fillStyle = '#c9a57a'; g.fillRect(0, 0, 512, 512);
    const pw = 512 / 8;
    for (let i = 0; i < 8; i++) { let y = -rnd() * 300; while (y < 512) { const L = 200 + rnd() * 250; const l = rnd() * 18; g.fillStyle = `rgb(${200 + l},${164 + l},${118 + l})`; g.fillRect(i * pw + 1, y + 1, pw - 2, L - 2); for (let k = 0; k < 18; k++) { g.strokeStyle = 'rgba(140,100,60,0.15)'; g.beginPath(); const xx = i * pw + rnd() * pw; g.moveTo(xx, y); g.lineTo(xx + rnd() * 6 - 3, y + L); g.stroke(); } y += L; } }
    T.oak = tex(c, 6);
  }
  { // exterior decking (engawa) darker teak-ish
    const [c, g] = canvas(256); g.fillStyle = '#8a6a4a'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 10; i++) { const l = rnd() * 20; g.fillStyle = `rgb(${150 + l},${115 + l},${80 + l})`; g.fillRect(i * 25.6 + 1, 0, 23.6, 256); }
    T.deck = tex(c, 4);
  }
  { // cedar soffit (fine boards)
    const [c, g] = canvas(256); g.fillStyle = '#b07a4f'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 16; i++) { const l = rnd() * 22; g.fillStyle = `rgb(${176 + l},${122 + l},${80 + l})`; g.fillRect(0, i * 16 + 1, 256, 14); }
    T.soffit = tex(c, 4);
  }
  { // tatami
    const [c, g] = canvas(256); g.fillStyle = '#cfc58e'; g.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 3) { g.fillStyle = y % 6 ? '#c4b97f' : '#d8cf9c'; g.fillRect(0, y, 256, 2); }
    g.fillStyle = '#3d4a35'; g.fillRect(0, 0, 256, 6); g.fillRect(0, 125, 256, 6); g.fillRect(0, 0, 6, 256);
    T.tatami = tex(c, 6);
  }
  { // rubber gym floor
    const [c, g] = canvas(256); g.fillStyle = '#3b3b39'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.7, ['#555552', '#2a2a29', '#6b6658'], 6000); T.rubber = tex(c, 4);
  }
  { // standing seam metal (dark bronze)
    const [c, g] = canvas(256); g.fillStyle = '#6a645c'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 8; i++) { g.fillStyle = '#7d776e'; g.fillRect(i * 32, 0, 3, 256); g.fillStyle = '#4e4943'; g.fillRect(i * 32 + 3, 0, 2, 256); }
    T.seam = tex(c, 12);
  }
  { // gravel (raked)
    const [c, g] = canvas(256); g.fillStyle = '#d9d4c8'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.6, ['#bfb8aa', '#eeeae2', '#a9a294'], 9000);
    for (let y = 0; y < 256; y += 16) { g.strokeStyle = 'rgba(150,142,128,0.45)'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, y); g.lineTo(256, y); g.stroke(); }
    T.gravel = tex(c, 6);
  }
  { // turf
    const [c, g] = canvas(256); g.fillStyle = '#5f8c3c'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.5, ['#4f7a30', '#77a24e', '#6a9545'], 8000); T.turf = tex(c, 6);
  }
  { // meadow ground
    const [c, g] = canvas(512); g.fillStyle = '#a3a46e'; g.fillRect(0, 0, 512, 512);
    noise(g, 512, 0.5, ['#8f9660', '#b8b37e', '#868c55', '#b0a46c'], 26000);
    noise(g, 512, 0.9, ['#e2c75a', '#d18bb0', '#f2f0e6', '#c97a4a', '#9a7fc4'], 2200);
    T.meadow = tex(c, 30);
  }
  { // cedar sauna
    const [c, g] = canvas(256); g.fillStyle = '#c08552'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 12; i++) { const l = rnd() * 20; g.fillStyle = `rgb(${190 + l},${132 + l},${82 + l})`; g.fillRect(0, i * 21 + 1, 256, 19); }
    T.cedar = tex(c, 4);
  }
  { // concrete
    const [c, g] = canvas(256); g.fillStyle = '#a9a59e'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.3, ['#97938c', '#c2beb6'], 5000); T.concrete = tex(c, 6);
  }
  { // lime plaster (soft mottled, hand-troweled)
    const [c, g] = canvas(256); g.fillStyle = '#efe9de'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 140; i++) { const x = rnd() * 256, y = rnd() * 256, r = 10 + rnd() * 40; const gr = g.createRadialGradient(x, y, 0, x, y, r); const l = rnd() < 0.5 ? 'rgba(255,252,246,0.35)' : 'rgba(214,204,188,0.28)'; gr.addColorStop(0, l); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
    noise(g, 256, 0.12, ['#fbf7f0', '#ddd3c4'], 2500); T.lime = tex(c, 8); T.limeN = normalFrom(c, 8, 1.2);
  }
  { // honey oak (wide plank, warm amber)
    const [c, g] = canvas(512); g.fillStyle = '#b98544'; g.fillRect(0, 0, 512, 512);
    const pw = 512 / 7;
    for (let i = 0; i < 7; i++) { let y = -rnd() * 300; while (y < 512) { const L = 220 + rnd() * 260; const l = rnd() * 22 - 8; g.fillStyle = `rgb(${200 + l},${143 + l},${78 + l * 0.6})`; g.fillRect(i * pw + 1, y + 1, pw - 2, L - 2);
      for (let k = 0; k < 26; k++) { g.strokeStyle = `rgba(${120 + rnd() * 30},${70 + rnd() * 20},30,${0.08 + rnd() * 0.14})`; g.lineWidth = 1 + rnd(); g.beginPath(); const xx = i * pw + rnd() * pw; g.moveTo(xx, y); g.bezierCurveTo(xx + rnd() * 8 - 4, y + L * 0.3, xx + rnd() * 8 - 4, y + L * 0.7, xx + rnd() * 6 - 3, y + L); g.stroke(); }
      g.fillStyle = 'rgba(70,40,15,0.6)'; g.fillRect(i * pw, y, pw, 1.5); y += L; } g.fillStyle = 'rgba(70,40,15,0.55)'; g.fillRect(i * pw, 0, 1.5, 512); }
    T.honey = tex(c, 7); T.honeyN = normalFrom(c, 7, 1.5);
  }
  { // oak herringbone: 4" x 20" planks at 45 degrees (period-aligned so it tiles)
    const [c, g] = canvas(512); g.fillStyle = '#6e4e2e'; g.fillRect(0, 0, 512, 512);
    const Wp = 512 / (5 * Math.SQRT2) / 1, L = 5 * Wp; const k = Math.SQRT1_2;
    for (let s2 = -8; s2 <= 8; s2++) for (let i = -30; i <= 30; i++) {
      for (const vert of [0, 1]) { const ox = i * Wp + s2 * L, oy = i * Wp - s2 * L + (vert ? Wp : 0);
        const [x0, y0, w, h] = vert ? [ox, oy, Wp, L] : [ox, oy, L, Wp];
        g.setTransform(QUALITY * k, -QUALITY * k, QUALITY * k, QUALITY * k, 0, 0);
        const l = rnd() * 26 - 6; g.fillStyle = `rgb(${200 + l},${160 + l},${110 + l * 0.8})`; g.fillRect(x0 + 1.2, y0 + 1.2, w - 2.4, h - 2.4);
        for (let q = 0; q < 4; q++) { g.fillStyle = 'rgba(120,80,40,0.13)'; if (vert) g.fillRect(x0 + 2 + rnd() * (w - 4), y0 + 2, 1, h - 4); else g.fillRect(x0 + 2, y0 + 2 + rnd() * (h - 4), w - 4, 1); } }
    }
    g.setTransform(QUALITY, 0, 0, QUALITY, 0, 0);
    T.herring = tex(c, 2.4); T.herringN = normalFrom(c, 2.4, 2.2);
  }
  { // Calacatta-style marble
    const [c, g] = canvas(512); g.fillStyle = '#f2efea'; g.fillRect(0, 0, 512, 512);
    noise(g, 512, 0.1, ['#e5e0d8', '#ffffff'], 4000);
    for (let v = 0; v < 14; v++) { let x = rnd() * 512, y = rnd() * 512; g.strokeStyle = v % 4 ? 'rgba(150,140,128,0.35)' : 'rgba(160,128,80,0.45)'; g.lineWidth = v % 4 ? 0.8 + rnd() : 2 + rnd() * 2; g.beginPath(); g.moveTo(x, y);
      for (let k = 0; k < 30; k++) { x += 20 + rnd() * 10; y += rnd() * 30 - 15; g.lineTo(x % 512, y); if (x > 512) { x -= 512; g.moveTo(x, y); } } g.stroke(); }
    T.marble = tex(c, 6);
  }
  { // black stone (honed soapstone / basalt)
    const [c, g] = canvas(256); g.fillStyle = '#2b2c2c'; g.fillRect(0, 0, 256, 256);
    noise(g, 256, 0.35, ['#3a3b3b', '#1f2020', '#45464a'], 7000);
    for (let i = 0; i < 6; i++) { g.strokeStyle = 'rgba(120,120,118,0.18)'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(rnd() * 256, 0); g.lineTo(rnd() * 256, 256); g.stroke(); }
    g.fillStyle = '#1a1a1a'; g.fillRect(0, 0, 256, 1.5); g.fillRect(0, 0, 1.5, 256); g.fillRect(0, 128, 256, 1.5);
    T.blackstone = tex(c, 4); T.blackstoneN = normalFrom(c, 4, 1.5);
  }
  { // green zellige (glossy, irregular handmade tiles)
    const [c, g] = canvas(256); g.fillStyle = '#e8e4da'; g.fillRect(0, 0, 256, 256);
    const n = 8, t = 256 / n;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const l = rnd(); const gr = g.createLinearGradient(x * t, y * t, x * t + t, y * t + t);
      gr.addColorStop(0, `rgb(${40 + l * 30},${110 + l * 40},${84 + l * 30})`); gr.addColorStop(0.6, `rgb(${30 + l * 20},${92 + l * 34},${70 + l * 24})`); gr.addColorStop(1, `rgb(${56 + l * 30},${130 + l * 40},${100 + l * 30})`);
      g.fillStyle = gr; g.fillRect(x * t + 2, y * t + 2, t - 4, t - 4);
      g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x * t + 4, y * t + 4, t * 0.3, 2);
    }
    T.zellige = tex(c, 1.33); T.zelligeN = normalFrom(c, 1.33, 3);
  }
  { // pale aspen boards
    const [c, g] = canvas(256); g.fillStyle = '#e8d8b8'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 10; i++) { const l = rnd() * 14; g.fillStyle = `rgb(${232 + l * 0.5},${214 + l},${178 + l})`; g.fillRect(0, i * 25.6 + 1, 256, 23.6); }
    noise(g, 256, 0.15, ['#d6c39c', '#f4ead6'], 1500); T.aspen = tex(c, 3); T.aspenN = normalFrom(c, 3, 1.5);
  }
  { // flagstone (irregular, grey-buff, deep joints)
    const [c, g] = canvas(256); g.fillStyle = '#5f5a52'; g.fillRect(0, 0, 512, 512);
    const pts = []; for (let i = 0; i < 26; i++) pts.push([rnd() * 512, rnd() * 512]);
    const id = g.getImageData(0, 0, c.width, c.height); const N = c.width, sc = 512 / N;
    const cols = pts.map(() => { const l = 150 + rnd() * 45; return [l, l - 6 - rnd() * 8, l - 16 - rnd() * 14]; });
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { let d1 = 1e9, d2 = 1e9, bi = 0; const X = x * sc, Y = y * sc;
      for (let k = 0; k < pts.length; k++) for (const ox of [-512, 0, 512]) for (const oy of [-512, 0, 512]) { const d = Math.hypot(X - pts[k][0] - ox, Y - pts[k][1] - oy); if (d < d1) { d2 = d1; d1 = d; bi = k; } else if (d < d2) d2 = d; }
      const i = (y * N + x) * 4; const edge = d2 - d1 < 5 ? 0.45 : 1; const j = 0.92 + rnd() * 0.12;
      id.data[i] = cols[bi][0] * edge * j; id.data[i + 1] = cols[bi][1] * edge * j; id.data[i + 2] = cols[bi][2] * edge * j; id.data[i + 3] = 255; }
    g.putImageData(id, 0, 0); T.flag = tex(c, 12); T.flagN = normalFrom(c, 12, 2.5);
  }
  { // green stone pool tile
    const [c, g] = canvas(256); g.fillStyle = '#3d5a50'; g.fillRect(0, 0, 256, 256);
    const n = 8, t = 256 / n; for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { const l = rnd() * 26; g.fillStyle = `rgb(${82 + l},${128 + l},${112 + l})`; g.fillRect(x * t + 1.5, y * t + 1.5, t - 3, t - 3); }
    T.pooltile = tex(c, 4); T.pooltileN = normalFrom(c, 4, 2);
  }
  { // large-format limestone tiles (2' x 4')
    const [c, g] = canvas(256); g.fillStyle = '#b8b0a2'; g.fillRect(0, 0, 256, 256);
    for (let r = 0; r < 4; r++) for (let k = 0; k < 2; k++) { const l = 214 + rnd() * 16; g.fillStyle = `rgb(${l},${l - 6},${l - 18})`; g.fillRect(k * 128 + (r % 2) * 64 + 1, r * 64 + 1, 126, 62); g.fillRect(k * 128 + (r % 2) * 64 + 1 - 256, r * 64 + 1, 126, 62); }
    noise(g, 256, 0.15, ['#c9c1b2', '#ece6da'], 3000); T.stonetile = tex(c, 8); T.stonetileN = normalFrom(c, 8, 1.6);
  }
  { // linen weave
    const [c, g] = canvas(128); g.fillStyle = '#e4dccd'; g.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 128; i += 2) { g.fillStyle = 'rgba(190,178,158,0.25)'; g.fillRect(0, i, 128, 1); g.fillRect(i, 0, 1, 128); }
    T.linen = tex(c, 1.5);
  }
  T.charredN = normalFrom(T.charred.image, 6, 2.5); T.seamN = normalFrom(T.seam.image, 12, 3); T.tatamiN = normalFrom(T.tatami.image, 6, 1.5); T.rammedN = normalFrom(T.rammed.image, 8, 1.2); T.gravelN = normalFrom(T.gravel.image, 6, 2);
  return T;
}
