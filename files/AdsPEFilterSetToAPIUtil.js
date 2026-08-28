__d(
  "AdsPEFilterSetToAPIUtil",
  [
    "AdsAPIOptimizationGoals",
    "AdsConversionLocationLabels",
    "AdsFunnelStageObjectivesConfig",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsInsightsGroupDimensionConfigTypes",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsPEAnomalyDetectionFilterUtil",
    "AdsPEFilterFieldsToAPIFieldsMap",
    "AdsRegulatedCategory",
    "DateConsts",
    "FBLogger",
    "adsMgmtDraftFilterValues",
    "customMetricFilteringUtils",
    "filterNulls",
    "getFilterFieldForLevel",
    "justknobx",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    r("requireWeak")("PixelOffsiteCustomEventDetails", function (t) {
      e = t.PixelOffsiteCustomEventDetails;
    });
    var s = ["campaignGroup", "campaign", "adgroup", "uniqueAdCreative"];
    function u(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var o = c(n);
        if (o && f(o)) {
          var a = h(o);
          t.push.apply(t, a);
        } else o && t.push(o);
      }
      return r("filterNulls")(t);
    }
    function c(e) {
      if (!e) return e;
      var t = S(e);
      return !t || !t.field || ((t.field = R(t.field)), !t.field) ? null : t;
    }
    function d(e) {
      if (!Array.isArray(e == null ? void 0 : e.value)) return e;
      var t = e.value,
        n = t.includes(r("AdsAPIOptimizationGoals").VALUE),
        o = t.includes(r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND);
      return (
        n && !o
          ? (t = t.concat([r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND]))
          : !n && o && (t = t.concat([r("AdsAPIOptimizationGoals").VALUE])),
        babelHelpers.extends({}, e, { value: t })
      );
    }
    function m(e) {
      if (!Array.isArray(e == null ? void 0 : e.value)) return e;
      var t = r("AdsFunnelStageObjectivesConfig"),
        n = new Set(),
        o = [];
      for (var a of e.value) {
        var i = t[a];
        if (i != null) for (var l of i) n.has(l) || (n.add(l), o.push(l));
      }
      return babelHelpers.extends({}, e, { value: o });
    }
    function p(e) {
      if (
        !Array.isArray(e == null ? void 0 : e.value) ||
        !e.value.includes("HAS_SPECIAL_AD_CATEGORY")
      )
        return e;
      var t = Object.keys(r("AdsRegulatedCategory")),
        n = new Set(),
        o = [];
      for (var a of e.value)
        if (a === "HAS_SPECIAL_AD_CATEGORY")
          for (var i of t) i !== "NONE" && !n.has(i) && (n.add(i), o.push(i));
        else n.has(a) || (n.add(a), o.push(a));
      return babelHelpers.extends({}, e, { value: o });
    }
    function _(e) {
      if (!Array.isArray(e == null ? void 0 : e.value)) return e;
      var t = "sequenced",
        n = "7d_sequenced",
        r = e.value.includes(t),
        o = e.value.includes(n);
      if (r || o) {
        var a = r
            ? e.value.filter(function (e) {
                return e !== t;
              })
            : [].concat(e.value),
          i = ["1d_sequenced", "7d_sequenced", "28d_sequenced"],
          l = new Set(a);
        for (var s of i) l.has(s) || a.push(s);
        return babelHelpers.extends({}, e, { value: a });
      }
      return e;
    }
    function f(e) {
      var t = ["campaign.name", "adset.name", "ad.name"];
      return t.includes(e.field) && e.operator === "CONTAINS_ALL";
    }
    function g(e) {
      if (Array.isArray(e))
        return e.map(function (e) {
          return String(e).trim();
        });
      if (typeof e != "string" || e.trim() === "") return [];
      try {
        return JSON.parse(e);
      } catch (e) {
        return [];
      }
    }
    function h(e) {
      try {
        var t = g(e.value);
        if (Array.isArray(t) && t.length > 0)
          return t.map(function (t) {
            return babelHelpers.extends({}, e, {
              operator: "CONTAIN",
              value: t,
            });
          });
      } catch (t) {
        var n = Array.isArray(e.value) ? JSON.stringify(e.value) : e.value;
        r("FBLogger")("ads").warn("Failed to parse name filter value: %s", n);
      }
      return typeof e.value == "string"
        ? [babelHelpers.extends({}, e, { value: e.value })]
        : [];
    }
    function y(e) {
      if (
        !Array.isArray(e.value) ||
        !e.value.includes(
          o("AdsInsightsGroupDimensionConfigTypes").NONE_DIMENSION_VALUE,
        )
      )
        return e;
      var t = e.value.filter(function (e) {
        return (
          e !== o("AdsInsightsGroupDimensionConfigTypes").NONE_DIMENSION_VALUE
        );
      });
      if (t.length === 0) {
        var n = Object.values(r("AdsConversionLocationLabels")).map(
          function (e) {
            return String(e);
          },
        );
        return babelHelpers.extends({}, e, { operator: "NOT_IN", value: n });
      }
      return babelHelpers.extends({}, e, { value: t });
    }
    function C(t) {
      if (
        !Array.isArray(t.value) ||
        !t.value.includes(
          o("AdsInsightsGroupDimensionConfigTypes").NONE_DIMENSION_VALUE,
        )
      )
        return t;
      var n = t.value.filter(function (e) {
        return (
          e !== o("AdsInsightsGroupDimensionConfigTypes").NONE_DIMENSION_VALUE
        );
      });
      if (n.length === 0) {
        if (e == null) return babelHelpers.extends({}, t, { value: n });
        var r = Object.keys(e);
        return babelHelpers.extends({}, t, { operator: "NOT_IN", value: r });
      }
      return babelHelpers.extends({}, t, { value: n });
    }
    var b = [3, 5, 6, 7, 8, 9, 10];
    function v(e) {
      if (!Array.isArray(e == null ? void 0 : e.value)) return e;
      var t = [],
        n = new Set();
      for (var r of e.value)
        if (r === "SHOPEE") for (var o of b) n.has(o) || (n.add(o), t.push(o));
        else {
          var a = typeof r == "string" ? parseInt(r, 10) : r;
          n.has(a) || (n.add(a), t.push(a));
        }
      return babelHelpers.extends({}, e, { value: t });
    }
    function S(e) {
      e: {
        if (
          e.field === "SEARCH_BY_CAMPAIGN_GROUP_ID" ||
          e.field === "SEARCH_BY_CAMPAIGN_GROUP_IDS" ||
          e.field === "SEARCH_BY_CAMPAIGN_ID" ||
          e.field === "SEARCH_BY_CAMPAIGN_IDS" ||
          e.field === "SEARCH_BY_ADGROUP_ID" ||
          e.field === "SEARCH_BY_ADGROUP_IDS"
        )
          return L(e);
        if (
          e.field === "CAMPAIGN_GROUP_DELIVERY_INFO" ||
          e.field === "CAMPAIGN_DELIVERY_INFO" ||
          e.field === "ADGROUP_DELIVERY_INFO"
        )
          return T(I(k(E(e))));
        if (
          e.field === "CAMPAIGN_GROUP_DELIVERY_STATUS" ||
          e.field === "CAMPAIGN_DELIVERY_STATUS" ||
          e.field === "ADGROUP_DELIVERY_STATUS"
        )
          return D(e);
        if (
          e.field === "CAMPAIGN_GROUP_CHANGED" ||
          e.field === "CAMPAIGN_CHANGED" ||
          e.field === "ADGROUP_CHANGED" ||
          e.field === "CAMPAIGN_GROUP_START_TIME" ||
          e.field === "CAMPAIGN_START_TIME" ||
          e.field === "CAMPAIGN_GROUP_END_TIME" ||
          e.field === "CAMPAIGN_END_TIME"
        )
          return $(e);
        if (e.field === "adset.optimization_goal") return d(e);
        if (e.field === "FUNNEL_STAGE") return m(e);
        if (e.field === "CONVERSION_LOCATION") {
          if (
            o(
              "AdsMgmt2026H1ExperimentUtils",
            ).getIsAccountInCAI2026H1GroupingWithoutExposure()
          )
            return y(e);
          break e;
        }
        if (e.field === "CAMPAIGN_CUSTOM_EVENT_TYPE") {
          if (
            o(
              "AdsMgmt2026H1ExperimentUtils",
            ).getIsAccountInCAI2026H1GroupingWithoutExposure()
          )
            return C(e);
          break e;
        }
        if (e.field === "SPECIAL_AD_CATEGORIES") return p(e);
        if (e.field === "ATTRIBUTION_SETTING") return _(e);
        if (e.field === "BUY_WITH_INTEGRATION_PARTNER") return v(e);
        if (
          e.field === "CAMPAIGN_DAILY_BUDGET" ||
          e.field === "CAMPAIGN_LIFETIME_BUDGET" ||
          e.field === "CAMPAIGN_GROUP_DAILY_BUDGET" ||
          e.field === "CAMPAIGN_GROUP_LIFETIME_BUDGET"
        ) {
          if (e.operator === "LESS_THAN")
            return babelHelpers.extends({}, e, {
              operator: "IN_RANGE",
              value: [1, e.value - 1],
            });
          break e;
        }
        break e;
      }
      return e.field === "SEARCH_BY_FUNDING_PAGE_IDS" ||
        e.field === "SEARCH_BY_PRODUCT_CATALOG_IDS"
        ? L(e)
        : e;
    }
    function R(e) {
      var t = r("AdsPEFilterFieldsToAPIFieldsMap"),
        n = t[e];
      if (!n) {
        if (o("customMetricFilteringUtils").isValidCustomMetricWithLevel(e))
          return e;
        r("FBLogger")("ads").warn("Filter field %s is not supported yet", e);
      }
      return n;
    }
    function L(e) {
      var t = babelHelpers.extends({}, e);
      return (
        e.operator === "EQUAL" || e.operator === "ANY"
          ? (t.operator = "IN")
          : (e.operator === "NOT_EQUAL" || e.operator === "NONE") &&
            (t.operator = "NOT_IN"),
        typeof e.value == "string" &&
          (t.value = e.value
            .split(/[\s,]+/)
            .filter(function (e) {
              return e !== "";
            })
            .map(function (e) {
              return e.replace(/^[a-z]+:/i, "");
            })),
        t
      );
    }
    function E(e) {
      return (
        (e.value = e.value.filter(function (e) {
          return !r("adsMgmtDraftFilterValues").has(e);
        })),
        e
      );
    }
    function k(e) {
      return (
        Array.isArray(e.value) &&
          e.value.indexOf("archived") > -1 &&
          e.value.indexOf("permanently_deleted") === -1 &&
          e.value.push("permanently_deleted"),
        e
      );
    }
    function I(e) {
      return (
        Array.isArray(e.value) &&
          e.value.indexOf("completed") > -1 &&
          e.value.indexOf("recently_completed") === -1 &&
          e.value.push("recently_completed"),
        e
      );
    }
    function T(e) {
      return (
        Array.isArray(e.value) &&
          e.value.indexOf("rejected") > -1 &&
          e.value.indexOf("recently_rejected") === -1 &&
          e.value.push("recently_rejected"),
        e
      );
    }
    function D(e) {
      return !r("justknobx")._("5430") ||
        !Array.isArray(e.value) ||
        !e.value.includes("active") ||
        e.value.includes("warning")
        ? e
        : babelHelpers.extends({}, e, {
            value: [].concat(e.value, ["warning"]),
          });
    }
    function x(e) {
      return typeof e == "string" ? parseInt(e, 10) : e;
    }
    function $(e) {
      var t = e.value,
        n = 0,
        r = [];
      switch (
        (Array.isArray(t)
          ? (r = t.map(x).map(function (e) {
              return e / o("DateConsts").MS_PER_SEC;
            }))
          : (n = x(t)),
        e.operator)
      ) {
        case "AFTER":
          return {
            field: e.field,
            operator: "GREATER_THAN",
            value: n / o("DateConsts").MS_PER_SEC,
          };
        case "BEFORE":
          return {
            field: e.field,
            operator: "LESS_THAN",
            value: n / o("DateConsts").MS_PER_SEC,
          };
        case "IN_RANGE":
          return { field: e.field, operator: "IN_RANGE", value: r };
      }
      return null;
    }
    function P(e, t) {
      var n;
      return (
        t ? (n = [].concat(t.values, [e])) : (n = [e]),
        new (r("AdsGenericFilterSet"))(n)
      );
    }
    function N(e, t, n) {
      var o = new (r("AdsGenericFilter"))(
        r("getFilterFieldForLevel")(t),
        "IN",
        n,
      );
      return P(o, e);
    }
    function M(e, t, n) {
      var r = new Map(),
        a = o(
          "AdsPEAnomalyDetectionFilterUtil",
        ).removeAnomalyFiltersFromAdsGenericFilterSet(e);
      if (
        (s.forEach(function (e) {
          return r.set(e, a);
        }),
        t === "campaign" && n.get("campaignGroup"))
      ) {
        var i = N(a, "campaignGroup", n.get("campaignGroup"));
        (r.set("campaign", i), r.set("adgroup", i));
      } else if (
        t === "adgroup" &&
        (n.get("campaignGroup") || n.get("campaign"))
      ) {
        var l = n.get("campaign") ? "campaign" : "campaignGroup",
          u = N(a, l, n.get(l));
        r.set("adgroup", u);
      } else if (
        t === "uniqueAdCreative" &&
        (n.get("campaignGroup") || n.get("campaign") || n.get("adgroup"))
      ) {
        var c = n.get("adgroup")
            ? "adgroup"
            : n.get("campaign")
              ? "campaign"
              : "campaignGroup",
          d = N(a, c, n.get(c));
        r.set("uniqueAdCreative", d);
      }
      return r;
    }
    function w(e, t) {
      var n = e;
      return (
        t.forEach(function (e, r) {
          e && (n = N(n, r, t.get(r)));
        }),
        n
      );
    }
    ((l.transformToAPISpec = u),
      (l.transformFilterToAPISpec = c),
      (l.addFilterToFilterSet = P),
      (l.addSelectionFilter = N),
      (l.computeChildFilterSetWithSelectedParentIDs = M),
      (l.computeFilterSetWithSelectedParentAndChildIDs = w));
  },
  98,
);
