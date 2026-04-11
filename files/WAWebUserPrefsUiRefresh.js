__d(
  "WAWebUserPrefsUiRefresh",
  ["WALogger", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxAcknowledged,
        e,
      );
    }
    function u() {
      return (
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxAcknowledged,
        ) === !0
      );
    }
    function c() {
      var e = d();
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxViewsCount,
        e + 1,
      );
    }
    function d() {
      var t = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxViewsCount,
      );
      if (t == null) return 0;
      var n = parseInt(t, 10);
      return isNaN(n) || n < 0
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ui-refresh] Invalid nux view count - returning 0",
              ])),
          ),
          0)
        : n;
    }
    function m() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxViewsCount,
        0,
      );
    }
    ((l.setUiRefreshNuxAcked = s),
      (l.getUiRefreshNuxAcked = u),
      (l.incrementNuxViewCount = c),
      (l.getNuxViewCount = d),
      (l.resetNuxViewCount = m));
  },
  98,
);
