__d(
  "PerformanceSummaryCTXFunnelWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "AdsRBCuratedReportCTMGatingUtils",
    "PerformanceSummaryCTXFunnelContainer.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "ctxFunnelChart",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CTXFunnelChart,
        isEnabled: function (t) {
          if (
            !o(
              "AdsRBCuratedReportCTMGatingUtils",
            ).accountHasMessagingAdsReportUIAccess()
          )
            return !1;
          if (r("gkx")("2029")) {
            var e;
            return (
              ((e = t.currentAdObjectLevelsForCREPE) == null
                ? void 0
                : e[0]) === "campaign"
            );
          }
          return t.currentLevel === "campaign";
        },
        ContentComponent: function () {
          return s.jsx(r("PerformanceSummaryCTXFunnelContainer.react"), {});
        },
        logKey: "ctx_funnel",
      },
      c = u;
    l.default = c;
  },
  98,
);
