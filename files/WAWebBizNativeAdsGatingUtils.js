__d(
  "WAWebBizNativeAdsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
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
      return o("WAWebMobilePlatforms").isSMB();
    }
    function d() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_enable_continuous_duration",
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_sabr_enabled",
        )
      );
    }
    ((l.nativeAdsDogfoodEnabled = e),
      (l.nativeAdsCreationHawkToolEnabled = s),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = u),
      (l.adCreationEntryPointCatalogEnabled = c),
      (l.adCreationEntryPointCatalogProductEnabled = d),
      (l.nativeAdsMvpQE1Enabled = m),
      (l.nativeAdsMvpQE1EnabledNoExposure = p),
      (l.nativeAdsMvpQE2Enabled = _),
      (l.continuousDurationEnabled = f),
      (l.ctwaSabrEnabled = g));
  },
  98,
);
