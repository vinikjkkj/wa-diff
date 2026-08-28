__d(
  "ZenonPeerConnectionTerminatingState",
  [
    "FBLogger",
    "Promise",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonMediaError",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (a, i) {
        var t, l;
        switch (
          (a.mediaChannelManager.stopStatsPolling(),
          (i.type !== "endCall" || i.payload.stopLocalTracks) &&
            (r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint: "stopping local tracks",
            }),
            a.mediaChannelManager.stopLocalTracks()),
          i.type)
        ) {
          case "endCall":
            if (((t = i.payload) == null ? void 0 : t.restart) !== !0) {
              var s;
              r("promiseDone")(
                a.onConnectionDestroyed(
                  (s = i.payload.error) != null ? s : null,
                ),
              );
            }
            i.onSuccess();
            break;
          case "applyLocalSdp":
          case "error.platform.applyLocalSdpInvoke":
            (r("promiseDone")(
              a.onConnectionDestroyed(
                o("ZenonMediaError").ZenonMediaError.SetLocalSdpFailed,
              ),
            ),
              i.onError == null ||
                i.onError(
                  r("err")(
                    o("ZenonMediaError").ZenonMediaError.SetLocalSdpFailed,
                  ),
                ));
            break;
          case "applyRemoteSdp":
          case "error.platform.applyRemoteSdpInvoke":
          case "error.platform.renegotiatingInvoke":
            (r("promiseDone")(
              a.onConnectionDestroyed(
                o("ZenonMediaError").ZenonMediaError.SetRemoteSdpFailed,
              ),
            ),
              i.onError == null ||
                i.onError(
                  r("err")(
                    o("ZenonMediaError").ZenonMediaError.SetRemoteSdpFailed,
                  ),
                ));
            break;
          case "error.platform.rollingSdpBackInvoke":
            (r("promiseDone")(
              a.onConnectionDestroyed(
                o("ZenonMediaError").ZenonMediaError.RollbackSdpFailed,
              ),
            ),
              i.onError == null ||
                i.onError(
                  r("err")(
                    o("ZenonMediaError").ZenonMediaError.RollbackSdpFailed,
                  ),
                ));
            break;
          default:
            (r("FBLogger")("rtc_www").warn(
              "Event " +
                i.type +
                " logged as unknown error. Please add a more specific error for this event type.",
            ),
              r("promiseDone")(
                a.onConnectionDestroyed(
                  o("ZenonMediaError").ZenonMediaError.UnknownError,
                ),
              ),
              i.onError == null ||
                i.onError(
                  r("err")(o("ZenonMediaError").ZenonMediaError.UnknownError),
                ));
            break;
        }
        return (
          a.sdpManager.closePeerConnection(),
          (l = a.tslogUploader) == null || l.logTslog(),
          (e || (e = n("Promise"))).resolve(
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint: "cleaning up peer connection, event: " + i.type,
            }),
          )
        );
      },
      u = function (t, n) {};
    ((l.cleanUp = s), (l.done = u));
  },
  98,
);
