__d(
  "useWAWebAdminInsightsHooks",
  [
    "WATimeUtils",
    "WAWebNewsletterMetricUtils",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["adminInsights"]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebModelValues").useModelValues(e, n),
        a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["rangeStart", "rangeEnd", "rangeInDays"]), (t[1] = a))
        : (a = t[1]);
      var i = o("useWAWebModelValues").useOptionalModelValues(
          r.adminInsights,
          a,
        ),
        l = i == null ? void 0 : i.rangeStart,
        u = i == null ? void 0 : i.rangeEnd,
        c = i == null ? void 0 : i.rangeInDays,
        d;
      return (
        t[2] !== e.creationTime || t[3] !== l || t[4] !== u || t[5] !== c
          ? ((d = s({
              rangeStart: l,
              rangeEnd: u,
              creationTime: e.creationTime,
              rangeInDays: c,
            })),
            (t[2] = e.creationTime),
            (t[3] = l),
            (t[4] = u),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
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
