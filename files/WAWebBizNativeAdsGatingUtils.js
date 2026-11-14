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
      return r("justknobx")._("6913");
    }
    function m() {
      return r("justknobx")._("3945");
    }
    function p() {
      if (!o("WAWebMobilePlatforms").isSMB() || !m()) return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_add_media_rollout",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_add_media_dummy",
        );
      return e && t;
    }
    function _() {
      return r("justknobx")._("5322");
    }
    function f() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_catalog_media_enabled_dummy",
        );
      return e && t;
    }
    function g() {
      var e = f();
      return _() && (e || r("justknobx")._("160"));
    }
    function h() {
      return r("justknobx")._("5157") && g();
    }
    function y() {
      return r("justknobx")._("7744");
    }
    function C() {
      return r("justknobx")._("7745");
    }
    function b() {
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
    function v() {
      if (!o("WAWebMobilePlatforms").isSMB() || !r("justknobx")._("7211"))
        return !1;
      var e = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_advertise_subcontent_variant",
        ),
        t = o("WAWebABProps").getABPropConfigValue(
          "wa_native_ads_web_advertise_subcontent_dummy_variant",
        );
      return t > 0 && e === 1;
    }
    function S() {
      return r("justknobx")._("5953");
    }
    function R() {
      return r("justknobx")._("5312");
    }
    function L() {
      return r("justknobx")._("1019");
    }
    function E() {
      return r("justknobx")._("6091");
    }
    function k() {
      return r("justknobx")._("6406");
    }
    function I() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function T() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function D() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_h2_2026_ofs_migration_enabled",
        )
      );
    }
    function x() {
      return r("justknobx")._("458");
    }
    function $() {
      return r("justknobx")._("5502");
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_native_ads_sabr_enabled",
      );
    }
    function N() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    function M() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (P() ||
          o("WAWebABProps").getABPropConfigValue(
            "ctwa_web_native_ads_budget_recommendation_enabled",
          ))
      );
    }
    function w() {
      return P() || r("justknobx")._("1666");
    }
    function A() {
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
      (l.nativeAdsPreviewWAAdsIdentityProfileEnabled = d),
      (l.nativeAdsWebAddMediaAffordanceKillswitchEnabled = m),
      (l.nativeAdsWebAddMediaAffordanceEnabled = p),
      (l.nativeAdsUnifiedCreativeMediaStoreEnabled = _),
      (l.nativeAdsCatalogMediaSourceEnabled = g),
      (l.nativeAdsCatalogBoostEnabled = h),
      (l.boostCreationUsesEntryFlowIDEnabled = y),
      (l.boostCreationLogsCatalogEntryPointEnabled = C),
      (l.nativeAdsWebAdvertiseBadgeEnabled = b),
      (l.nativeAdsWebAdvertiseSubcontentTestEnabled = v),
      (l.nativeAdsLiveAdDetailsStatusTextEnabled = S),
      (l.nativeAdsHideViewResultsWhenDetailsOpenEnabled = R),
      (l.nativeAdsBlockRecreateNonMessagingGoalsEnabled = L),
      (l.nativeAdsStackAwareManageAdsNavigationEnabled = E),
      (l.nativeAdsWAAAdsIdentityUpsertEnabled = k),
      (l.nativeAdsCreationHawkToolEnabled = I),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = T),
      (l.nativeAdsOfsForecastEnabled = D),
      (l.sendRunContinuouslyEnabled = x),
      (l.nativeAdsCldrCurrencyFormattingEnabled = $),
      (l.tempSabrQABackdoor = P),
      (l.ctwaSabrEnabled = N),
      (l.ctwaBudgetRecommendationEnabled = M),
      (l.inlineNoticePartitionEnabled = w),
      (l.ctwaInlineNoticeModules = A));
  },
  98,
);
