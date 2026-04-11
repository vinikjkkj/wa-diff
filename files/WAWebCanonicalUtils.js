__d(
  "WAWebCanonicalUtils",
  [
    "CurrentUser",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebLocalStorage",
    "WAWebODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "wa_web_canonical_credentials_stored_pending";
    function s() {
      return r("CurrentUser").isLoggedIn();
    }
    function u() {
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(e, "1");
      } catch (e) {}
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("WAWebODS").incr("web.app.canonical.page_load"),
            s() && r("WAWebODS").incr("web.app.canonical.page_load.authed"));
          try {
            (r("WAWebLocalStorage") == null
              ? void 0
              : r("WAWebLocalStorage").getItem(e)) != null &&
              (r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").removeItem(e),
              o("WAWebCanonicalEntRecoveryWam").logCredentialsStored());
          } catch (e) {}
        })),
        d.apply(this, arguments)
      );
    }
    var m = !1;
    function p() {
      return m;
    }
    function _(e) {
      m = e;
    }
    var f = !1;
    function g() {
      return f;
    }
    function h(e) {
      f = e;
    }
    ((l.isCurrentUserLoggedIn = s),
      (l.markCredentialsStoredForPostReload = u),
      (l.logPageLoadAuthStatus = c),
      (l.isCanonicalAppReloadPending = p),
      (l.setCanonicalAppReloadPending = _),
      (l.isDebugForceTokenRefresh = g),
      (l.setDebugForceTokenRefresh = h));
  },
  98,
);
