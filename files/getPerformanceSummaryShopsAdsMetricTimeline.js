__d(
  "getPerformanceSummaryShopsAdsMetricTimeline",
  [
    "AdsInsightsObjectStatsStoreUtil",
    "AdsInsightsTimeRangeUtil",
    "AdsLoadObjectUtils",
    "AdsLoadProgress_LEGACY",
    "LocalDate",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return t.mapValue(function (t) {
        var a = t.accountInfo,
          i = t.viewSpec,
          l = r("AdsLoadProgress_LEGACY").toLoadObject(
            r("AdsInsightsObjectStatsStoreUtil").getDateIntervalProgress(i, a),
          );
        return l.map(function (t) {
          var l = a.timezoneID,
            s = t.toTimeInterval(a.timezoneID),
            u;
          i.timeRange.isLifetime()
            ? (u = s)
            : (u = o("AdsInsightsTimeRangeUtil")
                .toDateInterval(i.timeRange, r("LocalDate").today(l))
                .toTimeInterval(l));
          var c = n(e, s, i.filter, i.timeRange, a);
          return o("AdsLoadObjectUtils")
            .allByKeyFromObject(c)
            .map(function (e) {
              var t = r("getObjectValues")(e).some(function (e) {
                return e.some(function (e) {
                  return u.containsInterval(e.interval);
                });
              });
              return t
                ? { hasDelivery: !0, interval: u, byTimeData: e }
                : { hasDelivery: !1 };
            });
        });
      });
    }
    l.default = e;
  },
  98,
);
