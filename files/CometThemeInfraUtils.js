__d(
  "CometThemeInfraUtils",
  ["CometThemeInfraFallbackConfig", "gkx", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("gkx")("14925") ||
        r("gkx")("14926") ||
        r("gkx")("14927") ||
        r("gkx")("17930")
      );
    }
    function s() {
      var t = { auto: null, dark: null, light: null };
      if (!e()) return t;
      var n = r("CometThemeInfraFallbackConfig").fallbackThemes;
      return n.auto != null
        ? n
        : (r("ifRequired")("Xmds3CTheme", function (e) {
            ((t.auto = e.Xmds3CThemeWebAuto),
              (t.dark = e.Xmds3CThemeWebDark),
              (t.light = e.Xmds3CThemeWebLight));
          }),
          t);
    }
    ((l.enableCometThemeInfraThemeInXMDSComponents = e),
      (l.getCometThemeInfraThemesForApp = s));
  },
  98,
);
