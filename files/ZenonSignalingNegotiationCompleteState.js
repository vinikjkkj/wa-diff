__d(
  "ZenonSignalingNegotiationCompleteState",
  [
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t.type === "receiveRemoteSdpRequest") {
        var n,
          o = t.payload,
          a = o.e2eeServerState,
          i = o.fromVersion,
          l = i === void 0 ? -1 : i,
          s = o.mediaPath,
          u = o.mediaStates,
          c = o.onProcessed,
          d = o.sdp,
          m = o.sdpOriginLocalId,
          p = o.source,
          _ = (n = e.lastAckedLocalSdpVersion) != null ? n : -1;
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
            checkpoint:
              "negotiationComplete receiveAnswer: lastAckedLocalSdpVersion: " +
              _ +
              ", fromVersion: " +
              l +
              ", source: " +
              p,
          }),
          r("promiseDone")(
            e.onSdpReceived(
              d,
              s,
              u,
              p != null ? p : null,
              null,
              m,
              c,
              t.payload.ackMessageId,
              a,
            ),
          ),
          { lastRemoteMediaUpdateVersion: d.version }
        );
      }
      return {};
    }
    function s(e, t) {
      if (t.type === "sendMediaUpdateRequest")
        if (e.isMediaUpdateResponsePending === !0) {
          var n,
            o = t.onError,
            a = t.onSent,
            i = t.payload;
          return (
            (n = e.mediaUpdateRequestToSend) == null ||
              n.onError(
                r("err")("pending media update replaced by newer update"),
              ),
            { mediaUpdateRequestToSend: { onError: o, onSent: a, payload: i } }
          );
        } else {
          var l = e.sendSignalingEvent(t.payload, t.onSent, t.onError);
          return {
            isMediaUpdateResponsePending: !0,
            mediaUpdateRequestToSend: null,
            mediaUpdateRequestTransactionId: l,
          };
        }
      return {};
    }
    ((l.onReceiveAnswer = e), (l.onSendMediaUpdateRequest = s));
  },
  98,
);
