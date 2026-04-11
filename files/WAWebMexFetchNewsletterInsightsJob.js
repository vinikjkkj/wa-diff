__d(
  "WAWebMexFetchNewsletterInsightsJob",
  [
    "WATimeUtils",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterInsightsJobQuery.graphql",
    "WAWebNewsletterInsightUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterInsightsJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i,
            l = e.newsletterJid,
            u = e.requestedMetrics,
            c = yield o("WAWebMexClient").fetchQuery(s, {
              input: { newsletter_id: l, metrics: u },
            }),
            d =
              (t =
                (n = c.xwa2_newsletter_admin_insights) == null
                  ? void 0
                  : n.result) != null
                ? t
                : [],
            m =
              (r = c.xwa2_newsletter_admin_insights) == null
                ? void 0
                : r.last_update_time,
            p = d.reduce(function (e, t) {
              var n = t.id,
                r = t.values;
              return (n == null || r == null || e.set(n, r), e);
            }, new Map());
          return {
            metricValueMap: p,
            lastUpdateTime:
              m == null
                ? o("WATimeUtils").unixTime()
                : o("WATimeUtils").castToUnixTime(Number.parseInt(m, 10)),
            dataStatus: o(
              "WAWebNewsletterInsightUtils",
            ).getNewsletterInsightsDataStatus(
              (a =
                (i = c.xwa2_newsletter_admin_insights) == null
                  ? void 0
                  : i.metrics_status) != null
                ? a
                : "MISSING",
            ),
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterInsights = u;
  },
  98,
);
