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
        : c("silent")
          ? !0
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
    function c(e) {
      return e ? r("gkx")("16043") : r("gkx")("19633");
    }
    function d() {
      return r("gkx")("15988") || !e() ? !1 : r("gkx")("9516");
    }
    function m(t) {
      return r("gkx")("15988") || !e()
        ? !1
        : t
          ? r("gkx")("15472")
          : r("gkx")("19200");
    }
    function p(t) {
      return e() && (t === "silent" ? r("gkx")("7489") : r("gkx")("8099"));
    }
    function _() {
      return e();
    }
    function f(t) {
      return e() && (t === "silent" ? r("gkx")("14599") : r("gkx")("22365"));
    }
    function g(t) {
      return e() && (t === "silent" ? r("gkx")("7923") : r("gkx")("8322"));
    }
    function h(e) {
      return e === "silent" ? r("gkx")("26107") : r("gkx")("22935");
    }
    function y(t) {
      return e() && (t === "silent" ? r("gkx")("6711") : r("gkx")("6961"));
    }
    function C(e) {
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
    function b(e) {
      return r("gkx")("17296") ? C(e) : !1;
    }
    function v(e) {
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
    function S() {
      return d() || m("silent") || u("silent");
    }
    function R() {
      return r("gkx")("18706") && (d() || m("silent"));
    }
    function L(e) {
      return R() && e === !0;
    }
    function E(e) {
      return e ? r("gkx")("19774") : r("gkx")("19777");
    }
    function k() {
      return e() && r("gkx")("23297");
    }
    function I(e) {
      return e === "silent" ? r("gkx")("19805") : r("gkx")("19816");
    }
    function T() {
      return e() && r("gkx")("9251");
    }
    function D() {
      return r("gkx")("14125");
    }
    function x(t) {
      return (
        t === void 0 && (t = !0),
        e()
          ? t
            ? r("gkx")("7278") || r("gkx")("23682")
            : r("gkx")("7356") || r("gkx")("23692")
          : !1
      );
    }
    function $(e, t) {
      return (
        t === void 0 && (t = !0),
        !r("justknobx")._("3107") || !P(t) ? !1 : e !== "OPTED_OUT"
      );
    }
    function P(e) {
      return e ? r("gkx")("23843") : r("gkx")("23854");
    }
    function N(e) {
      return e === "OPTED_OUT";
    }
    function M() {
      return r("gkx")("25891");
    }
    function w() {
      return r("gkx")("16087");
    }
    function A() {
      return r("justknobx")._("1241");
    }
    function F() {
      return r("justknobx")._("5767");
    }
    function O() {
      var e;
      return r("justknobx")._("3320") && (e = r("justknobx")._("3329")) != null
        ? e
        : 0;
    }
    function B() {
      return r("qex")._("400") === !0;
    }
    function W() {
      return r("qex")._("901") === !0;
    }
    function q() {
      return r("qex")._("1384") === !0;
    }
    function U() {
      return W() || q();
    }
    function V() {
      return r("justknobx")._("5770") ? !1 : r("gkx")("24861");
    }
    ((l.isAccountEligibleForCreativeFlexRollout = e),
      (l.isAccountEligibleForStickyDefaultOn = s),
      (l.isAccountEligibleForGlobalish = u),
      (l.isEligibleForSBGStickyDefaultOn = c),
      (l.isEligibleForSBGDefaultOn = d),
      (l.isEligibleForNewSBGDefaultOn = m),
      (l.isAccountEligibleForCreativeFlexBulkyEdit = p),
      (l.isEligibleForCreativeFlexLifetimeBudgetFix = _),
      (l.isAccountEligibleForMidflightDefaultOn = f),
      (l.isAccountEligibleForDAFeatureAwarePreflight = g),
      (l.isEligibleForCreativeFlexNoCandidateFix = h),
      (l.isAccountEligibleForCreativeFlexDuplicationUpgrade = y),
      (l.isAdGroupEligibleForEagerPathWH = C),
      (l.isEagerPathWHDynamicCapLimitEnabled = b),
      (l.isWHReadPathEnabled = v),
      (l.isRMDefaultOn = S),
      (l.isEligibleForSBGAdgroupStickyOptOut = R),
      (l.isStickyRelatedMediaOptOut = L),
      (l.isEligibleForCreativeFlexRemoveBudgetCheck = E),
      (l.isEligibleForCreativeFlexUnknownBucketFix = k),
      (l.isAwarenessObjectiveEnabledForCreativeFlex = I),
      (l.isEligibleForCreativeFlexUnknownBucketFixEnhanced = T),
      (l.isEligibleForSADefaultOnRescue = D),
      (l.isAccountEligibleForPushModel = x),
      (l.isPushModelDefaultOn = $),
      (l.isPushModelStickyOptOut = N),
      (l.shouldSkipCreativeFlexSettingWriteOnDefaultOn = M),
      (l.shouldSkipCreativeFlexCagOriginWrite = w),
      (l.isExistingPostAdFlowEnabled = A),
      (l.isExistingPostAdDefaultOnEnabled = F),
      (l.getCreativeFlexOptOutStickyThreshold = O),
      (l.isRelatedMediaEnabledForExistingPostNoExposure = B),
      (l.isSuggestedPostHiddenAfterSelect = W),
      (l.isSuggestedPostRemovedAfterSelect = q),
      (l.isMultiPostRelatedMediaCoexistenceEnabled = U),
      (l.isEligibleForMultiMediaAltText = V));
  },
  98,
);
