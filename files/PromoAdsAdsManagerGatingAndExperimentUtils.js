__d(
  "PromoAdsAdsManagerGatingAndExperimentUtils",
  ["IGAdsSensitiveVerticalsUtils", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("1824");
    }
    function s(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("16608") : r("gkx")("16609")
      );
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("17688") : r("gkx")("17689")
      );
    }
    function c(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("3443")) != null ? n : !1;
      }
      return (t = r("qex")._("3454")) != null ? t : !1;
    }
    function d() {
      return I() ? !1 : r("gkx")("20734");
    }
    function m(e) {
      return p(e) || _(e);
    }
    function p(e) {
      var t, n;
      return e
        ? (t = r("qex")._("4877")) != null
          ? t
          : !1
        : (n = r("qex")._("4878")) != null
          ? n
          : !1;
    }
    function _(e) {
      var t, n;
      return e
        ? (t = r("qex")._("4879")) != null
          ? t
          : !1
        : (n = r("qex")._("4880")) != null
          ? n
          : !1;
    }
    function f(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("4072")) != null ? n : !1;
      }
      return (t = r("qex")._("4073")) != null ? t : !1;
    }
    function g() {
      var e;
      return (e = r("qex")._("3773")) != null ? e : !1;
    }
    function h() {
      return r("gkx")("17087");
    }
    function y() {
      return r("gkx")("24614");
    }
    function C() {
      return r("gkx")("5532");
    }
    function b(e) {
      var t;
      if ((e === void 0 && (e = !0), e)) {
        var n;
        return (n = r("qex")._("5675")) != null ? n : !1;
      }
      return (t = r("qex")._("1896")) != null ? t : !1;
    }
    function v(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("2181")) != null ? n : !1;
      }
      return (t = r("qex")._("2184")) != null ? t : !1;
    }
    function S() {
      return r("gkx")("23714");
    }
    function R(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("2181")) != null ? n : !1;
      }
      return (t = r("qex")._("2184")) != null ? t : !1;
    }
    function L() {
      return r("justknobx")._("2657");
    }
    function E() {
      return r("justknobx")._("1456");
    }
    function k() {
      return r("gkx")("5075");
    }
    function I() {
      return (
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
      );
    }
    ((l.isPharmaHoldout = e),
      (l.isPromoAdsUpsellGuidanceGKEnabled = s),
      (l.isEmailCaptureUpsellGuidanceGKEnabled = u),
      (l.isEmailCaptureUpsellGuidanceQEEnabled = c),
      (l.isPromoAdsIgStoriesCTAPreClickExperienceEnabled = d),
      (l.isWACaptureEnabledForAdAccount = m),
      (l.isWACaptureEnabledForAdAccountWithGuidance = _),
      (l.isShopifySyncEnabled = f),
      (l.isPromoAdsAutoSourcedOfferTransparencyEnabled = g),
      (l.isShopifySyncedOfferBAUExpansionAdExEnabled = h),
      (l.isReconBAUExpansionAdExEnabled = y),
      (l.isInPromoCodesOfferUnificationTargetingGK = C),
      (l.isInPromoCodesOfferUnificationExperimentTestGroup = b),
      (l.isPromoAdsAlwaysOnEnabled = v),
      (l.isVanillaPromoAlwaysOnNoOffersNewUIEnabled = S),
      (l.isEmailCaptureAlwaysOnEnabled = R),
      (l.shouldShowPromoAdsAlwaysOnNoticeInDuplicationDialog = L),
      (l.shouldHideHelpArticleLinksForV3 = E),
      (l.isPromoAdsSuppressDOIOnEditEnabled = k),
      (l.isSensitiveTierAdvertiser = I));
  },
  98,
);
