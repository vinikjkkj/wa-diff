__d(
  "MAIBABusinessSetupCompletion",
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
      if (e !== "") {
        var n = u.get(e);
        (n != null && n.businessId === t) || (u.set(e, { businessId: t }), d());
      }
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
    ((l.markBusinessSetupCompleted = p),
      (l.getBusinessSetupCompletion = _),
      (l.clearBusinessSetupCompleted = f),
      (l.useBusinessSetupCompletion = g));
  },
  98,
);
