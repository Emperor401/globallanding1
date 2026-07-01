<template>
  <section class="trade-section">
    <div class="trade-inner">

      <!-- Icon scene — center video ALWAYS visible, cards show/hide per tab -->
      <div ref="sceneRef" class="icon-scene">

        <Transition name="card-fade">
          <div v-if="activeCoin === 'BTC'" ref="bitcoinRef" class="float-card float-card--left">
            <img src="/bitcoin.png" alt="Bitcoin" class="float-img" />
          </div>
        </Transition>

        <!-- Center video: always visible, never inside any tab -->
        <div ref="iconRef" class="trade-icon">
          <video
            class="trade-icon-video"
            :src="iconVideo"
            autoplay loop muted playsinline preload="auto"
          />
          <div class="trade-icon-glow" />
        </div>

        <Transition name="card-fade">
          <div v-if="activeCoin === 'BTC'" ref="dollarRef" class="float-card float-card--right">
            <img src="/dollar.png" alt="Dollar" class="float-img" />
          </div>
        </Transition>

      </div>

      <!-- Heading -->
      <h2 ref="headingRef" class="trade-heading">
        Start banking
        <span class="cycling-wrap">
          <span class="cycling-word gradient-text" :class="wordState">{{ currentWord }}</span>
        </span>
      </h2>

      <!-- Subtitle -->
      <p ref="subtitleRef" class="trade-sub">
        A seamless, secure platform so you can start banking in minutes.<br />
        Supports all major currencies and payment methods.
      </p>

      <!-- Coin tabs -->
      <div ref="coinsRef" class="coins-row">
        <div
          v-for="coin in coins"
          :key="coin.symbol"
          class="coin-item"
          :class="{ 'coin-item--active': activeCoin === coin.symbol }"
          @click="activeCoin = coin.symbol"
        >
          <div class="coin-box">
            <img :src="coin.logo" :alt="coin.symbol" class="coin-logo" />
          </div>
          <span class="coin-label">{{ coin.symbol }}</span>
        </div>
      </div>

      <!-- Tab content area — switches in the same space -->
      <Transition name="coin-tab" mode="out-in">

        <!-- BTC: no panel content — TradingTerminal shows below -->
        <div v-if="activeCoin === 'BTC'" key="btc" class="coin-panel btc-panel" />

        <!-- ETH: Crypto Sender dashboard -->
        <div v-else-if="activeCoin === 'ETH'" key="eth" class="coin-panel">
          <div class="eth-dashboard">

            <div class="eth-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
              Back to Tools
            </div>

            <div class="eth-header-row">
              <div class="eth-header-left">
                <div class="eth-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <div>
                  <h3 class="eth-title">Crypto Sender</h3>
                  <p class="eth-desc">On Starter · 0/0 messages left · then pay-as-you-go <span class="eth-link">price depends on destination</span></p>
                </div>
              </div>
            </div>

            <div class="eth-stats">
              <div class="eth-stat">
                <div class="eth-stat-label">PLAN MSGS LEFT THIS MONTH</div>
                <div class="eth-stat-val">0/0</div>
              </div>
              <div class="eth-stat">
                <div class="eth-stat-label">PAY-AS-YOU-GO</div>
                <div class="eth-stat-val eth-stat-val--md">Priced per destination</div>
              </div>
              <div class="eth-stat">
                <div class="eth-stat-label">WALLET BALANCE</div>
                <div class="eth-stat-val">₦0</div>
              </div>
            </div>

            <div class="eth-tabs">
              <button
                v-for="t in ethTabs"
                :key="t.label"
                class="eth-tab"
                :class="{ 'eth-tab--active': activeEthTab === t.label }"
                @click="activeEthTab = t.label"
              >
                <svg v-if="t.icon === 'single'" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <svg v-else-if="t.icon === 'bulk'" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                {{ t.label }}
              </button>
            </div>

            <div class="eth-body">
              <div class="eth-form">
                <div class="eth-field">
                  <label class="eth-label">Sender ID</label>
                  <input class="eth-input" placeholder="e.g. YourBrand, MyCompany" />
                  <p class="eth-hint">Up to 11 letters/digits. Shown as the sender on the recipient's device. (0/11)</p>
                </div>
                <div class="eth-field">
                  <label class="eth-label">Recipient address</label>
                  <div class="eth-phone-row">
                    <div class="eth-country">
                      <span>NG</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    <input class="eth-input eth-input--phone" placeholder="0x1a2b...3c4d" />
                  </div>
                  <p class="eth-hint">Pick the destination network, then type the wallet address.</p>
                </div>
                <div class="eth-field">
                  <label class="eth-label">Message</label>
                  <textarea class="eth-input eth-textarea" placeholder="Type your message here..."></textarea>
                </div>
              </div>
              <div class="eth-preview">
                <div class="eth-preview-label">LIVE PREVIEW</div>
                <div class="eth-preview-bubble">
                  <div class="eth-preview-avatar">Y</div>
                  <div class="eth-preview-info">
                    <div class="eth-preview-brand">YourBrand</div>
                    <div class="eth-preview-dest">ETH · to Nigeria</div>
                  </div>
                </div>
                <div class="eth-preview-msg-box">
                  <div class="eth-preview-empty">Your message will appear here as you type.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- USDT: Receipts Tracking -->
        <div v-else key="usdt" class="coin-panel">
          <div class="usdt-dashboard">

            <div class="usdt-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
              Back to Tools
            </div>

            <div class="usdt-header-row">
              <div class="usdt-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div>
                <h3 class="usdt-title">Receipts Tracking</h3>
                <p class="usdt-desc">Create a live transaction receipt and share it on <span class="usdt-link">your own link</span>.</p>
              </div>
            </div>

            <div class="usdt-body">

              <!-- Form -->
              <div class="usdt-form">

                <!-- Branding -->
                <div class="usdt-section-block">
                  <div class="usdt-section-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    Branding
                  </div>
                  <div class="usdt-field">
                    <label class="usdt-label">Company Name</label>
                    <input class="usdt-input" placeholder="e.g. Your Company" />
                  </div>
                  <div class="usdt-upload-row">
                    <div class="usdt-upload-group">
                      <label class="usdt-label">Logo</label>
                      <div class="usdt-upload-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        <span>Drag & drop or <span class="usdt-link">click</span></span>
                      </div>
                    </div>
                    <div class="usdt-upload-group">
                      <label class="usdt-label">Status Icon / Logo</label>
                      <div class="usdt-upload-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        <span>Drag & drop or <span class="usdt-link">click</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Receipt Link -->
                <div class="usdt-section-block">
                  <div class="usdt-section-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
                    Receipt Link
                  </div>
                  <p class="usdt-section-desc">Pick a name — your receipt gets its own clean link on one of our domains. <span class="usdt-link">Leave blank to add one later from Manage.</span></p>
                  <label class="usdt-label">Your receipt link</label>
                  <div class="usdt-subdomain-card">
                    <div class="usdt-subdomain-top">
                      <div class="usdt-subdomain-left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                        Use our subdomain
                      </div>
                      <span class="usdt-free-badge">free</span>
                    </div>
                    <p class="usdt-subdomain-desc">Pick a keyword — we set up the link for you. <span class="usdt-link">Nothing</span> to configure at your domain.</p>
                    <div class="usdt-link-row">
                      <input class="usdt-input usdt-input--link" placeholder="payment-pending" />
                      <select class="usdt-select"><option>.qstlx.com</option></select>
                    </div>
                    <p class="usdt-tiny">Lowercase letters, numbers and dashes — then <span class="usdt-link">pick a domain</span>. Locked in once created.</p>
                  </div>
                </div>

              </div>

              <!-- Live Preview -->
              <div class="usdt-preview">
                <div class="usdt-preview-label">LIVE PREVIEW</div>
                <div class="usdt-preview-card">
                  <div class="usdt-preview-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c2410c" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div class="usdt-preview-company">YOUR COMPANY</div>
                  <div class="usdt-preview-status">Payment Pending</div>
                  <div class="usdt-preview-note">Your profit of R 12,432 is ready for payout.</div>
                  <div class="usdt-preview-btns">
                    <button class="usdt-preview-btn usdt-preview-btn--active">Status</button>
                    <button class="usdt-preview-btn">Details</button>
                  </div>
                  <div class="usdt-timeline">
                    <div class="usdt-tl-item">
                      <div class="usdt-tl-dot usdt-tl-dot--done">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div class="usdt-tl-line" />
                      <div class="usdt-tl-text">
                        <span class="usdt-tl-title">Payment Initiated</span>
                        <span class="usdt-tl-sub">Funds are on their way</span>
                      </div>
                    </div>
                    <div class="usdt-tl-item">
                      <div class="usdt-tl-dot usdt-tl-dot--active" />
                      <div class="usdt-tl-line" />
                      <div class="usdt-tl-text">
                        <span class="usdt-tl-title">Processing</span>
                        <span class="usdt-tl-sub">Awaiting release fee clearance</span>
                      </div>
                    </div>
                    <div class="usdt-tl-item">
                      <div class="usdt-tl-dot" />
                      <div class="usdt-tl-text">
                        <span class="usdt-tl-title">Released to account</span>
                        <span class="usdt-tl-sub">Funds transferred</span>
                      </div>
                    </div>
                  </div>
                  <div class="usdt-ref">REFERENCE NO.</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </Transition>

    </div>
  </section>
