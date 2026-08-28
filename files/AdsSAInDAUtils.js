__d(
  "AdsSAInDAUtils",
  ["AdsAPIOptimizationGoals", "AdsDynamicAdsUtils", "isFalsey", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o, a;
      return r("isTruthy")(n == null ? void 0 : n.is_pca_unified) || !d(e, t)
        ? !1
        : r("isTruthy")(
            (o = e.promoted_object) == null ? void 0 : o.product_set_id,
          ) &&
            r("isFalsey")((a = t.creative) == null ? void 0 : a.product_set_id);
    }
    function s(e, t) {
      var n, o;
      return d(e, t)
        ? r("isTruthy")(
            (n = e.promoted_object) == null ? void 0 : n.product_set_id,
          ) &&
            r("isTruthy")((o = t.creative) == null ? void 0 : o.product_set_id)
        : !1;
    }
    function u(e, t) {
      var n,
        a,
        i =
          (e == null ? void 0 : e.optimization_goal) ===
            r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
          (e == null ? void 0 : e.optimization_goal) ===
            r("AdsAPIOptimizationGoals").VALUE,
        l =
          (e == null || (n = e.promoted_object) == null
            ? void 0
            : n.variation) === "PRODUCT_SET_AND_OMNICHANNEL",
        s =
          e != null &&
          (e == null || (a = e.promoted_object) == null
            ? void 0
            : a.omnichannel_object) == null,
        u = t != null && o("AdsDynamicAdsUtils").isDynamicAd(t);
      return i && l && s && u;
    }
    function c(e, t) {
      return u(e, t) ? !1 : s(e, t);
    }
    function d(e, t) {
      return !u(e, t);
    }
    function m(e, t, n, r) {
      if (!d(n, r)) return !1;
      var o =
          (e == null ? void 0 : e.size) === 0 &&
          (t == null ? void 0 : t.size) === 0,
        a =
          (e == null ? void 0 : e.size) === 1 &&
          (t == null ? void 0 : t.size) === 0,
        i =
          (e == null ? void 0 : e.size) === 0 &&
          (t == null ? void 0 : t.size) === 1,
        l =
          (e == null ? void 0 : e.size) === 1 &&
          (t == null ? void 0 : t.size) === 1,
        s = !1;
      return o || a || i || l || s;
    }
    ((l.isSAInDAEnabledUsingCampaignAndAdgroup = e),
      (l.isL3DADynamicAd = s),
      (l.isL1EligibleforSAInDAEnablement = c),
      (l.isGKEnableForSAInDA = d),
      (l.isEligibleForSAInDA = m));
  },
  98,
);
