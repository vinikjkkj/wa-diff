__d(
  "WAWebUsernameGatingUtils",
  ["WAWebABProps", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("username_contact_display") ||
        r("WAWebEnvironment").isGuest
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("username_search");
    }
    function u() {
      return e() && s();
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_security_code_generation",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("username_numeric_code_v4");
    }
    function m() {
      var e = d();
      return e === 0 || e === 1 || e === 2;
    }
    function p() {
      var e = d();
      return e === 1 || e === 2 || e === 3;
    }
    function _() {
      var e = d();
      return e === 2 || e === 3;
    }
    function f() {
      return !1;
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_group_migration_non_member_iq",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_contact_ui_vcard",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_global_search_enabled",
      );
    }
    function C() {
      return !o("WAWebABProps").getABPropConfigValue(
        "username_search_without_atsign_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_characters",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_numbers",
      );
    }
    function S() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_engagement_network_impact_logging",
      );
    }
    function R() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_adoption_and_engagement_monitoring_enabled",
      );
    }
    function L() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_unknown_user_logging_enabled",
      );
    }
    function E() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "unknown_user_target_rid_logging",
      );
    }
    ((l.usernameDisplayedEnabled = e),
      (l.usernameSearchEnabled = s),
      (l.usernameContactlessChatEnabled = u),
      (l.usernameSecurityCodeGenerationEnabled = c),
      (l.canShowV3NumericCode = m),
      (l.canShowV4NumericCode = p),
      (l.shouldDefaultToV4NumericCode = _),
      (l.shouldLogUnknownNumberError = f),
      (l.lidGroupMigrationNonMemberIQEnabled = g),
      (l.usernameContactUiVcardEnabled = h),
      (l.usernameGlobalSearchEnabled = y),
      (l.usernameSearchRequiresAtSign = C),
      (l.usernameKeyUpsellMaxCharacters = b),
      (l.usernameKeyUpsellMaxNumbers = v),
      (l.usernameEngagementNetworkImpactLoggingEnabled = S),
      (l.usernameAdoptionAndEngagementMonitoringEnabled = R),
      (l.usernameUnknownUserLoggingEnabled = L),
      (l.unknownUserTargetRidLoggingEnabled = E));
  },
  98,
);
