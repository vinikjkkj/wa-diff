__d(
  "WAWebCanonicalMetrics",
  ["CurrentUser", "WAWebCanonicalUtils", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      (r("WAWebODS").incr("web.app.canonical.page_load"),
        o("WAWebCanonicalUtils").isCanonicalPresent() &&
          r("WAWebODS").incr("web.app.canonical.page_load.authed"),
        r("CurrentUser").isLoggedIn() &&
          r("WAWebODS").incr("web.app.canonical.page_load.authed_full"));
    }
    l.logCanonicalPageLoadMetrics = e;
  },
  98,
);
