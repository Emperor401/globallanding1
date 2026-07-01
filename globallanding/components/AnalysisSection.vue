<template>
  <section class="analysis-section">
    <div class="analysis-inner">

      <!-- Top icon — video -->
      <div ref="iconRef" class="analysis-icon">
        <video
          class="analysis-icon-video"
          :src="iconVideo"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
        />
        <div class="icon-glow" />
      </div>

      <!-- Heading -->
      <h2 ref="headingRef" class="analysis-heading">
        Analyze markets with powerful tools
      </h2>

      <!-- Subtitle -->
      <p ref="subRef" class="analysis-sub">
        A modern analytics suite that makes it easy for anyone to read, interpret, and act on market data.<br />
        Build your financial reports and share insights with your team.
      </p>

      <!-- Dashboard card -->
      <div ref="cardRef" class="outer-card">
        <div class="accent-line" />

        <!-- Top bar -->
        <div class="db-topbar">
          <div class="db-topbar-left">
            <div class="db-brand-icon"><img src="/logo.png" alt="GlobalGle" class="db-brand-logo" /></div>
            <span class="db-brand-name">Globalgle</span>
            <div class="db-brand-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            </div>
          </div>
          <div class="db-topbar-center">
            <span class="db-breadcrumb">Websites <span class="db-bc-sep">/</span> <strong>Monitor your web properties</strong></span>
          </div>
          <div class="db-topbar-right">
            <div class="db-search">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Search or type a command.
              <span class="db-kbd">⌘ Space</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            <div class="db-avatar">D</div>
            <div class="db-user">
              <span class="db-user-name">Daniel</span>
              <span class="db-user-email">globalgle@gmail.com</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </div>
        </div>

        <!-- Body -->
        <div class="db-body">

          <!-- Sidebar -->
          <aside class="db-sidebar">
            <p class="db-sb-label">GO MENU</p>
            <div class="db-sb-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Dashboard
            </div>
            <p class="db-sb-label">TOOLS</p>
            <div class="db-sb-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Mailing
            </div>
            <div class="db-sb-item db-sb-item--active">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              Websites
            </div>
            <div class="db-sb-item db-sb-item--tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              Generator <span class="db-tag">TOOLS</span>
            </div>
            <div class="db-sb-item db-sb-item--tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Digital <span class="db-tag">TOOLS</span>
            </div>
            <p class="db-sb-label">SYSTEM</p>
            <div class="db-sb-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              My Wallet <span class="db-count">₦0</span>
            </div>
            <div class="db-sb-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Billing &amp; Plans
            </div>
            <div class="db-sb-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
              Tutorials
            </div>
          </aside>

          <!-- Main -->
          <div class="db-main">
            <h3 class="db-title">Websites</h3>
            <p class="db-subtitle">Launch and manage the sites you offer your own customers.</p>

            <div class="db-cards-grid">
              <div class="db-card" v-for="s in siteTools" :key="s.name">
                <div class="db-card-icon">
                  <span v-html="s.icon" />
                </div>
                <p class="db-card-name">{{ s.name }}</p>
                <p class="db-card-desc">{{ s.desc }}</p>
                <span class="db-card-badge" :style="{ background: s.badgeBg, color: s.badgeColor }">{{ s.badge }}</span>
              </div>
            </div>

            <div class="db-stats-row">
              <div class="db-stat" v-for="st in siteStats" :key="st.value">
                <div class="db-stat-icon" :style="{ background: st.iconBg }">
                  <span v-html="st.icon" />
                </div>
                <span class="db-stat-value" :style="{ color: st.color }">{{ st.value }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const iconRef  = ref<HTMLElement | null>(null)
const iconVideo = '/world1.mp4'
const headingRef = ref<HTMLElement | null>(null)
const subRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

const { $gsap } = useNuxtApp()

const siteTools = [
  { name: 'Support Pages',  desc: 'Create a branded help & support page.',        badge: 'Ready',   badgeBg: 'rgba(20,184,166,0.15)',  badgeColor: '#2dd4bf', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
  { name: 'Online Banking', desc: 'Spin up your own online banking site.',         badge: 'Popular', badgeBg: 'rgba(59,130,246,0.15)',  badgeColor: '#60a5fa', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>` },
  { name: 'Broker',         desc: 'Launch your own trading / broker platform.',   badge: 'New',     badgeBg: 'rgba(6,182,212,0.15)',   badgeColor: '#22d3ee', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
  { name: 'Tracking Pages', desc: 'Create package tracking pages.',                badge: 'Beta',    badgeBg: 'rgba(168,85,247,0.15)', badgeColor: '#c084fc', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>` },
]

const siteStats = [
  { value: '3',     color: '#c2410c', iconBg: 'rgba(194,65,12,0.12)',  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
  { value: '3',     color: '#60a5fa', iconBg: 'rgba(59,130,246,0.12)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
  { value: '0',     color: '#fbbf24', iconBg: 'rgba(251,191,36,0.12)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>` },
  { value: '24.3K', color: '#c084fc', iconBg: 'rgba(168,85,247,0.12)', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>` },
]

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

  if (cardRef.value) {
    $gsap.from(cardRef.value, {
      scrollTrigger: { trigger: cardRef.value, start: 'top 85%' },
      y: 50, opacity: 0, filter: 'blur(14px)',
      duration: 1.2, ease: 'power3.out', delay: 0.2,
      onComplete: () => { if (cardRef.value) cardRef.value.style.filter = 'none' },
    })
  }
})
</script>

<style scoped>
.analysis-section {
  background: #0a0a0a;
  padding: 8rem 2rem;
}

.analysis-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

/* Icon */
.analysis-icon {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 36px;
  overflow: hidden;
  background: linear-gradient(160deg, #0e0e1a 0%, #080810 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.analysis-icon-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.icon-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  background: linear-gradient(to top, rgba(139, 92, 246, 0.18) 0%, transparent 100%);
  pointer-events: none;
  border-radius: 0 0 36px 36px;
}

.analysis-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0;
}

.analysis-sub {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.75;
  margin: 0;
  max-width: 560px;
}

/* ── Outer card ── */
.outer-card {
  width: 100%; margin-top: 1.5rem;
  background: #0d0d0d;
  border: 1px solid rgba(255,255,255,0.1);
  border-bottom: none;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  position: relative;
}
.outer-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, #0a0a0a);
  pointer-events: none;
  z-index: 10;
}

.accent-line {
  height: 2px;
  background: linear-gradient(90deg, transparent 5%, rgba(124,45,18,0.8) 25%, rgba(194,65,12,0.9) 50%, rgba(124,45,18,0.8) 75%, transparent 95%);
}

/* ── Top bar ── */
.db-topbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.65rem 1.2rem; gap: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  background: #0a0a0a;
}
.db-topbar-left  { display: flex; align-items: center; gap: 0.55rem; flex-shrink: 0; }
.db-brand-logo { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 50%; }
.db-brand-icon {
  width: 28px; height: 28px; border-radius: 50%;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.db-brand-name { font-size: 0.82rem; font-weight: 700; color: #fff; }
.db-brand-toggle {
  width: 22px; height: 22px; border-radius: 6px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.4);
}
.db-topbar-center { flex: 1; display: flex; justify-content: center; }
.db-breadcrumb    { font-size: 0.72rem; color: rgba(255,255,255,0.35); }
.db-breadcrumb strong { color: rgba(255,255,255,0.75); font-weight: 600; }
.db-bc-sep { margin: 0 0.3rem; }
.db-topbar-right { display: flex; align-items: center; gap: 0.7rem; flex-shrink: 0; }
.db-search {
  display: flex; align-items: center; gap: 0.45rem; padding: 0.3rem 0.65rem;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 7px; font-size: 0.68rem; color: rgba(255,255,255,0.3);
}
.db-kbd {
  padding: 0.05rem 0.3rem; background: rgba(255,255,255,0.07);
  border-radius: 4px; font-size: 0.6rem; color: rgba(255,255,255,0.3);
}
.db-avatar {
  width: 26px; height: 26px; border-radius: 50%;
  background: #c2410c; display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 700; color: #fff;
}
.db-user { display: flex; flex-direction: column; }
.db-user-name  { font-size: 0.68rem; font-weight: 600; color: #fff; line-height: 1.2; }
.db-user-email { font-size: 0.6rem; color: rgba(255,255,255,0.35); line-height: 1.2; }

/* ── Body ── */
.db-body { display: flex; min-height: 400px; }

/* ── Sidebar ── */
.db-sidebar {
  width: 175px; flex-shrink: 0; padding: 1rem 0.75rem;
  border-right: 1px solid rgba(255,255,255,0.05);
  display: flex; flex-direction: column; gap: 0.15rem;
}
.db-sb-label {
  font-size: 0.58rem; font-weight: 600; letter-spacing: 0.6px;
  color: rgba(255,255,255,0.22); text-transform: uppercase;
  margin: 0.65rem 0 0.3rem 0.3rem;
}
.db-sb-item {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.38rem 0.55rem; border-radius: 7px;
  font-size: 0.74rem; color: rgba(255,255,255,0.45); cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.db-sb-item:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.75); }
.db-sb-item--active { background: rgba(255,255,255,0.08); color: #fff; font-weight: 600; }
.db-sb-item--tag { justify-content: flex-start; }
.db-tag {
  margin-left: auto; font-size: 0.55rem; font-weight: 600;
  padding: 0.1rem 0.35rem; border-radius: 4px;
  background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.4);
}
.db-count {
  margin-left: auto; font-size: 0.6rem; padding: 0.1rem 0.35rem;
  border-radius: 4px; background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.35);
}

/* ── Main ── */
.db-main { flex: 1; padding: 1.4rem 1.5rem; overflow: hidden; }
.db-title    { font-size: 1.3rem; font-weight: 700; color: #fff; margin: 0 0 0.3rem; text-align: left; }
.db-subtitle { font-size: 0.78rem; color: rgba(255,255,255,0.38); margin: 0 0 1.2rem; text-align: left; }

/* ── Cards ── */
.db-cards-grid {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 0.7rem; margin-bottom: 1rem;
}
.db-card {
  background: #111; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px; padding: 1rem 0.9rem;
  display: flex; flex-direction: column; gap: 0.45rem;
  cursor: pointer; transition: background 0.15s, border-color 0.15s;
}
.db-card:hover { background: #161616; border-color: rgba(255,255,255,0.12); }
.db-card-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(194,65,12,0.15); border: 1px solid rgba(194,65,12,0.25);
  display: flex; align-items: center; justify-content: center;
}
.db-card-name  { font-size: 0.85rem; font-weight: 700; color: #fff; margin: 0; }
.db-card-desc  { font-size: 0.68rem; color: rgba(255,255,255,0.38); margin: 0; line-height: 1.5; flex: 1; }
.db-card-badge {
  display: inline-block; font-size: 0.62rem; font-weight: 600;
  padding: 0.18rem 0.55rem; border-radius: 999px; align-self: flex-start;
}

/* ── Stats ── */
.db-stats-row {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 0.7rem;
}
.db-stat {
  background: #111; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 0.75rem 0.85rem;
  display: flex; align-items: center; gap: 0.6rem;
}
.db-stat-icon {
  width: 28px; height: 28px; border-radius: 7px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.db-stat-value { font-size: 1rem; font-weight: 700; }

@media (max-width: 767px) {
  .analysis-section  { padding: 5rem 1rem 0; }
  .analysis-icon     { width: 120px; height: 120px; border-radius: 28px; }
  .analysis-heading  { font-size: clamp(1.8rem, 6vw, 2.4rem); }
  .analysis-sub      { font-size: 0.9rem; }
  .analysis-sub br   { display: none; }
  .db-topbar-center,
  .db-topbar-right   { display: none; }
  .db-sidebar        { display: none; }
  .db-cards-grid     { grid-template-columns: 1fr 1fr; }
  .db-stats-row      { grid-template-columns: 1fr 1fr; }
  .db-main           { padding: 1rem; }
}
</style>
