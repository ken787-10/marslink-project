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
        <img src="{{ '/assets/images/flightdemo1.png' | relative_url }}" alt="CabinTime technology preview" class="w-full object-cover">
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
