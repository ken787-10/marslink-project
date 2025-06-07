# Base Template 使用方法

## 変数一覧

### 必須変数
- `{{PAGE_TITLE}}` - ページタイトル
- `{{PAGE_DESCRIPTION}}` - ページの説明文
- `{{MAIN_CONTENT}}` - メインコンテンツ部分

### パス関連変数
- `{{ASSETS_PATH}}` - アセットファイルへのパス
  - ルートページ: `""` (空文字)
  - 下層ページ: `"../"`

### URL関連変数
- `{{HOME_URL}}` - ホームページURL
- `{{BASE_URL}}` - ベースURL
- `{{PAGE_URL}}` - 現在のページURL

### SEO関連変数
- `{{OG_IMAGE}}` - OGP画像URL

### その他
- `{{ADDITIONAL_CSS}}` - 追加CSS

## 使用例

### ルートページ (index.html) の場合
```
{{PAGE_TITLE}} = "株式会社MarsLink-マーズリンク-持続可能な日本を創る"
{{PAGE_DESCRIPTION}} = "移動を価値ある体験へと変革します。"
{{ASSETS_PATH}} = ""
{{HOME_URL}} = "/"
{{BASE_URL}} = ""
{{PAGE_URL}} = "https://marslink.co.jp"
{{OG_IMAGE}} = "https://marslink.co.jp/assets/images/hero-bg-1.jpg"
{{ADDITIONAL_CSS}} = ""
```

### 下層ページ (profile/index.html) の場合
```
{{PAGE_TITLE}} = "会社概要"
{{PAGE_DESCRIPTION}} = "株式会社MarsLinkの会社概要ページです"
{{ASSETS_PATH}} = "../"
{{HOME_URL}} = "../"
{{BASE_URL}} = "../"
{{PAGE_URL}} = "https://marslink.co.jp/profile/"
{{OG_IMAGE}} = "https://marslink.co.jp/assets/images/hero-bg-1.jpg"
{{ADDITIONAL_CSS}} = ""
``` 