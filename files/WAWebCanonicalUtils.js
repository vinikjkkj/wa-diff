__d(
  "WAWebCanonicalUtils",
  ["$InternalEnum", "CurrentUser"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["IDLE", "IN_PROGRESS", "PRESENT"]),
      s = e.IDLE;
    function u(e) {
      s = e;
    }
    function c() {
      return s;
    }
    function d() {
      return r("CurrentUser").isLoggedIn() || s === e.PRESENT;
    }
    var m = null;
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
    ((l.TokenCreationState = e),
      (l.setTokenCreationState = u),
      (l.getTokenCreationState = c),
      (l.isCurrentUserLoggedIn = d),
      (l.getCanonicalReloadPending = p),
      (l.setCanonicalReloadPending = _),
      (l.isDebugForceTokenRefresh = g),
      (l.setDebugForceTokenRefresh = h));
  },
  98,
);
