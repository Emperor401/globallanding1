<template>
  <section class="trade-section">
    <div class="trade-inner">

      <!-- Top app icon — video -->
      <div ref="iconRef" class="trade-icon">
        <video
          class="trade-icon-video"
          :src="iconVideo"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
        />
        <div class="trade-icon-glow" />
      </div>

      <!-- Heading -->
      <h2 ref="headingRef" class="trade-heading">
        Start banking <span class="gradient-text">this weekend</span>
      </h2>

      <!-- Subtitle -->
      <p ref="subtitleRef" class="trade-sub">
        A seamless, secure platform so you can start banking in minutes.<br />
        Supports all major currencies and payment methods.
      </p>

      <!-- 3 coin icons -->
      <div ref="coinsRef" class="coins-row">
        <div v-for="coin in coins" :key="coin.symbol" class="coin-item">
          <div class="coin-box">
            <img :src="coin.logo" :alt="coin.symbol" class="coin-logo" />
          </div>
          <span class="coin-label">{{ coin.symbol }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const iconRef   = ref<HTMLElement | null>(null)
const iconVideo = '/messagevid.mp4'
const headingRef  = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const coinsRef    = ref<HTMLElement | null>(null)

const base = 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color'

const coins = [
  { symbol: 'BTC',  logo: `${base}/btc.svg` },
  { symbol: 'ETH',  logo: `${base}/eth.svg` },
  { symbol: 'USDT', logo: `${base}/usdt.svg` },
]

const { $gsap } = useNuxtApp()

onMounted(() => {
  const els = [iconRef.value, headingRef.value, subtitleRef.value]
  els.forEach((el, i) => {
    if (!el) return
    $gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 24,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1,
      ease: 'power3.out',
      delay: i * 0.15,
      onComplete: () => { if (el) (el as HTMLElement).style.filter = 'none' },
    })
  })

  if (coinsRef.value) {
    $gsap.from(coinsRef.value.children, {
      scrollTrigger: { trigger: coinsRef.value, start: 'top 88%' },
      y: 18,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.2,
    })
  }
})
</script>

<style scoped>
.trade-section {
  background: #0a0a0a;
  padding: 8rem 2rem 3rem;
}

.trade-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  text-align: center;
}

/* App icon */
.trade-icon {
  width: 160px;
  height: 160px;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(160deg, #0e0e18 0%, #080810 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.trade-icon-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Bottom edge glow like inspo */
.trade-icon-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(6, 182, 212, 0.12) 0%, transparent 100%);
  pointer-events: none;
  border-radius: 0 0 36px 36px;
}

/* Heading */
.trade-heading {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
  line-height: 1.1;
  margin: 0;
}

.gradient-text {
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subtitle */
.trade-sub {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.75;
  margin: 0;
  max-width: 580px;
}

/* 3 coin row */
.coins-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.coin-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.coin-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}

.coin-box:hover {
  background: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.18);
}

.coin-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.coin-label {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}

@media (max-width: 767px) {
  .trade-section  { padding: 5rem 1.5rem 3rem; }
  .trade-icon     { width: 120px; height: 120px; border-radius: 28px; }
  .trade-heading  { font-size: clamp(1.9rem, 7vw, 2.5rem); }
  .trade-sub      { font-size: 0.9rem; }
  .trade-sub br   { display: none; }
  .coins-row      { gap: 0.65rem; }
  .coin-box       { width: 50px; height: 50px; }
}
</style>
