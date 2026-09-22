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
      return r("justknobx")._("3945");
    }
    function d() {
      if (!o("WAWebMobilePlatforms").isSMB() || !c()) return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_add_media_rollout",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_add_media_dummy",
        );
      return e && t;
    }
    function m() {
      return r("justknobx")._("5322");
    }
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled_dummy",
        );
      return e && t;
    }
    function _() {
      var e = p();
      return m() && (e || r("justknobx")._("160"));
    }
    function f() {
      return r("justknobx")._("5157") && _();
    }
    function g() {
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
    function h() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function C() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function v() {
      return r("justknobx")._("458");
    }
    function S() {
      return r("justknobx")._("5502");
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_native_ads_sabr_enabled",
      );
    }
    function L() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function E() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (R() ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_web_native_ads_budget_recommendation_enabled",
          ))
      );
    }
    function k() {
      return R() || r("justknobx")._("1666");
    }
    function I() {
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
      (l.nativeAdsWebAddMediaAffordanceKillswitchEnabled = c),
      (l.nativeAdsWebAddMediaAffordanceEnabled = d),
      (l.nativeAdsUnifiedCreativeMediaStoreEnabled = m),
      (l.nativeAdsCatalogMediaSourceEnabled = _),
      (l.nativeAdsCatalogBoostEnabled = f),
      (l.nativeAdsWebAdvertiseBadgeEnabled = g),
      (l.nativeAdsCreationHawkToolEnabled = h),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = y),
      (l.nativeAdsMvpQE1Enabled = C),
      (l.nativeAdsMvpQE1EnabledNoExposure = b),
      (l.sendRunContinuouslyEnabled = v),
      (l.nativeAdsCldrCurrencyFormattingEnabled = S),
      (l.tempSabrQABackdoor = R),
      (l.ctwaSabrEnabled = L),
      (l.ctwaBudgetRecommendationEnabled = E),
      (l.inlineNoticePartitionEnabled = k),
      (l.ctwaInlineNoticeModules = I));
  },
  98,
);
