<template>
  <section class="terminal-section">
    <div class="terminal-inner">

      <!-- Terminal card -->
      <div ref="cardRef" class="terminal-card">

        <!-- Tabs -->
        <div class="terminal-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.label"
            class="terminal-tab"
            :class="{ 'terminal-tab--active': activeTab === tab.label }"
            @click="activeTab = tab.label"
          >
            <span class="tab-icon" v-html="tab.icon" />
            {{ tab.label }}
          </button>
          <div class="tab-copy-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
          </div>
        </div>

        <!-- Terminal body -->
        <div class="terminal-body">

          <!-- Pair + price -->
          <div class="pair-row">
            <div class="pair-info">
              <div class="pair-icons">
                <img src="https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/btc.svg" class="pair-coin" />
                <img src="https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/usdt.svg" class="pair-coin pair-coin--second" />
              </div>
              <div>
                <p class="pair-name">BTC / USDT</p>
                <p class="pair-type">Spot Market</p>
              </div>
            </div>
            <div class="pair-price-block">
              <p class="pair-price">{{ animatedPrice }}</p>
              <p class="pair-change positive">▲ +2.41%</p>
            </div>
          </div>

          <!-- Mini chart bars -->
          <div class="mini-chart">
            <div
              v-for="(bar, i) in chartBars"
              :key="i"
              class="chart-bar"
              :style="{ height: bar + '%', opacity: i === chartBars.length - 1 ? 1 : 0.4 + (i / chartBars.length) * 0.5 }"
            />
          </div>

          <!-- Buy / Sell toggle -->
          <div class="bs-toggle">
            <button
              class="bs-btn"
              :class="{ 'bs-btn--buy': side === 'buy' }"
              @click="side = 'buy'"
            >Buy</button>
            <button
              class="bs-btn"
              :class="{ 'bs-btn--sell': side === 'sell' }"
              @click="side = 'sell'"
            >Sell</button>
          </div>

          <!-- Order type -->
          <div class="order-type-row">
            <button
              v-for="t in orderTypes"
              :key="t"
              class="order-type-btn"
              :class="{ 'order-type-btn--active': orderType === t }"
              @click="orderType = t"
            >{{ t }}</button>
          </div>

          <!-- Fields -->
          <div class="fields">
            <div class="field-row">
              <label class="field-label">Price (USDT)</label>
              <div class="field-input-wrap">
                <input v-model="price" type="number" class="field-input" placeholder="67,234.00" />
                <span class="field-unit">USDT</span>
              </div>
            </div>
            <div class="field-row">
              <label class="field-label">Amount (BTC)</label>
              <div class="field-input-wrap">
                <input v-model="amount" type="number" class="field-input" placeholder="0.00" />
                <span class="field-unit">BTC</span>
              </div>
            </div>
            <!-- Slider -->
            <input v-model="sliderVal" type="range" min="0" max="100" class="amount-slider" />
            <div class="slider-labels">
              <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
            </div>
            <div class="field-row total-row">
              <label class="field-label">Total</label>
              <span class="total-value">≈ {{ total }} USDT</span>
            </div>
          </div>

          <!-- Place order button -->
          <button class="place-order-btn" :class="side === 'buy' ? 'place-order-btn--buy' : 'place-order-btn--sell'">
            {{ side === 'buy' ? 'Place Buy Order' : 'Place Sell Order' }}
          </button>

        </div>

        <!-- Terminal footer -->
        <div class="terminal-footer">
          <a href="#" class="footer-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
            Open Live Terminal
          </a>
          <a href="#" class="footer-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            View API Docs
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cardRef = ref<HTMLElement | null>(null)

const activeTab = ref('Spot')
const side = ref('buy')
const orderType = ref('Market')
const price = ref('')
const amount = ref('')
const sliderVal = ref(0)

const tabs = [
  { label: 'Spot', icon: '◈' },
  { label: 'Futures', icon: '⚡' },
  { label: 'Copy Trade', icon: '⊕' },
  { label: 'Staking', icon: '❋' },
  { label: 'Portfolio', icon: '◎' },
]

const orderTypes = ['Market', 'Limit', 'Stop']

const chartBars = [30, 45, 35, 55, 40, 65, 50, 72, 60, 80, 65, 90, 75, 85, 95]

const animatedPrice = ref('$67,234.18')

const total = computed(() => {
  const p = parseFloat(price.value) || 67234
  const a = parseFloat(amount.value) || 0
  return (p * a).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
})

