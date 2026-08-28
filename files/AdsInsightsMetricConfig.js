__d(
  "AdsInsightsMetricConfig",
  ["AdsInsightsField", "AdsInsightsFields", "AdsInsightsStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        {
          id: (e = r("AdsInsightsField")).RESULTS,
          color: (s = r("AdsInsightsStyle")).RESULTS,
        },
        { id: e.SPEND, color: s.SPEND },
        { id: e.REACH, color: s.REACH },
        { id: e.IMPRESSIONS, color: s.IMPRESSIONS },
      ],
      c = {};
    u.forEach(function (e) {
      return (c[e.id] = e);
    });
    var d = function (t) {
        return c[t];
      },
      m = u.map(function (e) {
        return e.id;
      }),
      p = { showInSelector: !0 },
      _ = function (t) {
        var e = d(t),
          n = t,
          r = o("AdsInsightsFields").getConfig(n);
        return babelHelpers.extends({}, p, r, e, {
          fields: [n],
          primaryField: n,
        });
      };
    ((l.metricPropsByID = c), (l.ids = m), (l.buildConfig = _));
  },
  98,
);
