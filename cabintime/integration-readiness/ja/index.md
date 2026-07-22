---
layout: page
lang: ja
og_locale: ja_JP
title: "CabinTime インテグレーション・レディネス"
seo_title: "CabinTime 技術評価・統合設計 | IFEとモバイルの意思決定支援"
description: "CabinTimeの実動IFEプロトタイプ、統合アーキテクチャ、データ契約、オフライン耐性、セキュリティモデル、モバイル連携、配備までの責任分界を確認できます。"
keywords: "CabinTime, キャビンタイム, IFEアプリケーション, 機内エンターテインメント, 航空会社ソフトウェア, 到着後意思決定支援, オフラインAI, シートバックアプリ, モバイル連携, プラットフォームアダプター, Journey Intelligence"
og_image: "/assets/images/cabintime/cabintime-ife-functional-demo.webp"
permalink: /cabintime/integration-readiness/ja/
alternate_en: /cabintime/integration-readiness/
alternate_ja: /cabintime/integration-readiness/ja/
robots: noindex, nofollow
sitemap: false
---

<section class="relative flex min-h-[760px] items-end overflow-hidden bg-[#05080a] text-white sm:min-h-[820px]">
  <div class="absolute inset-0 bg-cover bg-center opacity-50" style="background-image: url('{{ '/assets/images/cabintime/cabintime-ife-functional-demo.webp' | relative_url }}');" aria-hidden="true"></div>
  <div class="absolute inset-0 bg-black/70" aria-hidden="true"></div>
  <div class="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-44 lg:px-8 lg:pb-24">
    <div class="max-w-4xl">
      <div class="flex flex-wrap items-center justify-between gap-5">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">CabinTime / Integration Readiness</p>
        <nav aria-label="言語" class="inline-flex border border-white/25 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
          <a href="{{ '/cabintime/integration-readiness/' | relative_url }}" lang="en" hreflang="en" class="px-4 py-2 text-gray-300 transition hover:bg-white/10 hover:text-white">EN</a>
          <span aria-current="page" class="bg-white px-4 py-2 text-[#101820]">JA</span>
        </nav>
      </div>
      <h1 class="mt-6 text-4xl font-semibold leading-[1.08] tracking-normal sm:text-6xl lg:text-7xl">CabinTime <span class="block text-gray-300">IFEのための、<span class="block">到着後の<span class="block sm:inline">意思決定支援。</span></span></span></h1>
      <p class="mt-6 max-w-3xl text-2xl font-medium leading-9 text-white sm:text-3xl">旅は、着陸で終わらない。</p>
      <p class="mt-7 max-w-3xl text-lg leading-8 text-gray-200">
        CabinTimeは、シートバックIFEからモバイルまで旅の文脈をつなぐ、オフライン対応を前提としたJourney Intelligenceアプリケーションです。飛行状況、天気、地上交通、目的地の状況、乗客の目的を整理し、到着後の選択肢を根拠とともに提示します。
      </p>
      <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-gray-300">
        <span>実動プロトタイプ</span>
        <span>プレパイロット</span>
        <span>航空会社・IFE統合</span>
      </div>
    </div>
  </div>
</section>

<section class="border-y border-white/10 bg-[#090d10] py-20 text-white sm:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Why it matters</p>
        <h2 class="mt-5 text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">IFEは、乗客の「到着後」を整えられる。</h2>
      </div>
      <div class="space-y-8 text-lg leading-8 text-gray-300">
        <p>従来のIFEは、飛行中の情報提供とエンターテインメントには優れています。しかし乗客は、到着後に分断された判断を抱えています。遅延した鉄道、会食後の雨、混雑する乗り換え、目的に合わない店舗、残り時間では実行できない予定。必要な情報は複数の画面に分かれています。</p>
        <p>CabinTimeは、着陸前に到着地の状況を整理し、推奨する理由と再確認すべき理由を示します。乗客が機内で決めた行程と文脈は、降機後もモバイルで継続できます。</p>
        <p class="border-l-2 border-cyan-300 pl-6 text-xl font-medium leading-8 text-white">最終的に決めるのは乗客です。CabinTimeは、人が根拠を持って判断できる状態をつくります。</p>
      </div>
    </div>
  </div>
</section>

