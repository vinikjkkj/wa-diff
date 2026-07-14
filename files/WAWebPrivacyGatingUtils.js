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
        "profile_scraping_privacy_token_in_about_iq",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "paa_support_for_disabled_epehemerality",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "mex_get_privacy_contact_list_enabled",
      );
    }
    ((l.isDataPrivacyPhase2Enabled = e),
      (l.isProfileScrappingProtectionInMexFetchEnabled = s),
      (l.isPAASupportForDisabledEphemeralityEnabled = u),
      (l.isMexPrivacyContactListEnabled = c));
  },
  98,
);
