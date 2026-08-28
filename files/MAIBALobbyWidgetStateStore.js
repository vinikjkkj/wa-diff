__d(
  "MAIBALobbyWidgetStateStore",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = new Set();
    function d() {
      for (var e of c) e();
    }
    function m(e, t) {
      var n = u.get(e),
        r = babelHelpers.extends({}, t);
      (n != null && n.state === r.state) || (u.set(e, r), d());
    }
    function p(e) {
      u.delete(e) && d();
    }
    function _(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function f(e) {
      var t;
      return e == null ? null : (t = u.get(e)) != null ? t : null;
    }
    function g(e) {
      var t;
      return (t = u.get(e)) != null ? t : null;
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              return f(e);
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        s(_, n)
      );
    }
    ((l.applyLobbyWidgetState = m),
      (l.clearLobbyWidgetState = p),
      (l.getLobbyWidgetState = g),
      (l.useSubscriptionLobbyState = h));
  },
  98,
);
