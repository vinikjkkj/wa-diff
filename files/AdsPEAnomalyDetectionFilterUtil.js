__d(
  "AdsPEAnomalyDetectionFilterUtil",
  ["AdsGenericFilterSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || e.values == null) return e;
      var t = e.values.filter(function (e) {
        var t = e.field && e.field.name.startsWith("ANOMALY");
        return !t;
      });
      return t.length > 0 ? new (r("AdsGenericFilterSet"))(t) : null;
    }
    function s(e) {
      if (e == null) return null;
      for (var t of e.values) if (t.field.name === "ANOMALY") return t.toAPI();
      return null;
    }
    function u(e) {
      if (e == null) return !1;
      for (var t of e) if (t.field.endsWith(".anomaly_detection")) return !0;
      return !1;
    }
    function c(e) {
      var t = ["campaign_group.anomaly_detection"];
      return e.filter(function (e) {
        return !t.includes(e.field);
      });
    }
    ((l.removeAnomalyFiltersFromAdsGenericFilterSet = e),
      (l.extractAnomalyFilterFromAdsGenericFilterSet = s),
      (l.isAnomalyFilter = u),
      (l.generateAnomalyFilterSpec = c));
  },
  98,
);
