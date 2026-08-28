__d(
  "AdsInsightsSortUtil",
  [
    "invariant",
    "AdsCMDefaultSort",
    "AdsInsightsBreakdowns",
    "AdsInsightsComparisonColumns",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsSort",
    "AdsInsightsSortDirection",
    "AdsInsightsSortDirections",
    "AdsInsightsSortableMetadataFields.experimental",
    "AdsInsightsSortableStatsFields",
    "AdsMgmtColumn",
    "AdsObjectTypes",
    "AdsReportSortSubFieldConst",
    "firstx",
    "flatMapArray",
    "memoize",
    "memoizeStringOnly",
    "nullthrows",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e.map(function (e) {
        return {
          field: e.field,
          direction:
            e.direction === 1
              ? r("AdsInsightsSortDirection").ASC
              : r("AdsInsightsSortDirection").DESC,
        };
      });
    }
    function u(e, t) {
      var n = [];
      for (var r of e) {
        if (t(r)) break;
        n.push(r);
      }
      return n;
    }
    var c = function (t) {
      return t ? "" + r("AdsReportSortSubFieldConst").SUB_FIELD_PREFIX + t : "";
    };
    function d(t) {
      switch (t) {
        case r("AdsObjectTypes").ACCOUNT:
        case r("AdsObjectTypes").CREATIVE:
          return e(r("AdsCMDefaultSort").ACCOUNT_TAB_DEFAULT_SORT);
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
          return e(r("AdsCMDefaultSort").CAMPAIGN_GROUP_TAB_DEFAULT_SORT);
        case r("AdsObjectTypes").CAMPAIGN:
          return e(r("AdsCMDefaultSort").CAMPAIGN_TAB_DEFAULT_SORT);
        case r("AdsObjectTypes").ADGROUP:
          return e(r("AdsCMDefaultSort").ADGROUP_TAB_DEFAULT_SORT);
        default:
          s(0, 386, t);
      }
    }
    function m(e) {
      return e.some(function (e) {
        var t = e.comparisonColumnType;
        return !!t;
      });
    }
    function p(e) {
      switch (e) {
        case r("AdsInsightsField").RESULTS:
          return r("AdsInsightsField").OBJECTIVE_RESULTS;
        case r("AdsInsightsField").RESULT_RATE:
          return r("AdsInsightsField").OBJECTIVE_RESULT_RATE;
        case r("AdsInsightsField").COST_PER_RESULT:
          return r("AdsInsightsField").COST_PER_OBJECTIVE_RESULT;
        case "spent":
          return r("AdsInsightsField").SPEND;
        default:
          return null;
      }
    }
    function _(e, t) {
      if (t.length === 0 || e.length === 0) return [];
      var n = r("firstx")(e),
        a = r("firstx")(t),
        i = p(n.field);
      if (!o("AdsInsightsFields").hasBreakdownData(i != null ? i : n.field)) {
        var l = null,
          s = null;
        if (
          (r("AdsInsightsBreakdowns").isTimeBreakdown(a)
            ? ((l = r("AdsInsightsField").DATE_START),
              (s = r("AdsInsightsSortDirection").DESC))
            : t.length === 1 &&
              ((l = a), (s = r("AdsInsightsSortDirection").ASC)),
          l !== null && s !== null)
        ) {
          var u = n.field === r("AdsMgmtColumn").NAME ? n.direction : s;
          return o("AdsInsightsFields").isValid(l)
            ? [{ field: l, direction: u }]
            : [];
        }
      }
      return i != null
        ? [
            {
              field: i,
              direction: n.direction,
              comparisonColumnType: n.comparisonColumnType,
            },
          ]
        : o("AdsInsightsFields").isValid(n.field)
          ? e.slice(0, 1)
          : [];
    }
    function f(e, t) {
      if (t.length) {
        var n = r("flatMapArray")(e, function (e) {
          var n;
          return (
            o("AdsInsightsFields").hasBreakdownData(e.field)
              ? (n = [e.field])
              : e.field === r("AdsMgmtColumn").NAME
                ? (n = t.map(r("AdsInsightsBreakdowns").getSortField))
                : (n = []),
            n.map(function (t) {
              return { field: t, direction: e.direction };
            })
          );
        });
        return [].concat(e, n);
      } else return e;
    }
    function g(e) {
      return u(e, function (e) {
        return e.field === o("AdsInsightsSort").objectSummaryIndicator;
      }).map(function (e) {
        var t = o("AdsInsightsSort").getFieldDescriptor(e.field),
          n = t.field;
        return { field: n, direction: e.direction };
      });
    }
    function h(e) {
      if (Array.isArray(e)) {
        var t = [];
        for (var n of e) {
          if (typeof n != "object" || n == null) return;
          var a = n.comparisonColumnType,
            i = n.direction,
            l = n.field;
          if (
            typeof l != "string" ||
            typeof i != "number" ||
            !o("AdsInsightsSortDirections").isValid(i)
          )
            return;
          var s =
            i === 1
              ? r("AdsInsightsSortDirection").ASC
              : r("AdsInsightsSortDirection").DESC;
          if (a == null) t.push({ field: l, direction: s });
          else if (
            typeof a == "string" &&
            o("AdsInsightsComparisonColumns").getComparisonColumnTypeFromString(
              a,
            ) != null
          )
            t.push({
              field: l,
              direction: s,
              comparisonColumnType: r("nullthrows")(
                o(
                  "AdsInsightsComparisonColumns",
                ).getComparisonColumnTypeFromString(a),
              ),
            });
          else return;
        }
        return t;
      }
    }
    var y = r("memoizeStringOnly")(function (e) {
        var t = r("AdsInsightsSortableMetadataFields.experimental")[e] || [];
        return new Set(t);
      }),
      C = r("memoize")(function () {
        return new Set(r("AdsInsightsSortableStatsFields").fields);
      });
    function b(e, t) {
      return y(t).has(e);
    }
    function v(e) {
      return C().has(e);
    }
    function S(e, t) {
      return v(e) || b(e, t);
    }
    function R(e, t) {
      var n = r("partitionArray")(e, function (e) {
          var n = o("AdsInsightsSort").getFieldDescriptor(e.field),
            r = n.field;
          return r === o("AdsInsightsSort").objectSummaryIndicator || S(r, t);
        }),
        a = n[0],
        i = n[1];
      return {
        sort: a,
        errors: i.map(function (e) {
          return { message: "Invalid sort item", value: e };
        }),
      };
    }
    function L(e) {
      return e.field === "spent" && e.comparisonColumnType
        ? babelHelpers.extends({}, e, { field: r("AdsInsightsField").SPEND })
        : e;
    }
    function E(e) {
      return e.length
        ? e.map(L).map(function (e) {
            return (
              e.field +
              c(e.comparisonColumnType) +
              r("nullthrows")(o("AdsInsightsSortDirections").toAPI(e.direction))
            );
          })
        : void 0;
    }
    function k(e) {
      return e == null || e.length === 0
        ? null
        : e.map(function (e) {
            return {
              direction:
                e.direction === r("AdsInsightsSortDirection").ASC
                  ? "asc"
                  : "desc",
              field: e.field,
            };
          });
    }
    function I(e) {
      return (
        e.length <= 1 || s(0, 525),
        e.length !== 0 &&
          (o("AdsInsightsFields").isValid(e[0].field) || s(0, 526, e[0].field)),
        E(e)
      );
    }
    function T(e, t) {
      return e
        .map(function (e) {
          return (
            e.field +
            "~" +
            (e.direction === r("AdsInsightsSortDirection").ASC ? "1" : "0") +
            (t !== !0 && e.comparisonColumnType
              ? "~" + e.comparisonColumnType
              : "")
          );
        })
        .join(",");
    }
    function D(e) {
      var t = e.split(","),
        n = [];
      return (
        t.forEach(function (e) {
          var t = e.split("~"),
            a = t[0],
            i = t[1],
            l = t[2],
            s = o(
              "AdsInsightsComparisonColumns",
            ).getComparisonColumnTypeFromString(l);
          if (a !== "") {
            var u =
              i === "1"
                ? r("AdsInsightsSortDirection").ASC
                : r("AdsInsightsSortDirection").DESC;
            n.push(
              s
                ? { field: a, direction: u, comparisonColumnType: s }
                : { field: a, direction: u },
            );
          }
        }),
        n
      );
    }
    function x(e) {
      return (e.direction === 1 ? "+" : "-") + e.field;
    }
    function $(e) {
      var t, n;
      return (
        e[0] === "+"
          ? ((t = 1), (n = e.substring(1)))
          : e[0] === "-"
            ? ((t = -1), (n = e.substring(1)))
            : ((t = 1), (n = e)),
        n === "osi" && (n = "objectSummaryIndicator"),
        n.startsWith("os(") && (n = "objectSummary(" + n.substring(3)),
        { field: n, direction: t }
      );
    }
    function P(e) {
      for (var t = /[^,\s]+/g, n = [], r; (r = t.exec(e)); ) n.push($(r[0]));
      return n;
    }
    ((l.getDefault = d),
      (l.hasComparisonSort = m),
      (l.getBreakdownSort = _),
      (l.fromPartialSort = f),
      (l.toPartialSort = g),
      (l.coerce = h),
      (l.getSortableMetadataFields = y),
      (l.getSortableStatsFields = C),
      (l.canSortMetadataField = b),
      (l.canSortStatsField = v),
      (l.canSortField = S),
      (l.sanitize = R),
      (l.toAPIParam = E),
      (l.sortToAPI = k),
      (l.toInsightsEdgeParam = I),
      (l.toKey = T),
      (l.fromKey = D),
      (l.reprSortItem = x),
      (l.parseSortItem = $),
      (l.shorthand = P));
  },
  98,
);
