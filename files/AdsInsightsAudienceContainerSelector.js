__d(
  "AdsInsightsAudienceContainerSelector",
  [
    "AdsGoalStore",
    "AdsInsightsChartContainerSelector",
    "AdsInsightsField",
    "AdsInsightsObjectStatsStore",
    "AdsInsightsObjectStatsStoreUtil",
    "AdsInsightsObjectStatsUtil",
    "AdsInsightsSections",
    "AdsLoadProgress_LEGACY",
    "URI",
    "adsCreateStoreSelector",
    "getObjectValues",
    "mapObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("adsCreateStoreSelector")(
        [].concat(
          o(
            "AdsInsightsChartContainerSelector",
          ).AdsInsightsChartContainerSelector.getStores(),
          [
            r("AdsInsightsObjectStatsStore"),
            r("AdsGoalStore"),
            r("AdsInsightsObjectStatsStore"),
          ],
        ),
        function () {
          var t,
            n = o(
              "AdsInsightsChartContainerSelector",
            ).AdsInsightsChartContainerSelector();
          if (n.ready === !1) return { ready: !1 };
          if (n.isTimeRangeInFuture)
            return { ready: !0, isTimeRangeInFuture: n.isTimeRangeInFuture };
          n = n;
          var a = n.accountInfo,
            l = n.viewSpec,
            u = l.filter,
            c = l.objectType,
            d = l.timeRange,
            m = n.metricsInSelector,
            p = o("AdsInsightsSections").getConfig("audience"),
            _ = m.concat(r("nullthrows")(p.baseMetrics)),
            f = r("AdsInsightsObjectStatsStore").get(u, d, _, a, [
              i.id + ".placementInsights.selectedMetrics",
            ]),
            g = o("AdsInsightsObjectStatsUtil").getResultsProgress(
              f[r("AdsInsightsField").RESULTS],
            ),
            h = r("AdsLoadProgress_LEGACY").fromLoadObject(g.indicator);
          f[r("AdsInsightsField").RESULTS] = g.results;
          var y = h
              .map(function (e) {
                return o(
                  "AdsInsightsObjectStatsUtil",
                ).getCustomConversionConfigForIndicator(
                  e,
                  r("AdsGoalStore").getActiveAndArchivedGoalListByID(),
                );
              })
              .orNull(),
            C = r("AdsInsightsObjectStatsStoreUtil").getAgeGenderRows(l, a),
            b = r("AdsInsightsObjectStatsStoreUtil").getGenderRows(l, a),
            v =
              n.isLoaded &&
              C.isLoaded() &&
              b.isLoaded() &&
              h.isLoaded() &&
              r("getObjectValues")(f).every(function (e) {
                return e.hasValueWithoutError();
              }),
            S = (e || (e = r("mapObject")))(f, function (e) {
              return e.getValue() || 0;
            });
          v && r("AdsInsightsObjectStatsStoreUtil").prefetchNAMPlacement(l, a);
          var R = {
            filter: u,
            timeRange: d,
            accountID: a.accountID,
            timezoneID: a.timezoneID,
            query_url: (s || (s = r("URI"))).getRequestURI().toString(),
          };
          return {
            ageGenderRows: C,
            isEmpty: !((t = C.value) != null && t.length),
            validationParams: R,
            genderRows: b,
            currencyCode: n.currencyCode,
            customConversion: y,
            error: C.isError(),
            idsByObjectiveLoadObject: n.idsByObjectiveLoadObject,
            mainObjectType: c,
            metrics: _,
            metricsInSelector: m,
            metricsTotalValues: S,
            objective: n.objective,
            ready: v,
            resultsField: h.value,
            timeRange: l.timeRange,
          };
        },
        { name: i.id + ".AdsInsightsAudienceContainerSelector" },
      );
    l.AdsInsightsAudienceContainerSelector = u;
  },
  98,
);
