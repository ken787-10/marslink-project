<?php
// エラーレポートを有効にする（開発時のみ）
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS対応
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// OPTIONSリクエストへの対応
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// POSTリクエストのみ受け付け
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'POST method required']);
    exit;
}

try {
    // JSONデータの取得
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // データの検証
    if (!$data) {
        throw new Exception('Invalid JSON data');
    }
    
    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $subject = trim($data['subject'] ?? '');
    $message = trim($data['message'] ?? '');
    
    // バリデーション
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        throw new Exception('All fields are required');
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address');
    }
    
    if (strlen($name) < 2) {
        throw new Exception('Name must be at least 2 characters');
    }
    
    if (strlen($subject) < 5) {
        throw new Exception('Subject must be at least 5 characters');
    }
    
    if (strlen($message) < 10) {
        throw new Exception('Message must be at least 10 characters');
    }
    
    // メール設定
    $to = 'info@marslink.co.jp'; // 受信先メールアドレス
    $mail_subject = '【お問い合わせ】' . $subject;
    
    // メール本文（HTMLメール）
    $mail_body = "
<!DOCTYPE html>
<html lang='ja'>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #051e3e; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #051e3e; }
        .value { background-color: white; padding: 10px; border-left: 3px solid #00a8ff; margin-top: 5px; }
        .footer { background-color: #051e3e; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>お問い合わせフォーム</h1>
            <p>新しいお問い合わせが届きました</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>お名前:</div>
                <div class='value'>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</div>
            </div>
            <div class='field'>
                <div class='label'>メールアドレス:</div>
                <div class='value'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</div>
            </div>
            <div class='field'>
                <div class='label'>件名:</div>
                <div class='value'>" . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . "</div>
            </div>
            <div class='field'>
                <div class='label'>メッセージ:</div>
                <div class='value'>" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>このメールはWebサイトのお問い合わせフォームから送信されました。</p>
            <p>株式会社MarsLink</p>
        </div>
    </div>
</body>
</html>";

    // メールヘッダー設定
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=UTF-8';
    $headers[] = 'From: noreply@marslink.co.jp'; // 送信元（サーバーのドメイン）
    $headers[] = 'Reply-To: ' . $email; // 返信先は問い合わせ者のメール
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    
    // メール送信
    $mail_sent = mail($to, $mail_subject, $mail_body, implode("\r\n", $headers));
    
    if ($mail_sent) {
        // 成功レスポンス
        echo json_encode([
            'success' => true,
            'message' => 'お問い合わせありがとうございます。3営業日以内にご返信いたします。'
        ]);
    } else {
        throw new Exception('メール送信に失敗しました');
    }
    
} catch (Exception $e) {
    // エラーログに記録
    error_log("Contact form error: " . $e->getMessage());
    
    // エラーレスポンス
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'メール送信に失敗しました: ' . $e->getMessage()
    ]);
}
?> 