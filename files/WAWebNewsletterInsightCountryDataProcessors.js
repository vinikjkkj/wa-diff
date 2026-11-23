__d(
  "WAWebNewsletterInsightCountryDataProcessors",
  ["WAWebCountriesUtils", "WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 10,
      u = 10;
    async function c() {
      var e = await o("WAWebCountriesUtils").getCountries({
        filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
          .WHATSAPP_REGISTRATION,
      });
      return new Map(e);
    }
    async function d(e) {
      var t = await c(),
        n = e.reduce(function (e, n) {
          var r = n.countryCode,
            o = n.percentage,
            a = n.value;
          if (r == null) return e;
          var i = t.get(r);
          if (i == null) return e;
          var l = Math.round((o + Number.EPSILON) * 1e4) / 1e4;
          return (e.push({ label: i, value: a, percentage: l, key: r }), e);
        }, []);
      return n;
    }
    function m(e, t) {
      var n = e.reduce(function (e, n) {
        var r = n.country,
          o = n.value;
        return (
          r == null ||
            o < u ||
            e.push({
              countryCode: r.toUpperCase(),
              percentage: o / t,
              value: o,
            }),
          e
        );
      }, []);
      return n.sort(function (e, t) {
        return t.value - e.value;
      });
    }
    function p(e, t, n, r) {
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
            babelHelpers.extends(
              {
                id: n,
                type: "UNIQUE_VISITORS",
                group_by: {
                  number_of_days: o("WAWebNewsletterMetricUtils")
                    .INSIGHT_DAYS_COVERED,
                  country: !0,
                },
                limit: s,
              },
              e === "CHANNEL" ? {} : { surface: e },
            ),
          ];
        },
        process: function (o) {
          var e,
            a,
            i = (e = o.get(t)) == null || (e = e[0]) == null ? void 0 : e.value;
          if (i == null) return {};
          var l = (a = o.get(n)) != null ? a : [],
            s = m(l, i);
          return r(s);
        },
      };
    }
    var _ = p(
        "CHANNEL",
        (e = o("WAWebNewsletterMetricUtils")).NewsletterInsightMetricQuery
          .UniqueVisitorsOverPeriod,
        e.NewsletterInsightMetricQuery.UniqueVisitorOverPeriodByCountry,
        function (e) {
          return { reachByCountryChannels: e };
        },
      ),
      f = p(
        "ALL",
        e.NewsletterInsightMetricQuery.UniqueVisitorsAllOverPeriod,
        e.NewsletterInsightMetricQuery.UniqueVisitorAllOverPeriodByCountry,
        function (e) {
          return { reachByCountryAll: e };
        },
      ),
      g = p(
        "CHANNEL_STATUS",
        e.NewsletterInsightMetricQuery.UniqueVisitorsChannelStatusOverPeriod,
        e.NewsletterInsightMetricQuery
          .UniqueVisitorChannelStatusOverPeriodByCountry,
        function (e) {
          return { reachByCountryChannelStatus: e };
        },
      ),
      h = {
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
              id: e.NewsletterInsightMetricQuery.FollowersOverPeriodByCountry,
              type: "FOLLOWER",
              group_by: { number_of_days: e.INSIGHT_DAYS_COVERED, country: !0 },
              limit: s,
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
                : e[0].value;
          if (r == null) return {};
          var a =
            (n = t.get(
              o("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery
                .FollowersOverPeriodByCountry,
            )) != null
              ? n
              : [];
          return { followersByCountry: m(a, r) };
        },
      };
    ((l.getCountryBarValues = d),
      (l.REACH_BY_COUNTRY_PROCESSOR = _),
      (l.REACH_ALL_BY_COUNTRY_PROCESSOR = f),
      (l.REACH_CHANNEL_STATUS_BY_COUNTRY_PROCESSOR = g),
      (l.FOLLOWER_BY_COUNTRY_PROCESSOR = h));
  },
  98,
);
