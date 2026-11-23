__d(
  "performanceSummaryGetListByObjectiveAndIndicatorSelector",
  ["AdsInsightsListByObjectiveStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsInsightsListByObjectiveStore"),
      function (e, t, n, o) {
        return r(
          "AdsInsightsListByObjectiveStore",
        ).getListByObjectiveAndIndicator(e, t, n, o);
      },
    );
    l.default = e;
  },
  98,
);
