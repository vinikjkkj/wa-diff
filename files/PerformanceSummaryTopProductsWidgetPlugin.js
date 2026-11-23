__d(
  "PerformanceSummaryTopProductsWidgetPlugin",
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
          "PerformanceSummaryTopProductsWidget.react",
        ).__setRef("PerformanceSummaryTopProductsWidgetPlugin"),
      ),
      c = {
        type: "performanceSummaryWidget",
        key: "topProducts",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .TopProducts,
        isEnabled: function (t) {
          return (
            t.currentLevel === "ad" &&
            o(
              "AdsPLRAlphaBetaCheckUtil",
            ).isAllowedForPlrWithAlphaBetaCheckWithExposure(
              "PerformanceSummaryTopProductsWidgetPlugin",
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
        logKey: "top_products",
      },
      d = c;
    l.default = d;
  },
  98,
);
