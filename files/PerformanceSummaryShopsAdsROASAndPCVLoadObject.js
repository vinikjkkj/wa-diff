__d(
  "PerformanceSummaryShopsAdsROASAndPCVLoadObject",
  [
    "AdsLoadObjectUtils",
    "LoadObject",
    "PerformanceSummaryROASCardMetricsProvider",
    "PerformanceSummaryShopsAdsMetricUtils",
    "PerformanceSummaryShopsAdsROASAndPCV.react",
    "PerformanceSummaryShopsAdsROASAndPCVGlimmer.react",
    "adsCreateSelector",
    "adsUEditorAccountCurrencySelector",
    "loadObjectComponent",
    "performanceSummaryShopsAdsMetricValueDynamicSelector",
    "performanceSummaryShopsAdsPhase2LayoutDynamicSelector",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { roasSection: { width: "xqyf9gi", $$css: !0 } },
      c = r("adsCreateSelector")(
        [
          r("PerformanceSummaryROASCardMetricsProvider").toFluxSelector(),
          o("adsUEditorAccountCurrencySelector")
            .adsUEditorAccountCurrencySelector,
          r("performanceSummaryShopsAdsMetricValueDynamicSelector"),
          r("performanceSummaryShopsAdsPhase2LayoutDynamicSelector"),
        ],
        function (t, n, a, l) {
          return o("AdsLoadObjectUtils").allByKeyFromObject({
            activeMetric: r("LoadObject").withValue(t.activeMetric, {
              creatorModuleID: i.id,
            }),
            currencyCode: r("LoadObject").withValue(n, {
              creatorModuleID: i.id,
            }),
            metricValues: a({
              metrics: o("PerformanceSummaryShopsAdsMetricUtils").KPI_METRICS,
            }),
            isShopAdsPhase2Enabled: r("LoadObject").withValue(l(), {
              creatorModuleID: i.id,
            }),
          });
        },
        { name: i.id + ".dataSelector" },
      ),
      d = r("loadObjectComponent")({
        empty: function () {
          return null;
        },
        loading: function () {
          return s.jsx(r("PerformanceSummaryShopsAdsROASAndPCVGlimmer.react"), {
            xstyle: u.roasSection,
          });
        },
        error: function () {
          return null;
        },
        loaded: function (t, n) {
          var e = t.activeMetric,
            o = t.currencyCode,
            a = t.isShopAdsPhase2Enabled,
            i = t.metricValues;
          return s.jsx(r("PerformanceSummaryShopsAdsROASAndPCV.react"), {
            activeMetric: e,
            currencyCode: o,
            isShopAdsPhase2Enabled: a,
            metricValues: i,
            xstyle: u.roasSection,
          });
        },
      });
    ((l.dataSelector = c), (l.LoadObjectComponent = d));
  },
  98,
);
