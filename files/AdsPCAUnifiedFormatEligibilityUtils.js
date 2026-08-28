__d(
  "AdsPCAUnifiedFormatEligibilityUtils",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsPCAUnificationUtils",
    "AdsPromotedObjectTypes",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("5562");
    }
    function s() {
      return !r("justknobx")._("2855");
    }
    function u(e, t) {
      return (
        e === void 0 && (e = !0),
        t === void 0 && (t = !1),
        s() && !t
          ? !1
          : e
            ? r("qex")._("4926") === "ws1_ws2"
            : r("qex")._("4925") === "ws1_ws2"
      );
    }
    function c() {
      return !r("justknobx")._("5185");
    }
    function d(e) {
      return (
        e === void 0 && (e = !0),
        c()
          ? !1
          : e
            ? r("qex")._("4926") === "ws2_only"
            : r("qex")._("4925") === "ws2_only"
      );
    }
    function m() {
      return u() || d();
    }
    function p() {
      return m() ? r("gkx")("23764") : !1;
    }
    function _() {
      return m() ? r("gkx")("23765") : !1;
    }
    function f() {
      return m() ? !p() && !_() : !1;
    }
    function g() {
      return p() ? "pe_heavy" : _() ? "sa_heavy" : "da_heavy";
    }
    function h() {
      return r("qex")._("4926");
    }
    function y() {
      return r("justknobx")._("489");
    }
    function C() {
      return !1;
    }
    function b(e) {
      return e === "static_and_dynamic";
    }
    function v(e) {
      return (
        e === r("AdsPromotedObjectTypes").WEBSITE ||
        e === r("AdsPromotedObjectTypes").PIXEL
      );
    }
    function S(e, t) {
      if (
        y() ||
        !o("AdsAPICampaignGroupRecordUtils").isSalesObjective(e) ||
        !v(t == null ? void 0 : t.conversion_locations)
      )
        return !1;
      var n =
          o(
            "AdsPCAUnificationUtils",
          ).isPcaUnificationEnabledAndL3CatalogSelected(e) && u(),
        r =
          o(
            "AdsPCAUnificationUtils",
          ).isPcaUnificationDisabledAndL3CatalogNotSelected(e) && d();
      return n || r;
    }
    function R(e) {
      var t;
      return y()
        ? !1
        : (e == null || (t = e.metadata) == null
            ? void 0
            : t.is_pca_unified_format_ad) === !0;
    }
    function L(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.creative) == null
              ? void 0
              : n.format_transformation_spec) != null
            ? t
            : [];
      return r.some(function (e) {
        var t = e.data_source;
        return (
          e.format === "single_media" &&
          t != null &&
          t.includes("manual_uploads")
        );
      });
    }
    function E(e) {
      return R(e) && !L(e);
    }
    function k(e, t) {
      return y() ? !1 : I(e, t) || T(e, t);
    }
    function I(e, t) {
      var n;
      return y()
        ? !1
        : o(
            "AdsPCAUnificationUtils",
          ).isPcaUnificationEnabledAndL3CatalogSelected(e) &&
            (t == null || (n = t.metadata) == null
              ? void 0
              : n.is_pca_unified_format_ad) === !0;
    }
    function T(e, t) {
      var n;
      return y()
        ? !1
        : o(
            "AdsPCAUnificationUtils",
          ).isPcaUnificationDisabledAndL3CatalogNotSelected(e) &&
            (t == null || (n = t.metadata) == null
              ? void 0
              : n.is_pca_unified_format_ad) === !0;
    }
    ((l.isGKEnableForUnifiedMediaSetupFlow = e),
      (l.shouldSunsetPCAUWS2TestCell1 = s),
      (l.isGKEnabledForPCAUWS2ScaledAlphaTestCell1 = u),
      (l.shouldSunsetPCAUWS2TestCell2 = c),
      (l.isGKEnabledForPCAUWS2ScaledAlphaOverBAU = d),
      (l.isGKEnabledForPCAUWS2ScaledAlphaForAllTestCells = m),
      (l.isPCAUWS2PEHeavy = p),
      (l.isPCAUWS2SAHeavy = _),
      (l.isPCAUWS2DAHeavy = f),
      (l.getPCAUWS2Cohort = g),
      (l.getPCAUWS2TreatmentType = h),
      (l.isDARelatedMediaEnabledForPCAUnifiedL1 = C),
      (l.isMediaSourcePCAUnifiedFormat = b),
      (l.isWebsiteConversionLocation = v),
      (l.isEligiblePCAUnifiedL1EvenIfMissingSentinel = S),
      (l.isEligiblePCAUnifiedAdgroup = R),
      (l.isEligiblePCAUnifiedAdgroupWithSASingleMediaOptedOut = E),
      (l.isEligiblePCAUnifiedL1 = k),
      (l.isEligiblePCAUnifiedL1WithTestCell1 = I),
      (l.isEligiblePCAUnifiedL1WithTestCell2 = T));
  },
  98,
);
