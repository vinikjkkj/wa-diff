__d(
  "WAWebCallScreeningSettingGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_setting_data_version",
        ) >= 1
      );
    }
    l.isCallScreeningSettingEnabled = e;
  },
  98,
);
