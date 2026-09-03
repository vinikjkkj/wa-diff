__d(
  "WAWebContactManagerProfileQueryPlan",
  [
    "WAWebContactManagerCustomerProfileDecoders",
    "WAWebContactManagerFilterRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["query"],
      s = 4,
      u = 5e3,
      c = {
        acquisitionSource: null,
        labelId: null,
        lastMessageCustomRange: null,
        lastMessageRange: null,
        leadStages: [],
      },
      d = { clientFilterKeys: [], options: c },
      m = /[\s+().\-\u2010-\u2015]/g,
      p = /^[0-9]+$/;
    function _(t, n, r) {
      var a = t.query,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = [],
        s = [];
      for (var u of o("WAWebContactManagerFilterRegistry")
        .CONTACT_MANAGER_FILTER_KEYS) {
        var c = o("WAWebContactManagerFilterRegistry").getFilterSpec(u),
          d = c.serverFilter(i);
        (d != null && l.push(d), c.isClientActive(i) && s.push(u));
      }
      var m = { clientFilterKeys: s, options: i },
        p = R(n == null ? void 0 : n.key);
      return {
        candidateLids: r,
        filters: l,
        requiresFullScan: C(m) || b(n, p),
        residual: m,
        sortColumn: p,
        sortDescending: (n == null ? void 0 : n.direction) === "desc",
      };
    }
    function f(e) {
      var t = e.trim();
      if (t.length < s) return !1;
      var n = t.replace(m, "");
      return p.test(n) ? n.length >= s : !0;
    }
    function g(e) {
      return e.requiresFullScan
        ? e
        : babelHelpers.extends({}, e, { requiresFullScan: !0 });
    }
    function h(e, t, n) {
      var r = _(e, null, t),
        a = [].concat(
          r.filters.filter(function (e) {
            var t = e.fieldName;
            return t !== "lead_stage";
          }),
          [
            {
              fieldName: "lead_stage",
              filterText: o(
                "WAWebContactManagerCustomerProfileDecoders",
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
            t === "lastMessage" ||
            t === "list"
          ? !0
          : t === "email" ||
              t === "leadStage" ||
              t === "acquisitionSource" ||
              t === "lastOrder"
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
      return e.clientFilterKeys.length > 0;
    }
    function b(e, t) {
      return e == null ? !1 : t == null || e.key === "customer";
    }
    function v() {
      return d;
    }
    function S(e) {
      return JSON.stringify([
        e.candidateLids,
        e.filters.map(function (e) {
          var t = e.fieldName,
            n = e.filterText;
          return [t, n];
        }),
        e.sortColumn,
        e.sortDescending,
        e.requiresFullScan,
      ]);
    }
    function R(e) {
      return e === "customer" ? "name" : e === "email" ? "email" : null;
    }
    ((l.MIN_SEARCH_QUERY_LENGTH = s),
      (l.MAX_CANDIDATE_LIDS = u),
      (l.buildProfileQueryPlan = _),
      (l.isSearchQueryActive = f),
      (l.withFullScan = g),
      (l.buildPipelineColumnPlan = h),
      (l.canPageLocally = y),
      (l.hasResidual = C),
      (l.emptyProfileQueryResidual = v),
      (l.profileQueryPlanKey = S));
  },
  98,
);
