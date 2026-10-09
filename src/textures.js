import * as THREE from 'three';
// Procedural canvas textures. Each texture covers `size` feet; repeat set per-mesh via world UVs (UV units = feet).
let seed = 7;
const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
function canvas(n = 512) { const c = document.createElement('canvas'); c.width = c.height = n; return [c, c.getContext('2d')]; }
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
  return T;
}
