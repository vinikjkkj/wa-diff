__d(
  "PerformanceSummaryWidgetAutoLoggingUtils",
  ["AdsALSurfacePerformanceSummaryPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.feature,
        n = e.logKey;
      return n == null
        ? null
        : {
            feature:
              t != null ? t : r("AdsALSurfacePerformanceSummaryPlugin").feature,
            logKey: n,
          };
    }
    l.getPerformanceSummaryWidgetSurface = e;
  },
  98,
);
