__d(
  "webBloksPerformanceUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n,
        r = (n = window) == null ? void 0 : n.performance;
      r == null || r.mark == null || r.mark(String(e), t);
    }
    i.addWebBloksPerformanceMark = e;
  },
  66,
);
