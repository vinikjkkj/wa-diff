__d(
  "MAIBAGovernedActionDecisionChannel",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = new Map(),
      d = new Set();
    function m(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function p(e, t) {
      return e + ":" + t;
    }
    function _(e, t, n, r) {
      var o = u.get(e);
      (o == null && ((o = new Map()), u.set(e, o)),
        o.set(p(t, n), r),
        d.forEach(function (e) {
          return e();
        }));
    }
    function f(e, t, n, r) {
      var o = s(m, function () {
        var r;
        return e == null || t == null || n == null
          ? null
          : (r = u.get(e)) == null
            ? void 0
            : r.get(p(t, n));
      });
      return o != null ? o : r;
    }
    function g(e, t, n, r) {
      var o = c.get(e);
      o == null && ((o = new Map()), c.set(e, o));
      var a = p(t, n),
        i = o.get(a);
      ((i == null ? void 0 : i.title) === r.title &&
        (i == null ? void 0 : i.text) === r.text) ||
        (o.set(a, r),
        d.forEach(function (e) {
          return e();
        }));
    }
    function h(e, t, n) {
      return s(m, function () {
        var r;
        return e == null || t == null || n == null
          ? null
          : (r = c.get(e)) == null
            ? void 0
            : r.get(p(t, n));
      });
    }
    ((l.publishMAIBAGovernedActionStatus = _),
      (l.useMAIBAGovernedActionStatus = f),
      (l.publishMAIBAGovernedActionConfirmation = g),
      (l.useMAIBAGovernedActionConfirmation = h));
  },
  98,
);
