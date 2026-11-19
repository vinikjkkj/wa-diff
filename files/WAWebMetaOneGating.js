__d(
  "WAWebMetaOneGating",
  ["WAWebABProps", "WAWebMobilePlatforms", "WAWebUserPrefsSubscription"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (!o("WAWebMobilePlatforms").isSMB() || !_()) return "not_eligible";
      var e = o(
          "WAWebUserPrefsSubscription",
        ).getSubscriptionsEntryPointEligibility(),
        t = e.metaOne,
        n = e.metaOnePurchaseEligibility;
      return t == null
        ? null
        : n != null
          ? n
          : t
            ? "web_purchase"
            : "not_eligible";
    }
    function s(e) {
      return e === "web_purchase" || e === "mobile_purchase";
    }
    function u() {
      return d() || m() || p() || c();
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        _() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_ai_additional_entry_points_enabled",
        ) === !0
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        _() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_ai_entry_point_enabled",
        ) === !0
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        _() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_tools_entry_point_enabled",
        ) === !0
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        _() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_subscriptions_entry_point_settings_enabled",
        ) === !0
      );
    }
    function _() {
      return (
        o("WAWebABProps").getABPropConfigValue("wa_meta_one_enabled") === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_meta_one_eligibility_check_enabled",
        ) === !0
      );
    }
    ((l.getMetaOneEligibility = e),
      (l.isMetaOneEligible = s),
      (l.isAnyMetaOneEntryPointEnabled = u),
      (l.isMetaOneBizAiAdditionalEntryPointsEnabled = c),
      (l.isMetaOneBizAiEntryPointEnabled = d),
      (l.isMetaOneBusinessToolsEntryPointEnabled = m),
      (l.isMetaOneSettingsEntryPointEnabled = p),
      (l.isMetaOneRolloutEnabled = _));
  },
  98,
);
