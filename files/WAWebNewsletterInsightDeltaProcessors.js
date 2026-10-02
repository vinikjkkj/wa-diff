__d(
  "WAWebNewsletterInsightDeltaProcessors",
  ["WAWebNewsletterGatingUtils", "WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, r) {
      return {
        getMetrics: function () {
          return [
            babelHelpers.extends(
              {
                id: t,
                type: "UNIQUE_VISITORS",
                group_by: {
                  number_of_days: o("WAWebNewsletterMetricUtils")
                    .INSIGHT_DAYS_COVERED,
                },
              },
              e === "CHANNEL" ? {} : { surface: e },
            ),
            o("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas()
              ? null
              : babelHelpers.extends(
                  {
                    id: n,
                    type: "NEW_UNIQUE_VISITORS",
                    group_by: {
                      number_of_days: o("WAWebNewsletterMetricUtils")
                        .INSIGHT_DAYS_COVERED,
                    },
                  },
                  e === "CHANNEL" ? {} : { surface: e },
                ),
          ].filter(Boolean);
        },
        process: function (a) {
          var e,
            i,
            l = (e = a.get(t)) == null || (e = e[0]) == null ? void 0 : e.value;
          if (l == null) return {};
          var s =
              (i = a.get(n)) == null || (i = i[0]) == null ? void 0 : i.value,
            u;
          if (s == null) u = null;
          else {
            var c = l - s;
            c < 0
              ? (u = null)
              : c === 0
                ? (u = o("WAWebNewsletterMetricUtils").DELTA_INFINITE)
                : (u = s / c);
          }
          return r(l, u);
        },
      };
    }
    var u = s(
        "CHANNEL",
        (e = o("WAWebNewsletterMetricUtils")).NewsletterInsightMetricQuery
          .UniqueVisitorsOverPeriod,
        e.NewsletterInsightMetricQuery.NewUniqueVisitorsOverPeriod,
        function (e, t) {
          return babelHelpers.extends(
            { accountsReachedChannels: e },
            t == null ? {} : { reachDeltaChannels: t },
          );
        },
      ),
      c = s(
        "ALL",
        e.NewsletterInsightMetricQuery.UniqueVisitorsAllOverPeriod,
        e.NewsletterInsightMetricQuery.NewUniqueVisitorsAllOverPeriod,
        function (e, t) {
          return babelHelpers.extends(
            { accountsReachedAll: e },
            t == null ? {} : { reachDeltaAll: t },
          );
        },
      ),
      d = s(
        "CHANNEL_STATUS",
        e.NewsletterInsightMetricQuery.UniqueVisitorsChannelStatusOverPeriod,
        e.NewsletterInsightMetricQuery.NewUniqueVisitorsChannelStatusOverPeriod,
        function (e, t) {
          return babelHelpers.extends(
            { accountsReachedChannelStatus: e },
            t == null ? {} : { reachDeltaChannelStatus: t },
          );
        },
      ),
      m = {
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
      p = {
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
    ((l.REACH_WITH_DELTA_PROCESSOR = u),
      (l.REACH_ALL_WITH_DELTA_PROCESSOR = c),
      (l.REACH_CHANNEL_STATUS_WITH_DELTA_PROCESSOR = d),
      (l.FOLLOWER_WITH_DELTA_PROCESSOR = m),
      (l.NET_FOLLOWS_PROCESSOR = p));
  },
  98,
);
