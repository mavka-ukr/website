#!/usr/bin/env sh

for pkg in xdocs sass; do
  if ! npm list -g --depth=0 "$pkg" >/dev/null 2>&1; then
    echo "Installing $pkg globally..."
    npm install -g "$pkg"
  else
    echo "$pkg is already installed globally."
  fi
done

VERSION="$(cat "ВЕРСІЯ")"

rm -rf ".будування/$VERSION"

докс перетворити --вхід=документація --вихід=".будування/$VERSION/документація" --вигляд=тема
докс перетворити --вхід=організація --вихід=".будування/організація" --вигляд=тема
докс перетворити --вхід=інформація --вихід=".будування/інформація" --вигляд=тема
докс перетворити --вхід=архів --вихід=".будування/архів" --вигляд=тема
докс перетворити --вхід=часопис --вихід=".будування/часопис" --вигляд=тема
cp -a ресурси index.html 404.html .xdocssitemapignore robots.txt .будування
докс карта --вхід=.будування --вихід=.будування --домен=мавка.укр
find .будування -type f -name "*.html" -exec sed -i "s/{{ВЕРСІЯ_МАВКИ}}/$VERSION/g" {} \;
find .будування -type f -name "*.html" -exec sed -i "s/{{МІТКА_ЧАСУ}}/$(date +%s)/g" {} \;