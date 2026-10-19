__d(
  "WAWebCanonicalUtils",
  ["CurrentUser", "Promise", "WAResolvable"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1,
      u = new (o("WAResolvable").Resolvable)();
    function c(e) {
      ((s = e), e && u.resolve());
    }
    function d() {
      return s;
    }
    function m() {
      return r("CurrentUser").isLoggedIn() || s;
    }
    function p() {
      return m()
        ? (e || (e = n("Promise"))).resolve()
        : (u.resolveWasCalled() && (u = new (o("WAResolvable").Resolvable)()),
          u.promise);
    }
    var _ = !1;
    function f() {
      return _;
    }
    function g(e) {
      _ = e;
    }
    var h = !1;
    function y() {
      return h;
    }
    function C(e) {
      h = e;
    }
    ((l.setCanonicalTokenPresent = c),
      (l.isCanonicalTokenPresent = d),
      (l.isCanonicalPresent = m),
      (l.waitForCanonicalPresent = p),
      (l.isCanonicalReloadPending = f),
      (l.setCanonicalReloadPending = g),
      (l.isDebugForceTokenRefresh = y),
      (l.setDebugForceTokenRefresh = C));
  },
  98,
);
