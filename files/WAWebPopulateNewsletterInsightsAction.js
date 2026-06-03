__d(
  "WAWebPopulateNewsletterInsightsAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterGrowthChartProcessors",
    "WAWebNewsletterInsightCountryDataProcessors",
    "WAWebNewsletterInsightDeltaProcessors",
    "WAWebNewsletterInsightsJob",
    "WAWebNewsletterMetricUtils",
    "WAWebNewsletterRoleDataProcessors",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return c(e, [
        o("WAWebNewsletterInsightDeltaProcessors").REACH_WITH_DELTA_PROCESSOR,
        o("WAWebNewsletterInsightDeltaProcessors").NET_FOLLOWS_PROCESSOR,
      ]);
    }
    function u(e) {
      return c(e, [
        o("WAWebNewsletterInsightDeltaProcessors").REACH_WITH_DELTA_PROCESSOR,
        o("WAWebNewsletterRoleDataProcessors").REACH_BY_ROLE_PROCESSOR,
        o("WAWebNewsletterInsightCountryDataProcessors")
          .REACH_BY_COUNTRY_PROCESSOR,
        o("WAWebNewsletterInsightDeltaProcessors")
          .FOLLOWER_WITH_DELTA_PROCESSOR,
        o("WAWebNewsletterInsightCountryDataProcessors")
          .FOLLOWER_BY_COUNTRY_PROCESSOR,
        o("WAWebNewsletterGrowthChartProcessors").FOLLOWER_GROWTH_PROCESSOR,
      ]);
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebChatGetters").getIsNewsletter(t))
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[getAndUpdateNewsletterInsights] non-newsletter chat",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("getting-insights-for-non-newsletter"),
              r("err")("getting-insights-for-non-newsletter")
            );
          if (
            o("WAWebNewsletterGatingUtils").canFetchProducerInsights(
              t.newsletterMetadata,
            )
          ) {
            var a = o("WAWebNewsletterMetricUtils").getUniqueMetricRequests(n),
              i = o("WAJids").toNewsletterJid(t.id.toJid()),
              l = { newsletterJid: i, requestedMetrics: a },
              s = yield o("WAWebNewsletterInsightsJob").getNewsletterInsights(
                l,
              ),
              u = s.dataStatus,
              c = s.lastUpdateTime,
              d = s.metricValueMap,
              m = n.map(function (e) {
                return e.process(d);
              }),
              p = {
                id: t.id,
                rangeStart: o(
                  "WAWebNewsletterMetricUtils",
                ).getInsightPeriodStart(c),
                rangeEnd: c,
                dataStatus: u,
              };
            (Object.assign.apply(Object, [p].concat(m)),
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.updateNewsletterInsights({
                newsletter: t,
                insights: p,
              }));
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.populateNewsletterTileInsights = s),
      (l.populateNewsletterTabInsights = u));
  },
  98,
);