<section id="prototype" class="bg-[#050708] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Functional prototype evidence</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">現在評価できる、アプリケーション層の動作。</h2>
      </div>
      <p class="text-lg leading-8 text-gray-300">現在の1280 x 720プロトタイプでは、シートバック向け操作、Journey Stateの統合、情報源を識別したAPI集約、根拠を示す判断支援、オフライン状態の制御、モバイルへの引き継ぎを確認できます。</p>
    </div>

    <figure class="mt-12 overflow-hidden border border-white/10 bg-black shadow-2xl">
      <img src="{{ '/assets/images/cabintime/cabintime-ife-functional-demo.webp' | relative_url }}" alt="東京付近の飛行ルート、到着時刻、通信状態、気象情報、到着プランのナビゲーションを表示したCabinTimeの実動IFEプロトタイプ" class="block h-auto w-full" width="2200" height="1544" loading="lazy" decoding="async">
      <figcaption class="grid gap-3 border-t border-white/10 px-5 py-5 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:px-7">
        <span>ITMからHNDへのシナリオ再生 / 観測ルートのスナップショット</span>
        <span class="sm:text-right">1280 x 720 タッチUI / 到着前の判断支援シナリオ</span>
      </figcaption>
    </figure>

    <div class="mt-10 grid grid-cols-1 border-y border-white/10 md:grid-cols-3">
      <div class="border-b border-white/10 py-7 md:border-b-0 md:border-r md:pr-8">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Implemented</p>
        <p class="mt-3 text-lg font-semibold">タッチ操作を前提としたIFEフロー</p>
        <p class="mt-2 text-sm leading-6 text-gray-400">現在地、到着ブリーフ、移動手段の比較、会食・二次会候補の確認、モバイル継続を実装しています。</p>
      </div>
      <div class="border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-8">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Observable</p>
        <p class="mt-3 text-lg font-semibold">通信状態に応じた挙動</p>
        <p class="mt-2 text-sm leading-6 text-gray-400">オンライン、制限接続、オフライン時の情報鮮度、キャッシュ、フォールバックを画面上で確認できます。</p>
      </div>
      <div class="py-7 md:pl-8">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Controlled evaluation</p>
        <p class="mt-3 text-lg font-semibold">操作可能なビルドを用意</p>
        <p class="mt-2 text-sm leading-6 text-gray-400">技術評価では、操作可能なビルドを使って、画面遷移、通信状態、到着プラン、モバイル連携を確認できます。</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#eef1f2] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Passenger journey</p>
    <h2 class="mt-5 max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">シートバックからモバイルまで、一つのJourney Stateをつなぐ。</h2>
    <div class="mt-14 grid grid-cols-1 border-y border-black/15 lg:grid-cols-3">
      <div class="border-b border-black/15 py-8 lg:border-b-0 lg:border-r lg:pr-10">
        <p class="font-mono text-sm font-semibold text-[#126879]">01 / SEATBACK</p>
        <h3 class="mt-4 text-2xl font-semibold">到着時の状況を理解する。</h3>
        <p class="mt-4 leading-7 text-gray-600">飛行状況、到着地の天気、地上交通、事業者の公式情報、旅行目的、乗客の制約を、着陸前に一つの文脈へ整理します。</p>
      </div>
      <div class="border-b border-black/15 py-8 lg:border-b-0 lg:border-r lg:px-10">
        <p class="font-mono text-sm font-semibold text-[#126879]">02 / ARRIVAL PLAN</p>
        <h3 class="mt-4 text-2xl font-semibold">比較し、理由を確認し、決める。</h3>
        <p class="mt-4 leading-7 text-gray-600">選択肢をRecommend、Review、Keep、Avoidで整理し、情報源、鮮度、判断理由、不確実性を乗客に示します。</p>
      </div>
      <div class="py-8 lg:pl-10">
        <p class="font-mono text-sm font-semibold text-[#126879]">03 / MOBILE CONTINUATION</p>
        <h3 class="mt-4 text-2xl font-semibold">降機後も同じ旅を続ける。</h3>
        <p class="mt-4 leading-7 text-gray-600">確定した目的地と旅の文脈を、乗客が管理するモバイルセッションへ引き継ぎます。本番環境のペアリング、有効期限、認証、暗号化は配備時の制御項目です。</p>
      </div>
    </div>
  </div>
</section>

