__d(
  "WAWebNewsletterInsightDeltaProcessors",
  ["WAWebNewsletterGatingUtils", "WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getMetrics: function () {
          return [
            {
              id: o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                .UniqueVisitorsOverPeriod,
              type: "UNIQUE_VISITORS",
              group_by: {
                number_of_days: o("WAWebNewsletterMetricUtils")
                  .INSIGHT_DAYS_COVERED,
              },
            },
            o("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas()
              ? null
              : {
                  id: o("WAWebNewsletterMetricUtils")
                    .NewsletterInsightMetricQuery.NewUniqueVisitorsOverPeriod,
                  type: "NEW_UNIQUE_VISITORS",
                  group_by: {
                    number_of_days: o("WAWebNewsletterMetricUtils")
                      .INSIGHT_DAYS_COVERED,
                  },
                },
          ].filter(Boolean);
        },
        process: function (t) {
          var e,
            n,
            r =
              (e = t.get(
                o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                  .UniqueVisitorsOverPeriod,
              )) == null
                ? void 0
                : e[0].value;
          if (r == null) return {};
          var a =
            (n = t.get(
              o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                .NewUniqueVisitorsOverPeriod,
            )) == null
              ? void 0
              : n[0].value;
          if (a == null) return { accountsReached: r };
          var i = r - a,
            l =
              i === 0 ? o("WAWebNewsletterMetricUtils").DELTA_INFINITE : a / i;
          return { accountsReached: r, reachDelta: l };
        },
      },
      s = {
        getMetrics: function () {
          var e;
          return [
            {
              id: (e = o("WAWebNewsletterMetricUtils"))
                .NewsletterInsightMetricQuery.FollowersOverPeriod,
              type: "FOLLOWER",
              group_by: { number_of_days: e.INSIGHT_DAYS_COVERED },
            },
            {
              id: e.NewsletterInsightMetricQuery.NetFollowsOverPeriod,
              type: "NET_FOLLOWS",
              group_by: { number_of_days: e.INSIGHT_DAYS_COVERED },
            },
          ];
        },
        process: function (t) {
          var e,
            n,
            r =
              (e = t.get(
                o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                  .FollowersOverPeriod,
              )) == null
                ? void 0
                : e[0].value,
            a =
              (n = t.get(
                o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                  .NetFollowsOverPeriod,
              )) == null
                ? void 0
                : n[0].value;
          if (r == null || a == null) return {};
          var i = a / (r - a);
          return { followers: r, netFollows: a, followersDelta: i };
        },
      },
      u = {
        getMetrics: function () {
          return [
            {
              id: o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                .NetFollowsOverPeriod,
              type: "NET_FOLLOWS",
              group_by: {
                number_of_days: o("WAWebNewsletterMetricUtils")
                  .INSIGHT_DAYS_COVERED,
              },
            },
          ];
        },
        process: function (t) {
          var e,
            n =
              (e = t.get(
                o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                  .NetFollowsOverPeriod,
              )) == null
                ? void 0
                : e[0].value;
          return { netFollows: n };
        },
      };
    ((l.REACH_WITH_DELTA_PROCESSOR = e),
      (l.FOLLOWER_WITH_DELTA_PROCESSOR = s),
      (l.NET_FOLLOWS_PROCESSOR = u));
  },
  98,
);
