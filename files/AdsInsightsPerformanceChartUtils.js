__d(
  "AdsInsightsPerformanceChartUtils",
  [
    "AdsInsightsFields",
    "AdsInsightsPerformanceMetricsUtils",
    "CandelaConstants",
    "expectationViolation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsInsightsPerformanceMetricsUtils").getConfigOrNull(e),
        i,
        l = o("CandelaConstants").ScaleType.NUMBER;
      if (a)
        ((i =
          a.transform === "partialSums" || a.transform === "partialReaches"
            ? o("CandelaConstants").RenderAs.AREA
            : o("CandelaConstants").RenderAs.LINE),
          (l = a.type || o("CandelaConstants").ScaleType.NUMBER));
      else {
        i = o("CandelaConstants").RenderAs.LINE;
        var s = o("AdsInsightsFields").getConfig(e),
          u = s.valueType;
        switch (u) {
          case "CURRENCY":
            l = o("CandelaConstants").ScaleType.CURRENCY;
            break;
          case "INTEGER":
          case "FLOAT":
          case "LONG_INTEGER":
            break;
          default:
            r("expectationViolation")("Invalid metric config type " + u);
        }
      }
      var c = { currencyCode: t, renderAs: i, type: l };
      return n === !0
        ? babelHelpers.extends(
            {
              className: o("CandelaConstants").ClassName.BENCHMARK,
              comparisonFor: e,
            },
            c,
          )
        : c;
    }
    l.getSchemaForMetric = e;
  },
  98,
);
