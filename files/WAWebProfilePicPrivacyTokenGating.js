__d(
  "WAWebProfilePicPrivacyTokenGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "profile_scraping_privacy_token_in_photo_iq",
      );
    }
    l.isProfilePicIQPrivacyTokenEnabled = e;
  },
  98,
);
