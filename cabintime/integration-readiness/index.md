---
layout: page
lang: en
og_locale: en_US
title: "CabinTime Integration Readiness"
seo_title: "CabinTime Integration Readiness | IFE and Mobile Decision Support"
description: "Evaluate CabinTime's functional IFE prototype, integration architecture, data contracts, offline resilience, security model, mobile continuity, and deployment boundaries."
keywords: "CabinTime, IFE application, in-flight entertainment, arrival decision intelligence, airline software integration, offline resilient application, seatback application, mobile continuity, platform adapter, journey intelligence"
og_image: "/assets/images/cabintime/cabintime-ife-functional-demo.webp"
permalink: /cabintime/integration-readiness/
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
        <nav aria-label="Language" class="inline-flex border border-white/25 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
          <span aria-current="page" class="bg-white px-4 py-2 text-[#101820]">EN</span>
          <a href="{{ '/cabintime/integration-readiness/ja/' | relative_url }}" lang="ja" hreflang="ja" class="px-4 py-2 text-gray-300 transition hover:bg-white/10 hover:text-white">JA</a>
        </nav>
      </div>
      <h1 class="mt-6 text-5xl font-semibold leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">CabinTime <span class="block text-gray-300">Arrival Decision Intelligence for IFE.</span></h1>
      <p class="mt-6 max-w-3xl text-2xl font-medium leading-9 text-white sm:text-3xl">The journey does not end at landing.</p>
      <p class="mt-7 max-w-3xl text-lg leading-8 text-gray-200">
        CabinTime is an offline-aware journey intelligence application designed for seatback IFE and mobile continuity. It turns flight context, weather, ground transport, destination conditions, and passenger intent into explainable next-step options for arrival.
      </p>
      <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-gray-300">
        <span>Functional prototype</span>
        <span>Pre-pilot</span>
        <span>Airline &amp; IFE integration</span>
      </div>
    </div>
  </div>
</section>

<section class="border-y border-white/10 bg-[#090d10] py-20 text-white sm:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">Why it matters</p>
        <h2 class="mt-5 text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">IFE can prepare the passenger for what happens next.</h2>
      </div>
      <div class="space-y-8 text-lg leading-8 text-gray-300">
        <p>Traditional IFE is strongest at explaining the flight itself. The passenger still arrives with fragmented decisions ahead: a delayed train, rain after dinner, a congested transfer, an unsuitable venue, or a plan that no longer fits the time available.</p>
        <p>CabinTime extends the useful life of the seatback. It organizes arrival conditions before landing, explains why an option is recommended or should be reviewed, and lets the passenger continue the same journey context on mobile.</p>
        <p class="border-l-2 border-cyan-300 pl-6 text-xl font-medium leading-8 text-white">The passenger makes the final decision. CabinTime creates a state in which that decision can be made with clarity.</p>
      </div>
    </div>
  </div>
</section>

