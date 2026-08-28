__d(
  "ActionFilterUtils",
  ["AdsGenericFilterSet", "AdsGenericFilterSetUtil", "AdsPEFilterFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "CAMPAIGN_GROUP_ACTION_TYPES",
        "CAMPAIGN_ACTION_TYPES",
        "ADGROUP_ACTION_TYPES",
      ],
      s = new Set(e),
      u = new Set(["CAMPAIGN_GROUP_ACTION_TYPES"]),
      c = new Set(["CAMPAIGN_ACTION_TYPES"]),
      d = new Set(["ADGROUP_ACTION_TYPES"]),
      m = new Set([4]),
      p = [
        "CAMPAIGN_GROUP_DELIVERY_STATUS",
        "CAMPAIGN_DELIVERY_STATUS",
        "ADGROUP_DELIVERY_STATUS",
      ];
    function _(e) {
      return f(e, new Set(p));
    }
    function f(e, t) {
      if (e == null) return !1;
      var n = e instanceof r("AdsGenericFilterSet") ? e.toAPI() : e;
      return n.some(function (e) {
        return (
          t.has(e.field) &&
          e.operator === "NOT_IN" &&
          Array.isArray(e.value) &&
          e.value.includes("draft")
        );
      });
    }
    function g(e) {
      return b(e, m, s);
    }
    function h(e) {
      if (e == null) return !1;
      var t = e instanceof r("AdsGenericFilterSet") ? e.toAPI() : e;
      return t.some(function (e) {
        return e.field === "SCALE_GOOD_CAMPAIGN";
      });
    }
    function y(e) {
      if (e == null) return !1;
      var t = e instanceof r("AdsGenericFilterSet") ? e.toAPI() : e,
        n = t.some(function (e) {
          return e.field === "ANOMALY";
        });
      return n;
    }
    function C(t) {
      if (e.includes(t.field)) {
        var n = t.value;
        if (Array.isArray(n)) {
          var r = [].concat(n),
            o = r.map(function (e) {
              return Number(e);
            });
          return babelHelpers.extends({}, t, { value: o });
        }
      }
      return t;
    }
    function b(e, t, n) {
      var o;
      return e == null
        ? !1
        : (e instanceof r("AdsGenericFilterSet") ? (o = e.toAPI()) : (o = e),
          o.some(function (e) {
            return (
              n.has(e.field) &&
              e.operator === "ANY" &&
              Array.isArray(e.value) &&
              e.value.length === 1 &&
              (t == null || t.has(e.value[0]))
            );
          }));
    }
    function v(e, t) {
      return b(e, t, u);
    }
    function S(e, t) {
      return b(e, t, c);
    }
    function R(e, t) {
      return b(e, t, d);
    }
    function L(e, t) {
      return t.reduce(function (e, t) {
        return e == null
          ? null
          : o("AdsGenericFilterSetUtil").excludeFiltersByField(
              e,
              r("AdsPEFilterFields")[t],
            );
      }, e);
    }
    function E(t, n) {
      var r = T(t, n);
      return L(r, e);
    }
    function k(e, t) {
      var n = T(e, t);
      return L(n, ["SCALE_GOOD_CAMPAIGN"]);
    }
    function I(e, t) {
      var n = T(e, t);
      return L(n, ["ANOMALY"]);
    }
    function T(e, t) {
      var n = e;
      return n == null
        ? null
        : (t.length > 0 &&
            t.forEach(function (e) {
              n != null &&
                (n = o("AdsGenericFilterSetUtil").mergeByField(n, e));
            }),
          n);
    }
    function D(e) {
      return e == null
        ? []
        : e.toAPI().map(function (e) {
            var t = e.field,
              n = e.value,
              r = null;
            return (
              t === "SEARCH_BY_CAMPAIGN_GROUP_IDS" && (r = "campaign_group.id"),
              { field: r != null ? r : t, operator: "IN", value: n }
            );
          });
    }
    function x(e) {
      return e == null
        ? []
        : e.toAPI().map(function (e) {
            var t = e.field,
              n = e.operator,
              r = e.value,
              o =
                t === "SEARCH_BY_CAMPAIGN_GROUP_IDS"
                  ? "campaign_group.id"
                  : t === "SEARCH_BY_CAMPAIGN_IDS"
                    ? "campaign.id"
                    : t === "SEARCH_BY_ADGROUP_IDS"
                      ? "adgroup.id"
                      : t === "SEARCH_BY_CAMPAIGN_NAME"
                        ? "campaign.name"
                        : null;
            return {
              field: o != null ? o : t,
              operator: n === "ANY" ? "IN" : n,
              value: r,
            };
          });
    }
    function $(e) {
      return e == null
        ? []
        : e.toAPI().map(function (e) {
            var t = e.field,
              n = e.operator,
              r = e.value,
              o =
                t === "SEARCH_BY_CAMPAIGN_GROUP_IDS" ? "campaign_group.id" : t;
            return { field: o, operator: n, value: r };
          });
    }
    function P(e) {
      var t = [
        "campaign_group.action_types",
        "campaign.action_types",
        "adgroup.action_types",
        "campaign_group.scale_good_campaign",
        "campaign_group.anomaly_detection",
      ];
      return e.filter(function (e) {
        return !t.includes(e.field);
      });
    }
    ((l.ACTION_FILTER_TYPES_LIST = e),
      (l.RECOMMENDATION_FILTER_VALUES = m),
      (l.DELIVERY_STATUS_FILTER_TYPES_LIST = p),
      (l.isDeliveryStatusNotInDraftsFilter = _),
      (l.isRecommendationFilter = g),
      (l.isHighPerformingFilter = h),
      (l.isAnomalyFilter = y),
      (l.modifyActionValues = C),
      (l.isCampaignGroupActionFilter = v),
      (l.isCampaignActionFilter = S),
      (l.isAdgroupActionFilter = R),
      (l.excludeFilter = L),
      (l.generateAdditionalActionFilter = E),
      (l.generateAdditionalHighPerformingFilter = k),
      (l.generateAdditionalAnomalyFilter = I),
      (l.generateAdditionalHighPerformingFilterSpec = D),
      (l.generateAdditionalActionFilterSpec = x),
      (l.generateAdditionalAnomalyFilterSpec = $),
      (l.generateFilterSpec = P));
  },
  98,
);
