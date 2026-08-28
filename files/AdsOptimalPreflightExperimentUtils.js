__d(
  "AdsOptimalPreflightExperimentUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.experimentName,
        n = e.hbtTrain,
        o = e.hbtType;
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_optimal_preflight_hbt_exposure_check",
        data: { source: o, message: t, sub_event: n },
      });
    }
    l.logOptimalPreflightIBTExperimentExposure = e;
  },
  98,
);
