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
    ((l.isDataPrivacyPhase2Enabled = e),
      (l.isProfileScrappingProtectionInMexFetchEnabled = s));
  },
  98,
);
