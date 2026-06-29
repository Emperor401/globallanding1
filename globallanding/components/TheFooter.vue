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
          <a href="#" class="social-link" aria-label="Twitter">

            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.893l4.258 5.63 5.843-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Discord">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
