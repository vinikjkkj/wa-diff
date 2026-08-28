__d(
  "AdsExperimentsCreateABTestStateReducerPlugins",
  [
    "AdsExperimentCreateTestValidatorUtils",
    "adsExperimentsCreateABTestInitialState",
    "adsExperimentsCreateABTestReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return r("adsExperimentsCreateABTestInitialState");
        },
      },
      s = {
        reduce: function (t, n) {
          var e = n.action;
          return r("adsExperimentsCreateABTestReducer")(t, e);
        },
      },
      u = {
        reduce: function (t, n) {
          var e = n.events;
          return o(
            "AdsExperimentCreateTestValidatorUtils",
          ).adsExperimentCreateTestValidate(
            babelHelpers.extends({}, t, {
              keyMetrics: t.keyMetrics.concat(
                e.map(function (e) {
                  return e.eventType;
                }),
              ),
            }),
          );
        },
      };
    ((l.AdsExperimentsResetCreateABTestStateReducerPlugin = e),
      (l.AdsExperimentsCreateABTestReducerPlugin = s),
      (l.AdsExperimentsCreateABTestAddKeyMetricsReducerPlugin = u));
  },
  98,
);
