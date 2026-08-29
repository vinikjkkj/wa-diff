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
      if (!o("WAWebMobilePlatforms").isSMB()) return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_creation_rollout",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_creation_dummy",
        );
      return e && t;
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_creation_rollout_no_exposure",
        )
      );
    }
    function c() {
      return r("justknobx")._("5322");
    }
    function d() {
      return c() && r("justknobx")._("160");
    }
    function m() {
      return r("justknobx")._("5157") && d();
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function f() {
      return (
        r("justknobx")._("3473") ||
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_detailed_targeting",
        )
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function h() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function y() {
      return r("justknobx")._("458");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_native_ads_sabr_enabled",
      );
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (C() ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_web_native_ads_budget_recommendation_enabled",
          ))
      );
    }
    function S() {
      return C() || r("justknobx")._("1666");
    }
    function R() {
      var e = o("WAWebABProps")
        .getABPropConfigValue("ctwa_native_ads_inline_notice_modules")
        .split(",");
      return r("WAWebCompactMapString")(e, function (e) {
        return e.trim();
      });
    }
    ((l.nativeAdsDogfoodEnabled = e),
      (l.nativeAdsWebCreationEnabled = s),
      (l.nativeAdsWebCreationRolloutEnabledNoExposure = u),
      (l.nativeAdsUnifiedCreativeMediaStoreEnabled = c),
      (l.nativeAdsCatalogMediaSourceEnabled = d),
      (l.nativeAdsCatalogBoostEnabled = m),
      (l.nativeAdsCreationHawkToolEnabled = p),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = _),
      (l.nativeAdsDetailedTargetingEnabled = f),
      (l.nativeAdsMvpQE1Enabled = g),
      (l.nativeAdsMvpQE1EnabledNoExposure = h),
      (l.sendRunContinuouslyEnabled = y),
      (l.tempSabrQABackdoor = C),
      (l.ctwaSabrEnabled = b),
      (l.ctwaBudgetRecommendationEnabled = v),
      (l.inlineNoticePartitionEnabled = S),
      (l.ctwaInlineNoticeModules = R));
  },
  98,
);
