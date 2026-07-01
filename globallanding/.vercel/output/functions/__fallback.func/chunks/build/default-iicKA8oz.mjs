import { _ as __nuxt_component_0$1 } from './nuxt-link-Cu-PRxtQ.mjs';
import { mergeProps, defineComponent, ref, watch, computed, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRouter, b as useRoute, u as useNuxtApp } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const USERS_KEY = "gg_users";
const SESSION_KEY = "gg_session";
const useAuth = () => {
  const getUsers = () => {
    return [];
  };
  const getSession = () => {
    return null;
  };
  const setSession = (user) => localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  const clearSession = () => localStorage.removeItem(SESSION_KEY);
  const isLoggedIn = () => false;
  const signup = (name, email, password) => {
    const users = getUsers();
    if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists." };
    }
    users.push({ name, email: email.toLowerCase(), password, createdAt: Date.now() });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setSession({ name, email: email.toLowerCase() });
    return { success: true };
  };
  const login = (email, password) => {
    const users = getUsers();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) return { success: false, error: "Invalid email or password. Please try again." };
    setSession({ name: user.name, email: user.email });
    return { success: true };
  };
  return { signup, login, logout: clearSession, getSession, isLoggedIn };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const activeDropdown = ref(null);
    const profileOpen = ref(false);
    const mobileMenuOpen = ref(false);
    const mobileExpanded = ref(null);
    const { getSession } = useAuth();
    useRouter();
    const route = useRoute();
    const user = ref(null);
    const refreshUser = () => {
      user.value = getSession();
    };
    watch(() => route.path, () => {
      refreshUser();
      mobileMenuOpen.value = false;
      mobileExpanded.value = null;
    });
    const initials = computed(() => {
      var _a;
      if (!((_a = user.value) == null ? void 0 : _a.name)) return "U";
      return user.value.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    });
    const navItems = [
      { label: "Features", hasDropdown: true },
      { label: "Company", hasDropdown: true },
      { label: "Help", hasDropdown: true }
    ];
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><header class="navbar" data-v-b05c0f48><div class="navbar-inner" data-v-b05c0f48>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-box" data-v-b05c0f48${_scopeId}>G</span><span class="logo-text" data-v-b05c0f48${_scopeId}>lobalGle</span>`);
          } else {
            return [
              createVNode("span", { class: "logo-box" }, "G"),
              createVNode("span", { class: "logo-text" }, "lobalGle")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav-links" data-v-b05c0f48><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<div class="nav-item" data-v-b05c0f48><button class="${ssrRenderClass([{ active: unref(activeDropdown) === item.label }, "nav-btn"])}" data-v-b05c0f48>${ssrInterpolate(item.label)} `);
        if (item.hasDropdown) {
          _push(`<svg class="${ssrRenderClass([{ rotated: unref(activeDropdown) === item.label }, "chevron"])}" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b05c0f48><polyline points="6 9 12 15 18 9" data-v-b05c0f48></polyline></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
      });
      _push(`<!--]--></nav><div class="nav-actions" data-v-b05c0f48>`);
      if (unref(user)) {
        _push(`<div class="profile-wrap" data-v-b05c0f48><button class="profile-btn" data-v-b05c0f48><span class="profile-initials" data-v-b05c0f48>${ssrInterpolate(unref(initials))}</span></button>`);
        if (unref(profileOpen)) {
          _push(`<div class="profile-dropdown" data-v-b05c0f48><div class="profile-info" data-v-b05c0f48><span class="profile-name" data-v-b05c0f48>${ssrInterpolate(unref(user).name)}</span><span class="profile-email" data-v-b05c0f48>${ssrInterpolate(unref(user).email)}</span></div><div class="profile-divider" data-v-b05c0f48></div><button class="profile-logout" data-v-b05c0f48><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b05c0f48><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" data-v-b05c0f48></path><polyline points="16 17 21 12 16 7" data-v-b05c0f48></polyline><line x1="21" y1="12" x2="9" y2="12" data-v-b05c0f48></line></svg> Log out </button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "btn-login"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Log in`);
            } else {
              return [
                createTextVNode("Log in")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/signup",
          class: "btn-get-started"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Get started`);
            } else {
              return [
                createTextVNode("Get started")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div><button class="${ssrRenderClass([{ "is-open": unref(mobileMenuOpen) }, "hamburger"])}" aria-label="Toggle navigation" data-v-b05c0f48><span data-v-b05c0f48></span><span data-v-b05c0f48></span><span data-v-b05c0f48></span></button></div>`);
      if (unref(activeDropdown) === "Features") {
        _push(`<div class="dropdown" data-v-b05c0f48><div class="dropdown-inner" data-v-b05c0f48><div class="drop-col" data-v-b05c0f48><a href="#" class="drop-link" data-v-b05c0f48>Payments</a><a href="#" class="drop-link" data-v-b05c0f48>Wire Transfers</a><a href="#" class="drop-link" data-v-b05c0f48>Loans &amp; Credit</a><a href="#" class="drop-link" data-v-b05c0f48>Auto Savings</a><a href="#" class="drop-link" data-v-b05c0f48>Investments</a></div><div class="drop-divider" data-v-b05c0f48></div><div class="drop-col" data-v-b05c0f48><a href="#" class="drop-link" data-v-b05c0f48>Portfolio</a><a href="#" class="drop-link" data-v-b05c0f48>Analytics</a><a href="#" class="drop-link" data-v-b05c0f48>API Access</a><a href="#" class="drop-link" data-v-b05c0f48>Webhooks</a><a href="#" class="drop-link" data-v-b05c0f48>Wallets</a></div><div class="drop-divider" data-v-b05c0f48></div><div class="drop-cards" data-v-b05c0f48><a href="#" class="drop-card" data-v-b05c0f48><span class="drop-card-title" data-v-b05c0f48>Live<br data-v-b05c0f48>Markets</span><div class="card-graphic" data-v-b05c0f48><svg viewBox="0 0 138 100" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-b05c0f48><line x1="0" y1="20" x2="138" y2="20" stroke="rgba(255,255,255,0.05)" stroke-width="1" data-v-b05c0f48></line><line x1="0" y1="40" x2="138" y2="40" stroke="rgba(255,255,255,0.05)" stroke-width="1" data-v-b05c0f48></line><line x1="0" y1="60" x2="138" y2="60" stroke="rgba(255,255,255,0.05)" stroke-width="1" data-v-b05c0f48></line><line x1="0" y1="80" x2="138" y2="80" stroke="rgba(255,255,255,0.05)" stroke-width="1" data-v-b05c0f48></line><line x1="27" y1="0" x2="27" y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-b05c0f48></line><line x1="55" y1="0" x2="55" y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-b05c0f48></line><line x1="83" y1="0" x2="83" y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-b05c0f48></line><line x1="111" y1="0" x2="111" y2="100" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-b05c0f48></line><polyline points="0,78 22,60 40,68 60,38 85,46 110,22 138,8" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" fill="none" stroke-linejoin="round" data-v-b05c0f48></polyline></svg></div></a><a href="#" class="drop-card" data-v-b05c0f48><span class="drop-card-title" data-v-b05c0f48>Crypto<br data-v-b05c0f48>Earn</span><div class="card-graphic" data-v-b05c0f48><svg viewBox="0 0 138 100" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-b05c0f48><path d="M-10,100 Q69,-30 148,100" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none" data-v-b05c0f48></path><path d="M10,100 Q69,-5 128,100" stroke="rgba(255,255,255,0.10)" stroke-width="1.5" fill="none" data-v-b05c0f48></path><path d="M28,100 Q69,20 110,100" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" fill="none" data-v-b05c0f48></path><path d="M44,100 Q69,38 94,100" stroke="rgba(255,255,255,0.07)" stroke-width="1.5" fill="none" data-v-b05c0f48></path><path d="M58,100 Q69,54 80,100" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" fill="none" data-v-b05c0f48></path></svg></div></a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeDropdown) === "Help") {
        _push(`<div class="dropdown dropdown--help" data-v-b05c0f48><div class="dropdown-inner dropdown-inner--help" data-v-b05c0f48><div class="drop-col" data-v-b05c0f48><a href="#" class="drop-link" data-v-b05c0f48>Contact</a><a href="#" class="drop-link" data-v-b05c0f48>Support</a><a href="#" class="drop-link" data-v-b05c0f48>Status</a><a href="#" class="drop-link" data-v-b05c0f48>Migrate</a></div><div class="drop-divider" data-v-b05c0f48></div><a href="#" class="kb-card" data-v-b05c0f48><span class="kb-title" data-v-b05c0f48>Knowledge<br data-v-b05c0f48>base</span><div class="kb-preview" data-v-b05c0f48><div class="kb-preview-header" data-v-b05c0f48><span class="kb-preview-brand" data-v-b05c0f48>GlobalGle</span></div><div class="kb-preview-body" data-v-b05c0f48><div class="kb-preview-sidebar" data-v-b05c0f48><div class="kb-preview-item kb-preview-item--active" data-v-b05c0f48></div><div class="kb-preview-item" data-v-b05c0f48></div><div class="kb-preview-item" data-v-b05c0f48></div><div class="kb-preview-item" data-v-b05c0f48></div><div class="kb-preview-item" data-v-b05c0f48></div></div><div class="kb-preview-content" data-v-b05c0f48><div class="kb-preview-heading" data-v-b05c0f48></div><div class="kb-preview-line" data-v-b05c0f48></div><div class="kb-preview-line kb-preview-line--short" data-v-b05c0f48></div><div class="kb-preview-line" data-v-b05c0f48></div><div class="kb-preview-line kb-preview-line--short" data-v-b05c0f48></div></div></div></div></a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeDropdown) === "Company") {
        _push(`<div class="dropdown dropdown--company" data-v-b05c0f48><div class="dropdown-inner dropdown-inner--company" data-v-b05c0f48><div class="drop-col" data-v-b05c0f48><a href="#" class="drop-link" data-v-b05c0f48>About</a><a href="#" class="drop-link" data-v-b05c0f48>Blog</a><a href="#" class="drop-link" data-v-b05c0f48>Careers</a><a href="#" class="drop-link" data-v-b05c0f48>Customers</a><a href="#" class="drop-link" data-v-b05c0f48>Team</a></div><div class="drop-divider" data-v-b05c0f48></div><div class="drop-cards--vertical" data-v-b05c0f48><a href="#" class="drop-card-row" data-v-b05c0f48><div class="drop-card-icon" data-v-b05c0f48><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b05c0f48><polygon points="20,4 36,13 36,27 20,36 4,27 4,13" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></polygon><polygon points="20,10 30,16 30,24 20,30 10,24 10,16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1" data-v-b05c0f48></polygon><line x1="20" y1="4" x2="20" y2="10" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></line><line x1="36" y1="13" x2="30" y2="16" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></line><line x1="36" y1="27" x2="30" y2="24" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></line><line x1="20" y1="36" x2="20" y2="30" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></line><line x1="4" y1="27" x2="10" y2="24" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></line><line x1="4" y1="13" x2="10" y2="16" stroke="rgba(255,255,255,0.2)" stroke-width="1" data-v-b05c0f48></line></svg></div><div class="drop-card-text" data-v-b05c0f48><span class="drop-card-row-title" data-v-b05c0f48>Our Mission</span><span class="drop-card-row-sub" data-v-b05c0f48>What drives us</span></div></a><a href="#" class="drop-card-row" data-v-b05c0f48><div class="drop-card-icon" data-v-b05c0f48><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b05c0f48><rect x="8" y="8" width="24" height="24" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1" transform="rotate(15 20 20)" data-v-b05c0f48></rect><rect x="12" y="12" width="16" height="16" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1" transform="rotate(15 20 20)" data-v-b05c0f48></rect><circle cx="20" cy="20" r="3" fill="rgba(255,255,255,0.3)" data-v-b05c0f48></circle></svg></div><div class="drop-card-text" data-v-b05c0f48><span class="drop-card-row-title" data-v-b05c0f48>Our Values</span><span class="drop-card-row-sub" data-v-b05c0f48>What we stand for</span></div></a></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="mobile-menu" data-v-b05c0f48><div class="mobile-inner" data-v-b05c0f48><nav class="mobile-nav" data-v-b05c0f48><div class="mobile-nav-item" data-v-b05c0f48><button class="${ssrRenderClass([{ "is-expanded": unref(mobileExpanded) === "Features" }, "mobile-nav-btn"])}" data-v-b05c0f48><span data-v-b05c0f48>Features</span><svg class="${ssrRenderClass([{ rotated: unref(mobileExpanded) === "Features" }, "mobile-chevron"])}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b05c0f48><polyline points="6 9 12 15 18 9" data-v-b05c0f48></polyline></svg></button>`);
        if (unref(mobileExpanded) === "Features") {
          _push(`<div class="mobile-sub-links" data-v-b05c0f48><a href="#" class="mobile-sub-link" data-v-b05c0f48>Payments</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Wire Transfers</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Loans &amp; Credit</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Auto Savings</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Investments</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Portfolio</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Analytics</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>API Access</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Webhooks</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Wallets</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mobile-nav-item" data-v-b05c0f48><button class="${ssrRenderClass([{ "is-expanded": unref(mobileExpanded) === "Company" }, "mobile-nav-btn"])}" data-v-b05c0f48><span data-v-b05c0f48>Company</span><svg class="${ssrRenderClass([{ rotated: unref(mobileExpanded) === "Company" }, "mobile-chevron"])}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b05c0f48><polyline points="6 9 12 15 18 9" data-v-b05c0f48></polyline></svg></button>`);
        if (unref(mobileExpanded) === "Company") {
          _push(`<div class="mobile-sub-links" data-v-b05c0f48><a href="#" class="mobile-sub-link" data-v-b05c0f48>About</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Blog</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Careers</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Customers</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Team</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mobile-nav-item" data-v-b05c0f48><button class="${ssrRenderClass([{ "is-expanded": unref(mobileExpanded) === "Help" }, "mobile-nav-btn"])}" data-v-b05c0f48><span data-v-b05c0f48>Help</span><svg class="${ssrRenderClass([{ rotated: unref(mobileExpanded) === "Help" }, "mobile-chevron"])}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-b05c0f48><polyline points="6 9 12 15 18 9" data-v-b05c0f48></polyline></svg></button>`);
        if (unref(mobileExpanded) === "Help") {
          _push(`<div class="mobile-sub-links" data-v-b05c0f48><a href="#" class="mobile-sub-link" data-v-b05c0f48>Contact</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Support</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Status</a><a href="#" class="mobile-sub-link" data-v-b05c0f48>Migrate</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></nav><div class="mobile-sep" data-v-b05c0f48></div><div class="mobile-cta" data-v-b05c0f48>`);
        if (unref(user)) {
          _push(`<button class="mobile-logout-btn" data-v-b05c0f48>Log out</button>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/login",
            class: "mobile-login-btn",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Log in`);
              } else {
                return [
                  createTextVNode("Log in")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/signup",
            class: "mobile-signup-btn",
            onClick: ($event) => mobileMenuOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Get started`);
              } else {
                return [
                  createTextVNode("Get started")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b05c0f48"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-6c0ee61f><div class="footer-brand-bg" aria-hidden="true" data-v-6c0ee61f><span class="footer-brand-text" data-v-6c0ee61f>GlobalGle</span></div><div class="footer-divider-wrap" data-v-6c0ee61f><div class="footer-divider-clip" data-v-6c0ee61f><div class="footer-divider" data-v-6c0ee61f></div></div><div class="footer-line-glow" aria-hidden="true" data-v-6c0ee61f></div></div><div class="footer-bottom" data-v-6c0ee61f><div class="footer-left" data-v-6c0ee61f><div class="footer-address" data-v-6c0ee61f><p data-v-6c0ee61f>14 Finance Boulevard, Suite 200</p><p data-v-6c0ee61f>Lagos, Nigeria 100001</p></div><div class="footer-socials" data-v-6c0ee61f><a href="#" class="social-link" aria-label="Twitter" data-v-6c0ee61f><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-v-6c0ee61f><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.893l4.258 5.63 5.843-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-v-6c0ee61f></path></svg></a><a href="#" class="social-link" aria-label="GitHub" data-v-6c0ee61f><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-v-6c0ee61f><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" data-v-6c0ee61f></path></svg></a><a href="#" class="social-link" aria-label="Discord" data-v-6c0ee61f><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-v-6c0ee61f><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" data-v-6c0ee61f></path></svg></a></div><div class="footer-status" data-v-6c0ee61f><span class="status-dot" data-v-6c0ee61f><span class="status-dot-inner" data-v-6c0ee61f></span></span><span class="status-text" data-v-6c0ee61f>All systems operational</span></div></div><div class="footer-nav" data-v-6c0ee61f><div class="footer-col" data-v-6c0ee61f><p class="footer-col-title" data-v-6c0ee61f>Features</p><a href="#" class="footer-link" data-v-6c0ee61f>Payments</a><a href="#" class="footer-link" data-v-6c0ee61f>Futures</a><a href="#" class="footer-link" data-v-6c0ee61f>Auto Transfers</a><a href="#" class="footer-link" data-v-6c0ee61f>Staking</a></div><div class="footer-col" data-v-6c0ee61f><p class="footer-col-title" data-v-6c0ee61f>Resources</p><a href="#" class="footer-link" data-v-6c0ee61f>Documentation</a><a href="#" class="footer-link" data-v-6c0ee61f>API Reference</a><a href="#" class="footer-link" data-v-6c0ee61f>Blog</a><a href="#" class="footer-link" data-v-6c0ee61f>Changelog</a></div><div class="footer-col" data-v-6c0ee61f><p class="footer-col-title" data-v-6c0ee61f>Company</p><a href="#" class="footer-link" data-v-6c0ee61f>About</a><a href="#" class="footer-link" data-v-6c0ee61f>Careers</a><a href="#" class="footer-link" data-v-6c0ee61f>Press</a><a href="#" class="footer-link" data-v-6c0ee61f>Contact</a></div><div class="footer-col" data-v-6c0ee61f><p class="footer-col-title" data-v-6c0ee61f>Help</p><a href="#" class="footer-link" data-v-6c0ee61f>Support Center</a><a href="#" class="footer-link" data-v-6c0ee61f>Knowledge Base</a><a href="#" class="footer-link" data-v-6c0ee61f>Status</a><a href="#" class="footer-link" data-v-6c0ee61f>Community</a></div><div class="footer-col" data-v-6c0ee61f><p class="footer-col-title" data-v-6c0ee61f>Legal</p><a href="#" class="footer-link" data-v-6c0ee61f>Privacy Policy</a><a href="#" class="footer-link" data-v-6c0ee61f>Terms of Service</a><a href="#" class="footer-link" data-v-6c0ee61f>Cookie Policy</a><a href="#" class="footer-link" data-v-6c0ee61f>Compliance</a></div></div></div><div class="footer-copy" data-v-6c0ee61f><p data-v-6c0ee61f>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} GlobalGle Inc. All rights reserved.</p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c0ee61f"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheNavbar = __nuxt_component_0;
  const _component_TheFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-dark text-white" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheNavbar, null, null, _parent));
  _push(`<main class="pt-[60px]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-iicKA8oz.mjs.map
