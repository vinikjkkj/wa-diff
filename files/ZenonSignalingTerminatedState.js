__d(
  "ZenonSignalingTerminatedState",
  [
    "ODS",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonSignalingTypes",
    "clearInterval",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e.pingTimer
        ? (r("clearInterval")(e.pingTimer), delete e.pingTimer, e)
        : {};
    }
    function u(t, n) {
      var a;
      if (n.type === "receiveRemoteSdpRequest") {
        ((e || (e = o("ODS"))).bumpEntityKey(
          4083,
          "zenon_signaling",
          "received_sdp_request_in_signaling_terminated_state",
        ),
          n.payload.onProcessed &&
            (n.payload.onProcessed(),
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint:
                "onProcessed called in ZenonSignalingTerminatedState.onReceiveRemoteSdpRequest",
            })));
        var i = {
          ackMessageId: (a = n.payload.ackMessageId) != null ? a : n.messageID,
          acknowledgedVersion: n.payload.sdp.version,
          eventName: "remoteSdpResponse",
          messageTags: n.payload.messageTags,
          negotiateType: n.payload.negotiateType,
          statusCode: o("ZenonSignalingTypes").ZenonSignalingStatusCode
            .METHOD_NOT_ALLOWED,
          subCode: o("ZenonSignalingTypes").ZenonSignalingStatusSubCode
            .CLIENT_TERMINATED,
          type: n.payload.sdp.type,
        };
        t.sendSignalingEvent(i);
      }
    }
    function c(e, t) {
      if (t.type === "receiveInitiateRenegotiationRequest") {
        t.payload.onProcessed &&
          (t.payload.onProcessed(),
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
            checkpoint:
              "onProcessed called in ZenonSignalingTerminatedState.onReceiveInitiateRenegotiationRequest",
          }));
        var n = {
          ackMessageId: t.messageID,
          acknowledgedVersion: t.payload.version,
          eventName: "initiateRenegotiationResponse",
          hasRemoteOffer: !1,
          statusCode: o("ZenonSignalingTypes").ZenonSignalingStatusCode
            .METHOD_NOT_ALLOWED,
          subCode: o("ZenonSignalingTypes").ZenonSignalingStatusSubCode
            .CLIENT_TERMINATED,
        };
        e.sendSignalingEvent(n);
      }
    }
    function d(e, t) {
      if (t.type === "receiveMediaUpdateRequest") {
        t.payload.onProcessed &&
          (t.payload.onProcessed(),
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
            checkpoint:
              "onProcessed called in ZenonSignalingTerminatedState.onReceiveMediaUpdateRequest",
          }));
        var n = {
          ackMessageId: t.messageID,
          acknowledgedVersion: t.payload.mediaStates.version,
          eventName: "mediaUpdateResponse",
          responseStatusCode: o("ZenonMWMessageTypes").ZenonMWResponseStatusCode
            .METHOD_NOT_ALLOWED,
          responseSubCode: o("ZenonMWMessageTypes").ZenonMWResponseSubCode
            .CLIENT_TERMINATED,
        };
        e.sendSignalingEvent(n);
      }
    }
    ((l.stopPingTimer = s),
      (l.onReceiveRemoteSdpRequest = u),
      (l.onReceiveInitiateRenegotiationRequest = c),
      (l.onReceiveMediaUpdateRequest = d));
  },
  98,
);
