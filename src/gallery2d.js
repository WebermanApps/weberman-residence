/* 2D floor plan (default view) + per-room photoreal concept galleries.
   Geometry comes from plan.json (design/design.py source of truth). Images are encrypted files/*.enc,
   decrypted in the browser after unlock via window.mwEncUrl (enc_file_viewer). */
import { P } from './build.js';
import { GALLERY } from './gallery-data.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (v) => { const f = Math.floor(v + 1e-6), i = Math.round((v - f) * 12); return i ? `${f}' ${i}"` : `${f}'`; };
const CY = P.courtyard;
const PROPOSED = {
  MED: {
    id: 'MED', name: 'Quiet Meditation Room', wing: 'Proposed · not in the plan yet', proposed: true,
    sizeText: 'About 10\' × 10\' (proposed)',
    notes: 'Proposed only. Location and size are not drawn into the plan yet, and the model geometry has not changed. Picks from the Meditation Room deck (Nov 7): cozy cave-like mood, empty and minimal.',
    fin: 'Tatami floor; zafu + zabuton; warm dark earth plaster; hinoki wood lining; small garden window behind shoji; flat ceiling; hidden cove light + one low lantern. Scent object still open (hinoki incense tray vs none).'
  },
  CY: {
    id: 'CY', name: 'Courtyard', wing: 'Outdoors', sizeText: `${CY.x1 - CY.x0}' × ${CY.y1 - CY.y0}'`,
    notes: 'Bodhi tree, Japanese maple and light bamboo around a reflecting pool, pale pavers, a stone band and timber chairs. Ringed by white plaster pavilions, glazed engawa, honey teak soffits and copper trim.',
    fin: 'Pale stone pavers; reflecting pool; bodhi + maple + light bamboo; white smooth plaster walls; yakisugi feature panels; honey teak soffits; copper roof-edge trim'
  }
};
const item = (id) => PROPOSED[id] || P.rooms.find(r => r.id === id);

