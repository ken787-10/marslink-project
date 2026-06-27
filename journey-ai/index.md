---
layout: page
title: "Journey AI | MarsLink"
description: "Journey AIは、移動と滞在の文脈を理解し、天気、交通、混雑、口コミ、目的、好みを統合して、人が次の行動を判断できる状態をつくるAI体験です。"
keywords: "Journey AI, MarsLink, CabinTime, 移動, 滞在, 意思決定支援, AI, パーソナライズ"
canonical_url: "https://marslink.co.jp/journey-ai/"
permalink: /journey-ai/
priority: 0.9
changefreq: weekly
published: false
---

{% assign flight_map = site.data.japan_flight_map %}

<section class="relative isolate overflow-hidden bg-[#050607] px-6 pt-36 pb-24 text-white lg:px-8">
  <div class="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#050607_0%,#081018_48%,#10120d_100%)]"></div>
  <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25"></div>
  <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Journey AI</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
        移動と滞在の判断を、個人の文脈に合わせるAI。
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
        Journey AIは、天気、交通、混雑、口コミ、営業時間、Google評価、目的、同行者、好み、避けたい体験を統合し、人が次の行動を安心して選べる状態をつくるAI体験です。
      </p>
      <p class="mt-5 max-w-2xl text-base leading-7 text-gray-400">
        広告枠やランキングではありません。AIが勝手に決めるものでもありません。選ぶ理由、避ける理由、代替案を示し、最後の判断を人間に残すためのインテリジェンスです。
      </p>
      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">共同検証を相談する</a>
        <a href="{{ '/cabintime/' | relative_url }}" class="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5">CabinTimeを見る</a>
      </div>
      <p class="mt-6 text-sm leading-6 text-gray-500">
        現在は設計・検証中です。CabinTimeで得た知見をもとに、段階的に具体化します。
      </p>
    </div>

    <div class="rounded-lg border border-white/10 bg-[#070b11]/95 p-4 shadow-2xl">
      <div class="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs uppercase text-cyan-100/70">Live journey intelligence</p>
          <h2 class="mt-1 text-xl font-semibold text-white">ITM 伊丹空港 -> HND 羽田空港</h2>
        </div>
        <div class="flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm text-emerald-100">
          <span class="h-2 w-2 rounded-full bg-emerald-300"></span>
          Arrival window active
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-lg border border-white/10 bg-[#0b121b] p-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-xs uppercase text-gray-500">Route intelligence</p>
              <h3 class="mt-1 text-lg font-semibold text-white">Osaka to Tokyo arrival plan</h3>
            </div>
            <p class="whitespace-nowrap rounded-md bg-white/5 px-3 py-1 text-xs text-gray-300">JA-218</p>
          </div>
          <div class="relative mt-5 h-64 overflow-hidden rounded-lg border border-white/10 bg-[#101a24]">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
            <svg class="absolute inset-0 h-full w-full" viewBox="0 0 640 280" role="img" aria-label="Journey AI route from Itami Airport to Haneda Airport using Natural Earth geometry">
              <defs>
                <radialGradient id="hero-journey-rain-soft" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(103,232,249,0.55)"/>
                  <stop offset="55%" stop-color="rgba(34,197,94,0.32)"/>
                  <stop offset="100%" stop-color="rgba(14,165,233,0)"/>
                </radialGradient>
                <radialGradient id="hero-journey-rain-core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(250,204,21,0.7)"/>
                  <stop offset="52%" stop-color="rgba(34,197,94,0.45)"/>
                  <stop offset="100%" stop-color="rgba(34,197,94,0)"/>
                </radialGradient>
                <filter id="hero-journey-radar-blur">
                  <feGaussianBlur stdDeviation="5"/>
                </filter>
              </defs>
              <path d="{{ flight_map.hero.path }}" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.18)" stroke-width="1.25"/>
              <g opacity="0.74" filter="url(#hero-journey-radar-blur)">
                <ellipse cx="433" cy="133" rx="104" ry="32" fill="url(#hero-journey-rain-soft)" transform="rotate(-14 433 133)"/>
                <ellipse cx="471" cy="119" rx="58" ry="20" fill="url(#hero-journey-rain-core)" transform="rotate(-11 471 119)"/>
                <ellipse cx="389" cy="154" rx="66" ry="19" fill="rgba(56,189,248,0.34)" transform="rotate(-18 389 154)"/>
              </g>
              <g opacity="0.34">
                <path d="M330 180 C371 153 431 145 520 103" fill="none" stroke="rgba(103,232,249,0.9)" stroke-width="1.2" stroke-dasharray="4 7"/>
                <path d="M342 195 C394 166 455 154 552 118" fill="none" stroke="rgba(34,197,94,0.75)" stroke-width="1.2" stroke-dasharray="4 7"/>
              </g>
              <path d="M{{ flight_map.hero.itm_x }} {{ flight_map.hero.itm_y }} C318 148 371 142 {{ flight_map.hero.hnd_x }} {{ flight_map.hero.hnd_y }}" fill="none" stroke="rgba(103,232,249,0.22)" stroke-width="18" stroke-linecap="round"/>
              <path d="M{{ flight_map.hero.itm_x }} {{ flight_map.hero.itm_y }} C318 148 371 142 {{ flight_map.hero.hnd_x }} {{ flight_map.hero.hnd_y }}" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-linecap="round" stroke-dasharray="7 8"/>
              <path d="M{{ flight_map.hero.itm_x }} {{ flight_map.hero.itm_y }} C305 154 346 148 {{ flight_map.hero.now_x }} {{ flight_map.hero.now_y }}" fill="none" stroke="rgba(103,232,249,0.96)" stroke-width="4" stroke-linecap="round"/>
              <path d="M{{ flight_map.hero.now_x }} {{ flight_map.hero.now_y }} C410 145 431 135 {{ flight_map.hero.hnd_x }} {{ flight_map.hero.hnd_y }}" fill="none" stroke="rgba(103,232,249,0.48)" stroke-width="4" stroke-linecap="round"/>
              <circle cx="{{ flight_map.hero.itm_x }}" cy="{{ flight_map.hero.itm_y }}" r="8" fill="white"/>
              <circle cx="{{ flight_map.hero.hnd_x }}" cy="{{ flight_map.hero.hnd_y }}" r="8" fill="white"/>
              <circle cx="{{ flight_map.hero.now_x }}" cy="{{ flight_map.hero.now_y }}" r="9" fill="rgba(103,232,249,0.95)"/>
              <circle cx="{{ flight_map.hero.now_x }}" cy="{{ flight_map.hero.now_y }}" r="18" fill="none" stroke="rgba(103,232,249,0.28)" stroke-width="2"/>
              <polygon points="375,142 405,150 378,162" fill="white"/>
              <text x="247" y="185" fill="rgba(255,255,255,0.72)" font-size="12" font-weight="700">ITM</text>
              <text x="442" y="112" fill="rgba(255,255,255,0.72)" font-size="12" font-weight="700">HND</text>
              <text x="360" y="136" fill="rgba(103,232,249,0.9)" font-size="11" font-weight="700">CURRENT</text>
            </svg>
            <div class="absolute left-5 top-5 rounded-md border border-white/10 bg-black/45 px-3 py-2 backdrop-blur">
              <p class="text-xs text-gray-400">Origin</p>
              <p class="text-sm font-semibold text-white">ITM 伊丹空港</p>
            </div>
            <div class="absolute right-5 top-5 rounded-md border border-white/10 bg-black/45 px-3 py-2 backdrop-blur">
              <p class="text-xs text-gray-400">Destination</p>
              <p class="text-sm font-semibold text-white">HND 羽田空港</p>
            </div>
            <div class="absolute left-5 bottom-20 rounded-md border border-sky-200/20 bg-black/45 px-3 py-2 backdrop-blur">
              <p class="text-xs text-sky-100/80">Weather radar</p>
              <p class="text-sm font-semibold text-white">東京湾側に雨雲</p>
            </div>
            <div class="absolute bottom-5 left-5 grid grid-cols-3 gap-2 text-xs">
              <div class="rounded-md border border-white/10 bg-black/45 px-3 py-2">
                <p class="text-gray-400">ETA</p>
                <p class="mt-1 font-semibold text-white">18:10</p>
              </div>
              <div class="rounded-md border border-white/10 bg-black/45 px-3 py-2">
                <p class="text-gray-400">Progress</p>
                <p class="mt-1 font-semibold text-cyan-100">63%</p>
              </div>
              <div class="rounded-md border border-white/10 bg-black/45 px-3 py-2">
                <p class="text-gray-400">Altitude</p>
                <p class="mt-1 font-semibold text-white">34,000 ft</p>
              </div>
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Reviews</p>
              <p class="mt-1 text-sm font-semibold text-white">Noise risk flagged</p>
            </div>
            <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Transit</p>
              <p class="mt-1 text-sm font-semibold text-white">Crowding rising</p>
            </div>
            <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Purpose</p>
              <p class="mt-1 text-sm font-semibold text-white">Business dinner</p>
            </div>
            <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Profile</p>
              <p class="mt-1 text-sm font-semibold text-white">Quiet / short walk</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div class="rounded-lg border border-white/10 bg-[#0b121b] p-4">
            <p class="text-xs uppercase text-gray-500">Avoid / Recommend / Explain</p>
            <div class="mt-4 space-y-3">
              <div class="rounded-md border border-cyan-200/20 bg-cyan-200/10 p-3">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="font-semibold text-white">雨と混雑を避ける移動</h3>
                  <span class="whitespace-nowrap text-xs text-cyan-100">Recommend</span>
                </div>
                <p class="mt-2 text-sm leading-6 text-gray-300">京急の混雑と降雨予測を見て、浜松町方面ならモノレール案を優先。</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="font-semibold text-white">接待には不向きな候補を除外</h3>
                  <span class="text-xs text-amber-100">Avoid</span>
                </div>
                <p class="mt-2 text-sm leading-6 text-gray-300">口コミの騒がしさ、席間、雨天時の徒歩距離から、商談後に合わない店を外す。</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="font-semibold text-white">二次会候補の条件を確認</h3>
                  <span class="text-xs text-emerald-100">Explain</span>
                </div>
                <p class="mt-2 text-sm leading-6 text-gray-300">店種、Google評価、雨天動線、料金帯、一次会からの距離で理由を整理。</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <div class="rounded-lg border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Fit score</p>
              <p class="mt-2 text-xl font-semibold text-white">82%</p>
            </div>
            <div class="rounded-lg border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Risk checks</p>
              <p class="mt-2 text-xl font-semibold text-white">4</p>
            </div>
            <div class="rounded-lg border border-white/10 bg-white/[0.035] p-3">
              <p class="text-xs text-gray-500">Human choice</p>
              <p class="mt-2 text-xl font-semibold text-white">Final</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase text-cyan-200">Journey AI product screen</p>
      <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">情報を集約し、避けるべき選択まで見つける。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Journey AIがつなぐのは、画面ではなく判断に必要な文脈です。天気、口コミ、公共交通の混雑、営業時間、運航・運行情報、地域データ、利用者の目的と好みを束ね、「行くべき場所」だけでなく「避けた方がいい選択」も整理します。
      </p>
    </div>

    <div class="mt-14 rounded-lg border border-white/10 bg-[#070b11] p-4 shadow-2xl">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-[0.72fr_1.48fr_0.92fr]">
        <div class="rounded-lg border border-white/10 bg-[#0b121b] p-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs uppercase text-gray-500">Passenger App</p>
              <h3 class="mt-1 text-lg font-semibold text-white">HND arrival assistant</h3>
            </div>
            <span class="rounded-md bg-cyan-300/10 px-2 py-1 text-xs text-cyan-100">Personal</span>
          </div>
          <div class="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
            <p class="text-sm text-gray-400">まもなく羽田に到着します</p>
            <h4 class="mt-2 text-2xl font-semibold text-white">避けて、選ぶ</h4>
            <div class="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <p class="text-gray-500">Purpose</p>
                <p class="mt-1 font-semibold text-white">接待</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <p class="text-gray-500">Avoid</p>
                <p class="mt-1 font-semibold text-white">騒音・長い徒歩</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <p class="text-gray-500">Preference</p>
                <p class="mt-1 font-semibold text-white">静か・駅直結</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <p class="text-gray-500">Time</p>
                <p class="mt-1 font-semibold text-white">21:00 一次会後</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <p class="text-gray-500">Weather</p>
                <p class="mt-1 font-semibold text-white">降水60%</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
                <p class="text-gray-500">Action</p>
                <p class="mt-1 font-semibold text-white">傘を持つ</p>
              </div>
            </div>
            <div class="mt-5 space-y-3">
              <button class="w-full rounded-md border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-left">
                <span class="block font-semibold text-white">接待向け候補だけを残す</span>
                <span class="mt-1 block text-sm text-gray-300">騒がしさ、席間、駅からの濡れにくさを評価</span>
              </button>
              <button class="w-full rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-left">
                <span class="block font-semibold text-white">混雑と雨を避ける移動</span>
                <span class="mt-1 block text-sm text-gray-300">21時の降水60%。傘と地下動線を優先</span>
              </button>
              <button class="w-full rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-left">
                <span class="block font-semibold text-white">二次会候補の条件を確認</span>
                <span class="mt-1 block text-sm text-gray-300">Google評価、雰囲気、料金帯、雨天動線から代替案を表示</span>
              </button>
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-white/10 bg-[#0b121b] p-4">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-xs uppercase text-gray-500">Journey context layer</p>
              <h3 class="mt-1 text-lg font-semibold text-white">Context layer for ITM -> HND</h3>
            </div>
            <div class="flex gap-2 text-xs">
              <span class="rounded-md bg-white/5 px-2 py-1 text-gray-300">Live data</span>
              <span class="rounded-md bg-white/5 px-2 py-1 text-gray-300">Weather</span>
              <span class="rounded-md bg-white/5 px-2 py-1 text-gray-300">Personal context</span>
            </div>
          </div>
          <div class="mt-5 space-y-4">
            <div class="rounded-lg border border-white/10 bg-[#101a24] p-4">
              <div class="relative h-80 overflow-hidden rounded-md bg-[#0d1822] sm:h-96">
                <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_46%_55%,rgba(99,102,241,0.14),transparent_30%)]"></div>
                <svg class="absolute inset-0 h-full w-full" viewBox="0 0 520 280" preserveAspectRatio="xMidYMid slice" aria-label="Journey AI position from Itami to Haneda using Natural Earth geometry">
                  <defs>
                    <radialGradient id="journey-rain-soft" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="rgba(103,232,249,0.5)"/>
                      <stop offset="58%" stop-color="rgba(34,197,94,0.28)"/>
                      <stop offset="100%" stop-color="rgba(14,165,233,0)"/>
                    </radialGradient>
                    <radialGradient id="journey-rain-core" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stop-color="rgba(250,204,21,0.65)"/>
                      <stop offset="56%" stop-color="rgba(34,197,94,0.38)"/>
                      <stop offset="100%" stop-color="rgba(34,197,94,0)"/>
                    </radialGradient>
                    <filter id="journey-radar-blur">
                      <feGaussianBlur stdDeviation="4"/>
                    </filter>
                  </defs>
                  <path d="{{ flight_map.portal.path }}" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
                  <g opacity="0.72" filter="url(#journey-radar-blur)">
                    <ellipse cx="372" cy="133" rx="84" ry="27" fill="url(#journey-rain-soft)" transform="rotate(-14 372 133)"/>
                    <ellipse cx="402" cy="120" rx="46" ry="17" fill="url(#journey-rain-core)" transform="rotate(-11 402 120)"/>
                    <ellipse cx="329" cy="154" rx="54" ry="17" fill="rgba(56,189,248,0.32)" transform="rotate(-18 329 154)"/>
                  </g>
                  <g opacity="0.34">
                    <path d="M278 181 C318 154 369 145 447 107" fill="none" stroke="rgba(103,232,249,0.9)" stroke-width="1.1" stroke-dasharray="4 7"/>
                    <path d="M290 194 C338 166 394 154 470 120" fill="none" stroke="rgba(34,197,94,0.75)" stroke-width="1.1" stroke-dasharray="4 7"/>
                  </g>
                  <path d="M{{ flight_map.portal.itm_x }} {{ flight_map.portal.itm_y }} C258 148 311 142 {{ flight_map.portal.hnd_x }} {{ flight_map.portal.hnd_y }}" fill="none" stroke="rgba(103,232,249,0.22)" stroke-width="16" stroke-linecap="round"/>
                  <path d="M{{ flight_map.portal.itm_x }} {{ flight_map.portal.itm_y }} C258 148 311 142 {{ flight_map.portal.hnd_x }} {{ flight_map.portal.hnd_y }}" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2" stroke-linecap="round" stroke-dasharray="7 8"/>
                  <path d="M{{ flight_map.portal.itm_x }} {{ flight_map.portal.itm_y }} C245 154 286 148 {{ flight_map.portal.now_x }} {{ flight_map.portal.now_y }}" fill="none" stroke="rgba(103,232,249,0.95)" stroke-width="4" stroke-linecap="round"/>
                  <path d="M{{ flight_map.portal.now_x }} {{ flight_map.portal.now_y }} C350 145 371 135 {{ flight_map.portal.hnd_x }} {{ flight_map.portal.hnd_y }}" fill="none" stroke="rgba(103,232,249,0.42)" stroke-width="4" stroke-linecap="round"/>
                  <circle cx="{{ flight_map.portal.itm_x }}" cy="{{ flight_map.portal.itm_y }}" r="17" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
                  <circle cx="{{ flight_map.portal.hnd_x }}" cy="{{ flight_map.portal.hnd_y }}" r="18" fill="none" stroke="rgba(103,232,249,0.26)" stroke-width="1"/>
                  <path d="M372 110 L387 102 M393 132 L409 124 M343 149 L358 141" stroke="rgba(255,255,255,0.28)" stroke-width="1.1" stroke-linecap="round"/>
                  <circle cx="{{ flight_map.portal.itm_x }}" cy="{{ flight_map.portal.itm_y }}" r="8" fill="white"/>
                  <circle cx="{{ flight_map.portal.hnd_x }}" cy="{{ flight_map.portal.hnd_y }}" r="8" fill="white"/>
                  <circle cx="{{ flight_map.portal.now_x }}" cy="{{ flight_map.portal.now_y }}" r="9" fill="rgba(103,232,249,0.95)"/>
                  <circle cx="{{ flight_map.portal.now_x }}" cy="{{ flight_map.portal.now_y }}" r="17" fill="none" stroke="rgba(103,232,249,0.3)" stroke-width="2"/>
                  <polygon points="315,142 343,150 318,161" fill="white"/>
                  <text x="187" y="185" fill="rgba(255,255,255,0.75)" font-size="12" font-weight="700">ITM</text>
                  <text x="382" y="112" fill="rgba(255,255,255,0.75)" font-size="12" font-weight="700">HND</text>
                  <text x="300" y="136" fill="rgba(103,232,249,0.9)" font-size="11" font-weight="700">NOW</text>
                </svg>
                <div class="absolute left-4 top-4 rounded-md border border-white/10 bg-black/45 px-3 py-2 backdrop-blur">
                  <p class="text-[10px] uppercase tracking-wide text-gray-400">Map layer</p>
                  <p class="text-xs font-semibold text-white">Route + weather</p>
                </div>
                <div class="absolute right-4 top-4 rounded-md border border-sky-200/20 bg-sky-200/10 px-3 py-2 text-right backdrop-blur">
                  <p class="text-[10px] uppercase tracking-wide text-sky-100/80">Weather radar</p>
                  <p class="text-xs font-semibold text-white">21:00 rain 60%</p>
                </div>
                <div class="absolute inset-x-4 bottom-4 grid grid-cols-2 overflow-hidden rounded-md border border-white/10 bg-black/55 text-[11px] backdrop-blur sm:grid-cols-4">
                  <div class="border-r border-b border-white/10 px-3 py-2 sm:border-b-0">
                    <p class="text-gray-500">ALT</p>
                    <p class="mt-1 font-semibold text-white">34,000 ft</p>
                  </div>
                  <div class="border-b border-white/10 px-3 py-2 sm:border-r sm:border-b-0">
                    <p class="text-gray-500">GS</p>
                    <p class="mt-1 font-semibold text-white">830 km/h</p>
                  </div>
                  <div class="border-r border-white/10 px-3 py-2">
                    <p class="text-gray-500">ETA</p>
                    <p class="mt-1 font-semibold text-white">18:10</p>
                  </div>
                  <div class="px-3 py-2">
                    <p class="text-sky-100/80">WX</p>
                    <p class="mt-1 font-semibold text-white">21:00 rain 60%</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div class="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p class="text-xs text-gray-500">Signal stack</p>
                <p class="mt-1 text-2xl font-semibold text-amber-100">8 signals</p>
                <p class="mt-2 text-sm leading-6 text-gray-300">雨雲、21時降水確率、Google評価、口コミ、混雑、営業時間、運行情報、利用者文脈を統合。</p>
              </div>
              <div class="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p class="text-xs text-gray-500">Experience risk</p>
                <p class="mt-1 text-2xl font-semibold text-white">Medium</p>
                <p class="mt-2 text-sm leading-6 text-gray-300">接待文脈では騒がしい候補の提案順位を下げる。</p>
              </div>
              <div class="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p class="text-xs text-gray-500">Next best action</p>
                <p class="mt-1 text-2xl font-semibold text-emerald-100">Review</p>
                <p class="mt-2 text-sm leading-6 text-gray-300">人が最終確認できる理由つきの提案に変換。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-white/10 bg-[#0b121b] p-4">
          <div>
            <p class="text-xs uppercase text-gray-500">Decision layer</p>
            <h3 class="mt-1 text-lg font-semibold text-white">Experience decision monitor</h3>
          </div>
          <div class="mt-5 space-y-3">
            <div class="rounded-md border border-cyan-200/20 bg-cyan-200/10 p-3">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <p class="text-xs text-gray-400">候補A</p>
                  <p class="font-semibold text-white">静かなラウンジ</p>
                </div>
                <span class="text-xs text-cyan-100">Review</span>
              </div>
              <p class="mt-2 text-sm leading-6 text-gray-300">Google評価4.3、騒音口コミ少、一次会から徒歩6分。21時の降水60%でも地下動線あり。</p>
              <div class="mt-3 flex flex-wrap gap-2 text-[11px] text-cyan-50/80">
                <span class="rounded bg-white/10 px-2 py-1">Google 4.3</span>
                <span class="rounded bg-white/10 px-2 py-1">徒歩6分</span>
                <span class="rounded bg-white/10 px-2 py-1">降水60%</span>
                <span class="rounded bg-white/10 px-2 py-1">地下動線</span>
              </div>
            </div>
            <div class="rounded-md border border-emerald-200/20 bg-emerald-200/10 p-3">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <p class="text-xs text-gray-400">候補B</p>
                  <p class="font-semibold text-white">ホテルバー</p>
                </div>
                <span class="text-xs text-emerald-100">Keep</span>
              </div>
              <p class="mt-2 text-sm leading-6 text-gray-300">Google評価4.5。一次会からタクシー1メーター。静か・駅直結で天候影響が少なく、今夜22時から生演奏あり。</p>
              <div class="mt-3 flex flex-wrap gap-2 text-[11px] text-emerald-50/80">
                <span class="rounded bg-white/10 px-2 py-1">Google 4.5</span>
                <span class="rounded bg-white/10 px-2 py-1">タクシー1メーター</span>
                <span class="rounded bg-white/10 px-2 py-1">22:00 生演奏</span>
              </div>
            </div>
            <div class="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <p class="text-xs text-gray-400">候補C</p>
                  <p class="font-semibold text-white">人気居酒屋</p>
                </div>
                <span class="text-xs text-amber-100">Avoid</span>
              </div>
              <p class="mt-2 text-sm leading-6 text-gray-400">食事評価は高いが、席間が近く騒がしい口コミが多い。商談後の会話や機密性を重視する場には不向き。</p>
              <div class="mt-3 flex flex-wrap gap-2 text-[11px] text-gray-300">
                <span class="rounded bg-white/10 px-2 py-1">Google 4.4</span>
                <span class="rounded bg-amber-200/10 px-2 py-1 text-amber-100">会話しづらい</span>
                <span class="rounded bg-white/10 px-2 py-1">席間が近い</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#050607] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Definition</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Journey AIは、検索結果を増やすAIではありません。</h2>
      </div>
      <div class="space-y-6 text-lg leading-8 text-gray-300">
        <p>
          移動と滞在では、情報はすでに多すぎます。地図、レビュー、SNS、天気、交通、予約、地域情報は別々に存在し、最後の判断だけが利用者に残されています。
        </p>
        <p>
          Journey AIは、その分断を一つの判断文脈に変えるためのAIです。今どこにいるか、いつ着くか、誰といるか、何を避けたいか、天気や混雑がどう変わるかを読み取り、選択肢を再構成します。
        </p>
        <p>
          旅行会社の予約導線でも、グルメサイトのランキングでも、広告配信でもありません。MarsLinkがつくるのは、移動と滞在の中で「次に何を選ぶべきか」を人が判断できる状態です。
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#080c10] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Signal model</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">AIの価値は、横断情報を判断可能な文脈に変えること。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Journey AIは、単一のデータソースに依存しません。複数の情報を束ね、利用者の目的と制約に合わせて意味づけます。
      </p>
    </div>
    <div class="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {% for signal in site.data.marslink_terms.journey_ai_signals %}
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-7">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100/70">0{{ forloop.index }}</p>
        <h3 class="mt-4 text-2xl font-semibold text-white">{{ signal.label }}</h3>
        <p class="mt-4 leading-7 text-gray-300">{{ signal.copy }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Journey moments</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">出発前、移動中、到着後、滞在中。判断は連続している。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Journey AIは、移動中だけの体験ではありません。CabinTimeで移動空間に入り、個人の移動・滞在全体へ広がっていきます。
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Before departure</p>
          <h3 class="mt-3 text-xl font-semibold text-white">予定を、当日の条件に合わせて再確認する。</h3>
          <p class="mt-3 leading-7 text-gray-300">天気、交通、同行者、目的、滞在時間を見て、持ち物、出発時刻、候補地を整理する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">In motion</p>
          <h3 class="mt-3 text-xl font-semibold text-white">移動時間を、到着後の意思決定に変える。</h3>
          <p class="mt-3 leading-7 text-gray-300">機内、船内、車内で、到着予定、雨雲、混雑、候補地の条件を確認し、次の行動を決める。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Arrival</p>
          <h3 class="mt-3 text-xl font-semibold text-white">降りた瞬間に迷わない。</h3>
          <p class="mt-3 leading-7 text-gray-300">空港、港、駅、ホテルからの動線、天候、混雑、タクシー待ち、地下動線を含めて最初の行動を提案する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Stay</p>
          <h3 class="mt-3 text-xl font-semibold text-white">滞在中の体験事故を減らす。</h3>
          <p class="mt-3 leading-7 text-gray-300">高評価でも文脈に合わない候補、雨で歩きにくいルート、混雑しすぎる場所を避け、目的に合う選択肢を残す。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#05070a] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">CabinTime relationship</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">CabinTimeは、Journey AIを現場に入れるための最初のパッケージです。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        いきなり万能AIを売るのではありません。通信制約や専用空間がある場所から、使える体験として導入し、判断支援の質を検証します。
      </p>
    </div>
    <div class="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="rounded-lg border border-white/10 bg-white/[0.04] p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">CabinTime</p>
        <h3 class="mt-4 text-2xl font-semibold text-white">通信制約・専用空間向けの初期導入。</h3>
        <p class="mt-4 leading-7 text-gray-300">Air、Sea、Rail、Coach、Stay、Regionに、スマートフォン、ポータル、ローカル実行、最新情報連携をまとめて入れる。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.04] p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Journey AI</p>
        <h3 class="mt-4 text-2xl font-semibold text-white">個人文脈に合わせた判断AI。</h3>
        <p class="mt-4 leading-7 text-gray-300">移動と滞在のデータを横断し、利用者の目的、好み、避けたい体験に合わせて選択肢を整理する。</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#10100d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Trust model</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">推薦よりも、信頼できる判断を優先する。</h2>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">広告順位にしない</h3>
          <p class="mt-3 leading-7 text-gray-300">提携や露出ではなく、目的、条件、リスク、根拠で候補を整理する設計を前提にする。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">AIが決めない</h3>
          <p class="mt-3 leading-7 text-gray-300">AIは選択肢と理由を提示し、最終判断は利用者が行う。人間の判断を前提にする。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">理由を残す</h3>
          <p class="mt-3 leading-7 text-gray-300">Google評価、口コミ傾向、天候、混雑、動線、目的との相性など、判断の根拠を見える状態にする。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">誇張しない</h3>
          <p class="mt-3 leading-7 text-gray-300">Journey AIは設計・検証中です。提供済みや導入済みのように見せず、CabinTimeから段階的に検証します。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative overflow-hidden bg-[#0b1114] py-24 text-white">
  <img src="{{ '/assets/images/flight-demo.jpg' | relative_url }}" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover opacity-20">
  <div class="absolute inset-0 -z-10 bg-[#0b1114]/88"></div>
  <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
    <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Build with us</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">移動と滞在の判断AIを、現場からつくる。</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">
      航空、船舶、鉄道、バス、ホテル、地域のパートナーと、CabinTimeからJourney AIへつながる最初の検証を進めます。
    </p>
    <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
      <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">共同検証を相談する</a>
      <a href="{{ '/platform/' | relative_url }}" class="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5">Platformを見る</a>
    </div>
  </div>
</section>
