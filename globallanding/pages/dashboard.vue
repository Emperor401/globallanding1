<template>
  <div class="dash-page">

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-icon">G</span>
        <span class="logo-text">GlobalGle</span>
      </div>

      <nav class="sidebar-nav">
        <a v-for="item in navItems" :key="item.label" href="#" class="nav-item" :class="{ 'nav-item--active': activeNav === item.label }" @click.prevent="activeNav = item.label">
          <span v-html="item.icon" />
          {{ item.label }}
        </a>
      </nav>

      <div class="sidebar-bottom">
        <div class="user-row">
          <div class="user-avatar">{{ initials }}</div>
          <div class="user-info">
            <p class="user-name">{{ session?.name }}</p>
            <p class="user-email">{{ session?.email }}</p>
          </div>
        </div>
        <button class="logout-btn" @click="handleLogout">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Log out
        </button>
      </div>
    </aside>

    <!-- Main -->
    <main class="dash-main">

      <!-- Top bar -->
      <header class="dash-header">
        <div>
          <h1 class="dash-title">Welcome back, {{ firstName }}!</h1>
          <p class="dash-sub">Here's what's happening with your portfolio today.</p>
        </div>
        <NuxtLink to="/" class="back-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to site
        </NuxtLink>
      </header>

      <!-- Stats row -->
      <div class="stats-grid">
        <div class="stat-card" v-for="s in stats" :key="s.label">
          <div class="stat-top">
            <p class="stat-label">{{ s.label }}</p>
            <span v-html="s.icon" class="stat-icon" />
          </div>
          <p class="stat-value">{{ s.value }}</p>
          <p class="stat-change" :class="s.up ? 'up' : 'down'">
            <span>{{ s.up ? '↑' : '↓' }}</span> {{ s.change }} this week
          </p>
        </div>
      </div>

      <!-- Chart placeholder + recent trades -->
      <div class="dash-grid">

        <!-- Chart card -->
        <div class="dash-card">
          <div class="card-header">
            <p class="card-title">Portfolio performance</p>
            <div class="time-tabs">
              <button v-for="t in ['1D','1W','1M','1Y']" :key="t" class="time-tab" :class="{ 'time-tab--active': timeframe === t }" @click="timeframe = t">{{ t }}</button>
            </div>
          </div>
          <div class="chart-area">
            <svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.08)"/>
                  <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
                </linearGradient>
              </defs>
              <path d="M0,140 L60,120 L120,125 L200,90 L280,100 L360,65 L440,75 L520,40 L600,30 L600,160 L0,160Z" fill="url(#chartGrad)"/>
              <polyline points="0,140 60,120 120,125 200,90 280,100 360,65 440,75 520,40 600,30" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="600" cy="30" r="4" fill="white"/>
            </svg>
          </div>
          <div class="chart-footer">
            <span class="chart-val">$24,831.00</span>
            <span class="chart-change up">↑ 12.4% all time</span>
          </div>
        </div>

        <!-- Recent trades -->
        <div class="dash-card">
          <div class="card-header">
            <p class="card-title">Recent trades</p>
            <a href="#" class="view-all">View all</a>
          </div>
          <div class="trades-list">
            <div class="trade-row" v-for="t in recentTrades" :key="t.pair">
              <div class="trade-left">
                <div class="trade-dot" />
                <div>
                  <p class="trade-pair">{{ t.pair }}</p>
                  <p class="trade-type">{{ t.type }}</p>
                </div>
              </div>
              <div class="trade-right">
                <p class="trade-amount">{{ t.amount }}</p>
                <span class="trade-badge" :class="t.status === 'Filled' ? 'badge--on' : 'badge--off'">{{ t.status }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>

  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { getSession, logout, isLoggedIn } = useAuth()
const router = useRouter()

const session = ref<any>(null)

onMounted(() => {
  if (!isLoggedIn()) { router.push('/login'); return }
  session.value = getSession()
})

const firstName = computed(() => session.value?.name?.split(' ')[0] || 'Trader')
const initials  = computed(() => {
  const parts = (session.value?.name || '').split(' ')
  return parts.map((p: string) => p[0]).join('').toUpperCase().slice(0, 2)
})

const activeNav = ref('Dashboard')
const timeframe = ref('1W')

const navItems = [
  { label: 'Dashboard',  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
  { label: 'Portfolio',  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>` },
  { label: 'Trades',     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
  { label: 'Markets',    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
  { label: 'Analytics',  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>` },
  { label: 'Settings',   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` },
]

const stats = [
  { label: 'Total Balance',   value: '$24,831.00', change: '12.4%', up: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>` },
  { label: 'Total P&L',       value: '+$4,210.50', change: '8.1%',  up: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>` },
  { label: 'Win Rate',        value: '87%',        change: '2.3%',  up: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>` },
  { label: 'Active Positions', value: '7',          change: '3',     up: true,  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>` },
]

const recentTrades = [
  { pair: 'BTC/USDT', type: 'Market Buy',  amount: '$1,200.00', status: 'Filled'  },
  { pair: 'ETH/USDT', type: 'Limit Sell',  amount: '$840.50',   status: 'Filled'  },
  { pair: 'SOL/USDT', type: 'Market Buy',  amount: '$320.00',   status: 'Filled'  },
  { pair: 'BNB/USDT', type: 'Stop Loss',   amount: '$500.00',   status: 'Pending' },
  { pair: 'XRP/USDT', type: 'Market Sell', amount: '$95.00',    status: 'Filled'  },
]

const handleLogout = () => { logout(); router.push('/') }
</script>

<style scoped>
.dash-page { display: flex; min-height: 100vh; background: #080808; font-family: 'Urbanist', sans-serif; }

/* Sidebar */
.sidebar { width: 220px; flex-shrink: 0; border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; padding: 1.5rem 0.75rem; gap: 2rem; }

.sidebar-logo { display: flex; align-items: center; gap: 0.6rem; padding: 0 0.5rem; }
.logo-icon { width: 30px; height: 30px; background: #1a1a1a; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 800; color: #fff; }
.logo-text { font-size: 1rem; font-weight: 700; color: #fff; }

.sidebar-nav { display: flex; flex-direction: column; gap: 0.1rem; flex: 1; }

.nav-item { display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.75rem; border-radius: 8px; font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.4); text-decoration: none; transition: background 0.15s, color 0.15s; }
.nav-item--active { background: rgba(255,255,255,0.07); color: #fff; }
.nav-item:hover:not(.nav-item--active) { color: rgba(255,255,255,0.7); }

.sidebar-bottom { display: flex; flex-direction: column; gap: 0.75rem; }

.user-row { display: flex; align-items: center; gap: 0.65rem; padding: 0 0.25rem; }
.user-avatar { width: 32px; height: 32px; border-radius: 50%; background: #2a2a2a; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; color: rgba(255,255,255,0.7); flex-shrink: 0; }
.user-name { font-size: 0.8rem; font-weight: 600; color: #fff; margin: 0; }
.user-email { font-size: 0.72rem; color: rgba(255,255,255,0.35); margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 130px; }

.logout-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; background: transparent; border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; color: rgba(255,255,255,0.35); font-size: 0.82rem; font-weight: 500; font-family: 'Urbanist', sans-serif; cursor: pointer; transition: background 0.2s, color 0.2s; }
.logout-btn:hover { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.7); }

/* Main */
.dash-main { flex: 1; display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem; overflow-y: auto; }

.dash-header { display: flex; align-items: flex-start; justify-content: space-between; }
.dash-title { font-size: 1.5rem; font-weight: 700; color: #fff; margin: 0 0 0.25rem; letter-spacing: -0.3px; }
.dash-sub { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 0; }

.back-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.5rem 0.9rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: rgba(255,255,255,0.5); font-size: 0.8rem; font-weight: 500; text-decoration: none; transition: all 0.2s; }
.back-btn:hover { color: #fff; border-color: rgba(255,255,255,0.15); }

/* Stats grid */
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }

.stat-card { background: #111; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 1.25rem; }
.stat-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
.stat-label { font-size: 0.75rem; font-weight: 500; color: rgba(255,255,255,0.4); margin: 0; text-transform: uppercase; letter-spacing: 0.4px; }
.stat-icon { color: rgba(255,255,255,0.25); display: flex; }
.stat-value { font-size: 1.4rem; font-weight: 700; color: #fff; margin: 0 0 0.4rem; letter-spacing: -0.5px; }
.stat-change { font-size: 0.75rem; font-weight: 600; margin: 0; }
.up { color: rgba(255,255,255,0.55); }
.down { color: rgba(255,120,120,0.7); }

/* Dashboard grid */
.dash-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 1rem; }

.dash-card { background: #111; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 1.25rem; }
.card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
.card-title { font-size: 0.9rem; font-weight: 700; color: #fff; margin: 0; }

.time-tabs { display: flex; gap: 0.25rem; }
.time-tab { padding: 0.25rem 0.6rem; background: transparent; border: none; border-radius: 6px; color: rgba(255,255,255,0.35); font-size: 0.75rem; font-weight: 600; font-family: 'Urbanist', sans-serif; cursor: pointer; transition: all 0.15s; }
.time-tab--active { background: rgba(255,255,255,0.08); color: #fff; }
.time-tab:hover:not(.time-tab--active) { color: rgba(255,255,255,0.6); }

.view-all { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s; }
.view-all:hover { color: rgba(255,255,255,0.7); }

.chart-area { height: 140px; margin-bottom: 0.75rem; }
.chart-footer { display: flex; align-items: center; gap: 0.75rem; }
.chart-val { font-size: 1rem; font-weight: 700; color: #fff; }
.chart-change { font-size: 0.8rem; font-weight: 600; }

.trades-list { display: flex; flex-direction: column; }
.trade-row { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
.trade-row:last-child { border-bottom: none; }
.trade-left { display: flex; align-items: center; gap: 0.75rem; }
.trade-dot { width: 28px; height: 28px; background: #1a1a1a; border: 1px solid rgba(255,255,255,0.08); border-radius: 7px; flex-shrink: 0; }
.trade-pair { font-size: 0.85rem; font-weight: 700; color: #fff; margin: 0 0 0.1rem; }
.trade-type { font-size: 0.75rem; color: rgba(255,255,255,0.35); margin: 0; }
.trade-right { text-align: right; }
.trade-amount { font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.7); margin: 0 0 0.2rem; }
.trade-badge { font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.5rem; border-radius: 999px; }
.badge--on { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); }
.badge--off { background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.35); }
</style>
