__d(
  "CometThemeInfraUtils",
  ["gkx", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("gkx")("14925") ||
        r("gkx")("14926") ||
        r("gkx")("14927") ||
        r("gkx")("14887")
      );
    }
    function s() {
      var t = { auto: null, dark: null, light: null };
      return (
        e() &&
          r("ifRequired")("Xmds3CTheme", function (e) {
            ((t.auto = e.Xmds3CThemeWebAuto),
              (t.dark = e.Xmds3CThemeWebDark),
              (t.light = e.Xmds3CThemeWebLight));
          }),
        t
      );
    }
    ((l.enableCometThemeInfraThemeInXMDSComponents = e),
      (l.getCometThemeInfraThemesForApp = s));
  },
  98,
);
