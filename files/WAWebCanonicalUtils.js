__d(
  "WAWebCanonicalUtils",
  ["CurrentUser", "WAWebODS", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("CurrentUser").isLoggedIn();
    }
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("WAWebODS").incr("web.app.canonical.page_load"),
            e() && r("WAWebODS").incr("web.app.canonical.page_load.authed"));
        })),
        u.apply(this, arguments)
      );
    }
    var c = null;
    function d() {
      return c;
    }
    function m(e) {
      c = e;
    }
    var p = !1;
    function _() {
      return p;
    }
    function f(e) {
      p = e;
    }
    ((l.isCurrentUserLoggedIn = e),
      (l.logCanonicalPageLoadMetrics = s),
      (l.getCanonicalReloadPending = d),
      (l.setCanonicalReloadPending = m),
      (l.isDebugForceTokenRefresh = _),
      (l.setDebugForceTokenRefresh = f));
  },
  98,
);
