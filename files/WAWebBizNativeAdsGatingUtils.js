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
      return r("justknobx")._("6068");
    }
    function d() {
      return r("justknobx")._("3945");
    }
    function m() {
      if (!o("WAWebMobilePlatforms").isSMB() || !d()) return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_add_media_rollout",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_add_media_dummy",
        );
      return e && t;
    }
    function p() {
      return r("justknobx")._("5322");
    }
    function _() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled_dummy",
        );
      return e && t;
    }
    function f() {
      var e = _();
      return p() && (e || r("justknobx")._("160"));
    }
    function g() {
      return r("justknobx")._("5157") && f();
    }
    function h() {
      if (!o("WAWebMobilePlatforms").isSMB() || !r("justknobx")._("5914"))
        return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_advertise_badge_enabled",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_advertise_badge_dummy_enabled",
        );
      return e && t;
    }
    function y() {
      return r("justknobx")._("5953");
    }
    function C() {
      return r("justknobx")._("5312");
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function R() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function L() {
      return r("justknobx")._("458");
    }
    function E() {
      return r("justknobx")._("5502");
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_native_ads_sabr_enabled",
      );
    }
    function I() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function T() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (k() ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_web_native_ads_budget_recommendation_enabled",
          ))
      );
    }
    function D() {
      return k() || r("justknobx")._("1666");
    }
    function x() {
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
      (l.nativeAdsDescriptionLimitErrorEnabled = c),
      (l.nativeAdsWebAddMediaAffordanceKillswitchEnabled = d),
      (l.nativeAdsWebAddMediaAffordanceEnabled = m),
      (l.nativeAdsUnifiedCreativeMediaStoreEnabled = p),
      (l.nativeAdsCatalogMediaSourceEnabled = f),
      (l.nativeAdsCatalogBoostEnabled = g),
      (l.nativeAdsWebAdvertiseBadgeEnabled = h),
      (l.nativeAdsLiveAdDetailsStatusTextEnabled = y),
      (l.nativeAdsHideViewResultsWhenDetailsOpenEnabled = C),
      (l.nativeAdsCreationHawkToolEnabled = b),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = v),
      (l.nativeAdsMvpQE1Enabled = S),
      (l.nativeAdsMvpQE1EnabledNoExposure = R),
      (l.sendRunContinuouslyEnabled = L),
      (l.nativeAdsCldrCurrencyFormattingEnabled = E),
      (l.tempSabrQABackdoor = k),
      (l.ctwaSabrEnabled = I),
      (l.ctwaBudgetRecommendationEnabled = T),
      (l.inlineNoticePartitionEnabled = D),
      (l.ctwaInlineNoticeModules = x));
  },
  98,
);
