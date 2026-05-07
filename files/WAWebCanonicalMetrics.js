__d(
  "WAWebCanonicalMetrics",
  ["WAWebCanonicalUtils", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      (r("WAWebODS").incr("web.app.canonical.page_load"),
        o("WAWebCanonicalUtils").isCurrentUserLoggedIn() &&
          r("WAWebODS").incr("web.app.canonical.page_load.authed"));
    }
    l.logCanonicalPageLoadMetrics = e;
  },
  98,
);
