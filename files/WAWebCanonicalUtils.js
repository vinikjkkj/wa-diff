__d(
  "WAWebCanonicalUtils",
  ["CurrentUser", "Promise", "WAResolvable"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1,
      u = null,
      c = new (o("WAResolvable").Resolvable)(),
      d = 0,
      m = null;
    function p(e, t) {
      (t === void 0 && (t = null),
        (s = e),
        (u = e ? t : null),
        e && (d++, c.resolve()));
    }
    function _() {
      return s && !C();
    }
    function f() {
      return u;
    }
    function g() {
      return (r("CurrentUser").isLoggedIn() || s) && !C();
    }
    function h() {
      return d;
    }
    function y(e) {
      return e !== d ? !1 : ((m = e), !0);
    }
    function C() {
      return m === d;
    }
    function b() {
      return g()
        ? (e || (e = n("Promise"))).resolve()
        : (c.resolveWasCalled() && (c = new (o("WAResolvable").Resolvable)()),
          c.promise);
    }
    var v = !1;
    function S() {
      return v;
    }
    function R(e) {
      v = e;
    }
    var L = !1;
    function E() {
      return L;
    }
    function k(e) {
      L = e;
    }
    ((l.setCanonicalTokenPresent = p),
      (l.isCanonicalTokenPresent = _),
      (l.getCanonicalTokenUserId = f),
      (l.isCanonicalPresent = g),
      (l.getCanonicalIssuance = h),
      (l.markCanonicalRejected = y),
      (l.waitForCanonicalPresent = b),
      (l.isCanonicalReloadPending = S),
      (l.setCanonicalReloadPending = R),
      (l.isDebugForceTokenRefresh = E),
      (l.setDebugForceTokenRefresh = k));
  },
  98,
);
