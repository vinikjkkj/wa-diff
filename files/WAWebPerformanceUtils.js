__d(
  "WAWebPerformanceUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = self.performance.now() - e;
      return Math.round(t) + "ms";
    }
    i.getElapsedTimeMs = e;
  },
  66,
);
