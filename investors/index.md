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
      MarsLinkは、旅行会社でも観光領域の受託支援会社でもありません。移動空間の情報、状況認識、意思決定をAIでつなぐAIインフラ企業です。CabinTimeは、その最初のプロダクトです。
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
