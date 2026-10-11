import json, sys
from playwright.sync_api import sync_playwright
URL = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:4173/'
out = {}
with sync_playwright() as p:
    b = p.chromium.launch(args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader'])
    for w, h in [(390, 844), (768, 1024), (1440, 900)]:
        pg = b.new_page(viewport={'width': w, 'height': h}); pg.goto(URL + '?panel=1', wait_until='networkidle'); pg.wait_for_function('window.bim', timeout=120000)
        out[f'{w}x{h}'] = pg.evaluate('''() => { const P = document.getElementById('bim-panel').getBoundingClientRect(); const bad = [];
          for (const el of document.querySelectorAll('#bim-btn, #bim-panel .bim-tg, #bim-panel .bim-link, #bim-panel .bim-x')) { const r = el.getBoundingClientRect();
            if (el.closest('#bim-panel') && (r.right > P.right - 1 || r.left < P.left)) bad.push(['clip', el.textContent.trim(), Math.round(r.right), Math.round(P.right)]);
            if (r.width < 44 || r.height < 44) bad.push(['small', el.textContent.trim(), Math.round(r.width), Math.round(r.height)]);
            if (r.right > innerWidth || r.left < 0) bad.push(['offscreen', el.textContent.trim()]); }
          if (P.bottom > innerHeight || P.right > innerWidth) bad.push(['panel', P.right, P.bottom]); return bad; }''')
        pg.screenshot(path=f'/workspace/dreamhome/v2/bim/test/fit_{w}x{h}.png'); pg.close()
print(json.dumps(out))
