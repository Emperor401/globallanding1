<template>
  <header ref="navbar" class="navbar" @mouseleave="closeDropdown">
    <div class="navbar-inner">

      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        <div class="logo-img-wrap">
          <img src="/logo.png" alt="GlobalGle" class="logo-img" />
        </div>
        <span class="logo-text">GlobalGle</span>
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
        <template v-if="user">
          <div class="profile-wrap" @mouseenter="profileOpen = true" @mouseleave="profileOpen = false">
            <button class="profile-btn">
              <span class="profile-initials">{{ initials }}</span>
            </button>
            <Transition name="dropdown">
              <div v-if="profileOpen" class="profile-dropdown">
                <div class="profile-info">
                  <span class="profile-name">{{ user.name }}</span>
                  <span class="profile-email">{{ user.email }}</span>
                </div>
                <div class="profile-divider" />
                <button class="profile-logout" @click="handleLogout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Log out
                </button>
              </div>
            </Transition>
          </div>
        </template>
        <template v-else>
          <NuxtLink to="/login" class="btn-login">Log in</NuxtLink>
          <NuxtLink to="/signup" class="btn-get-started">Get started</NuxtLink>
        </template>
      </div>

      <!-- Hamburger — mobile only -->
      <button
        class="hamburger"
        :class="{ 'is-open': mobileMenuOpen }"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>

    </div>

    <!-- Features Dropdown -->
    <Transition name="dropdown">
      <div v-if="activeDropdown === 'Features'" ref="featuresDropdown" class="dropdown">
        <div class="dropdown-inner">

          <!-- Column 1 -->
          <div class="drop-col">
            <a href="#" class="drop-link">Payments</a>
            <a href="#" class="drop-link">Wire Transfers</a>
            <a href="#" class="drop-link">Loans & Credit</a>
            <a href="#" class="drop-link">Auto Savings</a>
            <a href="#" class="drop-link">Investments</a>
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
              <div class="card-graphic">
                <svg viewBox="0 0 138 100" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- grid lines horizontal -->
                  <line x1="0" y1="20" x2="138" y2="20" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                  <line x1="0" y1="40" x2="138" y2="40" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                  <line x1="0" y1="60" x2="138" y2="60" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                  <line x1="0" y1="80" x2="138" y2="80" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
                  <!-- grid lines vertical -->
                  <line x1="27"  y1="0" x2="27"  y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                  <line x1="55"  y1="0" x2="55"  y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                  <line x1="83"  y1="0" x2="83"  y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                  <line x1="111" y1="0" x2="111" y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                  <!-- chart line -->
                  <polyline points="0,78 22,60 40,68 60,38 85,46 110,22 138,8" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>

            <a href="#" class="drop-card">
              <span class="drop-card-title">Crypto<br />Earn</span>
              <div class="card-graphic">
                <svg viewBox="0 0 138 100" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- concentric arcs rising from bottom -->
                  <path d="M-10,100 Q69,-30 148,100" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none"/>
                  <path d="M10,100 Q69,-5 128,100"   stroke="rgba(255,255,255,0.10)" stroke-width="1.5" fill="none"/>
                  <path d="M28,100 Q69,20 110,100"   stroke="rgba(255,255,255,0.08)" stroke-width="1.5" fill="none"/>
                  <path d="M44,100 Q69,38 94,100"    stroke="rgba(255,255,255,0.07)" stroke-width="1.5" fill="none"/>
                  <path d="M58,100 Q69,54 80,100"    stroke="rgba(255,255,255,0.06)" stroke-width="1.5" fill="none"/>
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

  <!-- Mobile menu — outside <header> so backdrop-filter doesn't trap position:fixed -->
  <Transition name="mobile-fade">
    <div v-if="mobileMenuOpen" class="mobile-menu">
      <div class="mobile-inner">

        <nav class="mobile-nav">

          <!-- Features accordion -->
          <div class="mobile-nav-item">
            <button
              class="mobile-nav-btn"
              :class="{ 'is-expanded': mobileExpanded === 'Features' }"
              @click="toggleMobileDropdown('Features')"
            >
              <span>Features</span>
              <svg class="mobile-chevron" :class="{ rotated: mobileExpanded === 'Features' }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <Transition name="mobile-accordion">
              <div v-if="mobileExpanded === 'Features'" class="mobile-sub-links">
                <a href="#" class="mobile-sub-link">Payments</a>
                <a href="#" class="mobile-sub-link">Wire Transfers</a>
                <a href="#" class="mobile-sub-link">Loans &amp; Credit</a>
                <a href="#" class="mobile-sub-link">Auto Savings</a>
                <a href="#" class="mobile-sub-link">Investments</a>
                <a href="#" class="mobile-sub-link">Portfolio</a>
                <a href="#" class="mobile-sub-link">Analytics</a>
                <a href="#" class="mobile-sub-link">API Access</a>
                <a href="#" class="mobile-sub-link">Webhooks</a>
                <a href="#" class="mobile-sub-link">Wallets</a>
              </div>
            </Transition>
          </div>

          <!-- Company accordion -->
          <div class="mobile-nav-item">
            <button
              class="mobile-nav-btn"
              :class="{ 'is-expanded': mobileExpanded === 'Company' }"
              @click="toggleMobileDropdown('Company')"
            >
              <span>Company</span>
              <svg class="mobile-chevron" :class="{ rotated: mobileExpanded === 'Company' }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <Transition name="mobile-accordion">
              <div v-if="mobileExpanded === 'Company'" class="mobile-sub-links">
                <a href="#" class="mobile-sub-link">About</a>
                <a href="#" class="mobile-sub-link">Blog</a>
                <a href="#" class="mobile-sub-link">Careers</a>
                <a href="#" class="mobile-sub-link">Customers</a>
                <a href="#" class="mobile-sub-link">Team</a>
              </div>
            </Transition>
          </div>

          <!-- Help accordion -->
          <div class="mobile-nav-item">
            <button
              class="mobile-nav-btn"
              :class="{ 'is-expanded': mobileExpanded === 'Help' }"
              @click="toggleMobileDropdown('Help')"
            >
              <span>Help</span>
              <svg class="mobile-chevron" :class="{ rotated: mobileExpanded === 'Help' }" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <Transition name="mobile-accordion">
              <div v-if="mobileExpanded === 'Help'" class="mobile-sub-links">
                <a href="#" class="mobile-sub-link">Contact</a>
                <a href="#" class="mobile-sub-link">Support</a>
                <a href="#" class="mobile-sub-link">Status</a>
                <a href="#" class="mobile-sub-link">Migrate</a>
              </div>
            </Transition>
          </div>

        </nav>

        <div class="mobile-sep" />

        <div class="mobile-cta">
          <template v-if="user">
            <button class="mobile-logout-btn" @click="handleLogout">Log out</button>
          </template>
          <template v-else>
            <NuxtLink to="/login"  class="mobile-login-btn"  @click="mobileMenuOpen = false">Log in</NuxtLink>
            <NuxtLink to="/signup" class="mobile-signup-btn" @click="mobileMenuOpen = false">Get started</NuxtLink>
          </template>
        </div>

      </div>
    </div>
  </Transition>

