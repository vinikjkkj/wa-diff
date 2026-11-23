__d(
  "AdsBenchmarkReportStoreUtils",
  ["isFalsey", "isTruthy", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext;
    function u(e, t) {
      var n = t.length === 1 && t[0] !== "0" ? t[0] : null;
      return r("isFalsey")(n)
        ? null
        : e === "ad_set"
          ? { objectId: n, objectLevel: "ad_set" }
          : e === "campaign"
            ? { objectId: n, objectLevel: "campaign" }
            : null;
    }
    function c(e, t) {
      var n = u(e, t);
      return (
        r("isTruthy")(n) &&
        r("isTruthy")(n.objectId) &&
        r("isTruthy")(n.objectLevel)
      );
    }
    var d = s(!1);
    ((l.getEligibleCampaignForBenchmarkInPerformanceSummary = u),
      (l.isAccountEligibleForBenchmarkInPerformanceSummary = c),
      (l.BenchmarkEligibilityContext = d));
  },
  98,
);
