__d(
  "WAWebPdfViewerAppConfig",
  [
    "WAWebABProps",
    "WAWebConnModel",
    "WAWebEnvironment",
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
      return {
        theme: e(),
        hasSafariFix: o("WAWebStylesEnv").hasSafariFix,
        isColorRefreshEnabled: !0,
        isSmb: o("WAWebConnModel").Conn.isSMB,
        isWindowsHybrid: r("WAWebEnvironment").isWindows,
        isOSMac: o("WAWebStylesEnv").isOSMac,
        isOSWindows: o("WAWebStylesEnv").isOSWin,
        isKeyboardUser: !1,
        showSavePreferenceCheckbox: o(
          "WAWebTPPdfViewerGatingUtils",
        ).isWebTPSharerSavePreferenceEnabled(),
        useUpdatedPdfSharerConsentCopy: o("WAWebABProps").getABPropConfigValue(
          "wa_webtp_pdf_sharer_consent_copy_v2",
        ),
      };
    }
    l.getWebTPAppConfig = s;
  },
  98,
);
