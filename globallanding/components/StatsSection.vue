<template>
  <section class="stats-section">
    <div class="stats-inner">

      <!-- Heading — left aligned -->
      <div ref="headingRef" class="stats-header">
        <h2 class="stats-heading">Go beyond trading</h2>
        <p class="stats-sub">
          Monitor and control your portfolio in a simple and intuitive way.<br />
          Straightforward analytics and reporting tools that help you trade smarter.
        </p>
      </div>

      <!-- Two cards row -->
      <div ref="cardsRef" class="cards-row">

        <!-- Left card -->
        <div class="outer-card">

          <!-- Inner floating card -->
          <div class="inner-card">
            <div class="inner-card-top">
              <div class="card-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" color="white">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
              </div>
              <div>
                <p class="card-label">Portfolio</p>
                <p class="card-title">
                  My Crypto Assets
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </p>
              </div>
            </div>

            <!-- Stats row -->
            <div class="stats-row">
              <div class="stat-col">
                <p class="stat-label">TOTAL VALUE</p>
                <p class="stat-value">$24,831</p>
              </div>
              <div class="stat-col">
                <p class="stat-label">P&amp;L</p>
                <p class="stat-value">+$1,204</p>
              </div>
              <div class="stat-col">
                <p class="stat-label">TRADES</p>
                <div class="stat-chart">
                  <svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="30">
                    <polyline points="0,28 15,20 30,22 45,10 60,4" stroke="rgba(255,255,255,0.5)" stroke-width="1.8" fill="none" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              <div class="stat-col stat-col--code">
                <p class="stat-label">API KEY</p>
                <div class="stat-code">gg_••••</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right card -->
        <div class="outer-card outer-card--right">
          <div class="right-card-body">

            <!-- Win Rate column -->
            <div class="metric-col">
              <p class="metric-label">WIN RATE</p>
              <p class="metric-big">87%</p>
              <div class="metric-glow" />
              <div class="metric-rows">
                <div class="metric-row">
                  <span class="metric-dot metric-dot--white" />
                  <span class="metric-name">Profit trades</span>
                  <span class="metric-num">3,204</span>
                </div>
                <div class="divider-line" />
                <div class="metric-row">
                  <span class="metric-dot metric-dot--dim" />
                  <span class="metric-name">Loss trades</span>
                  <span class="metric-num">480</span>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="col-divider" />

            <!-- ROI column -->
            <div class="metric-col">
              <p class="metric-label">ROI</p>
              <p class="metric-big metric-big--dim">34%</p>
              <div class="metric-rows metric-rows--spaced">
                <div class="metric-row">
                  <span class="metric-dot metric-dot--blue" />
                  <span class="metric-name">Monthly</span>
                </div>
                <div class="divider-line" />
                <div class="metric-row">
                  <span class="metric-dot metric-dot--purple" />
                  <span class="metric-name">Weekly</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Feature blocks -->
      <div ref="featuresRef" class="features-row">

        <div class="feature-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feature-icon">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
          </svg>
          <h3 class="feature-title">Portfolio management</h3>
          <p class="feature-desc">
            Manage your assets in minutes, regardless of size. Get full visibility of each holding and track performance in real time.
          </p>
          <a href="#" class="feature-link">Learn more</a>
        </div>

        <div class="feature-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feature-icon">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/>
          </svg>
          <h3 class="feature-title">Trade analytics</h3>
          <p class="feature-desc">
            Unlock powerful insights and understand exactly how your trades are performing. Identify patterns and optimize your strategy.
          </p>
          <a href="#" class="feature-link">Learn more</a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const headingRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const featuresRef = ref<HTMLElement | null>(null)

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (headingRef.value) {
    $gsap.from(headingRef.value.children, {
      scrollTrigger: { trigger: headingRef.value, start: 'top 88%' },
      y: 24, opacity: 0, filter: 'blur(10px)',
      duration: 1, ease: 'power3.out', stagger: 0.12,
      onComplete: () => {
        Array.from(headingRef.value!.children).forEach(el => {
          (el as HTMLElement).style.filter = 'none'
        })
      },
    })
  }

  if (cardsRef.value) {
    $gsap.from(cardsRef.value.children, {
      scrollTrigger: { trigger: cardsRef.value, start: 'top 85%' },
      y: 40, opacity: 0, filter: 'blur(12px)',
      duration: 1.1, ease: 'power3.out', stagger: 0.15, delay: 0.1,
      onComplete: () => {
        Array.from(cardsRef.value!.children).forEach(el => {
          (el as HTMLElement).style.filter = 'none'
        })
      },
    })
  }

  if (featuresRef.value) {
    $gsap.from(featuresRef.value.children, {
      scrollTrigger: { trigger: featuresRef.value, start: 'top 88%' },
      y: 24, opacity: 0, filter: 'blur(10px)',
      duration: 1, ease: 'power3.out', stagger: 0.15,
      onComplete: () => {
        Array.from(featuresRef.value!.children).forEach(el => {
          (el as HTMLElement).style.filter = 'none'
        })
      },
    })
  }
})
</script>

<style scoped>
.stats-section {
  background: #0a0a0a;
  padding: 8rem 2rem 4rem;
}

.stats-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Header — left aligned */
.stats-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stats-heading {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0;
}

.stats-sub {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
  margin: 0;
}

/* Cards row */
.cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

/* Outer card — open bottom */
.outer-card {
  background: #111111;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-left: 1px solid rgba(255,255,255,0.08);
  border-right: 1px solid rgba(255,255,255,0.08);
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  padding: 1.5rem;
  overflow: hidden;
}

/* Inner floating card */
.inner-card {
  background: #0d0d0d;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.inner-card-top {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-icon-box {
  width: 52px;
  height: 52px;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
  margin: 0 0 0.2rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

/* Stats row */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.stat-col {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.stat-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: rgba(255,255,255,0.3);
  margin: 0;
  text-transform: uppercase;
}

.stat-value {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.stat-chart {
  display: flex;
  align-items: flex-end;
}

.stat-col--code .stat-code {
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  font-family: monospace;
}

/* Right card */
.outer-card--right {
  padding: 0;
}

.right-card-body {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  height: 100%;
}

.metric-col {
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.metric-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
  margin: 0 0 0.5rem;
}

.metric-big {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -2px;
  margin: 0;
  position: relative;
  z-index: 1;
}

.metric-big--dim {
  color: rgba(255,255,255,0.35);
}

/* Glow effect — background, not shadow */
.metric-glow {
  position: absolute;
  top: 20%;
  right: -10%;
  width: 160px;
  height: 160px;
  background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.metric-rows {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 1.5rem;
}

.metric-rows--spaced {
  margin-top: 3.2rem;
}

.metric-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0;
}

.divider-line {
  height: 1px;
  background: rgba(255,255,255,0.06);
}

.metric-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.metric-dot--white { background: rgba(255,255,255,0.8); }
.metric-dot--dim   { background: rgba(255,255,255,0.25); }
.metric-dot--blue  { background: rgba(147,197,253,0.8); }
.metric-dot--purple{ background: rgba(196,181,253,0.8); }

.metric-name {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
  flex: 1;
}

.metric-num {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
}

.col-divider {
  width: 1px;
  background: rgba(255,255,255,0.07);
  align-self: stretch;
}

/* Feature blocks */
.features-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding-top: 1rem;
}

.feature-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-icon {
  margin-bottom: 0.25rem;
}

.feature-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.feature-desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.7;
  margin: 0;
}

.feature-link {
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  transition: opacity 0.2s;
}

.feature-link:hover {
  opacity: 0.65;
}
</style>
