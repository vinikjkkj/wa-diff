__d(
  "PerformanceSummaryTopProductsL3WidgetPlugin",
  [
    "AdsPLRAlphaBetaCheckUtil",
    "AdsPerformanceSummaryTypes",
    "CometPlaceholder.react",
    "JSResourceForInteraction",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "PerformanceSummaryTopProductsL3Widget.react",
        ).__setRef("PerformanceSummaryTopProductsL3WidgetPlugin"),
      ),
      c = {
        type: "performanceSummaryWidget",
        key: "topProductsL3",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .TopProductsL3,
        isEnabled: function (t) {
          return (
            t.currentLevel === "campaign" &&
            o(
              "AdsPLRAlphaBetaCheckUtil",
            ).isAllowedForPlrWithAlphaBetaCheckWithExposure(
              "PerformanceSummaryTopProductsL3WidgetPlugin",
            )
          );
        },
        ContentComponent: function (t) {
          return s.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: s.jsx(u, babelHelpers.extends({}, t)),
          });
        },
        logKey: "top_products_l3",
      },
      d = c;
    l.default = d;
  },
  98,
);
