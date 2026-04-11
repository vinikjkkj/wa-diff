__d(
  "XMDSThemeConfig",
  ["CDSStyleXDarkTheme", "CDSStyleXDefaultTheme", "DspCDSWebLegacyThemeUsage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("CDSStyleXDefaultTheme"),
        r("DspCDSWebLegacyThemeUsage").light,
      ),
      s = babelHelpers.extends(
        {},
        r("CDSStyleXDarkTheme"),
        r("DspCDSWebLegacyThemeUsage").dark,
      ),
      u = { dark: s, light: e, type: "VARIABLES" };
    l.default = u;
  },
  98,
);
