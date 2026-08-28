__d(
  "adsGetInsightsMetricDefinition",
  [
    "AdFLEXConfig",
    "AdsInsightsMetricDefinitionsGated",
    "AdsInsightsMetricDefinitionsUngatedStatic",
    "ODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n =
          r("AdFLEXConfig") == null ||
          (t = r("AdFLEXConfig").get()) == null ||
          t.getMetricDefinition == null
            ? void 0
            : t.getMetricDefinition(e);
      if (n != null) return (c(e, "flex_config"), n);
      var o = r("AdsInsightsMetricDefinitionsUngatedStatic").definitions[e];
      if (o != null) return (c(e, "ungated"), o);
      var a = r("AdsInsightsMetricDefinitionsGated")[e];
      return a != null ? (c(e, "gated"), a) : null;
    }
    var u = new Set();
    function c(t, n) {
      u.has(t) ||
        ((e || (e = o("ODS"))).bumpEntityKey(
          2966,
          "ads_insights_metric_definition",
          "used." + n + "." + t,
        ),
        u.add(t));
    }
    l.default = s;
  },
  98,
);
