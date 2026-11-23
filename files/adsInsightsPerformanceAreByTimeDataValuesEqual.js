__d(
  "adsInsightsPerformanceAreByTimeDataValuesEqual",
  ["shallowEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null || t == null) return e == t;
      var n = Object.keys(e);
      return r("shallowEqual")(n, Object.keys(t))
        ? n.every(function (n) {
            if ((e[n] == null || t[n] == null) && e != t) return !1;
            var r = e[n],
              o = t[n];
            return r.every(function (e, t) {
              var n = o[t];
              return e.value === n.value && e.interval.equals(n.interval);
            });
          })
        : !1;
    }
    l.default = e;
  },
  98,
);
