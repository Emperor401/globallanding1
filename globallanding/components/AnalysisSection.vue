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
        Build your trading reports and share insights with your team.
      </p>

      <!-- Outer big box -->
      <div ref="cardRef" class="outer-card">

        <!-- Top gradient accent line -->
        <div class="accent-line" />

        <!-- Outer toolbar -->
        <div class="outer-toolbar">
          <button class="toolbar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="18" y2="18"/>
            </svg>
            Filters
          </button>
          <span class="toolbar-title">BTC / USDT Weekly Report</span>
          <div class="toolbar-right">
            <span class="toolbar-time">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              just now
            </span>
            <button class="toolbar-action-btn">Preview</button>
            <button class="toolbar-action-btn toolbar-action-btn--primary">Export</button>
          </div>
        </div>

        <!-- Inner floating card -->
        <div class="inner-card">

          <!-- Fields -->
          <div class="inner-fields">
            <div class="inner-field">
              <span class="field-key">Pair</span>
              <span class="field-val">BTC / USDT</span>
            </div>
            <div class="inner-field">
              <span class="field-key">Market</span>
              <div class="field-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Spot Market
              </div>
            </div>
            <div class="inner-field">
              <span class="field-key">Timeframe</span>
              <span class="field-val field-val--bold">7 Days</span>
            </div>
          </div>

          <!-- Banner -->
          <div class="inner-banner">
            <div class="banner-chart">
              <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <!-- Grid -->
                <line x1="0" y1="45" x2="400" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="0" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="80" y1="0" x2="80" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="160" y1="0" x2="160" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="240" y1="0" x2="240" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="320" y1="0" x2="320" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <!-- Chart line -->
                <polyline points="0,150 50,130 100,140 150,100 200,115 250,70 300,85 350,45 400,30"
                  stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none" stroke-linecap="round"/>
                <polyline points="0,165 50,155 100,158 150,135 200,142 250,110 300,120 350,85 400,70"
                  stroke="rgba(255,255,255,0.07)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              </svg>
            </div>
            <!-- Play button -->
            <div class="banner-play">
              <div class="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- White content area -->
          <div class="inner-content">
            <p class="content-placeholder">Press '/' for analysis tools</p>
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

/* ── Outer big box ── */
.outer-card {
  width: 100%;
  margin-top: 1.5rem;
  background: #111111;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: none;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  padding-bottom: 1.5rem;
}

.accent-line {
  height: 2px;
  background: linear-gradient(90deg, transparent 5%, rgba(168,85,247,0.7) 35%, rgba(6,182,212,0.7) 65%, transparent 95%);
}

/* Outer toolbar */
.outer-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  gap: 1rem;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.85rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  color: rgba(255,255,255,0.6);
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}

.toolbar-btn:hover {
  background: rgba(255,255,255,0.08);
  color: #ffffff;
}

.toolbar-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255,255,255,0.5);
  flex: 1;
  text-align: center;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.toolbar-time {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.3);
  white-space: nowrap;
}

.toolbar-action-btn {
  padding: 0.38rem 0.85rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 7px;
  color: rgba(255,255,255,0.6);
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.toolbar-action-btn:hover {
  background: rgba(255,255,255,0.06);
  color: #ffffff;
}

.toolbar-action-btn--primary {
  background: #ffffff;
  border-color: #ffffff;
  color: #0a0a0a;
  font-weight: 600;
}

.toolbar-action-btn--primary:hover {
  background: #e5e5e5;
}

/* ── Inner floating card ── */
.inner-card {
  margin: 1.5rem;
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  overflow: hidden;
}

/* Fields */
.inner-fields {
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.inner-field {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.7rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.inner-field:last-child {
  border-bottom: none;
}

.field-key {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
  min-width: 80px;
  font-weight: 500;
}

.field-val {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.65);
}

.field-val--bold {
  font-weight: 600;
  color: #ffffff;
}

.field-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.7rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.75);
  font-weight: 500;
}

/* Banner */
.inner-banner {
  position: relative;
  height: 220px;
  background: linear-gradient(135deg, #0c0c10 0%, #111118 100%);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.banner-chart {
  flex: 1;
  height: 100%;
  padding: 1rem 1.5rem;
}

.banner-play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  flex-shrink: 0;
}

.play-btn {
  width: 76px;
  height: 76px;
  background: radial-gradient(circle at 40% 35%, #2e2e2e, #111111);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.85);
  cursor: pointer;
  transition: transform 0.2s;
}

.play-btn:hover {
  transform: scale(1.06);
}

/* White content area */
.inner-content {
  background: #f9f9f9;
  min-height: 180px;
  padding: 1.5rem 1.75rem;
}

.content-placeholder {
  font-size: 0.875rem;
  color: #c0c0c0;
  margin: 0;
}
</style>