</template>

<script setup lang="ts">
const sceneRef    = ref<HTMLElement | null>(null)
const iconRef     = ref<HTMLElement | null>(null)
const bitcoinRef  = ref<HTMLElement | null>(null)
const dollarRef   = ref<HTMLElement | null>(null)
const iconVideo   = '/messagevid.mp4'
const headingRef  = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const coinsRef    = ref<HTMLElement | null>(null)

const activeCoin   = useState('activeCoin', () => 'BTC')
const activeEthTab = ref('Single')
const ethTabs      = [
  { label: 'Single',  icon: 'single'  },
  { label: 'Bulk',    icon: 'bulk'    },
  { label: 'History', icon: 'history' },
]

const words = ['this morning', 'this afternoon', 'tonight', 'this weekend', 'right now', 'anytime', 'every day']
let wordIndex = 0
const currentWord = ref(words[0])
const wordState   = ref('visible')

const base  = 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color'
const coins = [
  { symbol: 'BTC',  logo: `${base}/btc.svg`  },
  { symbol: 'ETH',  logo: `${base}/eth.svg`  },
  { symbol: 'USDT', logo: `${base}/usdt.svg` },
]

const { $gsap } = useNuxtApp()

const animateBtcCards = async () => {
  await nextTick()
  const isMobile = window.innerWidth < 768
  const floatX   = isMobile ? 110 : 185
  const floatY   = isMobile ? 15  : 30

  if (bitcoinRef.value && sceneRef.value) {
    $gsap.fromTo(bitcoinRef.value,
      { x: 0, y: 0, scale: 0.25, opacity: 0, rotate: -8 },
      { x: -floatX, y: floatY, scale: 1, opacity: 1, rotate: -6, ease: 'power2.out',
        scrollTrigger: { trigger: sceneRef.value, start: 'top 75%', end: 'center 45%', scrub: 1.5 } }
    )
  }
  if (dollarRef.value && sceneRef.value) {
    $gsap.fromTo(dollarRef.value,
      { x: 0, y: 0, scale: 0.25, opacity: 0, rotate: 8 },
      { x: floatX, y: floatY, scale: 1, opacity: 1, rotate: 6, ease: 'power2.out',
        scrollTrigger: { trigger: sceneRef.value, start: 'top 75%', end: 'center 45%', scrub: 1.5 } }
    )
  }
}

