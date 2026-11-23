__d(
  "MAIBASurveyEligibilityStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Set(),
      c = new Set();
    function d() {
      for (var e of c) e();
    }
    function m(e) {
      u.has(e) || (u.add(e), d());
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
      return e != null && u.has(e);
    }
    function g(e) {
      return s(_, function () {
        return f(e);
      });
    }
    ((l.applySurveyEligibility = m),
      (l.clearSurveyEligibility = p),
      (l.useSurveyEligibility = g));
  },
  98,
);
