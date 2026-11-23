__d(
  "AdsInsightsDatavizFrequencyInsightsFetchSuccessLoggerPlugin",
  [
    "AdsInsightsDatavizFrequencyInsightsFetchSuccessActionFlux",
    "adsDraftIsApplicationIDPowerEditor",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          if (r("adsDraftIsApplicationIDPowerEditor")(t.adsApplicationID)) {
            var e = "dataviz_frequency_insights_fetch_success";
            r("adsMgmtLogger")(
              e,
              babelHelpers.extends(
                {
                  action_type: o(
                    "AdsInsightsDatavizFrequencyInsightsFetchSuccessActionFlux",
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