// ---------- SVG plan ----------
const PAD = 3, X0 = Math.min(...P.rooms.map(r => r.x0)) - PAD, X1 = Math.max(...P.rooms.map(r => r.x1)) + PAD;
const Y0 = Math.min(...P.rooms.map(r => r.y0)) - PAD, Y1 = Math.max(...P.rooms.map(r => r.y1)) + PAD;
const sx = (x) => x - X0, sy = (y) => Y1 - y; // north up (larger y = north)
const FILL = { bigtile: '#f3f1ea', stonetile: '#ece8de', stone: '#e9e6dc', honey: '#efe4d2', oakplank: '#ecdcc2', hinoki: '#f1e3c4', sage: '#dfe6d6', tatami: '#e6dfbf', flagstone: '#e4e1d8', concrete: '#e4e3df' };
function planSVG() {
  const W = X1 - X0, H = Y1 - Y0; let s = `<svg class="p2-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Floor plan of the whole house. Select a room to see its views.">`;
  s += `<rect x="${sx(CY.x0)}" y="${sy(CY.y1)}" width="${CY.x1 - CY.x0}" height="${CY.y1 - CY.y0}" class="p2-cy" data-room="CY" tabindex="0" role="button" aria-label="Courtyard, open views"><title>Courtyard</title></rect>`;
  s += `<text class="p2-cyl" x="${sx((CY.x0 + CY.x1) / 2)}" y="${sy((CY.y0 + CY.y1) / 2)}">COURTYARD</text>`;
  for (const r of P.rooms) {
    const w = r.x1 - r.x0, h = r.y1 - r.y0, has = !!GALLERY[r.id];
    s += `<g class="p2-room${has ? '' : ' nogal'}" data-room="${r.id}" tabindex="0" role="button" aria-label="${esc(r.name)}, ${w} by ${h} feet${has ? ', open views' : ''}"><title>${esc(r.name)}</title>`;
    s += `<rect x="${sx(r.x0)}" y="${sy(r.y1)}" width="${w}" height="${h}" fill="${FILL[r.floor] || '#efede6'}"/>`;
    const cx = sx((r.x0 + r.x1) / 2), cy = sy((r.y0 + r.y1) / 2), rot = h > w * 2.4 && w <= 8;
    const L = rot ? h : w, T = rot ? w : h, fit = (lines) => Math.min(2.0, T / (lines.length * 1.25 + 1.1), ...lines.map(l => 0.86 * L / (l.length * 0.56)));
    const sp = r.name.split(' '), opts = [[r.name]];
    for (let i = 1; i < sp.length; i++) opts.push([sp.slice(0, i).join(' '), sp.slice(i).join(' ')]);
    let lines = opts[0], fs = fit(lines); for (const o of opts) { const f = fit(o); if (f > fs * 1.08) { fs = f; lines = o; } }
    const tr = rot ? ` transform="rotate(-90 ${cx} ${cy})"` : '';
    if (fs >= 0.85) {
      lines.forEach((ln, i) => { s += `<text class="p2-t"${tr} x="${cx}" y="${cy + (i - (lines.length - 1) / 2) * fs * 1.15 - fs * .25}" font-size="${fs.toFixed(2)}">${esc(ln)}</text>`; });
      s += `<text class="p2-d"${tr} x="${cx}" y="${cy + (lines.length / 2) * fs * 1.15 + .35}" font-size="${(Math.min(fs * .72, 1.3)).toFixed(2)}">${w}' × ${h}'</text>`;
    } else {
      s += `<text class="p2-n"${tr} x="${cx}" y="${cy + .45}" font-size="${Math.max(1, Math.min(1.5, Math.min(w, h) / 3))}">${r.id}</text>`;
    }
    s += `</g>`;
  }
  for (const wl of P.walls) {
    const h = wl.o === 'h', seg = (a, b, cls) => h ? `<line class="${cls}" x1="${sx(a)}" y1="${sy(wl.c)}" x2="${sx(b)}" y2="${sy(wl.c)}"/>` : `<line class="${cls}" x1="${sx(wl.c)}" y1="${sy(a)}" x2="${sx(wl.c)}" y2="${sy(b)}"/>`;
    const feats = (wl.feats || []).slice().sort((p, q) => p.a - q.a); let cur = wl.a;
    const base = wl.ext ? 'p2-w ext' : 'p2-w';
    for (const f of feats) { if (f.a > cur) s += seg(cur, f.a, base); const k = f.k; if (k === 'window' || k === 'glass' || k === 'fixed' || k === 'slide') s += seg(f.a, f.b, 'p2-gl'); else if (k !== 'open') s += seg(f.a, f.b, 'p2-dr'); cur = Math.max(cur, f.b); }
    if (cur < wl.b) s += seg(cur, wl.b, base);
  }
  const nx = W - 4, ny = 5; s += `<g class="p2-north" transform="translate(${nx} ${ny})"><path d="M0 -3 L1.4 1.6 L0 .8 L-1.4 1.6Z"/><text y="4.2">N</text></g>`;
  s += `<g class="p2-scale" transform="translate(3 ${H - 1.6})"><line x1="0" y1="0" x2="20" y2="0"/><line x1="0" y1="-.6" x2="0" y2=".6"/><line x1="10" y1="-.6" x2="10" y2=".6"/><line x1="20" y1="-.6" x2="20" y2=".6"/><text x="21" y=".5">20 ft</text></g>`;
  return s + `</svg>`;
}

function buildPlan() {
  const shell = $('shell'); const el = document.createElement('section'); el.id = 'plan2d'; el.className = 'p2'; el.setAttribute('aria-label', '2D floor plan with room photos');
  const nRooms = P.rooms.filter(r => GALLERY[r.id]).length;
  el.innerHTML = `<div class="p2-head"><div><div class="p2-k">2D FLOOR PLAN · ${P.total.toLocaleString()} SF</div><div class="p2-h">Tap any room to see it.</div></div>
    <div class="p2-legend"><span><i class="lg gl"></i>Glass / window</span><span><i class="lg dr"></i>Door</span></div></div>
    <div class="p2-wrap" data-ptr-ignore>${planSVG()}</div>
    <div class="p2-foot"><button class="p2-prop" data-room="MED"><b>Proposed</b> Quiet Meditation Room · 3 views<span>Not placed in the plan yet</span></button>
    <p class="p2-note">${nRooms} rooms + the courtyard each have AI-generated concept views based on the agreed finishes and room sizes. They are design concepts, not photos, and may not match exact window and door positions.</p></div>`;
  shell.appendChild(el);
  el.addEventListener('click', (e) => { const t = e.target.closest('[data-room]'); if (t) openGallery(t.dataset.room); });
  el.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('[data-room]')) { e.preventDefault(); openGallery(e.target.closest('[data-room]').dataset.room); } });
}

