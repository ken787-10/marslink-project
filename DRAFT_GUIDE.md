# 下書き機能ガイド

## 概要

このJekyllサイトには、ページを下書き状態で保存して、本番環境では公開しないようにする機能があります。

## 下書き機能の仕組み

- `draft: true` が設定されたページは、開発環境（localhost）でのみ表示されます
- 本番環境では自動的に404ページにリダイレクトされます
- これにより、ページをアップロードしても公開されない状態を維持できます

## 使用方法

### 1. ページを下書きとして作成する

ページのフロントマターに `draft: true` を追加：

```yaml
---
layout: page
title: "ページタイトル"
draft: true
---
```

### 2. 下書きフィルターを含める

ページの内容の最初に下書きフィルターを追加：

```liquid
{% include draft-filter.html %}
```

### 3. 下書きステータスの切り替え

#### 方法1: 手動編集
ファイルを直接編集して `draft: true` を `draft: false` に変更

#### 方法2: スクリプト使用（推奨）
```bash
./toggle-draft.sh [ファイル名]
```

例：
```bash
./toggle-draft.sh ceo-introduction.md
```

## 現在の下書きページ

- `ceo-introduction.md` - 代表紹介ページ（下書き状態）

## 開発とテスト

### ローカルでのテスト
```bash
# 開発サーバー起動（下書きも表示される）
bundle exec jekyll serve

# または、下書きを明示的に表示
bundle exec jekyll serve --drafts
```

### 本番環境での動作確認
```bash
# 本番環境と同じ設定でビルド
JEKYLL_ENV=production bundle exec jekyll build
JEKYLL_ENV=production bundle exec jekyll serve
```

## 注意事項

1. **下書きページへの直接アクセス**: 本番環境でURLを直接知っている人がアクセスしても、404ページにリダイレクトされます

2. **サイトマップ**: 下書きページはサイトマップに含まれません

3. **内部リンク**: 他のページから下書きページへのリンクは、本番環境では404になるので注意してください

4. **SEO**: 下書きページは検索エンジンにインデックスされません

## トラブルシューティング

### 下書きページが本番で表示される場合
1. `draft: true` が正しく設定されているか確認
2. `{% include draft-filter.html %}` が含まれているか確認
3. キャッシュをクリアしてサイトを再ビルド

### ローカルで下書きが表示されない場合
1. Jekyll開発サーバーを再起動
2. `--drafts` オプションを使用して起動

## 公開手順

ページを公開準備ができたら：

1. 下書きステータスを切り替え：
   ```bash
   ./toggle-draft.sh ceo-introduction.md
   ```

2. サイトを再ビルド・デプロイ：
   ```bash
   bundle exec jekyll build
   # デプロイコマンドを実行
   ```

これで下書きページが本番環境でも閲覧可能になります。

bundle exec jekyll serve
# http://localhost:4000/ceo/ でページを確認できます 