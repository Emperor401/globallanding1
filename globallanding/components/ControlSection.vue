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
        All the features you need to manage your trades, monitor with detailed analytics,<br />
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
          <div class="card-icon" :class="{ 'card-icon--active': activeTab === i }">
            <span v-html="card.icon" />
          </div>
          <span class="card-label">{{ card.label }}</span>
        </div>
      </div>

      <!-- Big content box -->
      <div ref="boxRef" class="content-box">

        <!-- Box header -->
        <div class="box-header">
          <div class="box-brand">
            <div class="brand-icon">G</div>
            <span class="brand-name">GlobalGle</span>
            <span class="brand-badge">Pro</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
          <div class="box-nav">
            <a href="#" class="box-nav-link">Help</a>
            <a href="#" class="box-nav-link">Docs</a>
            <a href="#" class="box-nav-link">Feedback</a>
          </div>
        </div>

        <!-- Box body -->
        <div class="box-body">

          <!-- Sidebar -->
          <aside class="box-sidebar">
            <div
              v-for="item in sidebarItems[activeTab]"
              :key="item.label"
              class="sidebar-item"
              :class="{ 'sidebar-item--active': item.active }"
            >
              <span v-html="item.icon" />
              {{ item.label }}
            </div>
          </aside>

          <!-- Main content — transitions between tabs -->
          <div class="box-main">
            <Transition name="tab-fade" mode="out-in">

              <!-- Tab 0: Analytics -->
              <div v-if="activeTab === 0" key="analytics" class="tab-content">
                <div class="main-header">
                  <h3 class="main-title">Analytics</h3>
                  <div class="main-actions">
                    <span class="main-badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                      Live
                    </span>
                  </div>
                </div>
                <div class="analytics-stats">
                  <div class="stat-card" v-for="s in analyticsStats" :key="s.label">
                    <p class="sc-label">{{ s.label }}</p>
                    <p class="sc-value">{{ s.value }}</p>
                    <p class="sc-change" :class="s.positive ? 'positive' : 'negative'">{{ s.change }}</p>
                  </div>
                </div>
                <div class="analytics-chart">
                  <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                    <line x1="0" y1="60" x2="600" y2="60" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                    <line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                    <polyline points="0,100 60,85 120,90 180,60 240,70 300,40 360,50 420,25 480,35 540,15 600,20"
                      stroke="rgba(255,255,255,0.35)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                    <polyline points="0,110 60,100 120,105 180,88 240,92 300,75 360,80 420,62 480,70 540,50 600,55"
                      stroke="rgba(255,255,255,0.1)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>

              <!-- Tab 1: Full visibility -->
              <div v-else-if="activeTab === 1" key="visibility" class="tab-content">
                <div class="main-header">
                  <h3 class="main-title">Trades</h3>
                  <div class="main-actions">
                    <span class="main-badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      Search...
                    </span>
                    <span class="main-badge">Last 3 days ↓</span>
                    <span class="main-badge">Status ↓</span>
                  </div>
                </div>
                <div class="table-wrap">
                  <div class="table-head">
                    <span>Pair</span><span>Status</span><span>Type</span><span>Amount</span><span>Time</span>
                  </div>
                  <div class="table-row" v-for="row in tradeRows" :key="row.pair">
                    <span class="row-pair">
                      <span class="row-dot" />
                      {{ row.pair }}
                    </span>
                    <span>
                      <span class="status-badge" :class="row.status === 'Filled' ? 'badge--white' : 'badge--dim'">{{ row.status }}</span>
                    </span>
                    <span class="row-muted">{{ row.type }}</span>
                    <span class="row-amount">{{ row.amount }}</span>
                    <span class="row-muted">{{ row.time }}</span>
                  </div>
                </div>
              </div>

              <!-- Tab 2: Secure auth -->
              <div v-else key="auth" class="tab-content">
                <div class="main-header">
                  <h3 class="main-title">Security</h3>
                  <div class="main-actions">
                    <span class="main-badge">Settings</span>
                  </div>
                </div>
                <div class="auth-list">
                  <div class="auth-item" v-for="a in authItems" :key="a.label">
                    <div class="auth-left">
                      <span v-html="a.icon" class="auth-icon" />
                      <div>
                        <p class="auth-label">{{ a.label }}</p>
                        <p class="auth-desc">{{ a.desc }}</p>
                      </div>
                    </div>
                    <div class="auth-toggle" :class="{ 'auth-toggle--on': a.enabled }">
                      <div class="toggle-thumb" />
                    </div>
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
]

