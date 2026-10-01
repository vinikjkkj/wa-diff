__d(
  "CometAdsRenderingValidationContext",
  ["FBLogger", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        dispatcher: function (t) {
          r("FBLogger")("comet_ads").mustfix(
            "CometAdsRenderingValidationLoggingContext is not initialized with a valid dispatcher",
          );
        },
        finalizePendingLogs: function () {},
        getCurrentState: function () {
          return null;
        },
        registerPendingLogsFinalizer: function (t) {
          return function () {};
        },
        sponsoredData: null,
      });
    l.default = u;
  },
  98,
);
