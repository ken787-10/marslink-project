---
layout: page
title: "CabinTime | Initial Journey AI Package"
description: "CabinTimeは、Journey AIを機内・船内・移動空間で動かす初期導入パッケージです。天気、口コミ、混雑、運行情報、利用者の目的・好み・避けたい体験を束ね、移動中の判断を支援します。"
keywords: "CabinTime, MarsLink, Journey AI, 移動空間AI, AIコンパニオン, 航空, 船舶, 交通, 地域連携, 共同検証"
og_image: "/assets/images/cabin.jpg"
canonical_url: "https://marslink.co.jp/cabintime/"
permalink: /cabintime/
priority: 1.0
changefreq: weekly
---

{% assign flight_map = site.data.japan_flight_map %}

<section class="relative isolate overflow-hidden bg-[#050607] px-6 pt-36 pb-20 text-white lg:px-8">
  <img src="{{ '/assets/images/cabin.jpg' | relative_url }}" alt="" class="absolute inset-0 -z-30 h-full w-full object-cover opacity-28">
  <div class="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,6,7,0.99)_0%,rgba(5,6,7,0.84)_48%,rgba(5,6,7,0.52)_100%)]"></div>
  <div class="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,6,7,0.24)_0%,#050607_100%)]"></div>
  <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.82fr_1.18fr]">
    <div>
      <p class="text-xs font-semibold uppercase text-cyan-100/80">CabinTime / Initial Journey AI Package</p>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.08] text-white">
        Cabin intelligence for<br>the next decision.
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
        CabinTimeは、通信制約や専用空間のある移動・滞在環境へJourney AIを入れる初期導入パッケージです。天気、口コミ、混雑、運行情報、目的、好み、避けたい体験をAIが読み取り、旅行者が安心して次を選べる状態をつくります。ここで得た文脈理解と推薦の型を、Journey AIへ広げます。
      </p>
      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">共同検証を相談する</a>
        <a href="#journey-ai-loop" class="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5">Journey AI構想</a>
      </div>
      <p class="mt-6 text-sm leading-6 text-gray-400">
        現在は正式ローンチ前の開発・共同検証フェーズです。
      </p>
    </div>

    <div class="rounded-lg border border-white/10 bg-[#070b11]/95 p-4 shadow-2xl">
      <div class="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-xs uppercase text-cyan-100/70">Live journey context</p>
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
            <p class="whitespace-nowrap rounded-md bg-white/5 px-3 py-1 text-xs text-gray-300">CT-218</p>
          </div>
          <div class="relative mt-5 h-64 overflow-hidden rounded-lg border border-white/10 bg-[#101a24]">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
            <svg class="absolute inset-0 h-full w-full" viewBox="0 0 640 280" role="img" aria-label="In-flight map from Itami Airport to Haneda Airport using Natural Earth geometry">
              <defs>
                <radialGradient id="hero-rain-soft" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(103,232,249,0.55)"/>
                  <stop offset="55%" stop-color="rgba(34,197,94,0.32)"/>
                  <stop offset="100%" stop-color="rgba(14,165,233,0)"/>
                </radialGradient>
                <radialGradient id="hero-rain-core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="rgba(250,204,21,0.7)"/>
                  <stop offset="52%" stop-color="rgba(34,197,94,0.45)"/>
                  <stop offset="100%" stop-color="rgba(34,197,94,0)"/>
                </radialGradient>
                <filter id="hero-radar-blur">
                  <feGaussianBlur stdDeviation="5"/>
                </filter>
              </defs>
              <path d="{{ flight_map.hero.path }}" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.18)" stroke-width="1.25"/>
              <g opacity="0.74" filter="url(#hero-radar-blur)">
                <ellipse cx="433" cy="133" rx="104" ry="32" fill="url(#hero-rain-soft)" transform="rotate(-14 433 133)"/>
                <ellipse cx="471" cy="119" rx="58" ry="20" fill="url(#hero-rain-core)" transform="rotate(-11 471 119)"/>
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

