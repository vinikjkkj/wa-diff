__d(
  "WAWebPopulateNewsletterInsightsAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterExtendedGatingUtils",
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
      return m(e, function () {
        return u(e);
      });
    }
    function u(e) {
      var t = o(
        "WAWebNewsletterExtendedGatingUtils",
      ).isNewsletterStatusAdminInsightsEnabled(e.newsletterMetadata)
        ? [
            o("WAWebNewsletterInsightDeltaProcessors")
              .REACH_WITH_DELTA_PROCESSOR,
            o("WAWebNewsletterInsightDeltaProcessors")
              .REACH_ALL_WITH_DELTA_PROCESSOR,
          ]
        : [
            o("WAWebNewsletterInsightDeltaProcessors")
              .REACH_WITH_DELTA_PROCESSOR,
          ];
      return [].concat(t, [
        o("WAWebNewsletterInsightDeltaProcessors").NET_FOLLOWS_PROCESSOR,
      ]);
    }
    function c(e) {
      return m(e, function () {
        return d(e);
      });
    }
    function d(e) {
      var t = [
        o("WAWebNewsletterInsightDeltaProcessors").REACH_WITH_DELTA_PROCESSOR,
        o("WAWebNewsletterRoleDataProcessors").REACH_BY_ROLE_PROCESSOR,
        o("WAWebNewsletterInsightCountryDataProcessors")
          .REACH_BY_COUNTRY_PROCESSOR,
        o("WAWebNewsletterInsightDeltaProcessors")
          .FOLLOWER_WITH_DELTA_PROCESSOR,
        o("WAWebNewsletterInsightCountryDataProcessors")
          .FOLLOWER_BY_COUNTRY_PROCESSOR,
        o("WAWebNewsletterGrowthChartProcessors").FOLLOWER_GROWTH_PROCESSOR,
      ];
      return (
        o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterStatusAdminInsightsEnabled(e.newsletterMetadata) &&
          t.push(
            o("WAWebNewsletterInsightDeltaProcessors")
              .REACH_ALL_WITH_DELTA_PROCESSOR,
            o("WAWebNewsletterRoleDataProcessors").REACH_ALL_BY_ROLE_PROCESSOR,
            o("WAWebNewsletterInsightCountryDataProcessors")
              .REACH_ALL_BY_COUNTRY_PROCESSOR,
            o("WAWebNewsletterInsightDeltaProcessors")
              .REACH_CHANNEL_STATUS_WITH_DELTA_PROCESSOR,
            o("WAWebNewsletterRoleDataProcessors")
              .REACH_CHANNEL_STATUS_BY_ROLE_PROCESSOR,
            o("WAWebNewsletterInsightCountryDataProcessors")
              .REACH_CHANNEL_STATUS_BY_COUNTRY_PROCESSOR,
          ),
        t
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
            var a = n(),
              i = o("WAWebNewsletterMetricUtils").getUniqueMetricRequests(a),
              l = o("WAJids").toNewsletterJid(t.id.toJid()),
              s = { newsletterJid: l, requestedMetrics: i },
              u = yield o("WAWebNewsletterInsightsJob").getNewsletterInsights(
                s,
              ),
              c = u.dataStatus,
              d = u.lastUpdateTime,
              m = u.metricValueMap,
              p = a.map(function (e) {
                return e.process(m);
              }),
              _ = p.reduce(
                function (e, t) {
                  return babelHelpers.extends({}, e, t);
                },
                {
                  id: t.id,
                  rangeStart: o(
                    "WAWebNewsletterMetricUtils",
                  ).getInsightPeriodStart(d),
                  rangeEnd: d,
                  dataStatus: c,
                },
              );
            yield o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.updateNewsletterInsights({
              newsletter: t,
              insights: _,
            });
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.populateNewsletterTileInsights = s),
      (l.populateNewsletterTabInsights = c));
  },
  98,
);
