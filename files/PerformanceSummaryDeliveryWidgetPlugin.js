__d(
  "PerformanceSummaryDeliveryWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryPacingChartContainer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "delivery",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .Delivery,
        isEnabled: function (t) {
          return t.selectionOldCount !== 0;
        },
        ContentComponent: function () {
          return s.jsx(r("PerformanceSummaryPacingChartContainer.react"), {});
        },
        logKey: "delivery_pacing",
      },
      c = u;
    l.default = c;
  },
  98,
);
