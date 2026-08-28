__d(
  "AdsPEGroupReducerPlugins",
  [
    "AdsApplicationUtils",
    "AdsDataAtom",
    "AdsInsightsGroupDimensionConfigJSResource",
    "AdsInsightsGroupDimensionConfigTypes",
    "AdsPEGroupConstants",
    "AdsPERouterHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return {
          expandedGroupKeys: [],
          groupIDsByKey: {},
          groupObjectCounts: {},
          groupPageIndex: 0,
          groupingDimension: null,
        };
      },
      u = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, s(), {
            groupingDimension: n.groupingDimension,
            groupObjectCounts: n.groupObjectCounts,
          });
        },
      },
      c = {
        reduce: function (t, n) {
          var e;
          return babelHelpers.extends({}, t, {
            groupIDsByKey: babelHelpers.extends(
              {},
              t.groupIDsByKey,
              ((e = {}), (e[n.groupKey] = n.ids), e),
            ),
          });
        },
      },
      d = {
        reduce: function () {
          return s();
        },
      },
      m = {
        reduce: function (n, a) {
          return !a.enabled || n.groupingDimension == null
            ? n
            : (o("AdsApplicationUtils").isPowerEditor() &&
                (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                  function () {
                    r("AdsPERouterHelper")
                      .getRouteBuilder()
                      .clearGroupBy()
                      .navigate();
                  },
                ),
              s());
        },
      },
      p = {
        reduce: function (t, n) {
          var e,
            r = n.groupKey,
            a = t.expandedGroupKeys;
          if (a.includes(r))
            return babelHelpers.extends({}, t, {
              expandedGroupKeys: a.filter(function (e) {
                return e !== r;
              }),
              groupPageIndex: 0,
            });
          var i = (e = t.groupObjectCounts[r]) != null ? e : 0,
            l = 0;
          for (var s of a) {
            var u;
            l += (u = t.groupObjectCounts[s]) != null ? u : 0;
          }
          return l + i > o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT
            ? babelHelpers.extends({}, t, {
                expandedGroupKeys: [r],
                groupPageIndex: 0,
              })
            : babelHelpers.extends({}, t, {
                expandedGroupKeys: [].concat(a, [r]),
                groupPageIndex: 0,
              });
        },
      };
    function _(e, t) {
      if (t.length > 0) return t;
      for (var n of Object.keys(e)) {
        var r = e[n];
        if (r == null) return t;
        if (r > 0) return [n];
      }
      return t;
    }
    var f = {
        reduce: function (t, n) {
          var e,
            r = babelHelpers.extends(
              {},
              t.groupObjectCounts,
              ((e = {}), (e[n.groupKey] = n.count), e),
            );
          return babelHelpers.extends({}, t, {
            groupObjectCounts: r,
            expandedGroupKeys: _(r, t.expandedGroupKeys),
          });
        },
      },
      g = {
        reduce: function (t, n) {
          var e = babelHelpers.extends(
            {},
            t.groupObjectCounts,
            n.groupObjectCounts,
          );
          return babelHelpers.extends({}, t, {
            groupObjectCounts: e,
            expandedGroupKeys: _(e, t.expandedGroupKeys),
          });
        },
      },
      h = {
        reduce: function (t) {
          return babelHelpers.extends({}, t, {
            expandedGroupKeys: [],
            groupPageIndex: 0,
          });
        },
      },
      y = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { groupPageIndex: n.pageIndex });
        },
      },
      C = {
        reduce: function (t, n) {
          var e,
            a,
            i,
            l,
            u =
              n == null || (e = n.data) == null || (e = e.params) == null
                ? void 0
                : e.group_by,
            c = n == null || (a = n.data) == null ? void 0 : a.changedParamKeys;
          if (
            ((c != null && c.filter_set) || (c != null && c.date)) &&
            !(c != null && c.group_by) &&
            t.groupingDimension != null
          ) {
            var d = {};
            for (var m of Object.keys(t.groupObjectCounts)) d[m] = null;
            return babelHelpers.extends({}, t, {
              groupIDsByKey: {},
              groupObjectCounts: d,
              expandedGroupKeys: [],
              groupPageIndex: 0,
            });
          }
          if (
            c != null &&
            c.sort &&
            !(c != null && c.group_by) &&
            t.groupingDimension != null
          )
            return babelHelpers.extends({}, t, { groupIDsByKey: {} });
          if (
            !(c != null && c.group_by) &&
            !(c != null && c.section && t.groupingDimension != null)
          )
            return t;
          var p = o(
              "AdsInsightsGroupDimensionConfigTypes",
            ).coerceGroupingDimension(u),
            _ =
              n == null || (i = n.data) == null || (i = i.params) == null
                ? void 0
                : i.section,
            f =
              _ === "L3"
                ? "campaign"
                : _ === "L2"
                  ? "ad_set"
                  : _ === "L1"
                    ? "ad"
                    : null;
          if (c != null && c.section && f !== "campaign" && f !== "ad_set")
            return babelHelpers.extends({}, s(), { groupingDimension: p });
          if (p === o("AdsPEGroupConstants").PARENT_GROUPING_DIMENSION)
            return babelHelpers.extends({}, s(), { groupingDimension: p });
          var g =
            p != null
              ? (l = r(
                  "AdsInsightsGroupDimensionConfigJSResource",
                ).getModuleIfRequireable()) == null
                ? void 0
                : l.findDimensionByGroupingType(p, f)
              : null;
          if (g == null)
            return babelHelpers.extends({}, s(), { groupingDimension: p });
          var h = {},
            y = g.groupKeys;
          if (Array.isArray(y)) for (var C of y) h[String(C.value)] = null;
          return babelHelpers.extends({}, s(), {
            groupObjectCounts: h,
            groupingDimension: p,
          });
        },
      },
      b = {
        reduce: function (t) {
          if (t.groupingDimension == null) return t;
          var e = {};
          for (var n of Object.keys(t.groupObjectCounts)) e[n] = null;
          return babelHelpers.extends({}, t, {
            groupIDsByKey: {},
            groupObjectCounts: e,
            groupPageIndex: 0,
          });
        },
      },
      v = {
        reduce: function (t) {
          return t.groupingDimension == null
            ? t
            : babelHelpers.extends({}, t, { groupIDsByKey: {} });
        },
      },
      S = {
        reduce: function (t) {
          return t.groupingDimension == null
            ? t
            : babelHelpers.extends({}, t, { groupIDsByKey: {} });
        },
      };
    ((l.selectGroupDimension = u),
      (l.setGroupIDs = c),
      (l.clearGroupDimension = d),
      (l.clearGroupDimensionOnPriorityViewEnabled = m),
      (l.toggleGroupExpand = p),
      (l.setGroupCounts = f),
      (l.setBatchGroupCounts = g),
      (l.collapseAll = h),
      (l.setGroupPage = y),
      (l.updateInterfacesRouteParams = C),
      (l.refreshTableView = b),
      (l.clearGroupIDsOnSort = v),
      (l.clearGroupIDsOnPublish = S));
  },
  98,
);
