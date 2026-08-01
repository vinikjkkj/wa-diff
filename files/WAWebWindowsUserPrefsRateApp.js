__d(
  "WAWebWindowsUserPrefsRateApp",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsDontShowRateTheAppPromptAgain,
      );
      return e === !0;
    }
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsDontShowRateTheAppPromptAgain,
        e,
      );
    }
    function u() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsLastRateTheAppPromptTimestamp,
      );
      return typeof e == "number" ? e : 0;
    }
    function c(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").UserPrefs.WindowsLastRateTheAppPromptTimestamp,
        e,
      );
    }
    ((l.getDontShowRateAppPromptAgain = e),
      (l.setDontShowRateAppPromptAgain = s),
      (l.getLastRateAppPromptShownTime = u),
      (l.setLastRateAppPromptShownTime = c));
  },
  98,
);
