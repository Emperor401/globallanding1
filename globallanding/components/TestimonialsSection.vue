<template>
  <section class="testimonials-section">

    <!-- Heading -->
    <div ref="headerRef" class="testimonials-header">
      <h2 class="testimonials-heading">Beyond expectations</h2>
      <p class="testimonials-sub">
        GlobalGle is driving remarkable banking experiences that enable success stories,<br />
        empower customers, and fuel growth across all levels of users.
      </p>
    </div>

    <!-- Scrolling cards track -->
    <div class="track-wrapper">
      <div class="track" ref="trackRef">
        <div
          v-for="(review, i) in [...reviews, ...reviews]"
          :key="i"
          class="review-card"
        >
          <p class="review-quote">"{{ review.quote }}"</p>
          <div class="review-author">
            <div class="review-avatar">
              <!-- Company icon -->
              <div class="avatar-company">
                <span v-html="review.companyIcon" />
              </div>
              <!-- Cartoon face -->
              <div class="avatar-face">
                <span v-html="review.avatar" />
              </div>
            </div>
            <div class="review-info">
              <p class="review-name">{{ review.name }}</p>
              <p class="review-role">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const trackRef  = ref<HTMLElement | null>(null)

const reviews = [
  {
    quote: "GlobalGle completely changed how I manage my finances. The interface is clean, fast, and the analytics are next level.",
    name: "Marcus Reid",
    role: "Entrepreneur & Investor",
    companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    avatar: cartoonA(),
  },
  {
    quote: "If you're getting into crypto, GlobalGle is the platform you need. Zero friction, powerful tools, and real-time data that actually works.",
    name: "Sophia Chen",
    role: "Co-founder & CEO of CryptoVault",
    companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    avatar: cartoonB(),
  },
  {
    quote: "We were live within minutes. The portfolio visibility and reporting tools gave us insights we didn't even know we were missing.",
    name: "Ty Okonkwo",
    role: "Co-founder & CEO of FinBase",
    companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
    avatar: cartoonC(),
  },
  {
    quote: "GlobalGle is a game-changer. I've tried dozens of platforms and nothing comes close to the experience here.",
    name: "Anika Patel",
    role: "Portfolio Manager at Nexus Capital",
    companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>`,
    avatar: cartoonD(),
  },
  {
    quote: "The auto-savings feature alone is worth it. My finances have never been this well managed with so little effort.",
    name: "James Osei",
    role: "Retail Investor & Blogger",
    companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
    avatar: cartoonE(),
  },
  {
    quote: "Seamless onboarding, beautiful UI, and the real-time charts are stunning. GlobalGle nailed it completely.",
    name: "Laura Kim",
    role: "Head of Product at BlockFin",
    companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    avatar: cartoonF(),
  },
]

function cartoonA() {
  return `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#1a1a1a"/>
    <ellipse cx="21" cy="37" rx="12" ry="8" fill="#222"/>
    <rect x="18.5" y="27" width="5" height="5" rx="2" fill="#d4a574"/>
    <ellipse cx="21" cy="21" rx="8" ry="9" fill="#d4a574"/>
    <path d="M13 19 Q13 11 21 11 Q29 11 29 19 Q28 14 24 13 Q21 12 18 13 Q14 14 13 19Z" fill="#2c1a0e"/>
    <ellipse cx="13.5" cy="20" rx="1.3" ry="2.5" fill="#2c1a0e"/>
    <ellipse cx="28.5" cy="20" rx="1.3" ry="2.5" fill="#2c1a0e"/>
    <ellipse cx="18" cy="20" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <ellipse cx="24" cy="20" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <circle cx="18.5" cy="19.5" r="0.45" fill="white"/>
    <circle cx="24.5" cy="19.5" r="0.45" fill="white"/>
    <path d="M16.5 17.5 Q18 16.5 19.5 17.5" stroke="#2c1a0e" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M22.5 17.5 Q24 16.5 25.5 17.5" stroke="#2c1a0e" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M18 24.5 Q21 27 24 24.5" stroke="#b07040" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M20.5 22.5 Q21 23.5 21.5 22.5" stroke="#b07040" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <ellipse cx="13" cy="21" rx="1.3" ry="2" fill="#d4a574"/>
    <ellipse cx="29" cy="21" rx="1.3" ry="2" fill="#d4a574"/>
  </svg>`
}

function cartoonB() {
  return `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#1a1a1a"/>
    <ellipse cx="21" cy="37" rx="12" ry="8" fill="#2a1a2a"/>
    <rect x="18.5" y="27" width="5" height="5" rx="2" fill="#f0c8a0"/>
    <ellipse cx="21" cy="21" rx="8" ry="9" fill="#f0c8a0"/>
    <path d="M13 17 Q13 9 21 9 Q29 9 29 17" fill="#1a0a0a"/>
    <path d="M13 17 Q14 13 17 12 Q21 10 25 12 Q28 13 29 17 Q26 15 21 15 Q16 15 13 17Z" fill="#1a0a0a"/>
    <path d="M28 12 Q30 12 30 15" stroke="#1a0a0a" stroke-width="2" fill="none"/>
    <path d="M26 10 Q29 9 31 12" stroke="#1a0a0a" stroke-width="2" fill="none" stroke-linecap="round"/>
    <ellipse cx="17.5" cy="20" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <ellipse cx="24.5" cy="20" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <circle cx="18" cy="19.5" r="0.45" fill="white"/>
    <circle cx="25" cy="19.5" r="0.45" fill="white"/>
    <path d="M15.5 17.5 Q17 16.5 18.5 17.5" stroke="#1a0a0a" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M23.5 17.5 Q25 16.5 26.5 17.5" stroke="#1a0a0a" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M17.5 24.5 Q21 27 24.5 24.5" stroke="#c09070" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <ellipse cx="13" cy="21" rx="1.3" ry="2" fill="#f0c8a0"/>
    <ellipse cx="29" cy="21" rx="1.3" ry="2" fill="#f0c8a0"/>
  </svg>`
}

function cartoonC() {
  return `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#1a1a1a"/>
    <ellipse cx="21" cy="37" rx="12" ry="8" fill="#1a1a2e"/>
    <rect x="18.5" y="27" width="5" height="5" rx="2" fill="#8b5e3c"/>
    <ellipse cx="21" cy="21" rx="8" ry="9" fill="#8b5e3c"/>
    <path d="M13 20 Q13 11 21 11 Q29 11 29 20" fill="#0e0e0e"/>
    <path d="M13 20 Q14 13 21 12 Q28 13 29 20 Q27 16 21 16 Q15 16 13 20Z" fill="#0e0e0e"/>
    <ellipse cx="18" cy="20.5" rx="1.4" ry="1.7" fill="#0a0605"/>
    <ellipse cx="24" cy="20.5" rx="1.4" ry="1.7" fill="#0a0605"/>
    <circle cx="18.5" cy="20" r="0.45" fill="white"/>
    <circle cx="24.5" cy="20" r="0.45" fill="white"/>
    <!-- Glasses -->
    <rect x="15" y="18.5" width="5.5" height="4" rx="2" stroke="rgba(255,255,255,0.4)" stroke-width="0.9" fill="none"/>
    <rect x="21.5" y="18.5" width="5.5" height="4" rx="2" stroke="rgba(255,255,255,0.4)" stroke-width="0.9" fill="none"/>
    <line x1="20.5" y1="20.5" x2="21.5" y2="20.5" stroke="rgba(255,255,255,0.4)" stroke-width="0.9"/>
    <line x1="15" y1="20.5" x2="13.5" y2="20.5" stroke="rgba(255,255,255,0.4)" stroke-width="0.9"/>
    <line x1="27" y1="20.5" x2="28.5" y2="20.5" stroke="rgba(255,255,255,0.4)" stroke-width="0.9"/>
    <path d="M17.5 17.5 Q19 16.5 20.5 17.5" stroke="#0e0e0e" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M21.5 17.5 Q23 16.5 24.5 17.5" stroke="#0e0e0e" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M18 24.5 Q21 26.5 24 24.5" stroke="#6b3e1c" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <ellipse cx="13" cy="21" rx="1.3" ry="2" fill="#8b5e3c"/>
    <ellipse cx="29" cy="21" rx="1.3" ry="2" fill="#8b5e3c"/>
  </svg>`
}

function cartoonD() {
  return `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#1a1a1a"/>
    <ellipse cx="21" cy="37" rx="12" ry="8" fill="#1e1e1e"/>
    <rect x="18.5" y="27" width="5" height="5" rx="2" fill="#e8b090"/>
    <ellipse cx="21" cy="21" rx="8" ry="9" fill="#e8b090"/>
    <!-- Bun hairstyle -->
    <ellipse cx="21" cy="10" rx="5" ry="5" fill="#c8a060"/>
    <circle cx="21" cy="8" rx="3.5" ry="3.5" fill="#c8a060"/>
    <path d="M13 18 Q13 11 21 11 Q29 11 29 18" fill="#c8a060"/>
    <ellipse cx="13.5" cy="20" rx="1.3" ry="2.5" fill="#c8a060"/>
    <ellipse cx="28.5" cy="20" rx="1.3" ry="2.5" fill="#c8a060"/>
    <ellipse cx="17.5" cy="20.5" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <ellipse cx="24.5" cy="20.5" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <circle cx="18" cy="20" r="0.45" fill="white"/>
    <circle cx="25" cy="20" r="0.45" fill="white"/>
    <path d="M16 18 Q17.5 17 19 18" stroke="#c8a060" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M23 18 Q24.5 17 26 18" stroke="#c8a060" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M17.5 24.5 Q21 27 24.5 24.5" stroke="#c08060" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M20.5 22 Q21 23 21.5 22" stroke="#c08060" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <ellipse cx="13" cy="21" rx="1.3" ry="2" fill="#e8b090"/>
    <ellipse cx="29" cy="21" rx="1.3" ry="2" fill="#e8b090"/>
  </svg>`
}

function cartoonE() {
  return `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#1a1a1a"/>
    <ellipse cx="21" cy="37" rx="12" ry="8" fill="#222"/>
    <rect x="18.5" y="27" width="5" height="5" rx="2" fill="#6b3d1e"/>
    <ellipse cx="21" cy="21" rx="8" ry="9" fill="#6b3d1e"/>
    <!-- Afro -->
    <ellipse cx="21" cy="14" rx="10" ry="8" fill="#0e0808"/>
    <ellipse cx="14" cy="18" rx="3.5" ry="5" fill="#0e0808"/>
    <ellipse cx="28" cy="18" rx="3.5" ry="5" fill="#0e0808"/>
    <ellipse cx="21" cy="11" rx="8" ry="6" fill="#0e0808"/>
    <ellipse cx="17.5" cy="21" rx="1.4" ry="1.7" fill="#0a0605"/>
    <ellipse cx="24.5" cy="21" rx="1.4" ry="1.7" fill="#0a0605"/>
    <circle cx="18" cy="20.5" r="0.45" fill="white"/>
    <circle cx="25" cy="20.5" r="0.45" fill="white"/>
    <path d="M15.5 18.5 Q17 17.5 18.5 18.5" stroke="#0e0808" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M23.5 18.5 Q25 17.5 26.5 18.5" stroke="#0e0808" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M18 25 Q21 27.5 24 25" stroke="#4b2a0e" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <ellipse cx="13" cy="21" rx="1.3" ry="2" fill="#6b3d1e"/>
    <ellipse cx="29" cy="21" rx="1.3" ry="2" fill="#6b3d1e"/>
  </svg>`
}

function cartoonF() {
  return `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill="#1a1a1a"/>
    <ellipse cx="21" cy="37" rx="12" ry="8" fill="#1e2230"/>
    <rect x="18.5" y="27" width="5" height="5" rx="2" fill="#f5d5b5"/>
    <ellipse cx="21" cy="21" rx="8" ry="9" fill="#f5d5b5"/>
    <!-- Straight long hair -->
    <rect x="12" y="14" width="4" height="16" rx="2" fill="#3a2010"/>
    <rect x="26" y="14" width="4" height="16" rx="2" fill="#3a2010"/>
    <path d="M13 17 Q13 10 21 10 Q29 10 29 17" fill="#3a2010"/>
    <ellipse cx="17.5" cy="21" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <ellipse cx="24.5" cy="21" rx="1.3" ry="1.6" fill="#1a0e05"/>
    <circle cx="18" cy="20.5" r="0.45" fill="white"/>
    <circle cx="25" cy="20.5" r="0.45" fill="white"/>
    <path d="M15.5 18 Q17 17 18.5 18" stroke="#3a2010" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M23.5 18 Q25 17 26.5 18" stroke="#3a2010" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M18 24.5 Q21 27 24 24.5" stroke="#d0a080" stroke-width="1.1" fill="none" stroke-linecap="round"/>
    <path d="M20.5 22.5 Q21 23.5 21.5 22.5" stroke="#d0a080" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <ellipse cx="13" cy="21" rx="1.3" ry="2" fill="#f5d5b5"/>
    <ellipse cx="29" cy="21" rx="1.3" ry="2" fill="#f5d5b5"/>
  </svg>`
}

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (headerRef.value) {
    $gsap.from(headerRef.value.children, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 88%' },
      y: 24, opacity: 0, filter: 'blur(10px)',
      duration: 1, ease: 'power3.out', stagger: 0.12,
      onComplete: () => {
        Array.from(headerRef.value!.children).forEach(el => {
          (el as HTMLElement).style.filter = 'none'
        })
      },
    })
  }

  // Auto-scroll the track
  if (trackRef.value) {
    const totalWidth = trackRef.value.scrollWidth / 2
    $gsap.to(trackRef.value, {
      x: -totalWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
    })
  }
})
</script>

<style scoped>
.testimonials-section {
  background: #0a0a0a;
  padding: 8rem 0;
  overflow: hidden;
}

/* Header */
.testimonials-header {
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  padding: 0 2rem;
}

.testimonials-heading {
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin: 0 0 1rem;
}

.testimonials-sub {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.75;
  margin: 0;
}

/* Scrolling track */
.track-wrapper {
  width: 100%;
  overflow: hidden;
}

.track {
  display: flex;
  gap: 1rem;
  width: max-content;
  padding: 0.5rem 0.5rem 1.5rem;
}

/* Individual review card */
.review-card {
  width: 340px;
  flex-shrink: 0;
  background: #111111;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.2s;
}

.review-card:hover {
  border-color: rgba(255,255,255,0.15);
}

.review-quote {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

/* Author row */
.review-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

/* Avatar cluster */
.review-avatar {
  position: relative;
  width: 52px;
  height: 42px;
  flex-shrink: 0;
}

.avatar-company {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 26px;
  height: 26px;
  background: #222222;
  border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.avatar-face {
  position: absolute;
  top: 0;
  right: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(255,255,255,0.1);
  z-index: 1;
}

.review-info { flex: 1; }

.review-name {
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.15rem;
}

.review-role {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
  margin: 0;
}

@media (max-width: 767px) {
  .testimonials-section  { padding: 5rem 0; }
  .testimonials-header   { margin-bottom: 2.5rem; padding: 0 1.25rem; }
  .testimonials-heading  { font-size: clamp(2rem, 7vw, 2.8rem); }
  .testimonials-sub br   { display: none; }
  .review-card           { width: 290px; padding: 1.25rem; }
}
</style>
