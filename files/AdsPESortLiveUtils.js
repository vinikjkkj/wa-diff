__d(
  "AdsPESortLiveUtils",
  [
    "AdsInsightsField",
    "AdsInsightsSortDirection",
    "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
    "AdsReportSortSubFieldConst",
    "GraphSort",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "delivery_status_status",
      "delivery_info",
      "start_time",
      "name",
      "stop_time",
    ]);
    function s(e) {
      return e === r("AdsInsightsSortDirection").DESC
        ? r("GraphSort").DESC
        : r("GraphSort").ASC;
    }
    function u(e) {
      return e === r("AdsInsightsField").RESULTS
        ? r("AdsInsightsField").OBJECTIVE_RESULTS
        : e === r("AdsInsightsField").RESULT_RATE
          ? r("AdsInsightsField").OBJECTIVE_RESULT_RATE
          : e === r("AdsInsightsField").COST_PER_RESULT
            ? r("AdsInsightsField").COST_PER_OBJECTIVE_RESULT
            : e === "spent"
              ? r("AdsInsightsField").SPEND
              : null;
    }
    function c(e) {
      return e.sort
        .filter(function (e) {
          return e.field !== "errors" && e.field !== "edit_status";
        })
        .map(function (e) {
          var t,
            n = (t = u(e.field)) != null ? t : e.field;
          return "" + n + g(e.comparisonColumnType) + s(e.order);
        });
    }
    function d(e) {
      return e.datePreset;
    }
    function m(e) {
      var t;
      return ((t = e.sort[0]) == null ? void 0 : t.field) === "errors";
    }
    function p(t) {
      var n,
        r = (n = t.sort[0]) == null ? void 0 : n.field;
      return r != null && !e.has(r);
    }
    function _(e) {
      var t;
      return ((t = e.sort[0]) == null ? void 0 : t.field) === "edit_status";
    }
    function f(e) {
      if (!e) return !1;
      var t = e.sort[0];
      return (
        (t == null ? void 0 : t.field) === "delivery_info" &&
        (t == null ? void 0 : t.order) === r("AdsInsightsSortDirection").DESC
      );
    }
    function g(e) {
      return e ? "" + r("AdsReportSortSubFieldConst").SUB_FIELD_PREFIX + e : "";
    }
    function h(e, t) {
      var n, r, o, a;
      return (
        e != null &&
        t != null &&
        e.sort.length === 1 &&
        t.sort.length === 1 &&
        ((n = e.sort[0]) == null ? void 0 : n.field) ===
          ((r = t.sort[0]) == null ? void 0 : r.field) &&
        ((o = e.sort[0]) == null ? void 0 : o.order) !==
          ((a = t.sort[0]) == null ? void 0 : a.order) &&
        !m(e) &&
        !_(e)
      );
    }
    function y(e) {
      if (e == null) return !1;
      var t = e.getAvailableIDs(),
        n = e.getAvailableCount();
      return t != null && n != null && n <= t.length;
    }
    function C(e, t, n) {
      return h(e, t) && y(n);
    }
    function b(e, t, n) {
      var r = t.getAvailableIDs(),
        a = t.getPinnedAdObjectIDs(),
        i = t.getCreatedIDSet(),
        l =
          i.size > 0 &&
          f(n) &&
          o(
            "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
          ).getDraftBehaviorVariantForAccount() !==
            o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
              .AdsInsightsDraftBehaviorVariant.CONTROL,
        s = r.filter(function (e) {
          return a.has(e) && !i.has(e);
        }),
        u = r.filter(function (e) {
          return !a.has(e) && !i.has(e);
        });
      (s.reverse(), u.reverse());
      var c;
      if (l) {
        var d = r.filter(function (e) {
          return i.has(e);
        });
        c = [].concat(s, u, d);
      } else {
        var m = t.getCreatedIDsPartitionedByAge(),
          p = m.oldDrafts,
          _ = r.filter(function (e) {
            return i.has(e);
          }),
          g = _.filter(function (e) {
            return !p.has(e);
          }),
          h = _.filter(function (e) {
            return p.has(e);
          });
        c = [].concat(s, g, u, h);
      }
      return {
        filteredIDs: {
          campaignGroupIDs: e === "campaignGroup" ? c : [],
          campaignIDs: e === "campaign" ? c : [],
          adgroupIDs: e === "adgroup" ? c : [],
        },
        totalCounts: {},
      };
    }
    function v(e) {
      if (!e) return null;
      var t, n;
      if (e.endsWith(r("GraphSort").DESC))
        ((t = r("AdsInsightsSortDirection").DESC),
          (n = e.slice(0, -r("GraphSort").DESC.length)));
      else if (e.endsWith(r("GraphSort").ASC))
        ((t = r("AdsInsightsSortDirection").ASC),
          (n = e.slice(0, -r("GraphSort").ASC.length)));
      else return null;
      var o,
        a = null,
        i = n.indexOf(r("AdsReportSortSubFieldConst").SUB_FIELD_PREFIX);
      if (i !== -1) {
        o = n.substring(0, i);
        var l = n.substring(
          i + r("AdsReportSortSubFieldConst").SUB_FIELD_PREFIX.length,
        );
        a = l ? r("unsafeCast")(l) : null;
      } else o = n;
      return {
        datePreset: null,
        sort: [{ field: o, order: t, comparisonColumnType: a }],
      };
    }
    ((l.getSortParams = c),
      (l.getDatePreset = d),
      (l.isSortByError = m),
      (l.isDateChangeRelatedSort = p),
      (l.isSortByChanged = _),
      (l.isSortByDeliveryInfoDescending = f),
      (l.getComparisonColumnTypeAPIValue = g),
      (l.canReverseSortFromStore = y),
      (l.canReverseSort = C),
      (l.reverseFilteredIDs = b),
      (l.parseSortParam = v));
  },
  98,
);
