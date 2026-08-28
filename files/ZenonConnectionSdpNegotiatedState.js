__d(
  "ZenonConnectionSdpNegotiatedState",
  ["Promise", "ZenonBrowsers", "ZenonScreenShare", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o) {
      if (
        !(o.type !== "addLocalTracks" && o.type !== "initiateAddLocalTracks")
      ) {
        var a = [],
          i = o.payload.tracks;
        (a.push(
          t.peerConnectionManager.addLocalTracks(
            i,
            t.signalingClient
              .getSignalingModel()
              .getMediaModeManager()
              .getMediaMode(),
            t.callMedia,
          ),
        ),
          a.push(t.peerConnectionManager.applyLocalSdp()),
          t.updateConnectionModel(function (e) {
            i.forEach(function (t) {
              e.addLocalTrackToTrackMap({
                enabled: t.enabled,
                participantID: e.selfParticipantID,
                trackID: t.trackId,
                type: t.contentType,
              });
            });
          }),
          r("promiseDone")(
            (e || (e = n("Promise"))).all(a),
            o.onSuccess,
            o.onError,
          ));
      }
    }
    function u(e, t) {
      if (t.type === "addLocalTracks") {
        var n = t.payload.tracks;
        o("ZenonScreenShare").isScreenSharingTrack(n) &&
          (r("promiseDone")(
            e.peerConnectionManager.addLocalTracks(
              n,
              e.signalingClient
                .getSignalingModel()
                .getMediaModeManager()
                .getMediaMode(),
              e.callMedia,
            ),
          ),
          e.updateConnectionModel(function (e) {
            n.forEach(function (t) {
              e.addLocalTrackToTrackMap({
                enabled: t.enabled,
                participantID: e.selfParticipantID,
                trackID: t.trackId,
                type: t.contentType,
              });
            });
          }));
      }
    }
    function c(e, t) {
      if (t.type !== "initiatePeerConnectionRestarting") return {};
      var n = e.bufferTimeout,
        a = e.peerConnectionManager,
        i = e.secondaryPeerConnectionManager;
      (window.clearTimeout(n),
        r("promiseDone")(i.restart()),
        r("promiseDone")(
          i.setLocalMediaStateVersion(a.getLocalMediaStateVersion()),
        ));
      var l = e.signalingClient.getSignalingModel().getMediaModeManager(),
        s = l.getMediaMode();
      r("promiseDone")(
        i.addLocalTracks(
          Array.from(a.getTracks().values()).filter(function (e) {
            return !e.remote;
          }),
          s,
          e.callMedia,
        ),
      );
      var u = t.payload.hasRemoteOffer,
        c = s === "sfu",
        d = c || !u;
      return (
        e.secondaryPeerConnectionManager.setShouldEstablishDataChannel(d),
        a.setIceRestartEligible(!1),
        (c || !o("ZenonBrowsers").isSctpdataChannelDisabled()) &&
          a.getDataChannelLabels().forEach(function (e) {
            var t = a.getDataChannelOptions(e);
            r("promiseDone")(i.createDataChannel(e, s, t));
          }),
        e.secondaryPeerConnectionManager.getSupportsSimulcastOverSignaling() &&
          r("promiseDone")(
            e.secondaryPeerConnectionManager.createDataMessageSubscription(
              "signalingVideoUploadUpdate",
              function (t) {
                return e.secondaryPeerConnectionManager.onSimulcastSignalingDataMessage(
                  t,
                );
              },
            ),
          ),
        u || r("promiseDone")(i.applyLocalSdp()),
        l.onInitiatePeerConnectionRestarting(),
        { activePeerConnection: "secondary", bufferTimeout: null }
      );
    }
    function d(t, o) {
      if (
        !(
          o.type !== "removeLocalTrack" && o.type !== "initiateRemoveLocalTrack"
        )
      ) {
        var a = [],
          i = o.payload.trackID;
        (a.push(t.peerConnectionManager.removeLocalTrack(i)),
          a.push(t.peerConnectionManager.applyLocalSdp()),
          t.updateConnectionModel(function (e) {
            e.removeLocalTrackFromTrackMap(i);
          }),
          r("promiseDone")(
            (e || (e = n("Promise"))).all(a),
            o.onSuccess,
            o.onError,
          ));
      }
    }
    function m(e, t) {
      if (t.type === "removeLocalTrack") {
        var n = t.payload.trackID;
        (r("promiseDone")(
          e.peerConnectionManager.removeLocalTrack(n),
          t.onSuccess,
          t.onError,
        ),
          e.updateConnectionModel(function (e) {
            e.removeLocalTrackFromTrackMap(n);
          }));
      }
    }
    function p(e, t) {
      if (t.type === "replaceLocalTrack") {
        var n = t.payload,
          o = n.preserveOriginal,
          a = n.replacementTrack,
          i = n.trackIDToReplace;
        (o != null
          ? r("promiseDone")(
              e.peerConnectionManager.replaceLocalTrack(i, a, o),
              t.onSuccess,
              t.onError,
            )
          : r("promiseDone")(
              e.peerConnectionManager.replaceLocalTrack(i, a),
              t.onSuccess,
              t.onError,
            ),
          e.updateConnectionModel(function (e) {
            (e.removeLocalTrackFromTrackMap(i),
              e.addLocalTrackToTrackMap({
                enabled: a.enabled,
                participantID: e.selfParticipantID,
                trackID: a.trackId,
                type: a.contentType,
              }));
          }));
      }
    }
    ((l.onAddLocalTracks = s),
      (l.onAddScreenShareLocalTrack = u),
      (l.onInitiatePeerConnectionRestarting = c),
      (l.onRemoveLocalTrack = d),
      (l.onRemoveScreenShareLocalTrack = m),
      (l.onReplaceLocalTrack = p));
  },
  98,
);
