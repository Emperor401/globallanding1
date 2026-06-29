<template>
  <div class="signup-page">

    <div class="curve curve-left" />
    <div class="curve curve-right" />

    <div class="signup-card">

      <!-- Logo -->
      <NuxtLink to="/" class="logo-wrap">
        <span class="logo-icon">G</span>
      </NuxtLink>

      <h1 class="title">Create a GlobalGle account</h1>
      <p class="subtitle">
        Already have an account?
        <NuxtLink to="/login" class="link">Log in</NuxtLink>.
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
        <button class="oauth-btn" type="button" @click="oauthNotice">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          Continue with GitHub
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
          <label class="label">Full name</label>
          <input
            v-model="form.name"
            type="text"
            class="input"
            :class="{ 'input--error': errors.name }"
            placeholder="James Okafor"
            autocomplete="name"
          />
          <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
        </div>

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
          <label class="label">Password</label>
          <div class="input-wrap">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="input"
              :class="{ 'input--error': errors.password }"
              placeholder="Min. 8 characters"
              autocomplete="new-password"
            />
            <button type="button" class="eye-btn" @click="showPassword = !showPassword">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
          <!-- Password strength bar -->
          <div v-if="form.password" class="strength-bar">
            <div class="strength-track">
              <div class="strength-fill" :style="{ width: strengthWidth, background: strengthColor }" />
            </div>
            <span class="strength-label" :style="{ color: strengthColor }">{{ strengthLabel }}</span>
          </div>
          <span v-if="errors.password" class="field-error">{{ errors.password }}</span>
        </div>

        <div class="field">
          <label class="label">Confirm password</label>
          <div class="input-wrap">
            <input
              v-model="form.confirm"
              :type="showConfirm ? 'text' : 'password'"
              class="input"
              :class="{ 'input--error': errors.confirm }"
              placeholder="Repeat your password"
              autocomplete="new-password"
            />
            <button type="button" class="eye-btn" @click="showConfirm = !showConfirm">
              <svg v-if="!showConfirm" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
          <span v-if="errors.confirm" class="field-error">{{ errors.confirm }}</span>
        </div>

        <button type="submit" class="btn-submit" :disabled="loading">
          <span v-if="loading" class="spinner" />
          <span v-else>Create account</span>
        </button>

      </form>

      <p class="footer-text">
        By signing up, you agree to our
        <a href="#" class="link">Terms</a>,
        <a href="#" class="link">Acceptable Use</a>, and
        <a href="#" class="link">Privacy Policy</a>.
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const { signup } = useAuth()
const router = useRouter()

const showPassword = ref(false)
const showConfirm  = ref(false)
const loading      = ref(false)
const error        = ref('')

const form = reactive({ name: '', email: '', password: '', confirm: '' })
const errors = reactive({ name: '', email: '', password: '', confirm: '' })

// Password strength
const strength = computed(() => {
  const p = form.password
  if (!p) return 0
  let score = 0
  if (p.length >= 8)  score++
  if (p.length >= 12) score++
  if (/[A-Z]/.test(p)) score++
  if (/[0-9]/.test(p)) score++
  if (/[^A-Za-z0-9]/.test(p)) score++
  return score
})

const strengthWidth  = computed(() => ['0%','20%','40%','60%','80%','100%'][strength.value])
const strengthColor  = computed(() => ['#333','#555','rgba(255,255,255,0.35)','rgba(255,255,255,0.55)','rgba(255,255,255,0.75)','#ffffff'][strength.value])
const strengthLabel  = computed(() => ['','Weak','Fair','Good','Strong','Very strong'][strength.value])