<section id="journey-ai-loop" class="bg-[#050607] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <p class="text-sm font-semibold uppercase text-amber-200">Product definition</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">CabinTimeは、Journey AIを移動空間に入れる初期パッケージです。</h2>
      </div>
      <div class="space-y-6 text-lg leading-8 text-gray-300">
        <p>
          CabinTimeは、単なる旅行アプリでも、機内の暇つぶしでもありません。Journey AIを、通信制約のある機内・船内・車内で実際に動かすための初期導入パッケージです。
        </p>
        <p>
          パッケージに含まれるのは、乗客が触れるスマートフォン画面、機内・船内ポータル、移動中の文脈を読むAI、接続できる時に最新情報を取り込む通信設計、通信が弱い時にも体験を保つローカル実行、そして事業者が情報を扱う運用の前提です。
        </p>
        <p>
          移動中の人は、到着後の食事、移動手段、予定変更、天候、混雑、地域情報を同時に考えています。情報は十分にあります。足りないのは、その人の現在地、時間、目的、制約に合わせて、判断できる形に整理する層です。
        </p>
        <p>
          CabinTimeは、移動中の時間を「検索する時間」ではなく「次の行動を決める時間」に変えます。AIが文脈を理解し、選択肢と理由を提示し、最終的な判断は人間に残します。
        </p>
        <p>
          重要なのは、良い候補を出すことだけではありません。接待では避けるべき店、雨の日に歩かされるルート、混雑で時間を失う移動、Google評価は高くても雰囲気や動線が合わない二次会候補など、行かなければ起きなかった不満を事前に減らすこともCabinTimeの役割です。
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase text-cyan-200">Operational dashboard</p>
      <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">情報を集約し、避けるべき選択まで見つける。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        CabinTimeがつなぐのは、画面ではなく判断に必要な文脈です。天気、口コミ、公共交通の混雑、営業時間、運航・運行情報、地域データ、利用者の目的と好みを束ね、「行くべき場所」だけでなく「避けた方がいい選択」も整理します。
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
                <p class="mt-1 font-semibold text-white">18:40以降</p>
              </div>
            </div>
            <div class="mt-5 space-y-3">
              <button class="w-full rounded-md border border-cyan-200/20 bg-cyan-200/10 px-4 py-3 text-left">
                <span class="block font-semibold text-white">接待向け候補だけを残す</span>
                <span class="mt-1 block text-sm text-gray-300">騒がしさ、席間、駅からの濡れにくさを評価</span>
              </button>
              <button class="w-full rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-left">
                <span class="block font-semibold text-white">混雑と雨を避ける移動</span>
                <span class="mt-1 block text-sm text-gray-300">京急、モノレール、タクシー待ちを比較</span>
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
              <p class="text-xs uppercase text-gray-500">Embedded Portal</p>
              <h3 class="mt-1 text-lg font-semibold text-white">Context layer for ITM -> HND</h3>
            </div>
            <div class="flex gap-2 text-xs">
              <span class="rounded-md bg-white/5 px-2 py-1 text-gray-300">Cabin Wi-Fi</span>
              <span class="rounded-md bg-white/5 px-2 py-1 text-gray-300">Offline-aware</span>
            </div>
          </div>
          <div class="mt-5 space-y-4">
            <div class="rounded-lg border border-white/10 bg-[#101a24] p-4">
              <div class="relative h-80 overflow-hidden rounded-md bg-[#0d1822] sm:h-96">
                  <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_46%_55%,rgba(99,102,241,0.14),transparent_30%)]"></div>
                  <svg class="absolute inset-0 h-full w-full" viewBox="0 0 520 280" preserveAspectRatio="xMidYMid slice" aria-label="CabinTime position from Itami to Haneda using Natural Earth geometry">
                    <defs>
                      <radialGradient id="dashboard-rain-soft" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="rgba(103,232,249,0.5)"/>
                        <stop offset="58%" stop-color="rgba(34,197,94,0.28)"/>
                        <stop offset="100%" stop-color="rgba(14,165,233,0)"/>
                      </radialGradient>
                      <radialGradient id="dashboard-rain-core" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="rgba(250,204,21,0.65)"/>
                        <stop offset="56%" stop-color="rgba(34,197,94,0.38)"/>
                        <stop offset="100%" stop-color="rgba(34,197,94,0)"/>
                      </radialGradient>
                      <filter id="dashboard-radar-blur">
                        <feGaussianBlur stdDeviation="4"/>
                      </filter>
                    </defs>
                    <path d="{{ flight_map.portal.path }}" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
                    <g opacity="0.72" filter="url(#dashboard-radar-blur)">
                      <ellipse cx="372" cy="133" rx="84" ry="27" fill="url(#dashboard-rain-soft)" transform="rotate(-14 372 133)"/>
                      <ellipse cx="402" cy="120" rx="46" ry="17" fill="url(#dashboard-rain-core)" transform="rotate(-11 402 120)"/>
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
                    <p class="text-[10px] uppercase tracking-wide text-gray-400">IFE map layer</p>
                    <p class="text-xs font-semibold text-white">Route + weather</p>
                  </div>
                  <div class="absolute inset-x-4 bottom-4 grid grid-cols-2 overflow-hidden rounded-md border border-white/10 bg-black/55 text-[11px] backdrop-blur">
                    <div class="border-r border-b border-white/10 px-3 py-2">
                      <p class="text-gray-500">ALT</p>
                      <p class="mt-1 font-semibold text-white">34,000 ft</p>
                    </div>
                    <div class="border-b border-white/10 px-3 py-2">
                      <p class="text-gray-500">GS</p>
                      <p class="mt-1 font-semibold text-white">830 km/h</p>
                    </div>
                    <div class="border-r border-white/10 px-3 py-2">
                      <p class="text-gray-500">ETA</p>
                      <p class="mt-1 font-semibold text-white">18:10</p>
                    </div>
                    <div class="px-3 py-2">
                      <p class="text-sky-100/80">WX</p>
                      <p class="mt-1 font-semibold text-white">Rain on arrival</p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div class="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p class="text-xs text-gray-500">Signal stack</p>
                <p class="mt-1 text-2xl font-semibold text-amber-100">8 signals</p>
                <p class="mt-2 text-sm leading-6 text-gray-300">雨雲、Google評価、口コミ、混雑、営業時間、運行情報、料金帯、利用者文脈を統合。</p>
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
            <p class="text-xs uppercase text-gray-500">Operator Console</p>
            <h3 class="mt-1 text-lg font-semibold text-white">Experience risk monitor</h3>
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
              <p class="mt-2 text-sm leading-6 text-gray-300">Google評価4.3、騒音口コミ少、一次会から徒歩6分、雨でも地下動線あり。</p>
              <div class="mt-3 flex flex-wrap gap-2 text-[11px] text-cyan-50/80">
                <span class="rounded bg-white/10 px-2 py-1">Google 4.3</span>
                <span class="rounded bg-white/10 px-2 py-1">徒歩6分</span>
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
              <p class="mt-2 text-sm leading-6 text-gray-300">Google評価4.5、一次会からタクシー1メーター。静か・駅直結で天候影響が少なく、今夜22時から生演奏あり。</p>
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

