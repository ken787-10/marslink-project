#!/bin/bash

# 下書きステータス切り替えスクリプト
# 使用方法: ./toggle-draft.sh [ファイル名]

if [ $# -eq 0 ]; then
    echo "使用方法: ./toggle-draft.sh [ファイル名]"
    echo "例: ./toggle-draft.sh ceo-introduction.md"
    exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
    echo "エラー: ファイル '$FILE' が見つかりません。"
    exit 1
fi

# 現在の下書きステータスを確認
if grep -q "draft: true" "$FILE"; then
    # 下書きを公開に変更
    sed -i.bak 's/draft: true/draft: false/' "$FILE"
    echo "✅ '$FILE' を公開状態に変更しました。"
elif grep -q "draft: false" "$FILE"; then
    # 公開を下書きに変更
    sed -i.bak 's/draft: false/draft: true/' "$FILE"
    echo "📝 '$FILE' を下書き状態に変更しました。"
else
    # draft設定が見つからない場合、追加
    sed -i.bak '/^---$/,/^---$/ { /^---$/a\
draft: true
}' "$FILE"
    echo "📝 '$FILE' に下書き設定を追加しました。"
fi

echo ""
echo "現在のステータス:"
if grep -q "draft: true" "$FILE"; then
    echo "🔒 下書き状態（非公開）"
    echo "   - 開発環境（localhost）でのみ表示されます"
    echo "   - 本番環境では404ページにリダイレクトされます"
elif grep -q "draft: false" "$FILE"; then
    echo "🌐 公開状態"
    echo "   - 全ての環境で表示されます"
fi

echo ""
echo "💡 サイトを再ビルドして変更を反映してください："
echo "   bundle exec jekyll serve" 