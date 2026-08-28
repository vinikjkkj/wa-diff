__d(
  "AdsInsightsPerformanceConfig",
  [
    "fbt",
    "invariant",
    "AdsInsightsField",
    "AdsInsightsPerformanceMetricsUtils",
    "AdsInsightsPerformanceSummariesUtils",
    "AdsObjectTypes",
    "AdsUniqueMetricsHelpID",
    "GeoLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = [
        {
          id: "results",
          metrics: [
            r("AdsInsightsField").RESULTS,
            r("AdsInsightsField").COST_PER_RESULT,
          ],
          primaryMetric: r("AdsInsightsField").RESULTS,
          showSelectors: !1,
          summaryFields: [r("AdsInsightsField").RESULT_RATE],
        },
        {
          id: "reach",
          metrics: [
            r("AdsInsightsField").REACH,
            o("AdsInsightsPerformanceMetricsUtils").partialFrequencies(
              r("AdsInsightsField").FREQUENCY,
            ),
          ],
          primaryMetric: r("AdsInsightsField").REACH,
          showSelectors: !1,
          summaryFields: [
            r("AdsInsightsField").IMPRESSIONS,
            r("AdsInsightsField").CPP,
          ],
          subLabel: s._(/*BTDS*/ "{=m0} Reached", [
            s._implicitParam(
              "=m0",
              c.jsx(r("GeoLink.react"), {
                href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                target: "_blank",
                children: s._(/*BTDS*/ "People"),
              }),
            ),
          ]),
        },
        {
          id: "spend",
          metrics: [
            o("AdsInsightsPerformanceMetricsUtils").partialSums(
              r("AdsInsightsField").SPEND,
            ),
            r("AdsInsightsField").SPEND,
          ],
          primaryMetric: r("AdsInsightsField").SPEND,
          showSelectors: !1,
          summaryFields: [
            o("AdsInsightsPerformanceSummariesUtils").average(
              r("AdsInsightsField").SPEND,
            ),
          ],
          subLabel: s._(/*BTDS*/ "Amount spent"),
        },
        {
          id: "frequency_value",
          level: r("AdsObjectTypes").CAMPAIGN,
          metrics: [r("AdsInsightsField").REACH],
          breakdowns: [r("AdsInsightsField").FREQUENCY_VALUE],
          primaryMetric: r("AdsInsightsField").FREQUENCY,
          sort: [
            { field: r("AdsInsightsField").FREQUENCY_VALUE, direction: 1 },
          ],
          subLabel: s._(/*BTDS*/ "Frequency"),
        },
        { id: "custom", label: s._(/*BTDS*/ "Custom"), showSelectors: !0 },
      ],
      m = {};
    (d.forEach(function (e) {
      (e.primaryMetric || e.label || u(0, 1823, e), (m[e.id] = e));
    }),
      (l.performanceTabs = d),
      (l.performanceTabsByID = m));
  },
  226,
);
