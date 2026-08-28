__d(
  "AdsInsightsSectionConfig",
  [
    "fbt",
    "AdsInsightsField",
    "memoize",
    "meta-brand-chart-bar-filled-16",
    "meta-brand-chart-bar-outline-16",
    "meta-brand-four-dots-three-lines-connected-filled-16",
    "meta-brand-four-dots-three-lines-connected-outline-16",
    "meta-brand-two-people-filled-16",
    "meta-brand-two-people-outline-16",
    "meta-brand-two-squares-stacked-right-down-filled-16",
    "meta-brand-two-squares-stacked-right-down-outline-16",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function () {
        var e,
          t = [
            {
              id: "performance",
              defaultSpec: { section: "performance", subsection: "results" },
              defaultState: {
                metrics: [
                  (e = r("AdsInsightsField")).TOTAL_ACTIONS,
                  e.IMPRESSIONS,
                ],
              },
              iconSrc: {
                icon: o("meta-brand-chart-bar-outline-16")
                  .metaBrandChartBarOutline16,
              },
              name: s._(/*BTDS*/ "Performance"),
              selectedIconSrc: {
                color: "blue",
                icon: o("meta-brand-chart-bar-filled-16")
                  .metaBrandChartBarFilled16,
              },
            },
            {
              id: "audience",
              baseMetrics: [e.COST_PER_RESULT],
              defaultSpec: {
                metrics: [e.RESULTS, e.REACH],
                section: "audience",
              },
              iconSrc: {
                icon: o("meta-brand-two-people-outline-16")
                  .metaBrandTwoPeopleOutline16,
              },
              name: s._(/*BTDS*/ "Demographics"),
              selectedIconSrc: {
                color: "blue",
                icon: o("meta-brand-two-people-filled-16")
                  .metaBrandTwoPeopleFilled16,
              },
            },
            {
              id: "persona",
              baseMetrics: [e.RESULTS, e.SPEND, e.IMPRESSIONS],
              defaultSpec: {
                metrics: [e.RESULTS, e.REACH],
                section: "persona",
              },
              iconSrc: {
                icon: o("meta-brand-two-people-outline-16")
                  .metaBrandTwoPeopleOutline16,
              },
              name: s._(/*BTDS*/ "Demographics"),
              selectedIconSrc: {
                color: "blue",
                icon: o("meta-brand-two-people-filled-16")
                  .metaBrandTwoPeopleFilled16,
              },
            },
            {
              id: "placement",
              baseMetrics: [e.IMPRESSIONS],
              defaultSpec: {
                metrics: [e.REACH, e.RESULTS],
                section: "placement",
                subsection: "allPlacement",
              },
              metricOptions: [
                [e.REACH, e.IMPRESSIONS],
                [e.RESULTS, e.SPEND],
              ],
              iconSrc: {
                icon: o("meta-brand-two-squares-stacked-right-down-outline-16")
                  .metaBrandTwoSquaresStackedRightDownOutline16,
              },
              name: s._(/*BTDS*/ "Platform"),
              selectedIconSrc: {
                color: "blue",
                icon: o("meta-brand-two-squares-stacked-right-down-filled-16")
                  .metaBrandTwoSquaresStackedRightDownOverlappingPapersFilled16,
              },
            },
            {
              id: "pacing",
              defaultSpec: { section: "pacing", subsection: "reach" },
              iconSrc: {
                icon: o("meta-brand-four-dots-three-lines-connected-outline-16")
                  .metaBrandFourDotsThreeLinesConnectedOutline16,
              },
              name: s._(/*BTDS*/ "Delivery"),
              selectedIconSrc: {
                color: "blue",
                icon: o("meta-brand-four-dots-three-lines-connected-filled-16")
                  .metaBrandFourDotsThreeLinesConnectedFilled16,
              },
            },
          ],
          n = {};
        return (
          t.forEach(function (e) {
            n[e.id] = e;
          }),
          { configs: t, configsByID: n }
        );
      },
      u = r("memoize")(e);
    l.buildConfigs = u;
  },
  226,
);
