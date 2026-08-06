__d(
  "CometDevToolsSmaxInterop",
  ["FBLogger", "WAWebDebug"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = "smax";
    function u(t) {
      (e.add(t),
        t.onDisconnected(function () {
          e.delete(t);
        }),
        t.onMessage(function (e, n) {
          switch (e) {
            case "init_smax_runner": {
              r("WAWebDebug")
                .initSmaxRunner(n)
                .catch(function (e) {
                  r("FBLogger")("Comet Dev Tools: SMAX")
                    .catching(e)
                    .mustfix(
                      "Error initiating SMAX Runner from Comet Dev Tool",
                    );
                });
              break;
            }
            case "end_smax_runner": {
              r("WAWebDebug")
                .getSmaxRunner()
                .then(function (e) {
                  e.end();
                })
                .catch(function (e) {
                  r("FBLogger")("Comet Dev Tools: SMAX")
                    .catching(e)
                    .mustfix("Error ending SMAX Runner from Comet Dev Tool");
                });
              break;
            }
            case "enable_flipper_connection":
              r("WAWebDebug")
                .enableFlipperConnection()
                .then(function () {
                  t.postMessage("flipper_connected");
                })
                .catch(function (e) {
                  (t.postMessage("flipper_connection_failed"),
                    r("FBLogger")("Comet Dev Tools: SMAX")
                      .catching(e)
                      .mustfix(
                        "Error enabling Flipper connectiontion from Comet Dev Tool",
                      ));
                });
              break;
            case "disable_flipper_connection":
              r("WAWebDebug")
                .disableFlipperConnection()
                .then(function () {
                  t.postMessage("flipper_disconnected");
                })
                .catch(function (e) {
                  (t.postMessage("flipper_disconnection_failed"),
                    r("FBLogger")("Comet Dev Tools: SMAX")
                      .catching(e)
                      .mustfix(
                        "Error disabling Flipper connectiontion from Comet Dev Tool",
                      ));
                });
          }
        }));
    }
    var c = { namespace: s, onConnection: u };
    l.default = c;
  },
  98,
);
