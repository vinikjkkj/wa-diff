__d(
  "AdsInsightsDatavizRFDeliveryFetchSuccessLoggerPlugin",
  [
    "AdsInsightsDatavizRFDeliveryFetchSuccessActionFlux",
    "adsDraftIsApplicationIDPowerEditor",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          if (r("adsDraftIsApplicationIDPowerEditor")(t.adsApplicationID)) {
            var e = "dataviz_rf_delivery_fetch_success";
            r("adsMgmtLogger")(
              e,
              babelHelpers.extends(
                {
                  action_type: o(
                    "AdsInsightsDatavizRFDeliveryFetchSuccessActionFlux",
                  ).actionType,
                },
                t.logData,
              ),
            );
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
