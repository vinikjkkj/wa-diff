__d(
  "WAWebChatlistAppearanceSettingsGating",
  ["WAWebSettingGatingUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("gkx")("22829") &&
        o("WAWebSettingGatingUtils").isAppearanceSettingsEnabled()
      );
    }
    l.isChatlistAppearanceSettingsEnabled = e;
  },
  98,
);
