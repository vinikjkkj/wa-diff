__d(
  "WAWebMetaOneGating",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_ai_entry_point_enabled",
        ) === !0
      );
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_tools_entry_point_enabled",
        ) === !0
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_subscriptions_entry_point_settings_enabled",
        ) === !0
      );
    }
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue("wa_meta_one_enabled") === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_meta_one_rollout_enabled",
        ) === !0
      );
    }
    ((l.isMetaOneBizAiEntryPointEnabled = e),
      (l.isMetaOneBusinessToolsEntryPointEnabled = s),
      (l.isMetaOneSettingsEntryPointEnabled = u),
      (l.isMetaOneRolloutEnabled = c));
  },
  98,
);
