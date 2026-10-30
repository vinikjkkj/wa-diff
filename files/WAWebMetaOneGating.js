__d(
  "WAWebMetaOneGating",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return u() || c() || d() || s();
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_ai_additional_entry_points_enabled",
        ) === !0
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_ai_entry_point_enabled",
        ) === !0
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_tools_entry_point_enabled",
        ) === !0
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        m() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_subscriptions_entry_point_settings_enabled",
        ) === !0
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue("wa_meta_one_enabled") === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_meta_one_eligibility_check_enabled",
        ) === !0
      );
    }
    ((l.isAnyMetaOneEntryPointEnabled = e),
      (l.isMetaOneBizAiAdditionalEntryPointsEnabled = s),
      (l.isMetaOneBizAiEntryPointEnabled = u),
      (l.isMetaOneBusinessToolsEntryPointEnabled = c),
      (l.isMetaOneSettingsEntryPointEnabled = d),
      (l.isMetaOneRolloutEnabled = m));
  },
  98,
);
