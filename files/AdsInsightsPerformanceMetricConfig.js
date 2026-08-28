__d(
  "AdsInsightsPerformanceMetricConfig",
  [
    "fbt",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsPerformanceSummariesUtils",
    "AdsInsightsStyle",
    "curry",
    "memoize",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = function (t, n) {
        return t + "(" + n + ")";
      },
      c = (e = r("curry"))(u, "partialFrequencies"),
      d = e(u, "partialReaches"),
      m = e(u, "partialSums"),
      p = e(u, "partialVideoViews"),
      _ = function (t) {
        var e = /^(\w+)\((\w+)\)$/.exec(t);
        return e ? { transform: e[1], field: e[2] } : { field: t };
      },
      f = r("memoize")(function () {
        var e,
          t,
          n,
          a = [
            {
              id: (t = r("AdsInsightsField")).RESULTS,
              color: (n = r("AdsInsightsStyle")).RESULTS,
              summaryFields: [t.RESULT_RATE],
            },
            {
              id: m(t.RESULTS),
              color: n.getLightColor(n.RESULTS),
              label: s._(/*BTDS*/ "Results (Cumulative)"),
              summaryFields: [
                (e = o("AdsInsightsPerformanceSummariesUtils")).average(
                  t.RESULTS,
                ),
              ],
            },
            { id: t.REACH, color: n.REACH },
            {
              id: d(t.REACH),
              color: n.getLightColor(n.REACH),
              label: s._(/*BTDS*/ "Reach (Cumulative)"),
            },
            {
              id: t.SPEND,
              color: n.SPEND,
              label: s._(/*BTDS*/ "Amount spent"),
              tooltipLabel: s._(/*BTDS*/ "Daily spend"),
              summaryFields: [e.average(t.SPEND)],
              type: "currency",
            },
            {
              id: m(t.SPEND),
              color: n.getLightColor(n.SPEND),
              label: s._(/*BTDS*/ "Amount spent (Cumulative)"),
              summaryFields: [e.average(t.SPEND)],
              type: "currency",
            },
            {
              id: t.TOTAL_ACTIONS,
              color: n.RESULTS,
              summaryFields: [t.TOTAL_UNIQUE_ACTIONS],
            },
            {
              id: t.IMPRESSIONS,
              color: n.IMPRESSIONS,
              summaryFields: [e.average(t.IMPRESSIONS)],
            },
            {
              id: m(t.IMPRESSIONS),
              color: n.getLightColor(n.IMPRESSIONS),
              label: s._(/*BTDS*/ "Impressions (Cumulative)"),
              summaryFields: [e.average(t.IMPRESSIONS)],
            },
            { id: t.FREQUENCY, color: n.getLightColor(n.FREQUENCY) },
            {
              id: c(t.FREQUENCY),
              color: n.getLightColor(n.FREQUENCY),
              label: s._(/*BTDS*/ "Frequency (Cumulative)"),
            },
            {
              id: t.COST_PER_RESULT,
              color: n.COST_PER_RESULT,
              type: "currency",
            },
            { id: t.CPM, color: n.CPM, type: "currency" },
            {
              id: t.RELEVANCE_SCORE_VALUE,
              color: n.FREQUENCY,
              label: s._(/*BTDS*/ "Relevance score"),
            },
          ],
          i = {};
        a.forEach(function (e) {
          return (i[e.id] = e);
        });
        var l = a.map(function (e) {
          return e.id;
        });
        return { ids: l, metricPropsByID: i };
      }),
      g = function (t) {
        return f().metricPropsByID[t];
      },
      h = { showInSelector: !0 },
      y = function (t) {
        var e = g(t),
          n = _(t),
          r = n.field,
          a = n.transform,
          i = r || t,
          l = o("AdsInsightsFields").getConfig(i);
        return babelHelpers.extends({}, h, l, e, {
          fields: [i],
          transform: a,
          primaryField: i,
        });
      },
      C = function () {
        return f().ids;
      },
      b = function () {
        return f().metricPropsByID;
      };
    ((l.partialFrequencies = c),
      (l.partialReaches = d),
      (l.partialSums = m),
      (l.partialVideoViews = p),
      (l.buildConfig = y),
      (l.getIDs = C),
      (l.getMetricPropsByID = b));
  },
  226,
);
