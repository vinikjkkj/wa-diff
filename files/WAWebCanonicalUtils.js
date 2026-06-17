__d(
  "WAWebCanonicalUtils",
  ["CurrentUser", "Promise", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1,
      u = new Set();
    function c(e) {
      if (((s = e), e)) {
        for (var t of u) t();
        u.clear();
      }
    }
    function d() {
      return s;
    }
    function m() {
      return r("CurrentUser").isLoggedIn() || s;
    }
    function p(t) {
      if (m()) return (e || (e = n("Promise"))).resolve(!0);
      var o = null,
        a = r("WAWebNoop"),
        i = new (e || (e = n("Promise")))(function (e) {
          ((a = function () {
            return e(!0);
          }),
            u.add(a));
        }).then(function () {
          return (o != null && self.clearTimeout(o), !0);
        }),
        l = new e(function (e) {
          o = self.setTimeout(function () {
            (u.delete(a), e(!1));
          }, t);
        });
      return e.race([i, l]);
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
