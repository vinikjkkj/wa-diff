__d(
  "AdsCreativeFlexGKCheckUtils",
  ["AdsChildAttachmentsUtils", "AdsDynamicAdsUtils", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !r("gkx")("17706");
    }
    function s(t) {
      return r("gkx")("15988") || !e()
        ? !1
        : t
          ? r("gkx")("2885")
          : r("gkx")("4955");
    }
    function u(t) {
      if (!e()) return !1;
      if (t) {
        var n = r("gkx")("19418"),
          o = r("gkx")("16966");
        return n || o;
      }
      var a = r("gkx")("19419"),
        i = r("gkx")("18234");
      return a || i;
    }
    function c() {
      return r("gkx")("15988") || !e() ? !1 : r("gkx")("9516");
    }
    function d() {
      return r("gkx")("12405");
    }
    function m(t) {
      return e() && (t === "silent" ? r("gkx")("14599") : r("gkx")("22365"));
    }
    function p(t) {
      return e() && (t === "silent" ? r("gkx")("7923") : r("gkx")("8322"));
    }
    function _() {
      return e() && r("gkx")("6961");
    }
    function f(e) {
      var t;
      return !(
        e == null ||
        o("AdsDynamicAdsUtils").isDynamicAd(e) ||
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
        (e == null || (t = e.metadata) == null
          ? void 0
          : t.is_pca_unified_format_ad) === !0
      );
    }
    function g(e) {
      return r("gkx")("17296") ? f(e) : !1;
    }
    function h(e) {
      return e
        ? r("qex")._("5128") === !0 ||
            r("gkx")("19452") === !0 ||
            r("gkx")("19454") === !0 ||
            r("gkx")("20703") === !0
        : r("qex")._("4862") === !0 ||
            r("gkx")("19491") === !0 ||
            r("gkx")("19510") === !0 ||
            r("gkx")("20755") === !0;
    }
    function y() {
      return c();
    }
    function C(e) {
      return y() && e === !0;
    }
    function b(e) {
      return e === "silent" ? r("gkx")("19805") : r("gkx")("19816");
    }
    function v() {
      return e() && r("gkx")("9251");
    }
    function S(t) {
      return (
        t === void 0 && (t = !0),
        e()
          ? t
            ? r("gkx")("7278") || r("gkx")("23682")
            : r("gkx")("7356") || r("gkx")("23692")
          : !1
      );
    }
    function R(e) {
      return (
        e === void 0 && (e = !0),
        S() ? (e ? r("gkx")("8872") : r("gkx")("9077")) : !1
      );
    }
    function L(e, t) {
      return (
        t === void 0 && (t = !0),
        !r("justknobx")._("3107") || !E(t) ? !1 : e !== "OPTED_OUT"
      );
    }
    function E(e) {
      return e ? r("gkx")("23843") : r("gkx")("23854");
    }
    function k(e) {
      return e === "OPTED_OUT";
    }
    function I() {
      return r("gkx")("25891");
    }
    function T() {
      return r("gkx")("16087");
    }
    function D() {
      return r("justknobx")._("1241");
    }
    function x() {
      return r("justknobx")._("5767");
    }
    function $() {
      return r("justknobx")._("5898");
    }
    function P() {
      var e;
      return r("justknobx")._("3320") && (e = r("justknobx")._("3329")) != null
        ? e
        : 0;
    }
    function N() {
      return r("gkx")("24230");
    }
    function M() {
      return r("gkx")("24230");
    }
    function w() {
      return !1;
    }
    function A() {
      return M() || w();
    }
    function F() {
      return r("justknobx")._("5770") ? !1 : r("gkx")("16767");
    }
    ((l.isAccountEligibleForCreativeFlexRollout = e),
      (l.isAccountEligibleForStickyDefaultOn = s),
      (l.isAccountEligibleForGlobalish = u),
      (l.isEligibleForSBGDefaultOn = c),
      (l.isEligibleForCreativeFlexDefaultOnFix = d),
      (l.isAccountEligibleForMidflightDefaultOn = m),
      (l.isAccountEligibleForDAFeatureAwarePreflight = p),
      (l.isAccountEligibleForCreativeFlexDuplicationUpgrade = _),
      (l.isAdGroupEligibleForEagerPathWH = f),
      (l.isEagerPathWHDynamicCapLimitEnabled = g),
      (l.isWHReadPathEnabled = h),
      (l.isEligibleForSBGAdgroupStickyOptOut = y),
      (l.isStickyRelatedMediaOptOut = C),
      (l.isAwarenessObjectiveEnabledForCreativeFlex = b),
      (l.isEligibleForCreativeFlexUnknownBucketFixEnhanced = v),
      (l.isAccountEligibleForPushModel = S),
      (l.isPushModelEarlyQueryEnabled = R),
      (l.isPushModelDefaultOn = L),
      (l.isPushModelSBGDefaultOn = E),
      (l.isPushModelStickyOptOut = k),
      (l.shouldSkipCreativeFlexSettingWriteOnDefaultOn = I),
      (l.shouldSkipCreativeFlexCagOriginWrite = T),
      (l.isExistingPostAdFlowEnabled = D),
      (l.isExistingPostAdDefaultOnEnabled = x),
      (l.isEpaIgVideoCopyRefetchEnabled = $),
      (l.getCreativeFlexOptOutStickyThreshold = P),
      (l.isRelatedMediaEnabledForExistingPostNoExposure = N),
      (l.isSuggestedPostHiddenAfterSelect = M),
      (l.isSuggestedPostRemovedAfterSelect = w),
      (l.isMultiPostRelatedMediaCoexistenceEnabled = A),
      (l.isEligibleForMultiMediaAltText = F));
  },
  98,
);
