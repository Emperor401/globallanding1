<template>
  <section ref="sectionRef" class="terminal-section">
    <div class="terminal-inner">
      <div ref="cardRef" class="terminal-img-wrap">
        <img src="/global.png" alt="GlobalGle platform" class="terminal-img" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const cardRef    = ref<HTMLElement | null>(null)
const activeCoin = useState<string>('activeCoin')
const { $gsap }  = useNuxtApp()

const showSection = () => {
  if (!sectionRef.value) return
  sectionRef.value.style.display = 'block'
  $gsap.fromTo(sectionRef.value,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
  )
}

const hideSection = () => {
  if (!sectionRef.value) return
  $gsap.to(sectionRef.value, {
    opacity: 0, y: -12, duration: 0.3, ease: 'power2.in',
    onComplete: () => { if (sectionRef.value) sectionRef.value.style.display = 'none' },
  })
}

watch(activeCoin, (val) => {
  val === 'BTC' ? showSection() : hideSection()
})

onMounted(() => {
  // Start hidden if not on BTC
  if (activeCoin.value !== 'BTC' && sectionRef.value) {
    sectionRef.value.style.display = 'none'
  }

  if (cardRef.value) {
    $gsap.from(cardRef.value, {
      scrollTrigger: { trigger: cardRef.value, start: 'top 85%' },
      y: 50, opacity: 0, filter: 'blur(14px)',
      duration: 1.3, ease: 'power3.out', delay: 0.15,
      onComplete: () => { if (cardRef.value) cardRef.value.style.filter = 'none' },
    })
  }
})
</script>

<style scoped>
.terminal-section {
  background: #0a0a0a;
  padding: 0 2rem 7rem;
}

.terminal-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.terminal-img-wrap {
  width: 100%;
  border-radius: 20px 20px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: none;
  position: relative;
  overflow: hidden;
}

.terminal-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 18px 18px 0 0;
}

.terminal-img-wrap::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 55%;
  background: linear-gradient(to bottom, transparent 0%, #0a0a0a 100%);
  pointer-events: none;
  z-index: 10;
}

@media (max-width: 767px) {
  .terminal-section { padding: 0.5rem 1rem 5rem; }
  .terminal-img-wrap { border-radius: 14px 14px 0 0; }
  .terminal-img { border-radius: 12px 12px 0 0; }
}
</style>
