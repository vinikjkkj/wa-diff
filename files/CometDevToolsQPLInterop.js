__d(
  "CometDevToolsQPLInterop",
  ["FlipperCometDevToolsImpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "qpl";
    function s(e) {
      (e.postMessage("onConnect", {}),
        o("FlipperCometDevToolsImpl").flipperBridge.onConnect(),
        o(
          "FlipperCometDevToolsImpl",
        ).flipperBridge.subscribeToMessagesFromPlugin(
          "UIPerf",
          function (t, n) {
            e.postMessage(t, n);
          },
        ));
    }
    var u = { namespace: e, onConnection: s };
    l.default = u;
  },
  98,
);
