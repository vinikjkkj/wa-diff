__d(
  "VultureJSServerHits",
  ["ServerJsRuntimeEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = new Set(),
      u = new Set();
    function c(t) {
      return o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()
        ? (!s.has(t) && s.size < e && (s.add(t), u.add(t)), !0)
        : !1;
    }
    function d() {
      if (u.size === 0) return null;
      var e = Array.from(u);
      return ((u = new Set()), e);
    }
    function m() {
      var e = d();
      return e == null ? null : { vulture_hits: e };
    }
    ((l.collectServerHit = c),
      (l.drainServerHits = d),
      (l.drainServerHitsSideChannel = m));
  },
  98,
);
