__d(
  "WAWebBizNativeAdsGatingUtils",
  [
    "WAWebABProps",
    "WAWebCompactMapString",
    "WAWebMobilePlatforms",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_enabled",
        )
      );
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function c() {
      return (
        r("justknobx")._("3473") ||
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_detailed_targeting",
        )
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_enable_continuous_duration",
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_budget_recommendation_enabled",
        )
      );
    }
    function h() {
      return r("justknobx")._("4412");
    }
    function y() {
      return r("justknobx")._("1666");
    }
    function C() {
      var e = o("WAWebABProps")
        .getABPropConfigValue("ctwa_native_ads_inline_notice_modules")
        .split(",");
      return r("WAWebCompactMapString")(e, function (e) {
        return e.trim();
      });
    }
    ((l.nativeAdsDogfoodEnabled = e),
      (l.nativeAdsCreationHawkToolEnabled = s),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = u),
      (l.nativeAdsDetailedTargetingEnabled = c),
      (l.nativeAdsMvpQE1Enabled = d),
      (l.nativeAdsMvpQE1EnabledNoExposure = m),
      (l.nativeAdsMvpQE2Enabled = p),
      (l.continuousDurationEnabled = _),
      (l.ctwaSabrEnabled = f),
      (l.ctwaBudgetRecommendationEnabled = g),
      (l.minMaxBudgetFixesEnabled = h),
      (l.inlineNoticePartitionEnabled = y),
      (l.ctwaInlineNoticeModules = C));
  },
  98,
);
