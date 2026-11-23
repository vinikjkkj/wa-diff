__d(
  "PerformanceSummaryDeliveryWarningsWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryDeliveryWarningsCardContainer.react",
    "feature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "deliveryWarnings",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .DeliveryWarnings,
        ContentComponent: function () {
          return u.jsx(
            r("PerformanceSummaryDeliveryWarningsCardContainer.react"),
            {},
          );
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "delivery_status_warnings",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_DeliveryStatusWarnings_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
