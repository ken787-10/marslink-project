---
layout: page
title: "お問い合わせ"
description: "MarsLinkへのお問い合わせ。CabinTimeの共同検証・事業連携、投資・資金調達、採用についてご相談ください。"
keywords: "MarsLink, お問い合わせ, CabinTime, Journey AI, 共同検証, PoC, 事業連携, 資金調達, 採用"
permalink: /contact/
priority: 0.8
changefreq: monthly
---

<section class="bg-[#07090d] px-6 pt-36 pb-24 text-white lg:px-8">
  <div class="mx-auto max-w-7xl">
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Contact</p>
    <h1 class="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">移動体験のAI化について相談する。</h1>
    <p class="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
      CabinTimeの共同検証・事業連携、Journey Intelligence Platform、投資・資金調達、採用に関するご連絡はこちらからお願いします。
    </p>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-3xl px-6 lg:px-8">
    <form id="contactForm" class="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8" method="POST" action="/api/contact">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">お名前</span>
          <input name="name" required class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" type="text" autocomplete="name">
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">メールアドレス</span>
          <input name="email" required class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" type="email" autocomplete="email">
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">会社名・団体名</span>
          <input name="company" required class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" type="text" autocomplete="organization">
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">電話番号（任意）</span>
          <input name="phone" class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" type="tel" autocomplete="tel">
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">お問い合わせ種別</span>
          <select name="topic" required class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300">
            <option value="" disabled selected>選択してください</option>
            <option value="CabinTime共同検証・事業連携">CabinTime共同検証・事業連携</option>
            <option value="投資・資金調達に関するご相談">投資・資金調達に関するご相談</option>
            <option value="採用">採用</option>
            <option value="その他">その他</option>
          </select>
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">内容</span>
          <textarea name="message" required rows="7" class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="ご相談内容を入力してください。"></textarea>
        </label>
        <div class="rounded-md border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-gray-300">
          <p>内容を確認のうえ、必要に応じて担当者よりご連絡します。初回送信時は、機密性の高い情報や個人情報の詳細な記載はお控えください。</p>
          <p class="mt-2">送信いただいた情報は、お問い合わせ対応の目的で利用します。個人情報の取り扱いは<a href="{{ '/privacy/' | relative_url }}" class="text-cyan-200 hover:text-cyan-100">プライバシーポリシー</a>をご確認ください。</p>
        </div>
        <p id="contactStatus" class="hidden rounded-md border px-4 py-3 text-sm" role="status" aria-live="polite"></p>
        <button type="submit" class="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">送信する</button>
      </div>
    </form>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('contactStatus');
  const button = form.querySelector('button[type="submit"]');

  const showStatus = (message, isSuccess) => {
    if (!status) return;
    status.textContent = message;
    status.classList.remove('hidden', 'border-emerald-300/30', 'bg-emerald-300/10', 'text-emerald-100', 'border-red-300/30', 'bg-red-300/10', 'text-red-100');
    status.classList.add(
      isSuccess ? 'border-emerald-300/30' : 'border-red-300/30',
      isSuccess ? 'bg-emerald-300/10' : 'bg-red-300/10',
      isSuccess ? 'text-emerald-100' : 'text-red-100'
    );
  };

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    if (!button) return;

    const defaultLabel = '送信する';
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    button.textContent = '送信中...';
    button.disabled = true;
    button.classList.add('opacity-70');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.message || '送信に失敗しました。しばらくしてからお試しください。');
      }
      showStatus(result.message || '送信しました。内容を確認のうえご連絡します。', true);
      form.reset();
    } catch (error) {
      showStatus(error.message || '送信に失敗しました。しばらくしてからお試しください。', false);
    } finally {
      button.textContent = defaultLabel;
      button.disabled = false;
      button.classList.remove('opacity-70');
    }
  });
});
</script>
