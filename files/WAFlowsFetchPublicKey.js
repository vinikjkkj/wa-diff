__d(
  "WAFlowsFetchPublicKey",
  ["WAFlowsBridgeEvents", "WAFlowsJSBridge"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("WAFlowsJSBridge")({
        eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
          .WAFlowsGetPublicKey,
        payload: e,
        hasCallback: !0,
        fallBackDataForWeb: null,
      });
    }
    l.default = e;
  },
  98,
);
