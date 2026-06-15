__d(
  "WAWebCanonicalUtils",
  ["CurrentUser"],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s(t) {
      e = t;
    }
    function u() {
      return e;
    }
    function c() {
      return r("CurrentUser").isLoggedIn() || e;
    }
    var d = null;
    function m() {
      return d;
    }
    function p(e) {
      d = e;
    }
    var _ = !1;
    function f() {
      return _;
    }
    function g(e) {
      _ = e;
    }
    ((l.setCanonicalTokenPresent = s),
      (l.isCanonicalTokenPresent = u),
      (l.isCanonicalPresent = c),
      (l.getCanonicalReloadPending = m),
      (l.setCanonicalReloadPending = p),
      (l.isDebugForceTokenRefresh = f),
      (l.setDebugForceTokenRefresh = g));
  },
  98,
);
