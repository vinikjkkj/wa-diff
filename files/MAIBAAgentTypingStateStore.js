__d(
  "MAIBAAgentTypingStateStore",
  ["react"],
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
      u.get(e) !== t && (u.set(e, t), d());
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
      return (
        s(_, function () {
          return f(e);
        }) === "TYPING_ON"
      );
    }
    ((l.applyAgentTypingState = m),
      (l.clearAgentTypingState = p),
      (l.useIsAgentTyping = g));
  },
  98,
);