const validate = () => {
  errors.name = errors.email = errors.password = errors.confirm = ''
  let valid = true
  if (!form.name.trim()) { errors.name = 'Full name is required.'; valid = false }
  if (!form.email) { errors.email = 'Email is required.'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Enter a valid email address.'; valid = false }
  if (!form.password) { errors.password = 'Password is required.'; valid = false }
  else if (form.password.length < 8) { errors.password = 'Password must be at least 8 characters.'; valid = false }
  if (!form.confirm) { errors.confirm = 'Please confirm your password.'; valid = false }
  else if (form.password !== form.confirm) { errors.confirm = 'Passwords do not match.'; valid = false }
  return valid
}

const oauthNotice = () => { error.value = 'OAuth providers require a backend — use email/password for now.' }

const handleSubmit = async () => {
  error.value = ''
  if (!validate()) return
  loading.value = true
  await new Promise(r => setTimeout(r, 800))
  const result = signup(form.name.trim(), form.email.trim(), form.password)
  loading.value = false
  if (!result.success) { error.value = result.error || 'Something went wrong.'; return }
  router.push('/')
}
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.curve {
  position: absolute;
  width: 480px; height: 700px;
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

.curve-left {
  left: -220px; top: 50%;
  transform: translateY(-50%) rotate(-20deg);
  background: linear-gradient(160deg, #2a2a2a 0%, #111111 50%, transparent 100%);
}

.curve-right {
  right: -220px; top: 50%;
  transform: translateY(-50%) rotate(20deg);
  background: linear-gradient(200deg, #2a2a2a 0%, #111111 50%, transparent 100%);
}

.signup-card {
  position: relative; z-index: 10;
  width: 100%; max-width: 480px;
  display: flex; flex-direction: column;
  align-items: center; gap: 1rem;
}

.logo-wrap {
  width: 48px; height: 48px;
  background: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 0.25rem; text-decoration: none;
}

.logo-icon { font-size: 1.4rem; font-weight: 800; color: #fff; letter-spacing: -1px; }

.title { font-size: 1.5rem; font-weight: 700; color: #fff; text-align: center; letter-spacing: -0.3px; margin: 0; }

.subtitle { font-size: 0.875rem; color: rgba(255,255,255,0.5); text-align: center; margin: 0; }

.link { color: #fff; font-weight: 600; text-decoration: none; transition: opacity 0.2s; }
.link:hover { opacity: 0.75; }

.oauth-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; width: 100%; margin-top: 0.5rem; }

.oauth-btn {
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  padding: 0.65rem 1rem;
  background: #161616; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
  color: rgba(255,255,255,0.85); font-size: 0.875rem; font-weight: 500;
  font-family: 'Urbanist', sans-serif; cursor: pointer;
  transition: background 0.2s, border-color 0.2s; white-space: nowrap;
}

.oauth-btn:hover { background: #1f1f1f; border-color: rgba(255,255,255,0.18); }

.divider { display: flex; align-items: center; gap: 0.75rem; width: 100%; }
.divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
.divider-text { font-size: 0.8rem; color: rgba(255,255,255,0.35); }

/* Alert */
.alert {
  width: 100%;
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  font-size: 0.82rem; font-weight: 500;
}

.alert--error {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,80,80,0.3);
  color: rgba(255,140,140,0.9);
}

.slide-down-enter-active, .slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-6px); }

/* Form */
.form { width: 100%; display: flex; flex-direction: column; gap: 0.85rem; }

.field { display: flex; flex-direction: column; gap: 0.4rem; }

.label { font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.7); }

.input-wrap { position: relative; display: flex; align-items: center; }

.input {
  width: 100%; padding: 0.7rem 1rem;
  background: #161616;
  border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
  color: #fff; font-size: 0.875rem; font-family: 'Urbanist', sans-serif;
  outline: none; transition: border-color 0.2s; box-sizing: border-box;
}

.input--error { border-color: rgba(255,80,80,0.45) !important; }
.input::placeholder { color: rgba(255,255,255,0.25); }
.input:focus { border-color: rgba(255,255,255,0.25); }

.eye-btn {
  position: absolute; right: 0.75rem;
  background: transparent; border: none;
  color: rgba(255,255,255,0.4); cursor: pointer;
  display: flex; align-items: center; transition: color 0.2s;
}

.eye-btn:hover { color: rgba(255,255,255,0.75); }

.field-error { font-size: 0.75rem; color: rgba(255,120,120,0.9); margin-top: 0.1rem; }

/* Strength bar */
.strength-bar { display: flex; align-items: center; gap: 0.6rem; margin-top: 0.35rem; }
.strength-track { flex: 1; height: 3px; background: rgba(255,255,255,0.08); border-radius: 99px; overflow: hidden; }
.strength-fill { height: 100%; border-radius: 99px; transition: width 0.3s, background 0.3s; }
.strength-label { font-size: 0.72rem; font-weight: 600; min-width: 60px; text-align: right; transition: color 0.3s; }

/* Submit */
.btn-submit {
  width: 100%; padding: 0.75rem;
  background: #ffffff; border: none; border-radius: 10px;
  color: #0a0a0a; font-size: 0.9rem; font-weight: 700;
  font-family: 'Urbanist', sans-serif; cursor: pointer;
  transition: background 0.2s, opacity 0.2s; margin-top: 0.25rem;
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
}

.btn-submit:hover:not(:disabled) { background: #e8e8e8; }
.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.spinner {
  width: 16px; height: 16px;
  border: 2px solid rgba(0,0,0,0.3);
  border-top-color: #0a0a0a;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.footer-text { font-size: 0.8rem; color: rgba(255,255,255,0.35); text-align: center; line-height: 1.6; margin-top: 0.5rem; }
</style>