const sidebarItems = [
  [
    { label: 'Overview',   active: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
    { label: 'Portfolio',  active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>` },
    { label: 'Reports',    active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>` },
    { label: 'Markets',    active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
    { label: 'Settings',   active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` },
  ],
  [
    { label: 'Trades',     active: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
    { label: 'Portfolio',  active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>` },
    { label: 'Watchlist',  active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` },
    { label: 'Orders',     active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>` },
    { label: 'History',    active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 1 0 .5-4.5"/><polyline points="3 3 3 11 11 11"/></svg>` },
    { label: 'API Keys',   active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>` },
    { label: 'Settings',   active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` },
  ],
  [
    { label: 'Security',   active: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
    { label: '2FA',        active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>` },
    { label: 'API Keys',   active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>` },
    { label: 'Sessions',   active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
    { label: 'Settings',   active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` },
  ],
]

const analyticsStats = [
  { label: 'Total Volume',   value: '$1.24M',  change: '+12.4%', positive: true },
  { label: 'Active Trades',  value: '3,204',   change: '+8.1%',  positive: true },
  { label: 'Win Rate',       value: '87%',     change: '+2.3%',  positive: true },
  { label: 'Total P&L',     value: '+$48,210', change: '+5.6%',  positive: true },
]

const tradeRows = [
  { pair: 'BTC/USDT', status: 'Filled', type: 'Market Buy',  amount: '$1,200.00', time: '16m' },
  { pair: 'ETH/USDT', status: 'Filled', type: 'Limit Sell',  amount: '$840.50',   time: '31m' },
  { pair: 'SOL/USDT', status: 'Filled', type: 'Market Buy',  amount: '$320.00',   time: '1h' },
  { pair: 'BNB/USDT', status: 'Pending', type: 'Stop Loss',  amount: '$500.00',   time: '2h' },
  { pair: 'XRP/USDT', status: 'Filled', type: 'Market Sell', amount: '$95.00',    time: '3h' },
]

const authItems = [
  {
    label: 'Two-Factor Authentication',
    desc: 'Add an extra layer of security to your account',
    enabled: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>`,
  },
  {
    label: 'Login Notifications',
    desc: 'Get notified when a new login is detected',
    enabled: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  },
  {
    label: 'API Key Access',
    desc: 'Allow third-party apps to access your account via API',
    enabled: false,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
  },
  {
    label: 'Withdrawal Whitelist',
    desc: 'Only allow withdrawals to pre-approved addresses',
    enabled: true,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
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
  background: #0e0e0e;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.feature-card--active { background: #141414; border-color: rgba(255,255,255,0.18); }
.feature-card:hover   { background: #131313; border-color: rgba(255,255,255,0.12); }

.card-icon {
  width: 36px; height: 36px;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.4); flex-shrink: 0;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.card-icon--active { color: #ffffff; border-color: rgba(255,255,255,0.2); background: #222; }

.card-label {
  font-size: 0.88rem; font-weight: 600;
  color: rgba(255,255,255,0.6); text-align: left;
}

.feature-card--active .card-label { color: #ffffff; }

/* Big content box */
.content-box {
  width: 100%;
  background: #111111;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-left: 1px solid rgba(255,255,255,0.08);
  border-right: 1px solid rgba(255,255,255,0.08);
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
}

/* Box header */
.box-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.box-brand {
  display: flex; align-items: center; gap: 0.5rem;
}

.brand-icon {
  width: 24px; height: 24px;
  background: #222; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 800; color: #fff;
}

.brand-name { font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.8); }

.brand-badge {
  font-size: 0.65rem; font-weight: 600;
  padding: 0.15rem 0.45rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px; color: rgba(255,255,255,0.5);
}

.box-nav { display: flex; align-items: center; gap: 1.25rem; }

.box-nav-link {
  font-size: 0.8rem; color: rgba(255,255,255,0.4);
  text-decoration: none; transition: color 0.2s;
}

.box-nav-link:hover { color: rgba(255,255,255,0.8); }

/* Box body */
.box-body { display: flex; }

/* Sidebar */
.box-sidebar {
  width: 175px; flex-shrink: 0;
  border-right: 1px solid rgba(255,255,255,0.06);
  padding: 0.75rem 0.5rem;
  display: flex; flex-direction: column; gap: 0.1rem;
}

.sidebar-item {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  border-radius: 7px;
  font-size: 0.8rem; font-weight: 450;
  color: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.sidebar-item--active { background: rgba(255,255,255,0.07); color: #ffffff; }
.sidebar-item:hover:not(.sidebar-item--active) { color: rgba(255,255,255,0.7); }

/* Main content */
.box-main { flex: 1; padding: 1.25rem 1.5rem; min-height: 340px; }

.main-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1.25rem;
}

.main-title {
  font-size: 1.1rem; font-weight: 700; color: #ffffff; margin: 0;
}

.main-actions { display: flex; align-items: center; gap: 0.5rem; }

.main-badge {
  display: inline-flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 7px;
  font-size: 0.75rem; color: rgba(255,255,255,0.5);
}

/* Analytics tab */
.analytics-stats {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.stat-card {
  background: #0d0d0d;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 0.85rem;
}

.sc-label { font-size: 0.7rem; color: rgba(255,255,255,0.35); margin: 0 0 0.3rem; text-transform: uppercase; letter-spacing: 0.5px; }
.sc-value { font-size: 1.1rem; font-weight: 700; color: #ffffff; margin: 0 0 0.2rem; }
.sc-change { font-size: 0.75rem; font-weight: 600; margin: 0; }
.positive { color: rgba(255,255,255,0.6); }
.negative { color: rgba(255,255,255,0.3); }

.analytics-chart {
  background: #0d0d0d;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 1rem; height: 120px;
}

/* Trades table */
.table-wrap { width: 100%; }

.table-head {
  display: grid; grid-template-columns: 2fr 1fr 1.5fr 1.2fr 0.8fr;
  padding: 0.5rem 0.75rem;
  font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.5px; color: rgba(255,255,255,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.table-row {
  display: grid; grid-template-columns: 2fr 1fr 1.5fr 1.2fr 0.8fr;
  padding: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  align-items: center;
  font-size: 0.82rem;
  transition: background 0.15s;
}

.table-row:hover { background: rgba(255,255,255,0.02); }

.row-pair { display: flex; align-items: center; gap: 0.6rem; color: rgba(255,255,255,0.8); font-weight: 500; }
.row-dot { width: 24px; height: 24px; background: #1a1a1a; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; flex-shrink: 0; }
.status-badge { padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }
.badge--white { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); }
.badge--dim   { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.4); }
.row-muted { color: rgba(255,255,255,0.4); }
.row-amount { color: rgba(255,255,255,0.7); font-weight: 500; }

/* Auth tab */
.auth-list { display: flex; flex-direction: column; gap: 0; }

.auth-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.auth-item:last-child { border-bottom: none; }

.auth-left { display: flex; align-items: center; gap: 0.85rem; }

.auth-icon { color: rgba(255,255,255,0.5); display: flex; }

.auth-label { font-size: 0.875rem; font-weight: 600; color: #ffffff; margin: 0 0 0.15rem; }
.auth-desc  { font-size: 0.78rem; color: rgba(255,255,255,0.35); margin: 0; }

.auth-toggle {
  width: 40px; height: 22px;
  background: rgba(255,255,255,0.1);
  border-radius: 999px; position: relative; cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}

.auth-toggle--on { background: rgba(255,255,255,0.35); }

.toggle-thumb {
  position: absolute; top: 3px; left: 3px;
  width: 16px; height: 16px;
  background: #ffffff; border-radius: 50%;
  transition: transform 0.2s;
}

.auth-toggle--on .toggle-thumb { transform: translateX(18px); }

/* Tab transition */
.tab-content { width: 100%; }

.tab-fade-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.tab-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.tab-fade-enter-from  { opacity: 0; transform: translateY(8px); }
.tab-fade-leave-to    { opacity: 0; transform: translateY(-4px); }
</style>
