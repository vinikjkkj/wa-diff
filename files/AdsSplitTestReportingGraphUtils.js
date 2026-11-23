__d(
  "AdsSplitTestReportingGraphUtils",
  ["AdsInsightsFields", "AdsSplitTestReportingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4;
    function s(t, n, r) {
      var a = o("AdsInsightsFields").getConfig(n);
      if (a.formatType !== "CURRENCY") return 0;
      var i = o(
        "AdsSplitTestReportingUtils",
      ).getNumberOfSignificantDecimalPlacesForMetrics(
        t,
        r
          .map(function (e) {
            return e.metric;
          })
          .filter(function (e) {
            return e != null;
          }),
      );
      return i <= e ? i : 0;
    }
    l.getNumberOfSignificantDecimalPlacesForSelectedMetric = s;
  },
  98,
);
