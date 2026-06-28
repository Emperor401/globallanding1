<template>
  <section class="cta-section">

    <!-- Animated background glow -->
    <div class="cta-glow cta-glow--left" />
    <div class="cta-glow cta-glow--right" />

    <!-- Grid overlay -->
    <div class="cta-grid" />

    <div class="cta-inner">

      <!-- Badge -->
      <div ref="badgeRef" class="cta-badge">
        <span class="badge-pulse" />
        Start for free today
      </div>

      <!-- Heading -->
      <h2 ref="headingRef" class="cta-heading">
        The smarter way to<br />
        <span class="cta-heading-outline">trade crypto</span>
      </h2>

      <!-- Subtitle -->
      <p ref="subRef" class="cta-sub">
        Join thousands of traders already using GlobalGle.<br />
        No experience needed — start in minutes.
      </p>

      <!-- Buttons -->
      <div ref="actionsRef" class="cta-actions">
        <NuxtLink to="/signup" class="cta-btn-primary">
          Get started free
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </NuxtLink>
        <NuxtLink to="#" class="cta-btn-ghost">Learn more</NuxtLink>
      </div>

      <!-- Trust line -->
      <p ref="trustRef" class="cta-trust">
        No credit card required &nbsp;·&nbsp; Instant setup &nbsp;·&nbsp; Cancel anytime
      </p>

    </div>
  </section>
</template>

<script setup lang="ts">
const badgeRef   = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const subRef     = ref<HTMLElement | null>(null)
const actionsRef = ref<HTMLElement | null>(null)
const trustRef   = ref<HTMLElement | null>(null)

const { $gsap } = useNuxtApp()

onMounted(() => {
  const els = [
    badgeRef.value,
    headingRef.value,
    subRef.value,
    actionsRef.value,
    trustRef.value,
  ]

  els.forEach((el, i) => {
    if (!el) return
    $gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 90%' },
      y: 28,
      opacity: 0,
      filter: 'blur(12px)',
      duration: 1,
      ease: 'power3.out',
      delay: i * 0.14,
      onComplete: () => {
        if (el) (el as HTMLElement).style.filter = 'none'
      },
    })
  })

  // Floating glow animation
  $gsap.to('.cta-glow--left', {
    x: 30,
    y: -20,
    duration: 6,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  })

  $gsap.to('.cta-glow--right', {
    x: -30,
    y: 20,
    duration: 7,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 1,
  })
})
</script>

<style scoped>
.cta-section {
  position: relative;
  background: #0a0a0a;
  padding: 10rem 2rem;
  overflow: hidden;
}

/* Animated glows */
.cta-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
}

.cta-glow--left {
  top: -100px;
  left: -150px;
  background: radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%);
}

.cta-glow--right {
  bottom: -100px;
  right: -150px;
  background: radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%);
}

/* Subtle grid */
.cta-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%);
}

/* Inner */
.cta-inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

/* Badge */
.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.35rem 0.9rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
}

.badge-pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.7;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.3); }
}

/* Heading */
.cta-heading {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -2.5px;
  line-height: 1.05;
  margin: 0;
}

.cta-heading-outline {
  -webkit-text-stroke: 1.5px rgba(255,255,255,0.5);
  color: transparent;
}

/* Subtitle */
.cta-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.75;
  margin: 0;
  max-width: 460px;
}

/* Buttons */
.cta-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.cta-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.6rem;
  background: #ffffff;
  color: #0a0a0a;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.cta-btn-primary:hover {
  background: #e8e8e8;
  transform: translateY(-2px);
}

.cta-btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.1);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.cta-btn-ghost:hover {
  color: #ffffff;
  border-color: rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.04);
}

/* Trust line */
.cta-trust {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.25);
  margin: 0;
  letter-spacing: 0.2px;
}
</style>
