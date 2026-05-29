__d(
  "WAWebBizNativeAdsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms", "justknobx"],
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
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function m() {
      return o("WAWebMobilePlatforms").isSMB() && r("justknobx")._("4196");
    }
    ((l.nativeAdsDogfoodEnabled = e),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = s),
      (l.nativeAdsMvpQE1Enabled = u),
      (l.nativeAdsMvpQE1EnabledNoExposure = c),
      (l.nativeAdsMvpQE2Enabled = d),
      (l.nativeAdsAdvantagePlusAudienceEnabled = m));
  },
  98,
);
