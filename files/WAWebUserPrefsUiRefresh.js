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
    function d() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.WebUiRefreshNuxViewsCount,
        0,
      );
    }
    ((l.setUiRefreshNuxAcked = s),
      (l.getUiRefreshNuxAcked = u),
      (l.getNuxViewCount = c),
      (l.resetNuxViewCount = d));
  },
  98,
);
