__d(
  "AdsInsightsDatavizRFDeliveryFetchSuccessAction",
  ["AdsInsightsDatavizRFDeliveryFetchSuccessLoggerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsInsightsDatavizRFDeliveryFetchSuccessLoggerPlugin",
            n("AdsInsightsDatavizRFDeliveryFetchSuccessLoggerPlugin"),
            {},
          ),
        ];
      },
      "ADS_INSIGHTS_DATAVIZ_RF_DELIVERY_FETCH_SUCCESS",
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
