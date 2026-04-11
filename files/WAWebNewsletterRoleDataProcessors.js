__d(
  "WAWebNewsletterRoleDataProcessors",
  ["WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getMetrics: function () {
        return [
          {
            id: o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
              .UniqueVisitorOverPeriodByRole,
            type: "UNIQUE_VISITORS",
            group_by: {
              number_of_days: o("WAWebNewsletterMetricUtils")
                .INSIGHT_DAYS_COVERED,
              role: !0,
            },
          },
        ];
      },
      process: function (t) {
        var e,
          n,
          r = t.get(
            o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
              .UniqueVisitorOverPeriodByRole,
          );
        return {
          followersReached:
            r == null ||
            (e = r.find(function (e) {
              return e.role === "SUBSCRIBER";
            })) == null
              ? void 0
              : e.value,
          nonFollowersReached:
            r == null ||
            (n = r.find(function (e) {
              return e.role === "GUEST";
            })) == null
              ? void 0
              : n.value,
        };
      },
    };
    l.REACH_BY_ROLE_PROCESSOR = e;
  },
  98,
);
