<template>
  <section class="quote-section">
    <div class="quote-inner">

      <!-- Company icon -->
      <div ref="iconRef" class="quote-icon">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="2,22 8,10 14,16 20,6 26,10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <polyline points="20,6 26,6 26,12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>

      <!-- Quote -->
      <blockquote ref="quoteRef" class="quote-text">
        GlobalGle is transforming crypto trading for everyone.
        Powerful tools, clean interface, real-time data.
        Everything a modern trader could ever need.
      </blockquote>

      <!-- CEO attribution -->
      <div ref="authorRef" class="quote-author">

        <!-- Cartoon avatar -->
        <div class="avatar">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background circle -->
            <circle cx="24" cy="24" r="24" fill="#1a1a1a"/>
            <!-- Body / shirt -->
            <ellipse cx="24" cy="42" rx="14" ry="10" fill="#2a2a2a"/>
            <!-- Collar -->
            <path d="M19 36 L24 40 L29 36" stroke="#3a3a3a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <!-- Neck -->
            <rect x="21" y="31" width="6" height="5" rx="2" fill="#c8a882"/>
            <!-- Head -->
            <ellipse cx="24" cy="24" rx="9" ry="10" fill="#c8a882"/>
            <!-- Hair -->
            <path d="M15 22 Q15 13 24 13 Q33 13 33 22 Q33 17 28 16 Q24 14 20 16 Q16 17 15 22Z" fill="#2a1f14"/>
            <!-- Side hair -->
            <ellipse cx="15.5" cy="23" rx="1.5" ry="3" fill="#2a1f14"/>
            <ellipse cx="32.5" cy="23" rx="1.5" ry="3" fill="#2a1f14"/>
            <!-- Eyes -->
            <ellipse cx="20.5" cy="23" rx="1.5" ry="1.8" fill="#1a1209"/>
            <ellipse cx="27.5" cy="23" rx="1.5" ry="1.8" fill="#1a1209"/>
            <!-- Eye shine -->
            <circle cx="21.1" cy="22.4" r="0.5" fill="white"/>
            <circle cx="28.1" cy="22.4" r="0.5" fill="white"/>
            <!-- Eyebrows -->
            <path d="M18.5 20.5 Q20.5 19.5 22.5 20.5" stroke="#2a1f14" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M25.5 20.5 Q27.5 19.5 29.5 20.5" stroke="#2a1f14" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <!-- Nose -->
            <path d="M23.5 25 Q24 26.5 24.5 25" stroke="#b08060" stroke-width="1" fill="none" stroke-linecap="round"/>
            <!-- Smile -->
            <path d="M20.5 28.5 Q24 31 27.5 28.5" stroke="#a06040" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <!-- Ears -->
            <ellipse cx="15" cy="24" rx="1.5" ry="2" fill="#c8a882"/>
            <ellipse cx="33" cy="24" rx="1.5" ry="2" fill="#c8a882"/>
          </svg>
        </div>

        <div class="author-info">
          <p class="author-name">James Okafor</p>
          <p class="author-role">CEO at GlobalGle</p>
        </div>

      </div>

      <!-- Bottom badge -->
      <a ref="badgeRef" href="/signup" class="quote-badge">
        Trade with GlobalGle
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </a>

    </div>
  </section>
</template>

<script setup lang="ts">
const iconRef  = ref<HTMLElement | null>(null)
const quoteRef = ref<HTMLElement | null>(null)
const authorRef = ref<HTMLElement | null>(null)
const badgeRef = ref<HTMLElement | null>(null)

const { $gsap } = useNuxtApp()

onMounted(() => {
  const els = [iconRef.value, quoteRef.value, authorRef.value, badgeRef.value]
  els.forEach((el, i) => {
    if (!el) return
    $gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 28,
      opacity: 0,
      filter: 'blur(12px)',
      duration: 1.1,
      ease: 'power3.out',
      delay: i * 0.16,
      onComplete: () => { if (el) (el as HTMLElement).style.filter = 'none' },
    })
  })
})
</script>

<style scoped>
.quote-section {
  background: #0a0a0a;
  padding: 9rem 2rem;
}

.quote-inner {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

/* Company icon */
.quote-icon {
  width: 64px;
  height: 64px;
  background: #111111;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Quote */
.quote-text {
  font-size: clamp(1.2rem, 2.5vw, 1.55rem);
  font-weight: 500;
  color: #ffffff;
  line-height: 1.65;
  letter-spacing: -0.3px;
  margin: 0;
  quotes: none;
}

/* Author */
.quote-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.1);
}

.author-info {
  text-align: left;
}

.author-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.author-role {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
  margin: 0;
}

/* Bottom badge */
.quote-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.1rem;
  background: #161616;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  color: rgba(255,255,255,0.7);
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.quote-badge:hover {
  background: #1f1f1f;
  color: #ffffff;
  border-color: rgba(255,255,255,0.2);
}
</style>
