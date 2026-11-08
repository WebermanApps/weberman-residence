# Weberman Residence (password-locked)

Live (password required): https://webermanapps.github.io/weberman-residence/

Everything readable is inside the locked page. This public repo holds only:
- `docs/index.html` – the password gate; the whole app (plan, captions, image key) is AES-GCM encrypted inside it.
- `docs/files/*.enc` – encrypted images, decrypted in memory after unlock.
- `source/*.enc` – encrypted archive of the editable source (`src/`, `design/`).
Plain source is kept off GitHub (see .gitignore).
