__d(
  "ZenonTurnDiscovery",
  [
    "Promise",
    "XVideoCallTurnDiscoveryControllerRouteBuilder",
    "ZenonDebugLogger",
    "ZenonInfraActionsLogger",
    "ZenonUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3,
      u = null;
    function c(t, a, i) {
      i === void 0 && (i = s);
      var l = u;
      if (l != null)
        return (
          r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
            callType: "mw",
            checkpoint: "[ZP] returning cached TURN credentials",
          }),
          l
        );
      var c = 1,
        d = r("XVideoCallTurnDiscoveryControllerRouteBuilder").buildUri({
          call_id: t,
          version: c,
        });
      return (
        r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          callType: "mw",
          checkpoint: "[ZP] sending TURN server request to url " + d.toString(),
        }),
        (u = new (e || (e = n("Promise")))(function (e, n) {
          l(i);
          function l(i) {
            o("ZenonUtils").sendServerRequest(
              d.toString(),
              function (t) {
                var n = t.payload;
                return e(n);
              },
              function (e) {
                var o,
                  s,
                  u =
                    (o =
                      (s = e.getErrorSummary()) == null
                        ? void 0
                        : s.toString()) != null
                      ? o
                      : "";
                i > 0
                  ? (r("ZenonDebugLogger")
                      .getFBLogger({ peerID: a, signalingID: t })
                      .info("Failed turn; going to retry", u),
                    l(i - 1))
                  : (r("ZenonDebugLogger")
                      .getFBLogger({ peerID: a, signalingID: t })
                      .warn("Failed turn", u),
                    n(r("err")("failed")));
              },
            );
          }
        })),
        u
      );
    }
    l.requestTurnCreds = c;
  },
  98,
);
