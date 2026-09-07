#!/bin/bash
set -e

VERSION="$1"

if [ -z "$VERSION" ]; then
    echo "Usage: $0 <version>"
    exit 1
fi

EXTRACT_DIR="$(mktemp -d)"
OUTPUT_DIR="./мавка-$VERSION"
ARCHIVE_NAME="мавка-$VERSION.tar.xz"

DOWNLOAD_URL="https://github.com/mavka-ukr/files/raw/main/%D0%B2%D0%B8%D0%BF%D1%83%D1%81%D0%BA%D0%B8-%D0%BC%D0%B0%D0%B2%D0%BA%D0%B8/$VERSION/%D0%BC%D0%B0%D0%B2%D0%BA%D0%B0-$VERSION.tar.xz"

if [ -f "$ARCHIVE_NAME" ]; then
    echo "Archive $ARCHIVE_NAME already exists, skipping download."
else
    wget -O "$ARCHIVE_NAME" "$DOWNLOAD_URL"
fi

if [ -d "$OUTPUT_DIR" ]; then
  exit 0
fi

mkdir -p "$OUTPUT_DIR"

tar -xf "$ARCHIVE_NAME" -C "$EXTRACT_DIR"

докс код --вхід="$EXTRACT_DIR/мавка-$VERSION" --вихід="$OUTPUT_DIR" --назва="мавка-$VERSION" --завантажити="$DOWNLOAD_URL" --гітхаб="https://github.com/mavka-ukr/mavka" --версії="../index.html"

cp "favicon.png" "$OUTPUT_DIR/докс_код_favicon.png"
cp "favicon.svg" "$OUTPUT_DIR/докс_код_favicon.svg"