<section class="bg-[#10100d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.76fr_1.24fr]">
      <div>
        <p class="text-sm font-semibold uppercase text-cyan-200">Deployment domains</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">閉ざされた空間と、意図的に情報を届けたい空間へ。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          CabinTimeはAir専用でも、Sea専用でもありません。通信制約、専用ポータル、限られた移動時間、到着後の判断が重なる空間に、Journey AIを初期導入するためのパッケージです。
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {% for domain in site.data.marslink_terms.journey_domains %}
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-2xl font-semibold text-white">{{ domain.label }}</h3>
            {% if domain.priority == "Primary" %}
            <span class="whitespace-nowrap rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">{{ domain.priority }}</span>
            {% else %}
            <span class="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-400">{{ domain.priority }}</span>
            {% endif %}
          </div>
          <p class="mt-4 leading-7 text-gray-300">{{ domain.copy }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section class="bg-[#080c10] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p class="text-sm font-semibold uppercase text-cyan-200">Decision support model</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">AIが見るのは、情報ではなく判断の条件です。</h2>
      </div>
      <p class="text-lg leading-8 text-gray-300">
        CabinTimeは、検索結果を並べるだけのUIではありません。横断的な情報をひとつの判断ダッシュボードに集約し、その人の目的に合わせて、選ぶ理由と避ける理由を整理します。
      </p>
    </div>

    <div class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-sm font-semibold uppercase text-cyan-200">01 / Cross-source dashboard</p>
        <h3 class="mt-4 text-2xl font-semibold text-white">横断情報を一枚にする。</h3>
        <p class="mt-4 leading-7 text-gray-300">天気、口コミ、混雑、営業時間、運行・運航情報、地域データを分断せず、到着前の判断に使える状態へまとめる。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-sm font-semibold uppercase text-amber-200">02 / Personalization</p>
        <h3 class="mt-4 text-2xl font-semibold text-white">人と目的に合わせる。</h3>
        <p class="mt-4 leading-7 text-gray-300">接待、家族旅行、一人旅、短時間滞在などの目的と、静かさ、徒歩距離、混雑耐性、避けたい体験を提案に反映する。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-sm font-semibold uppercase text-emerald-200">03 / Explainable choice</p>
        <h3 class="mt-4 text-2xl font-semibold text-white">理由つきで判断できる。</h3>
        <p class="mt-4 leading-7 text-gray-300">AIが勝手に決めるのではなく、推奨、注意、除外の理由を示し、人が納得して次の行動を選べる状態をつくる。</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#07090d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase text-emerald-200">Passenger experience</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">移動中に、次の選択肢が見えてくる。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          CabinTimeは、利用者に情報を大量に渡すのではなく、今の移動文脈に合う選択肢へ絞り込みます。おすすめと同じくらい、避けるべき選択を見つけることを重視します。
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">体験事故の回避</h3>
          <p class="mt-3 leading-7 text-gray-300">接待、家族旅行、一人旅などの文脈に合わない候補を、口コミ、混雑、動線、天候から事前に下げる。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">予定変更への対応</h3>
          <p class="mt-3 leading-7 text-gray-300">遅延、雨、混雑、時間不足が起きたとき、無理のない代替案を整理する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">パーソナライズされた提案</h3>
          <p class="mt-3 leading-7 text-gray-300">到着予定時刻、目的地、滞在時間、交通状況に、本人の好み、同行者、目的、避けたい体験を重ねて提示する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">地域との接続</h3>
          <p class="mt-3 leading-7 text-gray-300">自治体、DMO、店舗、宿泊、体験事業者の情報を、旅の文脈とリスク条件に合わせて届ける。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#10100d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div class="overflow-hidden rounded-lg border border-white/10 bg-black/35">
        <img src="{{ '/assets/images/cabin-united.jpg' | relative_url }}" alt="Aircraft cabin as a moving decision space" class="h-full w-full object-cover opacity-90">
      </div>
      <div>
        <p class="text-sm font-semibold uppercase text-amber-200">For partners</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">事業者や地域にとって、移動空間は判断材料を届ける接点になる。</h2>
        <div class="mt-8 space-y-6 text-lg leading-8 text-gray-300">
          <p>
            航空機、船舶、交通機関、ホテル、地域には、利用者の判断に役立つ情報があります。CabinTimeは、それを広告枠として押し出すのではなく、目的、天候、混雑、動線、避けたい体験に合わせた判断材料として届けます。
          </p>
          <p>
            事業者や地域は、路線、便、航路、車両、施設、目的地ごとの情報を整えます。AIはそれを利用者文脈に合わせて整理し、人が選びやすい形で提示します。共同検証では、情報更新の負荷、提案理由、利用者の納得感を確認します。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#050607] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
      <div>
        <p class="text-sm font-semibold uppercase text-cyan-200">Journey AI loop</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">CabinTimeで現場に入れ、Journey AIで広げる。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          CabinTimeは、MarsLinkがつくるJourney Intelligence Platformの初期導入パッケージです。まず移動空間で判断支援を検証し、次にJourney AIとして出発前、移動中、到着後、滞在中まで広げます。
        </p>
      </div>
      <div class="rounded-lg border border-white/10 bg-[#070b11] p-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <p class="text-sm text-gray-500">01</p>
            <h3 class="mt-3 text-xl font-semibold text-white">Context</h3>
            <p class="mt-3 text-sm leading-6 text-gray-300">場所、時間、目的地、天候、混雑、口コミ、好み、目的、避けたい体験を理解する。</p>
          </div>
          <div class="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <p class="text-sm text-gray-500">02</p>
            <h3 class="mt-3 text-xl font-semibold text-white">Recommend</h3>
            <p class="mt-3 text-sm leading-6 text-gray-300">次に取り得る選択肢、避けるべき選択、その理由を提示する。</p>
          </div>
          <div class="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <p class="text-sm text-gray-500">03</p>
            <h3 class="mt-3 text-xl font-semibold text-white">Act</h3>
            <p class="mt-3 text-sm leading-6 text-gray-300">保存、共有、予約、ルート確認などの行動へつなげる。</p>
          </div>
          <div class="rounded-lg border border-white/10 bg-white/[0.035] p-5">
            <p class="text-sm text-gray-500">04</p>
            <h3 class="mt-3 text-xl font-semibold text-white">Learn</h3>
            <p class="mt-3 text-sm leading-6 text-gray-300">本人の反応と現場の更新情報をもとに、提案の質を改善する。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase text-emerald-200">Pilot design</p>
        <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">共同検証で確認すること。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          CabinTimeは開発中の初期導入パッケージです。実証パートナーとともに、移動空間で本当に価値が出る体験、運用、事業モデルを検証します。
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">UX検証</h3>
          <p class="mt-3 leading-7 text-gray-300">移動中の限られた時間で、どの情報量とUIが判断しやすいかを確認する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">情報更新</h3>
          <p class="mt-3 leading-7 text-gray-300">路線、便、航路、目的地、季節ごとの情報を、どの負荷で更新し、どの粒度でAIの判断材料にできるかを検証する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">地域連携</h3>
          <p class="mt-3 leading-7 text-gray-300">自治体、DMO、飲食、宿泊、体験事業者との接続が、到着後の行動につながるかを確認する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">信頼できる情報設計</h3>
          <p class="mt-3 leading-7 text-gray-300">事業者や地域が持つ情報を、広告枠ではなく判断材料として扱えるかを共同検証で整理する。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#050607] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase text-cyan-200">What CabinTime is not</p>
      <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">誇張せず、開発中のプロダクトとして進める。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        CabinTimeは、正式ローンチ済みの大規模導入プロダクトではありません。MarsLinkは、移動空間での意思決定支援という仮説を、初期導入パッケージとして現場の制約と実証から検証していきます。
      </p>
    </div>
    <div class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-7">
        <h3 class="text-xl font-semibold">人間が決める</h3>
        <p class="mt-4 text-gray-300">AIは判断を代行するのではなく、状況、選択肢、理由を整理する。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-7">
        <h3 class="text-xl font-semibold">現場から設計する</h3>
        <p class="mt-4 text-gray-300">通信制約、限られた時間、地域情報の更新負荷、現場の制約を前提にする。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-7">
        <h3 class="text-xl font-semibold">基盤へ育てる</h3>
        <p class="mt-4 text-gray-300">初期パッケージとして現場に入れ、Journey AIを支えるデータ、文脈理解、説明可能性の基盤へ接続する。</p>
      </div>
    </div>
  </div>
</section>

<section class="relative overflow-hidden bg-[#0b1114] py-24 text-white">
  <img src="{{ '/assets/images/hero-bg-6.jpg' | relative_url }}" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover opacity-25">
  <div class="absolute inset-0 -z-10 bg-[#0b1114]/85"></div>
  <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
    <p class="text-sm font-semibold uppercase text-cyan-200">Co-create CabinTime</p>
    <h2 class="mt-4 text-3xl font-semibold sm:text-5xl">移動中の判断支援を、共に検証する。</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">
      航空会社、船舶事業者、交通事業者、自治体、DMO、宿泊・飲食・体験事業者との共同検証を想定しています。
    </p>
    <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
      <a href="{{ '/contact/' | relative_url }}" class="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">共同検証を相談する</a>
      <a href="{{ '/platform/' | relative_url }}" class="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5">Platformを見る</a>
    </div>
  </div>
</section>
