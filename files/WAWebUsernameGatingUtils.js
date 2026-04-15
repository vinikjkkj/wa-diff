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
        "pushname_blocklist_starting_with_at",
      );
    }
    function y() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "phone_number_sharing_flow",
      );
    }
    function C() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "lid_group_migration_non_member_iq",
      );
    }
    function b() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_group_mutation_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_check_debounce_in_ms",
      );
    }
    function S() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_contact_usync_lid_based",
      );
    }
    function R() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_contact_syncd_support_enable",
      );
    }
    function L() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_contact_ui_vcard",
      );
    }
    function E() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_global_search_enabled",
      );
    }
    function k() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_exposed_logging_enabled",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("username_key_upsell_mode");
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_characters",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "username_key_upsell_max_numbers",
      );
    }
    function x() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "username_engagement_network_impact_logging",
      );
    }
    function $() {
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
      (l.pushnameValidationForUsernamesEnabled = h),
      (l.phoneNumberSharingFlowEnabled = y),
      (l.lidGroupMigrationNonMemberIQEnabled = C),
      (l.usernameGroupMutationEnabled = b),
      (l.usernameEligibilityDebounceMs = v),
      (l.usernameContactUsyncLidBased = S),
      (l.usernameContactSyncdEnabled = R),
      (l.usernameContactUiVcardEnabled = L),
      (l.usernameGlobalSearchEnabled = E),
      (l.usernameExposedLoggingEnabled = k),
      (l.usernameKeyUpsellMode = I),
      (l.usernameKeyUpsellMaxCharacters = T),
      (l.usernameKeyUpsellMaxNumbers = D),
      (l.usernameEngagementNetworkImpactLoggingEnabled = x),
      (l.usernameAdoptionAndEngagementMonitoringEnabled = $));
  },
  98,
);
