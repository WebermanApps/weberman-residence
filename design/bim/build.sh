#!/bin/bash
# Regenerate model + sheets and publish them into the viewer app (public/ -> docs/ on build)
set -e; cd "$(dirname "$0")"
python3 model.py ../app/public/bim/bim.json
cp ../app/public/bim/bim.json bim.json
python3 sheets.py ../drawings
mkdir -p ../app/public/sheets && cp ../drawings/*.svg ../drawings/*.pdf ../app/public/sheets/