<section id="architecture" class="bg-[#081014] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="max-w-4xl">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Integration Architecture</p>
      <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">アプリケーションの中核を固定し、プラットフォーム接続部を交換可能に。</h2>
      <p class="mt-7 text-lg leading-8 text-gray-300">CabinTimeは、旅の判断ロジック、根拠、ユーザー体験を、特定のシートバック実行環境から分離します。Platform Adapterが、パートナーから許可されたサービスを、安定したJourney Contractへ変換します。</p>
    </div>

    <div class="mt-14 overflow-x-auto border border-white/10 bg-black/20 p-6 sm:p-8">
      <div class="grid min-w-[920px] grid-cols-[1fr_80px_1.15fr_80px_1.2fr] items-stretch gap-3">
        <div class="border border-amber-200/25 bg-amber-100/[0.04] p-5">
          <p class="font-mono text-xs uppercase tracking-[0.16em] text-amber-200">Partner-controlled inputs</p>
          <p class="mt-4 font-semibold">IFE実行環境と承認済みサービス</p>
          <p class="mt-3 text-sm leading-6 text-gray-400">飛行・運航データ、乗客の文脈、接続状態、デバイスI/O、承認済みコンテンツと運用ポリシー。</p>
        </div>
        <div class="flex items-center justify-center font-mono text-xl text-gray-500" aria-hidden="true">--&gt;</div>
        <div class="border border-cyan-200/35 bg-cyan-100/[0.06] p-5">
          <p class="font-mono text-xs uppercase tracking-[0.16em] text-cyan-200">Platform Integration Boundary</p>
          <p class="mt-4 font-semibold">Platform Adapter</p>
          <p class="mt-3 text-sm leading-6 text-gray-300">ベンダーAPI、イベントライフサイクル、通信状態、安全な保存領域、パッケージングフック、デバイス機能を正規化します。</p>
        </div>
        <div class="flex items-center justify-center font-mono text-xl text-gray-500" aria-hidden="true">--&gt;</div>
        <div class="border border-emerald-200/25 bg-emerald-100/[0.04] p-5">
          <p class="font-mono text-xs uppercase tracking-[0.16em] text-emerald-200">Application Boundary</p>
          <p class="mt-4 font-semibold">Journey Intelligence Core</p>
          <p class="mt-3 text-sm leading-6 text-gray-300">Journey State、判断の統合、根拠、情報鮮度、graceful degradation、IFE UX、モバイル継続。</p>
        </div>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
      <div class="border-t border-white/15 pt-7">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Responsibility Boundary</p>
        <h3 class="mt-4 text-2xl font-semibold">MarsLinkは、意思決定支援のアプリケーション層を担います。</h3>
        <p class="mt-4 leading-7 text-gray-400">旅の判断ロジック、情報の優先順位、根拠の提示、情報源と鮮度の管理、オフライン時の挙動、乗客との対話、画面をまたぐ継続性は、CabinTimeのApplication Boundaryに含まれます。</p>
      </div>
      <div class="border-t border-white/15 pt-7">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Deployment Boundary</p>
        <h3 class="mt-4 text-2xl font-semibold">認証された実行環境は、プラットフォームパートナーが管理します。</h3>
        <p class="mt-4 leading-7 text-gray-400">ベンダーSDKへのアクセス、航空機・運航データ契約、デバイスI/O、パッケージング、署名、認証、航空会社のセキュリティ審査、配備承認は、パートナーが管理する統合ゲートです。</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#f7f8f8] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Data Contracts &amp; Interfaces</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">すべての判断に、文脈・根拠・時刻を持たせる。</h2>
        <p class="mt-6 leading-7 text-gray-600">Journey Contractは、公式情報、観測された状況、シナリオ上の仮定、AIが支援した判断を分離します。取得できない情報を、事実として推測することはありません。</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr class="border-b border-black/25 font-mono text-xs uppercase tracking-[0.14em] text-gray-500">
              <th class="py-4 pr-5 font-medium">Contract field</th>
              <th class="py-4 pr-5 font-medium">目的</th>
              <th class="py-4 font-medium">必須の挙動</th>
            </tr>
          </thead>
          <tbody class="text-sm leading-6">
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">source</td><td class="py-5 pr-5">事実・シグナルの情報源</td><td class="py-5 text-gray-600">画面で確認・追跡できる</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">observed_at</td><td class="py-5 pr-5">観測された時刻</td><td class="py-5 text-gray-600">集約後も保持する</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">freshness</td><td class="py-5 pr-5">live、recent、cached、stale</td><td class="py-5 text-gray-600">表現と確信度へ反映する</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">evidence</td><td class="py-5 pr-5">選択肢を提示する理由</td><td class="py-5 text-gray-600">乗客が確認できる</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">confidence</td><td class="py-5 pr-5">現在の根拠の強さ</td><td class="py-5 text-gray-600">情報劣化時に引き下げる</td></tr>
            <tr><td class="py-5 pr-5 font-mono font-semibold">human_confirmation_required</td><td class="py-5 pr-5">最終判断の制御</td><td class="py-5 text-gray-600">重要な行動ではtrueにする</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0b0e10] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="max-w-4xl">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Runtime &amp; Offline Resilience</p>
      <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">不完全な通信環境でも、役に立つ状態を保つ。</h2>
      <p class="mt-7 text-lg leading-8 text-gray-300">CabinTimeは通信を、接続・未接続の二択ではなく、実行時の状態として扱います。情報鮮度、実行可能な操作、提案の確信度を連動させます。</p>
    </div>

    <div class="mt-14 divide-y divide-white/10 border-y border-white/10">
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-emerald-200">ONLINE</p><p class="font-semibold">最新APIとクラウドサービスを利用可能</p><p class="text-sm leading-6 text-gray-400">最新シグナルを取得し、情報源を保持したままJourney Stateを更新します。</p></div>
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-cyan-200">LIMITED</p><p class="font-semibold">遅延・帯域制限のある接続</p><p class="text-sm leading-6 text-gray-400">テキストを優先し、メディアを抑え、差分同期を行い、鮮度の低下を表示します。</p></div>
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-amber-200">OFFLINE</p><p class="font-semibold">外部接続なし</p><p class="text-sm leading-6 text-gray-400">承認済みキャッシュを使い、対応できない操作を無効化し、許可された更新を再接続まで保持します。</p></div>
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-rose-200">STALE</p><p class="font-semibold">有効期間を超えた情報</p><p class="text-sm leading-6 text-gray-400">鮮度警告を表示し、確信度を下げ、断定表現を避け、再確認を求めます。</p></div>
    </div>

    <p class="mt-8 border-l-2 border-amber-300 pl-6 text-sm leading-6 text-gray-400">実動プロトタイプでは、通信状態の変化とフォールバックを確認できます。本番のキャッシュポリシー、更新経路、再接続キュー、承認済みオフラインデータは、プラットフォームパートナーと定義します。</p>
  </div>
