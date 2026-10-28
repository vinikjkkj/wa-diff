__d(
  "WAWebCustomerManagerProfileQueryPlan",
  [
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerFilterRegistry",
  ],
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
      a === void 0 && (a = []);
      var i = t.query,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = [],
        u = [],
        c = function (t) {
          var e = o("WAWebCustomerManagerFilterRegistry").getFilterSpec(t),
            n = e.serverFilter(l);
          (n != null && s.push(n),
            e.isClientActive(l) &&
              !a.some(function (e) {
                return e === t;
              }) &&
              u.push(t));
        };
      for (var d of o("WAWebCustomerManagerFilterRegistry")
        .CUSTOMER_MANAGER_FILTER_KEYS)
        c(d);
      var m = { clientFilterKeys: u, options: l, query: g(i) ? i : "" },
        p = R(n == null ? void 0 : n.key),
        _ =
          a.length > 0 &&
          ((n == null ? void 0 : n.key) === "email" ||
            (n == null ? void 0 : n.key) === "acquisitionSource" ||
            (n == null ? void 0 : n.key) === "lastOrder"),
        f = _ && s.length === 0;
      return babelHelpers.extends(
        {
          candidateLids: r,
          filters: s,
          requiresFullScan: C(m) || b(n, p) || f,
        },
        f ? { requiresCompleteProfileOrdering: f } : {},
        {
          residual: m,
          sortColumn: p,
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
    function h(e, t, n) {
      var r = f(e, null, t),
        a = [].concat(
          r.filters.filter(function (e) {
            var t = e.fieldName;
            return t !== "lead_stage";
          }),
          [
            {
              fieldName: "lead_stage",
              filterText: o(
                "WAWebCustomerManagerCustomerProfileDecoders",
              ).toLeadStageFilterText(n),
            },
          ],
        ),
        i = babelHelpers.extends({}, r.residual, {
          clientFilterKeys: r.residual.clientFilterKeys.filter(function (e) {
            return e !== "leadStage";
          }),
        });
      return babelHelpers.extends({}, r, {
        filters: a,
        requiresFullScan: C(i),
        residual: i,
      });
    }
    function y(e, t) {
      return e.filters.length > 0 || C(e.residual)
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
          : t === "email" || t === "acquisitionSource" || t === "lastOrder"
            ? !1
            : t === "select" || t === "actions" || t === "notes"
              ? !0
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
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
      (l.buildPipelineColumnPlan = h),
      (l.canPageLocally = y),
      (l.hasResidual = C),
      (l.emptyProfileQueryResidual = v),
      (l.profileQueryPlanKey = S));
  },
  98,
);