<section id="prototype" class="bg-[#050708] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Functional prototype evidence</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">Application-layer behavior you can evaluate today.</h2>
      </div>
      <p class="text-lg leading-8 text-gray-300">The current 1280 x 720 prototype demonstrates the seatback interaction model, journey-state orchestration, source-aware API aggregation, explainable decision output, offline state handling, and mobile handoff.</p>
    </div>

    <figure class="mt-12 overflow-hidden border border-white/10 bg-black shadow-2xl">
      <img src="{{ '/assets/images/cabintime/cabintime-ife-functional-demo.webp' | relative_url }}" alt="CabinTime functional IFE prototype showing an observed flight route near Tokyo, arrival time, connection state, weather and arrival planning navigation" class="block h-auto w-full" width="2200" height="1544" loading="lazy" decoding="async">
      <figcaption class="grid gap-3 border-t border-white/10 px-5 py-5 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:px-7">
        <span>ITM to HND scenario replay / observed route snapshot</span>
        <span class="sm:text-right">1280 x 720 touch UI / pre-arrival decision scenario</span>
      </figcaption>
    </figure>

    <div class="mt-10 grid grid-cols-1 border-y border-white/10 md:grid-cols-3">
      <div class="border-b border-white/10 py-7 md:border-b-0 md:border-r md:pr-8">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Implemented</p>
        <p class="mt-3 text-lg font-semibold">Touch-first IFE flow</p>
        <p class="mt-2 text-sm leading-6 text-gray-400">Live map, arrival brief, route comparison, food and after-plan review, and mobile continuation.</p>
      </div>
      <div class="border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-8">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Observable</p>
        <p class="mt-3 text-lg font-semibold">Network-state behavior</p>
        <p class="mt-2 text-sm leading-6 text-gray-400">Online, limited, and offline scenarios expose source freshness, cached state, and fallback behavior.</p>
      </div>
      <div class="py-7 md:pl-8">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Controlled evaluation</p>
        <p class="mt-3 text-lg font-semibold">Interactive build available</p>
        <p class="mt-2 text-sm leading-6 text-gray-400">Technical evaluation uses an interactive build to review navigation, connectivity states, arrival planning, and mobile continuity.</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#eef1f2] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Passenger journey</p>
    <h2 class="mt-5 max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">One journey state across seatback and mobile.</h2>
    <div class="mt-14 grid grid-cols-1 border-y border-black/15 lg:grid-cols-3">
      <div class="border-b border-black/15 py-8 lg:border-b-0 lg:border-r lg:pr-10">
        <p class="font-mono text-sm font-semibold text-[#126879]">01 / SEATBACK</p>
        <h3 class="mt-4 text-2xl font-semibold">Understand the arrival context.</h3>
        <p class="mt-4 leading-7 text-gray-600">Flight progress, destination weather, ground transport, official operator information, trip purpose, and passenger constraints are organized before landing.</p>
      </div>
      <div class="border-b border-black/15 py-8 lg:border-b-0 lg:border-r lg:px-10">
        <p class="font-mono text-sm font-semibold text-[#126879]">02 / ARRIVAL PLAN</p>
        <h3 class="mt-4 text-2xl font-semibold">Compare, explain, and decide.</h3>
        <p class="mt-4 leading-7 text-gray-600">Options are expressed as Recommend, Review, Keep, or Avoid, with source, freshness, reasoning, and uncertainty visible to the passenger.</p>
      </div>
      <div class="py-8 lg:pl-10">
        <p class="font-mono text-sm font-semibold text-[#126879]">03 / MOBILE CONTINUATION</p>
        <h3 class="mt-4 text-2xl font-semibold">Continue after leaving the aircraft.</h3>
        <p class="mt-4 leading-7 text-gray-600">The confirmed destination and journey context move to a passenger-controlled mobile session. Production pairing, expiry, authentication, and encryption remain deployment controls.</p>
      </div>
    </div>
  </div>
</section>

