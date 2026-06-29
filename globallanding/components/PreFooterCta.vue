<template>
  <section class="pf-cta">

    <div class="pf-inner" ref="contentRef">

      <!-- Video icon — same pattern as other sections -->
      <div class="pf-icon-wrap">
        <div class="pf-icon">
          <video :src="iconVideo" autoplay loop muted playsinline class="pf-icon-video" />
          <div class="pf-icon-glow" />
        </div>
      </div>

      <h2 class="pf-heading">
        Bank smarter.<br />
        <span class="pf-heading-dim">Start today.</span>
      </h2>

      <div class="pf-actions">
        <NuxtLink to="/signup" class="pf-btn-primary">
          Get started
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </NuxtLink>
        <a href="#" class="pf-btn-ghost">
          Contact us
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const iconVideo = '/foot.mp4'

const contentRef = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  if (contentRef.value) {
    $gsap.from(contentRef.value.children, {
      scrollTrigger: { trigger: contentRef.value, start: 'top 85%' },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.18,
    })
  }
})
</script>

<style scoped>
.pf-cta {
  position: relative;
  background: #0a0a0a;
  padding: 7rem 2rem 8rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Center content */
.pf-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
}

/* Video icon */
.pf-icon-wrap {
  display: flex;
  justify-content: center;
}

.pf-icon {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 36px;
  overflow: hidden;
  background: linear-gradient(160deg, #0e0e18 0%, #080810 100%);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.pf-icon-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pf-icon-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(to top, rgba(6, 182, 212, 0.12) 0%, transparent 100%);
  pointer-events: none;
}

/* Heading */
.pf-heading {
  font-family: 'Urbanist', sans-serif;
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -2px;
  margin: 0;
  color: #ffffff;
}

.pf-heading-dim {
  color: rgba(255, 255, 255, 0.35);
}

/* Buttons */
.pf-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.pf-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.4rem;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Urbanist', sans-serif;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}

.pf-btn-primary:hover {
  background: #252525;
  border-color: rgba(255, 255, 255, 0.22);
}

.pf-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.2rem;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  text-decoration: none;
  transition: color 0.2s;
}

.pf-btn-ghost:hover {
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 767px) {
  .pf-cta     { padding: 5rem 1.5rem 6rem; }
  .pf-icon    { width: 120px; height: 120px; border-radius: 28px; }
  .pf-heading { font-size: clamp(2.8rem, 10vw, 4.5rem); letter-spacing: -1.5px; }
  .pf-actions { flex-direction: column; align-items: stretch; gap: 0.75rem; }
  .pf-btn-primary,
  .pf-btn-ghost { justify-content: center; }
}
</style>
