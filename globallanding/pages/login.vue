<template>
  <div class="login-page">

    <div class="curve curve-left" />
    <div class="curve curve-right" />

    <div class="login-card">

      <NuxtLink to="/" class="logo-wrap">
        <img src="/logo.png" alt="GlobalGle" class="logo-img" />
      </NuxtLink>

      <h1 class="title">Log in to GlobalGle</h1>
      <p class="subtitle">
        Don't have an account?
        <NuxtLink to="/signup" class="link">Sign up</NuxtLink>.
      </p>

      <!-- OAuth -->
      <div class="oauth-row">
        <button class="oauth-btn" type="button" @click="oauthNotice">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <div class="divider">
        <span class="divider-line" />
        <span class="divider-text">or</span>
        <span class="divider-line" />
      </div>

      <!-- Error alert -->
      <Transition name="slide-down">
        <div v-if="error" class="alert alert--error">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {{ error }}
        </div>
      </Transition>

      <!-- Form -->
      <form class="form" @submit.prevent="handleSubmit" novalidate>

        <div class="field">
          <label class="label">Email address</label>
          <input
            v-model="form.email"
            type="email"
            class="input"
            :class="{ 'input--error': errors.email }"
            placeholder="james@example.com"
            autocomplete="email"
          />
          <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
        </div>

        <div class="field">
          <div class="label-row">
            <label class="label">Password</label>
            <a href="#" class="forgot-link" @click.prevent>Forgot password?</a>
          </div>
          <div class="input-wrap">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="input"
              :class="{ 'input--error': errors.password }"
              placeholder="••••••••••••"
              autocomplete="current-password"
            />
            <button type="button" class="eye-btn" @click="showPassword = !showPassword">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
          <span v-if="errors.password" class="field-error">{{ errors.password }}</span>
        </div>

        <button type="submit" class="btn-submit" :disabled="loading">
          <span v-if="loading" class="spinner" />
          <span v-else>Log in</span>
        </button>

      </form>

      <p class="footer-text">
        By signing in, you agree to our
        <a href="#" class="link">Terms</a> and
        <a href="#" class="link">Privacy Policy</a>.
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { login } = useAuth()
const router = useRouter()

const showPassword = ref(false)
const loading      = ref(false)
const error        = ref('')

const form   = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '' })

const validate = () => {
  errors.email = errors.password = ''
  let valid = true
  if (!form.email) { errors.email = 'Email is required.'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Enter a valid email address.'; valid = false }
  if (!form.password) { errors.password = 'Password is required.'; valid = false }
  return valid
}

const oauthNotice = () => { error.value = 'OAuth providers require a backend — use email/password for now.' }

const handleSubmit = async () => {
  error.value = ''
  if (!validate()) return
  loading.value = true
  await new Promise(r => setTimeout(r, 800))
  const result = login(form.email.trim(), form.password)
  loading.value = false
  if (!result.success) { error.value = result.error || 'Something went wrong.'; return }
  router.push('/')
}
</script>

<style scoped>
.login-page {
  min-height: 100vh; background: #0a0a0a;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; padding: 2rem;
}

.curve { position: absolute; width: 480px; height: 700px; border-radius: 50%; filter: blur(2px); pointer-events: none; }
.curve-left { left: -220px; top: 50%; transform: translateY(-50%) rotate(-20deg); background: linear-gradient(160deg, #2a2a2a 0%, #111111 50%, transparent 100%); }
.curve-right { right: -220px; top: 50%; transform: translateY(-50%) rotate(20deg); background: linear-gradient(200deg, #2a2a2a 0%, #111111 50%, transparent 100%); }

.login-card { position: relative; z-index: 10; width: 100%; max-width: 480px; display: flex; flex-direction: column; align-items: center; gap: 1rem; }

.logo-wrap { width: 52px; height: 52px; border-radius: 50%; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 0.25rem; text-decoration: none; flex-shrink: 0; }
.logo-img { width: 100%; height: 100%; object-fit: cover; display: block; }

.title { font-size: 1.5rem; font-weight: 700; color: #fff; text-align: center; letter-spacing: -0.3px; margin: 0; }
.subtitle { font-size: 0.875rem; color: rgba(255,255,255,0.5); text-align: center; margin: 0; }

.link { color: #fff; font-weight: 600; text-decoration: none; transition: opacity 0.2s; }
.link:hover { opacity: 0.75; }

.oauth-row { display: flex; justify-content: center; width: 100%; margin-top: 0.5rem; }
.oauth-btn { min-width: 220px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.65rem 1rem; background: #161616; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: rgba(255,255,255,0.85); font-size: 0.875rem; font-weight: 500; font-family: 'Urbanist', sans-serif; cursor: pointer; transition: background 0.2s, border-color 0.2s; white-space: nowrap; }
.oauth-btn:hover { background: #1f1f1f; border-color: rgba(255,255,255,0.18); }

.divider { display: flex; align-items: center; gap: 0.75rem; width: 100%; }
.divider-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(194,65,12,0.6), rgba(249,115,22,0.8), rgba(194,65,12,0.6), transparent); }
.divider-text { font-size: 0.8rem; color: rgba(255,255,255,0.45); }

.alert { width: 100%; display: flex; align-items: center; gap: 0.5rem; padding: 0.7rem 1rem; border-radius: 10px; font-size: 0.82rem; font-weight: 500; }
.alert--error { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,80,80,0.3); color: rgba(255,140,140,0.9); }

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-6px); }

.form { width: 100%; display: flex; flex-direction: column; gap: 0.85rem; }
.field { display: flex; flex-direction: column; gap: 0.4rem; }

.label-row { display: flex; align-items: center; justify-content: space-between; }
.label { font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.7); }
.forgot-link { font-size: 0.78rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
.forgot-link:hover { color: rgba(255,255,255,0.7); }

.input-wrap { position: relative; display: flex; align-items: center; }
.input { width: 100%; padding: 0.7rem 1rem; background: #161616; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; color: #fff; font-size: 0.875rem; font-family: 'Urbanist', sans-serif; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
.input--error { border-color: rgba(255,80,80,0.45) !important; }
.input::placeholder { color: rgba(255,255,255,0.25); }
.input:focus { border-color: rgba(255,255,255,0.25); }

.eye-btn { position: absolute; right: 0.75rem; background: transparent; border: none; color: rgba(255,255,255,0.4); cursor: pointer; display: flex; align-items: center; transition: color 0.2s; }
.eye-btn:hover { color: rgba(255,255,255,0.75); }

.field-error { font-size: 0.75rem; color: rgba(255,120,120,0.9); margin-top: 0.1rem; }

.btn-submit { width: 100%; padding: 0.75rem; background: #ffffff; border: none; border-radius: 10px; color: #0a0a0a; font-size: 0.9rem; font-weight: 700; font-family: 'Urbanist', sans-serif; cursor: pointer; transition: background 0.2s, opacity 0.2s; margin-top: 0.25rem; display: flex; align-items: center; justify-content: center; }
.btn-submit:hover:not(:disabled) { background: #e8e8e8; }
.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.spinner { width: 16px; height: 16px; border: 2px solid rgba(0,0,0,0.3); border-top-color: #0a0a0a; border-radius: 50%; animation: spin 0.7s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.footer-text { font-size: 0.8rem; color: rgba(255,255,255,0.35); text-align: center; line-height: 1.6; margin-top: 0.5rem; }
</style>
