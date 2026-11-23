__d(
  "WAFlowsOpenExternalURI",
  ["WAFlowsBridgeEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      await t({
        eventName: o("WAFlowsBridgeEvents").WAFlowsWebBridgeEventNames
          .WAFlowsOpenURL,
        payload: { url: e.toString() },
        fallBackDataForWeb: {},
        hasCallback: !1,
      });
    }
    l.openExternalURI = e;
  },
  98,
);
