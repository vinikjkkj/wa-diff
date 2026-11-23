__d(
  "AdsUniversalComposerAppliedViewSpec",
  ["AdsInsightsSortDirection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdsInsightsSortDirection").ASC ? "ASC" : "DESC";
    }
    function s(e) {
      return (
        e.tab == null &&
        (e.columns == null || e.columns.length === 0) &&
        (e.sorting == null || e.sorting.length === 0) &&
        (e.filters == null || e.filters.length === 0) &&
        e.breakdown == null &&
        e.date_range == null &&
        e.date_comparison == null
      );
    }
    function u(t, n, r) {
      var o;
      r === void 0 && (r = !0);
      var a = t.appliedFilterInputs,
        i = t.appliedHandlerIDs,
        l = t.breakdown,
        s = t.columns,
        u = t.dateComparison,
        c = t.dateRange,
        d = t.sortCriteria,
        m = t.tab,
        p = new Set(i),
        _ = ((o = n == null ? void 0 : n.action_rationales) != null ? o : [])
          .map(function (e) {
            return e.handler_id == null || e.rationale == null
              ? null
              : { handler_id: e.handler_id, rationale: e.rationale };
          })
          .filter(function (e) {
            return e != null && p.has(e.handler_id);
          });
      return {
        action_rationales: _,
        breakdown: l,
        columns: s.length > 0 ? s : null,
        date_comparison: u,
        date_range:
          c == null
            ? null
            : { end_date: c.end, preset: c.preset, start_date: c.start },
        filters: a.length === 0 ? null : a,
        engine_run_id: r ? (n == null ? void 0 : n.engine_run_id) : null,
        routed_handlers: i,
        sorting:
          d.length > 0
            ? d.map(function (t) {
                return { column: t.field, direction: e(t.direction) };
              })
            : null,
        tab: p.has("tab") ? m : null,
      };
    }
    ((l.isEmptyAppliedViewSpec = s), (l.buildAppliedViewSpecInput = u));
  },
  98,
);
