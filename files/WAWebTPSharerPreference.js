__d(
  "WAWebTPSharerPreference",
  ["WAWebTPPdfViewerGatingUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebTPPdfViewerGatingUtils").isWebTPSharerSavePreferenceEnabled() &&
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.WebTPSharerSkipConfirmation,
        ) === !0
      );
    }
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WebTPSharerSkipConfirmation,
        e,
      );
    }
    ((l.getSharerSkipPreference = e), (l.setSharerSkipPreference = s));
  },
  98,
);