watch(activeCoin, (val) => {
  if (val === 'BTC') animateBtcCards()
})

onMounted(() => {
  animateBtcCards()

  if (iconRef.value) {
    $gsap.from(iconRef.value, {
      scrollTrigger: { trigger: iconRef.value, start: 'top 85%' },
      y: 24, opacity: 0, filter: 'blur(10px)', duration: 1, ease: 'power3.out',
      onComplete: () => { if (iconRef.value) iconRef.value.style.filter = 'none' },
    })
  }

  const els = [headingRef.value, subtitleRef.value]
  els.forEach((el, i) => {
    if (!el) return
    $gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 24, opacity: 0, filter: 'blur(10px)', duration: 1, ease: 'power3.out', delay: i * 0.15,
      onComplete: () => { if (el) (el as HTMLElement).style.filter = 'none' },
    })
  })

  if (coinsRef.value) {
    $gsap.from(coinsRef.value.children, {
      scrollTrigger: { trigger: coinsRef.value, start: 'top 88%' },
      y: 18, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1, delay: 0.2,
    })
  }

  const interval = setInterval(() => {
    wordState.value = 'exit'
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length
      currentWord.value = words[wordIndex]
      wordState.value = 'enter'
      setTimeout(() => { wordState.value = 'visible' }, 400)
    }, 350)
  }, 4000)

  onUnmounted(() => clearInterval(interval))
})
</script>

