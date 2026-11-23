__d(
  "PerformanceSummaryTopProductsL2WidgetPlugin",
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
          "PerformanceSummaryTopProductsL2Widget.react",
        ).__setRef("PerformanceSummaryTopProductsL2WidgetPlugin"),
      ),
      c = {
        type: "performanceSummaryWidget",
        key: "topProductsL2",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .TopProductsL2,
        isEnabled: function (t) {
          return (
            t.currentLevel === "ad_set" &&
            o(
              "AdsPLRAlphaBetaCheckUtil",
            ).isAllowedForPlrWithAlphaBetaCheckWithExposure(
              "PerformanceSummaryTopProductsL2WidgetPlugin",
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
        logKey: "top_products_l2",
      },
      d = c;
    l.default = d;
  },
  98,
);
