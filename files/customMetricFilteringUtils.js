__d(
  "customMetricFilteringUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "campaign"
        ? "campaign"
        : e === "ad_set"
          ? "adset"
          : e === "ad"
            ? "ad"
            : "";
    }
    var u = ["campaign", "ad_set", "ad"];
    function c(t) {
      return u.some(function (n) {
        if (t.startsWith(e(n))) {
          var r = t.split(".");
          return r.length === 2 && d(r[1]);
        }
      });
    }
    function d(e) {
      var t = e.split(":");
      return (
        t.length === 2 && t[0] === "custom_derived_metrics" && !isNaN(t[1])
      );
    }
    function m(e, t) {
      var n = "";
      switch (e) {
        case "campaign":
          n = "Campaign";
          break;
        case "ad_set":
          n = "Ad set";
          break;
        case "ad":
          n = "Ad";
          break;
      }
      return s._(
        /*BTDS*/ "{combination of user generated metric name and ad object level}",
        [
          s._param(
            "combination of user generated metric name and ad object level",
            t + " (" + n + ")",
          ),
        ],
      );
    }
    ((l.adObjectLevelToApiField = e),
      (l.supportedLevelsForCustomMetricsFiltering = u),
      (l.isValidCustomMetricWithLevel = c),
      (l.isValidCustomMetric = d),
      (l.getCustomMetricTextCombinedWithLevel = m));
  },
  226,
);
