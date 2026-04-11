__d(
  "QPLAddCometRequestHeaders",
  ["QuickPerformanceLogger", "cr:6895"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      n("cr:6895").registerHeaderProvider(function () {
        var t = {},
          n = (e || (e = r("QuickPerformanceLogger"))).getActiveMarkerIds({
            type: 2,
          });
        n.length > 0 && (t["X-FB-QPL-Active-Flows"] = n.sort().join(","));
        var o = e.getActiveE2ETraceIdsAsArray();
        return (
          o.length > 0 &&
            (t["X-FB-QPL-Active-E2E-Trace-IDs"] = o.sort().join(",")),
          t
        );
      });
    }
    l.default = s;
  },
  98,
);
