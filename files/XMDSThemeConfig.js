__d(
  "XMDSThemeConfig",
  [
    "CDSStyleXDarkTheme_DO_NOT_ADD_MORE_VALUES",
    "CDSStyleXDefaultTheme_DO_NOT_ADD_MORE_VALUES",
    "DspCDSWebLegacyThemeUsage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("CDSStyleXDefaultTheme_DO_NOT_ADD_MORE_VALUES"),
        r("DspCDSWebLegacyThemeUsage").light,
      ),
      s = babelHelpers.extends(
        {},
        r("CDSStyleXDarkTheme_DO_NOT_ADD_MORE_VALUES"),
        r("DspCDSWebLegacyThemeUsage").dark,
      ),
      u = { dark: s, light: e, type: "VARIABLES" };
    l.default = u;
  },
  98,
);
