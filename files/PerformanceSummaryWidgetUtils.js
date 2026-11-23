__d(
  "PerformanceSummaryWidgetUtils",
  [
    "fbt",
    "AdsPerformanceSummaryTypes",
    "DateTime",
    "PerformanceSummaryChartsUtils",
    "PerformanceSummaryLineChartGeoAxisLabelFormatter",
    "PerformanceSummaryTabsConstants",
    "PerformanceSummaryWidgetPlugins",
    "PerformanceSummaryWidgetUtils_benchmarkData.graphql",
    "PeriodUnit",
    "RelayHooks",
    "Timezone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u =
        e !== void 0
          ? e
          : (e = n("PerformanceSummaryWidgetUtils_benchmarkData.graphql")),
      c = [
        "deliveryErrors",
        "deliveryWarnings",
        "saWebsiteOnlyTrafficeGuidance",
        "performance",
        "MAIBAGoldenPathEntrypointCard",
        "advertiserTrendsCard",
        "topProducts",
        "topProductsL2",
        "topProductsL3",
        "audienceSaturationCard",
        "creativeInspirationInsightsUnifiedCard",
        "creativeInsightsCard",
        "ODAXAdoptionGuidanceCard",
        "cdaCatalogIssues",
        "ctmMessagingReportGuidanceCard",
        "adCreativePerformanceGuidance",
        "capiOptimizationCard",
        "delivery",
        "campaignDuplicationCard",
        "ctxFunnelChart",
        "splitTest",
        "breakdownCharts",
        "playableHeatmap",
        "ageGenderMisdeliveryPerceptionGuidance",
        "engagement",
        "interactivity",
        "marketingMessagesGuidanceCard",
      ],
      d = [
        "limitedByBudgetGuidanceCard",
        "limitedByBidGuidanceCard",
        "budgetCPAGuidanceCard",
        "budgetForecasterCard",
        "bidForecasterCard",
      ];
    function m(e) {
      return e ===
        o("AdsPerformanceSummaryTypes").PerformanceSummaryFlexGroupsEnum.Default
        ? c
        : e ===
            o("AdsPerformanceSummaryTypes").PerformanceSummaryFlexGroupsEnum
              .BudgetTab
          ? d
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function p(e, t) {
      return m(e)
        .map(function (e) {
          return r("PerformanceSummaryWidgetPlugins").get(e);
        })
        .filter(function (e) {
          return e.isEnabled(t);
        });
    }
    function _(e) {
      return e === o("PerformanceSummaryTabsConstants").PSTabID.BUDGET
        ? o("AdsPerformanceSummaryTypes").PerformanceSummaryFlexGroupsEnum
            .BudgetTab
        : o("AdsPerformanceSummaryTypes").PerformanceSummaryFlexGroupsEnum
            .Default;
    }
    function f(e, t, n, a, i, l) {
      for (
        var c,
          d = e
            ? o("PerformanceSummaryLineChartGeoAxisLabelFormatter")
                .DISPLAY_DATE_FORMAT_WITH_YEAR
            : o("PerformanceSummaryLineChartGeoAxisLabelFormatter")
                .DISPLAY_DATE_FORMAT,
          m = new Map(),
          p = new Map(),
          _ =
            (c = t == null ? void 0 : t.measure(r("PeriodUnit").day)) != null
              ? c
              : 0,
          f = 0;
        f < _;
        f++
      ) {
        var g = t == null ? void 0 : t.getStartDateTime().addDays(f),
          h = g == null ? void 0 : g.format(d);
        h != null && (m.set(h, null), p.set(h, null));
      }
      var y = new Set(m.keys());
      return (
        n == null ||
          n.forEach(function (e) {
            var t = o("RelayHooks").readInlineData(u, e);
            if (t.date != null) {
              var n = r("DateTime")
                .fromISOString(t.date, o("Timezone").PST8PDT)
                .format(d);
              if (y.has(n)) {
                var a, i;
                m.set(
                  n,
                  (a = (i = t.benchmark) == null ? void 0 : i.p50) != null
                    ? a
                    : null,
                );
              }
            }
          }),
        a == null ||
          a.forEach(function (e) {
            var t = e.interval,
              n = e.value,
              r = t.getStartDateTime().toFBDate(),
              o = n != null ? parseFloat(String(n)) : null,
              a = r.format(d);
            y.has(a) && p.set(a, o);
          }),
        l
          ? [
              {
                name: s._(/*BTDS*/ ""),
                labels: [o("PerformanceSummaryChartsUtils").DATETIME_KEY, i],
                value: Array.from(p),
              },
              {
                name: s._(/*BTDS*/ ""),
                labels: [
                  o("PerformanceSummaryChartsUtils").DATETIME_KEY,
                  "cost_per_peer_ad_sets",
                ],
                value: Array.from(m),
                id: "cost_per_peer_ad_sets",
              },
            ]
          : [
              {
                name: s._(/*BTDS*/ ""),
                labels: [o("PerformanceSummaryChartsUtils").DATETIME_KEY, i],
                value: Array.from(p),
              },
            ]
      );
    }
    ((l.getEnabledWidgets = p),
      (l.getWidgetsFlexGroup = _),
      (l.getSanitizedChartsData = f));
  },
  226,
);