<section id="architecture" class="bg-[#081014] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="max-w-4xl">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Integration Architecture</p>
      <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">A defined application core. A replaceable platform edge.</h2>
      <p class="mt-7 text-lg leading-8 text-gray-300">CabinTime keeps journey logic, evidence, and user experience independent from a specific seatback runtime. A Platform Adapter translates partner-approved services into a stable Journey Contract.</p>
    </div>

    <div class="mt-14 overflow-x-auto border border-white/10 bg-black/20 p-6 sm:p-8">
      <div class="grid min-w-[920px] grid-cols-[1fr_80px_1.15fr_80px_1.2fr] items-stretch gap-3">
        <div class="border border-amber-200/25 bg-amber-100/[0.04] p-5">
          <p class="font-mono text-xs uppercase tracking-[0.16em] text-amber-200">Partner-controlled inputs</p>
          <p class="mt-4 font-semibold">IFE runtime and approved services</p>
          <p class="mt-3 text-sm leading-6 text-gray-400">Flight and operations data, passenger context, connectivity state, device I/O, approved content and policy.</p>
        </div>
        <div class="flex items-center justify-center font-mono text-xl text-gray-500" aria-hidden="true">--&gt;</div>
        <div class="border border-cyan-200/35 bg-cyan-100/[0.06] p-5">
          <p class="font-mono text-xs uppercase tracking-[0.16em] text-cyan-200">Platform Integration Boundary</p>
          <p class="mt-4 font-semibold">Platform Adapter</p>
          <p class="mt-3 text-sm leading-6 text-gray-300">Normalizes vendor APIs, event lifecycle, network state, secure storage, packaging hooks, and device capabilities.</p>
        </div>
        <div class="flex items-center justify-center font-mono text-xl text-gray-500" aria-hidden="true">--&gt;</div>
        <div class="border border-emerald-200/25 bg-emerald-100/[0.04] p-5">
          <p class="font-mono text-xs uppercase tracking-[0.16em] text-emerald-200">Application Boundary</p>
          <p class="mt-4 font-semibold">Journey Intelligence Core</p>
          <p class="mt-3 text-sm leading-6 text-gray-300">Journey State, decision orchestration, evidence, freshness, graceful degradation, IFE UX, and mobile continuity.</p>
        </div>
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
      <div class="border-t border-white/15 pt-7">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Responsibility Boundary</p>
        <h3 class="mt-4 text-2xl font-semibold">MarsLink owns the decision-support application layer.</h3>
        <p class="mt-4 leading-7 text-gray-400">Journey logic, information hierarchy, evidence presentation, source and freshness handling, offline behavior, passenger interaction, and cross-surface continuity remain within the CabinTime application boundary.</p>
      </div>
      <div class="border-t border-white/15 pt-7">
        <p class="font-mono text-xs uppercase tracking-[0.18em] text-gray-500">Deployment Boundary</p>
        <h3 class="mt-4 text-2xl font-semibold">The platform partner controls the certified runtime.</h3>
        <p class="mt-4 leading-7 text-gray-400">Vendor SDK access, aircraft and operations data contracts, device I/O, packaging, signing, certification, airline security review, and deployment approval remain partner-controlled integration gates.</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#f7f8f8] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Data Contracts &amp; Interfaces</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">Every decision carries context, evidence, and time.</h2>
        <p class="mt-6 leading-7 text-gray-600">The Journey Contract separates official information, observed conditions, scenario assumptions, and AI-assisted judgment. Missing information remains unknown rather than being inferred as fact.</p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr class="border-b border-black/25 font-mono text-xs uppercase tracking-[0.14em] text-gray-500">
              <th class="py-4 pr-5 font-medium">Contract field</th>
              <th class="py-4 pr-5 font-medium">Purpose</th>
              <th class="py-4 font-medium">Required behavior</th>
            </tr>
          </thead>
          <tbody class="text-sm leading-6">
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">source</td><td class="py-5 pr-5">Origin of a fact or signal</td><td class="py-5 text-gray-600">Visible and attributable</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">observed_at</td><td class="py-5 pr-5">Time of observation</td><td class="py-5 text-gray-600">Preserved through aggregation</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">freshness</td><td class="py-5 pr-5">Live, recent, cached, or stale state</td><td class="py-5 text-gray-600">Changes language and confidence</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">evidence</td><td class="py-5 pr-5">Reason behind an option</td><td class="py-5 text-gray-600">Inspectable by the passenger</td></tr>
            <tr class="border-b border-black/10"><td class="py-5 pr-5 font-mono font-semibold">confidence</td><td class="py-5 pr-5">Strength of current support</td><td class="py-5 text-gray-600">Reduced when data degrades</td></tr>
            <tr><td class="py-5 pr-5 font-mono font-semibold">human_confirmation_required</td><td class="py-5 pr-5">Final-decision control</td><td class="py-5 text-gray-600">True for consequential actions</td></tr>
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
      <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">Useful behavior under imperfect connectivity.</h2>
      <p class="mt-7 text-lg leading-8 text-gray-300">CabinTime treats connectivity as runtime state, not a binary assumption. Data freshness, available actions, and recommendation confidence change together.</p>
    </div>

    <div class="mt-14 divide-y divide-white/10 border-y border-white/10">
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-emerald-200">ONLINE</p><p class="font-semibold">Current APIs and cloud services</p><p class="text-sm leading-6 text-gray-400">Refresh current signals, preserve provenance, and update the Journey State.</p></div>
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-cyan-200">LIMITED</p><p class="font-semibold">Delayed or bandwidth-constrained</p><p class="text-sm leading-6 text-gray-400">Prioritize text, reduce media, apply differential sync, and disclose reduced freshness.</p></div>
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-amber-200">OFFLINE</p><p class="font-semibold">No external connection</p><p class="text-sm leading-6 text-gray-400">Use approved cached bundles, disable unsupported actions, and queue permitted updates for reconnect.</p></div>
      <div class="grid gap-4 py-7 sm:grid-cols-[140px_1fr_1fr] sm:items-start"><p class="font-mono text-sm font-semibold text-rose-200">STALE</p><p class="font-semibold">Information beyond its validity window</p><p class="text-sm leading-6 text-gray-400">Show a freshness warning, lower confidence, avoid definitive language, and request revalidation.</p></div>
    </div>

    <p class="mt-8 border-l-2 border-amber-300 pl-6 text-sm leading-6 text-gray-400">The functional prototype demonstrates network-state transitions and fallback behavior. Production cache policy, update channels, reconnect queues, and approved offline bundles are defined with the platform partner.</p>
  </div>
