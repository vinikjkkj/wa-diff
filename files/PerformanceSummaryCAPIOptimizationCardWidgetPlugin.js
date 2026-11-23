__d(
  "PerformanceSummaryCAPIOptimizationCardWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryCAPICardContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "capiOptimizationCard",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CAPIOptimizationCard,
        ContentComponent: function () {
          return s.jsx(r("PerformanceSummaryCAPICardContainer.react"), {});
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "capi_optimization",
      },
      c = u;
    l.default = c;
  },
  98,
);
