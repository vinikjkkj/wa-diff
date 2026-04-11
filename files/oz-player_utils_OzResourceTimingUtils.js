__d(
  "oz-player/utils/OzResourceTimingUtils",
  ["oz-player/shims/OzPerformance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = r("oz-player/shims/OzPerformance").getEntriesByName(
        t,
        "resource",
      );
      return e.reduce(function (e, t) {
        return e == null ? t : t.responseEnd < e.responseEnd ? e : t;
      }, null);
    };
    l.getLatestResourceTimingEntry = e;
  },
  98,
);
