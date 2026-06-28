<template>
  <header ref="navbar" class="navbar" @mouseleave="closeDropdown">
    <div class="navbar-inner">

      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        <span class="logo-box">G</span>
        <span class="logo-text">lobalGle</span>
      </NuxtLink>

      <!-- Nav Links -->
      <nav class="nav-links">
        <div
          v-for="item in navItems"
          :key="item.label"
          class="nav-item"
          @mouseenter="item.hasDropdown ? openDropdown(item.label) : closeDropdown()"
        >
          <button class="nav-btn" :class="{ active: activeDropdown === item.label }">
            {{ item.label }}
            <svg
              v-if="item.hasDropdown"
              class="chevron"
              :class="{ rotated: activeDropdown === item.label }"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Actions -->
      <div class="nav-actions">
        <NuxtLink to="/login" class="btn-login">Log in</NuxtLink>
        <NuxtLink to="/signup" class="btn-get-started">Get started</NuxtLink>
      </div>

    </div>

    <!-- Features Dropdown -->
    <Transition name="dropdown">
      <div v-if="activeDropdown === 'Features'" ref="featuresDropdown" class="dropdown">
        <div class="dropdown-inner">

          <!-- Column 1 -->
          <div class="drop-col">
            <a href="#" class="drop-link">Spot Trading</a>
            <a href="#" class="drop-link">Futures</a>
            <a href="#" class="drop-link">Margin Trading</a>
            <a href="#" class="drop-link">Copy Trading</a>
            <a href="#" class="drop-link">Staking</a>
          </div>

          <!-- Divider -->
          <div class="drop-divider" />

          <!-- Column 2 -->
          <div class="drop-col">
            <a href="#" class="drop-link">Portfolio</a>
            <a href="#" class="drop-link">Analytics</a>
            <a href="#" class="drop-link">API Access</a>
            <a href="#" class="drop-link">Webhooks</a>
            <a href="#" class="drop-link">Wallets</a>
          </div>

          <!-- Divider -->
          <div class="drop-divider" />

          <!-- Cards -->
          <div class="drop-cards">
            <a href="#" class="drop-card">
              <span class="drop-card-title">Live<br />Markets</span>
              <div class="card-graphic card-graphic--chart">
                <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="0,40 20,28 35,32 50,15 65,20 80,5" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" fill="none"/>
                  <line x1="0" y1="10" x2="80" y2="10" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                  <line x1="0" y1="25" x2="80" y2="25" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                  <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                </svg>
              </div>
            </a>

            <a href="#" class="drop-card">
              <span class="drop-card-title">Crypto<br />Earn</span>
              <div class="card-graphic card-graphic--arc">
                <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,55 Q40,-10 70,55" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" fill="none"/>
                  <path d="M20,55 Q40,5 60,55" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none"/>
                  <path d="M30,55 Q40,20 50,55" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
            </a>
          </div>

        </div>
      </div>
    </Transition>

    <!-- Help Dropdown -->
    <Transition name="dropdown">
      <div v-if="activeDropdown === 'Help'" class="dropdown dropdown--help">
        <div class="dropdown-inner dropdown-inner--help">

          <!-- Left links -->
          <div class="drop-col">
            <a href="#" class="drop-link">Contact</a>
            <a href="#" class="drop-link">Support</a>
            <a href="#" class="drop-link">Status</a>
            <a href="#" class="drop-link">Migrate</a>
          </div>

          <!-- Divider -->
          <div class="drop-divider" />

          <!-- Knowledge base card -->
          <a href="#" class="kb-card">
            <span class="kb-title">Knowledge<br />base</span>
            <div class="kb-preview">
              <div class="kb-preview-header">
                <span class="kb-preview-brand">GlobalGle</span>
              </div>
              <div class="kb-preview-body">
                <div class="kb-preview-sidebar">
                  <div class="kb-preview-item kb-preview-item--active" />
                  <div class="kb-preview-item" />
                  <div class="kb-preview-item" />
                  <div class="kb-preview-item" />
                  <div class="kb-preview-item" />
                </div>
                <div class="kb-preview-content">
                  <div class="kb-preview-heading" />
                  <div class="kb-preview-line" />
                  <div class="kb-preview-line kb-preview-line--short" />
                  <div class="kb-preview-line" />
                  <div class="kb-preview-line kb-preview-line--short" />
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </Transition>

    <!-- Company Dropdown -->
    <Transition name="dropdown">
      <div v-if="activeDropdown === 'Company'" class="dropdown dropdown--company">
        <div class="dropdown-inner dropdown-inner--company">

          <!-- Left links -->
          <div class="drop-col">
            <a href="#" class="drop-link">About</a>
            <a href="#" class="drop-link">Blog</a>
            <a href="#" class="drop-link">Careers</a>
            <a href="#" class="drop-link">Customers</a>
            <a href="#" class="drop-link">Team</a>
          </div>

          <!-- Divider -->
          <div class="drop-divider" />

          <!-- Stacked cards -->
          <div class="drop-cards--vertical">

            <a href="#" class="drop-card-row">
              <div class="drop-card-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="20,4 36,13 36,27 20,36 4,27 4,13" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                  <polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                  <line x1="20" y1="4" x2="20" y2="10" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                  <line x1="36" y1="13" x2="30" y2="16" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                  <line x1="36" y1="27" x2="30" y2="24" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                  <line x1="20" y1="36" x2="20" y2="30" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                  <line x1="4" y1="27" x2="10" y2="24" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                  <line x1="4" y1="13" x2="10" y2="16" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
                </svg>
              </div>
              <div class="drop-card-text">
                <span class="drop-card-row-title">Our Mission</span>
                <span class="drop-card-row-sub">What drives us</span>
              </div>
            </a>

            <a href="#" class="drop-card-row">
              <div class="drop-card-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="24" height="24" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1" transform="rotate(15 20 20)"/>
                  <rect x="12" y="12" width="16" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1" transform="rotate(15 20 20)"/>
                  <circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.3)"/>
                </svg>
              </div>
              <div class="drop-card-text">
                <span class="drop-card-row-title">Our Values</span>
                <span class="drop-card-row-sub">What we stand for</span>
              </div>
            </a>

          </div>

        </div>
      </div>
    </Transition>

  </header>