</section>

<section class="bg-[#e8edef] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Security &amp; Privacy Model</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">信頼を、明示的な境界として設計する。</h2>
        <p class="mt-7 text-lg leading-8 text-gray-600">CabinTimeは乗客向けのアプリケーション層であり、航空機の安全系・飛行制御系から分離する設計です。本番インターフェースは、明示的な許可がない限り、パートナーが承認した読み取り専用接続を前提とします。</p>
      </div>
      <div class="divide-y divide-black/10 border-y border-black/15">
        <div class="py-6"><h3 class="text-lg font-semibold">Security &amp; Trust Boundary</h3><p class="mt-2 text-sm leading-6 text-gray-600">安全上重要な航空機システムへの指令経路を持ちません。実行時権限とデバイスアクセスはプラットフォーム側で管理します。</p></div>
        <div class="py-6"><h3 class="text-lg font-semibold">データ最小化</h3><p class="mt-2 text-sm leading-6 text-gray-600">判断に必要な最小限の旅の文脈を使用し、乗客の好みと公式の運航情報を分離します。</p></div>
        <div class="py-6"><h3 class="text-lg font-semibold">セッション継続</h3><p class="mt-2 text-sm leading-6 text-gray-600">本番の引き継ぎでは、短時間で失効するペアリング、通信時・保存時の暗号化、明示的な有効期限、失効処理を必要とします。</p></div>
        <div class="py-6"><h3 class="text-lg font-semibold">Assuranceと監査可能性</h3><p class="mt-2 text-sm leading-6 text-gray-600">モデル・ルールのバージョン、情報源の時刻、フォールバック状態、提案根拠を保持し、判断を再現できるようにします。</p></div>
      </div>
    </div>
    <p class="mt-10 text-sm leading-6 text-gray-500">本番統合では、これらの制御をIFEプラットフォームのセキュリティ要件と航空会社の運用要件に合わせて具体化します。</p>
  </div>
</section>

