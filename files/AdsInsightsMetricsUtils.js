__d(
  "AdsInsightsMetricsUtils",
  ["invariant", "AdsInsightsMetricConfig", "StrSet", "memoize"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {},
      u = function (t) {
        var e = c(t);
        return (e || s(0, 559, t), e);
      },
      c = function (n) {
        return _(n)
          ? (e[n] == null &&
              (e[n] = o("AdsInsightsMetricConfig").buildConfig(n)),
            e[n])
          : null;
      },
      d = r("memoize")(function () {
        return o("AdsInsightsMetricConfig").ids;
      }),
      m = r("memoize")(function () {
        return new (r("StrSet"))(d());
      }),
      p = r("memoize")(function () {
        return d().filter(function (e) {
          return u(e).showInSelector;
        });
      }),
      _ = function (t) {
        return m().contains(t);
      };
    ((l.getConfig = u),
      (l.getConfigOrNull = c),
      (l.getIDs = d),
      (l.getIDsSet = m),
      (l.getMetricsInSelector = p),
      (l.isValid = _));
  },
  98,
);
