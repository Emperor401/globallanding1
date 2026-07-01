import { _ as __nuxt_component_0$1 } from './nuxt-link-Cu-PRxtQ.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const cubeVideo = "/hero-cube.mp4";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-dc778644><div class="hero-bg" data-v-dc778644></div><div class="hero-inner" data-v-dc778644><div class="hero-left" data-v-dc778644><a href="#" class="hero-badge" data-v-dc778644><span class="badge-inner" data-v-dc778644> Announcing GlobalGle Pro <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-dc778644><polyline points="9 18 15 12 9 6" data-v-dc778644></polyline></svg></span></a><h1 class="hero-heading" data-v-dc778644> Bank Smarter.<br data-v-dc778644>Live Better. </h1><p class="hero-sub" data-v-dc778644> The smartest way to buy, sell and grow your crypto portfolio.<br data-v-dc778644> Secure, fast and built for everyone. </p><div class="hero-actions" data-v-dc778644>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "btn-primary"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-right" data-v-dc778644><div class="cube-wrap" data-v-dc778644><video class="cube-video"${ssrRenderAttr("src", cubeVideo)} autoplay loop muted playsinline preload="auto" data-v-dc778644></video><div class="cube-shadow" data-v-dc778644></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-dc778644"]]);
const iconVideo$3 = "/messagevid.mp4";
const base = "https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TradeSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const coins = [
      { symbol: "BTC", logo: `${base}/btc.svg` },
      { symbol: "ETH", logo: `${base}/eth.svg` },
      { symbol: "USDT", logo: `${base}/usdt.svg` }
    ];
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "trade-section" }, _attrs))} data-v-971437aa><div class="trade-inner" data-v-971437aa><div class="trade-icon" data-v-971437aa><video class="trade-icon-video"${ssrRenderAttr("src", iconVideo$3)} autoplay loop muted playsinline preload="auto" data-v-971437aa></video><div class="trade-icon-glow" data-v-971437aa></div></div><h2 class="trade-heading" data-v-971437aa> Start banking <span class="gradient-text" data-v-971437aa>this weekend</span></h2><p class="trade-sub" data-v-971437aa> A seamless, secure platform so you can start banking in minutes.<br data-v-971437aa> Supports all major currencies and payment methods. </p><div class="coins-row" data-v-971437aa><!--[-->`);
      ssrRenderList(coins, (coin) => {
        _push(`<div class="coin-item" data-v-971437aa><div class="coin-box" data-v-971437aa><img${ssrRenderAttr("src", coin.logo)}${ssrRenderAttr("alt", coin.symbol)} class="coin-logo" data-v-971437aa></div><span class="coin-label" data-v-971437aa>${ssrInterpolate(coin.symbol)}</span></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TradeSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-971437aa"]]);
const _imports_0 = publicAssetsURL("/global.png");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TradingTerminal",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "terminal-section" }, _attrs))} data-v-209c0e43><div class="terminal-inner" data-v-209c0e43><div class="terminal-img-wrap" data-v-209c0e43><img${ssrRenderAttr("src", _imports_0)} alt="GlobalGle platform" class="terminal-img" data-v-209c0e43></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TradingTerminal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-209c0e43"]]);
const iconVideo$2 = "/world1.mp4";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AnalysisSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "analysis-section" }, _attrs))} data-v-6916fba1><div class="analysis-inner" data-v-6916fba1><div class="analysis-icon" data-v-6916fba1><video class="analysis-icon-video"${ssrRenderAttr("src", iconVideo$2)} autoplay loop muted playsinline preload="auto" data-v-6916fba1></video><div class="icon-glow" data-v-6916fba1></div></div><h2 class="analysis-heading" data-v-6916fba1> Analyze markets with powerful tools </h2><p class="analysis-sub" data-v-6916fba1> A modern analytics suite that makes it easy for anyone to read, interpret, and act on market data.<br data-v-6916fba1> Build your financial reports and share insights with your team. </p><div class="outer-card" data-v-6916fba1><div class="accent-line" data-v-6916fba1></div><div class="outer-toolbar" data-v-6916fba1><button class="toolbar-btn" data-v-6916fba1><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6916fba1><line x1="4" y1="6" x2="20" y2="6" data-v-6916fba1></line><line x1="4" y1="12" x2="14" y2="12" data-v-6916fba1></line><line x1="4" y1="18" x2="18" y2="18" data-v-6916fba1></line></svg> Filters </button><span class="toolbar-title" data-v-6916fba1>BTC / USDT Weekly Report</span><div class="toolbar-right" data-v-6916fba1><span class="toolbar-time" data-v-6916fba1><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6916fba1><circle cx="12" cy="12" r="10" data-v-6916fba1></circle><polyline points="12 6 12 12 16 14" data-v-6916fba1></polyline></svg> just now </span><button class="toolbar-action-btn" data-v-6916fba1>Preview</button><button class="toolbar-action-btn toolbar-action-btn--primary" data-v-6916fba1>Export</button></div></div><div class="inner-card" data-v-6916fba1><div class="inner-fields" data-v-6916fba1><div class="inner-field" data-v-6916fba1><span class="field-key" data-v-6916fba1>Pair</span><span class="field-val" data-v-6916fba1>BTC / USDT</span></div><div class="inner-field" data-v-6916fba1><span class="field-key" data-v-6916fba1>Market</span><div class="field-badge" data-v-6916fba1><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6916fba1><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" data-v-6916fba1></polyline></svg> Spot Market </div></div><div class="inner-field" data-v-6916fba1><span class="field-key" data-v-6916fba1>Timeframe</span><span class="field-val field-val--bold" data-v-6916fba1>7 Days</span></div></div><div class="inner-banner" data-v-6916fba1><div class="banner-chart" data-v-6916fba1><svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" data-v-6916fba1><line x1="0" y1="45" x2="400" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><line x1="0" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><line x1="80" y1="0" x2="80" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><line x1="160" y1="0" x2="160" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><line x1="240" y1="0" x2="240" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><line x1="320" y1="0" x2="320" y2="180" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-6916fba1></line><polyline points="0,150 50,130 100,140 150,100 200,115 250,70 300,85 350,45 400,30" stroke="rgba(255,255,255,0.2)" stroke-width="2" fill="none" stroke-linecap="round" data-v-6916fba1></polyline><polyline points="0,165 50,155 100,158 150,135 200,142 250,110 300,120 350,85 400,70" stroke="rgba(255,255,255,0.07)" stroke-width="1.5" fill="none" stroke-linecap="round" data-v-6916fba1></polyline></svg></div><div class="banner-play" data-v-6916fba1><div class="play-btn" data-v-6916fba1><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" data-v-6916fba1><polygon points="5 3 19 12 5 21 5 3" data-v-6916fba1></polygon></svg></div></div></div><div class="inner-content" data-v-6916fba1><p class="content-placeholder" data-v-6916fba1>Press &#39;/&#39; for analysis tools</p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnalysisSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-6916fba1"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "StatsSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "stats-section" }, _attrs))} data-v-42d11a1e><div class="stats-inner" data-v-42d11a1e><div class="stats-header" data-v-42d11a1e><h2 class="stats-heading" data-v-42d11a1e>Go beyond banking</h2><p class="stats-sub" data-v-42d11a1e> Monitor and control your finances in a simple and intuitive way.<br data-v-42d11a1e> Straightforward analytics and reporting tools that help you manage smarter. </p></div><div class="cards-row" data-v-42d11a1e><div class="outer-card" data-v-42d11a1e><div class="inner-card" data-v-42d11a1e><div class="inner-card-top" data-v-42d11a1e><div class="card-icon-box" data-v-42d11a1e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" color="white" data-v-42d11a1e><line x1="12" y1="1" x2="12" y2="23" data-v-42d11a1e></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" data-v-42d11a1e></path></svg></div><div data-v-42d11a1e><p class="card-label" data-v-42d11a1e>Portfolio</p><p class="card-title" data-v-42d11a1e> My Crypto Assets <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-42d11a1e><polyline points="6 9 12 15 18 9" data-v-42d11a1e></polyline></svg></p></div></div><div class="stats-row" data-v-42d11a1e><div class="stat-col" data-v-42d11a1e><p class="stat-label" data-v-42d11a1e>TOTAL VALUE</p><p class="stat-value" data-v-42d11a1e>$24,831</p></div><div class="stat-col" data-v-42d11a1e><p class="stat-label" data-v-42d11a1e>P&amp;L</p><p class="stat-value" data-v-42d11a1e>+$1,204</p></div><div class="stat-col" data-v-42d11a1e><p class="stat-label" data-v-42d11a1e>TRADES</p><div class="stat-chart" data-v-42d11a1e><svg viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="30" data-v-42d11a1e><polyline points="0,28 15,20 30,22 45,10 60,4" stroke="rgba(255,255,255,0.5)" stroke-width="1.8" fill="none" stroke-linecap="round" data-v-42d11a1e></polyline></svg></div></div><div class="stat-col stat-col--code" data-v-42d11a1e><p class="stat-label" data-v-42d11a1e>API KEY</p><div class="stat-code" data-v-42d11a1e>gg_\u2022\u2022\u2022\u2022</div></div></div></div></div><div class="outer-card outer-card--right" data-v-42d11a1e><div class="right-card-body" data-v-42d11a1e><div class="metric-col" data-v-42d11a1e><p class="metric-label" data-v-42d11a1e>WIN RATE</p><p class="metric-big" data-v-42d11a1e>87%</p><div class="metric-glow" data-v-42d11a1e></div><div class="metric-rows" data-v-42d11a1e><div class="metric-row" data-v-42d11a1e><span class="metric-dot metric-dot--white" data-v-42d11a1e></span><span class="metric-name" data-v-42d11a1e>Successful payments</span><span class="metric-num" data-v-42d11a1e>3,204</span></div><div class="divider-line" data-v-42d11a1e></div><div class="metric-row" data-v-42d11a1e><span class="metric-dot metric-dot--dim" data-v-42d11a1e></span><span class="metric-name" data-v-42d11a1e>Failed payments</span><span class="metric-num" data-v-42d11a1e>480</span></div></div></div><div class="col-divider" data-v-42d11a1e></div><div class="metric-col" data-v-42d11a1e><p class="metric-label" data-v-42d11a1e>ROI</p><p class="metric-big metric-big--dim" data-v-42d11a1e>34%</p><div class="metric-rows metric-rows--spaced" data-v-42d11a1e><div class="metric-row" data-v-42d11a1e><span class="metric-dot metric-dot--blue" data-v-42d11a1e></span><span class="metric-name" data-v-42d11a1e>Monthly</span></div><div class="divider-line" data-v-42d11a1e></div><div class="metric-row" data-v-42d11a1e><span class="metric-dot metric-dot--purple" data-v-42d11a1e></span><span class="metric-name" data-v-42d11a1e>Weekly</span></div></div></div></div></div></div><div class="features-row" data-v-42d11a1e><div class="feature-block" data-v-42d11a1e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feature-icon" data-v-42d11a1e><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" data-v-42d11a1e></path><circle cx="9" cy="7" r="4" data-v-42d11a1e></circle><path d="M23 21v-2a4 4 0 00-3-3.87" data-v-42d11a1e></path><path d="M16 3.13a4 4 0 010 7.75" data-v-42d11a1e></path></svg><h3 class="feature-title" data-v-42d11a1e>Portfolio management</h3><p class="feature-desc" data-v-42d11a1e> Manage your assets in minutes, regardless of size. Get full visibility of each holding and track performance in real time. </p><a href="#" class="feature-link" data-v-42d11a1e>Learn more</a></div><div class="feature-block" data-v-42d11a1e><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feature-icon" data-v-42d11a1e><line x1="18" y1="20" x2="18" y2="10" data-v-42d11a1e></line><line x1="12" y1="20" x2="12" y2="4" data-v-42d11a1e></line><line x1="6" y1="20" x2="6" y2="14" data-v-42d11a1e></line><polyline points="1 20 23 20" data-v-42d11a1e></polyline></svg><h3 class="feature-title" data-v-42d11a1e>Financial analytics</h3><p class="feature-desc" data-v-42d11a1e> Unlock powerful insights and understand exactly how your finances are performing. Identify patterns and optimize your strategy. </p><a href="#" class="feature-link" data-v-42d11a1e>Learn more</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatsSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-42d11a1e"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CtaSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))} data-v-c301ed3e><div class="cta-glow cta-glow--left" data-v-c301ed3e></div><div class="cta-glow cta-glow--right" data-v-c301ed3e></div><div class="cta-grid" data-v-c301ed3e></div><div class="cta-inner" data-v-c301ed3e><div class="cta-badge" data-v-c301ed3e><span class="badge-pulse" data-v-c301ed3e></span> Start for free today </div><h2 class="cta-heading" data-v-c301ed3e> The smarter way to<br data-v-c301ed3e><span class="cta-heading-outline" data-v-c301ed3e>bank online</span></h2><p class="cta-sub" data-v-c301ed3e> Join thousands of customers already using GlobalGle.<br data-v-c301ed3e> No experience needed \u2014 start in minutes. </p><div class="cta-actions" data-v-c301ed3e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "cta-btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get started free <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-c301ed3e${_scopeId}><line x1="5" y1="12" x2="19" y2="12" data-v-c301ed3e${_scopeId}></line><polyline points="12 5 19 12 12 19" data-v-c301ed3e${_scopeId}></polyline></svg>`);
          } else {
            return [
              createTextVNode(" Get started free "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }),
                createVNode("polyline", { points: "12 5 19 12 12 19" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "cta-btn-ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="cta-trust" data-v-c301ed3e> No credit card required \xA0\xB7\xA0 Instant setup \xA0\xB7\xA0 Cancel anytime </p></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-c301ed3e"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "QuoteSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "quote-section" }, _attrs))} data-v-19ac62ca><div class="quote-inner" data-v-19ac62ca><div class="quote-icon" data-v-19ac62ca><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-19ac62ca><polyline points="2,22 8,10 14,16 20,6 26,10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-19ac62ca></polyline><polyline points="20,6 26,6 26,12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" data-v-19ac62ca></polyline></svg></div><blockquote class="quote-text" data-v-19ac62ca> GlobalGle is transforming online banking for everyone. Powerful tools, clean interface, real-time data. Everything a modern banking customer could ever need. </blockquote><div class="quote-author" data-v-19ac62ca><div class="avatar" data-v-19ac62ca><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-19ac62ca><circle cx="24" cy="24" r="24" fill="#1a1a1a" data-v-19ac62ca></circle><ellipse cx="24" cy="42" rx="14" ry="10" fill="#2a2a2a" data-v-19ac62ca></ellipse><path d="M19 36 L24 40 L29 36" stroke="#3a3a3a" stroke-width="1.5" fill="none" stroke-linecap="round" data-v-19ac62ca></path><rect x="21" y="31" width="6" height="5" rx="2" fill="#c8a882" data-v-19ac62ca></rect><ellipse cx="24" cy="24" rx="9" ry="10" fill="#c8a882" data-v-19ac62ca></ellipse><path d="M15 22 Q15 13 24 13 Q33 13 33 22 Q33 17 28 16 Q24 14 20 16 Q16 17 15 22Z" fill="#2a1f14" data-v-19ac62ca></path><ellipse cx="15.5" cy="23" rx="1.5" ry="3" fill="#2a1f14" data-v-19ac62ca></ellipse><ellipse cx="32.5" cy="23" rx="1.5" ry="3" fill="#2a1f14" data-v-19ac62ca></ellipse><ellipse cx="20.5" cy="23" rx="1.5" ry="1.8" fill="#1a1209" data-v-19ac62ca></ellipse><ellipse cx="27.5" cy="23" rx="1.5" ry="1.8" fill="#1a1209" data-v-19ac62ca></ellipse><circle cx="21.1" cy="22.4" r="0.5" fill="white" data-v-19ac62ca></circle><circle cx="28.1" cy="22.4" r="0.5" fill="white" data-v-19ac62ca></circle><path d="M18.5 20.5 Q20.5 19.5 22.5 20.5" stroke="#2a1f14" stroke-width="1.2" fill="none" stroke-linecap="round" data-v-19ac62ca></path><path d="M25.5 20.5 Q27.5 19.5 29.5 20.5" stroke="#2a1f14" stroke-width="1.2" fill="none" stroke-linecap="round" data-v-19ac62ca></path><path d="M23.5 25 Q24 26.5 24.5 25" stroke="#b08060" stroke-width="1" fill="none" stroke-linecap="round" data-v-19ac62ca></path><path d="M20.5 28.5 Q24 31 27.5 28.5" stroke="#a06040" stroke-width="1.2" fill="none" stroke-linecap="round" data-v-19ac62ca></path><ellipse cx="15" cy="24" rx="1.5" ry="2" fill="#c8a882" data-v-19ac62ca></ellipse><ellipse cx="33" cy="24" rx="1.5" ry="2" fill="#c8a882" data-v-19ac62ca></ellipse></svg></div><div class="author-info" data-v-19ac62ca><p class="author-name" data-v-19ac62ca>James Okafor</p><p class="author-role" data-v-19ac62ca>CEO at GlobalGle</p></div></div><a href="/signup" class="quote-badge" data-v-19ac62ca> Bank with GlobalGle <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-19ac62ca><polyline points="9 18 15 12 9 6" data-v-19ac62ca></polyline></svg></a></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuoteSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-19ac62ca"]]);
const iconVideo$1 = "/world2.mp4";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ControlSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const activeTab = ref(1);
    const cards = [
      {
        label: "Intuitive analytics",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>`
      },
      {
        label: "Full visibility",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
      },
      {
        label: "Secure authentication",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
      }
    ];
    const sidebarItems = [
      [
        { label: "Overview", active: true, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
        { label: "Portfolio", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>` },
        { label: "Reports", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>` },
        { label: "Markets", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
        { label: "Settings", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` }
      ],
      [
        { label: "Transactions", active: true, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
        { label: "Portfolio", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>` },
        { label: "Watchlist", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` },
        { label: "Orders", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>` },
        { label: "History", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 1 0 .5-4.5"/><polyline points="3 3 3 11 11 11"/></svg>` },
        { label: "API Keys", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>` },
        { label: "Settings", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` }
      ],
      [
        { label: "Security", active: true, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
        { label: "2FA", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>` },
        { label: "API Keys", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>` },
        { label: "Sessions", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
        { label: "Settings", active: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>` }
      ]
    ];
    const analyticsStats = [
      { label: "Total Volume", value: "$1.24M", change: "+12.4%", positive: true },
      { label: "Active Users", value: "3,204", change: "+8.1%", positive: true },
      { label: "Win Rate", value: "87%", change: "+2.3%", positive: true },
      { label: "Total P&L", value: "+$48,210", change: "+5.6%", positive: true }
    ];
    const tradeRows = [
      { pair: "BTC/USDT", status: "Filled", type: "Market Buy", amount: "$1,200.00", time: "16m" },
      { pair: "ETH/USDT", status: "Filled", type: "Limit Sell", amount: "$840.50", time: "31m" },
      { pair: "SOL/USDT", status: "Filled", type: "Market Buy", amount: "$320.00", time: "1h" },
      { pair: "BNB/USDT", status: "Pending", type: "Stop Loss", amount: "$500.00", time: "2h" },
      { pair: "XRP/USDT", status: "Filled", type: "Market Sell", amount: "$95.00", time: "3h" }
    ];
    const authItems = [
      {
        label: "Two-Factor Authentication",
        desc: "Add an extra layer of security to your account",
        enabled: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>`
      },
      {
        label: "Login Notifications",
        desc: "Get notified when a new login is detected",
        enabled: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`
      },
      {
        label: "API Key Access",
        desc: "Allow third-party apps to access your account via API",
        enabled: false,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`
      },
      {
        label: "Withdrawal Whitelist",
        desc: "Only allow withdrawals to pre-approved addresses",
        enabled: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
      }
    ];
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "control-section" }, _attrs))} data-v-faa54268><div class="control-inner" data-v-faa54268><div class="control-icon" data-v-faa54268><video class="control-icon-video"${ssrRenderAttr("src", iconVideo$1)} autoplay loop muted playsinline preload="auto" data-v-faa54268></video><div class="icon-bottom-glow" data-v-faa54268></div></div><h2 class="control-heading" data-v-faa54268>Everything in your control</h2><p class="control-sub" data-v-faa54268> All the features you need to manage your finances, monitor with detailed analytics,<br data-v-faa54268> and protect your assets \u2014 without the friction. </p><div class="feature-cards" data-v-faa54268><!--[-->`);
      ssrRenderList(cards, (card, i) => {
        var _a;
        _push(`<div class="${ssrRenderClass([{ "feature-card--active": unref(activeTab) === i }, "feature-card"])}" data-v-faa54268><span class="card-icon-ri" data-v-faa54268>${(_a = card.icon) != null ? _a : ""}</span><span class="card-label" data-v-faa54268>${ssrInterpolate(card.label)}</span></div>`);
      });
      _push(`<!--]--></div><div class="content-box" data-v-faa54268><div class="box-header" data-v-faa54268><div class="box-brand" data-v-faa54268><div class="brand-icon" data-v-faa54268>G</div><span class="brand-name" data-v-faa54268>GlobalGle</span><span class="brand-badge" data-v-faa54268>Pro</span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-faa54268><polyline points="6 9 12 15 18 9" data-v-faa54268></polyline></svg></div><div class="box-nav" data-v-faa54268><a href="#" class="box-nav-link" data-v-faa54268>Help</a><a href="#" class="box-nav-link" data-v-faa54268>Docs</a><a href="#" class="box-nav-link" data-v-faa54268>Feedback</a></div></div><div class="box-body" data-v-faa54268><aside class="box-sidebar" data-v-faa54268><!--[-->`);
      ssrRenderList(sidebarItems[unref(activeTab)], (item) => {
        var _a;
        _push(`<div class="${ssrRenderClass([{ "sidebar-item--active": item.active }, "sidebar-item"])}" data-v-faa54268><span data-v-faa54268>${(_a = item.icon) != null ? _a : ""}</span> ${ssrInterpolate(item.label)}</div>`);
      });
      _push(`<!--]--></aside><div class="box-main" data-v-faa54268>`);
      if (unref(activeTab) === 0) {
        _push(`<div class="tab-content" data-v-faa54268><div class="main-header" data-v-faa54268><h3 class="main-title" data-v-faa54268>Analytics</h3><div class="main-actions" data-v-faa54268><span class="main-badge" data-v-faa54268><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-faa54268><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" data-v-faa54268></polyline></svg> Live </span></div></div><div class="analytics-stats" data-v-faa54268><!--[-->`);
        ssrRenderList(analyticsStats, (s) => {
          _push(`<div class="stat-card" data-v-faa54268><p class="sc-label" data-v-faa54268>${ssrInterpolate(s.label)}</p><p class="sc-value" data-v-faa54268>${ssrInterpolate(s.value)}</p><p class="${ssrRenderClass([s.positive ? "positive" : "negative", "sc-change"])}" data-v-faa54268>${ssrInterpolate(s.change)}</p></div>`);
        });
        _push(`<!--]--></div><div class="analytics-chart" data-v-faa54268><svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" data-v-faa54268><line x1="0" y1="30" x2="600" y2="30" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-faa54268></line><line x1="0" y1="60" x2="600" y2="60" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-faa54268></line><line x1="0" y1="90" x2="600" y2="90" stroke="rgba(255,255,255,0.04)" stroke-width="1" data-v-faa54268></line><polyline points="0,100 60,85 120,90 180,60 240,70 300,40 360,50 420,25 480,35 540,15 600,20" stroke="rgba(255,255,255,0.35)" stroke-width="1.8" fill="none" stroke-linecap="round" data-v-faa54268></polyline><polyline points="0,110 60,100 120,105 180,88 240,92 300,75 360,80 420,62 480,70 540,50 600,55" stroke="rgba(255,255,255,0.1)" stroke-width="1.2" fill="none" stroke-linecap="round" data-v-faa54268></polyline></svg></div></div>`);
      } else if (unref(activeTab) === 1) {
        _push(`<div class="tab-content" data-v-faa54268><div class="main-header" data-v-faa54268><h3 class="main-title" data-v-faa54268>Transactions</h3><div class="main-actions" data-v-faa54268><span class="main-badge" data-v-faa54268><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-faa54268><circle cx="11" cy="11" r="8" data-v-faa54268></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-faa54268></line></svg> Search... </span><span class="main-badge" data-v-faa54268>Last 3 days \u2193</span><span class="main-badge" data-v-faa54268>Status \u2193</span></div></div><div class="table-wrap" data-v-faa54268><div class="table-head" data-v-faa54268><span data-v-faa54268>Pair</span><span data-v-faa54268>Status</span><span data-v-faa54268>Type</span><span data-v-faa54268>Amount</span><span data-v-faa54268>Time</span></div><!--[-->`);
        ssrRenderList(tradeRows, (row) => {
          _push(`<div class="table-row" data-v-faa54268><span class="row-pair" data-v-faa54268><span class="row-dot" data-v-faa54268></span> ${ssrInterpolate(row.pair)}</span><span data-v-faa54268><span class="${ssrRenderClass([row.status === "Filled" ? "badge--white" : "badge--dim", "status-badge"])}" data-v-faa54268>${ssrInterpolate(row.status)}</span></span><span class="row-muted" data-v-faa54268>${ssrInterpolate(row.type)}</span><span class="row-amount" data-v-faa54268>${ssrInterpolate(row.amount)}</span><span class="row-muted" data-v-faa54268>${ssrInterpolate(row.time)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="tab-content" data-v-faa54268><div class="main-header" data-v-faa54268><h3 class="main-title" data-v-faa54268>Security</h3><div class="main-actions" data-v-faa54268><span class="main-badge" data-v-faa54268>Settings</span></div></div><div class="auth-list" data-v-faa54268><!--[-->`);
        ssrRenderList(authItems, (a) => {
          var _a;
          _push(`<div class="auth-item" data-v-faa54268><div class="auth-left" data-v-faa54268><span class="auth-icon" data-v-faa54268>${(_a = a.icon) != null ? _a : ""}</span><div data-v-faa54268><p class="auth-label" data-v-faa54268>${ssrInterpolate(a.label)}</p><p class="auth-desc" data-v-faa54268>${ssrInterpolate(a.desc)}</p></div></div><div class="${ssrRenderClass([{ "auth-toggle--on": a.enabled }, "auth-toggle"])}" data-v-faa54268><div class="toggle-thumb" data-v-faa54268></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ControlSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-faa54268"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialsSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    const reviews = [
      {
        quote: "GlobalGle completely changed how I manage my finances. The interface is clean, fast, and the analytics are next level.",
        name: "Marcus Reid",
        role: "Entrepreneur & Investor",
        companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
        avatar: cartoonA()
      },
      {
        quote: "If you're getting into crypto, GlobalGle is the platform you need. Zero friction, powerful tools, and real-time data that actually works.",
        name: "Sophia Chen",
        role: "Co-founder & CEO of CryptoVault",
        companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        avatar: cartoonB()
      },
      {
        quote: "We were live within minutes. The portfolio visibility and reporting tools gave us insights we didn't even know we were missing.",
        name: "Ty Okonkwo",
        role: "Co-founder & CEO of FinBase",
        companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
        avatar: cartoonC()
      },
      {
        quote: "GlobalGle is a game-changer. I've tried dozens of platforms and nothing comes close to the experience here.",
        name: "Anika Patel",
        role: "Portfolio Manager at Nexus Capital",
        companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><polyline points="1 20 23 20"/></svg>`,
        avatar: cartoonD()
      },
      {
        quote: "The auto-savings feature alone is worth it. My finances have never been this well managed with so little effort.",
        name: "James Osei",
        role: "Retail Investor & Blogger",
        companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
        avatar: cartoonE()
      },
      {
        quote: "Seamless onboarding, beautiful UI, and the real-time charts are stunning. GlobalGle nailed it completely.",
        name: "Laura Kim",
        role: "Head of Product at BlockFin",
        companyIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
        avatar: cartoonF()
      }
    ];
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
  </svg>`;
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
  </svg>`;
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
  </svg>`;
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
  </svg>`;
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
  </svg>`;
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
  </svg>`;
    }
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testimonials-section" }, _attrs))} data-v-dc64a2ff><div class="testimonials-header" data-v-dc64a2ff><h2 class="testimonials-heading" data-v-dc64a2ff>Beyond expectations</h2><p class="testimonials-sub" data-v-dc64a2ff> GlobalGle is driving remarkable banking experiences that enable success stories,<br data-v-dc64a2ff> empower customers, and fuel growth across all levels of users. </p></div><div class="track-wrapper" data-v-dc64a2ff><div class="track" data-v-dc64a2ff><!--[-->`);
      ssrRenderList([...reviews, ...reviews], (review, i) => {
        var _a, _b;
        _push(`<div class="review-card" data-v-dc64a2ff><p class="review-quote" data-v-dc64a2ff>&quot;${ssrInterpolate(review.quote)}&quot;</p><div class="review-author" data-v-dc64a2ff><div class="review-avatar" data-v-dc64a2ff><div class="avatar-company" data-v-dc64a2ff><span data-v-dc64a2ff>${(_a = review.companyIcon) != null ? _a : ""}</span></div><div class="avatar-face" data-v-dc64a2ff><span data-v-dc64a2ff>${(_b = review.avatar) != null ? _b : ""}</span></div></div><div class="review-info" data-v-dc64a2ff><p class="review-name" data-v-dc64a2ff>${ssrInterpolate(review.name)}</p><p class="review-role" data-v-dc64a2ff>${ssrInterpolate(review.role)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dc64a2ff"]]);
const iconVideo = "/foot.mp4";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PreFooterCta",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const { $gsap } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pf-cta" }, _attrs))} data-v-bbd3f9ab><div class="pf-inner" data-v-bbd3f9ab><div class="pf-icon-wrap" data-v-bbd3f9ab><div class="pf-icon" data-v-bbd3f9ab><video${ssrRenderAttr("src", iconVideo)} autoplay loop muted playsinline class="pf-icon-video" data-v-bbd3f9ab></video><div class="pf-icon-glow" data-v-bbd3f9ab></div></div></div><h2 class="pf-heading" data-v-bbd3f9ab> Bank smarter.<br data-v-bbd3f9ab><span class="pf-heading-dim" data-v-bbd3f9ab>Start today.</span></h2><div class="pf-actions" data-v-bbd3f9ab>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/signup",
        class: "pf-btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get started <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-bbd3f9ab${_scopeId}><polyline points="9 18 15 12 9 6" data-v-bbd3f9ab${_scopeId}></polyline></svg>`);
          } else {
            return [
              createTextVNode(" Get started "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("polyline", { points: "9 18 15 12 9 6" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#" class="pf-btn-ghost" data-v-bbd3f9ab> Contact us <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-bbd3f9ab><polyline points="9 18 15 12 9 6" data-v-bbd3f9ab></polyline></svg></a></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PreFooterCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bbd3f9ab"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = __nuxt_component_0;
  const _component_TradeSection = __nuxt_component_1;
  const _component_TradingTerminal = __nuxt_component_2;
  const _component_AnalysisSection = __nuxt_component_3;
  const _component_StatsSection = __nuxt_component_4;
  const _component_CtaSection = __nuxt_component_5;
  const _component_QuoteSection = __nuxt_component_6;
  const _component_ControlSection = __nuxt_component_7;
  const _component_TestimonialsSection = __nuxt_component_8;
  const _component_PreFooterCta = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TradeSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TradingTerminal, null, null, _parent));
  _push(ssrRenderComponent(_component_AnalysisSection, null, null, _parent));
  _push(ssrRenderComponent(_component_StatsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaSection, null, null, _parent));
  _push(ssrRenderComponent(_component_QuoteSection, null, null, _parent));
  _push(ssrRenderComponent(_component_ControlSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_PreFooterCta, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ErH6KZl0.mjs.map
