__d(
  "ZenonSignalingSMGuards",
  [
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonSignalingSharedActions",
    "isEmployeeTestUserZenonLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t.type === "receiveRemoteSdpRequest" &&
        t.payload.sdp.type === "offer" &&
        o("ZenonSignalingSharedActions").shouldRejectRequest(
          e.lastRemoteMediaUpdateVersion,
          t.payload.fromVersion,
        ) === !1
      );
    }
    function s(e, t) {
      return (
        t.type === "receiveRemoteSdpRequest" &&
        t.payload.sdp.type === "offer" &&
        o("ZenonSignalingSharedActions").shouldRejectRequest(
          e.lastRemoteMediaUpdateVersion,
          t.payload.fromVersion,
        )
      );
    }
    function u(e, t) {
      return (
        t.type === "receiveRemoteSdpRequest" &&
        t.payload.sdp.type === "pranswer"
      );
    }
    function c(e, t) {
      return (
        t.type === "receiveRemoteSdpRequest" && t.payload.sdp.type === "answer"
      );
    }
    function d(e, t) {
      return (
        t.type === "sendLocalSdpRequest" && t.payload.sdp.type === "answer"
      );
    }
    function m(e, t) {
      return (
        t.type === "receiveLocalSdpResponse" &&
        t.payload.source === "joinResponse"
      );
    }
    function p(e, t) {
      var n =
        t.type === "receiveRemoteSdpRequest" &&
        (t.payload.source === "serverMediaUpdateRequest" ||
          t.payload.source === "clientMediaUpdateResponse");
      return (
        t.type === "receiveRemoteSdpRequest" &&
          !n &&
          (r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
            checkpoint:
              "[ZP] Calling the processed function for transaction id: " +
              String(t.payload.ackMessageId) +
              ". Payload source: " +
              String(t.payload.source) +
              ".",
          }),
          t.payload.onProcessed && t.payload.onProcessed()),
        n
      );
    }
    function _(e, t) {
      return (
        t.type === "receiveRemoteSdpRequest" && t.payload.sdp.type === "offer"
      );
    }
    function f(e, t) {
      return t.type === "sendLocalSdpRequest" && t.payload.sdp.type === "offer";
    }
    function g(e, t) {
      return t.type === "sendLocalSdpRequest" && t.payload.sdp.type === "offer";
    }
    function h(e, t) {
      var n =
        t.type === "receiveMediaUpdateResponse" &&
        t.payload.responseStatusCode !==
          o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.OK &&
        t.payload.ackMessageId === e.mediaUpdateRequestTransactionId;
      return (
        t.type === "receiveMediaUpdateResponse" &&
          t.payload.responseStatusCode !==
            o("ZenonMWMessageTypes").ZenonMWResponseStatusCode.OK &&
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
            checkpoint:
              "[ZP] Server rejected offer with code: " +
              String(t.payload.responseStatusCode) +
              ", subCode: " +
              String(t.payload.responseSubCode) +
              ". Outgoing transaction id was: " +
              String(e.mediaUpdateRequestTransactionId) +
              ". Incoming transaction id was: " +
              String(t.payload.ackMessageId) +
              ". Transaction should be canceled: " +
              String(n) +
              ".",
          }),
        n
      );
    }
    function y(e, t) {
      var n =
          t.type === "messageSent" &&
          t.messageID === e.lastRemoteSdpResponseMessageId,
        o = t.messageID;
      if (r("isEmployeeTestUserZenonLogging")()) {
        var a;
        r("ZenonInfraActionsLogger").logCheckpoint({
          checkpoint:
            "lastRemoteSdpResponseMessageIdSentGuard: " +
            (n ? "Passed" : "Failed") +
            " Last ID: " +
            ((a = e.lastRemoteSdpResponseMessageId) != null ? a : "null") +
            ". 'Incoming ID: " +
            (o != null ? o : "null"),
        });
      }
      return n;
    }
    ((l.sdpOfferReceiveNotRejectedGuard = e),
      (l.sdpOfferReceiveRejectedGuard = s),
      (l.sdpPrAnswerReceiveGuard = u),
      (l.sdpAnswerReceiveGuard = c),
      (l.sdpAnswerSendGuard = d),
      (l.sdpJoinResponseReceiveGuard = m),
      (l.receiveRemoteSdpRequestSmuOrCmuGuard = p),
      (l.sdpOfferReceiveGuard = _),
      (l.sdpOfferSendGuard = f),
      (l.sdpOfferSendGuardNegotiationComplete = g),
      (l.receiveNonOkMediaUpdateResponseGuard = h),
      (l.lastRemoteSdpResponseMessageIdSentGuard = y));
  },
  98,
);
