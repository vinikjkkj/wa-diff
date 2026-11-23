__d(
  "MAIBAA2UIScrollLockStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useSyncExternalStore,
      d = new Map(),
      m = new Set();
    function p(e, t) {
      if (!(e === "" || d.get(e) === t)) {
        d.set(e, t);
        for (var n of m) n();
      }
    }
    function _(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function f(e) {
      var t = u(
        function () {
          return d.get(e) === !0;
        },
        [e],
      );
      return c(_, t, t);
    }
    ((l.recordScrollLockRequest = p), (l.useScrollLockRequested = f));
  },
  98,
);
