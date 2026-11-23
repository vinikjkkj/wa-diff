__d(
  "PerformanceSummaryDeliveryErrorsWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryDeliveryErrorsCardContainer.react",
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
        key: "deliveryErrors",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .DeliveryErrors,
        ContentComponent: function () {
          return u.jsx(
            r("PerformanceSummaryDeliveryErrorsCardContainer.react"),
            {},
          );
        },
        isEnabled: function (t) {
          return !0;
        },
        logKey: "delivery_status_errors",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_DeliveryStatusErrors_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