</template>

<script setup lang="ts">
const navbar = ref<HTMLElement | null>(null)
const activeDropdown = ref<string | null>(null)

const navItems = [
  { label: 'Features', hasDropdown: true },
  { label: 'Company', hasDropdown: true },
  { label: 'Help', hasDropdown: true },
]

const openDropdown = (label: string) => {
  activeDropdown.value = label
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const { $gsap } = useNuxtApp()

onMounted(() => {
  if (navbar.value) {
    $gsap.from(navbar.value, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-box,
.logo-text {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
}

/* Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.4rem 0.75rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
  font-weight: 450;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
  font-family: 'Urbanist', sans-serif;
}

.nav-btn:hover,
.nav-btn.active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

.chevron {
  opacity: 0.5;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.chevron.rotated {
  transform: rotate(180deg);
  opacity: 1;
}

.nav-btn:hover .chevron {
  opacity: 1;
}

/* Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.btn-login {
  padding: 0.4rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  font-weight: 450;
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;
}

.btn-login:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

.btn-get-started {
  padding: 0.45rem 1.1rem;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: background 0.2s ease, border-color 0.2s ease;
}

.btn-get-started:hover {
  background: #252525;
  border-color: rgba(255, 255, 255, 0.22);
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  padding: 0.5rem;
}

.dropdown-inner {
  display: flex;
  align-items: flex-start;
  background: rgba(14, 14, 14, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 1.25rem;
  min-width: 560px;
}

/* Columns */
.drop-col {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;
}

.drop-link {
  padding: 0.45rem 0.65rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.875rem;
  font-weight: 450;
  text-decoration: none;
  border-radius: 7px;
  transition: color 0.15s ease, background 0.15s ease;
  white-space: nowrap;
}

.drop-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

/* Divider */
.drop-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.07);
  align-self: stretch;
  margin: 0 1rem;
}

/* Cards */
.drop-cards {
  display: flex;
  gap: 0.6rem;
  margin-left: 0.5rem;
}

.drop-card {
  position: relative;
  width: 120px;
  height: 120px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.85rem;
  text-decoration: none;
  overflow: hidden;
  transition: border-color 0.2s, background 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.drop-card:hover {
  background: #161616;
  border-color: rgba(255, 255, 255, 0.15);
}

.drop-card-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
  position: relative;
  z-index: 1;
}

.card-graphic {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 80px;
  height: 50px;
}

.card-graphic svg {
  width: 100%;
  height: 100%;
}

/* Help dropdown */
.dropdown-inner--help {
  min-width: 360px;
}

.kb-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-left: 0.5rem;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.85rem;
  text-decoration: none;
  width: 190px;
  transition: background 0.2s, border-color 0.2s;
  overflow: hidden;
}

.kb-card:hover {
  background: #161616;
  border-color: rgba(255, 255, 255, 0.15);
}

.kb-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
}

/* Mini docs preview */
.kb-preview {
  background: #0d0d0d;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 7px;
  overflow: hidden;
  flex: 1;
}

.kb-preview-header {
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.kb-preview-brand {
  font-size: 0.6rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
}

.kb-preview-body {
  display: flex;
  gap: 0;
}

.kb-preview-sidebar {
  padding: 0.5rem 0.4rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 55px;
}

.kb-preview-item {
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  width: 100%;
}

.kb-preview-item--active {
  background: rgba(255, 255, 255, 0.3);
}

.kb-preview-content {
  padding: 0.5rem 0.6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.kb-preview-heading {
  height: 7px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  width: 70%;
  margin-bottom: 0.2rem;
}

.kb-preview-line {
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  width: 100%;
}

.kb-preview-line--short {
  width: 60%;
}

/* Company dropdown overrides */
.dropdown-inner--company {
  min-width: 380px;
}

.drop-cards--vertical {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0.5rem;
}

.drop-card-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 0.85rem;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
  min-width: 190px;
}

.drop-card-row:hover {
  background: #161616;
  border-color: rgba(255, 255, 255, 0.15);
}

.drop-card-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.drop-card-icon svg {
  width: 100%;
  height: 100%;
}

.drop-card-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.drop-card-row-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
}

.drop-card-row-sub {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
}

/* Dropdown transition */
.dropdown-enter-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.dropdown-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}
.dropdown-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}
</style>