// ---------- mode switch ----------
let planOn = true;
function showPlan(on) {
  planOn = on; $('plan2d').hidden = !on; $('shell').classList.toggle('p2-on', on);
  document.querySelectorAll('#mode-seg button').forEach(b => b.classList.toggle('on', on ? b.dataset.mode === 'rooms' : b.classList.contains('on') && b.dataset.mode !== 'rooms'));
}
function addModeButton() {
  const seg = $('mode-seg'); const b = document.createElement('button'); b.dataset.mode = 'rooms';
  b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="9" cy="10" r="1.6"/><path d="M3 17l5-4 4 3 3-2 6 4"/></svg><span>Rooms + Photos</span>`;
  seg.prepend(b); b.onclick = () => showPlan(true);
  seg.querySelectorAll('button:not([data-mode="rooms"])').forEach(x => x.addEventListener('click', () => { showPlan(false); x.classList.add('on'); }));
  // rail list + chips open galleries while the plan is showing
  ['room-list', 'chips'].forEach(id => $(id)?.addEventListener('click', (e) => {
    if (!planOn) return; const t = e.target.closest('[data-id]'); if (!t) return;
    const rid = t.dataset.id === 'C' ? 'CY' : t.dataset.id;
    if (t.dataset.id === 'all') { e.stopPropagation(); closeGallery(); return; }
    if (GALLERY[rid] && item(rid)) { e.stopPropagation(); openGallery(rid); }
  }, true));
}

// ---------- gallery ----------
let G = null, idx = 0, lastFocus = null;
function buildGallery() {
  const d = document.createElement('div'); d.id = 'rg'; d.className = 'rg'; d.hidden = true; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-labelledby', 'rg-title');
  d.innerHTML = `<div class="rg-card">
    <div class="rg-top"><button class="rg-back" id="rg-back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 6l-6 6 6 6"/></svg><span>Back to plan</span></button>
      <div class="rg-tt"><div class="rg-k" id="rg-k"></div><h2 id="rg-title"></h2></div><button class="rg-x" id="rg-x" aria-label="Close room views">×</button></div>
    <div class="rg-stage" data-ptr-ignore><button class="rg-nav prev" id="rg-prev" aria-label="Previous view">‹</button>
      <figure><div class="rg-img"><img id="rg-img" alt=""><div class="rg-load" id="rg-load">Unlocking image…</div></div><figcaption id="rg-cap"></figcaption></figure>
      <button class="rg-nav next" id="rg-next" aria-label="Next view">›</button></div>
    <div class="rg-thumbs" id="rg-thumbs" role="tablist" aria-label="Views"></div>
    <div class="rg-info"><div class="rg-meta" id="rg-meta"></div><p id="rg-notes"></p><p class="rg-fin" id="rg-fin"></p>
      <p class="rg-prov">AI-generated concept image (Nov 8, 2026) from the room size and agreed finishes. Not a photo or a construction drawing.</p></div></div>`;
  document.body.appendChild(d);
  $('rg-back').onclick = closeGallery; $('rg-x').onclick = closeGallery; $('rg-prev').onclick = () => go(-1); $('rg-next').onclick = () => go(1);
  d.addEventListener('click', (e) => { if (e.target === d) closeGallery(); });
  document.addEventListener('keydown', (e) => { if (d.hidden) return; if (e.key === 'Escape') closeGallery(); else if (e.key === 'ArrowLeft') go(-1); else if (e.key === 'ArrowRight') go(1); });
  let x0 = null; const st = d.querySelector('.rg-stage');
  st.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  st.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1); x0 = null; });
}
const urlCache = new Map();
function enc(p) { if (!urlCache.has(p)) urlCache.set(p, window.mwEncUrl(p)); return urlCache.get(p); }
function openGallery(id) {
  const it = item(id), views = GALLERY[id]; if (!it || !views) return;
  G = { id, it, views }; idx = 0; lastFocus = document.activeElement;
  const isRoom = !it.proposed && P.rooms.includes(it);
  $('rg-k').textContent = it.proposed ? 'PROPOSED · NOT IN THE PLAN YET' : `${isRoom ? 'ROOM ' + it.id + ' · ' : ''}${(it.wing || '').toUpperCase()}`;
  $('rg-title').textContent = it.name;
  const size = isRoom ? `${fmt(it.x1 - it.x0)} × ${fmt(it.y1 - it.y0)}` : it.sizeText;
  $('rg-meta').innerHTML = `<span><b>Size</b>${esc(size)}</span>` + (isRoom ? `<span><b>Area</b>${it.area} SF</span><span><b>Ceiling</b>${fmt(it.h)}</span>` : '') + (isRoom && it.floorName ? `<span class="wide"><b>Floor</b>${esc(it.floorName)}</span>` : '');
  $('rg-notes').textContent = it.notes || ''; $('rg-fin').innerHTML = it.fin ? `<b>Finishes</b> ${esc(it.fin)}` : '';
  $('rg-thumbs').innerHTML = views.map((v, i) => `<button role="tab" data-i="${i}" aria-label="View ${i + 1}: ${esc(v.c)}"><img alt="" data-f="${v.f}"><span>${esc(v.c)}</span></button>`).join('');
  $('rg-thumbs').querySelectorAll('button').forEach(b => b.onclick = () => show(+b.dataset.i));
  $('rg-thumbs').querySelectorAll('img').forEach(im => enc(im.dataset.f).then(u => { im.src = u; }).catch(() => {}));
  document.querySelectorAll('.p2 [data-room]').forEach(n => n.classList.toggle('on', n.dataset.room === id));
  $('rg').hidden = false; document.body.classList.add('rg-open'); show(0); $('rg-x').focus();
}
function show(i) {
  if (!G) return; const n = G.views.length; idx = (i + n) % n; const v = G.views[idx];
  const img = $('rg-img'), ld = $('rg-load'); img.removeAttribute('src'); img.alt = `${G.it.name}: ${v.c}`; ld.hidden = false; ld.textContent = 'Unlocking image…';
  $('rg-cap').textContent = `View ${idx + 1} of ${n} · ${v.c}`;
  const want = v.f; enc(want).then(u => { if (G && G.views[idx].f === want) { img.src = u; ld.hidden = true; } }).catch(() => { ld.textContent = 'This image could not be unlocked. Re-open the page and enter the password with "Remember this device" on.'; });
  $('rg-thumbs').querySelectorAll('button').forEach((b, j) => { b.classList.toggle('on', j === idx); b.setAttribute('aria-selected', j === idx); });
  $('rg-prev').hidden = $('rg-next').hidden = n < 2;
}
function go(d) { show(idx + d); }
function closeGallery() { if ($('rg').hidden) return; $('rg').hidden = true; document.body.classList.remove('rg-open'); G = null; lastFocus?.focus?.(); }

// ---------- bottom nav: Home / Reports / Ask / More ----------
function buildNav() {
  const nav = document.createElement('nav'); nav.className = 'bnav'; nav.setAttribute('aria-label', 'App');
  const ic = { home: '<path d="M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10"/>', rep: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>', ask: '<path d="M4 5h16v11H9l-5 4z"/>', more: '<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>' };
  nav.innerHTML = [['home', 'Home'], ['rep', 'Reports'], ['ask', 'Ask'], ['more', 'More']].map(([k, l]) => `<button data-nav="${k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${ic[k]}</svg><span>${l}</span></button>`).join('');
  document.body.appendChild(nav); document.body.classList.add('has-bnav');
  const B = (k) => nav.querySelector(`[data-nav="${k}"]`);
  B('home').classList.add('on');
  B('home').onclick = () => { closeGallery(); $('modal').hidden = true; showPlan(true); };
  B('rep').onclick = () => { closeGallery(); $('btn-drawings').click(); };
  B('ask').onclick = () => { const c = document.querySelector('.mw-chat-btn'); if (c) c.click(); else B('ask').disabled = true; };
  B('more').onclick = () => {
    closeGallery();
    const body = $('modal-body'); $('modal-title').textContent = 'More'; $('modal').hidden = false;
    body.innerHTML = `<div class="more-list"><button data-m="3d">3D model + walk-through</button><button data-m="about">About this model</button><a href="https://webermanapps.github.io/blueprint-dashboard/" target="_blank" rel="noopener">Blueprint Dashboard ↗</a></div>`;
    body.querySelector('[data-m="3d"]').onclick = () => { $('modal').hidden = true; document.querySelector('#mode-seg [data-mode="orbit"]').click(); };
    body.querySelector('[data-m="about"]').onclick = () => $('btn-about').click();
  };
  // Ask only exists when the chat kit loaded; hide it otherwise rather than point nowhere
  setTimeout(() => { if (!document.querySelector('.mw-chat-btn')) B('ask').hidden = true; }, 4000);
}

buildPlan(); addModeButton(); buildGallery(); buildNav(); showPlan(true);
window.__p2 = { openGallery, closeGallery, showPlan };
