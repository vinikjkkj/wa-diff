__d(
  "MAIBATerminalLoggingCompletionStore",
  ["FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = new Set(),
      u = new Map();
    function c(e) {
      return e == null || s.has(e);
    }
    function d(t) {
      if (!s.has(t)) {
        if ((s.add(t), s.size > e)) {
          var n = s.values().next().value;
          n != null && s.delete(n);
        }
        for (var o of (a = u.get(t)) != null ? a : []) {
          var a;
          try {
            o();
          } catch (e) {
            r("FBLogger")("axp_maiba_foundations_ux")
              .catching(e instanceof Error ? e : r("err")(String(e)))
              .warn("MAIBA terminal logging completion listener failed");
          }
        }
      }
    }
    function m(e, t) {
      var n;
      if (e == null) return function () {};
      var r = (n = u.get(e)) != null ? n : new Set();
      return (
        r.add(t),
        u.set(e, r),
        function () {
          (r.delete(t), r.size === 0 && u.delete(e));
        }
      );
    }
    ((l.isMAIBATerminalLoggingComplete = c),
      (l.markMAIBATerminalLoggingComplete = d),
      (l.subscribeToMAIBATerminalLoggingCompletion = m));
  },
  98,
);
