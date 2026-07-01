<template>
  <footer class="footer">

    <!-- Giant brand text -->
    <div class="footer-brand-bg" aria-hidden="true" ref="brandRef">
      <span class="footer-brand-text" ref="brandTextRef">GlobalGle</span>
    </div>

    <!-- Divider line + glow -->
    <div class="footer-divider-wrap">
      <div class="footer-divider-clip">
        <div class="footer-divider" ref="dividerRef" />
      </div>
      <div class="footer-line-glow" aria-hidden="true" />
    </div>

    <!-- Footer bottom bar -->
    <div class="footer-bottom" ref="bottomRef">

      <div class="footer-left">
        <div class="footer-address">
          <p>14 Finance Boulevard, Suite 200</p>
          <p>Lagos, Nigeria 100001</p>
        </div>
        <div class="footer-socials">
          <a href="#" class="social-link" aria-label="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.893l4.258 5.63 5.843-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        <!-- Status badge -->
        <div class="footer-status">
          <span class="status-dot">
            <span class="status-dot-inner" />
          </span>
          <span class="status-text">All systems operational</span>
        </div>

      </div>

      <div class="footer-nav">

        <div class="footer-col">
          <p class="footer-col-title">Features</p>
          <a href="#" class="footer-link">Payments</a>
          <a href="#" class="footer-link">Futures</a>
          <a href="#" class="footer-link">Auto Transfers</a>
          <a href="#" class="footer-link">Staking</a>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Resources</p>
          <a href="#" class="footer-link">Documentation</a>
          <a href="#" class="footer-link">API Reference</a>
          <a href="#" class="footer-link">Blog</a>
          <a href="#" class="footer-link">Changelog</a>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Company</p>
          <a href="#" class="footer-link">About</a>
          <a href="#" class="footer-link">Careers</a>
          <a href="#" class="footer-link">Press</a>
          <a href="#" class="footer-link">Contact</a>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Help</p>
          <a href="#" class="footer-link">Support Center</a>
          <a href="#" class="footer-link">Knowledge Base</a>
          <a href="#" class="footer-link">Status</a>
          <a href="#" class="footer-link">Community</a>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Legal</p>
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Cookie Policy</a>
          <a href="#" class="footer-link">Compliance</a>
        </div>

      </div>
    </div>

    <!-- Copyright bar -->
    <div class="footer-copy" ref="copyRef">
      <p>© {{ new Date().getFullYear() }} GlobalGle Inc. All rights reserved.</p>
    </div>

  </footer>
</template>

<script setup lang="ts">
const brandRef     = ref<HTMLElement | null>(null)
const brandTextRef = ref<HTMLElement | null>(null)
const dividerRef   = ref<HTMLElement | null>(null)
const bottomRef    = ref<HTMLElement | null>(null)
const copyRef      = ref<HTMLElement | null>(null)

const { $gsap } = useNuxtApp()

onMounted(() => {
  // Cursor spotlight on wordmark
  const txt = brandTextRef.value
  if (txt) {
    txt.addEventListener('mousemove', (e: MouseEvent) => {
      const r = txt.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width)  * 100
      const y = ((e.clientY - r.top)  / r.height) * 100
      txt.style.setProperty('--mx', `${x}%`)
      txt.style.setProperty('--my', `${y}%`)
    })
    txt.addEventListener('mouseleave', () => {
      txt.style.setProperty('--mx', '-300%')
      txt.style.setProperty('--my', '50%')
    })
  }

  // 1. Brand text — slow rise from below with blur
  if (brandRef.value) {
    $gsap.from(brandRef.value, {
      scrollTrigger: { trigger: brandRef.value, start: 'top 95%' },
      y: 80,
      opacity: 0,
      filter: 'blur(18px)',
      duration: 1.6,
      ease: 'power3.out',
      onComplete: () => { if (brandRef.value) brandRef.value.style.filter = 'none' },
    })
  }

  // 2. Divider — draw left to right
  if (dividerRef.value) {
    $gsap.from(dividerRef.value, {
      scrollTrigger: { trigger: dividerRef.value, start: 'top 95%' },
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'power3.inOut',
      delay: 0.3,
    })
  }

  // 3. Footer columns — stagger blur-in
  if (bottomRef.value) {
    $gsap.from(bottomRef.value.children, {
      scrollTrigger: { trigger: bottomRef.value, start: 'top 95%' },
      y: 20,
      opacity: 0,
      filter: 'blur(8px)',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.5,
      onComplete: () => {
        Array.from(bottomRef.value!.children).forEach(el => {
          (el as HTMLElement).style.filter = 'none'
        })
      },
    })
  }

  // 4. Copyright — last fade in
  if (copyRef.value) {
    $gsap.from(copyRef.value, {
      scrollTrigger: { trigger: copyRef.value, start: 'top 99%' },
      opacity: 0,
      y: 12,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.2,
    })
  }
})
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
}

