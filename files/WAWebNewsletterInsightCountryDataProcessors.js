__d(
  "WAWebNewsletterInsightCountryDataProcessors",
  [
    "WAWebCountriesUtils",
    "WAWebNewsletterMetricUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 10;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebCountriesUtils").getCountries({
            filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
              .WHATSAPP_REGISTRATION,
          });
          return new Map(e);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u(),
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = e.reduce(function (e, n) {
        var r = n.country,
          o = n.value;
        return (
          r == null ||
            o < s ||
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
    var _ = {
        getMetrics: function () {
          var t;
          return [
            {
              id: (t = o("WAWebNewsletterMetricUtils"))
                .NewsletterInsightMetricQuery.UniqueVisitorsOverPeriod,
              type: "UNIQUE_VISITORS",
              group_by: { number_of_days: t.INSIGHT_DAYS_COVERED },
            },
            {
              id: t.NewsletterInsightMetricQuery
                .UniqueVisitorOverPeriodByCountry,
              type: "UNIQUE_VISITORS",
              group_by: { number_of_days: t.INSIGHT_DAYS_COVERED, country: !0 },
              limit: e,
            },
          ];
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
                .UniqueVisitorOverPeriodByCountry,
            )) != null
              ? n
              : [];
          return { reachByCountry: p(a, r) };
        },
      },
      f = {
        getMetrics: function () {
          var t;
          return [
            {
              id: (t = o("WAWebNewsletterMetricUtils"))
                .NewsletterInsightMetricQuery.FollowersOverPeriod,
              type: "FOLLOWER",
              group_by: { number_of_days: t.INSIGHT_DAYS_COVERED },
            },
            {
              id: t.NewsletterInsightMetricQuery.FollowersOverPeriodByCountry,
              type: "FOLLOWER",
              group_by: { number_of_days: t.INSIGHT_DAYS_COVERED, country: !0 },
              limit: e,
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
          return { followersByCountry: p(a, r) };
        },
      };
    ((l.getCountryBarValues = d),
      (l.REACH_BY_COUNTRY_PROCESSOR = _),
      (l.FOLLOWER_BY_COUNTRY_PROCESSOR = f));
  },
  98,
);
