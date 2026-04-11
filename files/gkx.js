__d(
  "gkx",
  ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {},
      c = {};
    function d(t) {
      var n = u[t];
      return (
        n != null || s(0, 11797, t),
        c[t] ||
          ((c[t] = !0),
          n.hash != null &&
            ((e || (e = r("ExecutionEnvironment"))).canUseDOM ||
              (e || (e = r("ExecutionEnvironment"))).isInWorker) &&
            o("BanzaiLazyQueue").queuePost("gk2_exposure", {
              identifier: t,
              hash: n.hash,
            })),
        n.result
      );
    }
    ((d.add = function (e, t) {
      for (var n in e)
        (t && t.entry++, n in u ? t && t.dup_entry++ : (u[n] = e[n]));
    }),
      (d.addLoggedInternal = function (e) {
        d.add(e);
        for (var t in e) c[t] = !0;
      }));
    var m = r("emptyFunction");
    ((d.getGKs = function () {
      return null;
    }),
      (d.getLogged = function () {
        return Object.keys(c).map(function (e) {
          return { identifier: e, hash: u[e].hash };
        });
      }),
      (d.setPass = m),
      (d.setFail = m),
      (d.clear = m));
    var p = d;
    l.default = p;
  },
  98,
);
