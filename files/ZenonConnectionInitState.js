__d(
  "ZenonConnectionInitState",
  [
    "Promise",
    "ZenonBrowsers",
    "ZenonCapabilities",
    "ZenonParticipantState",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      var i,
        l = [];
      if (a.type !== "createConnection") return {};
      var s = a.payload.direction === "outgoing",
        u = a.payload,
        c = u.appMessages,
        d = u.callMedia,
        m = u.capabilityOverrides,
        p = u.dataChannels,
        _ = u.hasOfferInRing,
        f = u.initialSyncStates,
        g = u.isSecondaryJoinRole,
        h = u.serializedInitialSyncStates,
        y = u.tracks,
        C = u.usersToRing,
        b = u.usersToRingFromRingRequest,
        v = s ? C : b;
      (t.updateConnectionModel(function (e) {
        (v == null ||
          v.forEach(function (t) {
            (e.updateParticipantState(
              t,
              o("ZenonParticipantState").ZenonParticipantState.CONTACTING,
            ),
              e.updatePreferredCaptureConfigs());
          }),
          e.registerTrackFetcher(function () {
            return t.peerConnectionManager.getTracks();
          }),
          e.registerRtpSendersFetcher(function () {
            return t.peerConnectionManager.getRtpSenders();
          }),
          e.registerRtpReceiversFetcher(function () {
            return t.peerConnectionManager.getRtpReceivers();
          }),
          y == null ||
            y.forEach(function (t) {
              e.addLocalTrackToTrackMap({
                enabled: t.enabled,
                participantID: e.selfParticipantID,
                trackID: t.trackId,
                type: t.contentType,
              });
            }),
          m != null && e.updateCurrentUserCapabilities(m));
      }),
        s && r("promiseDone")(t.signalingClient.sendInvite(C, c)));
      var S = t.getConnectionModel(),
        R = S.currentUserCapabilities,
        L = S.selfParticipantID,
        E = {
          addParticipantEnabled: R.canAddParticipants,
          canApproveCollaborationSpaceJoinRequests:
            R.canApproveCollaborationSpaceJoinRequests,
          cowatchEnabled: R.cowatchEnabled,
          cowatchGroupEnabled: R.cowatchGroupEnabled,
          multipleVideoStreamsAllowed: R.supportMultipleStreams,
          multiwayVideoEscalation: R.multiwayVideoEscalation,
          screenSharingEnabled: R.screenSharingEnabled,
        },
        k = o("ZenonCapabilities").capabilitiesToString(E);
      l.push(t.signalingClient.sendClientInfo(new Map([[L, k]]), f, h, g));
      var I = t.signalingClient
        .getSignalingModel()
        .getMediaModeManager()
        .getMediaMode();
      y && l.push(t.peerConnectionManager.addLocalTracks(y, I, d, s));
      var T = I === "sfu" || s;
      t.peerConnectionManager.setShouldEstablishDataChannel(T);
      var D =
        I === "sfu" ||
        (I === "p2p" &&
          ((i = t.signalingClient.getSignalingModel().getRoomInfo().context) ==
          null
            ? void 0
            : i.peerID) == null) ||
        !o("ZenonBrowsers").isSctpdataChannelDisabled();
      return (
        p &&
          p.forEach(function (e) {
            D && l.push(t.peerConnectionManager.createDataChannel(e, I));
          }),
        t.peerConnectionManager.getSupportsSimulcastOverSignaling() &&
          r("promiseDone")(
            t.peerConnectionManager.createDataMessageSubscription(
              "signalingVideoUploadUpdate",
              function (e) {
                return t.peerConnectionManager.onSimulcastSignalingDataMessage(
                  e,
                );
              },
            ),
          ),
        (s || _ !== !0) && l.push(t.peerConnectionManager.applyLocalSdp()),
        (e || (e = n("Promise")))
          .all(l)
          .then(function () {
            return a.onSuccess();
          })
          .catch(function (e) {
            return a.onError(e);
          }),
        { callMedia: d }
      );
    }
    l.onCreateConnection = s;
  },
  98,
);
