#!/bin/zsh

# Jekyll clean build + serve (よく使うコマンドをまとめたショートカット)
set -e

if [ -f node_modules/tailwindcss/lib/cli.js ]; then
  echo "[0/3] Building Tailwind CSS..."
  npm run build-css --silent || true
fi

echo "[1/3] Cleaning Jekyll caches..."
bundle exec jekyll clean

echo "[2/3] Removing _site directory..."
rm -rf _site

echo "[3/3] Starting Jekyll server (http://127.0.0.1:4000)..."
bundle exec jekyll serve --host 0.0.0.0 --livereload --config _config.yml,_config.dev.yml


