__d(
  "WAWebUserPrefsUiRefresh",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxAcknowledged,
        e,
      );
    }
    function s() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxAcknowledged,
        ) === !0
      );
    }
    function u() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxViewsCount,
        0,
      );
    }
    ((l.setUiRefreshNuxAcked = e),
      (l.getUiRefreshNuxAcked = s),
      (l.resetNuxViewCount = u));
  },
  98,
);
