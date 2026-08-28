__d(
  "ZenonPerfUsageStatsTracker",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = r("performance"))).memory
        ? {
            heapSizeLimit: Math.round(
              (e || (e = r("performance"))).memory.jsHeapSizeLimit /
                Math.pow(10, 6),
            ),
            heapTotalSize: Math.round(
              e.memory.totalJSHeapSize / Math.pow(10, 6),
            ),
            heapUsedSize: Math.round(e.memory.usedJSHeapSize / Math.pow(10, 6)),
          }
        : null;
    }
    l.getHeapMemoryStats = s;
  },
  98,
);