<style scoped>
.trade-section {
  background: #0a0a0a;
  padding: 8rem 2rem 2rem;
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

/* ── Icon scene: always visible ── */
.icon-scene {
  position: relative;
  width: 100%;
  max-width: 560px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.float-card {
  position: absolute;
  width: 145px; height: 145px;
  border-radius: 24px;
  background: transparent; border: none;
  display: flex; align-items: center; justify-content: center;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  will-change: transform, opacity;
}

.float-img { width: 175%; height: 175%; object-fit: contain; }

.trade-icon {
  width: 160px; height: 160px; border-radius: 36px;
  overflow: hidden; position: relative; z-index: 2;
  background: linear-gradient(160deg, #0e0e18 0%, #080810 100%);
  border: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.trade-icon-video { width: 100%; height: 100%; object-fit: cover; display: block; }

.trade-icon-glow {
  position: absolute; bottom: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(to top, rgba(6,182,212,0.12) 0%, transparent 100%);
  pointer-events: none; border-radius: 0 0 36px 36px;
}

/* Card fade transition */
.card-fade-enter-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.card-fade-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.card-fade-enter-from  { opacity: 0; transform: translate(-50%,-50%) scale(0.7); }
.card-fade-leave-to    { opacity: 0; transform: translate(-50%,-50%) scale(0.7); }

/* ── Heading ── */
.trade-heading {
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 700; color: #ffffff;
  letter-spacing: -1px; line-height: 1.1; margin: 0;
}

.gradient-text {
  background: linear-gradient(90deg, #7c2d12, #c2410c, #f97316);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.cycling-wrap { display: inline-block; vertical-align: baseline; }
.cycling-word { display: inline-block; transition: opacity 0.3s ease, transform 0.3s ease; }
.cycling-word.visible { opacity: 1; transform: translateY(0); }
.cycling-word.exit    { opacity: 0; transform: translateY(-10px); }
.cycling-word.enter   { opacity: 0; transform: translateY(10px); }

/* ── Subtitle ── */
.trade-sub {
  font-size: 1rem; color: rgba(255,255,255,0.45);
  line-height: 1.75; margin: 0; max-width: 580px;
}

/* ── Coin tabs ── */
.coins-row {
  display: flex; align-items: flex-start;
  gap: 0.75rem; justify-content: center;
}

.coin-item {
  display: flex; flex-direction: column;
  align-items: center; gap: 0.5rem; cursor: pointer;
}

.coin-box {
  width: 56px; height: 56px; border-radius: 14px;
  background: #111111; border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  transition: background 0.2s, border-color 0.2s;
}

/* Rotating border light — hidden by default */
.coin-box::before {
  content: '';
  position: absolute;
  width: 220%; height: 220%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  background: conic-gradient(
    transparent 0deg,
    transparent 255deg,
    rgba(194, 65, 12, 0.12) 268deg,
    rgba(194, 65, 12, 1)    282deg,
    rgba(234, 88, 12, 1)    290deg,
    rgba(194, 65, 12, 1)    298deg,
    rgba(194, 65, 12, 0.12) 310deg,
    transparent 323deg
  );
  opacity: 0;
  animation: coin-border-chase 3.2s linear infinite;
  animation-play-state: paused;
  z-index: 0;
}

/* Only show + run on the active tab */
.coin-item--active .coin-box::before {
  opacity: 1;
  animation-play-state: running;
}

/* Inner fill — above gradient, below logo */
.coin-box::after {
  content: '';
  position: absolute;
  inset: 1px;
  background: #111111;
  border-radius: 13px;
  z-index: 1;
}

.coin-item--active .coin-box { background: #1c1108; border-color: rgba(194,65,12,0.5); }
.coin-item--active .coin-box::after { background: #1c1108; }
.coin-item:hover .coin-box { background: #1a1a1a; }

.coin-item--active .coin-label { color: rgba(255,255,255,0.95); }

.coin-logo { width: 28px; height: 28px; object-fit: contain; position: relative; z-index: 2; }

@keyframes coin-border-chase {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

.coin-label {
  font-size: 0.72rem; color: rgba(255,255,255,0.5);
  font-weight: 500; transition: color 0.2s;
}

/* ── Tab panel wrapper ── */
.coin-panel { width: 100%; min-height: 420px; display: flex; flex-direction: column; justify-content: center; }

/* ── Tab transition ── */
.coin-tab-enter-active { transition: opacity 0.35s ease, transform 0.35s ease; }
.coin-tab-leave-active { transition: opacity 0.2s ease,  transform 0.2s ease;  }
.coin-tab-enter-from   { opacity: 0; transform: translateY(16px) scale(0.98); }
.coin-tab-leave-to     { opacity: 0; transform: translateY(-8px)  scale(0.99); }

/* ── BTC panel: empty, no space ── */
.btc-panel { min-height: 0 !important; padding: 0; }


/* ── ETH dashboard ── */
.eth-dashboard {
  width: 100%; background: #111111;
  border: 1px solid rgba(255,255,255,0.04);
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  padding: 1.5rem; text-align: left;
  position: relative;
  overflow: hidden;
}

.eth-dashboard::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 45%;
  background: linear-gradient(to bottom, transparent 0%, #0a0a0a 100%);
  pointer-events: none;
  z-index: 10;
}

.eth-back {
  display: flex; align-items: center; gap: 0.35rem; width: fit-content;
  font-size: 0.72rem; color: rgba(255,255,255,0.4);
  margin-bottom: 1.25rem; cursor: pointer; transition: color 0.15s;
}
.eth-back:hover { color: rgba(255,255,255,0.75); }

.eth-header-row { display: flex; align-items: center; margin-bottom: 1.25rem; }
.eth-header-left { display: flex; align-items: center; gap: 0.85rem; }

.eth-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(194,65,12,0.12); border: 1px solid rgba(194,65,12,0.28);
  display: flex; align-items: center; justify-content: center;
  color: #c2410c; flex-shrink: 0;
}

.eth-title { font-size: 1.15rem; font-weight: 700; color: #ffffff; margin: 0 0 0.2rem; }
.eth-desc  { font-size: 0.7rem; color: rgba(255,255,255,0.38); margin: 0; }
.eth-link  { color: #c2410c; cursor: pointer; }

.eth-stats {
  display: grid; grid-template-columns: 1fr 1fr 1fr;
  gap: 0.65rem; margin-bottom: 1.25rem;
}

.eth-stat {
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 0.85rem 1rem;
}

.eth-stat-label {
  font-size: 0.58rem; font-weight: 600; letter-spacing: 0.6px;
  text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 0.45rem;
}

.eth-stat-val { font-size: 1.35rem; font-weight: 700; color: #ffffff; }
.eth-stat-val--md { font-size: 0.88rem; font-weight: 600; line-height: 1.4; }

.eth-tabs {
  display: flex; align-items: center; gap: 0.25rem;
  border-bottom: none;
  margin-bottom: 1.25rem;
}

.eth-tab {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 0.9rem; background: transparent; border: none;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
  color: rgba(255,255,255,0.4); font-size: 0.78rem; font-weight: 500;
  font-family: 'Urbanist', sans-serif; cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
  border-radius: 7px 7px 0 0;
}
.eth-tab:hover { color: rgba(255,255,255,0.7); }
.eth-tab--active { color: #ffffff; background: rgba(194,65,12,0.08); border-bottom-color: #c2410c; }

.eth-body { display: grid; grid-template-columns: 1fr 240px; gap: 1.25rem; }
.eth-form { display: flex; flex-direction: column; gap: 1rem; }
.eth-field { display: flex; flex-direction: column; gap: 0.4rem; }

.eth-label { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.7); }

.eth-input {
  width: 100%; padding: 0.6rem 0.85rem;
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.09);
  border-radius: 8px; color: #ffffff;
  font-size: 0.8rem; font-family: 'Urbanist', sans-serif;
  outline: none; transition: border-color 0.15s; box-sizing: border-box;
}
.eth-input:focus { border-color: rgba(194,65,12,0.5); }
.eth-input::placeholder { color: rgba(255,255,255,0.18); }
.eth-textarea { resize: none; min-height: 80px; }

.eth-hint { font-size: 0.66rem; color: rgba(255,255,255,0.28); margin: 0; line-height: 1.5; }

.eth-phone-row { display: flex; gap: 0.5rem; }

.eth-country {
  display: flex; align-items: center; gap: 0.3rem; padding: 0 0.75rem;
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.09);
  border-radius: 8px; color: rgba(255,255,255,0.6);
  font-size: 0.75rem; font-weight: 600; cursor: pointer; white-space: nowrap; flex-shrink: 0;
}

.eth-input--phone { flex: 1; }

.eth-preview {
  background: #0d0d0d; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 1rem;
  display: flex; flex-direction: column; gap: 0.85rem;
}

.eth-preview-label {
  font-size: 0.58rem; font-weight: 600; letter-spacing: 0.7px;
  text-transform: uppercase; color: rgba(255,255,255,0.28);
}

.eth-preview-bubble {
  display: flex; align-items: center; gap: 0.6rem; padding: 0.6rem;
  background: #161616; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;
}

.eth-preview-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: linear-gradient(135deg, #c2410c, #9a3412);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 700; color: #fff; flex-shrink: 0;
}

.eth-preview-brand { font-size: 0.75rem; font-weight: 600; color: #ffffff; }
.eth-preview-dest  { font-size: 0.62rem; color: rgba(255,255,255,0.32); }

.eth-preview-msg-box {
  flex: 1; min-height: 80px; background: #131313;
  border: 1px solid rgba(255,255,255,0.05); border-radius: 8px;
  display: flex; align-items: center; justify-content: center; padding: 0.75rem;
}

.eth-preview-empty {
  font-size: 0.65rem; color: rgba(255,255,255,0.2);
  text-align: center; line-height: 1.5;
}

/* ── USDT Dashboard ── */
.usdt-dashboard {
  width: 100%;
  background: #111111;
  border: 1px solid rgba(255,255,255,0.06);
  border-bottom: none;
  border-radius: 16px 16px 0 0;
  padding: 1.6rem 1.6rem 2.4rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.usdt-dashboard::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 45%;
  background: linear-gradient(to bottom, transparent 0%, #0a0a0a 100%);
  pointer-events: none;
  z-index: 10;
}

.usdt-back {
  display: inline-flex; align-items: center; gap: 0.35rem;
  font-size: 0.72rem; color: rgba(255,255,255,0.35);
  cursor: pointer; width: fit-content;
}

.usdt-header-row {
  display: flex; align-items: flex-start; gap: 0.85rem;
}

.usdt-icon-wrap {
  width: 34px; height: 34px; border-radius: 8px; flex-shrink: 0;
  background: rgba(194,65,12,0.12); border: 1px solid rgba(194,65,12,0.28);
  display: flex; align-items: center; justify-content: center;
  color: #c2410c; margin-top: 2px;
}

.usdt-title {
  font-size: 1rem; font-weight: 700; color: #ffffff; margin: 0 0 0.22rem;
}

.usdt-desc {
  font-size: 0.75rem; color: rgba(255,255,255,0.38); margin: 0; line-height: 1.55;
}

.usdt-link { color: #c2410c; }

.usdt-body {
  display: flex; gap: 1.2rem; align-items: flex-start;
}

/* Form column */
.usdt-form {
  flex: 1; display: flex; flex-direction: column; gap: 1.1rem;
}

.usdt-section-block {
  display: flex; flex-direction: column; gap: 0.6rem;
}

.usdt-section-heading {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.8rem; font-weight: 600; color: #ffffff;
}

.usdt-section-desc {
  font-size: 0.7rem; color: rgba(255,255,255,0.32); margin: 0; line-height: 1.55;
}

.usdt-label {
  font-size: 0.7rem; color: rgba(255,255,255,0.45); font-weight: 500;
}

.usdt-input {
  width: 100%; background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.08); border-radius: 8px;
  padding: 0.48rem 0.7rem; font-size: 0.78rem; color: rgba(255,255,255,0.7);
  outline: none; box-sizing: border-box;
}

.usdt-input::placeholder { color: rgba(255,255,255,0.22); }
.usdt-input:focus { border-color: rgba(194,65,12,0.45); }

.usdt-upload-row {
  display: flex; gap: 0.6rem;
}

.usdt-upload-group {
  flex: 1; display: flex; flex-direction: column; gap: 0.35rem;
}

.usdt-upload-box {
  background: #1a1a1a; border: 1px dashed rgba(255,255,255,0.1);
  border-radius: 8px; padding: 0.75rem 0.5rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
  font-size: 0.65rem; color: rgba(255,255,255,0.28); text-align: center; cursor: pointer;
}

.usdt-subdomain-card {
  background: #161616; border: 1px solid rgba(194,65,12,0.25);
  border-radius: 10px; padding: 0.85rem 0.9rem;
  display: flex; flex-direction: column; gap: 0.55rem;
}

.usdt-subdomain-top {
  display: flex; align-items: center; justify-content: space-between;
}

.usdt-subdomain-left {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.76rem; font-weight: 600; color: rgba(255,255,255,0.75);
}

.usdt-free-badge {
  padding: 0.15rem 0.55rem; border-radius: 999px;
  background: rgba(194,65,12,0.1); border: 1px solid rgba(194,65,12,0.22);
  font-size: 0.62rem; font-weight: 600; color: #c2410c; letter-spacing: 0.3px;
}

.usdt-subdomain-desc {
  font-size: 0.68rem; color: rgba(255,255,255,0.28); margin: 0; line-height: 1.5;
}

.usdt-link-row {
  display: flex; gap: 0.4rem;
}

.usdt-input--link { flex: 1; }

.usdt-select {
  background: #1a1a1a; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; padding: 0.48rem 0.5rem;
  font-size: 0.72rem; color: rgba(255,255,255,0.55); outline: none; cursor: pointer;
}

.usdt-tiny {
  font-size: 0.62rem; color: rgba(255,255,255,0.2); margin: 0; line-height: 1.5;
}

/* Preview column */
.usdt-preview {
  width: 180px; flex-shrink: 0; display: flex; flex-direction: column; gap: 0.5rem;
}

.usdt-preview-label {
  font-size: 0.58rem; font-weight: 700; letter-spacing: 0.9px;
  color: rgba(255,255,255,0.22); text-align: center;
}

.usdt-preview-card {
  background: #161616; border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px; padding: 1.1rem 0.9rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.55rem;
}

.usdt-preview-circle {
  width: 38px; height: 38px; border-radius: 50%;
  background: rgba(194,65,12,0.1); border: 1px solid rgba(194,65,12,0.25);
  display: flex; align-items: center; justify-content: center;
}

.usdt-preview-company {
  font-size: 0.62rem; font-weight: 700; letter-spacing: 0.8px; color: #c2410c;
}

.usdt-preview-status {
  font-size: 1rem; font-weight: 800; color: #c2410c; text-align: center; line-height: 1.2;
}

.usdt-preview-note {
  font-size: 0.62rem; color: rgba(255,255,255,0.3); text-align: center; line-height: 1.45;
}

.usdt-preview-btns {
  display: flex; gap: 0.35rem; width: 100%;
}

.usdt-preview-btn {
  flex: 1; padding: 0.3rem 0; border-radius: 6px;
  font-size: 0.65rem; font-weight: 500; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.08); background: transparent;
  color: rgba(255,255,255,0.35); transition: all 0.15s;
}

.usdt-preview-btn--active {
  background: rgba(194,65,12,0.12); border-color: rgba(194,65,12,0.28);
  color: #c2410c;
}

.usdt-timeline {
  width: 100%; display: flex; flex-direction: column; gap: 0;
}

.usdt-tl-item {
  display: flex; align-items: flex-start; gap: 0.5rem; position: relative;
}

.usdt-tl-dot {
  width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
  border: 1.5px solid rgba(255,255,255,0.15); background: transparent;
  display: flex; align-items: center; justify-content: center;
}

.usdt-tl-dot--done {
  background: #c2410c; border-color: #c2410c; color: #fff;
}

.usdt-tl-dot--active {
  border-color: #c2410c;
  box-shadow: 0 0 0 2px rgba(194,65,12,0.2);
}

.usdt-tl-dot--active::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%; background: #c2410c;
}

.usdt-tl-line {
  position: absolute; left: 7px; top: 18px;
  width: 1.5px; height: calc(100% + 6px);
  background: rgba(255,255,255,0.07);
}

.usdt-tl-text {
  display: flex; flex-direction: column; gap: 0.05rem; padding-bottom: 0.7rem;
}

.usdt-tl-title {
  font-size: 0.65rem; font-weight: 600; color: rgba(255,255,255,0.65);
}

.usdt-tl-sub {
  font-size: 0.58rem; color: rgba(255,255,255,0.22);
}

.usdt-ref {
  font-size: 0.55rem; font-weight: 700; letter-spacing: 0.7px;
  color: rgba(255,255,255,0.15); text-align: center; margin-top: 0.2rem;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .trade-section  { padding: 5rem 1.5rem 3rem; }
  .icon-scene     { height: 160px; max-width: 100%; }
  .trade-icon     { width: 110px; height: 110px; border-radius: 26px; }
  .float-card     { width: 90px; height: 90px; }
  .float-img      { width: 155%; height: 155%; }
  .trade-heading  { font-size: clamp(1.9rem, 7vw, 2.5rem); }
  .trade-sub      { font-size: 0.9rem; }
  .trade-sub br   { display: none; }
  .coins-row      { gap: 0.65rem; }
  .coin-box       { width: 50px; height: 50px; }
.eth-stats      { grid-template-columns: 1fr; }
  .eth-body       { grid-template-columns: 1fr; }
  .eth-preview    { display: none; }

  /* USDT dashboard mobile */
  .usdt-dashboard { padding: 1.1rem 1rem 2rem; gap: 0.85rem; }
  .usdt-body      { flex-direction: column; gap: 0.9rem; }
  .usdt-form      { width: 100%; }
  .usdt-preview   { width: 100%; }
  .usdt-preview-card {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    padding: 0.9rem;
  }
  .usdt-preview-circle { width: 32px; height: 32px; flex-shrink: 0; }
  .usdt-preview-company,
  .usdt-preview-status,
  .usdt-preview-note { text-align: left; }
  .usdt-preview-status { font-size: 0.88rem; }
  .usdt-preview-btns  { width: 100%; }
  .usdt-timeline      { width: 100%; }
  .usdt-upload-row    { flex-direction: column; gap: 0.5rem; }
  .usdt-link-row      { flex-direction: column; gap: 0.4rem; }
  .usdt-select        { width: 100%; }
  .usdt-input--link   { width: 100%; }
  .usdt-header-row    { gap: 0.6rem; }
  .usdt-title         { font-size: 0.92rem; }
}
</style>
