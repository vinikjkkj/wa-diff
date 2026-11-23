__d(
  "AdsInsightsDatavizFrequencyInsightsFetchErrorLoggerPlugin",
  [
    "AdsInsightsDatavizFrequencyInsightsFetchErrorActionFlux",
    "adsDraftIsApplicationIDPowerEditor",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          if (r("adsDraftIsApplicationIDPowerEditor")(t.adsApplicationID)) {
            var e = "dataviz_frequency_insights_fetch_error";
            r("adsMgmtLogger")(e, {
              action_type: o(
                "AdsInsightsDatavizFrequencyInsightsFetchErrorActionFlux",
              ).actionType,
            });
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
