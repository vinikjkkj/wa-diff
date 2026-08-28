__d(
  "getZenonNavigationType",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (
        typeof (e || (e = r("performance"))).getEntriesByType != "function" ||
        typeof PerformanceNavigationTiming != "function"
      )
        return "unknown";
      var t = (e || (e = r("performance"))).getEntriesByType("navigation")[0];
      return t instanceof PerformanceNavigationTiming ? t.type : "unknown";
    }
    l.default = s;
  },
  98,
);
