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
        "pnh_thread_promotion_to_general_lid",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "profile_scraping_privacy_token_in_about_usync",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "profile_scraping_privacy_token_in_about_iq",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "paa_support_for_disabled_epehemerality",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "mex_get_privacy_contact_list_enabled",
      );
    }
    ((l.isDataPrivacyPhase2Enabled = e),
      (l.isPhoneNumberHidingThreadPromotionToGeneralLidEnabled = s),
      (l.isProfileScrappingProtectionInUsyncEnabled = u),
      (l.isProfileScrappingProtectionInMexFetchEnabled = c),
      (l.isPAASupportForDisabledEphemeralityEnabled = d),
      (l.isMexPrivacyContactListEnabled = m));
  },
  98,
);
