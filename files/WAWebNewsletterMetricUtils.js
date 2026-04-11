__d(
  "WAWebNewsletterMetricUtils",
  ["$InternalEnum", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 86400,
      s = 30,
      u = "infinite";
    function c(t) {
      var n = o("WATimeUtils").pastUnixTime(e * (s - 1), t);
      return n;
    }
    var d = n("$InternalEnum")({
      UniqueVisitorsOverPeriod: 1,
      NewUniqueVisitorsOverPeriod: 2,
      NetFollowsOverPeriod: 3,
      UniqueVisitorOverPeriodByRole: 4,
      UniqueVisitorOverPeriodByCountry: 5,
      FollowersOverPeriod: 6,
      FollowersOverPeriodByCountry: 7,
      FollowsPerDay: 8,
      UnfollowsPerDay: 9,
    });
    function m(e) {
      var t = e.flatMap(function (e) {
          return e.getMetrics();
        }),
        n = t.reduce(
          function (e, t) {
            var n = e.enumSet,
              r = e.metricRequests,
              o = d.cast(t.id);
            return (o == null || n.has(o) || (n.add(o), r.push(t)), e);
          },
          { enumSet: new Set(), metricRequests: [] },
        ),
        r = n.metricRequests;
      return r;
    }
    function p(e) {
      return e !== u && Math.abs(e) < Number.EPSILON;
    }
    function _(e) {
      return new Date(e).setHours(0, 0, 0, 0);
    }
    ((l.INSIGHT_DAYS_COVERED = s),
      (l.DELTA_INFINITE = u),
      (l.getInsightPeriodStart = c),
      (l.NewsletterInsightMetricQuery = d),
      (l.getUniqueMetricRequests = m),
      (l.isDeltaValueZero = p),
      (l.roundToNearestDay = _));
  },
  98,
);
