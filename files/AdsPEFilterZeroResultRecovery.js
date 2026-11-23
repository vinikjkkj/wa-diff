__d(
  "AdsPEFilterZeroResultRecovery",
  ["ActionFilterUtils", "AdsGenericFilterSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (e == null ? void 0 : e.getValues().length) === 0
        ? null
        : (t = e == null ? void 0 : e.key) != null
          ? t
          : null;
    }
    function s(e) {
      return (
        e.getValues().every(function (e) {
          return e.isComplete();
        }) &&
        !o("ActionFilterUtils").isRecommendationFilter(e) &&
        !o("ActionFilterUtils").isAnomalyFilter(e)
      );
    }
    function u(t, n) {
      var o;
      if (n == null || !s(n)) return null;
      var a = (o = t == null ? void 0 : t.getValues()) != null ? o : [],
        i = n.getValues();
      if (i.length !== a.length + 1) return null;
      for (
        var l = e(t),
          u = null,
          c = function (n) {
            var t = i.filter(function (e, t) {
                return t !== n;
              }),
              o = t.length === 0 ? null : new (r("AdsGenericFilterSet"))(t);
            if (e(o) === l) {
              if (u != null) return { v: null };
              u = n;
            }
          },
          d,
          m = 0;
        m < i.length;
        m++
      )
        if (((d = c(m)), d)) return d.v;
      return u;
    }
    function c(e, t, n, r, o) {
      var a = o.currentTotalCount,
        i = o.isCurrentSnapshotSettled;
      if (e != null && e.queryScopeKey !== n) {
        if (
          r === e.requestGeneration ||
          r === e.firstObservedNextTableLoadGeneration
        )
          return e;
        if (!i) return null;
      }
      if (i && a != null && Number.isFinite(a) && a > 0) {
        var l;
        return e != null &&
          e.queryScopeKey === n &&
          ((l = e.filterSet) == null ? void 0 : l.key) ===
            (t == null ? void 0 : t.key) &&
          e.totalCount === a &&
          e.requestGeneration === r &&
          e.firstObservedNextTableLoadGeneration == null
          ? e
          : {
              filterSet: t,
              firstObservedNextTableLoadGeneration: null,
              queryScopeKey: n,
              requestGeneration: r,
              totalCount: a,
            };
      }
      return e != null && e.queryScopeKey !== n
        ? null
        : e == null ||
            e.queryScopeKey !== n ||
            r === e.requestGeneration ||
            r === e.firstObservedNextTableLoadGeneration
          ? e
          : e.firstObservedNextTableLoadGeneration != null
            ? null
            : babelHelpers.extends({}, e, {
                firstObservedNextTableLoadGeneration: r,
              });
    }
    function d(e, t, n, r, o) {
      var a = o.isCurrentSnapshotSettled;
      if (
        !a ||
        e == null ||
        e.queryScopeKey !== n ||
        r === e.requestGeneration ||
        (e.firstObservedNextTableLoadGeneration != null &&
          r !== e.firstObservedNextTableLoadGeneration) ||
        !Number.isFinite(e.totalCount) ||
        e.totalCount <= 0
      )
        return null;
      var i = u(e.filterSet, t);
      if (i == null || t == null) return null;
      var l = t == null ? void 0 : t.getValues()[i];
      return l == null
        ? null
        : {
            filterIndex: i,
            filterKey: l.key,
            filterSetKey: t.key,
            totalCount: e.totalCount,
          };
    }
    function m(e, t, n, r, o, a) {
      var i = d(e, t, n, r, { isCurrentSnapshotSettled: !0 });
      return i == null
        ? { status: "unavailable" }
        : o === "pending"
          ? { status: "pending" }
          : o === "settled" && a === 0
            ? { status: "available", suggestion: i }
            : { status: "unavailable" };
    }
    ((l.getNextAdsPEFilterZeroResultRecoverySnapshot = c),
      (l.getAdsPEFilterZeroResultRecoverySuggestion = d),
      (l.getAdsPEFilterZeroResultRecoveryDecision = m));
  },
  98,
);
