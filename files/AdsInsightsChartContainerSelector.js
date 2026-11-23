__d(
  "AdsInsightsChartContainerSelector",
  [
    "AdsAPIObjectives",
    "AdsInsightsListByObjectiveStore",
    "AdsInsightsMetricsUtils",
    "AdsInsightsObjectStatsStore",
    "AdsInsightsObjectStatsStoreUtil",
    "AdsInsightsObjectives",
    "AdsInsightsTimeRangeUtil",
    "AdsPETableViewSelectors",
    "LoadObject",
    "StrSet",
    "adsCreateStoreSelector",
    "adsCreateStoreThunkSelector",
    "adsInsightsAccountInfoSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
        r("AdsInsightsObjectStatsStore"),
        function (e, t) {
          return r(
            "AdsInsightsObjectStatsStoreUtil",
          ).getObjectiveAndResultField(e, t);
        },
      ),
      s = r("adsCreateStoreSelector")(
        [].concat(
          r("AdsPETableViewSelectors").chartViewSpecSelector.getStores(),
          r("adsInsightsAccountInfoSelector").getStores(),
          [r("AdsInsightsListByObjectiveStore")],
          e.getStores(),
        ),
        function () {
          var t = r("adsInsightsAccountInfoSelector")();
          if (!t.hasValue()) return { ready: !1 };
          var n = t.getValueEnforcing(),
            a = r("AdsPETableViewSelectors").chartViewSpecSelector(),
            l = a.filter,
            s = a.objectType,
            u = a.timeRange,
            c = o("AdsInsightsTimeRangeUtil").isTimeRangeInFuture(
              n.timezoneID,
              u,
            );
          if (c) return { ready: !0, isTimeRangeInFuture: c };
          var d = e()(a, n),
            m = d.objective;
          m = m.map(function (e) {
            return e == null
              ? r("AdsInsightsListByObjectiveStore")
                  .get(l, u, s, n)
                  .map(function (e) {
                    return o("AdsInsightsObjectives").joinAll(
                      new (r("StrSet"))(Object.keys(e)),
                    );
                  })
              : m;
          });
          var p = m.map(function (e) {
            return e === r("AdsAPIObjectives").MULTIPLE
              ? r("AdsInsightsListByObjectiveStore").get(l, u, s, n)
              : r("LoadObject").empty({ creatorModuleID: i.id });
          });
          return {
            currencyCode: n.currencyCode,
            idsByObjectiveLoadObject: p,
            metricsInSelector: o(
              "AdsInsightsMetricsUtils",
            ).getMetricsInSelector(),
            accountInfo: n,
            objective: m.getValue(),
            isLoaded: m.hasValueWithoutError(),
            viewSpec: r("AdsPETableViewSelectors").chartViewSpecSelector(),
          };
        },
        { name: i.id + ".AdsInsightsChartContainerSelector" },
      );
    l.AdsInsightsChartContainerSelector = s;
  },
  98,
);
