import { _ as __nuxt_component_0 } from './nuxt-link-Cu-PRxtQ.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderDynamicModel, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRouter } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const showPassword = ref(false);
    const loading = ref(false);
    const error = ref("");
    const form = reactive({ email: "", password: "" });
    const errors = reactive({ email: "", password: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-f8e194c7><div class="curve curve-left" data-v-f8e194c7></div><div class="curve curve-right" data-v-f8e194c7></div><div class="login-card" data-v-f8e194c7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo-wrap"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-f8e194c7${_scopeId}>G</span>`);
          } else {
            return [
              createVNode("span", { class: "logo-icon" }, "G")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="title" data-v-f8e194c7>Log in to GlobalGle</h1><p class="subtitle" data-v-f8e194c7> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign up`);
          } else {
            return [
              createTextVNode("Sign up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p><div class="oauth-row" data-v-f8e194c7><button class="oauth-btn" type="button" data-v-f8e194c7><svg width="18" height="18" viewBox="0 0 24 24" fill="none" data-v-f8e194c7><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" data-v-f8e194c7></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-v-f8e194c7></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" data-v-f8e194c7></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-v-f8e194c7></path></svg> Continue with Google </button><button class="oauth-btn" type="button" data-v-f8e194c7><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-v-f8e194c7><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" data-v-f8e194c7></path></svg> Continue with GitHub </button></div><div class="divider" data-v-f8e194c7><span class="divider-line" data-v-f8e194c7></span><span class="divider-text" data-v-f8e194c7>or</span><span class="divider-line" data-v-f8e194c7></span></div>`);
      if (unref(error)) {
        _push(`<div class="alert alert--error" data-v-f8e194c7><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f8e194c7><circle cx="12" cy="12" r="10" data-v-f8e194c7></circle><line x1="12" y1="8" x2="12" y2="12" data-v-f8e194c7></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-f8e194c7></line></svg> ${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="form" novalidate data-v-f8e194c7><div class="field" data-v-f8e194c7><label class="label" data-v-f8e194c7>Email address</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="${ssrRenderClass([{ "input--error": unref(errors).email }, "input"])}" placeholder="james@example.com" autocomplete="email" data-v-f8e194c7>`);
      if (unref(errors).email) {
        _push(`<span class="field-error" data-v-f8e194c7>${ssrInterpolate(unref(errors).email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field" data-v-f8e194c7><div class="label-row" data-v-f8e194c7><label class="label" data-v-f8e194c7>Password</label><a href="#" class="forgot-link" data-v-f8e194c7>Forgot password?</a></div><div class="input-wrap" data-v-f8e194c7><input${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} class="${ssrRenderClass([{ "input--error": unref(errors).password }, "input"])}" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" autocomplete="current-password" data-v-f8e194c7><button type="button" class="eye-btn" data-v-f8e194c7>`);
      if (!unref(showPassword)) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-v-f8e194c7><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-f8e194c7></path><circle cx="12" cy="12" r="3" data-v-f8e194c7></circle></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-v-f8e194c7><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" data-v-f8e194c7></path><line x1="1" y1="1" x2="23" y2="23" data-v-f8e194c7></line></svg>`);
      }
      _push(`</button></div>`);
      if (unref(errors).password) {
        _push(`<span class="field-error" data-v-f8e194c7>${ssrInterpolate(unref(errors).password)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn-submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} data-v-f8e194c7>`);
      if (unref(loading)) {
        _push(`<span class="spinner" data-v-f8e194c7></span>`);
      } else {
        _push(`<span data-v-f8e194c7>Log in</span>`);
      }
      _push(`</button></form><p class="footer-text" data-v-f8e194c7> By signing in, you agree to our <a href="#" class="link" data-v-f8e194c7>Terms</a> and <a href="#" class="link" data-v-f8e194c7>Privacy Policy</a>. </p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8e194c7"]]);

export { login as default };
//# sourceMappingURL=login-BqgElbXk.mjs.map
