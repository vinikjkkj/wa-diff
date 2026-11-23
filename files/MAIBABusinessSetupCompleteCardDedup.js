__d(
  "MAIBABusinessSetupCompleteCardDedup",
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
    function m(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function p(e, t) {
      e === "" || t === "" || u.has(e) || (u.set(e, t), d());
    }
    function _(e) {
      var t;
      return e == null || e === "" ? null : (t = u.get(e)) != null ? t : null;
    }
    function f(e) {
      e == null || e === "" || (u.delete(e) && d());
    }
    function g(e) {
      return s(m, function () {
        return _(e);
      });
    }
    ((l.claimBusinessSetupCompleteCard = p),
      (l.getBusinessSetupCompleteCardWinner = _),
      (l.clearBusinessSetupCompleteCardWinner = f),
      (l.useBusinessSetupCompleteCardWinner = g));
  },
  98,
);
