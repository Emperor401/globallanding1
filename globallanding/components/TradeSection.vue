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
        Start trading <span class="gradient-text">this weekend</span>
      </h2>

      <!-- Subtitle -->
      <p ref="subtitleRef" class="trade-sub">
        A seamless, secure platform so you can start trading in minutes.<br />
        Supports all major cryptocurrencies and trading pairs.
      </p>

      <!-- Crypto icons row -->
      <div ref="iconsRowRef" class="crypto-row">
        <div
          v-for="(coin, i) in coins"
          :key="coin.symbol"
          class="crypto-item"
          :class="{ 'crypto-item--active': i === 0 }"
        >
          <div class="crypto-icon-box">
            <img :src="coin.logo" :alt="coin.symbol" class="crypto-logo" />
          </div>
          <span class="crypto-label">{{ coin.symbol }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const iconRef  = ref<HTMLElement | null>(null)
const iconVideo = '/messagevid.mp4'
const headingRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const iconsRowRef = ref<HTMLElement | null>(null)

const base = 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color'

const coins = [
  { symbol: 'BTC',  logo: `${base}/btc.svg` },
  { symbol: 'ETH',  logo: `${base}/eth.svg` },
  { symbol: 'BNB',  logo: `${base}/bnb.svg` },
  { symbol: 'USDT', logo: `${base}/usdt.svg` },
  { symbol: 'SOL',  logo: `${base}/sol.svg` },
  { symbol: 'ADA',  logo: `${base}/ada.svg` },
  { symbol: 'XRP',  logo: `${base}/xrp.svg` },
  { symbol: 'MATIC',logo: `${base}/matic.svg` },
  { symbol: 'DOT',  logo: `${base}/dot.svg` },
  { symbol: 'AVAX', logo: `${base}/avax.svg` },
  { symbol: 'LINK', logo: `${base}/link.svg` },
  { symbol: 'LTC',  logo: `${base}/ltc.svg` },
  { symbol: 'DOGE', logo: `${base}/doge.svg` },
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

  if (iconsRowRef.value) {
    $gsap.from(iconsRowRef.value.children, {
      scrollTrigger: { trigger: iconsRowRef.value, start: 'top 88%' },
      y: 20,
      opacity: 0,
      filter: 'blur(8px)',
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.06,
      delay: 0.3,
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

/* Crypto row */
.crypto-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}

.crypto-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.crypto-icon-box {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;
}

.crypto-icon-box:hover {
  background: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.18);
}

.crypto-item--active .crypto-icon-box {
  border-color: rgba(255, 255, 255, 0.5);
  background: #1a1a1a;
}

.crypto-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.crypto-label {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

.crypto-item--active .crypto-label {
  color: rgba(255, 255, 255, 0.85);
}
</style>
