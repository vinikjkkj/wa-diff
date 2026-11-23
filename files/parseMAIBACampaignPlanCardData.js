__d(
  "parseMAIBACampaignPlanCardData",
  [
    "CurrencyConfig",
    "FBLogger",
    "MAIBACampaignPlanCardDataTypes",
    "MAIBACampaignPlanTypes",
    "err",
    "objectHasOwn",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16384;
    function s(e, t, n) {
      var o = t === void 0 ? "is missing" : n;
      throw (
        r("FBLogger")("maiba_campaign_plan").warn(
          "Refused card_data: %s %s",
          e,
          o,
        ),
        r("err")("Refused card_data: %s %s", e, o)
      );
    }
    function u(t) {
      if (t.length > e)
        return s("card_data", t, "is over " + e + " characters");
      try {
        return JSON.parse(t);
      } catch (e) {
        return s("card_data", t, "is not JSON");
      }
    }
    function c(e, t) {
      return e == null || typeof e != "object" || Array.isArray(e)
        ? s(t, e, "is not an object")
        : e;
    }
    function d(e, t) {
      return typeof e == "string" ? e : s(t, e, "is not a string");
    }
    function m(e, t) {
      return typeof e == "number" && Number.isSafeInteger(e)
        ? e
        : s(t, e, "is not a safe integer");
    }
    function p(e, t) {
      return typeof e == "boolean" ? e : s(t, e, "is not a boolean");
    }
    function _(e, t, n) {
      var r;
      return (r = e.find(function (e) {
        return e === t;
      })) != null
        ? r
        : s(n, t, "is outside its list");
    }
    function f(e, t, n) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return n(e, t + "[]");
          })
        : s(t, e, "is not a list");
    }
    function g(e, t, n) {
      return e === null ? null : n(e, t);
    }
    function h(e, t, n) {
      return e === void 0 ? null : n(e, t);
    }
    function y(e, t) {
      var n = d(e, t);
      return /^\d{4}-\d{2}-\d{2}$/.test(n) ? n : s(t, n, "is not YYYY-MM-DD");
    }
    function C(e, t) {
      var n = d(e, t);
      return r("objectHasOwn")(r("CurrencyConfig").allCurrenciesByCode, n)
        ? n
        : s(t, n, "is not a known currency");
    }
    function b(e, t) {
      var n = c(e, t);
      return {
        name: d(n.name, t + ".name"),
        radius: g(n.radius, t + ".radius", function (e, t) {
          var n = c(e, t),
            r = n.unit,
            a = n.value;
          return {
            unit: _(
              o("MAIBACampaignPlanCardDataTypes").RADIUS_UNITS,
              r,
              t + ".unit",
            ),
            value: m(a, t + ".value"),
          };
        }),
      };
    }
    var v = ["geo_markets", "zips", "neighborhoods", "subcities", "places"];
    function S(e, t, n) {
      return t.flatMap(function (t) {
        var r;
        return (r = h(e[t], n + "." + t, function (e, t) {
          return f(e, t, b);
        })) != null
          ? r
          : [];
      });
    }
    function R(e, t) {
      var n,
        r,
        a = c(e, t),
        i = t + ".excluded_geo_locations",
        l =
          a.excluded_geo_locations == null
            ? null
            : c(a.excluded_geo_locations, i);
      return {
        advantageAudience:
          (n = h(a.advantage_audience, t + ".advantage_audience", p)) != null
            ? n
            : !0,
        ageMin: g(a.age_min, t + ".age_min", m),
        cities: f(a.cities, t + ".cities", b),
        countries: f(a.countries, t + ".countries", d),
        customLocations: h(
          a.custom_locations,
          t + ".custom_locations",
          function (e, t) {
            return f(e, t, b);
          },
        ),
        excludedCountries:
          (r = h(
            l == null ? void 0 : l.countries,
            i + ".countries",
            function (e, t) {
              return f(e, t, d);
            },
          )) != null
            ? r
            : [],
        excludedCustomAudiences: f(
          a.excluded_custom_audiences,
          t + ".excluded_custom_audiences",
          d,
        ),
        excludedPlaces:
          l == null
            ? []
            : S(l, ["regions", "cities"].concat(v, ["custom_locations"]), i),
        otherLocations: S(a, v, t),
        regions: f(a.regions, t + ".regions", b),
        suggestedAgeRange: g(
          a.suggested_age_range,
          t + ".suggested_age_range",
          function (e, t) {
            var n = c(e, t),
              r = n.hi,
              o = n.lo;
            return { hi: m(r, t + ".hi"), lo: m(o, t + ".lo") };
          },
        ),
        suggestedCustomAudiences: f(
          a.suggested_custom_audiences,
          t + ".suggested_custom_audiences",
          d,
        ),
        suggestedGenders: f(
          a.suggested_genders,
          t + ".suggested_genders",
          function (e, t) {
            return _(o("MAIBACampaignPlanCardDataTypes").GENDERS, e, t);
          },
        ),
        suggestedInterests: f(
          a.suggested_interests,
          t + ".suggested_interests",
          d,
        ),
        suggestedLocales: h(
          a.suggested_locales,
          t + ".suggested_locales",
          function (e, t) {
            return f(e, t, d);
          },
        ),
      };
    }
    function L(e, t) {
      var n = c(e, t);
      return {
        text: d(n.text, t + ".text"),
        variant: _(
          o("MAIBACampaignPlanTypes").WHY_EVIDENCE_TOOLTIP_VARIANTS,
          n.variant,
          t + ".variant",
        ),
      };
    }
    function E(e, t) {
      var n = d(e, t);
      return n !== "" ? n : s(t, n, "is empty");
    }
    function k(e, t) {
      var n = c(e, t),
        r = h(n.results, t + ".results", function (e, t) {
          var n = c(e, t),
            r = m(n.low, t + ".low"),
            a = m(n.high, t + ".high");
          return (
            (r < 0 || r > a) && s(t + ".low", r, "is not between 0 and " + a),
            {
              high: a,
              low: r,
              period: _(
                o("MAIBACampaignPlanTypes").WHY_FORECAST_PERIODS,
                n.period,
                t + ".period",
              ),
              unit: E(n.unit, t + ".unit"),
            }
          );
        }),
        a = h(n.cost, t + ".cost", function (e, t) {
          var n = c(e, t),
            r = m(n.amount_minor, t + ".amount_minor");
          return (
            r <= 0 && s(t + ".amount_minor", r, "is not above 0"),
            {
              amountMinor: r,
              currencyCode: C(n.currency_code, t + ".currency_code"),
              unit: E(n.unit, t + ".unit"),
            }
          );
        });
      return a == null && r == null
        ? null
        : { cost: a != null ? a : void 0, results: r != null ? r : void 0 };
    }
    function I(e, t) {
      var n,
        r,
        a = c(e, t),
        i = h(a.evidence_tooltips, t + ".evidence_tooltips", function (e, t) {
          return f(e, t, L);
        }),
        l = h(a.forecast, t + ".forecast", k);
      return babelHelpers.extends(
        {},
        i === null ? {} : { evidenceTooltips: i },
        {
          forecast: l != null ? l : void 0,
          label: d(a.label, t + ".label"),
          outcomeForecasts: f(a.outcome_forecasts, t + ".outcome_forecasts", d),
          source:
            (n = o("MAIBACampaignPlanCardDataTypes").WHY_SOURCES.find(
              function (e) {
                return e === a.source;
              },
            )) != null
              ? n
              : null,
          text: d(a.text, t + ".text"),
          topic:
            a.topic === void 0
              ? s(t + ".topic", a.topic, "is missing")
              : (r = o("MAIBACampaignPlanCardDataTypes").WHY_TOPICS.find(
                    function (e) {
                      return e === a.topic;
                    },
                  )) != null
                ? r
                : null,
        },
      );
    }
    function T(e) {
      if (e == null) return null;
      try {
        var t = c(u(e), "card_data"),
          n = c(t.budget, "budget"),
          r = c(t.flight, "flight"),
          a = c(t.goal, "goal");
        return {
          budget: {
            amountMinor: m(n.amount_minor, "budget.amount_minor"),
            currencyCode: C(n.currency_code, "budget.currency_code"),
            type: _(
              o("MAIBACampaignPlanCardDataTypes").BUDGET_TYPES,
              n.type,
              "budget.type",
            ),
          },
          campaignGroupName: g(t.campaign_name, "campaign_name", d),
          campaigns: f(t.ad_sets, "ad_sets", R),
          destinationType:
            t.destination_type === void 0
              ? null
              : _(
                  o("MAIBACampaignPlanCardDataTypes").DESTINATION_TYPES,
                  t.destination_type,
                  "destination_type",
                ),
          flight: {
            days: g(r.days, "flight.days", m),
            end: g(r.end, "flight.end", y),
            start: y(r.start, "flight.start"),
          },
          goal: {
            kind: _(
              o("MAIBACampaignPlanCardDataTypes").GOAL_KINDS,
              a.kind,
              "goal.kind",
            ),
            text: d(a.text, "goal.text"),
          },
          objective: _(
            o("MAIBACampaignPlanCardDataTypes").OBJECTIVES,
            t.objective,
            "objective",
          ),
          optimizationGoal: _(
            o("MAIBACampaignPlanCardDataTypes").OPTIMIZATION_GOALS,
            t.optimization_goal,
            "optimization_goal",
          ),
          why: f(t.why, "why", I),
        };
      } catch (e) {
        return null;
      }
    }
    l.default = T;
  },
  98,
);
