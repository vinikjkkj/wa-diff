__d(
  "WAWebSettingGatingUtils",
  ["WAWebMobilePlatforms", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function s() {
      return r("gkx")("27551");
    }
    ((l.isMeTabEnabled = e), (l.isAppearanceSettingsEnabled = s));
  },
  98,
);
