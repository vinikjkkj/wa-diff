__d(
  "WAFlowsPublicKey",
  ["WAFlowsBridgeEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t({
        eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
          .WAFlowsGetPublicKey,
        hasCallback: !0,
        payload: e,
        fallBackDataForWeb: null,
      });
    }
    l.default = e;
  },
  98,
);
