__d(
  "AdsMgmtGuidanceEngineRecommendationsTimestampProviderPlugin",
  ["AdsMgmtGuidanceEngineRecommendationsLoadingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState:
          Date.now() -
          o("AdsMgmtGuidanceEngineRecommendationsLoadingUtils")
            .REFRESH_TIME_FRAME,
      },
      s = e;
    l.default = s;
  },
  98,
);
