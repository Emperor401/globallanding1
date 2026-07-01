<template>
  <section ref="heroSection" class="hero">

    <!-- Ambient light — fades out on scroll via JS -->
    <img ref="heroLight" src="/light.webp" class="hero-light" alt="" aria-hidden="true" />




<div class="hero-inner">

      <!-- Left content -->
      <div ref="heroContent" class="hero-left">

        <!-- Announcement badge -->
        <a href="#" class="hero-badge">
          <span class="badge-inner">
            Announcing GlobalGle Pro
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </a>

        <!-- Heading -->
        <h1 class="hero-heading">
          Globalgle-All active. <br />tools One App.
        </h1>

        <!-- Subtitle -->
        <p class="hero-sub">
          Active business services, One App, Anywhere World Wide.when
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
const heroSection = ref<HTMLElement | null>(null)
const heroContent = ref<HTMLElement | null>(null)
const heroBox     = ref<HTMLElement | null>(null)
const heroLight   = ref<HTMLImageElement | null>(null)
const cubeVideo   = '/hero-cube.mp4'

const { $gsap } = useNuxtApp()

onMounted(() => {
  // Fade the light out as the user scrolls past the hero section
  const onScroll = () => {
    if (!heroSection.value || !heroLight.value) return
    const heroHeight = heroSection.value.offsetHeight
    const scrolled   = window.scrollY
    // Start fading at 20% into the hero, fully gone by 65%
    const progress   = (scrolled - heroHeight * 0.2) / (heroHeight * 0.45)
    heroLight.value.style.opacity = String(Math.max(0, Math.min(1, 1 - progress)))
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

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



.hero-light {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 900px;
  height: auto;
  pointer-events: none;
  z-index: 4;
  mix-blend-mode: screen;
  user-select: none;
  will-change: opacity;
  filter: brightness(2.2) saturate(1.4);
  opacity: 1;
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
/* Outer = the gradient border itself */
.hero-badge {
  display: inline-flex;
  padding: 1.5px;
  border-radius: 999px;
  background: linear-gradient(90deg, #7c2d12 0%, #c2410c 35%, #f97316 65%, #c2410c 100%);
  text-decoration: none;
  transition: filter 0.25s ease, transform 0.2s ease;
  box-shadow: none;
}

.hero-badge:hover {
  filter: brightness(1.15);
  transform: translateY(-1px);
}

/* Inner = the dark pill that sits on top of the gradient border */
.badge-inner {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 1rem;
  background: #08080d;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.1px;
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
  background: #c2410c;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.btn-primary:hover {
  background: #9a3412;
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
  color: #c2410c;
  background: rgba(249, 115, 22, 0.07);
}

/* Right — 3D cube video */
.hero-right {
  position: absolute;
  right: -4%;
  top: 50%;
  transform: translateY(-50%);
  width: 52%;
  max-width: 720px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  z-index: 3;
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
  position: relative;
  z-index: 0;
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

/* ── Tablet ── */
@media (max-width: 1023px) {
  .hero-inner  { padding: 0 2rem 0 2rem; gap: 1rem; }
  .hero-left   { width: 52%; }
  .hero-right  { width: 48%; max-width: 520px; right: -2%; }
  .hero-heading { letter-spacing: -1.5px; }
}

/* ── Mobile ── */
@media (max-width: 767px) {
  .hero {
    min-height: unset;
    align-items: flex-start;
    background: #000000;
  }

.hero-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4.5rem 1.5rem 4rem;
    min-height: unset;
    gap: 0.5rem;
  }

  /*
   * The video file has empty black space below the cube model.
   * max-height + overflow:hidden clips that dead space so the
   * cube sits flush against the text below it.
   */
  .hero-right {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 70%;
    max-width: 240px;
    max-height: 200px;
    overflow: hidden;
    order: -1;
    margin: 0;
  }

  .cube-shadow { display: none; }

  .hero-left {
    width: 100%;
    max-width: 100%;
    align-items: center;
    text-align: center;
    gap: 1.75rem;
  }

  .hero-heading {
    font-size: clamp(2.6rem, 9vw, 3.4rem);
    letter-spacing: -1.5px;
  }

  .hero-sub {
    max-width: 100%;
    font-size: 0.93rem;
  }

  .hero-sub br { display: none; }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  }

  .btn-primary,
  .btn-ghost {
    flex: 1;
    justify-content: center;
    min-width: 140px;
  }
}
</style>
