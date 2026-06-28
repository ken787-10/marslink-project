---
layout: page
title: "お問い合わせ"
description: "MarsLinkへのお問い合わせ。CabinTimeの共同検証、Journey Intelligence Platform、事業連携、投資家面談、採用についてご相談ください。"
keywords: "MarsLink, お問い合わせ, CabinTime, Journey AI, 共同検証, PoC, 事業連携, 投資家, 採用"
permalink: /contact/
priority: 0.8
changefreq: monthly
---

<section class="bg-[#07090d] px-6 pt-36 pb-24 text-white lg:px-8">
  <div class="mx-auto max-w-7xl">
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Contact</p>
    <h1 class="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">移動体験のAI化について相談する。</h1>
    <p class="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
      CabinTimeの共同検証、Journey Intelligence Platform、交通・地域事業者との連携、投資家面談、採用に関するご連絡はこちらからお願いします。
    </p>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Topics</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">ご相談いただける内容</h2>
      <div class="mt-8 space-y-4">
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-5"><h3 class="font-semibold">CabinTime共同検証</h3><p class="mt-2 text-sm text-gray-300">航空、船舶、交通、観光地でのPoCやデモ相談。</p></div>
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-5"><h3 class="font-semibold">地域・事業者連携</h3><p class="mt-2 text-sm text-gray-300">自治体、DMO、宿泊、飲食、体験事業者との連携。</p></div>
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-5"><h3 class="font-semibold">投資家・採用</h3><p class="mt-2 text-sm text-gray-300">資金調達、事業提携、採用候補者からのご連絡。</p></div>
      </div>
    </div>

    <form id="contactForm" class="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8" method="POST" action="https://formsubmit.co/info@marslink.co.jp">
      <input type="hidden" name="_subject" value="MarsLink website inquiry">
      <input type="hidden" name="_captcha" value="false">
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
          <input name="company" class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" type="text" autocomplete="organization">
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">お問い合わせ種別</span>
          <select name="topic" class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300">
            <option value="CabinTime共同検証">CabinTime共同検証</option>
            <option value="事業連携">事業連携</option>
            <option value="投資家面談">投資家面談</option>
            <option value="採用">採用</option>
            <option value="その他">その他</option>
          </select>
        </label>
        <label class="block">
          <span class="text-sm font-semibold text-gray-200">内容</span>
          <textarea name="message" required rows="7" class="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-300" placeholder="ご相談内容を入力してください。"></textarea>
        </label>
        <button type="submit" class="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">送信する</button>
      </div>
    </form>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function() {
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    button.textContent = '送信中...';
    button.disabled = true;
    button.classList.add('opacity-70');
  });
});
</script>
