__d(
  "WAWebPrivacyGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "data_privacy_phase_2_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "data_privacy_phase_2_non_e2ee_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_settings_about_lid_migration_enable",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_settings_group_add_lid_migration_enable",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_settings_profile_lid_migration_enable",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_settings_presence_lid_migration_enable",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "pnh_thread_promotion_to_general_lid",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "profile_scraping_privacy_token_in_about_usync",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "profile_scraping_privacy_token_in_about_iq",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "paa_support_for_disabled_epehemerality",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "mex_get_privacy_contact_list_enabled",
      );
    }
    ((l.isDataPrivacyPhase2Enabled = e),
      (l.isDataPrivacyPhase2NonE2eeEnabled = s),
      (l.isPrivacyListLidMigrationForStatusEnabled = u),
      (l.isPrivacyListLidMigrationForGroupAddEnabled = c),
      (l.isPrivacyListLidMigrationForProfilePictureEnabled = d),
      (l.isPrivacyListLidMigrationForLastSeenEnabled = m),
      (l.isPhoneNumberHidingThreadPromotionToGeneralLidEnabled = p),
      (l.isProfileScrappingProtectionInUsyncEnabled = _),
      (l.isProfileScrappingProtectionInMexFetchEnabled = f),
      (l.isPAASupportForDisabledEphemeralityEnabled = g),
      (l.isMexPrivacyContactListEnabled = h));
  },
  98,
);
