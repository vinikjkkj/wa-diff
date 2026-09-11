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
      return o("WAWebABProps").getABPropConfigValue(
        "lid_group_migration_non_member_iq",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_contact_ui_vcard",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_global_search_enabled",
      );
    }
    function y() {
      return !o("WAWebABProps").getABPropConfigValue(
        "username_search_without_atsign_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_characters",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_numbers",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_adoption_and_engagement_monitoring_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_unknown_user_logging_enabled",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "unknown_user_target_rid_logging",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "unknown_user_recovery_enabled",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "unknown_user_usync_request_cool_down",
      );
    }
    ((l.usernameDisplayedEnabled = e),
      (l.usernameSearchEnabled = s),
      (l.usernameContactlessChatEnabled = u),
      (l.usernameSecurityCodeGenerationEnabled = c),
      (l.canShowV3NumericCode = m),
      (l.canShowV4NumericCode = p),
      (l.shouldDefaultToV4NumericCode = _),
      (l.lidGroupMigrationNonMemberIQEnabled = f),
      (l.usernameContactUiVcardEnabled = g),
      (l.usernameGlobalSearchEnabled = h),
      (l.usernameSearchRequiresAtSign = y),
      (l.usernameKeyUpsellMaxCharacters = C),
      (l.usernameKeyUpsellMaxNumbers = b),
      (l.usernameAdoptionAndEngagementMonitoringEnabled = v),
      (l.usernameUnknownUserLoggingEnabled = S),
      (l.unknownUserTargetRidLoggingEnabled = R),
      (l.unknownUserRecoveryEnabled = L),
      (l.unknownUserUsyncRequestCoolDownSecs = E));
  },
  98,
);
