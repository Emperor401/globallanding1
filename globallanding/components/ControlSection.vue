<template>
  <section class="control-section">
    <div class="control-inner">

      <!-- App icon — video -->
      <div ref="iconRef" class="control-icon">
        <video
          class="control-icon-video"
          :src="iconVideo"
          autoplay
          loop
          muted
          
          playsinline
          preload="auto"
        />
        <div class="icon-bottom-glow" />
      </div>

      <!-- Heading -->
      <h2 ref="headingRef" class="control-heading">Everything in your control</h2>

      <!-- Subtitle -->
      <p ref="subRef" class="control-sub">
        All the features you need to manage your finances, monitor with detailed analytics,<br />
        and protect your assets — without the friction.
      </p>

      <!-- Feature tab cards -->
      <div ref="cardsRef" class="feature-cards">
        <div
          v-for="(card, i) in cards"
          :key="card.label"
          class="feature-card"
          :class="{ 'feature-card--active': activeTab === i }"
          @click="activeTab = i"
        >
          <span v-html="card.icon" class="card-icon-ri" />
          <span class="card-label">{{ card.label }}</span>
        </div>
      </div>

      <!-- Big content box -->
      <div ref="boxRef" class="content-box">

        <!-- Top bar -->
        <div class="box-topbar">
          <div class="topbar-left">
            <div class="brand-icon">G</div>
            <span class="brand-name">GlobalGle</span>
            <span class="brand-badge">Pro</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="topbar-center">
            <span class="topbar-breadcrumb">
              {{ tabBreadcrumb[activeTab] }}
            </span>
            <div class="topbar-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search or type a command...
              <span class="search-kbd">⌘ Space</span>
            </div>
          </div>
          <div class="topbar-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <div class="topbar-avatar">D</div>
            <div class="topbar-user">
              <span class="topbar-name">Daniel</span>
              <span class="topbar-email">globalgle@gmail.com</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </div>
        </div>

        <!-- Box body -->
        <div class="box-body">

          <!-- Grouped sidebar -->
          <aside class="box-sidebar">
            <div class="sb-group-label">GO MENU</div>
            <div class="sidebar-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Dashboard
            </div>

            <div class="sb-group-label">TOOLS</div>
            <div class="sidebar-item" :class="{ 'sidebar-item--active': activeTab === 2 }" @click="activeTab = 2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Mailing
            </div>
            <div class="sidebar-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              Websites
            </div>
            <div class="sidebar-item sidebar-item--has-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              Generator
              <span class="sb-tag">TOOLS</span>
            </div>
            <div class="sidebar-item sidebar-item--has-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Digital
              <span class="sb-tag">TOOLS</span>
            </div>

            <div class="sb-group-label">SYSTEM</div>
            <div class="sidebar-item" :class="{ 'sidebar-item--active': activeTab === 0 || activeTab === 1 }" @click="activeTab = 0">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              My Wallet
              <span v-if="activeTab === 0 || activeTab === 1" class="sb-count">₦0</span>
            </div>
            <div class="sidebar-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Billing &amp; Plans
            </div>
            <div class="sidebar-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
              Tutorials
            </div>
          </aside>

          <!-- Main content -->
          <div class="box-main">
            <Transition name="tab-fade" mode="out-in">

              <!-- Tab 0: My Wallet -->
              <div v-if="activeTab === 0" key="my-wallet" class="tab-content">
                <div class="wallet-header">
                  <div>
                    <h3 class="wallet-title">Wallet</h3>
                    <p class="wallet-sub">Top up your balance to pay for plans and other on-platform charges.</p>
                  </div>
                  <div class="wallet-actions">
                    <button class="btn-switch">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
                      Switch Plan
                    </button>
                    <button class="btn-add-funds">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      Add Funds
                    </button>
                  </div>
                </div>

                <div class="balance-cards">
                  <div class="balance-card">
                    <div class="bc-top">
                      <span class="bc-label">BALANCE</span>
                      <div class="bc-icon bc-icon--orange">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                      </div>
                    </div>
                    <p class="bc-value">₦0</p>
                    <p class="bc-desc">Available to spend</p>
                  </div>
                  <div class="balance-card">
                    <div class="bc-top">
                      <span class="bc-label">TOTAL SPENT</span>
                      <div class="bc-icon bc-icon--blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                      </div>
                    </div>
                    <p class="bc-value">₦0</p>
                    <p class="bc-desc">This billing cycle</p>
                  </div>
                  <div class="balance-card">
                    <div class="bc-top">
                      <span class="bc-label">PLAN</span>
                      <div class="bc-icon bc-icon--purple">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </div>
                    </div>
                    <p class="bc-value bc-plan">Starter</p>
                    <p class="bc-desc bc-link">View plan details →</p>
                  </div>
                </div>

                <div class="auto-topup">
                  <div class="auto-topup-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    <div>
                      <p class="auto-label">Auto top-up</p>
                      <p class="auto-desc">Automatically add ₦5,000 when balance falls below ₦500</p>
                    </div>
                  </div>
                  <div class="toggle-track"><div class="toggle-thumb" /></div>
                </div>

                <div class="tx-header">
                  <span class="tx-title">Transactions</span>
                  <div class="tx-tabs">
                    <span class="tx-tab tx-tab--active">All</span>
                    <span class="tx-tab">Top-ups</span>
                    <span class="tx-tab">Plan Payments</span>
                    <span class="tx-tab">Service Charges</span>
                  </div>
                </div>
                <div class="tx-empty">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                  <p class="tx-empty-text">No transactions yet</p>
                </div>
              </div>

              <!-- Tab 1: Wallet Funding -->
              <div v-else-if="activeTab === 1" key="wallet-funding" class="tab-content">

                <div class="wf-back">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                  Back to Tools
                </div>

                <div class="wf-heading-row">
                  <div class="wf-heading-left">
                    <div class="wf-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                    </div>
                    <div>
                      <div class="wf-title-row">
                        <h3 class="wf-title">Wallet Funding</h3>
                        <span class="wf-badge">WEB3 ONLY</span>
                      </div>
                      <p class="wf-sub">Pure pay-as-you-go on your plan — every funding request is charged from your wallet balance.</p>
                    </div>
                  </div>
                  <button class="wf-history-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 1 0 .5-4.5"/><polyline points="3 3 3 11 11 11"/></svg>
                    History
                  </button>
                </div>

                <div class="wf-info-card">
                  <div class="wf-info-left">
                    <p class="wf-plan-label">THIS MONTH ON STARTER</p>
                    <p class="wf-free"><span class="wf-free-val">$0</span> free funding left</p>
                    <p class="wf-plan-desc">Pure pay-as-you-go on this plan — every request comes out of your wallet balance.</p>
                  </div>
                  <div class="wf-info-right">
                    <p class="wf-bal-label">Wallet balance</p>
                    <p class="wf-bal-val">₦0</p>
                    <button class="btn-fund-wallet">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      Fund Wallet
                    </button>
                  </div>
                </div>

                <div class="wf-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2" style="flex-shrink:0"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <p class="wf-warn-text">You get a <span class="wf-highlight">20% discount</span> on the wallet charge once you fund <span class="wf-highlight">$500,000</span> or above in a single request. Smaller requests pay the full overage rate.</p>
                </div>

                <p class="wf-providers-label">SELECT A FUNDING PROVIDER</p>
                <div class="wf-providers-grid">
                  <div class="wf-provider" v-for="p in fundingProviders" :key="p.name">
                    <div class="wf-provider-logo" :style="{ background: p.color }">{{ p.initial }}</div>
                    <div class="wf-provider-info">
                      <p class="wf-provider-name">{{ p.name }}</p>
                      <p class="wf-provider-coins">{{ p.coins }} coin{{ p.coins > 1 ? 's' : '' }} available</p>
                    </div>
                    <div class="wf-provider-tags">
                      <span class="wf-coin-tag" v-for="t in p.tags" :key="t">{{ t }}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>

              </div>

              <!-- Tab 2: Crypto Mails -->
              <div v-else key="crypto-mails" class="tab-content">

                <div class="cm-back-row">
                  <button class="cm-back-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                    Back
                  </button>
                </div>

                <div class="cm-heading-row">
                  <div>
                    <h3 class="cm-title">Crypto Mails</h3>
                    <p class="cm-sub">Pick a provider to send a brand-styled deposit / transaction email.</p>
                  </div>
                </div>

                <div class="cm-grid">
                  <div class="cm-card" v-for="p in mailProviders" :key="p.name" :style="{ '--border-color': p.borderColor }">
                    <div class="cm-card-top">
                      <span class="cm-badge" :style="{ background: p.badgeColor }">{{ p.badge }}</span>
                    </div>
                    <div class="cm-logo-wrap" :style="{ background: p.logoBg }">
                      <span class="cm-logo-letter" :style="{ color: p.logoColor }">{{ p.initial }}</span>
                    </div>
                    <p class="cm-name">{{ p.name }}</p>
                    <p class="cm-tagline">{{ p.tagline }}</p>
                    <p class="cm-click">Click Anywhere</p>
                  </div>
                </div>

              </div>

            </Transition>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const iconRef    = ref<HTMLElement | null>(null)