/* Giant brand text */
.footer-brand-bg {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0.85;
  padding-top: 3rem;
  user-select: none;
  pointer-events: none; /* overridden on the text span */
}

.footer-brand-text {
  display: block;
  font-family: 'Excon', sans-serif;
  font-size: clamp(7rem, 16vw, 18rem);
  font-weight: 900;
  letter-spacing: -4px;
  line-height: 0.88;
  white-space: nowrap;
  text-align: center;
  /* Spotlight: radial gradient follows cursor via --mx/--my */
  background: radial-gradient(
    circle 380px at var(--mx, -300%) var(--my, 50%),
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.18) 30%,
    rgba(255, 255, 255, 0.07) 60%,
    rgba(255, 255, 255, 0.07) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  pointer-events: auto;
}

/* Divider */
.footer-divider-wrap {
  width: 100%;
  overflow: visible;
  position: relative;
}

.footer-divider-clip {
  width: 100%;
  overflow: hidden;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.12) 20%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.12) 80%,
    transparent 100%
  );
}

/* Radial glow below the line */
.footer-line-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 220px;
  background: radial-gradient(
    ellipse 60% 100% at 50% 0%,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(255, 255, 255, 0.025) 45%,
    transparent 75%
  );
  pointer-events: none;
  z-index: 0;
}

/* Footer bottom bar */
.footer-bottom {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  padding: 2.5rem 3rem;
}

/* Left column: address + socials stacked */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex-shrink: 0;
}

.footer-address p {
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0;
  line-height: 1.7;
}

/* Nav columns */
.footer-nav { display: flex; gap: 3.5rem; }

.footer-col { display: flex; flex-direction: column; gap: 0.6rem; }

.footer-col-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.25rem;
  letter-spacing: 0.2px;
}

.footer-link {
  font-size: 0.8rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;
}

.footer-link:hover { color: rgba(255, 255, 255, 0.65); }

/* Copyright bar */
.footer-copy {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 3rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-copy p {
  font-size: 0.78rem;
  color: #ffffff;
  margin: 0;
}

/* Status badge */
.footer-status {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.9rem;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  width: fit-content;
}

.status-dot {
  position: relative;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
}

.status-dot-inner {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.7);
}

/* Pulse ring */
.status-dot::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1.5px solid rgba(34, 197, 94, 0.4);
  animation: status-pulse 2s ease-out infinite;
}

@keyframes status-pulse {
  0%   { transform: scale(0.7); opacity: 1; }
  70%  { transform: scale(1.6); opacity: 0; }
  100% { transform: scale(1.6); opacity: 0; }
}

.status-text {
  font-size: 0.78rem;
  font-weight: 500;
  color: #ffffff;
}

/* Socials */
.footer-socials { display: flex; align-items: center; gap: 0.65rem; }

.social-link {
  position: relative;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background: #111111;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color 0.2s, background 0.2s;
}

/* Gradient border via CSS mask — no extra HTML needed */
.social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9px;
  padding: 1px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.social-link svg {
  position: relative;
  z-index: 1;
}

.social-link:hover {
  color: rgba(255, 255, 255, 0.9);
  background: #1a1a1a;
}

.social-link:hover::before {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.32) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

/* ── Tablet ── */
@media (max-width: 1023px) {
  .footer-bottom { padding: 2rem 2rem; gap: 2rem; }
  .footer-nav    { gap: 2rem; }
  .footer-copy   { padding: 1.25rem 2rem 2rem; }
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .footer-brand-text { font-size: clamp(3.5rem, 18vw, 7rem); letter-spacing: -2px; }

  .footer-bottom {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2.5rem;
  }

  .footer-nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;
    width: 100%;
  }

  .footer-copy {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 1.25rem 1.5rem 2rem;
  }
}
</style>
