__d(
  "WAWebNewsletterGrowthChartProcessors",
  ["WALogger", "WATimeUtils", "WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.reduce(function (e, t) {
        var n = t.timestamp,
          r = t.value;
        if (n == null) return e;
        var a = Number.parseInt(n, 10);
        return (
          Number.isNaN(a) ||
            e.push([
              o("WAWebNewsletterMetricUtils").roundToNearestDay(a * 1e3),
              r,
            ]),
          e
        );
      }, []);
      if (
        (t.sort(function (e, t) {
          return e[0] - t[0];
        }),
        t.length === 1)
      ) {
        var n = t[0][0],
          r = n - o("WATimeUtils").DAY_MILLISECONDS;
        t.unshift([r, 0]);
      }
      return t;
    }
    function u(t, n) {
      if (t.length !== n.length)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][insights] getNetFollowsData: len mismatch",
                ])),
            )
            .tags("newsletter")
            .sendLogs(
              "newsletter-insights-growth-chart-follows-unfollows-length-mismatch",
            ),
          []
        );
      for (var r = [], a = 0; a < t.length; a++)
        r.push([t[a][0], t[a][1] - n[a][1]]);
      return r;
    }
    var c = {
      getMetrics: function () {
        var e;
        return [
          {
            id: (e = o("WAWebNewsletterMetricUtils"))
              .NewsletterInsightMetricQuery.FollowsPerDay,
            type: "FOLLOWS",
            group_by: { number_of_days: 1 },
            limit: e.INSIGHT_DAYS_COVERED,
          },
          {
            id: e.NewsletterInsightMetricQuery.UnfollowsPerDay,
            type: "UNFOLLOWS",
            group_by: { number_of_days: 1 },
            limit: e.INSIGHT_DAYS_COVERED,
          },
        ];
      },
      process: function (t) {
        var e,
          n,
          r = s(
            (e = t.get(
              o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                .FollowsPerDay,
            )) != null
              ? e
              : [],
          ),
          a = s(
            (n = t.get(
              o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                .UnfollowsPerDay,
            )) != null
              ? n
              : [],
          ),
          i = u(r, a);
        return i.length === 0
          ? { growthChartData: [] }
          : { growthChartData: [i, r, a] };
      },
    };
    l.FOLLOWER_GROWTH_PROCESSOR = c;
  },
  98,
);
