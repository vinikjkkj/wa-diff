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
      return r("justknobx")._("5322") || d();
    }
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled_dummy",
        );
      return e && t;
    }
    function m() {
      var e = d();
      return c() && (e || r("justknobx")._("160"));
    }
    function p() {
      return r("justknobx")._("5157") && m();
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
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
      return r("justknobx")._("5502");
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_native_ads_sabr_enabled",
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (b() ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_web_native_ads_budget_recommendation_enabled",
          ))
      );
    }
    function R() {
      return b() || r("justknobx")._("1666");
    }
    function L() {
      return r("justknobx")._("2678");
    }
    function E() {
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
      (l.nativeAdsCatalogMediaSourceEnabled = m),
      (l.nativeAdsCatalogBoostEnabled = p),
      (l.nativeAdsCreationHawkToolEnabled = _),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = f),
      (l.nativeAdsMvpQE1Enabled = g),
      (l.nativeAdsMvpQE1EnabledNoExposure = h),
      (l.sendRunContinuouslyEnabled = y),
      (l.nativeAdsCldrCurrencyFormattingEnabled = C),
      (l.tempSabrQABackdoor = b),
      (l.ctwaSabrEnabled = v),
      (l.ctwaBudgetRecommendationEnabled = S),
      (l.inlineNoticePartitionEnabled = R),
      (l.catalogSharingDisclosureCopyEnabled = L),
      (l.ctwaInlineNoticeModules = E));
  },
  98,
);
