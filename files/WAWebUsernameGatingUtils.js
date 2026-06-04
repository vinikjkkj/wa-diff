__d(
  "WAWebUsernameGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_contact_display",
      );
    }
    function s() {
      return !!o("WAWebABProps").getABPropConfigValue("username_search");
    }
    function u() {
      return e() && s();
    }
    function c() {
      return !!o("WAWebABProps").getABPropConfigValue(
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
      return !!o("WAWebABProps").getABPropConfigValue(
        "mex_usync_username_query",
      );
    }
    function h() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "phone_number_sharing_flow",
      );
    }
    function y() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "lid_group_migration_non_member_iq",
      );
    }
    function C() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_group_mutation_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_check_debounce_in_ms",
      );
    }
    function v() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_contact_ui_vcard",
      );
    }
    function S() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_global_search_enabled",
      );
    }
    function R() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_exposed_logging_enabled",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("username_key_upsell_mode");
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_characters",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_numbers",
      );
    }
    function I() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_engagement_network_impact_logging",
      );
    }
    function T() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_adoption_and_engagement_monitoring_enabled",
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
      (l.mexUsyncUsernameQueryEnabled = g),
      (l.phoneNumberSharingFlowEnabled = h),
      (l.lidGroupMigrationNonMemberIQEnabled = y),
      (l.usernameGroupMutationEnabled = C),
      (l.usernameEligibilityDebounceMs = b),
      (l.usernameContactUiVcardEnabled = v),
      (l.usernameGlobalSearchEnabled = S),
      (l.usernameExposedLoggingEnabled = R),
      (l.usernameKeyUpsellMode = L),
      (l.usernameKeyUpsellMaxCharacters = E),
      (l.usernameKeyUpsellMaxNumbers = k),
      (l.usernameEngagementNetworkImpactLoggingEnabled = I),
      (l.usernameAdoptionAndEngagementMonitoringEnabled = T));
  },
  98,
);
