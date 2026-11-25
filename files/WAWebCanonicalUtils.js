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
      return s && !v();
    }
    function f() {
      return u;
    }
    function g() {
      return (r("CurrentUser").isLoggedIn() || s) && !v();
    }
    function h() {
      return d;
    }
    function y() {
      return d > 0;
    }
    function C() {
      return v();
    }
    function b(e) {
      return e !== d ? !1 : ((m = e), !0);
    }
    function v() {
      return m === d;
    }
    function S() {
      return g()
        ? (e || (e = n("Promise"))).resolve()
        : (c.resolveWasCalled() && (c = new (o("WAResolvable").Resolvable)()),
          c.promise);
    }
    var R = !1;
    function L() {
      return R;
    }
    function E(e) {
      R = e;
    }
    var k = !1;
    function I() {
      return k;
    }
    function T(e) {
      k = e;
    }
    ((l.setCanonicalTokenPresent = p),
      (l.isCanonicalTokenPresent = _),
      (l.getCanonicalTokenUserId = f),
      (l.isCanonicalPresent = g),
      (l.getCanonicalIssuance = h),
      (l.hasCanonicalBeenIssued = y),
      (l.isCanonicalRejected = C),
      (l.markCanonicalRejected = b),
      (l.waitForCanonicalPresent = S),
      (l.isCanonicalReloadPending = L),
      (l.setCanonicalReloadPending = E),
      (l.isDebugForceTokenRefresh = I),
      (l.setDebugForceTokenRefresh = T));
  },
  98,
);
