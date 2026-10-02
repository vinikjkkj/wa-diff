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
      return r("justknobx")._("6091");
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function R() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_h2_2026_ofs_migration_enabled",
        )
      );
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function E() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function k() {
      return r("justknobx")._("458");
    }
    function I() {
      return r("justknobx")._("5502");
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_native_ads_sabr_enabled",
      );
    }
    function D() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function x() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (T() ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_web_native_ads_budget_recommendation_enabled",
          ))
      );
    }
    function $() {
      return T() || r("justknobx")._("1666");
    }
    function P() {
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
      (l.nativeAdsStackAwareManageAdsNavigationEnabled = b),
      (l.nativeAdsCreationHawkToolEnabled = v),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = S),
      (l.nativeAdsOfsForecastEnabled = R),
      (l.nativeAdsMvpQE1Enabled = L),
      (l.nativeAdsMvpQE1EnabledNoExposure = E),
      (l.sendRunContinuouslyEnabled = k),
      (l.nativeAdsCldrCurrencyFormattingEnabled = I),
      (l.tempSabrQABackdoor = T),
      (l.ctwaSabrEnabled = D),
      (l.ctwaBudgetRecommendationEnabled = x),
      (l.inlineNoticePartitionEnabled = $),
      (l.ctwaInlineNoticeModules = P));
  },
  98,
);