<section id="readiness" class="bg-[#06090b] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="max-w-4xl">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Certification &amp; Deployment Readiness</p>
      <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">アプリケーション検証から、承認された配備までの経路を明確にする。</h2>
      <p class="mt-7 text-lg leading-8 text-gray-300">現在のCabinTimeプロトタイプは、アプリケーション層のUX、判断の統合、API集約、オフライン状態の制御を検証しています。シートバック実行環境との統合は、独立したPlatform Adapter Boundaryとして定義します。</p>
    </div>

    <div class="mt-14 overflow-x-auto">
      <table class="w-full min-w-[820px] border-collapse text-left">
        <thead><tr class="border-b border-white/20 font-mono text-xs uppercase tracking-[0.14em] text-gray-500"><th class="py-4 pr-6 font-medium">Boundary</th><th class="py-4 pr-6 font-medium">現在地</th><th class="py-4 font-medium">次のゲート</th></tr></thead>
        <tbody class="text-sm leading-6">
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-emerald-200">Application Boundary</td><td class="py-6 pr-6">ブラウザ上の実動プロトタイプ、1280 x 720のタッチUX、判断・根拠レイヤー、API・フォールバックアダプター</td><td class="py-6 text-gray-400">UXと機能範囲に関するパートナー評価</td></tr>
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-cyan-200">Data Boundary</td><td class="py-6 pr-6">Journey Contract、provenance、freshness、キャッシュ状態、デモデータの明示</td><td class="py-6 text-gray-400">航空機・運航・コンテンツ・乗客データの承認済み契約</td></tr>
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-amber-200">Platform Integration Boundary</td><td class="py-6 pr-6">アダプターインターフェースと統合責任を定義済み</td><td class="py-6 text-gray-400">ベンダーSDK、ライフサイクル、保存領域、デバイスI/O、ネットワークサービスの実装</td></tr>
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-rose-200">Security &amp; Trust Boundary</td><td class="py-6 pr-6">本番制御モデルと分離要件を定義</td><td class="py-6 text-gray-400">脅威モデル、セキュリティ・プライバシー審査、パートナー検証</td></tr>
          <tr><td class="py-6 pr-6 font-semibold text-violet-200">Deployment Boundary</td><td class="py-6 pr-6">プレパイロット。統合境界と技術評価範囲を定義</td><td class="py-6 text-gray-400">パッケージング、署名、認証、航空会社承認、ハードウェア検証、リリース運用</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="bg-[#f7f8f8] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Evaluation path</p>
    <h2 class="mt-5 max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">配備を約束する前に、統合条件を定義する。</h2>
    <div class="mt-14 grid grid-cols-1 border-y border-black/15 md:grid-cols-3">
      <div class="border-b border-black/15 py-8 md:border-b-0 md:border-r md:pr-8"><p class="font-mono text-sm font-semibold text-[#126879]">01</p><h3 class="mt-4 text-xl font-semibold">技術評価</h3><p class="mt-3 text-sm leading-6 text-gray-600">実動プロトタイプ、データ境界、オフライン挙動、対象ハードウェア、承認された実行環境の機能を確認します。</p></div>
      <div class="border-b border-black/15 py-8 md:border-b-0 md:border-r md:px-8"><p class="font-mono text-sm font-semibold text-[#126879]">02</p><h3 class="mt-4 text-xl font-semibold">Integration Workshop</h3><p class="mt-3 text-sm leading-6 text-gray-600">ベンダーAPI、ライフサイクルイベント、セキュリティ制御、データ契約、パッケージング、署名、運用責任を対応付けます。</p></div>
      <div class="py-8 md:pl-8"><p class="font-mono text-sm font-semibold text-[#126879]">03</p><h3 class="mt-4 text-xl font-semibold">パイロット定義</h3><p class="mt-3 text-sm leading-6 text-gray-600">対象路線、乗客セグメント、ハードウェア環境、評価指標、フォールバック、審査ゲート、配備責任を合意します。</p></div>
    </div>
  </div>
</section>

<section class="bg-[#071116] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
      <div class="max-w-4xl">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Work with MarsLink</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">CabinTimeを、IFEアプリケーションと統合プログラムの両面から評価する。</h2>
        <p class="mt-7 max-w-3xl text-lg leading-8 text-gray-300">航空会社、IFEプラットフォーム事業者、機内通信チームとの技術評価を歓迎します。最初に確認するのは、適合性、インターフェース、制約、検証可能な根拠です。</p>
      </div>
      <a href="{{ '/contact/' | relative_url }}" class="inline-flex min-h-12 items-center justify-center border border-white bg-white px-7 py-3 text-sm font-semibold text-[#101820] transition hover:bg-cyan-100">統合に関する相談を始める</a>
    </div>
    <div class="mt-14 border-t border-white/10 pt-6 text-sm leading-6 text-gray-500">
      現在のフェーズ：実動プロトタイプ / プレパイロット。技術評価、Integration Workshop、パイロット設計を進めています。
    </div>
  </div>
</section>
