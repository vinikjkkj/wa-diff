__d(
  "ZenonConnectionStateSignalingDelegate",
  ["Promise", "ZenonLogPromiseRejection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        onCapabilitiesReceived: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { capabilities: a, escalationConferenceName: i },
                type: "capabilitiesReceived",
              });
            }),
          );
        },
        onClientInfoReceived: function (o, a, i, l) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: {
                  actorRepresentatives: i,
                  mediaPath: l,
                  userCapabilities: a,
                },
                type: "clientInfoReceived",
              });
            }),
          );
        },
        onClientRenegotiationReceived: function (t, n) {
          t.processEvent(n);
        },
        onDismissReceived: function (o, a, i, l) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              var n = {
                detailedReasonFromMW: l,
                dismissReason: a,
                dismissReasonSetByRemote: !0,
                dismissSubreason:
                  "Server sent dismiss message to client: " +
                  (i != null ? i : "null"),
                shouldInformPeer: !1,
              };
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: n,
                type: "endConnection",
              });
            }),
          );
        },
        onGenericDataMessageReceived: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              var n = { dataChannelLabel: a, dataMessage: i };
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: n,
                type: "dataMessageReceived",
              });
            }),
          );
        },
        onIceCandidateReceived: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: a,
                type: "iceCandidateReceived",
              });
            }),
          );
        },
        onMediaUpdateReceived: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { mediaStates: a },
                type: "mediaUpdateReceived",
              });
            }),
          );
        },
        onMediaUpdateResponseReceived: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: a,
                type: "mediaUpdateResponseReceived",
              });
            }),
          );
        },
        onParticipantUpdateReceived: function (o, a, i) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { participantStates: a, sctpUserIdNodeIdMap: i },
                type: "participantUpdateReceived",
              });
            }),
          );
        },
        onPendingApprovalReceived: function (o) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                type: "pendingApproval",
              });
            }),
          );
        },
        onRenegotiationRequested: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { hasRemoteOffer: a },
                type: "initiatePeerConnectionRestarting",
              });
            }),
          );
        },
        onRoomContextUpdateReceived: function (o, a) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: { context: a },
                type: "connectionRoomUpdateReceived",
              });
            }),
          );
        },
        onSdpReceived: function (o, a, i, l, s, u, c, d, m, p) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                payload: {
                  e2eeServerState: p,
                  mediaPath: i,
                  mediaStates: l,
                  messageID: m,
                  onProcessed: d,
                  renegotiationOffer: u,
                  sdp: a,
                  sdpOriginLocalId: c,
                  source: s,
                },
                type: "sdpReceived",
              });
            }),
          );
        },
        onServerRenegotiationFinished: function (o) {
          return r("ZenonLogPromiseRejection")(
            new (e || (e = n("Promise")))(function (e, t) {
              o.processEvent({
                onError: t,
                onSuccess: e,
                type: "serverRenegotiationFinished",
              });
            }),
          );
        },
        setSignalingEventHandlers: function (t, n) {
          t.setSignalingEventHandlers({
            onCapabilitiesReceived: function (t, r) {
              return s.onCapabilitiesReceived(n, t, r);
            },
            onClientInfoReceived: function (t, r, o) {
              return s.onClientInfoReceived(n, t, r, o);
            },
            onClientRenegotiationReceived: function (t) {
              return s.onClientRenegotiationReceived(n, t);
            },
            onDismissReceived: function (t, r, o, a) {
              return s.onDismissReceived(n, r, o, a);
            },
            onGenericDataMessageReceived: function (t, r) {
              return s.onGenericDataMessageReceived(n, t, r);
            },
            onIceCandidateReceived: function (t) {
              return s.onIceCandidateReceived(n, t);
            },
            onMediaUpdateReceived: function (t) {
              return s.onMediaUpdateReceived(n, t);
            },
            onMediaUpdateResponseReceived: function (t) {
              return s.onMediaUpdateResponseReceived(n, t);
            },
            onParticipantUpdateReceived: function (t, r) {
              return s.onParticipantUpdateReceived(n, t, r);
            },
            onPendingApprovalReceived: function () {
              return s.onPendingApprovalReceived(n);
            },
            onRenegotiationRequested: function (t) {
              return s.onRenegotiationRequested(n, t);
            },
            onRoomContextUpdateReceived: function (t) {
              return s.onRoomContextUpdateReceived(n, t);
            },
            onSdpReceived: function (t, r, o, a, i, l, u, c, d) {
              return s.onSdpReceived(n, t, r, o, a, i, l, u, c, d);
            },
            onServerRenegotiationFinished: function () {
              return s.onServerRenegotiationFinished(n);
            },
          });
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
