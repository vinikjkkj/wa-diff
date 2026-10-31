__d(
  "WAWebLongTaskAccumulator",
  ["WAWebFeatureDetectionLongTaskSupport"],
  function (t, n, r, o, a, i, l) {
    var e = { count: 0, totalMs: 0 },
      s = null;
    function u() {
      s != null ||
        !o("WAWebFeatureDetectionLongTaskSupport").isLongTaskSupported() ||
        ((s = new self.PerformanceObserver(function (t) {
          t.getEntries().forEach(function (t) {
            (e.count++, (e.totalMs += t.duration));
          });
        })),
        s.observe({ type: "longtask", buffered: !1 }));
    }
    function c() {
      return babelHelpers.extends({}, e);
    }
    function d(t) {
      return s == null
        ? null
        : {
            int: {
              long_task_count: e.count - t.count,
              long_task_ms: Math.round(e.totalMs - t.totalMs),
            },
          };
    }
    ((l.startLongTaskAccumulator = u),
      (l.getLongTaskTotals = c),
      (l.getLongTaskAnnotationsSince = d));
  },
  98,
);
