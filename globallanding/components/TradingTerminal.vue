<template>
  <section class="terminal-section">
    <div class="terminal-inner">
      <div ref="cardRef" class="terminal-img-wrap">
        <img src="/global.png" alt="GlobalGle platform" class="terminal-img" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cardRef = ref<HTMLElement | null>(null)
const { $gsap } = useNuxtApp()

onMounted(() => {
  if (cardRef.value) {
    $gsap.from(cardRef.value, {
      scrollTrigger: { trigger: cardRef.value, start: 'top 85%' },
      y: 50,
      opacity: 0,
      filter: 'blur(14px)',
      duration: 1.3,
      ease: 'power3.out',
      delay: 0.15,
      onComplete: () => { if (cardRef.value) cardRef.value.style.filter = 'none' },
    })
  }
})
</script>

<style scoped>
.terminal-section {
  background: #0a0a0a;
  padding: 1rem 2rem 7rem;
}

.terminal-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.terminal-img-wrap {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.55);
}

.terminal-img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 767px) {
  .terminal-section { padding: 0.5rem 1rem 5rem; }
  .terminal-img-wrap { border-radius: 14px; }
}
</style>
