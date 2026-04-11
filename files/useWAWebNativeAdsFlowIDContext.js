__d(
  "useWAWebNativeAdsFlowIDContext",
  ["FBLogger", "WAWebNativeAdsFlowIDContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = s(r("WAWebNativeAdsFlowIDContext"));
      if (e == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "WAWeb Native Ads FlowID context not set",
        );
      return e;
    }
    l.default = u;
  },
  98,
);
