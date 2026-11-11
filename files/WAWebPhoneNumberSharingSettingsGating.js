__d(
  "WAWebPhoneNumberSharingSettingsGating",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isConsumerPrimary() &&
        o("WAWebABProps").getABPropConfigValue("username_pn_sharing_enabled") &&
        o("WAWebABProps").getABPropConfigValue(
          "username_pn_sharing_companion_enabled",
        )
      );
    }
    l.phoneNumberSharingSettingsEnabled = e;
  },
  98,
);
