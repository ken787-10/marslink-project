#!/bin/bash

# Jekyllビルド用スクリプト

echo "🔨 Jekyllビルドを開始します..."
bundle exec jekyll build

if [ $? -eq 0 ]; then
    echo "✅ Jekyllビルド完了！"
else
    echo "❌ Jekyllビルドに失敗しました"
fi