const iconVideo  = '/world2.mp4'
const headingRef = ref<HTMLElement | null>(null)
const subRef     = ref<HTMLElement | null>(null)
const cardsRef   = ref<HTMLElement | null>(null)
const boxRef     = ref<HTMLElement | null>(null)
const activeTab  = ref(1)

const tabBreadcrumb = [
  'My Wallet / Your balance and transactions',
  'Wallet Funding / Crypto wallet top-ups',
  'Crypto Mails / Pick a provider to send a brand-styled email',
]

const mailProviders = [
  { name: 'Binance',        tagline: 'Binance Sets the Standard',         badge: 'GLOBAL',       badgeColor: '#c2410c', borderColor: '#c2410c', logoBg: '#1a1000', logoColor: '#f0b90b', initial: 'B' },
  { name: 'Coinbase',       tagline: 'Coinbase, Accessible and Simple',   badge: 'GOLD',         badgeColor: '#3b82f6', borderColor: '#3b82f6', logoBg: '#001230', logoColor: '#0052ff', initial: 'C' },
  { name: 'Kraken',         tagline: 'Kraken, Trusted by Pros',           badge: 'PRO',          badgeColor: '#a855f7', borderColor: '#a855f7', logoBg: '#12002a', logoColor: '#7c5cc7', initial: 'K' },
  { name: 'Blockchain.com', tagline: 'Blockchain, the Original',          badge: 'PREMIUM',      badgeColor: '#06b6d4', borderColor: '#06b6d4', logoBg: '#001520', logoColor: '#ff2b5e', initial: 'B' },
  { name: 'Bitcoin.com',    tagline: 'Bitcoin, Reimagined',               badge: 'PIONEER',      badgeColor: '#c2410c', borderColor: '#f59e0b', logoBg: '#1a0e00', logoColor: '#f7931a', initial: 'B' },
  { name: 'ByBit',          tagline: 'Bybit, Speed and Precision',        badge: 'SPEED',        badgeColor: '#3b82f6', borderColor: '#c2410c', logoBg: '#111111', logoColor: '#ffffff', initial: 'B' },
  { name: 'MetaMask',       tagline: 'MetaMask, the Gateway',             badge: 'PROFESSIONAL', badgeColor: '#c2410c', borderColor: '#9a3412', logoBg: '#1a0800', logoColor: '#f6851b', initial: 'M' },
  { name: 'OKX',            tagline: 'OKX, Powerful. Secure. Global.',    badge: 'POWERHOUSE',   badgeColor: '#444444', borderColor: '#2a2a2a', logoBg: '#0d0d0d', logoColor: '#ffffff', initial: 'O' },
]

