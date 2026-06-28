---
layout: page
title: "Technology | MarsLink"
description: "MarsLinkのTechnologyページ。移動空間の文脈理解、推薦、運用判断、オフライン体験、AIガバナンスを支えるJourney AIの技術思想を紹介します。"
keywords: "MarsLink, Technology, Journey AI, LLM, 推薦, 文脈理解, 移動空間AI, CabinTime, Decision Intelligence"
permalink: /technology/
---

<section class="bg-[#07090d] px-6 pt-36 pb-24 text-white lg:px-8">
  <div class="mx-auto max-w-7xl">
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Technology</p>
    <h1 class="mt-5 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl">移動空間の判断を、扱えるシステムにする。</h1>
    <p class="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
      MarsLinkの技術は、検索結果を生成するためのものではありません。天気、口コミ、混雑、運行情報、利用者の目的、事業者の制約を統合し、人と組織が判断できる状態へ変換するための技術です。
    </p>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Decision stack</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">MarsLinkの中核は、情報ではなく判断のループです。</h2>
    </div>
    <div class="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-5">
      {% for item in site.data.marslink_terms.decision_stack %}
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">0{{ forloop.index }}</p>
        <h3 class="mt-4 text-xl font-semibold text-white">{{ item.label }}</h3>
        <p class="mt-4 text-sm leading-6 text-gray-300">{{ item.copy }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="relative overflow-hidden bg-[#05070a] py-24 text-white">
  <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25"></div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Decision model (SEM)</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">散らばった指標から潜在的なリスクと適合度を推定し、人が安全に決められる判断へ変え、結果を学習する。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">移動の意思決定支援を、観測指標から潜在変数を推定して判断へつなぐ構造方程式モデル（SEM）として設計しています。単なる入出力ではなく、測定モデル（指標→構成概念）と構造モデル（構成概念→判断）の二段で扱い、結果を学習として戻します。</p>
    </div>

    <div class="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-6">
      <svg viewBox="0 0 1280 560" xmlns="http://www.w3.org/2000/svg" class="min-w-[1060px] w-full" role="img" aria-labelledby="sxt sxd">
        <title id="sxt">移動の意思決定支援のSEM：観測指標 → Journey AI → 潜在リスク・適合 → 判断 → 学習</title>
        <desc id="sxd">散らばった観測指標とあなたの文脈から、Journey AIが目的適合・体験リスク・安全リスク・到達リスクという潜在変数を推定し、推奨・回避・安全の判断支援に変え、結果を学習として戻す構造方程式モデル</desc>
        <defs>
          <radialGradient id="sxq" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(103,232,249,0.55)"/><stop offset="68%" stop-color="rgba(52,211,153,0.12)"/><stop offset="100%" stop-color="rgba(52,211,153,0)"/></radialGradient>
          <filter id="sxb" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="8"/></filter>
          <marker id="sxk" markerWidth="9" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#67e8f9"/></marker>
          <pattern id="sxg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.04)"/></pattern>
          <style>
            .sxfl{stroke-dasharray:4 7}
            .sxpl{opacity:.7}
            .sxcap{fill:rgba(255,255,255,.42);font:700 12px sans-serif;letter-spacing:.14em}
            .sxh{fill:#fff;font:700 16px sans-serif}.sxs{fill:rgba(255,255,255,.56);font:400 11px sans-serif}
            .sxv{fill:#fff;font:600 12px sans-serif}.sxsrc{fill:rgba(255,255,255,.45);font:400 10px sans-serif}
            .sxch{fill:#fff;font:700 13px sans-serif}.sxcs{fill:rgba(255,255,255,.6);font:400 11px sans-serif}
          </style>
        </defs>
        <rect width="1280" height="560" fill="#04060a"/><rect width="1280" height="560" fill="url(#sxg)"/>

        <text x="36" y="36" class="sxcap">OBSERVED — X</text><text x="36" y="56" class="sxs">散らばった情報 × サービス（観測指標）</text>
        <g class="sxfl" stroke="rgba(103,232,249,0.32)" stroke-width="1.4" fill="none">
          <path d="M264,101 C350,130 380,250 401,272"/><path d="M264,153 C360,175 385,255 401,277"/>
          <path d="M264,205 C370,215 388,262 401,281"/><path d="M264,257 C380,260 392,278 401,283"/>
          <path d="M264,309 C380,302 392,294 401,287"/><path d="M264,361 C370,348 388,304 401,291"/>
          <path d="M264,413 C360,388 386,312 401,295"/><path d="M264,465 C350,420 385,322 401,299"/>
        </g>
        <g>
          <rect x="36" y="78" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="98" class="sxv">Route · ETA</text><text x="52" y="114" class="sxsrc">経路・所要時間〔地図〕</text>
          <rect x="36" y="130" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="150" class="sxv">Ride-hailing</text><text x="52" y="166" class="sxsrc">配車・タクシー〔配車〕</text>
          <rect x="36" y="182" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="202" class="sxv">Transit ops</text><text x="52" y="218" class="sxsrc">運行・遅延・規制〔交通各社〕</text>
          <rect x="36" y="234" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="254" class="sxv">Weather</text><text x="52" y="270" class="sxsrc">天気・雨雲〔天気〕</text>
          <rect x="36" y="286" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="306" class="sxv">Reviews</text><text x="52" y="322" class="sxsrc">口コミ・評価・接遇〔レビュー〕</text>
          <rect x="36" y="338" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="358" class="sxv">Social · News</text><text x="52" y="374" class="sxsrc">SNS・報道〔SNS〕</text>
          <rect x="36" y="390" width="228" height="46" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)"/><text x="52" y="410" class="sxv">Hours · Booking</text><text x="52" y="426" class="sxsrc">営業時間・予約〔予約〕</text>
          <rect x="36" y="442" width="228" height="46" rx="9" fill="rgba(103,232,249,0.07)" stroke="rgba(103,232,249,0.3)"/><text x="52" y="462" class="sxv" style="fill:#a5f3fc">Your context · c</text><text x="52" y="478" class="sxsrc" style="fill:rgba(165,243,252,.7)">目的・好み・締切（moderator）</text>
        </g>

        <text x="455" y="56" text-anchor="middle" class="sxcap">JOURNEY AI</text>
        <ellipse class="sxpl" cx="455" cy="283" rx="112" ry="112" fill="url(#sxq)" filter="url(#sxb)"/>
        <circle cx="455" cy="283" r="56" fill="rgba(8,16,22,0.92)" stroke="rgba(103,232,249,0.65)" stroke-width="1.5"/>
        <text x="455" y="273" text-anchor="middle" class="sxh">Journey AI</text>
        <text x="455" y="293" text-anchor="middle" class="sxs">横断・較正</text>
        <text x="455" y="309" text-anchor="middle" class="sxs">個人最適化</text>

        <g class="sxfl" stroke="rgba(103,232,249,0.4)" stroke-width="1.6" fill="none">
          <path d="M511,270 C580,200 600,150 636,120" marker-end="url(#sxk)"/>
          <path d="M515,278 C580,250 600,235 636,228" marker-end="url(#sxk)"/>
          <path d="M515,290 C580,310 600,325 636,336" marker-end="url(#sxk)"/>
          <path d="M511,298 C580,370 600,415 636,444" marker-end="url(#sxk)"/>
        </g>

        <text x="636" y="44" class="sxcap" style="fill:rgba(110,231,183,0.75)">LATENT ξ</text><text x="636" y="60" class="sxs">潜在リスク・適合（Journey AIが推定）</text>
        <rect x="636" y="74" width="256" height="92" rx="12" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.32)"/><text x="652" y="106" class="sxch" style="fill:#6ee7b7">Fit ・ ξ₁</text><text x="652" y="130" class="sxcs">目的適合 — 目的・同行者・好み</text>
        <rect x="636" y="182" width="256" height="92" rx="12" fill="rgba(251,191,36,0.07)" stroke="rgba(251,191,36,0.3)"/><text x="652" y="214" class="sxch" style="fill:#fcd34d">Experience risk ・ ξ₂</text><text x="652" y="238" class="sxcs">体験リスク — 雰囲気・接遇・品質</text>
        <rect x="636" y="290" width="256" height="92" rx="12" fill="rgba(103,232,249,0.06)" stroke="rgba(103,232,249,0.28)"/><text x="652" y="322" class="sxch" style="fill:#67e8f9">Safety risk ・ ξ₃</text><text x="652" y="346" class="sxcs">安全リスク — 天候・運行・身体</text>
        <rect x="636" y="398" width="256" height="92" rx="12" fill="rgba(103,232,249,0.06)" stroke="rgba(103,232,249,0.28)"/><text x="652" y="430" class="sxch" style="fill:#67e8f9">Arrival risk ・ ξ₄</text><text x="652" y="454" class="sxcs">到達リスク — 締切・遅延・乗継</text>

        <g class="sxfl" stroke="rgba(103,232,249,0.4)" stroke-width="1.6" fill="none">
          <path d="M892,120 C925,180 935,255 952,278" marker-end="url(#sxk)"/>
          <path d="M892,228 C925,250 935,268 952,286" marker-end="url(#sxk)"/>
          <path d="M892,336 C925,318 935,300 952,292" marker-end="url(#sxk)"/>
          <path d="M892,444 C925,380 935,310 952,298" marker-end="url(#sxk)"/>
        </g>

        <text x="952" y="44" class="sxcap" style="fill:rgba(103,232,249,0.8)">DECISION — D</text>
        <rect x="952" y="120" width="296" height="348" rx="16" fill="rgba(8,16,22,0.85)" stroke="rgba(52,211,153,0.32)"/>
        <text x="972" y="158" class="sxh">次の判断</text><text x="972" y="180" class="sxs">目的を達成し、失敗を避ける</text>
        <rect x="970" y="196" width="260" height="66" rx="10" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.3)"/><text x="986" y="222" class="sxch" style="fill:#6ee7b7">◎ Recommend ・ 推奨</text><text x="986" y="244" class="sxcs">適合が高く、リスクが低い選択</text>
        <rect x="970" y="270" width="260" height="66" rx="10" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.14)"/><text x="986" y="296" class="sxch">✕ Avoid ・ 回避</text><text x="986" y="318" class="sxcs">体験・安全リスクが高い選択を外す</text>
        <rect x="970" y="344" width="260" height="66" rx="10" fill="rgba(103,232,249,0.06)" stroke="rgba(103,232,249,0.22)"/><text x="986" y="370" class="sxch" style="fill:#67e8f9">⏱ Safe · On-time ・ 安全</text><text x="986" y="392" class="sxcs">到達リスクを管理する</text>
        <text x="1100" y="440" text-anchor="middle" class="sxs">最後に決めるのは、あなた。</text>

        <path class="sxfl" d="M1100,470 L1100,526 Q1100,536 1090,536 L465,536 Q455,536 455,526 L455,341" stroke="rgba(103,232,249,0.5)" stroke-width="1.8" fill="none" marker-end="url(#sxk)"/>
        <text x="770" y="530" text-anchor="middle" class="sxs">Learn ・ 学習（実測の結果で、重み w とローディング λ を更新）</text>
      </svg>
    </div>

    <div class="mx-auto mt-16 max-w-5xl">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">The model · 定式</p>
      <h3 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Journey AIの意思決定モデルを、式で表す。</h3>
      <p class="mt-6 text-lg leading-8 text-gray-300">上の図の各段——観測指標 → 潜在変数 → 判断 → 学習——を、構造方程式（SEM）として記述すると、次のようになります。</p>
      <dl class="mt-10 divide-y divide-white/10 border-t border-white/10">
        <div class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6">
          <dt class="font-semibold text-cyan-100">観測指標 X</dt>
          <dd class="text-base leading-8 text-gray-300">経路・配車・運行・天気・口コミ/接遇・SNS報道・営業時間（各々が別サービスに分散）。</dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6">
          <dt class="font-semibold text-cyan-100">調整変数 c（moderator）</dt>
          <dd class="text-base leading-8 text-gray-300">目的・同行者・好み・締切。</dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6">
          <dt class="font-semibold text-cyan-100">較正重み wᵢ</dt>
          <dd class="text-base leading-8 text-gray-300">情報源の信頼性（SNSの増幅補正など）。</dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6">
          <dt class="font-semibold text-cyan-100">測定モデル</dt>
          <dd class="text-base leading-8 text-gray-300">ξⱼ = Σ λⱼᵢ · (wᵢ xᵢ) · m(c)。潜在変数 ξ₁ 目的適合 / ξ₂ 体験リスク / ξ₃ 安全リスク / ξ₄ 到達リスク。</dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6">
          <dt class="font-semibold text-cyan-100">構造モデル</dt>
          <dd class="text-base leading-8 text-gray-300">D = β₁ξ₁ − β₂ξ₂ − β₃ξ₃ − β₄ξ₄ → 推奨 / 回避 / 安全（最終決定は人間）。</dd>
        </div>
        <div class="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6">
          <dt class="font-semibold text-cyan-100">学習（閉ループ）</dt>
          <dd class="text-base leading-8 text-gray-300">実測の結果 y が、重み w とローディング λ を更新する。</dd>
        </div>
      </dl>
      <div class="mt-12 border-l-2 border-amber-300/50 pl-6">
        <h4 class="text-2xl font-semibold text-white">体験リスク（ξ₂）という中心変数</h4>
        <p class="mt-4 text-lg leading-8 text-gray-300">私たちが最も重視するのは ξ₂ <span class="text-white">体験リスク</span> です。命に関わる事故（ξ₃ 安全リスク）は稀ですが重大。一方で、雰囲気・接遇・サービス品質が目的に合わず、せっかくの時間とお金を無駄にする「体験の失敗」は、頻度が高く見過ごされてきました。Journey AIは、良い候補を出すのと同じだけ、この体験リスクを下げることを目的にします。</p>
      </div>
      <p class="mt-10 text-sm leading-6 text-gray-500">注記：本図・式は構造の妥当性を示す概念モデル（conceptual SEM）であり、推定済みのパラメータを表すものではありません。</p>
    </div>

    <div class="mx-auto mt-12 max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Theoretical foundations</p>
        <h3 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">モデル要素と、先行研究の対応。</h3>
        <p class="mt-6 text-lg leading-8 text-gray-300">本モデルの各要素は、確立した研究と一対一で対応します。知覚リスク理論・状況認識理論・文脈考慮型推薦・SEM方法論——4本の系譜を、移動の意思決定支援に統合しています。</p>
      </div>

      <div class="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#070b11]/70">
        <table class="w-full min-w-[820px] border-collapse text-left">
          <thead>
            <tr class="border-b border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/45">
              <th class="px-6 py-4 font-semibold">MarsLinkのモデル要素</th>
              <th class="px-6 py-4 font-semibold">裏付けとなる理論</th>
              <th class="whitespace-nowrap px-6 py-4 font-semibold">主要文献</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.07] text-sm leading-7 text-gray-300">
            <tr class="transition hover:bg-white/[0.02]">
              <td class="px-6 py-6 align-top">
                <p class="font-semibold text-white">体験・安全・到達リスク</p>
                <span class="mt-2 inline-block rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-cyan-100/90">ξ₂ · ξ₃ · ξ₄</span>
              </td>
              <td class="px-6 py-6 align-top">知覚リスクの多次元構造（performance＝体験／psychological＝体験／physical＝安全／time＝到達）。「time risk＝期待を満たさず時間が無駄になる」は、到達・体験リスクそのもの。</td>
              <td class="px-6 py-6 align-top text-sm"><a href="https://doi.org/10.1177/004728759203000403" target="_blank" rel="noopener" class="text-gray-400 transition hover:text-cyan-200">Roehl, W. S., &amp; Fesenmaier, D. R. (1992).<br><em>Journal of Travel Research</em>, 30(4), 17–26. ↗</a></td>
            </tr>
            <tr class="transition hover:bg-white/[0.02]">
              <td class="px-6 py-6 align-top">
                <p class="font-semibold text-white">状況認識ループ</p>
                <span class="mt-2 inline-block rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-cyan-100/90">Context → 較正 → 判断 → Learn</span>
              </td>
              <td class="px-6 py-6 align-top">状況認識：知覚→理解→予測。SAは意思決定とは別の内部モデルであり、予測が次の知覚を形づくる——これが学習の閉ループに対応する。</td>
              <td class="px-6 py-6 align-top text-sm"><a href="https://doi.org/10.1518/001872095779049543" target="_blank" rel="noopener" class="text-gray-400 transition hover:text-cyan-200">Endsley, M. R. (1995).<br><em>Human Factors</em>, 37(1), 32–64. ↗</a></td>
            </tr>
            <tr class="transition hover:bg-white/[0.02]">
              <td class="px-6 py-6 align-top">
                <p class="font-semibold text-white">横断統合・個人最適化</p>
                <span class="mt-2 inline-block rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-cyan-100/90">Integrate · Personalize</span>
              </td>
              <td class="px-6 py-6 align-top">文脈考慮型推薦（CARS）＋情報過多。時間・天候・位置などの文脈で過多を緩和し、個人に最適化する——情報の分断を解く設計の根拠。</td>
              <td class="px-6 py-6 align-top text-sm"><a href="https://www.sciencedirect.com/science/article/abs/pii/S0306457319300111" target="_blank" rel="noopener" class="text-gray-400 transition hover:text-cyan-200">Renjith, S., Sreekumar, A., &amp; Jathavedan, M. (2020).<br><em>Information Processing &amp; Management</em>, 57(1), 102078. ↗</a></td>
            </tr>
            <tr class="transition hover:bg-white/[0.02]">
              <td class="px-6 py-6 align-top">
                <p class="font-semibold text-white">測定＋構造モデル</p>
                <span class="mt-2 inline-block rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-cyan-100/90">CFA → ξ → D</span>
              </td>
              <td class="px-6 py-6 align-top">指標→潜在（測定モデル）と、潜在→判断（構造モデル）の二段構成。SEMはツーリズム研究の標準的な方法論。</td>
              <td class="px-6 py-6 align-top text-sm"><a href="https://doi.org/10.1177/0047287513478503" target="_blank" rel="noopener" class="text-gray-400 transition hover:text-cyan-200">Nunkoo, R., Ramkissoon, H., &amp; Gursoy, D. (2013).<br><em>Journal of Travel Research</em>, 52(6), 759–771. ↗</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mx-auto mt-10 max-w-3xl text-center">
        <p class="text-lg leading-8 text-gray-200"><span class="font-semibold text-white">結論。</span> 知覚リスク理論・状況認識理論・文脈考慮型推薦・SEM方法論——4本の系譜を統合し、移動の意思決定支援に適用した正統な概念フレームです。</p>
        <p class="mt-4 text-sm leading-6 text-gray-500">※ 本表は理論的対応の提示です。実証（指標の操作化、CFAによる測定モデルの確認、パス推定、適合度の評価）は今後の検証課題とします。</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#05070a] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Architecture</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Context Graphから、Action-readyな提案へ。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          旅行アプリのように候補を並べるのではなく、現実の移動文脈を構造化し、選ぶ理由、避ける理由、運用上の制約まで含めて提案します。
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">Context Graph</h3>
          <p class="mt-3 leading-7 text-gray-300">便、航路、現在地、到着時刻、天候、混雑、店舗、口コミ、料金帯、利用者文脈を、移動中の判断単位として結びます。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">Recommendation and Avoidance</h3>
          <p class="mt-3 leading-7 text-gray-300">おすすめだけでなく、接待に不向きな騒がしい店、雨の日の徒歩動線、混雑リスクなど、避けるべき選択も整理します。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">Human-in-the-loop Operations</h3>
          <p class="mt-3 leading-7 text-gray-300">AIが勝手に決めるのではなく、事業者や利用者が理由を確認し、承認、除外、更新できるワークフローを前提にします。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">Assurance and Governance</h3>
          <p class="mt-3 leading-7 text-gray-300">提案理由、データ更新、権限、ログ、監査可能性を扱い、将来の運航、防災、レジリエンス支援へ拡張できる基盤にします。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#07090d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Principles</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">AIは、旅を決めるのではなく、判断できる状況をつくる。</h2>
      </div>
      <div class="space-y-4">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold">Human judgment first</h3>
          <p class="mt-3 text-gray-300">最終判断は人間に残します。AIは選択肢、理由、代替案、注意点を提示します。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold">Small enough to act</h3>
          <p class="mt-3 text-gray-300">移動中に見られる量、選べる量、事業者が運用できる量まで情報を絞ります。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold">Offline-aware by default</h3>
          <p class="mt-3 text-gray-300">機内、船内、地下、山間部など、通信が不安定な環境でも最低限の判断材料を保つ設計にします。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold">Evidence before automation</h3>
          <p class="mt-3 text-gray-300">自動化を急がず、まず根拠、ログ、承認、フィードバックを蓄積し、信頼できる判断支援を育てます。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#10100d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
      <div class="overflow-hidden rounded-lg border border-white/10">
        <img src="{{ '/assets/images/cabin.jpg' | relative_url }}" alt="機内 — 通信が不安定な移動空間" class="aspect-[3/2] w-full object-cover">
      </div>
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Offline-aware</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">通信が不安定な移動空間を前提にする。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          航空機や船舶では、常に高速通信を前提にできません。CabinTimeは、事前配信、ローカル表示、軽量な更新、到着後の再接続を想定した体験設計を検証します。
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Hard problems</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">優秀なAIエンジニアが解くべき難問。</h2>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Fragmented signals</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">天気、交通、口コミ、地域、運用情報を、同じ判断単位で扱う。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Personal context</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">接待、家族旅行、短時間滞在など、目的ごとに良い選択と悪い選択を変える。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Operational constraints</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">事業者の更新、承認、提携先、除外理由、責任範囲をUIとモデルに組み込む。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Decision lineage</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">なぜ提案したか、誰が確認したか、何が変わったかを追える状態にする。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
    <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Next</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">技術は、体験から鍛える。</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">MarsLinkは、実際の移動空間で使われるCabinTimeを起点に、Journey AI、Mobility Intelligence、AIガバナンスの基盤を段階的に拡張します。</p>
  </div>
</section>
