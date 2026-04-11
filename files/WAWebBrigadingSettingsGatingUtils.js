__d(
  "WAWebBrigadingSettingsGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "brigading_privacy_setting_enabled",
      );
    }
    l.canEnableAntiBrigading = e;
  },
  98,
);
