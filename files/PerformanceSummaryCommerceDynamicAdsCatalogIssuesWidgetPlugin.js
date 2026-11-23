__d(
  "PerformanceSummaryCommerceDynamicAdsCatalogIssuesWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryCommerceDynamicAdsCatalogIssuesContainer.react",
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
        key: "cdaCatalogIssues",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .CommerceDynamicAdsCatalogIssues,
        ContentComponent: function () {
          return u.jsx(
            r(
              "PerformanceSummaryCommerceDynamicAdsCatalogIssuesContainer.react",
            ),
            {},
          );
        },
        isEnabled: function (t) {
          return !1;
        },
        logKey: "commerce_dynamic_ads_catalog_issues",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_DynamicAdsCatalogIssues_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
