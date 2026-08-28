__d(
  "AdsInsightsPerformanceMetricsUtils",
  ["invariant", "AdsInsightsPerformanceMetricConfig", "StrSet", "memoize"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = function (t) {
        if (t == null) return { field: "" };
        var e = /^(\w+)\((\w+\:?\w+)\)$/.exec(t);
        return Array.isArray(e)
          ? { transform: e[1], field: e[2] }
          : { field: t };
      },
      c = {},
      d = function (t) {
        var e = m(t);
        return (e || s(0, 2823, t), e);
      },
      m = function (t) {
        return g(t)
          ? (c[t] ||
              (c[t] = o("AdsInsightsPerformanceMetricConfig").buildConfig(t)),
            c[t])
          : null;
      },
      p = r("memoize")(function () {
        return o("AdsInsightsPerformanceMetricConfig").getIDs();
      }),
      _ = r("memoize")(function () {
        return new (r("StrSet"))(p());
      }),
      f = r("memoize")(function () {
        return p().filter(function (e) {
          return d(e).showInSelector;
        });
      }),
      g = function (t) {
        return _().contains(t);
      };
    ((l.getDescriptor = u),
      (l.getConfig = d),
      (l.getConfigOrNull = m),
      (l.getIDs = p),
      (l.getIDsSet = _),
      (l.getMetricsInSelector = f),
      (l.isValid = g),
      (l.partialFrequencies = (e = o(
        "AdsInsightsPerformanceMetricConfig",
      )).partialFrequencies),
      (l.partialReaches = e.partialReaches),
      (l.partialSums = e.partialSums),
      (l.partialVideoViews = e.partialVideoViews));
  },
  98,
);
