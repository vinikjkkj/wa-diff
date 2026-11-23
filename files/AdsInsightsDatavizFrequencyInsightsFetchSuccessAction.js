__d(
  "AdsInsightsDatavizFrequencyInsightsFetchSuccessAction",
  ["AdsInsightsDatavizFrequencyInsightsFetchSuccessLoggerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsInsightsDatavizFrequencyInsightsFetchSuccessLoggerPlugin",
            n("AdsInsightsDatavizFrequencyInsightsFetchSuccessLoggerPlugin"),
            {},
          ),
        ];
      },
      "ADS_INSIGHTS_DATAVIZ_FREQUENCY_INSIGHTS_FETCH_SUCCESS",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
