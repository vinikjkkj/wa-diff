__d(
  "ZenonConnectionSMGuards",
  [
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonScreenShare",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        t.type !== "addLocalTracks" ||
        e.getConnectionModel().currentUserCapabilities.supportMultipleStreams
      )
        return !1;
      var n = t.payload.tracks;
      return o("ZenonScreenShare").isScreenSharingTrack(n)
        ? Array.from(e.getConnectionModel().getTracks().values()).some(
            function (e) {
              return (
                !e.remote &&
                (e.contentType === "video" || e.contentType === "screen")
              );
            },
          )
        : !1;
    }
    function s(e, t) {
      return (
        t.type === "createConnection" && t.payload.direction === "incoming"
      );
    }
    function u(e, t) {
      return (
        t.type === "createConnection" && t.payload.direction === "outgoing"
      );
    }
    function c(e, t) {
      if (
        t.type !== "removeLocalTrack" ||
        e.getConnectionModel().currentUserCapabilities.supportMultipleStreams
      )
        return !1;
      var n = t.payload.trackID,
        r = e.getConnectionModel().getTracks().get(n);
      return r == null || !o("ZenonScreenShare").isScreenSharingTrack([r])
        ? !1
        : Array.from(e.getConnectionModel().getTracks().values()).some(
            function (e) {
              return (
                e.trackId !== r.trackId &&
                !e.remote &&
                (e.contentType === "video" || e.contentType === "screen")
              );
            },
          );
    }
    function d(e, t) {
      return t.type === "sdpReceived" && t.payload.sdp.type === "answer";
    }
    function m(e, t) {
      return t.type === "sdpReceived" && t.payload.sdp.type === "pranswer";
    }
    function p(e, t) {
      return t.type === "sdpReceived" && t.payload.sdp.type === "offer";
    }
    function _(e, t) {
      return (
        t.type === "sdpReceived" &&
        (t.payload.sdp.type === "answer" ||
          (t.payload.sdp.type === "offer" &&
            t.payload.mediaPath ===
              o("ZenonMWMessageTypes").ZenonMWMediaPath.P2P))
      );
    }
    function f(e, t) {
      return (
        t.payload != null &&
        t.payload.peerConnectionRole != null &&
        t.payload.peerConnectionRole === e.activePeerConnection
      );
    }
    function g(e, t) {
      return (
        t.payload != null &&
        t.payload.peerConnectionRole != null &&
        t.payload.peerConnectionRole === "secondary"
      );
    }
    function h(e, t) {
      var n =
        t.type === "mediaUpdateResponseReceived" &&
        t.payload.cancelNegotiations;
      return (
        t.type === "mediaUpdateResponseReceived" &&
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
            checkpoint:
              "[ZP] cancel negotiations called with: " +
              String(t.payload.cancelNegotiations),
          }),
        n
      );
    }
    ((l.addScreenShareTrackWithReplaceGuard = e),
      (l.incomingConnectionGuard = s),
      (l.outgoingConnectionGuard = u),
      (l.removeScreenShareTrackWithReplaceGuard = c),
      (l.sdpAnswerReceiveGuard = d),
      (l.sdpPrAnswerReceiveGuard = m),
      (l.sdpOfferReceiveGuard = p),
      (l.sdpAnswerOrP2POfferReceiveGuard = _),
      (l.activePeerConnectionGuard = f),
      (l.secondaryPeerConnectionGuard = g),
      (l.cancelNegotiationsGuard = h));
  },
  98,
);
