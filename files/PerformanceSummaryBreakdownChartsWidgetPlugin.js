__d(
  "PerformanceSummaryBreakdownChartsWidgetPlugin",
  [
    "AdsErrorBoundary.react",
    "AdsPerformanceSummaryTypes",
    "CometPlaceholder.react",
    "PerformanceSummaryBreakdownChartsContainer.react",
    "PerformanceSummaryBreakdownChartsWidgetPlugin_Query.graphql",
    "RelayHooks",
    "feature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d() {
      var t = o("RelayHooks").useClientQuery(
        e !== void 0
          ? e
          : (e = n(
              "PerformanceSummaryBreakdownChartsWidgetPlugin_Query.graphql",
            )),
        {},
      );
      return c.jsx(r("PerformanceSummaryBreakdownChartsContainer.react"), {
        fragmentKey: t.selected_ad_account,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return c.jsx(r("AdsErrorBoundary.react"), {
        moduleName: i.id,
        children: c.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: c.jsx(d, {}),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = {
        type: "performanceSummaryWidget",
        key: "breakdownCharts",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .BreakdownCharts,
        isEnabled: function (t) {
          return t.selectionOldCount !== 0;
        },
        ContentComponent: function () {
          return c.jsx(m, {});
        },
        logKey: "breakdown_charts",
        feature: o("feature").feature(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_BreakdownCharts_Widget",
            ])),
        ),
      },
      _ = p;
    l.default = _;
  },
  98,
);
