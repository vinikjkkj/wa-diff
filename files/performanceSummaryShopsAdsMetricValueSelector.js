__d(
  "performanceSummaryShopsAdsMetricValueSelector",
  [
    "AdsInsightsObjectStatsUtil",
    "AdsLoadObjectUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "performanceSummaryGetDescriptor",
    "performanceSummaryInsightsOverviewSelectors",
    "performanceSummaryShopsAdsObjectStatsThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsCreateStoreSelector")(
          [],
          function (t) {
            return t;
          },
          { name: i.id },
        ),
        o("performanceSummaryInsightsOverviewSelectors")
          .performanceSummaryInsightsOverviewSelector,
        r("performanceSummaryShopsAdsObjectStatsThunkSelector"),
      ],
      function (t, n, r) {
        var e = t.metrics;
        return s(e, n, r);
      },
      { name: i.id + ".performanceSummaryShopsAdsMetricValueSelector" },
    );
    function s(e, t, n) {
      return t.mapValue(function (t) {
        var a = t.accountInfo,
          i = t.viewSpec,
          l = e.map(function (e) {
            return r("performanceSummaryGetDescriptor")(e).field;
          }),
          s = i.timeRange,
          u = n(i.filter, s, l, a),
          c = o("AdsInsightsObjectStatsUtil").updateResultsInRow(u),
          d = Object.fromEntries(
            e.map(function (e) {
              var t = r("performanceSummaryGetDescriptor")(e).field;
              return [e, c[t]];
            }),
          );
        return o("AdsLoadObjectUtils").allByKeyFromObject(d);
      });
    }
    l.performanceSummaryShopsAdsMetricValueSelector = e;
  },
  98,
);