</section>

<section class="bg-[#e8edef] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Security &amp; Privacy Model</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">Trust is an explicit boundary.</h2>
        <p class="mt-7 text-lg leading-8 text-gray-600">CabinTime is designed as a passenger-facing application layer, isolated from aircraft safety and flight-control systems. Production interfaces are expected to be partner-approved and read-only unless explicitly authorized.</p>
      </div>
      <div class="divide-y divide-black/10 border-y border-black/15">
        <div class="py-6"><h3 class="text-lg font-semibold">Security &amp; Trust Boundary</h3><p class="mt-2 text-sm leading-6 text-gray-600">No command path to safety-critical aircraft systems. Runtime permissions and device access remain platform-controlled.</p></div>
        <div class="py-6"><h3 class="text-lg font-semibold">Data minimization</h3><p class="mt-2 text-sm leading-6 text-gray-600">Use the minimum journey context required for a decision. Separate passenger preferences from official operational information.</p></div>
        <div class="py-6"><h3 class="text-lg font-semibold">Session continuity</h3><p class="mt-2 text-sm leading-6 text-gray-600">Production handoff requires short-lived pairing, encryption in transit and at rest, explicit expiry, and revocation behavior.</p></div>
        <div class="py-6"><h3 class="text-lg font-semibold">Assurance and auditability</h3><p class="mt-2 text-sm leading-6 text-gray-600">Model and rule versions, source timestamps, fallback state, and recommendation evidence are retained for reproducibility.</p></div>
      </div>
    </div>
    <p class="mt-10 text-sm leading-6 text-gray-500">Production integration applies these controls to the IFE platform's security requirements and the airline's operating requirements.</p>
  </div>
</section>

