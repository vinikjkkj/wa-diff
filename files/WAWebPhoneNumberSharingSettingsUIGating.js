__d(
  "WAWebPhoneNumberSharingSettingsUIGating",
  [
    "WAWebABProps",
    "WAWebPhoneNumberSharingSettingsGating",
    "WAWebUserPrefsUsername",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebUserPrefsUsername").getUsernameState() === "ACTIVE" &&
        o(
          "WAWebPhoneNumberSharingSettingsGating",
        ).phoneNumberSharingSettingsEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "username_pn_sharing_ui_settings_enabled",
        ) === !0
      );
    }
    l.phoneNumberSharingSettingsUIEnabled = e;
  },
  98,
);
