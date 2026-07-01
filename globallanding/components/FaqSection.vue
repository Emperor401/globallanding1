<template>
  <section class="faq-section">
    <div class="faq-inner">

      <!-- Header -->
      <div ref="headerRef" class="faq-header">
        <p class="faq-label">Frequently asked questions</p>
        <h2 class="faq-heading">Quick answers about GlobalGle.</h2>
      </div>

      <!-- Groups -->
      <div ref="bodyRef" class="faq-groups">

        <div v-for="group in groups" :key="group.title" class="faq-group">
          <p class="group-title">{{ group.title }}</p>
          <div class="group-items">
            <div
              v-for="item in group.items"
              :key="item.q"
              class="faq-item"
              :class="{ open: openItem === group.title + item.q }"
              @click="toggle(group.title + item.q)"
            >
              <div class="faq-row">
                <span class="faq-q">{{ item.q }}</span>
                <span class="faq-icon">{{ openItem === group.title + item.q ? '×' : '+' }}</span>
              </div>
              <div class="faq-answer-wrap">
                <p class="faq-answer">{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const headerRef = ref<HTMLElement | null>(null)
const bodyRef   = ref<HTMLElement | null>(null)
const openItem  = ref<string | null>(null)
const { $gsap } = useNuxtApp()

function toggle(key: string) {
  openItem.value = openItem.value === key ? null : key
}

const groups = [
  {
    title: 'Getting started',
    items: [
      { q: 'How do I create an account?',    a: 'Visit the sign-up page, enter your email address and a strong password, then verify your email. Your account will be ready in seconds.' },
      { q: 'I forgot my password.',           a: 'Click "Forgot password" on the login page. We\'ll send a reset link to your registered email address — check your spam folder if it doesn\'t arrive within a minute.' },
      { q: 'Can I change my email address?', a: 'Yes. Go to Account Settings → Profile and enter your new email. A confirmation link will be sent to the new address before the change takes effect.' },
    ],
  },
  {
    title: 'Security & 2FA',
    items: [
      { q: 'How does two-factor authentication work?', a: 'When enabled, you\'ll be asked for a one-time code every time you log in. The code is sent to your linked Telegram account or authenticator app.' },
      { q: 'What if I lose access to my Telegram?',   a: 'Use one of your backup codes generated when you first enabled 2FA. If you no longer have them, contact support with your identity documents to recover access.' },
    ],
  },
]

onMounted(() => {
  if (headerRef.value) {
    $gsap.from(headerRef.value.children, {
      scrollTrigger: { trigger: headerRef.value, start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
    })
  }
  if (bodyRef.value) {
    $gsap.from(bodyRef.value.children, {
      scrollTrigger: { trigger: bodyRef.value, start: 'top 88%' },
      y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1,
    })
  }
})
</script>

<style scoped>
.faq-section {
  background: #0a0a0a;
  padding: 8rem 2rem;
}

.faq-inner {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Header */
.faq-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.faq-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c2410c;
  margin: 0;
}

.faq-heading {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 1.15;
}

/* Groups */
.faq-groups {
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
}

.faq-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.group-title {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffffff;
  margin: 0 0 0.75rem;
}

/* Items — orange gradient line-separated */
.group-items {
  display: flex;
  flex-direction: column;
}

.faq-item {
  position: relative;
  cursor: pointer;
}

.faq-item::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(194,65,12,0.5) 30%, rgba(249,115,22,0.7) 55%, rgba(194,65,12,0.5) 75%, transparent 100%);
}

.faq-item:last-child::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(194,65,12,0.5) 30%, rgba(249,115,22,0.7) 55%, rgba(194,65,12,0.5) 75%, transparent 100%);
}

.faq-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.25rem 0;
}

.faq-q {
  font-size: 0.97rem;
  font-weight: 500;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
  background: none !important;
  line-height: 1.4;
  transition: opacity 0.2s;
}

.faq-item:not(.open) .faq-q {
  opacity: 0.72;
}

.faq-item:hover .faq-q,
.faq-item.open .faq-q {
  opacity: 1;
  font-weight: 600;
}

.faq-icon {
  flex-shrink: 0;
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.2s, transform 0.25s;
  width: 22px;
  text-align: center;
}

.faq-item.open .faq-icon {
  color: #c2410c;
  transform: rotate(45deg);
}

/* Answer */
.faq-answer-wrap {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

.faq-item.open .faq-answer-wrap {
  max-height: 400px;
}

.faq-answer {
  margin: 0;
  padding: 0 0 1.15rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5) !important;
  line-height: 1.75;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.5) !important;
  background: none !important;
}

@media (max-width: 767px) {
  .faq-section { padding: 5rem 1.25rem; }
  .faq-heading { font-size: clamp(1.6rem, 6vw, 2.2rem); }
  .faq-row     { padding: 1rem 0; }
}
</style>
