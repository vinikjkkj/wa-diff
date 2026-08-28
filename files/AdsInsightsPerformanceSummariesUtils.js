__d(
  "AdsInsightsPerformanceSummariesUtils",
  ["AdsInsightsPerformanceSummaryConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = /^(\w+)\((\w+)\)$/.exec(t);
        return e ? { reducer: e[1], field: e[2] } : { field: t };
      },
      s = {},
      u = function (t) {
        return (
          s[t] ||
            (s[t] = o("AdsInsightsPerformanceSummaryConfig").buildConfig(t)),
          s[t]
        );
      };
    ((l.getDescriptor = e),
      (l.getConfig = u),
      (l.average = o("AdsInsightsPerformanceSummaryConfig").average));
  },
  98,
);
