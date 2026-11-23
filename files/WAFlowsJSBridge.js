__d(
  "WAFlowsJSBridge",
  ["jsBridgeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.eventName,
        n = e.fallBackDataForWeb,
        r = e.hasCallback,
        a = e.payload;
      return o("jsBridgeUtils").getWebJSBridge({
        eventName: t,
        payload: a,
        hasCallback: r,
        fallBackDataForWeb: babelHelpers.extends({}, n),
      });
    }
    l.default = e;
  },
  98,
);
