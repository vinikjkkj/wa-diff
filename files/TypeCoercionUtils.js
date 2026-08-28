__d(
  "TypeCoercionUtils",
  [
    "AdAccountGraphIDUtils",
    "AdsInsightsMetricsCategoryType",
    "DateTime",
    "FBLogger",
    "URI",
    "compactMap",
    "enumUtils",
    "filterNulls",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return (
        e == null &&
          r("FBLogger")("relay_ads_manager")
            .blameToPreviousFile()
            .mustfix(
              "Expected non nullable value in %s, got %s on field %s",
              n,
              e,
              t,
            ),
        e
      );
    }
    function u(e) {
      return e != null ? e : void 0;
    }
    function c(e) {
      return e === 0 ? null : e;
    }
    function d(e) {
      return e == null ? e : g(e.toString());
    }
    function m(e) {
      return e == null ? e : Number(e);
    }
    function p(e) {
      return e === "0" ? void 0 : e;
    }
    function _(e) {
      return e != null ? e : 0;
    }
    function f(e) {
      return e != null ? e : "0";
    }
    function g(e) {
      return e == null || e === "" ? void 0 : e;
    }
    function h(e) {
      if (e != null)
        return Object.values(e).every(function (e) {
          return e === void 0;
        })
          ? void 0
          : e;
    }
    function y(e) {
      if (Array.isArray(e)) {
        var t = r("filterNulls")(e);
        return t.length > 0 ? t : void 0;
      }
    }
    function C(e, t) {
      return (
        t === void 0 && (t = 0),
        r("DateTime").create(e, t).toISOString()
      );
    }
    function b(e, t) {
      return (
        t === void 0 && (t = 0),
        e == null || t == null ? void 0 : C(e, t)
      );
    }
    function v(e) {
      return e == null ? void 0 : parseInt(e.split(":")[0], 10);
    }
    function S(e) {
      return {
        id: s(e.id, "data.id", i.id),
        name: s(e.name, "data.name", i.id),
      };
    }
    function R(e) {
      return e ? S(e) : void 0;
    }
    function L(e) {
      return y(
        e.map(function (e) {
          return S(e);
        }),
      );
    }
    function E(e) {
      return {
        id: s(e == null ? void 0 : e.id, "data.id", i.id),
        name: s(e == null ? void 0 : e.name, "data.name", i.id),
      };
    }
    function k(e) {
      if (h(e) != null) return E(e);
    }
    function I(e) {
      var t = [0, 1, 2, 3, 4, 5, 6],
        n = r("compactMap")(e.days, function (e) {
          var n;
          return (n = t.find(function (t) {
            return t === e;
          })) != null
            ? n
            : null;
        });
      return {
        days: n,
        end_minute: s(e.end_minute, "schedule.end_minute", i.id),
        start_minute: s(e.start_minute, "schedule.start_minute", i.id),
        timezone_type:
          e.timezone_type === "USER_TIME_ZONE" ? "USER" : "ADVERTISER",
      };
    }
    function T(e) {
      var t;
      return e != null
        ? h({
            high_demand_periods: e.high_demand_periods.map(function (e) {
              var t,
                n = {
                  budget_value: s(e.budget_value, "period.budget_value", i.id),
                  budget_value_type: s(
                    e.budget_value_type,
                    "period.budget_value_type",
                    i.id,
                  ),
                  id: s(e.id, "period.id", i.id),
                  recurrence_type:
                    (t = e.recurrence_type) != null ? t : "WEEKLY",
                  time_end: b(e.time_end),
                  time_start: C(s(e.time_start, "period.time_start", i.id)),
                  weekly_schedule: y(
                    e.weekly_schedule.map(function (e) {
                      return I(e);
                    }),
                  ),
                };
              return e.study_id != null
                ? babelHelpers.extends({}, n, {
                    study_id: s(e.study_id, "period.study_id", i.id),
                  })
                : n;
            }),
            is_enabled:
              (t = e == null ? void 0 : e.is_enabled) != null ? t : !1,
          })
        : void 0;
    }
    function D(e) {
      return h(
        (e != null ? e : []).reduce(function (e, t) {
          return (
            (t == null ? void 0 : t.key) != null &&
              (t == null ? void 0 : t.value) != null &&
              (e[t.key] = t.value),
            e
          );
        }, {}),
      );
    }
    function x(e) {
      var t;
      if (e != null) {
        var n = e.value_rule_set;
        return {
          value_rule_set:
            n != null
              ? {
                  is_default_setting: n.is_default_setting,
                  name: n.name,
                  product_type: n.product_type,
                  rules: ((t = n.rules) != null ? t : []).map(function (e) {
                    var t;
                    return {
                      adjust_sign: e.adjust_sign,
                      adjust_value: e.adjust_value,
                      criterias: ((t = e.criterias) != null ? t : []).map(
                        function (e) {
                          return {
                            criteria_type: e.criteria_type,
                            criteria_value_types: e.criteria_value_types,
                            criteria_values: e.criteria_values,
                            id: e.id,
                            operator: e.operator,
                          };
                        },
                      ),
                      id: e.id,
                      name: e.name,
                    };
                  }),
                  status: n.status,
                  value_rule_set_id: n.value_rule_set_id,
                }
              : null,
        };
      }
    }
    function $(e) {
      return e.reduce(function (e, t) {
        var n,
          r = t.country_code,
          o = m(t.value);
        return r == null || o == null
          ? e
          : babelHelpers.extends({}, e, ((n = {}), (n[r] = o), n));
      }, {});
    }
    function P(e) {
      if (e != null)
        return y(
          e.map(function (e) {
            return {
              column_categories: s(
                e.column_categories.map(function (e) {
                  return s(
                    r("getJSEnumSafe")(r("AdsInsightsMetricsCategoryType"), e),
                    "column_categories[]",
                    i.id,
                  );
                }),
                "column_categories",
                i.id,
              ),
              column_definition: s(
                e.column_definition,
                "column_categories[].column_definition",
                i.id,
              ),
              column_id: s(e.column_id, "column_categories[].column_id", i.id),
              column_name: s(
                e.column_name,
                "column_categories[].column_name",
                i.id,
              ),
              help_link: s(e.help_link, "column_categories[].help_link", i.id),
            };
          }),
        );
    }
    function N(e) {
      if (e != null)
        return Object.values(e).every(function (e) {
          return e == null || (Array.isArray(e) && e.length === 0);
        })
          ? void 0
          : e;
    }
    function M(e) {
      return e != null && e !== ""
        ? o("AdAccountGraphIDUtils").castStringToGraphID(
            "act_" + s(e, "id", i.id),
          )
        : void 0;
    }
    function w(t) {
      var n = g(t);
      if (n != null) return new (e || (e = r("URI")))(n);
    }
    function A(e) {
      return e != null ? e === "TIER_0" : void 0;
    }
    function F(e) {
      return e != null ? e === "TIER_1" : void 0;
    }
    function O(e) {
      return s(e, "url", i.id);
    }
    function B(e) {
      return s(e, "input", i.id);
    }
    function W(e, t, n, a) {
      var i = o("enumUtils").coerce(e, t);
      return (
        i == null &&
          r("FBLogger")("relay_ads_manager")
            .blameToPreviousFile()
            .mustfix(
              "Expected to coerce %s to non nullable value in %s on field %s",
              e,
              a,
              n,
            ),
        i
      );
    }
    ((l.coerceNonMaybeValue = s),
      (l.coerceOptionalValue = u),
      (l.coerceZeroToNull = c),
      (l.coerceMaybeNumberToString = d),
      (l.coerceMaybeStringToNumber = m),
      (l.coerceZeroToUndefined = p),
      (l.coerceNumbertoZeroOrNumber = _),
      (l.coerceMaybeFBIDtoZeroOrFBID = f),
      (l.coerceEmptyStringToUndefined = g),
      (l.coerceObjectToUndefined = h),
      (l.coerceEmptyArrayToUndefined = y),
      (l.coerceTimestampToISOString = C),
      (l.convertTimestampToString = b),
      (l.coerceGmtOffsetToOffsetHours = v),
      (l.coerceIDNamePair = S),
      (l.coerceMaybeIDNamePair = R),
      (l.coerceIDNamePairArray = L),
      (l.coerceAccountIDNamePair = E),
      (l.coerceMaybeAccountIDNamePair = k),
      (l.convertScheduleToDayPart = I),
      (l.coerceTimeSuggestion = T),
      (l.coerceNamingTemplateCustomFields = D),
      (l.coerceValueRulesSpec = x),
      (l.coerceToReachFrequencyCountrySpecObject = $),
      (l.coerceToColumnPreset = P),
      (l.coerceObjectWithNullAndEmptyArraysToUndefined = N),
      (l.coerceIDToAccountID = M),
      (l.coerceStringToURI = w),
      (l.coerceTrustTierIsZero = A),
      (l.coerceTrustTierIsOne = F),
      (l.coerceMaybeStringToIXValue = O),
      (l.coerceMaybeStringToFBT = B),
      (l.coerceNonMaybeEnum = W));
  },
  98,
);
