__d(
  "WAWebCustomerManagerProfileQueryPlan",
  ["WAWebCustomerManagerFilterRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["query"],
      s = 2,
      u = 5e3,
      c = 500,
      d = {
        acquisitionSource: null,
        labelId: null,
        lastMessageCustomRange: null,
        lastMessageRange: null,
        leadStages: [],
      },
      m = { clientFilterKeys: [], options: d, query: "" },
      p = /[\s+().\-\u2010-\u2015]/g,
      _ = /^[0-9]+$/;
    function f(t, n, r, a) {
      var i;
      a === void 0 && (a = []);
      var l = t.query,
        s = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = [],
        c = [],
        d = function (t) {
          var e = o("WAWebCustomerManagerFilterRegistry").getFilterSpec(t),
            n = e.serverFilter(s);
          (n != null && u.push(n),
            e.isClientActive(s) &&
              !a.some(function (e) {
                return e === t;
              }) &&
              c.push(t));
        };
      for (var m of o("WAWebCustomerManagerFilterRegistry")
        .CUSTOMER_MANAGER_FILTER_KEYS)
        d(m);
      var p = { clientFilterKeys: c, options: s, query: g(l) ? l : "" },
        _ = R(n == null ? void 0 : n.key),
        f =
          a.length > 0 &&
          ((n == null ? void 0 : n.key) === "email" ||
            (n == null ? void 0 : n.key) === "acquisitionSource"),
        h = f && u.length === 0,
        y = C(p) || b(n, _) || h;
      return babelHelpers.extends(
        {
          candidateLids: r,
          customFieldFilters: (i = t.customFieldFilters) != null ? i : [],
          filters: u,
          fullScanPageSize: y ? 100 : void 0,
          requiresFullScan: y,
        },
        h ? { requiresCompleteProfileOrdering: h } : {},
        {
          residual: p,
          sortColumn: _,
          sortDescending: (n == null ? void 0 : n.direction) === "desc",
        },
      );
    }
    function g(e) {
      var t = e.trim();
      if (t.length < s) return !1;
      var n = t.replace(p, "");
      return _.test(n) ? n.length >= s : !0;
    }
    function h(e, t) {
      return y(e) || C(e.residual)
        ? !1
        : t == null ||
            t === "customer" ||
            t === "phone" ||
            t === "username" ||
            t === "address" ||
            t === "birthday" ||
            t === "lastMessage" ||
            t === "list"
          ? !0
          : t === "email" || t === "acquisitionSource"
            ? !1
            : t === "select" ||
              t === "actions" ||
              t === "notes" ||
              t === "lastOrder";
    }
    function y(e) {
      return e.filters.length > 0 || e.customFieldFilters.length > 0;
    }
    function C(e) {
      return e.clientFilterKeys.length > 0 || g(e.query);
    }
    function b(e, t) {
      return e == null ? !1 : t == null || e.key === "customer";
    }
    function v() {
      return m;
    }
    function S(e) {
      return JSON.stringify(
        [
          e.candidateLids,
          e.filters.map(function (e) {
            var t = e.fieldName,
              n = e.filterText;
            return [t, n];
          }),
          e.customFieldFilters,
          e.sortColumn,
          e.sortDescending,
          e.requiresFullScan,
        ].concat(e.requiresFullScan && e.fullScanPageSize === 100 ? [100] : []),
      );
    }
    function R(e) {
      return e === "customer" ? "name" : e === "email" ? "email" : null;
    }
    ((l.MIN_SEARCH_QUERY_LENGTH = s),
      (l.MAX_CANDIDATE_LIDS = u),
      (l.MAX_DIRECT_PROFILE_CANDIDATES = c),
      (l.buildProfileQueryPlan = f),
      (l.isSearchQueryActive = g),
      (l.canPageLocally = h),
      (l.hasServerFilters = y),
      (l.hasResidual = C),
      (l.emptyProfileQueryResidual = v),
      (l.profileQueryPlanKey = S));
  },
  98,
);
