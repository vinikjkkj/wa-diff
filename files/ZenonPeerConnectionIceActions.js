__d(
  "ZenonPeerConnectionIceActions",
  ["ZenonAuditedCheckpointLogId", "ZenonInfraActionsLogger", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        onIceConnected: function (t) {
          return t.onConnectionEstablished();
        },
        onIceConnectionStateChanged: function (n, o) {
          if (o.type === "iceConnectionStateChange") {
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint:
                "iceConnectionStateChange: " + o.payload.iceConnectionState,
            });
            var t =
                o.payload.iceConnectionState === "connected" ||
                o.payload.iceConnectionState === "completed",
              a =
                o.payload.iceConnectionState === "disconnected" ||
                o.payload.iceConnectionState === "failed";
            return (
              t
                ? r("promiseDone")(e.onIceConnected(n), o.onSuccess, o.onError)
                : a &&
                  r("promiseDone")(
                    n.onConnectionDropped(),
                    o.onSuccess,
                    o.onError,
                  ),
              { iceConnectionState: o.payload.iceConnectionState }
            );
          }
          return {};
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