const { $gsap } = useNuxtApp()
let priceInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (cardRef.value) {
    $gsap.from(cardRef.value, {
      scrollTrigger: { trigger: cardRef.value, start: 'top 85%' },
      y: 40, opacity: 0, filter: 'blur(14px)',
      duration: 1.2, ease: 'power3.out', delay: 0.2,
      onComplete: () => { if (cardRef.value) cardRef.value.style.filter = 'none' },
    })
  }

  const prices = ['$67,189.42', '$67,210.88', '$67,198.05', '$67,234.18', '$67,251.60']
  let idx = 0
  priceInterval = setInterval(() => {
    idx = (idx + 1) % prices.length
    animatedPrice.value = prices[idx]
  }, 2000)
})

onUnmounted(() => {
  if (priceInterval) clearInterval(priceInterval)
})
</script>

<style scoped>
.terminal-section {
  background: #0a0a0a;
  padding: 1rem 2rem 7rem;
}

.terminal-inner {
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
}

/* Card */
.terminal-card {
  width: 100%;
  margin-top: 1.5rem;
  background: #0e0e0e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
}

/* Tabs */
.terminal-tabs {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  gap: 0.1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.terminal-tabs::-webkit-scrollbar {
  display: none;
}

.terminal-tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.85rem 0.9rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.82rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  white-space: nowrap;
  margin-bottom: -1px;
}

.terminal-tab--active {
  color: #ffffff;
  border-bottom-color: #ffffff;
}

.tab-icon {
  font-size: 0.9rem;
  opacity: 0.7;
}

.tab-copy-btn {
  margin-left: auto;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;
}

.tab-copy-btn:hover { color: rgba(255, 255, 255, 0.7); }

/* Body */
.terminal-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Pair row */
.pair-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pair-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.pair-icons {
  display: flex;
  align-items: center;
}

.pair-coin {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #0e0e0e;
}

.pair-coin--second {
  margin-left: -10px;
}

.pair-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.pair-type {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.35);
  margin: 0;
}

.pair-price-block {
  text-align: right;
}

.pair-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  transition: color 0.3s;
  font-variant-numeric: tabular-nums;
}

.pair-change {
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0;
}

.positive { color: rgba(255, 255, 255, 0.6); }

/* Mini chart */
.mini-chart {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 48px;
  padding: 0 0.25rem;
}

.chart-bar {
  flex: 1;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px 2px 0 0;
  transition: background 0.3s;
}

.chart-bar:last-child {
  background: rgba(255, 255, 255, 0.6);
}

/* Buy/Sell toggle */
.bs-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #161616;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 4px;
  gap: 4px;
}

.bs-btn {
  padding: 0.55rem;
  border: none;
  border-radius: 7px;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  background: transparent;
  color: rgba(255,255,255,0.4);
  transition: background 0.2s, color 0.2s;
}

.bs-btn--buy {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.bs-btn--sell {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.6);
}

/* Order type */
.order-type-row {
  display: flex;
  gap: 0.4rem;
}

.order-type-btn {
  padding: 0.3rem 0.85rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  color: rgba(255,255,255,0.4);
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}

.order-type-btn--active {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.2);
  color: #ffffff;
}

/* Fields */
.fields {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.field-row {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.field-label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.45);
  font-weight: 500;
}

.field-input-wrap {
  display: flex;
  align-items: center;
  background: #161616;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.field-input-wrap:focus-within {
  border-color: rgba(255,255,255,0.2);
}

.field-input {
  flex: 1;
  padding: 0.6rem 0.85rem;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 0.875rem;
  font-family: 'Urbanist', sans-serif;
  outline: none;
}

.field-input::placeholder { color: rgba(255,255,255,0.2); }

.field-unit {
  padding: 0 0.85rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255,255,255,0.3);
  border-left: 1px solid rgba(255,255,255,0.07);
}

/* Slider */
.amount-slider {
  width: 100%;
  accent-color: #ffffff;
  cursor: pointer;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.25);
}

.total-row {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.total-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
}

/* Place order */
.place-order-btn {
  width: 100%;
  padding: 0.85rem;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
}

.place-order-btn--buy {
  background: #ffffff;
  color: #0a0a0a;
}

.place-order-btn--sell {
  background: #1a1a1a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.place-order-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Footer */
.terminal-footer {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.07);
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: rgba(255,255,255,0.4);
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover { color: rgba(255,255,255,0.85); }
</style>
