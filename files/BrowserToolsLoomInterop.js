__d(
  "BrowserToolsLoomInterop",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        namespace: "loom",
        onConnection: function (n) {
          (e.setIsDevToolsConnected(!0),
            n.onDisconnected(function () {
              return e.setIsDevToolsConnected(!1);
            }),
            n.onMessage(function (t, o) {
              switch (t) {
                case "initialize":
                  (e.getActiveTraces().forEach(function (e) {
                    n.postMessage("trace_update", {
                      sequenceNumber: e.traceContext.sequenceNumber,
                      status: e.status,
                      triggerInfo: e.traceContext.triggerInfo,
                    });
                  }),
                    e.addStatusListener(function (e, t) {
                      n.postMessage("trace_update", {
                        sequenceNumber: e.sequenceNumber,
                        status: t,
                        triggerInfo: e.triggerInfo,
                      });
                    }),
                    n.postMessage("session_id", e.getSessionId()),
                    e.flush());
                  break;
                default:
                  r("FBLogger")("CDT: loom").mustfix(
                    "Unknown message received by interop script",
                  );
                  break;
              }
            }));
        },
      };
    }
    l.create = e;
  },
  98,
);
