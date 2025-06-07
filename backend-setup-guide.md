# お問い合わせフォーム バックエンド処理 設定ガイド

## 概要

MarsLinkプロジェクトのお問い合わせフォームに、3つの異なるバックエンド処理方法を実装しました：

1. **Formspree** - 最も簡単で推奨
2. **EmailJS** - 完全クライアントサイド
3. **Netlify Forms** - Netlifyホスティング用

---

## 方法1: Formspree（推奨）

### 特徴
- 設定が最も簡単
- 無料プランで月100件まで送信可能
- HTMLフォームがそのまま動作
- スパム対策機能付き

### 設定手順

1. **Formspreeアカウント作成**
   - https://formspree.io/ にアクセス
   - 無料アカウントを作成

2. **フォーム作成**
   - ダッシュボードで「New Form」をクリック
   - フォーム名を入力（例：MarsLink Contact Form）
   - 作成されたフォームIDをコピー

3. **コード修正**
   ```html
   <!-- contact.md の以下の行を修正 -->
   <form id="contactForm" class="space-y-6" method="POST" action="https://formspree.io/f/YOUR_FORMSPREE_ID">
   ```
   `YOUR_FORMSPREE_ID` を実際のIDに置き換える

4. **動作確認**
   - サイトをデプロイ
   - フォームから送信テスト
   - Formspreeダッシュボードで受信確認

### 料金
- 無料プラン：月100件まで
- プロプラン：月$10で月1,000件まで

---

## 方法2: EmailJS

### 特徴
- 完全にクライアントサイドで動作
- メールサーバー不要
- リアルタイム送信確認
- 無料プランで月200件まで

### 設定手順

1. **EmailJSアカウント作成**
   - https://www.emailjs.com/ にアクセス
   - 無料アカウントを作成

2. **メールサービス設定**
   - EmailJSダッシュボードで「Email Services」を選択
   - Gmail, Outlook等のサービスを追加・認証
   - Service IDをコピー

3. **メールテンプレート作成**
   - 「Email Templates」で新規テンプレート作成
   - テンプレートID をコピー
   - 以下のような内容を設定：
   ```
   件名: 【MarsLink】お問い合わせ - {{from_name}}様

   お名前: {{from_name}}
   会社名: {{company}}
   Email: {{reply_to}}
   電話番号: {{phone}}

   メッセージ:
   {{message}}
   ```

4. **Public Key取得**
   - 「Account」→「General」でPublic Keyをコピー

5. **コード修正**
   ```javascript
   // contact.md の以下の値を修正
   emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#emailjsForm')
   ```

6. **動作確認**
   - フォーム切り替えボタンで「EmailJS」を選択
   - 送信テスト

### 料金
- 無料プラン：月200件まで
- 個人プラン：月$15で月1,000件まで

---

## 方法3: Netlify Forms

### 特徴
- Netlifyでホスティングする場合に最適
- 設定が非常に簡単
- 自動スパム対策
- 無料プランで月100件まで

### 設定手順

1. **Netlifyでデプロイ**
   - GitHubリポジトリをNetlifyに接続
   - 自動デプロイ設定

2. **フォーム設定**
   - `contact-netlify.md` を使用
   - 以下の属性が重要：
   ```html
   <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
   ```

3. **フォーム確認**
   - Netlifyダッシュボードの「Forms」タブで確認
   - 送信されたフォームデータを確認可能

4. **通知設定**
   - Netlifyダッシュボードで通知先メールアドレス設定
   - Slack等との連携も可能

### 料金
- 無料プラン：月100件まで
- プロプラン：月$19で月1,000件まで

---

## 推奨構成

### 開発・テスト環境
1. **EmailJS** - リアルタイムテストが容易

### 本番環境
1. **Netlifyでホスティングする場合**: Netlify Forms
2. **その他のホスティング**: Formspree

---

## セキュリティ対策

### すべての方法で実装済み
- HTML5フォームバリデーション
- JavaScriptでの追加検証
- 必須項目チェック
- メールアドレス形式検証

### 追加推奨事項
- reCAPTCHA実装（高トラフィック時）
- 送信レート制限
- CSRFトークン（サーバーサイド処理時）

---

## トラブルシューティング

### よくある問題

1. **Formspreeで送信されない**
   - フォームIDが正しいか確認
   - HTTPSでアクセスしているか確認

2. **EmailJSで送信エラー**
   - Public Key, Service ID, Template IDを確認
   - メールサービスの認証状態を確認

3. **Netlify Formsが表示されない**
   - `data-netlify="true"` 属性があるか確認
   - Netlifyでデプロイされているか確認

### デバッグ方法
- ブラウザの開発者ツールでコンソールエラーを確認
- ネットワークタブでリクエスト状況を確認
- 各サービスのダッシュボードでログを確認

---

## まとめ

3つの方法それぞれに利点があり、プロジェクトの要件に応じて選択してください：

- **簡単さ重視**: Formspree
- **リアルタイム性重視**: EmailJS  
- **Netlifyユーザー**: Netlify Forms

すべての方法で基本的なフォーム機能は動作し、レスポンシブデザインにも対応しています。 