</template>

<script setup lang="ts">
const navbar        = ref<HTMLElement | null>(null)
const activeDropdown = ref<string | null>(null)
const profileOpen    = ref(false)
const mobileMenuOpen = ref(false)
const mobileExpanded = ref<string | null>(null)

const toggleMobileDropdown = (label: string) => {
  mobileExpanded.value = mobileExpanded.value === label ? null : label
}

const { getSession, logout } = useAuth()
const router = useRouter()
const route  = useRoute()

const user = ref<{ name: string; email: string } | null>(null)

const refreshUser = () => { user.value = getSession() }

onMounted(refreshUser)
watch(() => route.path, () => {
  refreshUser()
  mobileMenuOpen.value = false
  mobileExpanded.value = null
})

const initials = computed(() => {
  if (!user.value?.name) return 'U'
  return user.value.name.split(' ').map((w: string) => w[0]).join('').toUpperCase().slice(0, 2)
})

const handleLogout = () => {
  logout()
  user.value = null
  profileOpen.value = false
  router.push('/')
}

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


.navbar-light {
  position: absolute;
  top: -30px;
  right: -60px;
  width: 500px;
  height: auto;
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: screen;
  user-select: none;
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
  gap: 0.5rem;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img-wrap {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.12);
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

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
  background: #c2410c;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.2s ease;
}

.btn-get-started:hover {
  background: #9a3412;
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
  min-width: 580px;
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
  gap: 0.5rem;
  margin-left: 0.5rem;
  align-self: stretch;
}

