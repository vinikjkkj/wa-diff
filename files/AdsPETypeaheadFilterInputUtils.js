__d(
  "AdsPETypeaheadFilterInputUtils",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ",",
      s = 11,
      u = /^[\d\s,;]+$/;
    function c(e) {
      return e.length >= s && u.test(e);
    }
    function d(e, t) {
      return t != null && typeof t == "string" && (!p(e) || c(t));
    }
    function m(e) {
      return typeof e == "number" && e < 0;
    }
    function p(e) {
      return [
        "SEARCH_BY_CAMPAIGN_GROUP_ID",
        "SEARCH_BY_CAMPAIGN_ID",
        "SEARCH_BY_ADGROUP_ID",
        "FUNDING_PAGE_ID",
        "PRODUCT_CATALOG_ID",
      ].includes(e.name);
    }
    function _(e, t) {
      return (
        (["campaign_id", "adset_id", "ad_id"].includes(e.name) &&
          Array.isArray(t) &&
          !t.every(function (e) {
            return c(e);
          })) ||
        (p(e) && !d(e, t))
      );
    }
    function f(e) {
      var t = function (t) {
        return t == null || t === "";
      };
      return (
        Array.isArray(e) &&
        (e.length === 0 ||
          e.some(function (e) {
            return t(e);
          }))
      );
    }
    function g(e, t) {
      switch (t) {
        case "GREATER_THAN":
        case "IN_RANGE":
        case "NOT_IN_RANGE":
          return e < 0;
        case "LESS_THAN":
          return e <= 0;
      }
      return !1;
    }
    function h(e, t) {
      return (
        t != null &&
        ["IN_RANGE", "NOT_IN_RANGE"].includes(t) &&
        (e[0] < 0 || e[1] < 0)
      );
    }
    function y(e, t) {
      var n = function (t) {
        var e = new RegExp(/^(?!.*\.\d{3,})/);
        return !e.test(t.toString());
      };
      return typeof e == "number" ? n(e) : Array.isArray(e) ? h(e, t) : !1;
    }
    function C(e, t, n) {
      var r = n.type === "CURRENCY",
        o = n.type === "NUMBER";
      return (
        e == null ||
        e === "" ||
        (typeof e == "string" && e.trim() === "") ||
        f(e) ||
        _(n, e) ||
        (r && y(e, t)) ||
        (o && m(e))
      );
    }
    function b(e, t) {
      var n = function (t) {
        var e = new RegExp(/^(?!.*\.\d{3,})/);
        return !e.test(t.toString());
      };
      return typeof e == "number"
        ? n(e) || g(e, t)
        : Array.isArray(e)
          ? h(e, t)
          : !1;
    }
    function v(e, t) {
      return (
        (typeof e == "number" && e < 0) ||
        (Array.isArray(e) &&
          t != null &&
          ["IN_RANGE", "NOT_IN_RANGE"].includes(t) &&
          e.length === 2 &&
          (e[0] < 0 || e[1] < 0))
      );
    }
    function S(e, t, n) {
      var r = n.type === "CURRENCY",
        o = n.type === "NUMBER";
      return (
        e == null ||
        e === "" ||
        (typeof e == "string" && e.trim() === "") ||
        f(e) ||
        _(n, e) ||
        (r && b(e, t)) ||
        (o && v(e, t))
      );
    }
    function R(t) {
      if (Array.isArray(t))
        return t
          .map(function (e) {
            return String(e).trim();
          })
          .filter(Boolean);
      try {
        var n = t.trim();
        if (n === "") return [];
        var r = JSON.parse(n);
        return Array.isArray(r)
          ? r.map(function (e) {
              return String(e);
            })
          : [String(r)];
      } catch (n) {
        if (t.indexOf(e) === -1) return [t];
        var o = t.trim().split(e),
          a = [];
        return (
          o.forEach(function (e) {
            var t = e.trim();
            t === "" || a.includes(t) || a.push(t);
          }),
          a
        );
      }
    }
    function L(e) {
      return Array.isArray(e)
        ? e
            .map(function (e) {
              return String(e).trim();
            })
            .filter(Boolean)
        : R(e);
    }
    function E(e) {
      return [
        "SEARCH_BY_CAMPAIGN_GROUP_NAME",
        "SEARCH_BY_CAMPAIGN_NAME",
        "SEARCH_BY_ADGROUP_NAME",
      ].includes(e);
    }
    function k(e) {
      return ["SEARCH_BY_LABEL"].includes(e);
    }
    function I(e) {
      return [
        "CAMPAIGN_GROUP_DELIVERY_STATUS",
        "CAMPAIGN_DELIVERY_STATUS",
        "ADGROUP_DELIVERY_STATUS",
      ].includes(e);
    }
    function T(e) {
      return [
        "ADGROUP_ACTION_CATEGORIES",
        "CAMPAIGN_ACTION_CATEGORIES",
        "CAMPAIGN_GROUP_ACTION_CATEGORIES",
      ].includes(e);
    }
    function D(e) {
      return [
        "ADGROUP_ACTION_CATEGORIES",
        "CAMPAIGN_ACTION_CATEGORIES",
        "CAMPAIGN_GROUP_ACTION_CATEGORIES",
        "ADGROUP_ACTION_TYPES",
        "CAMPAIGN_ACTION_TYPES",
        "CAMPAIGN_GROUP_ACTION_TYPES",
      ].includes(e);
    }
    function x(e) {
      return [
        "SEARCH_BY_CAMPAIGN_GROUP_ID",
        "SEARCH_BY_CAMPAIGN_ID",
        "SEARCH_BY_ADGROUP_ID",
        "FUNDING_PAGE_ID",
        "PRODUCT_CATALOG_ID",
      ].includes(e);
    }
    function $(e) {
      if (Array.isArray(e))
        return e.length === 0
          ? ""
          : e.length === 1
            ? String(e[0])
            : e
                .map(function (e) {
                  return String(e);
                })
                .join(", ");
      var t = R(e);
      return t.length === 1 ? t[0] : t.length > 1 ? t.join(", ") : "";
    }
    function P() {
      var e;
      return (
        (e = {}),
        (e.CONTAIN = "CONTAINS_ALL"),
        (e.NOT_CONTAIN = "NOT_CONTAINS_ANY"),
        e
      );
    }
    function N() {
      return ["CONTAIN", "NOT_CONTAIN"];
    }
    function M(e, t, n, o) {
      e: {
        if (e === "CONTAIN" || e === "NOT_CONTAIN")
          return new (r("AdsGenericFilter"))(
            new (r("AdsGenericFilterField"))(
              t,
              r("AdsGenericFilterFieldType").STRING_SET,
            ),
            o,
            [n],
          );
        if (
          e === "CONTAINS_ANY" ||
          e === "CONTAINS_ALL" ||
          e === "NOT_CONTAINS_ANY"
        ) {
          var a = R(n);
          return a.length !== 1
            ? null
            : new (r("AdsGenericFilter"))(
                new (r("AdsGenericFilterField"))(
                  t,
                  r("AdsGenericFilterFieldType").STRING_SET,
                ),
                o,
                a,
              );
        }
        return null;
      }
    }
    function w(e) {
      var t = N(),
        n = P(),
        r = n[e.operator],
        o = e.field.name;
      return E(o) && t.includes(e.operator) && typeof e.value == "string"
        ? M(e.operator, o, e.value, r)
        : e;
    }
    function A(e) {
      var t = [];
      if (
        (e.forEach(function (e) {
          if (E(e.field.name)) {
            var n = w(e);
            n && t.push(n);
            return;
          }
          t.push(e);
        }),
        t.length === 0)
      )
        return null;
      var n = new (r("AdsGenericFilterSet"))(t);
      return n;
    }
    ((l.MIN_ID_LENGTH = s),
      (l.isIDs = c),
      (l.isValidStringInput = d),
      (l.isSearchByIDField = p),
      (l.isInvalidNumberForCurrencyInput = g),
      (l.isInvalidArrayForCurrencyInput = h),
      (l.isInvalidTypeaheadFilterInput = C),
      (l.isInvalidTypeaheadFilterInputForReplaceLegacyFilterModal = S),
      (l.parseFilterValueTokens = R),
      (l.parseNameFilterValues = L),
      (l.getIsNameFilter = E),
      (l.getIsTagsFilter = k),
      (l.getIsDeliveryStatusFilter = I),
      (l.getIsActionCategoriesFilter = T),
      (l.getIsActionFilter = D),
      (l.getIsIDFilter = x),
      (l.getTextForNameFilterInRecentlyUsed = $),
      (l.getSubstituteOperatorForIncompatibleOperators = P),
      (l.getIncompatibleOperators = N),
      (l.getFilterUsingNewOperator = M),
      (l.removeIncompatibleNameFiltersFromFilterSetHelper = A));
  },
  98,
);
