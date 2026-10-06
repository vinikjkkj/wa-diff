__d(
  "WAWebLongTaskAccumulator",
  [],
  function (t, n, r, o, a, i) {
    var e = { count: 0, totalMs: 0 },
      l = null;
    function s() {
      l != null ||
        !d() ||
        ((l = new self.PerformanceObserver(function (t) {
          t.getEntries().forEach(function (t) {
            (e.count++, (e.totalMs += t.duration));
          });
        })),
        l.observe({ type: "longtask", buffered: !1 }));
    }
    function u() {
      return babelHelpers.extends({}, e);
    }
    function c(t) {
      return l == null
        ? null
        : {
            int: {
              long_task_count: e.count - t.count,
              long_task_ms: Math.round(e.totalMs - t.totalMs),
            },
          };
    }
    function d() {
      var e;
      return (
        typeof ((e = self.PerformanceObserver) == null ||
        (e = e.supportedEntryTypes) == null
          ? void 0
          : e.includes) == "function" &&
        self.PerformanceObserver.supportedEntryTypes.includes("longtask")
      );
    }
    ((i.startLongTaskAccumulator = s),
      (i.getLongTaskTotals = u),
      (i.getLongTaskAnnotationsSince = c));
  },
  66,
);
