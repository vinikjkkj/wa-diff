__d(
  "ZenonConnectionPeerConnectionRestartingState",
  [
    "RpWebPeerConnectionEndDelay",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageTypes",
    "ZenonMediaActionLogger",
    "ZenonParticipantState",
    "promiseDone",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t.type === "sdpReceived") {
        var n = t.payload,
          o = n.e2eeServerState,
          a = n.mediaStates,
          i = n.messageID,
          l = n.onProcessed,
          s = n.renegotiationOffer,
          u = n.sdp,
          c = n.sdpOriginLocalId,
          d = n.source;
        (e.updateConnectionModel(function (e) {
          e.updateTrackMapFromMediaStates(a.tracks, u.type === "pranswer");
        }),
          r("promiseDone")(
            e.secondaryPeerConnectionManager.applyRemoteSdp(
              u,
              a,
              d,
              s,
              c,
              l,
              i,
              o,
            ),
          ));
      }
    }
    function s(e, t) {
      var n;
      if (
        t.type !== "connectionEstablished" ||
        t.payload.peerConnectionRole !== "secondary"
      )
        return {};
      var a = e.peerConnectionManager,
        i = e.secondaryPeerConnectionManager,
        l = e.signalingClient,
        s = e.updateConnectionModel,
        u = l.getSignalingModel(),
        c = u.getMediaModeManager(),
        d = c.getMediaMode(),
        m = i.getTracks();
      (a.getTracks().forEach(function (e) {
        var t = m.get(e.trackId);
        !e.remote &&
          t != null &&
          e.enabled !== t.enabled &&
          (r("ZenonMediaActionLogger").logEvent({
            checkpoint: "media track out of sync during pc transition",
          }),
          e.webrtcTrack.enabled
            ? r("promiseDone")(i.unmuteLocalTrack(e.trackId))
            : r("promiseDone")(i.muteLocalTrack(e.trackId)));
      }),
        i.renegotiateNullSenderTransport(),
        i.setTrackListenersFromManager(a),
        i.swapPeerConnectionEventHandlers(a));
      var p =
        d === "sfu" ||
        (((n = u.getRoomInfo().context) == null ? void 0 : n.peerID) != null &&
          e.getConnectionModel().connectionDirection === "outgoing");
      (i.setIceRestartEligible(p),
        r("promiseDone")(
          l.sendClientEvent(
            o("ZenonMWMessageTypes").ZenonMWClientEventType.MEDIA_CONNECTED,
          ),
        ),
        s(function (e) {
          (e.registerTrackFetcher(function () {
            return i.getTracks();
          }),
            e.registerRtpSendersFetcher(function () {
              return i.getRtpSenders();
            }),
            e.registerRtpReceiversFetcher(function () {
              return i.getRtpReceivers();
            }),
            e.updateParticipantState(
              e.selfParticipantID,
              o("ZenonParticipantState").ZenonParticipantState.CONNECTED,
            ),
            e.updatePreferredCaptureConfigs());
        }),
        e.logEvent({ name: "callConnected" }),
        e.logEvent({ name: "connectionReady" }));
      var _ = r("setTimeout")(function () {
        (r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
          checkpoint: "Issuing delayed end call to previous peer connection",
        }),
          r("promiseDone")(a.end(!1)));
      }, r("RpWebPeerConnectionEndDelay").DELAY);
      return (
        d === "sfu"
          ? (e.logEvent({ name: "callEscalated" }),
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint:
                "secondaryConnectionEstablished: SFU escalation complete",
            }))
          : r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint:
                "secondaryConnectionEstablished: De-escalation complete",
            }),
        c.onPeerConnectionEstablished(),
        {
          activePeerConnection: "primary",
          bufferTimeout: _,
          peerConnectionManager: i,
          secondaryPeerConnectionManager: a,
        }
      );
    }
    ((l.onSdpReceived = e), (l.onSecondaryConnectionEstablished = s));
  },
  98,
);