.drop-card {
  position: relative;
  width: 138px;
  height: 172px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.9rem 0.9rem 0;
  text-decoration: none;
  overflow: hidden;
  transition: border-color 0.2s, background 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.drop-card:hover {
  background: #161616;
  border-color: rgba(255, 255, 255, 0.14);
}

.drop-card-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.35;
  position: relative;
  z-index: 1;
}

.card-graphic {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
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

/* Profile avatar */
.profile-wrap {
  position: relative;
}

.profile-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s;
}

.profile-btn:hover {
  border-color: rgba(255, 255, 255, 0.35);
}

.profile-initials {
  font-size: 0.72rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.3px;
}

/* Profile dropdown */
.profile-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  min-width: 200px;
  background: rgba(14, 14, 14, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 99;
}

.profile-info {
  padding: 0.6rem 0.75rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.profile-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
}

.profile-email {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.profile-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin: 0.25rem 0;
}

.profile-logout {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: 7px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.82rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  text-align: left;
}

.profile-logout:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: background 0.2s;
}
.hamburger:hover { background: rgba(255,255,255,0.06); }

.hamburger span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: rgba(255,255,255,0.8);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
  transform-origin: center;
}
.hamburger.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.is-open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* ── Mobile menu ── */
.mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(6,6,6,0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 97;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c2410c transparent;
}

.mobile-menu::-webkit-scrollbar { width: 3px; }
.mobile-menu::-webkit-scrollbar-track { background: transparent; }
.mobile-menu::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #7c2d12, #c2410c, #f97316);
  border-radius: 999px;
}

.mobile-inner {
  padding: 1.5rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Accordion nav */
.mobile-nav {
  display: flex;
  flex-direction: column;
}

.mobile-nav-item {
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.mobile-nav-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: color 0.2s;
  text-align: left;
}
.mobile-nav-btn.is-expanded,
.mobile-nav-btn:hover { color: #ffffff; }

.mobile-chevron {
  opacity: 0.45;
  transition: transform 0.25s ease, opacity 0.2s;
  flex-shrink: 0;
}
.mobile-chevron.rotated { transform: rotate(180deg); opacity: 1; }

/* Sub-links panel */
.mobile-sub-links {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.75rem;
  overflow: hidden;
}

.mobile-sub-link {
  padding: 0.55rem 0.75rem;
  color: rgba(255,255,255,0.45);
  font-size: 0.9rem;
  font-weight: 450;
  text-decoration: none;
  border-radius: 7px;
  transition: color 0.15s, background 0.15s;
}
.mobile-sub-link:hover {
  color: #ffffff;
  background: rgba(255,255,255,0.05);
}

/* Accordion slide transition */
.mobile-accordion-enter-active,
.mobile-accordion-leave-active {
  transition: opacity 0.2s ease, max-height 0.25s ease;
  overflow: hidden;
  max-height: 500px;
}
.mobile-accordion-enter-from,
.mobile-accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-sep {
  height: 1px;
  background: rgba(255,255,255,0.08);
}

.mobile-cta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-login-btn {
  display: block;
  padding: 0.85rem 1.25rem;
  text-align: center;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  transition: color 0.2s, border-color 0.2s;
}
.mobile-login-btn:hover { color: #ffffff; border-color: rgba(255,255,255,0.25); }

.mobile-signup-btn {
  display: block;
  padding: 0.85rem 1.25rem;
  text-align: center;
  background: #c2410c;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 10px;
  transition: background 0.2s;
}
.mobile-signup-btn:hover { background: #9a3412; }

.mobile-logout-btn {
  width: 100%;
  padding: 0.85rem 1.25rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Urbanist', sans-serif;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.mobile-logout-btn:hover { color: #ffffff; border-color: rgba(255,255,255,0.25); }

/* Mobile menu transition */
.mobile-fade-enter-active { transition: opacity 0.2s ease; }
.mobile-fade-leave-active { transition: opacity 0.15s ease; }
.mobile-fade-enter-from,
.mobile-fade-leave-to     { opacity: 0; }

/* ── Responsive breakpoints ── */
@media (max-width: 767px) {
  .navbar-inner    { padding: 0 1.25rem; }
  .nav-links       { display: none; }
  .btn-login,
  .btn-get-started { display: none; }
  .hamburger       { display: flex; }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .navbar-inner { padding: 0 1.5rem; }
  .nav-btn      { padding: 0.4rem 0.5rem; font-size: 0.82rem; }
  .btn-login    { padding: 0.4rem 0.75rem; }
}
</style>
