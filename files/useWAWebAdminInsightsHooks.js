__d(
  "useWAWebAdminInsightsHooks",
  ["WATimeUtils", "WAWebNewsletterMetricUtils", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebModelValues").useModelValues(e, ["adminInsights"]),
        n = o("useWAWebModelValues").useOptionalModelValues(t.adminInsights, [
          "rangeStart",
          "rangeEnd",
          "rangeInDays",
        ]);
      return s({
        rangeStart: n == null ? void 0 : n.rangeStart,
        rangeEnd: n == null ? void 0 : n.rangeEnd,
        creationTime: e.creationTime,
        rangeInDays: n == null ? void 0 : n.rangeInDays,
      });
    }
    function s(e) {
      var t = e.creationTime,
        n = e.rangeEnd,
        r = e.rangeInDays,
        a = e.rangeStart,
        i = n != null ? n : o("WATimeUtils").unixTime(),
        l =
          a != null
            ? a
            : o("WATimeUtils").castToUnixTime(
                Math.max(
                  t,
                  o("WAWebNewsletterMetricUtils").getInsightPeriodStart(i),
                ),
              ),
        s =
          r != null ? r : o("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED;
      return { start: l, end: i, days: s };
    }
    l.useAdminInsightPeriod = e;
  },
  98,
);
