__d(
  "WAWebContactManagerProfileQueryPlan",
  ["WAWebContactManagerCustomerProfileDecoders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 5e3,
      u = {
        acquisitionSource: null,
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
          acquisitionSource: i == null ? e.acquisitionSource : null,
          labelId: e.labelId,
          lastMessageCustomRange: e.lastMessageCustomRange,
          lastMessageRange: e.lastMessageRange,
          leadStages: a == null ? e.leadStages : [],
        },
        s = C(t == null ? void 0 : t.key);
      return {
        candidateLids: n,
        filters: r,
        requiresFullScan: f(l) || g(t, s),
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
    function f(e) {
      return (
        e.leadStages.length > 0 ||
        e.acquisitionSource != null ||
        e.labelId != null ||
        e.lastMessageRange != null ||
        e.lastMessageCustomRange != null
      );
    }
    function g(e, t) {
      return e == null ? !1 : t == null || e.key === "customer";
    }
    function h() {
      return u;
    }
    function y(e) {
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
    function C(e) {
      return e === "customer" ? "name" : e === "email" ? "email" : null;
    }
    ((l.MIN_SEARCH_QUERY_LENGTH = e),
      (l.MAX_CANDIDATE_LIDS = s),
      (l.buildProfileQueryPlan = m),
      (l.isSearchQueryActive = p),
      (l.withFullScan = _),
      (l.hasResidual = f),
      (l.emptyProfileQueryResidual = h),
      (l.profileQueryPlanKey = y));
  },
  98,
);