const fundingProviders = [
  { name: 'Binance Funding',  initial: 'B', color: '#f0b90b', coins: 2, tags: ['BTC', 'ETH'] },
  { name: 'Trust Wallet F...', initial: 'T', color: '#3375bb', coins: 3, tags: ['BTC', 'ETH', 'BNB'] },
  { name: 'Gate.io Fun...',   initial: 'G', color: '#2354e6', coins: 3, tags: ['BTC', 'ETH', 'USDT'] },
  { name: 'Coinbase',         initial: 'C', color: '#0052ff', coins: 1, tags: ['BTC'] },
  { name: 'Kucoin',           initial: 'K', color: '#00a651', coins: 2, tags: ['BTC', 'ETH'] },
]

const cards = [
  {
    label: 'Intuitive analytics',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>`,
  },
  {
    label: 'Full visibility',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    label: 'Secure authentication',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  },
]


const { $gsap } = useNuxtApp()

onMounted(() => {
  const els = [iconRef.value, headingRef.value, subRef.value]
  els.forEach((el, i) => {
    if (!el) return
    $gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 24, opacity: 0, filter: 'blur(10px)',
      duration: 1, ease: 'power3.out', delay: i * 0.13,
      onComplete: () => { if (el) (el as HTMLElement).style.filter = 'none' },
    })
  })
  if (cardsRef.value) {
    $gsap.from(cardsRef.value.children, {
      scrollTrigger: { trigger: cardsRef.value, start: 'top 88%' },
      y: 20, opacity: 0, filter: 'blur(10px)',
      duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.2,
      onComplete: () => {
        Array.from(cardsRef.value!.children).forEach(el => { (el as HTMLElement).style.filter = 'none' })
      },
    })
  }
  if (boxRef.value) {
    $gsap.from(boxRef.value, {
      scrollTrigger: { trigger: boxRef.value, start: 'top 85%' },
      y: 40, opacity: 0, filter: 'blur(14px)',
      duration: 1.1, ease: 'power3.out', delay: 0.3,
      onComplete: () => { if (boxRef.value) boxRef.value.style.filter = 'none' },
    })
  }
})
</script>

<style scoped>
.control-section { background: #0a0a0a; padding: 8rem 2rem; }

.control-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.control-icon {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 32px;
  overflow: hidden;
  background: linear-gradient(160deg, #071412 0%, #040d0c 100%);
  border: 1px solid rgba(20, 210, 180, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.control-icon-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.icon-bottom-glow {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 210, 170, 0.22) 0%, transparent 100%);
  pointer-events: none;
  border-radius: 0 0 32px 32px;
}

.control-heading {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 700; color: #ffffff;
  letter-spacing: -1.5px; line-height: 1.1; margin: 0;
}

.control-sub {
  font-size: 0.95rem; color: rgba(255,255,255,0.45);
  line-height: 1.75; margin: 0; max-width: 560px;
}

/* Tab cards */
.feature-cards {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem; width: 100%;
}

.feature-card {
  display: flex; align-items: center; gap: 0.85rem;
  padding: 1rem 1.25rem;
  height: 68px;
  background: #0e0e0e;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  position: relative;
  overflow: hidden;
}

/* Rotating orange border light */
.feature-card::before {
  content: '';
  position: absolute;
  width: 280%;
  height: 280%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  background: conic-gradient(
    transparent 0deg,
    transparent 260deg,
    rgba(194, 65, 12, 0.15) 270deg,
    rgba(194, 65, 12, 1) 285deg,
    rgba(234, 88, 12, 1) 292deg,
    rgba(194, 65, 12, 1) 300deg,
    rgba(194, 65, 12, 0.15) 310deg,
    transparent 325deg
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  animation: border-chase 4.5s linear infinite;
  animation-play-state: paused;
  z-index: 0;
}

/* Inner background overlay — sits above gradient, below content */
.feature-card::after {
  content: '';
  position: absolute;
  inset: 1px;
  background: #0e0e0e;
  border-radius: 13px;
  z-index: 1;
}

.feature-card--active::after { background: #141414; }

.feature-card--active::before {
  opacity: 1;
  animation-play-state: running;
}

.feature-card--active { background: #141414; border-color: rgba(255,255,255,0.18); }
.feature-card:hover   { background: #131313; border-color: rgba(255,255,255,0.12); }

@keyframes border-chase {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

.card-icon-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.6);
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

.feature-card--active .card-icon-ri {
  color: #ffffff;
}

.card-label {
  font-size: 0.88rem; font-weight: 600;
  color: rgba(255,255,255,0.6); text-align: left;
  position: relative;
  z-index: 2;
}

.feature-card--active .card-label { color: #ffffff; }

/* Big content box */
.content-box {
  width: 100%;
  background: #111111;
  border: 1px solid rgba(255,255,255,0.08);
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  position: relative;
}
.content-box::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, #0a0a0a);
  pointer-events: none;
  z-index: 10;
}

/* ── Top bar ── */
.box-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.6rem 1.1rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  gap: 1rem;
}

.topbar-left { display: flex; align-items: center; gap: 0.45rem; flex-shrink: 0; }

.brand-icon {
  width: 22px; height: 22px; border-radius: 5px;
  background: #222; border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.68rem; font-weight: 800; color: #fff;
}

.brand-name { font-size: 0.82rem; font-weight: 600; color: rgba(255,255,255,0.85); }

.brand-badge {
  font-size: 0.6rem; font-weight: 600; padding: 0.12rem 0.4rem;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px; color: rgba(255,255,255,0.45);
}

.topbar-center {
  flex: 1; display: flex; align-items: center; gap: 0.75rem;
  justify-content: center; min-width: 0;
}

.topbar-breadcrumb {
  font-size: 0.75rem; color: rgba(255,255,255,0.5); white-space: nowrap;
}

.topbar-search {
  display: flex; align-items: center; gap: 0.45rem;
  padding: 0.3rem 0.65rem; background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07); border-radius: 7px;
  font-size: 0.72rem; color: rgba(255,255,255,0.3); white-space: nowrap;
}

.search-kbd {
  margin-left: 0.35rem; font-size: 0.65rem;
  padding: 0.1rem 0.35rem; border-radius: 4px;
  background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35);
}

.topbar-right {
  display: flex; align-items: center; gap: 0.65rem; flex-shrink: 0;
}

.topbar-avatar {
  width: 22px; height: 22px; border-radius: 50%;
  background: linear-gradient(135deg, #c2410c, #9a3412);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.65rem; font-weight: 700; color: #fff;
}

.topbar-user { display: flex; flex-direction: column; }
.topbar-name  { font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.85); line-height: 1.2; }
.topbar-email { font-size: 0.65rem; color: rgba(255,255,255,0.35); line-height: 1.2; }

/* ── Box body ── */
.box-body { display: flex; }

/* ── Grouped Sidebar ── */
.box-sidebar {
  width: 170px; flex-shrink: 0;
  border-right: 1px solid rgba(255,255,255,0.06);
  padding: 0.85rem 0.5rem;
  display: flex; flex-direction: column; gap: 0.05rem;
}

.sb-group-label {
  font-size: 0.62rem; font-weight: 600; letter-spacing: 0.7px;
  color: rgba(255,255,255,0.22); text-transform: uppercase;
  padding: 0.5rem 0.75rem 0.3rem;
}

.sidebar-item {
  display: flex; align-items: center; gap: 0.55rem;
  padding: 0.45rem 0.75rem; border-radius: 7px;
  font-size: 0.78rem; font-weight: 450; color: rgba(255,255,255,0.4);
  cursor: pointer; transition: background 0.15s, color 0.15s;
  position: relative;
}

.sidebar-item--active { background: rgba(255,255,255,0.08); color: #ffffff; }
.sidebar-item:hover:not(.sidebar-item--active) { color: rgba(255,255,255,0.7); }

.sidebar-item--has-tag { padding-right: 0.5rem; }

.sb-tag {
  margin-left: auto; font-size: 0.57rem; font-weight: 600; letter-spacing: 0.4px;
  padding: 0.1rem 0.35rem; border-radius: 4px;
  background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35);
}

.sb-count {
  margin-left: auto; font-size: 0.68rem; font-weight: 600;
  padding: 0.1rem 0.4rem; border-radius: 5px;
  background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.5);
}

/* ── Main content ── */
.box-main { flex: 1; padding: 1.25rem 1.4rem; min-height: 460px; overflow: hidden; }


/* ── Wallet tab ── */
.wallet-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 1.1rem; gap: 1rem;
}

.wallet-title { font-size: 1.3rem; font-weight: 700; color: #ffffff; margin: 0 0 0.2rem; }
.wallet-sub   { font-size: 0.75rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 340px; line-height: 1.5; }

.wallet-actions { display: flex; align-items: center; gap: 0.6rem; flex-shrink: 0; }

.btn-switch {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  background: transparent; border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px; color: rgba(255,255,255,0.7);
  font-size: 0.75rem; font-weight: 500; cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.btn-switch:hover { border-color: rgba(255,255,255,0.25); color: #fff; }

.btn-add-funds {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  background: #c2410c; border: none; border-radius: 8px;
  color: #ffffff; font-size: 0.75rem; font-weight: 600; cursor: pointer;
  transition: background 0.2s;
}
.btn-add-funds:hover { background: #9a3412; }

/* Balance cards */
.balance-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.65rem; margin-bottom: 0.85rem; }

.balance-card {
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px; padding: 0.9rem 1rem;
}

.bc-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.55rem; }
.bc-label { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase; color: rgba(255,255,255,0.35); }

.bc-icon {
  width: 26px; height: 26px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
}
.bc-icon--orange { background: rgba(249,115,22,0.15); color: #c2410c; }
.bc-icon--blue   { background: rgba(59,130,246,0.15); color: #60a5fa; }
.bc-icon--purple { background: rgba(139,92,246,0.15); color: #a78bfa; }

.bc-value { font-size: 1.4rem; font-weight: 700; color: #ffffff; margin: 0 0 0.25rem; }
.bc-plan  { font-size: 1.1rem; }
.bc-desc  { font-size: 0.7rem; color: rgba(255,255,255,0.3); margin: 0; }
.bc-link  { color: #c2410c; cursor: pointer; }

/* Auto top-up */
.auto-topup {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.75rem 1rem;
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; margin-bottom: 0.85rem; gap: 1rem;
}

.auto-topup-left { display: flex; align-items: center; gap: 0.75rem; }
.auto-label { font-size: 0.8rem; font-weight: 600; color: #ffffff; margin: 0 0 0.1rem; }
.auto-desc  { font-size: 0.7rem; color: rgba(255,255,255,0.35); margin: 0; }

.toggle-track {
  width: 36px; height: 20px; flex-shrink: 0;
  background: rgba(255,255,255,0.1); border-radius: 999px;
  position: relative;
}
.toggle-track .toggle-thumb {
  position: absolute; top: 3px; left: 3px;
  width: 14px; height: 14px;
  background: rgba(255,255,255,0.4); border-radius: 50%;
}

/* Transactions */
.tx-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 0.65rem;
}
.tx-title { font-size: 0.88rem; font-weight: 700; color: #ffffff; }

.tx-tabs { display: flex; align-items: center; gap: 0.35rem; }

.tx-tab {
  padding: 0.25rem 0.65rem; border-radius: 6px;
  font-size: 0.7rem; font-weight: 500; color: rgba(255,255,255,0.4);
  cursor: pointer; transition: background 0.15s, color 0.15s;
}

.tx-tab--active {
  background: #c2410c; color: #ffffff;
}

.tx-tab:not(.tx-tab--active):hover { color: rgba(255,255,255,0.7); }

.tx-empty {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 2rem 1rem; gap: 0.6rem;
  border: 1px solid rgba(255,255,255,0.05); border-radius: 10px;
  background: #0d0d0d;
}
.tx-empty-text { font-size: 0.78rem; color: rgba(255,255,255,0.25); margin: 0; }

/* ── Wallet Funding tab ── */
.wf-back {
  display: inline-flex; align-items: center; gap: 0.35rem;
  font-size: 0.72rem; color: rgba(255,255,255,0.4);
  margin-bottom: 0.85rem; cursor: pointer;
  transition: color 0.15s;
}
.wf-back:hover { color: rgba(255,255,255,0.75); }

.wf-heading-row {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 1rem; margin-bottom: 0.85rem;
}

.wf-heading-left { display: flex; align-items: flex-start; gap: 0.75rem; }

.wf-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.2);
  display: flex; align-items: center; justify-content: center;
}

.wf-title-row { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; }
.wf-title { font-size: 1rem; font-weight: 700; color: #ffffff; margin: 0; }

.wf-badge {
  font-size: 0.58rem; font-weight: 700; letter-spacing: 0.5px;
  padding: 0.15rem 0.45rem; border-radius: 4px;
  background: rgba(249,115,22,0.15); border: 1px solid rgba(249,115,22,0.3);
  color: #c2410c;
}

.wf-sub { font-size: 0.72rem; color: rgba(255,255,255,0.38); margin: 0; line-height: 1.5; max-width: 340px; }

.wf-history-btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.38rem 0.8rem; flex-shrink: 0;
  background: transparent; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px; color: rgba(255,255,255,0.6);
  font-size: 0.72rem; font-weight: 500; cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.wf-history-btn:hover { border-color: rgba(255,255,255,0.22); color: #fff; }

.wf-info-card {
  display: flex; align-items: flex-end; justify-content: space-between;
  padding: 1rem 1.1rem;
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; margin-bottom: 0.6rem; gap: 1rem;
}

.wf-plan-label { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin: 0 0 0.35rem; }
.wf-free { font-size: 0.82rem; color: rgba(255,255,255,0.6); margin: 0 0 0.3rem; }
.wf-free-val { font-size: 1.3rem; font-weight: 700; color: #ffffff; }
.wf-plan-desc { font-size: 0.68rem; color: rgba(255,255,255,0.3); margin: 0; max-width: 280px; line-height: 1.5; }

.wf-info-right { display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; flex-shrink: 0; }
.wf-bal-label { font-size: 0.65rem; color: rgba(255,255,255,0.3); margin: 0; }
.wf-bal-val   { font-size: 1.1rem; font-weight: 700; color: #ffffff; margin: 0; }

.btn-fund-wallet {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.42rem 0.9rem;
  background: #c2410c; border: none; border-radius: 7px;
  color: #ffffff; font-size: 0.75rem; font-weight: 600; cursor: pointer;
  transition: background 0.2s;
}
.btn-fund-wallet:hover { background: #9a3412; }

.wf-warning {
  display: flex; align-items: flex-start; gap: 0.6rem;
  padding: 0.7rem 0.9rem;
  background: rgba(249,115,22,0.05); border: 1px solid rgba(249,115,22,0.18);
  border-radius: 8px; margin-bottom: 0.85rem;
}
.wf-warn-text { font-size: 0.7rem; color: rgba(255,255,255,0.45); margin: 0; line-height: 1.55; }
.wf-highlight { color: #c2410c; font-weight: 600; }

.wf-providers-label {
  font-size: 0.6rem; font-weight: 600; letter-spacing: 0.7px;
  text-transform: uppercase; color: rgba(255,255,255,0.25);
  margin: 0 0 0.55rem;
}

.wf-providers-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.wf-provider {
  display: flex; align-items: center; gap: 0.65rem;
  padding: 0.65rem 0.8rem;
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 9px; cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}
.wf-provider:hover { border-color: rgba(255,255,255,0.14); background: #121212; }

.wf-provider-logo {
  width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800; color: #fff;
}

.wf-provider-info { flex: 1; min-width: 0; }
.wf-provider-name  { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.85); margin: 0 0 0.1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wf-provider-coins { font-size: 0.65rem; color: rgba(255,255,255,0.3); margin: 0; }

.wf-provider-tags { display: flex; align-items: center; gap: 0.25rem; flex-shrink: 0; }
.wf-coin-tag {
  font-size: 0.6rem; font-weight: 600; padding: 0.1rem 0.35rem;
  background: rgba(255,255,255,0.07); border-radius: 4px;
  color: rgba(255,255,255,0.45);
}

/* ── Crypto Mails tab ── */
.cm-back-row { margin-bottom: 0.6rem; }
.cm-back-btn {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px; color: rgba(255,255,255,0.5);
  font-size: 0.72rem; cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}
.cm-back-btn:hover { color: #fff; border-color: rgba(255,255,255,0.18); }

.cm-heading-row { margin-bottom: 1rem; }
.cm-title { font-size: 1.1rem; font-weight: 700; color: #ffffff; margin: 0 0 0.25rem; }
.cm-sub   { font-size: 0.74rem; color: rgba(255,255,255,0.38); margin: 0; }

.cm-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
}

.cm-card {
  position: relative; cursor: pointer;
  background: #0d0d0d; border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.07);
  border-top: 2px solid var(--border-color);
  padding: 0.75rem 0.7rem 0.65rem;
  display: flex; flex-direction: column; align-items: center;
  gap: 0.35rem; text-align: center;
  transition: background 0.15s, border-color 0.15s;
}
.cm-card:hover { background: #121212; border-color: rgba(255,255,255,0.13); border-top-color: var(--border-color); }

.cm-card-top { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); }

.cm-badge {
  display: inline-block; font-size: 0.52rem; font-weight: 700;
  letter-spacing: 0.4px; padding: 0.12rem 0.45rem;
  border-radius: 999px; color: #ffffff;
  white-space: nowrap;
}

.cm-logo-wrap {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-top: 0.9rem;
  border: 1px solid rgba(255,255,255,0.07);
}
.cm-logo-letter {
  font-size: 1.3rem; font-weight: 800; line-height: 1;
}

.cm-name    { font-size: 0.8rem; font-weight: 700; color: #ffffff; margin: 0; }
.cm-tagline { font-size: 0.65rem; color: rgba(255,255,255,0.35); margin: 0; line-height: 1.4; }
.cm-click   { font-size: 0.6rem; color: rgba(255,255,255,0.18); margin: 0; margin-top: 0.15rem; }


/* Tab transition */
.tab-content { width: 100%; }

.tab-fade-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.tab-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.tab-fade-enter-from  { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to    { opacity: 0; transform: translateY(-4px); }

@media (max-width: 767px) {
  .control-section  { padding: 5rem 1.25rem 0; }
  .control-heading  { font-size: clamp(1.9rem, 7vw, 2.8rem); }
  .control-sub br   { display: none; }
  .control-icon     { width: 110px; height: 110px; border-radius: 26px; }

  /* Stack tab cards to 1 column */
  .feature-cards { grid-template-columns: 1fr; gap: 0.5rem; }
  .feature-card  { height: 56px; padding: 0.85rem 1rem; }

  /* Hide sidebar — content takes full width */
  .box-sidebar  { display: none; }
  .box-body     { flex-direction: column; }
  .box-main     { padding: 1rem; min-height: 280px; }

  /* Analytics stats: 4 cols → 2 cols */
  .analytics-stats { grid-template-columns: repeat(2, 1fr); }

  /* Table: hide less-important columns */
  .table-head,
  .table-row {
    grid-template-columns: 2fr 1fr 1fr;
  }
  .table-head span:nth-child(3),
  .table-head span:nth-child(5),
  .table-row  span:nth-child(3),
  .table-row  span:nth-child(5) { display: none; }

  /* Box header */
  .box-nav { display: none; }
  .box-header { padding: 0.6rem 1rem; }
}
</style>
