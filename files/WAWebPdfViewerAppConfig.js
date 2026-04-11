__d(
  "WAWebPdfViewerAppConfig",
  [
    "WAWebABProps",
    "WAWebConnModel",
    "WAWebEnvironment",
    "WAWebStylesEnv",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebUA",
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
      var e = o("WAWebABProps").getABPropConfigValue("wds_web_roboto");
      return e === 3 ||
        (e === 2 && o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC)
        ? !0
        : !!(
            e === 1 &&
            (r("WAWebEnvironment").isWindows ||
              o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.WINDOWS)
          );
    }
    function u() {
      var t;
      return {
        theme: e(),
        hasFontFix: (t = o("WAWebStylesEnv")).hasFontFix,
        hasSafariFix: t.hasSafariFix,
        isRobotoFontEnabled: s(),
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
    l.getWebTPAppConfig = u;
  },
  98,
);
