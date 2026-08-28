__d(
  "ZenonConnectionStatePeerConnectionDelegate",
  ["Promise", "ZenonLogPromiseRejection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        connectionDestroyed: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { error: i, peerConnectionRole: a },
                type: "connectionDestroyed",
              });
            }),
          );
        },
        connectionDropped: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { peerConnectionRole: a },
                type: "connectionDropped",
              });
            }),
          );
        },
        connectionEstablished: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { peerConnectionRole: a },
                type: "connectionEstablished",
              });
            }),
          );
        },
        createDataMessageSubscription: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { dataChannelLabel: a, messageHandler: i },
                type: "createDataMessageSubscription",
              });
            }),
          );
        },
        dataChannelMesageReceived: function (o, a, i, l) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: {
                  dataChannelLabel: i,
                  dataMessage: l,
                  peerConnectionRole: a,
                },
                type: "dataMessageReceived",
              });
            }),
          );
        },
        removeDataMessageSubscription: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { dataChannelLabel: a, messageHandler: i },
                type: "removeDataMessageSubscription",
              });
            }),
          );
        },
        sendIceCandidate: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { candidate: i, peerConnectionRole: a },
                type: "iceCandidateReady",
              });
            }),
          );
        },
        sendLocalMediaStateUpdate: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { mediaStates: i, peerConnectionRole: a },
                type: "localMediaStateUpdateReady",
              });
            }),
          );
        },
        sendRemoteSdpSet: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { peerConnectionRole: a },
                type: "remoteSdpSet",
              });
            }),
          );
        },
        sendSdpReady: function (o, a, i, l, s, u) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              var n = { tracks: [], version: i.version };
              l.forEach(function (e) {
                var t = {
                  enabled: e.enabled,
                  participantID: s,
                  trackID: e.trackId,
                  type: e.contentType,
                };
                n.tracks.push(t);
              });
              var r = {
                connectionDirection: u,
                mediaStates: n,
                peerConnectionRole: a,
                sdp: i,
              };
              i.type === "offer"
                ? o.processEvent({
                    onError: t,
                    onSuccess: e,
                    payload: r,
                    type: "offerReady",
                  })
                : o.processEvent({
                    onError: t,
                    onSuccess: e,
                    payload: r,
                    type: "answerReady",
                  });
            }),
          );
        },
        setPeerConnectionEventHandlers: function (t, n, r, o, a) {
          t.setPeerConnectionEventHandlers({
            onConnectionDestroyed: function (t) {
              return s.connectionDestroyed(n, r, t);
            },
            onConnectionDropped: function () {
              return s.connectionDropped(n, r);
            },
            onConnectionEstablished: function () {
              return s.connectionEstablished(n, r);
            },
            onCreateDataMessageSubscription: function (t, r) {
              return s.createDataMessageSubscription(n, t, r);
            },
            onDataChannelMessageReceived: function (t, o) {
              return s.dataChannelMesageReceived(n, r, t, o);
            },
            onIceCandidateReady: function (t) {
              return s.sendIceCandidate(n, r, t);
            },
            onLocalMediaStateUpdate: function (t) {
              return s.sendLocalMediaStateUpdate(n, r, t);
            },
            onLocalSdpSet: function (t, i) {
              return s.sendSdpReady(n, r, t, i, o().selfParticipantID, a);
            },
            onRemoteSdpSet: function () {
              return s.sendRemoteSdpSet(n, r);
            },
            onRemoveDataMessageSubscription: function (t, r) {
              return s.removeDataMessageSubscription(n, t, r);
            },
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
