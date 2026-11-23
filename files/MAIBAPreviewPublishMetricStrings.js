__d(
  "MAIBAPreviewPublishMetricStrings",
  ["AdsInsightsMetricNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.split("_").join(" ");
      return t.slice(0, 1).toUpperCase() + t.slice(1);
    }
    function s(t) {
      var n = r("AdsInsightsMetricNames")[t];
      return n != null && String(n) !== "" ? String(n) : e(t);
    }
    l.formatABTestObjectiveMetric = s;
  },
  98,
);
