# PHP メール送信設定ガイド

このガイドでは、PHPを使用してお問い合わせフォームで実際にメール送信ができるようにセットアップする手順を説明します。

## 📧 PHPMailer とは

PHPMailer は、PHPで最も人気のあるメール送信ライブラリです。
- SMTP認証対応
- HTML/テキストメール対応
- 添付ファイル対応
- 安全で信頼性が高い

## 🚀 セットアップ手順

### 1. PHPMailer のインストール

#### 方法A: Composer を使用（推奨）

```bash
# プロジェクトディレクトリで実行
composer require phpmailer/phpmailer
```

#### 方法B: 手動ダウンロード

1. [PHPMailer GitHub](https://github.com/PHPMailer/PHPMailer) からダウンロード
2. `PHPMailer` フォルダをプロジェクトに配置
3. `send_mail.php` のコメント部分を参考に require 文を修正

### 2. Gmail SMTP設定（推奨）

#### 2-1. Googleアカウント設定
1. Googleアカウントにログイン
2. 「アカウント管理」→「セキュリティ」
3. 「2段階認証プロセス」を有効化
4. 「アプリパスワード」を生成

#### 2-2. アプリパスワードの生成
1. セキュリティ設定で「アプリパスワード」をクリック
2. アプリ: 「メール」、デバイス: 「その他（カスタム名）」
3. 「MarsLink Website」など分かりやすい名前を入力
4. 生成された16桁のパスワードをメモ

### 3. send_mail.php の設定

以下の部分を実際の値に変更してください：

```php
// SMTP設定
$mail->Username   = 'your-email@gmail.com'; // ← 実際のGmailアドレス
$mail->Password   = 'your-app-password';    // ← 生成したアプリパスワード

// 送信者設定
$mail->setFrom('your-email@gmail.com', 'MarsLink お問い合わせシステム'); // ← 実際のGmailアドレス
$mail->addAddress('info@marslink.co.jp', 'MarsLink'); // ← 受信先メールアドレス
```

### 4. その他のメールプロバイダー設定

#### Yahoo Mail
```php
$mail->Host       = 'smtp.mail.yahoo.co.jp';
$mail->Port       = 465;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
```

#### Outlook/Hotmail
```php
$mail->Host       = 'smtp-mail.outlook.com';
$mail->Port       = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
```

#### さくらインターネット
```php
$mail->Host       = 'お客様のドメイン名';
$mail->Port       = 587;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
```

### 5. サーバー要件の確認

#### 必要な PHP 設定
- PHP 7.4 以上
- `openssl` 拡張が有効
- `json` 拡張が有効
- `mbstring` 拡張が有効（日本語対応）

#### .htaccess の設定（必要に応じて）
```apache
# エラー表示を無効化（本番環境）
php_flag display_errors off
php_flag log_errors on

# 文字エンコーディング設定
php_value default_charset "UTF-8"
php_value mbstring.internal_encoding "UTF-8"
```

## 🧪 テスト方法

### 1. 基本テスト
1. Webブラウザでサイトにアクセス
2. お問い合わせフォームに入力
3. 送信ボタンをクリック
4. 成功メッセージが表示されるか確認
5. 受信メールアドレスにメールが届くか確認

### 2. エラーチェック
1. ブラウザの開発者ツール（F12）を開く
2. コンソールタブでエラーがないか確認
3. ネットワークタブで `send_mail.php` のレスポンスを確認

### 3. PHP エラーログ確認
```bash
# エラーログの確認（サーバーによって場所が異なります）
tail -f /var/log/apache2/error.log
# または
tail -f /var/log/php_errors.log
```

## 🔒 セキュリティ対策

### 1. 基本的な対策
- ✅ HTMLエスケープ処理済み
- ✅ SQLインジェクション対策済み
- ✅ CSRF対策（必要に応じて追加）
- ✅ レート制限（必要に応じて追加）

### 2. 追加のセキュリティ設定

#### IP制限（オプション）
```php
// 特定のIPからのみ受け付ける場合
$allowed_ips = ['192.168.1.100', '203.0.113.0'];
if (!in_array($_SERVER['REMOTE_ADDR'], $allowed_ips)) {
    http_response_code(403);
    exit('Access denied');
}
```

#### レート制限（オプション）
```php
// セッションベースの簡易レート制限
session_start();
$now = time();
$last_submit = $_SESSION['last_submit'] ?? 0;
if ($now - $last_submit < 60) { // 60秒間隔制限
    throw new Exception('送信間隔が短すぎます。しばらく時間をおいてください。');
}
$_SESSION['last_submit'] = $now;
```

## ❌ トラブルシューティング

### よくあるエラーと解決方法

#### 1. "SMTP connect() failed"
**原因**: SMTP設定が間違っている
**解決策**: 
- メールアドレス、パスワードを再確認
- サーバーのファイアウォール設定を確認
- ポート番号を確認（587 or 465）

#### 2. "Invalid address"
**原因**: メールアドレスの形式が間違っている
**解決策**: 
- 送信元・送信先メールアドレスを確認
- 特殊文字が含まれていないか確認

#### 3. "Could not authenticate"
**原因**: SMTP認証に失敗
**解決策**: 
- アプリパスワードを再生成
- 2段階認証が有効になっているか確認
- "安全性の低いアプリの許可"を有効化（Gmail）

#### 4. "Class 'PHPMailer' not found"
**原因**: PHPMailerが正しく読み込まれていない
**解決策**: 
- Composerでインストールしているか確認
- autoload.php のパスを確認
- 手動インストールの場合、require文を確認

#### 5. 文字化け
**原因**: 文字エンコーディングの問題
**解決策**: 
- ファイルをUTF-8で保存
- CharSet設定を確認
- mbstring拡張が有効か確認

## 📞 サポート

設定でお困りの場合は、以下を確認してください：
1. サーバーのPHPバージョン
2. 利用可能な拡張機能
3. エラーログの内容
4. SMTP設定の詳細

---

**注意**: 
- 本番環境では `display_errors` を `off` にしてください
- アプリパスワードは安全に管理してください
- 定期的にログを確認し、不正なアクセスがないかチェックしてください 

/home/サーバーID/ドメイン名/public_html/
├── index.html
├── send_mail.php          ← 新規アップロード
├── composer.json          ← 新規アップロード  
├── js/main.js            ← 更新済み
├── css/style.css         ← 既存
└── vendor/               ← Composer使用時に自動生成
    または
└── PHPMailer/            ← 手動インストール時 