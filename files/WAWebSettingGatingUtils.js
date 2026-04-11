__d(
  "WAWebSettingGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_me_tab")
      );
    }
    l.isMeTabEnabled = e;
  },
  98,
);
