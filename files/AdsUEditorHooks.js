__d(
  "AdsUEditorHooks",
  [
    "AdsEditingAdgroupEditorContext",
    "AdsEditingCampaignEditorContext",
    "AdsEditingCampaignGroupEditorContext",
    "AdsFluxHooks",
    "AdsUEditorAdgroupContext",
    "AdsUEditorCampaignContext",
    "AdsUEditorCampaignGroupContext",
    "AdsUEditorHostIDs",
    "FBLogger",
    "nullthrows",
    "react",
    "useSuspensefulAdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext,
      u = 1e4;
    function c(e) {
      Math.random() < 1 / u &&
        r("FBLogger")("am_frameworks").blameToPreviousDirectory().warn(e);
    }
    function d() {
      var e,
        t = s(r("AdsUEditorAdgroupContext")).adgroupEditorContext,
        n = s(r("AdsUEditorCampaignContext")).campaignEditorContext,
        o = s(r("AdsUEditorCampaignGroupContext")).campaignGroupEditorContext,
        a = (e = o != null ? o : n) != null ? e : t;
      return a;
    }
    function m() {
      var e = d();
      return (
        e == null &&
          ((e = r("AdsEditingCampaignGroupEditorContext")),
          c(
            "useUEditorCampaignGroupContext called outside of its context provider, using AdsEditingCampaignGroupEditorContext as fallback",
          )),
        e
      );
    }
    function p() {
      var e = s(r("AdsUEditorAdgroupContext")).adgroupEditorContext,
        t = s(r("AdsUEditorCampaignContext")).campaignEditorContext,
        n = t != null ? t : e;
      return n;
    }
    function _() {
      var e = p();
      return (
        e == null &&
          ((e = r("AdsEditingCampaignEditorContext")),
          c(
            "useUEditorCampaignContext called outside of its context provider, using AdsEditingCampaignEditorContext as fallback",
          )),
        e
      );
    }
    function f() {
      var e = s(r("AdsUEditorAdgroupContext")).adgroupEditorContext;
      return e;
    }
    function g() {
      var e = f();
      return (
        e == null &&
          ((e = r("AdsEditingAdgroupEditorContext")),
          c(
            "useUEditorAdgroupContext called outside of its context provider, using AdsEditingAdgroupEditorContext as fallback",
          )),
        e
      );
    }
    function h(e, t, n) {
      return e == null
        ? (c(n + " fallback to Editing Context"), t)
        : e.hostID !== r("AdsUEditorHostIDs").EDITING
          ? (c(n + " return non Editing Context " + e.hostID), t)
          : e;
    }
    function y() {
      var e = d();
      return h(
        e,
        r("AdsEditingCampaignGroupEditorContext"),
        "useUEditorCampaignGroupContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION",
      );
    }
    function C() {
      var e = p();
      return h(
        e,
        r("AdsEditingCampaignEditorContext"),
        "useUEditorCampaignContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION",
      );
    }
    function b() {
      var e = f();
      return h(
        e,
        r("AdsEditingAdgroupEditorContext"),
        "useUEditorAdgroupContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION",
      );
    }
    function v(e, t) {
      var n = m();
      return r("useSuspensefulAdsSelector")(e, n, n, t);
    }
    function S(e) {
      var t = m();
      return o("AdsFluxHooks").useAdsSelector(e, t, t);
    }
    function R(e) {
      var t = _();
      return o("AdsFluxHooks").useAdsSelector(e, t, t);
    }
    function L(e, t) {
      var n = _();
      return r("useSuspensefulAdsSelector")(e, n, n, t);
    }
    function E(e) {
      var t = g();
      return o("AdsFluxHooks").useAdsSelector(e, t, t);
    }
    function k(e, t) {
      var n,
        o = s(r("AdsUEditorCampaignGroupContext")).campaignGroupEditorContext,
        a = s(r("AdsUEditorCampaignContext")).campaignEditorContext,
        i = s(r("AdsUEditorAdgroupContext")).adgroupEditorContext,
        l = r("nullthrows")((n = i != null ? i : a) != null ? n : o);
      return r("useSuspensefulAdsSelector")(e, l, l, t);
    }
    function I(e, t) {
      var n = s(r("AdsUEditorCampaignContext")).campaignEditorContext,
        o = s(r("AdsUEditorAdgroupContext")).adgroupEditorContext,
        a = r("nullthrows")(o != null ? o : n);
      return r("useSuspensefulAdsSelector")(e, a, a, t);
    }
    ((l.useUEditorCampaignGroupContext = m),
      (l.useUEditorCampaignContext = _),
      (l.useUEditorAdgroupContext = g),
      (l.useUEditorCampaignGroupContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION =
        y),
      (l.useUEditorCampaignContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION = C),
      (l.useUEditorAdgroupContextWithFallback_ONLY_FOR_CONTEXT_MIGRATION = b),
      (l.useUEditorCampaignGroupAdsSelector_LEGACY = v),
      (l.useUEditorCampaignGroupAdsSelector = S),
      (l.useUEditorCampaignAdsSelector = R),
      (l.useUEditorCampaignAdsSelector_LEGACY = L),
      (l.useUEditorAdgroupAdsSelector = E),
      (l.useUEditorAnyLevelAdsSelector = k),
      (l.useUEditorCampaignOrAdgroupAdsSelector_DEPRECATED = I));
  },
  98,
);
