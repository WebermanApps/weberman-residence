import json, sys
from playwright.sync_api import sync_playwright
URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4173/'
OUT = '/workspace/dreamhome/v2/bim/test/'
res = {}
with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
    for (w, h) in [(1440, 900), (768, 1024), (390, 844)]:
        pg = b.new_page(viewport={'width': w, 'height': h}, device_scale_factor=1, has_touch=(w < 800))
        errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(URL, wait_until='networkidle'); pg.wait_for_function('window.__ready && window.bim', timeout=90000)
        r = {}
        pg.click('#bim-btn'); pg.wait_for_timeout(300)
        r['panel_visible'] = pg.is_visible('#bim-panel')
        r['fit'] = pg.evaluate('''() => { const out = []; const vw = innerWidth, vh = innerHeight;
          for (const el of document.querySelectorAll('#bim-btn, #bim-panel, #bim-panel .bim-tg, #bim-panel .bim-link, #bim-panel .bim-x')) {
            const b = el.getBoundingClientRect(); if (!b.width) continue;
            if (b.left < -1 || b.right > vw + 1) out.push(['offscreenX', el.className, Math.round(b.left), Math.round(b.right)]);
            if (el.id !== 'bim-panel' && (b.height < 44 || b.width < 44)) out.push(['small', el.className, Math.round(b.width), Math.round(b.height)]);
          }
          const p = document.getElementById('bim-panel').getBoundingClientRect(); if (p.bottom > vh + 1 || p.top < 0) out.push(['panelY', p.top, p.bottom]);
          if (document.documentElement.scrollWidth > vw + 1) out.push(['hscroll', document.documentElement.scrollWidth]);
          return out; }''')
        r['dark'] = pg.evaluate("getComputedStyle(document.getElementById('bim-panel')).backgroundColor")
        r['headings'] = pg.evaluate("[...document.querySelectorAll('#bim-panel h2, #bim-panel .bim-name')].map(e=>e.firstChild.textContent.trim())")
        # toggle every layer by clicking its switch
        tog = {}
        for lid in ['struct', 'framing', 'roof', 'elec', 'plumb', 'hvac', 'site', 'water', 'solar', 'ctrl', 'farm', 'arch']:
            pg.locator(f'#bim-panel input[data-layer="{lid}"]').evaluate('e => e.closest("label").scrollIntoView({block:"center"})')
            pg.locator(f'#bim-panel input[data-layer="{lid}"]').evaluate('e => e.closest("label")').__class__
            pg.click(f'#bim-panel label:has(input[data-layer="{lid}"])')
            tog[lid] = pg.evaluate(f'window.bim.layerGroups["{lid}"].visible')
        r['toggled'] = tog
        r['arch_off_hides_walls'] = pg.evaluate("!app.scene.getObjectByName('walls').visible")
        if w == 1440:
            pg.screenshot(path=OUT + f'layers_all_{w}.png')
        # sheets reachable
        hrefs = pg.evaluate("[...document.querySelectorAll('#bim-panel a')].map(a=>a.href)")
        r['links'] = {hh.split('/')[-1]: pg.request.get(hh).status for hh in hrefs}
        # click-to-inspect: project a column to screen and click it
        pg.evaluate("for (const k in bim.state) bim.state[k] = (k==='struct'); bim.apply(); bim.setOpen(false); app.goView('aerial', true)")
        pg.wait_for_timeout(1200)
        pt = pg.evaluate('''() => { const g = bim.layerGroups.struct; const r = app.renderer.domElement.getBoundingClientRect();
           for (const m of g.children) { const e = m.userData.bim; if (e.cat !== 'column') continue; m.geometry.computeBoundingBox(); const c = m.geometry.boundingBox.getCenter(new m.position.constructor()); c.y = c.y * 0.6 + 4;
             const v = c.clone().project(app.camera); const x = r.left + (v.x + 1) / 2 * r.width, y = r.top + (1 - v.y) / 2 * r.height;
             if (x > r.left + 40 && x < r.right - 40 && y > r.top + 120 && y < r.bottom - 140) return [x, y]; } return null; }''')
        clicked = None
        if pt:
            if w < 800: pg.touchscreen.tap(pt[0], pt[1])
            else: pg.mouse.click(pt[0], pt[1])
            pg.wait_for_timeout(400); clicked = pg.evaluate("document.querySelector('.bim-props') && !document.querySelector('.bim-props').hidden ? document.querySelector('.bim-props h3').textContent : null")
        r['inspect_click'] = clicked
        if not clicked:
            pg.evaluate("bim.select(bim.model.elements.find(e=>e.cat==='indoor').id)")
        r['props_text'] = pg.evaluate("document.querySelector('.bim-props').innerText.slice(0,200)")
        r['props_fit'] = pg.evaluate("(() => { const b = document.querySelector('.bim-props').getBoundingClientRect(); return b.left >= 0 && b.right <= innerWidth && b.bottom <= innerHeight; })()")
        pg.screenshot(path=OUT + f'inspect_{w}x{h}.png')
        pg.evaluate("bim.select(null); for (const k in bim.state) bim.state[k] = ['arch','elec','plumb','hvac'].includes(k); bim.apply(); bim.setOpen(true)")
        pg.wait_for_timeout(500); pg.screenshot(path=OUT + f'panel_{w}x{h}.png')
        r['errors'] = errs
        res[f'{w}x{h}'] = r; pg.close()
    b.close()
print(json.dumps(res, indent=1))
