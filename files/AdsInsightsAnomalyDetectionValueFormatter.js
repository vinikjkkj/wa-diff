__d(
  "AdsInsightsAnomalyDetectionValueFormatter",
  ["AdsInsightsFields", "AdsInsightsFormatters", "AdsRBCuratedGuidanceUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      if (t === "results") {
        var e = o("AdsInsightsFields").getConfig(t);
        return r("AdsInsightsFormatters").getNullableFormatter(
          babelHelpers.extends({}, e, {
            formatType: "FLOAT",
            floatPrecision: 1,
            currencyCode: n,
          }),
        );
      }
      return function (e) {
        return o("AdsRBCuratedGuidanceUtil").getFormattedCPRCurrency(n, e);
      };
    };
    l.getAanomalyDetectionValueFormatter = e;
  },
  98,
);
