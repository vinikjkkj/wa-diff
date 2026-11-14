__d(
  "WAWebCallScreeningSettingGating",
  ["WAWebABProps", "WAWebPrivacySettings"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.callAdd,
        n = o("WAWebABProps").getABPropConfigValue(
          "call_screening_setting_data_version",
        );
      return (
        n >= 2 || (n === 1 && t === o("WAWebPrivacySettings").CALL_ADD.screen)
      );
    }
    function s(e) {
      var t = e.callAdd;
      return (
        t === o("WAWebPrivacySettings").CALL_ADD.screen &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_setting_data_version",
        ) <= 0
      );
    }
    ((l.isCallScreeningSettingEnabled = e), (l.isUnsupportedScreenValue = s));
  },
  98,
);