<section id="readiness" class="bg-[#06090b] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="max-w-4xl">
      <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Certification &amp; Deployment Readiness</p>
      <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">A clear path from application proof to approved deployment.</h2>
      <p class="mt-7 text-lg leading-8 text-gray-300">The current CabinTime prototype validates the application-layer UX, decision orchestration, API aggregation, and offline state handling. Seatback runtime integration is defined as a separate platform-adapter boundary.</p>
    </div>

    <div class="mt-14 overflow-x-auto">
      <table class="w-full min-w-[820px] border-collapse text-left">
        <thead><tr class="border-b border-white/20 font-mono text-xs uppercase tracking-[0.14em] text-gray-500"><th class="py-4 pr-6 font-medium">Boundary</th><th class="py-4 pr-6 font-medium">Current position</th><th class="py-4 font-medium">Next gate</th></tr></thead>
        <tbody class="text-sm leading-6">
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-emerald-200">Application Boundary</td><td class="py-6 pr-6">Functional browser prototype, 1280 x 720 touch UX, decision and evidence layer, API and fallback adapters</td><td class="py-6 text-gray-400">Partner review of UX and functional scope</td></tr>
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-cyan-200">Data Boundary</td><td class="py-6 pr-6">Journey Contract, provenance, freshness, cached state, explicit demo-data labels</td><td class="py-6 text-gray-400">Approved aircraft, operations, content, and passenger data contracts</td></tr>
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-amber-200">Platform Integration Boundary</td><td class="py-6 pr-6">Adapter interface and integration responsibilities defined</td><td class="py-6 text-gray-400">Vendor SDK, lifecycle, storage, device I/O, and network-service implementation</td></tr>
          <tr class="border-b border-white/10"><td class="py-6 pr-6 font-semibold text-rose-200">Security &amp; Trust Boundary</td><td class="py-6 pr-6">Production control model and isolation requirements defined</td><td class="py-6 text-gray-400">Threat model, security review, privacy review, and partner validation</td></tr>
          <tr><td class="py-6 pr-6 font-semibold text-violet-200">Deployment Boundary</td><td class="py-6 pr-6">Pre-pilot; integration boundaries and evaluation scope defined</td><td class="py-6 text-gray-400">Packaging, signing, certification, airline approval, hardware validation, and release operations</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="bg-[#f7f8f8] py-20 text-[#101820] sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#126879]">Evaluation path</p>
    <h2 class="mt-5 max-w-4xl text-3xl font-semibold tracking-normal sm:text-5xl">Define the integration before promising the deployment.</h2>
    <div class="mt-14 grid grid-cols-1 border-y border-black/15 md:grid-cols-3">
      <div class="border-b border-black/15 py-8 md:border-b-0 md:border-r md:pr-8"><p class="font-mono text-sm font-semibold text-[#126879]">01</p><h3 class="mt-4 text-xl font-semibold">Technical evaluation</h3><p class="mt-3 text-sm leading-6 text-gray-600">Review the functional prototype, data boundaries, offline behavior, target hardware, and approved runtime capabilities.</p></div>
      <div class="border-b border-black/15 py-8 md:border-b-0 md:border-r md:px-8"><p class="font-mono text-sm font-semibold text-[#126879]">02</p><h3 class="mt-4 text-xl font-semibold">Integration workshop</h3><p class="mt-3 text-sm leading-6 text-gray-600">Map vendor APIs, lifecycle events, security controls, data contracts, packaging, signing, and operational ownership.</p></div>
      <div class="py-8 md:pl-8"><p class="font-mono text-sm font-semibold text-[#126879]">03</p><h3 class="mt-4 text-xl font-semibold">Pilot definition</h3><p class="mt-3 text-sm leading-6 text-gray-600">Agree the route, passenger cohort, hardware environment, success metrics, fallback plan, review gates, and deployment responsibilities.</p></div>
    </div>
  </div>
</section>

<section class="bg-[#071116] py-20 text-white sm:py-28">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
      <div class="max-w-4xl">
        <p class="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Work with MarsLink</p>
        <h2 class="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">Evaluate CabinTime as an IFE application and integration program.</h2>
        <p class="mt-7 max-w-3xl text-lg leading-8 text-gray-300">We welcome technical evaluation with airlines, IFE platform providers, and cabin-connectivity teams. The first conversation is about fit, interfaces, constraints, and evidence.</p>
      </div>
      <a href="{{ '/contact/' | relative_url }}" class="inline-flex min-h-12 items-center justify-center border border-white bg-white px-7 py-3 text-sm font-semibold text-[#101820] transition hover:bg-cyan-100">Start an integration conversation</a>
    </div>
    <div class="mt-14 border-t border-white/10 pt-6 text-sm leading-6 text-gray-500">
      Current phase: Functional prototype / Pre-pilot. The next steps are technical evaluation, integration workshops, and pilot definition.
    </div>
  </div>
</section>
