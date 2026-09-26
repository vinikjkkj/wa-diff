__d(
  "MerlinManager",
  ["MerlinDataAdapter", "MerlinUnifiedProtocolEventFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200;
    function s(t, n) {
      var r = n.coveragePct,
        o = n.time,
        a = n.visiblePct,
        i = t.entries;
      (a != null &&
        (u(i.pZero, 1, o, a), u(i.pFifty, 50, o, a), u(i.pHundred, 100, o, a)),
        r != null &&
          (u(i.pFiftyCoverage, 50, o, r), u(i.pHundredCoverage, 100, o, r)));
      var l = n.visiblePx;
      l != null && u(i.minVisiblePx, e, o, l);
    }
    function u(e, t, n, r) {
      var o = e.length > 0 ? e[e.length - 1] : null;
      r >= t
        ? (o == null || o.exit !== 0) && e.push({ enter: n, exit: 0 })
        : o != null && o.exit === 0 && (o.exit = n);
    }
    function c() {
      return {
        minVisiblePx: [],
        pFifty: [],
        pFiftyCoverage: [],
        pHundred: [],
        pHundredCoverage: [],
        pZero: [],
      };
    }
    function d(e, t, n) {
      return { data: n, entries: c(), itemId: e, originId: t };
    }
    function m(e) {
      var t = e.data,
        n = e.entries,
        o = e.itemId,
        a = e.originId;
      r("MerlinUnifiedProtocolEventFalcoEvent").log(function () {
        var e = t != null ? r("MerlinDataAdapter")(t) : {};
        return babelHelpers.extends(
          {
            element_visibility_absolute_ts: {
              min_visible_px: y(n.minVisiblePx),
            },
            element_visibility_percent_ts: {
              t_0: y(n.pZero),
              t_100: y(n.pHundred),
              t_50: y(n.pFifty),
            },
            entity_id: o,
            origin: a,
            payload: { placeholder_payload: "{}" },
            screen_coverage_percent_ts: {
              t_100: y(n.pHundredCoverage),
              t_50: y(n.pFiftyCoverage),
            },
          },
          e,
        );
      });
    }
    var p = {};
    function _(e, t, n, r) {
      var o = t.visiblePct != null && t.visiblePct === 0,
        a = p[e];
      if (a == null) {
        if (o) return;
        ((a = d(e, n, r)), (p[e] = a));
      }
      (r != null && (a.data = r),
        s(a, t),
        o && (h(a.entries, t.time), m(a), delete p[e]));
    }
    function f() {
      var e = Date.now();
      g(e);
    }
    function g(e) {
      for (var t of Object.keys(p)) {
        var n = p[t];
        (h(n.entries, e), m(n), delete p[t]);
      }
    }
    function h(e, t) {
      var n = [
        e.pZero,
        e.pFifty,
        e.pHundred,
        e.pFiftyCoverage,
        e.pHundredCoverage,
        e.minVisiblePx,
      ];
      for (var r of n) {
        var o = r.length > 0 ? r[r.length - 1] : null;
        o != null && o.exit === 0 && (o.exit = t);
      }
    }
    function y(e) {
      return e
        .filter(function (e) {
          return e.exit !== 0;
        })
        .map(function (e) {
          return { enter_ts: e.enter.toString(), exit_ts: e.exit.toString() };
        });
    }
    ((l.applyUpdate = s),
      (l.mergeUpdateToEntries = u),
      (l.record = _),
      (l.flush = f));
  },
  98,
);
