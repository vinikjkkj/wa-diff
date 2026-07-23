__d(
  "CometHistoryManagerStack",
  ["cr:20394"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, r) {
      var o = [];
      o.push({ params: e, routeStep: 0 });
      var a = function (t) {
          return { entry: o[t], index: t };
        },
        i = function () {
          return a(d());
        },
        l = function () {
          return a(o.length - 1);
        },
        s = function () {
          var e, t;
          return (e = (t = l().entry) == null ? void 0 : t.routeStep) != null
            ? e
            : 0;
        },
        u = function () {
          return a(o.length - l().entry.routeStep - 1);
        };
      function c(e, t, n) {
        (n === void 0 && (n = !1),
          o.splice(e),
          o.push({ params: t, routeStep: n ? s() + 1 : 0 }));
      }
      function d() {
        for (var e = t(), n = o.length; --n >= 0; )
          if (r(o[n].params[0], e)) return n;
        return (c(o.length, [e, null, null]), o.length - 1);
      }
      return (
        n("cr:20394") == null || n("cr:20394").registerHistoryStack(o),
        {
          getCurrentEntry: i,
          getEntry: a,
          getLastStepZeroEntry: u,
          getTopEntry: l,
          pushAtIndex: c,
        }
      );
    }
    l.createStack = e;
  },
  98,
);
