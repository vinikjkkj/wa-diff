__d(
  "ZenonPeerConnectionStateMachine",
  [
    "ZenonDebugLogger",
    "ZenonInfraActionsLogger",
    "ZenonMWMessageReliabilityLogTypes",
    "ZenonPeerConnectionDataActions",
    "ZenonPeerConnectionIceActions",
    "ZenonPeerConnectionMediaActions",
    "ZenonPeerConnectionSMGuards",
    "ZenonPeerConnectionSdpActions",
    "ZenonPeerConnectionTerminatedState",
    "ZenonPeerConnectionTerminatingState",
    "ZenonStateMachineBase",
    "err",
    "qpl",
    "xstate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = {
        iceConnectionState: "new",
        iceConnectionTimeoutID: null,
        lastSuccessfulSdpPair: null,
        localMediaStateUpdateRetryTimerId: null,
        localMediaStateVersion: 1,
        outstandingLocalOffer: !1,
        retryCount: 0,
      },
      f = {
        loggingStateName: "peerConnectionState",
        name: "PeerConnectionStateMachine",
        shortname: "Peer Connection",
      };
    function g(e) {
      var t, n;
      return ((t = e.payload) == null ? void 0 : t.messageID) != null
        ? String((n = e.payload) == null ? void 0 : n.messageID)
        : null;
    }
    var h = (function (e) {
        function t(t, n) {
          var a;
          return (
            n === void 0 && (n = "init"),
            (a =
              e.call(this, {
                base: {
                  guards: {
                    applyRemoteAnswerSdpGuard: o("ZenonPeerConnectionSMGuards")
                      .applyRemoteAnswerSdpGuard,
                    applyRemoteOfferSdpGuard: o("ZenonPeerConnectionSMGuards")
                      .applyRemoteOfferSdpGuard,
                    iceConnectedEventGuard: o("ZenonPeerConnectionSMGuards")
                      .iceConnectedEventGuard,
                    iceConnectedGuard: o("ZenonPeerConnectionSMGuards")
                      .iceConnectedGuard,
                    iceDisconnectedEventGuard: o("ZenonPeerConnectionSMGuards")
                      .iceDisconnectedEventGuard,
                    iceNotConnectedGuard: o("ZenonPeerConnectionSMGuards")
                      .iceNotConnectedGuard,
                    outstandingLocalOfferGuard: o("ZenonPeerConnectionSMGuards")
                      .outstandingLocalOfferGuard,
                    prAnswerSetGuard: o("ZenonPeerConnectionSMGuards")
                      .prAnswerSetGuard,
                  },
                  initState: "init",
                },
                logging: babelHelpers.extends({}, f, {
                  eventToLogTimeoutsOn: "applyRemoteSdp",
                  getTransactionId: g,
                  loggableEvents: ["applyRemoteSdp"],
                  loggingId: Date.now(),
                }),
                machine: {
                  context: babelHelpers.extends({}, _, t),
                  initialState: n,
                  states: R,
                },
              }) || this),
            a.sm.onTransition(function (e) {
              (a.logTransaction(
                e.event,
                o("ZenonMWMessageReliabilityLogTypes")
                  .ZenonMWMessageReliabilityEvent.PROCESSED_SM_EVENT,
              ),
                a.ifDroppedEvent(e, function (e) {
                  return e.onError(r("err")("event was dropped: " + e.type));
                }));
            }),
            a.sm.onTransition(function (e) {
              (r("ZenonInfraActionsLogger").updateCachedValues({
                peerConnectionState: e.value,
              }),
                a.logTransition(e),
                e.value === "terminated" &&
                  r("ZenonDebugLogger")
                    .getInstance()
                    .endQPL(r("qpl")._(64239068, "6172"), a.loggingId));
            }),
            r("ZenonDebugLogger")
              .getInstance()
              .startQPL(r("qpl")._(64239068, "6172"), a.loggingId),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getLocalMediaStateVersion = function () {
            return this.sm.state.context.localMediaStateVersion;
          }),
          t
        );
      })((s = o("ZenonStateMachineBase")).ZenonStateMachineBase),
      y = {
        actions: [
          (u = o("ZenonPeerConnectionMediaActions")).onApplyMediaUpdate,
        ],
      },
      C = {
        actions: [
          (p = o("xstate")).assign(
            (e = r("ZenonPeerConnectionIceActions"))
              .onIceConnectionStateChanged,
          ),
        ],
      },
      b = {
        actions: [
          (c = o("ZenonPeerConnectionDataActions"))
            .onDataChannelMessageReceived,
        ],
      },
      v = { actions: [u.onForceEncodingEnabled] },
      S = { actions: [u.onIceCandidateReady] },
      R = {
        init: {
          exit: [u.startTslog],
          on: {
            addLocalTracks: { target: "addingLocalTracks" },
            applyLocalSdp: { target: "applyingLocalSdp" },
            applyRemoteSdp: {
              cond: (d = o("ZenonPeerConnectionSMGuards"))
                .applyRemoteOfferSdpGuard,
              target: "renegotiating",
            },
            removeLocalTrack: { target: "removingLocalTrack" },
            replaceLocalTrack: { target: "replacingLocalTrack" },
            applyMediaUpdate: y,
            createDataChannel: { actions: [c.onCreateDataChannel] },
            createDataMessageSubscription: {
              actions: [c.onCreateDataMessageSubscription],
            },
            dataChannelMessageReceived: b,
            iceConnectionStateChange: C,
            localMediaStateUpdateRetry: {
              actions: [p.assign(u.onLocalMediaStateUpdateRetry)],
            },
            muteLocalTrack: { actions: [p.assign(u.onMuteLocalTrack)] },
            muteRemoteTrack: { actions: [p.assign(u.onMuteRemoteTrack)] },
            removeDataMessageSubscription: {
              actions: [c.onRemoveDataMessageSubscription],
            },
            setLocalMediaStateVersion: {
              actions: [p.assign(u.onSetLocalMediaStateVersion)],
            },
            stopLocalTrack: { actions: [u.onStopLocalTrack] },
            unmuteLocalTrack: { actions: [p.assign(u.onUnmuteLocalTrack)] },
            unmuteRemoteTrack: { actions: [p.assign(u.onUnmuteRemoteTrack)] },
            applyRemoteIceCandidate: s.defer,
            forceEncodingEnabled: s.defer,
            iceCandidateReady: s.defer,
          },
        },
        applyingLocalSdp: {
          invoke: {
            id: "applyLocalSdpInvoke",
            onDone: {
              actions: [
                p.assign(
                  (m = o("ZenonPeerConnectionSdpActions")).onLocalSdpSet,
                ),
              ],
              target: "hasLocalSdp",
            },
            onError: "terminating",
            src: m.applyLocalSdp,
          },
          on: {
            endCall: { target: "terminating" },
            applyMediaUpdate: y,
            dataChannelMessageReceived: b,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            forceEncodingEnabled: s.defer,
            iceCandidateReady: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        rollingSdpBack: {
          invoke: {
            id: "rollingSdpBackInvoke",
            onDone: { target: "connected" },
            onError: { target: "terminating" },
            src: m.applyingLastSuccessfulSdpPair,
          },
          on: {
            endCall: { target: "terminating" },
            applyMediaUpdate: y,
            dataChannelMessageReceived: b,
            iceCandidateReady: S,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            forceEncodingEnabled: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            remoteSdpFailed: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        hasLocalSdp: {
          entry: [
            function (e) {
              return e.mediaChannelManager.setSimulcastSingleLayerParams();
            },
          ],
          on: {
            applyRemoteSdp: [
              {
                cond: d.applyRemoteAnswerSdpGuard,
                target: "applyingRemoteSdp",
              },
              { cond: d.applyRemoteOfferSdpGuard, target: "renegotiating" },
            ],
            remoteSdpFailed: { target: "rollingSdpBack" },
            endCall: { target: "terminating" },
            applyMediaUpdate: y,
            dataChannelMessageReceived: b,
            iceCandidateReady: S,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyRemoteIceCandidate: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            removeDataMessageSubscription: s.defer,
            forceEncodingEnabled: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        applyingRemoteSdp: {
          invoke: [
            {
              id: "applyRemoteSdpInvoke",
              onDone: [
                {
                  actions: [p.assign(m.updateSdpPair)],
                  cond: d.prAnswerSetGuard,
                  target: "prNegotiated",
                },
                {
                  actions: [p.assign(m.updateSdpPair), m.onRemoteSdpSet],
                  cond: d.iceNotConnectedGuard,
                  target: "negotiated",
                },
                {
                  actions: [p.assign(m.updateSdpPair), m.onRemoteSdpSet],
                  cond: d.iceConnectedGuard,
                  target: "connected",
                },
              ],
              onError: { target: "terminating" },
              src: m.applyRemoteAnswer,
            },
          ],
          on: {
            endCall: { target: "terminating" },
            iceCandidateReady: S,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyMediaUpdate: s.defer,
            applyLocalSdp: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            dataChannelMessageReceived: s.defer,
            forceEncodingEnabled: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        negotiated: {
          entry: [m.logNegotiationCompleted],
          on: {
            endCall: { target: "terminating" },
            iceConnectionStateChange: [
              {
                actions: [p.assign(e.onIceConnectionStateChanged)],
                cond: d.iceConnectedEventGuard,
                target: "connected",
              },
              { actions: [p.assign(e.onIceConnectionStateChanged)] },
            ],
            iceRestart: { target: "applyingLocalSdp" },
            applyMediaUpdate: y,
            applyRemoteIceCandidate: { actions: [u.applyRemoteIceCandidate] },
            dataChannelMessageReceived: b,
            forceEncodingEnabled: v,
            iceCandidateReady: S,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        prNegotiated: {
          on: {
            endCall: { target: "terminating" },
            applyRemoteSdp: [
              {
                cond: d.applyRemoteAnswerSdpGuard,
                target: "applyingRemoteSdp",
              },
            ],
            applyMediaUpdate: y,
            applyRemoteIceCandidate: { actions: [u.applyRemoteIceCandidate] },
            dataChannelMessageReceived: b,
            forceEncodingEnabled: v,
            iceCandidateReady: S,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            iceRestart: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        connected: {
          on: {
            addLocalTracks: { target: "addingLocalTracks" },
            applyLocalSdp: { target: "applyingLocalSdp" },
            applyRemoteSdp: {
              cond: d.applyRemoteOfferSdpGuard,
              target: "renegotiating",
            },
            endCall: { target: "terminating" },
            iceConnectionStateChange: [
              {
                actions: [p.assign(e.onIceConnectionStateChanged)],
                cond: d.iceDisconnectedEventGuard,
                target: "negotiated",
              },
              { actions: [p.assign(e.onIceConnectionStateChanged)] },
            ],
            localMediaStateUpdateRetry: [
              {
                cond: d.outstandingLocalOfferGuard,
                target: "applyingLocalSdp",
              },
              { actions: [p.assign(u.onLocalMediaStateUpdateRetry)] },
            ],
            removeLocalTrack: { target: "removingLocalTrack" },
            replaceLocalTrack: { target: "replacingLocalTrack" },
            applyMediaUpdate: y,
            applyRemoteIceCandidate: { actions: [u.applyRemoteIceCandidate] },
            createDataChannel: { actions: [c.onCreateDataChannel] },
            createDataMessageSubscription: {
              actions: [c.onCreateDataMessageSubscription],
            },
            dataChannelMessageReceived: b,
            forceEncodingEnabled: v,
            iceCandidateReady: S,
            muteLocalTrack: { actions: [p.assign(u.onMuteLocalTrack)] },
            muteRemoteTrack: { actions: [p.assign(u.onMuteRemoteTrack)] },
            removeDataMessageSubscription: {
              actions: [c.onRemoveDataMessageSubscription],
            },
            stopLocalTrack: { actions: [u.onStopLocalTrack] },
            unmuteLocalTrack: { actions: [p.assign(u.onUnmuteLocalTrack)] },
            unmuteRemoteTrack: { actions: [p.assign(u.onUnmuteRemoteTrack)] },
          },
        },
        addingLocalTracks: {
          invoke: {
            id: "addLocalTracksInvoke",
            onDone: {
              actions: [p.assign(u.onAddedLocalTracks)],
              target: "connected",
            },
            onError: {
              actions: [u.onAddLocalTracksError],
              target: "connected",
            },
            src: u.onAddingLocalTracks,
          },
          on: {
            endCall: { target: "terminating" },
            applyMediaUpdate: y,
            dataChannelMessageReceived: b,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            forceEncodingEnabled: s.defer,
            iceCandidateReady: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        removingLocalTrack: {
          invoke: {
            id: "removeLocalTrackInvoke",
            onDone: {
              actions: [p.assign(u.onRemovedLocalTrack)],
              target: "connected",
            },
            onError: {
              actions: [u.onRemoveLocalTrackError],
              target: "connected",
            },
            src: u.onRemovingLocalTrack,
          },
          on: {
            endCall: { target: "terminating" },
            dataChannelMessageReceived: b,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyMediaUpdate: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            forceEncodingEnabled: s.defer,
            iceCandidateReady: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        replacingLocalTrack: {
          invoke: {
            id: "replaceLocalTrackInvoke",
            onDone: {
              actions: [p.assign(u.onReplacedLocalTrack)],
              target: "connected",
            },
            onError: {
              actions: [u.onReplaceLocalTrackError],
              target: "connected",
            },
            src: u.onReplacingLocalTrack,
          },
          on: {
            endCall: { target: "terminating" },
            dataChannelMessageReceived: b,
            iceConnectionStateChange: C,
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyMediaUpdate: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            forceEncodingEnabled: s.defer,
            iceCandidateReady: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        renegotiating: {
          invoke: {
            id: "renegotiatingInvoke",
            onDone: [
              {
                actions: [p.assign(m.onLocalSdpSet)],
                cond: d.iceNotConnectedGuard,
                target: "negotiated",
              },
              {
                actions: [p.assign(m.onLocalSdpSet)],
                cond: d.iceConnectedGuard,
                target: "connected",
              },
            ],
            onError: {
              actions: [m.onApplyRemoteOfferSetLocalAnswerError],
              target: "terminating",
            },
            src: m.applyRemoteOfferAndSetLocalAnswer,
          },
          on: {
            endCall: { target: "terminating" },
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyMediaUpdate: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            dataChannelMessageReceived: s.defer,
            forceEncodingEnabled: s.defer,
            iceConnectionStateChange: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        terminating: {
          exit: [o("ZenonPeerConnectionTerminatingState").done],
          invoke: [
            {
              onDone: { target: "terminated" },
              src: o("ZenonPeerConnectionTerminatingState").cleanUp,
            },
          ],
          on: {
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyMediaUpdate: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            dataChannelMessageReceived: s.defer,
            forceEncodingEnabled: s.defer,
            iceConnectionStateChange: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            restartPeerConnection: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
        terminated: {
          on: {
            restartPeerConnection: {
              actions: [o("ZenonPeerConnectionTerminatedState").restart],
              target: "init",
            },
            addLocalTracks: s.defer,
            applyLocalSdp: s.defer,
            applyMediaUpdate: s.defer,
            applyRemoteIceCandidate: s.defer,
            applyRemoteSdp: s.defer,
            createDataChannel: s.defer,
            createDataMessageSubscription: s.defer,
            dataChannelMessageReceived: s.defer,
            forceEncodingEnabled: s.defer,
            iceConnectionStateChange: s.defer,
            localMediaStateUpdateRetry: s.defer,
            muteLocalTrack: s.defer,
            removeDataMessageSubscription: s.defer,
            removeLocalTrack: s.defer,
            replaceLocalTrack: s.defer,
            stopLocalTrack: s.defer,
            unmuteLocalTrack: s.defer,
          },
        },
      };
    l.default = h;
  },
  98,
);
