---
layout: page
title: "Investors | MarsLink"
description: "MarsLinkの投資家向けページ。CabinTimeを起点に、Journey AI、Mobility Intelligence、Decision Intelligenceへ拡張する事業構想を紹介します。"
keywords: "MarsLink, Investors, 投資家, Journey AI, CabinTime, Decision Intelligence, スタートアップ"
permalink: /investors/
---

<section class="bg-[#07090d] px-6 pt-36 pb-24 text-white lg:px-8">
  <div class="mx-auto max-w-7xl">
    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Investors</p>
    <h1 class="mt-5 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl">Decision Intelligence begins in motion.</h1>
    <p class="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
      MarsLinkは、移動から始まる、意思決定を支援するAIの会社です。移動空間の情報・状況認識・意思決定をAIでつなぎ、人と組織がより良い判断を行える状態をつくります。CabinTimeは、その最初のプロダクトです。
    </p>
    <p class="mt-6 max-w-3xl text-base leading-7 text-cyan-100">
      {{ site.data.marslink_terms.brand_definition_en }} {{ site.data.marslink_terms.brand_definition_ja }}
    </p>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div class="rounded-lg border border-white/10 bg-white/[0.04] p-8">
        <p class="text-sm uppercase tracking-[0.2em] text-cyan-200">Not a travel app</p>
        <h2 class="mt-4 text-2xl font-semibold">移動中の判断を扱う。</h2>
        <p class="mt-4 text-gray-300">目的地検索や観光情報の掲載ではなく、移動中に分断される情報を、判断できる状態へ変換します。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.04] p-8">
        <p class="text-sm uppercase tracking-[0.2em] text-amber-200">First wedge</p>
        <h2 class="mt-4 text-2xl font-semibold">CabinTimeとJourney AIから始める。</h2>
        <p class="mt-4 text-gray-300">航空機、船舶、交通、旅行、地域という入口で、通信制約のある空間にAIを入れ、個人文脈に合う判断支援を共同検証します。</p>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.04] p-8">
        <p class="text-sm uppercase tracking-[0.2em] text-emerald-200">Infrastructure ambition</p>
        <h2 class="mt-4 text-2xl font-semibold">Decision Intelligenceへ。</h2>
        <p class="mt-4 text-gray-300">文脈理解、推薦、説明可能性、ログ、権限、AIガバナンスを積み上げ、移動から社会の判断基盤へ拡張します。</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#05070a] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Why now</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">移動空間が、AIで扱える領域になり始めている。</h2>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">常時接続に近づく移動空間</h3>
          <p class="mt-3 leading-7 text-gray-300">機内Wi-Fi、船内通信、衛星通信、交通事業者アプリの普及により、移動中の時間がデジタル接点になり始めています。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">LLMによる文脈理解の低コスト化</h3>
          <p class="mt-3 leading-7 text-gray-300">天気、レビュー、混雑、運行情報、利用者の目的を統合し、理由つきの提案へ変換するコストが下がっています。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">交通と地域の収益接点の再設計</h3>
          <p class="mt-3 leading-7 text-gray-300">交通事業者は移動中の顧客接点を、地域は到着前の送客接点を求めています。移動空間は、体験、案内、運用、地域経済が交差する場所です。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Category ladder</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">CabinTimeは、会社の終着点ではない。</h2>
    </div>
    <div class="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-4">
      {% for item in site.data.marslink_terms.evolution %}
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/70">{{ item.type }}</p>
        <h3 class="mt-4 text-xl font-semibold text-white">{{ item.label }}</h3>
        <p class="mt-4 text-sm leading-6 text-gray-300">{{ item.copy }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-[#07090d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Market map</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">市場は、旅行アプリではなく移動空間の判断支援として見る。</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">ソフトウェアとして、スマートフォン、航空機のIFE、船内ポータル、事業者アプリなど多様なハードに載るため、対象は日本の旅行・交通にとどまりません。訪日インバウンド、そして海外の移動市場まで、多言語で展開できます。</p>
        <p class="mt-6 text-sm leading-6 text-gray-500">市場規模は今後の資金調達資料で推計として整理します。この公開ページでは、導入数、売上、契約実績を作らず、現在の検証前提を明示します。</p>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Mobility operators</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">航空、船舶、鉄道、バス、空港、港湾。移動中の顧客接点と運用判断。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Destinations</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">自治体、DMO、宿泊、飲食、体験、イベント。到着前の送客と回遊。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="font-semibold text-white">Reliability</h3>
          <p class="mt-3 text-sm leading-6 text-gray-300">遅延、悪天候、混雑、案内、代替案、レジリエンス。判断を誤れない場面の支援。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#05070a] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Business model</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">誰が払うのかを、段階ごとに分ける。</h2>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[0.32fr_0.68fr]">
          <p class="font-semibold text-cyan-100">Operator license</p>
          <p class="text-gray-300">交通事業者、船舶事業者、空港、地域事業者向けのプロダクト利用料。最初は共同検証と個別PoCから開始。</p>
        </div>
        <div class="grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[0.32fr_0.68fr]">
          <p class="font-semibold text-cyan-100">Destination network</p>
          <p class="text-gray-300">地域、宿泊、飲食、体験事業者との送客、掲載、提携モデル。実績が出るまで過剰な収益主張はしない。</p>
        </div>
        <div class="grid grid-cols-1 gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-6 md:grid-cols-[0.32fr_0.68fr]">
          <p class="font-semibold text-cyan-100">Decision infrastructure</p>
          <p class="text-gray-300">将来的に、説明可能性、AIガバナンス、ログ、権限、API連携を含む基盤利用へ拡張する。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Moat</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Context、Recommendation、Feedbackのループを積み上げる。</h2>
      </div>
      <div class="grid grid-cols-1 gap-4">
        {% for item in site.data.marslink_terms.decision_stack %}
        <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <h3 class="text-xl font-semibold text-white">{{ item.label }}</h3>
          <p class="mt-3 leading-7 text-gray-300">{{ item.copy }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section class="bg-[#10100d] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">GTM and validation</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">小さく入り、Journey AIへ広げる。</h2>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="rounded-lg border border-white/10 bg-black/25 p-6">
          <h3 class="font-semibold text-white">1. Route pilot</h3>
          <p class="mt-3 text-gray-300">伊丹から羽田のような具体ルートで、天候、混雑、到着後行動、提携先候補の判断支援を検証する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-black/25 p-6">
          <h3 class="font-semibold text-white">2. Journey AI validation</h3>
          <p class="mt-3 text-gray-300">移動と滞在の文脈をAIが統合し、推奨、回避、理由提示が利用者の判断品質を上げるかを検証する。</p>
        </div>
        <div class="rounded-lg border border-white/10 bg-black/25 p-6">
          <h3 class="font-semibold text-white">3. Land and expand</h3>
          <p class="mt-3 text-gray-300">1路線、1航路、1地域から入り、複数路線、複数事業者、地域横断のMobility Intelligenceへ広げる。</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#07090d] py-24 text-white">
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Founder–market fit</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">移動・地域・意思決定の交差点に、稀有な創業者適合。</h2>
    <div class="mt-8 space-y-6 text-lg leading-8 text-gray-300">
      <p>
        MarsLinkが狙う領域は、純粋なテック企業にも、観光・地域の事業者にも、単独では攻めにくい場所です。行政と公共交通の意思決定構造、地域経済の現実、AIとクリエイティブによる実装——この3つを同時に理解している必要があります。
      </p>
      <p>
        創業者の市位謙太は、大阪市会議員として8年、行政・地域・交通の意思決定を内側から経験。米国国務省IVLPで国際的なネットワークに触れ、FunMakeで映像・SNS・地域発信を通じて「情報が人の行動に変わる」現場を実装してきました。移動空間のDecision Intelligenceを、現場の制約から設計できる背景です。
      </p>
    </div>
    <div class="mt-8 flex flex-wrap gap-3">
      <span class="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-200">京都大学 経営管理大学院 MBA</span>
      <span class="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-200">大阪市会議員 8年</span>
      <span class="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-200">米国国務省 IVLP 修了</span>
      <span class="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-200">FunMake / 地域発信・映像</span>
    </div>
    <div class="mt-8">
      <a href="{{ '/ceo/' | relative_url }}" class="inline-flex rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100">代表紹介を読む</a>
      </div>
  </div>
</section>

<section class="bg-[#05070a] py-24 text-white">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Trajectory</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">成長の軌道と、現在地。</h2>
      <p class="mt-6 text-lg leading-8 text-gray-300">今はまだシード段階です。CabinTimeを起点に、扱う意思決定の広がりをここから伸ばします。これまでの達成、現在地、次の打ち手を示します。</p>
    </div>

    <div class="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#04060a]/60 p-4 sm:p-6">
      <svg viewBox="0 0 1000 340" class="min-w-[680px] w-full" role="img" aria-labelledby="hyt hyd">
        <title id="hyt">MarsLinkの成長トラジェクトリ</title>
        <desc id="hyd">CabinTime（現在地・シード段階）から、Journey Intelligence Platform、Decision Intelligenceへと、扱う意思決定の広がりが上昇していく成長曲線。</desc>
        <defs>
          <linearGradient id="hyfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(103,232,249,0.28)"/><stop offset="100%" stop-color="rgba(103,232,249,0)"/></linearGradient>
          <filter id="hyglow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="6"/></filter>
          <marker id="hyar" markerWidth="10" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#67e8f9"/></marker>
          <style>
            .hcap{fill:rgba(255,255,255,.4);font:600 11px sans-serif;letter-spacing:.1em}
            .hlab{fill:#fff;font:700 13px sans-serif}
            .hsub{fill:rgba(255,255,255,.5);font:400 11px sans-serif}
            .hnow{fill:#04060a;font:700 12px sans-serif}
          </style>
        </defs>
        <line x1="64" y1="40" x2="64" y2="288" stroke="rgba(255,255,255,0.12)"/>
        <line x1="64" y1="288" x2="956" y2="288" stroke="rgba(255,255,255,0.12)"/>
        <text x="70" y="32" class="hcap">意思決定の広がり</text>
        <text x="950" y="308" text-anchor="end" class="hcap">時間 →</text>
        <path d="M92,276 C150,272 196,267 236,260 C400,236 500,196 600,150 C720,116 820,90 905,60 L905,288 L92,288 Z" fill="url(#hyfill)"/>
        <path d="M92,276 C150,272 196,267 236,260" fill="none" stroke="#67e8f9" stroke-width="2.5"/>
        <path d="M236,260 C400,236 500,196 600,150 C720,116 820,90 905,60" fill="none" stroke="#67e8f9" stroke-width="2.5" stroke-dasharray="6 7" opacity="0.7" marker-end="url(#hyar)"/>
        <line x1="236" y1="260" x2="236" y2="288" stroke="rgba(255,255,255,0.14)" stroke-dasharray="3 4"/>
        <line x1="600" y1="150" x2="600" y2="288" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3 4"/>
        <line x1="905" y1="60" x2="905" y2="288" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3 4"/>
        <circle cx="92" cy="276" r="3.5" fill="rgba(255,255,255,0.5)"/>
        <circle cx="600" cy="150" r="6" fill="#0b1114" stroke="rgba(103,232,249,0.6)" stroke-width="2"/>
        <circle cx="905" cy="60" r="6" fill="#0b1114" stroke="rgba(103,232,249,0.6)" stroke-width="2"/>
        <circle cx="236" cy="258" r="20" fill="url(#hyfill)" filter="url(#hyglow)"/>
        <g transform="translate(217,240) scale(1.6)" fill="#67e8f9"><path d="M2.5 19h19v2h-19v-2zm19.07-9.64c-.21-.8-1.04-1.28-1.84-1.06L14.92 9.6 8.46 3.57 6.53 4.08l3.87 6.7-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33.96-.26 5.85-1.57 4.31-1.16 4.83-1.29c.81-.23 1.28-1.05 1.07-1.85z"/></g>
        <g transform="translate(236,222)">
          <rect x="-56" y="-17" width="112" height="25" rx="12" fill="#67e8f9"/>
          <text x="0" y="0" text-anchor="middle" class="hnow">現在地 · Seed</text>
        </g>
        <text x="110" y="308" text-anchor="middle" class="hsub">Founding</text>
        <text x="236" y="308" text-anchor="middle" class="hlab">CabinTime</text>
        <text x="600" y="308" text-anchor="middle" class="hlab">Journey Intelligence Platform</text>
        <text x="905" y="308" text-anchor="end" class="hlab">Decision Intelligence</text>
      </svg>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">これまで ・ Done</p>
        <ul class="mt-4 space-y-2.5 text-sm text-gray-300">
          <li class="flex gap-2"><span class="text-emerald-300">✓</span><span>MarsLink Inc. を設立</span></li>
          <li class="flex gap-2"><span class="text-emerald-300">✓</span><span>本店を大阪駅直結のグラングリーン大阪に開設</span></li>
          <li class="flex gap-2"><span class="text-emerald-300">✓</span><span>CabinTime の開発を開始</span></li>
          <li class="flex gap-2"><span class="text-emerald-300">✓</span><span>OSAP 第19期に採択（大阪市）</span></li>
          <li class="flex gap-2"><span class="text-emerald-300">✓</span><span>大阪府泉南郡熊取町と連携協定</span></li>
          <li class="flex gap-2"><span class="text-emerald-300">✓</span><span>商標「マーズリンク／Mars Link」を取得</span></li>
        </ul>
      </div>
      <div class="rounded-lg border border-cyan-200/30 bg-cyan-200/[0.06] p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">現在地 ・ Now（Seed）</p>
        <ul class="mt-4 space-y-2.5 text-sm text-gray-200">
          <li class="flex gap-2"><span class="text-cyan-300">●</span><span>シード段階。CabinTimeで共同検証フェーズ</span></li>
          <li class="flex gap-2"><span class="text-cyan-300">●</span><span>交通・地域・体験事業者と初期実証を協議</span></li>
          <li class="flex gap-2"><span class="text-cyan-300">●</span><span>最初の実証と事業仮説の検証に集中</span></li>
        </ul>
      </div>
      <div class="rounded-lg border border-white/10 bg-white/[0.035] p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">これから ・ Next</p>
        <ul class="mt-4 space-y-2.5 text-sm text-gray-300">
          <li class="flex gap-2"><span class="text-gray-500">○</span><span>最初の実証（PoC）で価値を証明する</span></li>
          <li class="flex gap-2"><span class="text-gray-500">○</span><span>シード資金調達</span></li>
          <li class="flex gap-2"><span class="text-gray-500">○</span><span>共同検証パートナーを拡大する</span></li>
          <li class="flex gap-2"><span class="text-gray-500">○</span><span>プロダクトとチームを構築する</span></li>
          <li class="flex gap-2"><span class="text-gray-500">○</span><span>Journey Intelligence Platform へ拡張する</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b1114] py-24 text-white">
  <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
    <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Current phase</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">現在は、開発中・共同検証フェーズです。</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">CabinTimeを正式ローンチ済み、導入済み、多数実績ありとは表現しません。MarsLinkは、移動空間の意思決定支援という仮説を、実証パートナーと検証していきます。</p>
    <div class="mt-10">
      <a href="{{ '/contact/' | relative_url }}" class="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-cyan-100">投資家面談を相談する</a>
    </div>
  </div>
</section>
