__d(
  "WAWebContactManagerProfileQueryPlan",
  ["WAWebContactManagerCustomerProfileDecoders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 5e3,
      u = {
        labelId: null,
        lastMessageCustomRange: null,
        lastMessageRange: null,
        leadStages: [],
      },
      c = /[\s+().\-\u2010-\u2015]/g,
      d = /^[0-9]+$/;
    function m(e, t, n) {
      var r = [],
        a =
          e.leadStages.length === 1
            ? o(
                "WAWebContactManagerCustomerProfileDecoders",
              ).toLeadStageFilterText(e.leadStages[0])
            : null;
      a != null && r.push({ fieldName: "lead_stage", filterText: a });
      var i =
        e.acquisitionSource != null
          ? o(
              "WAWebContactManagerCustomerProfileDecoders",
            ).toAcquisitionSourceFilterText(e.acquisitionSource)
          : null;
      i != null && r.push({ fieldName: "acquisition_source", filterText: i });
      var l = {
          labelId: e.labelId,
          lastMessageCustomRange: e.lastMessageCustomRange,
          lastMessageRange: e.lastMessageRange,
          leadStages: a == null ? e.leadStages : [],
        },
        s = b(t == null ? void 0 : t.key);
      return {
        candidateLids: n,
        filters: r,
        requiresFullScan: g(l) || h(t, s),
        residual: l,
        sortColumn: s,
        sortDescending: (t == null ? void 0 : t.direction) === "desc",
      };
    }
    function p(t) {
      var n = t.trim();
      if (n.length < e) return !1;
      var r = n.replace(c, "");
      return d.test(r) ? r.length >= e : !0;
    }
    function _(e) {
      return e.requiresFullScan
        ? e
        : babelHelpers.extends({}, e, { requiresFullScan: !0 });
    }
    function f(e, t, n) {
      var r = m(e, null, t),
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
        i = babelHelpers.extends({}, r.residual, { leadStages: [] });
      return babelHelpers.extends({}, r, {
        filters: a,
        requiresFullScan: g(i),
        residual: i,
      });
    }
    function g(e) {
      return (
        e.leadStages.length > 0 ||
        e.labelId != null ||
        e.lastMessageRange != null ||
        e.lastMessageCustomRange != null
      );
    }
    function h(e, t) {
      return e == null ? !1 : t == null || e.key === "customer";
    }
    function y() {
      return u;
    }
    function C(e) {
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
    function b(e) {
      return e === "customer" ? "name" : e === "email" ? "email" : null;
    }
    ((l.MIN_SEARCH_QUERY_LENGTH = e),
      (l.MAX_CANDIDATE_LIDS = s),
      (l.buildProfileQueryPlan = m),
      (l.isSearchQueryActive = p),
      (l.withFullScan = _),
      (l.buildPipelineColumnPlan = f),
      (l.hasResidual = g),
      (l.emptyProfileQueryResidual = y),
      (l.profileQueryPlanKey = C));
  },
  98,
);
