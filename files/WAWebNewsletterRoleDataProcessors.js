__d(
  "WAWebNewsletterRoleDataProcessors",
  ["WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
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
                  role: !0,
                },
              },
              e === "CHANNEL" ? {} : { surface: e },
            ),
          ];
        },
        process: function (r) {
          var e,
            o,
            a = r.get(t),
            i =
              a == null ||
              (e = a.find(function (e) {
                return e.role === "SUBSCRIBER";
              })) == null
                ? void 0
                : e.value,
            l =
              a == null ||
              (o = a.find(function (e) {
                return e.role === "GUEST";
              })) == null
                ? void 0
                : o.value;
          return n(i, l);
        },
      };
    }
    var s = e(
        "CHANNEL",
        o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
          .UniqueVisitorOverPeriodByRole,
        function (e, t) {
          return {
            followersReachedChannels: e,
            nonFollowersReachedChannels: t,
          };
        },
      ),
      u = e(
        "ALL",
        o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
          .UniqueVisitorAllOverPeriodByRole,
        function (e, t) {
          return { followersReachedAll: e, nonFollowersReachedAll: t };
        },
      ),
      c = e(
        "CHANNEL_STATUS",
        o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
          .UniqueVisitorChannelStatusOverPeriodByRole,
        function (e, t) {
          return {
            followersReachedChannelStatus: e,
            nonFollowersReachedChannelStatus: t,
          };
        },
      );
    ((l.REACH_BY_ROLE_PROCESSOR = s),
      (l.REACH_ALL_BY_ROLE_PROCESSOR = u),
      (l.REACH_CHANNEL_STATUS_BY_ROLE_PROCESSOR = c));
  },
  98,
);
