__d(
  "WAWebCanonicalUtils",
  [
    "$InternalEnum",
    "CurrentUser",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebLocalStorage",
    "WAWebODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "wa_web_canonical_reload_reason",
      s = n("$InternalEnum")({ REGISTRATION: "reg", RECOVERY: "recovery" });
    function u() {
      return r("CurrentUser").isLoggedIn();
    }
    function c(t) {
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").setItem(e, t);
      } catch (e) {}
    }
    function d() {
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(e);
        if (t === s.REGISTRATION) return s.REGISTRATION;
        if (t === s.RECOVERY) return s.RECOVERY;
      } catch (e) {}
      return null;
    }
    function m() {
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(e);
      } catch (e) {}
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (r("WAWebODS").incr("web.app.canonical.page_load"),
            u() && r("WAWebODS").incr("web.app.canonical.page_load.authed"),
            d() != null &&
              (o("WAWebCanonicalEntRecoveryWam").logCredentialsStored(), m()));
        })),
        _.apply(this, arguments)
      );
    }
    var f = !1;
    function g() {
      return f;
    }
    function h(e) {
      f = e;
    }
    var y = !1;
    function C() {
      return y;
    }
    function b(e) {
      y = e;
    }
    ((l.CanonicalReloadReason = s),
      (l.isCurrentUserLoggedIn = u),
      (l.markCredentialsStoredForPostReload = c),
      (l.getCanonicalReloadReason = d),
      (l.logCanonicalPageLoadMetrics = p),
      (l.isCanonicalAppReloadPending = g),
      (l.setCanonicalAppReloadPending = h),
      (l.isDebugForceTokenRefresh = C),
      (l.setDebugForceTokenRefresh = b));
  },
  98,
);
