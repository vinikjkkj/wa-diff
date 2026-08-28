__d(
  "AdsInsightsPerformanceSummaryConfig",
  ["fbt", "AdsInsightsField", "AdsInsightsFields", "curry"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = function (t, n) {
        return t + "(" + n + ")";
      },
      d = (e = r("curry"))(c, "average"),
      m = e(c, "lastDay"),
      p = e(c, "sum"),
      _ = e(c, "uniqueSum"),
      f = function (t) {
        var e = /^(\w+)\((\w+)\)$/.exec(t);
        return e ? { reducer: e[1], field: e[2] } : { field: t };
      },
      g = [
        {
          id: (u = r("AdsInsightsField")).ACTIONS_PER_IMPRESSION,
          label: s._(/*BTDS*/ "Actions per impression"),
        },
        { id: u.COST_PER_RESULT, label: s._(/*BTDS*/ "Cost per result") },
        { id: u.CPM, label: s._(/*BTDS*/ "Cost per 1,000 impressions") },
        { id: m(u.FREQUENCY), label: s._(/*BTDS*/ "Frequency") },
        {
          id: d(u.IMPRESSIONS),
          label: s._(/*BTDS*/ "Average daily impressions"),
          constant: !0,
        },
        { id: p(u.IMPRESSIONS), label: s._(/*BTDS*/ "Total impressions") },
        { id: _(u.REACH), label: s._(/*BTDS*/ "Total reach") },
        { id: u.RESULT_RATE, label: s._(/*BTDS*/ "Result rate") },
        {
          id: d(u.RESULTS),
          label: s._(/*BTDS*/ "Average daily results"),
          constant: !0,
        },
        { id: p(u.RESULTS), label: s._(/*BTDS*/ "Total results") },
        {
          id: d(u.SPEND),
          label: s._(/*BTDS*/ "Average daily amount spent"),
          constant: !0,
        },
        { id: p(u.SPEND), label: s._(/*BTDS*/ "Total spent") },
        { id: d(u.TOTAL_ACTIONS), label: s._(/*BTDS*/ "Total actions") },
      ],
      h = {};
    g.forEach(function (e) {
      return (h[e.id] = e);
    });
    var y = function (t) {
      var e = h[t],
        n = f(t),
        r = n.field,
        a = n.reducer;
      switch (a) {
        case void 0:
      }
      var i = r || t,
        l = o("AdsInsightsFields").getConfig(i);
      return babelHelpers.extends({}, l, e, { fields: [i], primaryField: i });
    };
    ((l.average = d), (l.buildConfig = y));
  },
  226,
);
