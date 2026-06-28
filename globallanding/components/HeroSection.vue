<template>
  <section class="hero">

    <!-- Background gradient -->
    <div class="hero-bg" />

    <div class="hero-inner">

      <!-- Left content -->
      <div ref="heroContent" class="hero-left">

        <!-- Announcement badge -->
        <a href="#" class="hero-badge">
          <span class="badge-dot" />
          Announcing GlobalGle Pro
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

        <!-- Heading -->
        <h1 class="hero-heading">
          Trade Crypto<br />with Confidence
        </h1>

        <!-- Subtitle -->
        <p class="hero-sub">
          The smartest way to buy, sell and grow your crypto portfolio.<br />
          Secure, fast and built for every type of trader.
        </p>

        <!-- Buttons -->
        <div class="hero-actions">
          <NuxtLink to="/signup" class="btn-primary">Get started</NuxtLink>
          <NuxtLink to="#" class="btn-ghost">Learn more</NuxtLink>
        </div>

      </div>

      <!-- Right — 3D cube video -->
      <div ref="heroBox" class="hero-right">
        <div class="cube-wrap">
          <video
            class="cube-video"
            :src="cubeVideo"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
          />
          <!-- Ground shadow -->
          <div class="cube-shadow" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const heroContent = ref<HTMLElement | null>(null)
const heroBox     = ref<HTMLElement | null>(null)
const cubeVideo   = '/hero-cube.mp4'

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (heroContent.value) {
    $gsap.from(heroContent.value.children, {
      y: 20,
      opacity: 0,
      filter: 'blur(12px)',
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.18,
      delay: 0.3,
      onComplete: () => {
        // Clear filter after animation to avoid performance issues
        Array.from(heroContent.value!.children).forEach((el) => {
          (el as HTMLElement).style.filter = 'none'
        })
      },
    })
  }

  if (heroBox.value) {
    $gsap.from(heroBox.value, {
      x: 60,
      opacity: 0,
      filter: 'blur(16px)',
      duration: 1.3,
      ease: 'power3.out',
      delay: 0.6,
      onComplete: () => {
        if (heroBox.value) heroBox.value.style.filter = 'none'
      },
    })
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #000000;
}

/* Background gradient — matches inspo exactly */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 70% 80% at 72% 40%, rgba(22, 22, 26, 0.85) 0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 75% 20%, rgba(28, 28, 32, 0.4) 0%, transparent 55%),
    radial-gradient(ellipse 50% 30% at 65% 90%, rgba(10, 10, 12, 0.9) 0%, transparent 60%);
}

/* Surface shadow line under the 3D object area */
.hero-bg::after {
  content: '';
  position: absolute;
  bottom: 18%;
  left: 38%;
  right: 0;
  height: 120px;
  background: radial-gradient(ellipse 60% 100% at 55% 100%, rgba(0,0,0,0.85) 0%, transparent 70%);
  transform: skewY(-4deg);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem 0 4rem;
  display: flex;
  align-items: center;
  min-height: 100vh;
}

/* Left */
.hero-left {
  width: 48%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem 0.35rem 0.6rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.hero-badge:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.7;
  flex-shrink: 0;
}

/* Heading */
.hero-heading {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.05;
  letter-spacing: -2px;
  margin: 0;
}

/* Subtitle */
.hero-sub {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  margin: 0;
  max-width: 420px;
}

/* Buttons */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background: #ffffff;
  color: #0a0a0a;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.btn-primary:hover {
  background: #e5e5e5;
  transform: translateY(-1px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.7rem 1.25rem;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.2s, background 0.2s;
}

.btn-ghost:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

/* Right — 3D cube video */
.hero-right {
  position: absolute;
  right: -4%;
  top: 50%;
  transform: translateY(-50%);
  width: 52%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.cube-wrap {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cube-video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  background: transparent;
}

/* Ground shadow beneath the cube */
.cube-shadow {
  width: 55%;
  height: 50px;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, transparent 70%);
  margin-top: -30px;
  pointer-events: none;
  filter: blur(10px);
}
</style>
