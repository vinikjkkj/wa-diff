__d(
  "WAWebPdfViewerAppConfig",
  [
    "WAWebConnModel",
    "WAWebRobotoVariableFontLoadable",
    "WAWebStylesEnv",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebUserPrefsGeneral").getSystemThemeMode(),
        t = o("WAWebUserPrefsGeneral").getTheme(),
        n = o("WAWebConnModel").Conn.isSMB;
      return e
        ? n
          ? "smbSystem"
          : "system"
        : t === "dark"
          ? n
            ? "smbDark"
            : "dark"
          : n
            ? "smbLight"
            : "light";
    }
    function s() {
      var t;
      return {
        theme: e(),
        hasFontFix: (t = o("WAWebStylesEnv")).hasFontFix,
        hasSafariFix: t.hasSafariFix,
        isRobotoFontEnabled: o(
          "WAWebRobotoVariableFontLoadable",
        ).isRobotoFontEnabled(),
        isColorRefreshEnabled: !0,
        isSmb: o("WAWebConnModel").Conn.isSMB,
        isOSMac: t.isOSMac,
        isOSWindows: t.isOSWin,
        isKeyboardUser: !1,
        showSavePreferenceCheckbox: o(
          "WAWebTPPdfViewerGatingUtils",
        ).isWebTPSharerSavePreferenceEnabled(),
      };
    }
    l.getWebTPAppConfig = s;
  },
  98,
);
