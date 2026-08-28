__d(
  "ZenonCall",
  [
    "ZenonCallsModelTypes",
    "ZenonNetworkQualityMonitor",
    "ZenonScreenSharingAvailabilityType",
    "immutable",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n("ZenonCallsModelTypes").ZenonCallState,
      s = n("ZenonNetworkQualityMonitor").ZenonNetworkQuality,
      u = (e = n("immutable")).Record({
        callState: l.New,
        clientCallId: "",
        clientEndpointId: "",
        collisionContext: {
          groupThreadID: null,
          peerID: null,
          serverInfoData: null,
        },
        endCallDetails: null,
        endCallReason: null,
        features: {
          canAddParticipants: !1,
          canApproveCollaborationSpaceJoinRequests: !0,
          cowatchEnabled: !1,
          cowatchGroupEnabled: !1,
          dominantSpeaker: null,
          multiwayVideoEscalation: !1,
          networkStatus: { local: s.Good, remote: new Map() },
          screenSharingAvailability: n("ZenonScreenSharingAvailabilityType")
            .Available,
          screenSharingEnabled: !1,
          supportConstrainedDevices: {
            frameRate: null,
            height: null,
            isEnabled: !1,
            width: null,
          },
          supportMultipleStreams: !1,
        },
        isVideoCall: !1,
        localCallId: "",
        localMediaTracks: new Map(),
        mediaTracks: new Map(),
        participants: e.Map(),
        peerConnectionConnected: !1,
        remoteMediaTracks: new Map(),
        remoteScreenSharingUserIDs: e.OrderedSet(),
        responseSubCode: null,
        rtpReceivers_I_KNOW_WHAT_I_AM_DOING: [],
        rtpSenders_I_KNOW_WHAT_I_AM_DOING: [],
        selfParticipantID: "0",
        sharedCallId: null,
        stateSyncInputStates: e.Map(),
        stateSyncOutputStates: e.Map(),
        userIdToNodeIdMap: new Map(),
      }),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(u),
      d = c;
    i.default = d;
  },
  66,
);
