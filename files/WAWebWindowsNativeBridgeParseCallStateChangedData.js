__d(
  "WAWebWindowsNativeBridgeParseCallStateChangedData",
  [
    "WAWebUserPrefsMeUser",
    "WAWebVoipJsonParserNative",
    "WAWebVoipWaCallEnums",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (E == null) throw r("err")("Invalid call ending data");
      var k = r("nullthrows")(
          o("WAWebVoipWaCallEnums").CallState.cast(E.CallState),
        ),
        I = o("WAWebWidFactory").createWid(E.CreatorJid.str),
        T = o("WAWebWidFactory").createWid(E.PeerJid),
        D = r("isStringNullOrEmpty")(E.GroupJid)
          ? null
          : o("WAWebWidFactory").createWid(E.GroupJid),
        x = E.Participants
          ? E.Participants.map(function (e) {
              var t, n;
              return {
                jid: o("WAWebWidFactory").createWid(e.Jid),
                state: r("nullthrows")(
                  o("WAWebVoipWaCallEnums").CallParticipantState.cast(e.State),
                ),
                videoState:
                  (t = e.VideoState) != null
                    ? t
                    : o("WAWebVoipWaCallEnums").VideoState.Disabled,
                isMuted: (n = e.IsMuted) != null ? n : !1,
              };
            })
          : [];
      return {
        CallState: k,
        call_info: {
          callState: k,
          callId: E.CallId,
          globalCallId: "",
          relayCallUuid: "",
          selfParticipantUuid: "",
          peerJid: T,
          initialPeerJid: o("WAWebWidFactory").createWid(E.InitialPeerJid),
          creatorJid: o("WAWebWidFactory").createUserWidOrThrow(
            I.user,
            I.server,
          ),
          creatorDeviceJid: I,
          isCaller: o("WAWebUserPrefsMeUser").isMeAccount(I),
          callDuration: (t = E.CallDuration) != null ? t : 0,
          callActiveDuration: 0,
          audioDuration: (n = E.AudioDuration) != null ? n : 0,
          videoDuration: (a = E.VideoDuration) != null ? a : 0,
          callEnding: !1,
          callEndedByMe: (i = E.EndedByMe) != null ? i : !1,
          callResult: o(
            "WAWebVoipWaCallEnums",
          ).convertCallResultToCallLogResult(
            (l = o("WAWebVoipWaCallEnums").CallResult.cast(E.CallResult)) !=
              null
              ? l
              : o("WAWebVoipWaCallEnums").CallResult.Undefined,
          ),
          callSetupErrorType: 0,
          bytesSent: (s = E.BytesSent) != null ? s : 0,
          bytesReceived: (u = E.BytesReceived) != null ? u : 0,
          videoEnabledAtCallStart: E.VideoEnabled,
          videoEnabled: E.VideoEnabled,
          videoCaptureStarted: !1,
          videoPreviewStarted: (c = E.VideoPreviewStarted) != null ? c : !1,
          avAutoAcceptEnabled: (d = E.AVAutoAcceptEnabled) != null ? d : !1,
          avDowngradeEnabled: !1,
          groupAvUpgradable: (m = E.GroupAVUpgradable) != null ? m : !1,
          selfCameraFrontFacing: !1,
          aecMode: 0,
          isGroupCall: E.IsGroupCall,
          isUpgradedGroupCallBeforeConnected: !1,
          enableGroupCall: !1,
          isGroupCallCreatedOnServer: !1,
          isJoinableGroupCall: E.IsJoinableCall,
          initialGroupTransactionId:
            (p = E.InitialGroupTransactionId) != null ? p : 0,
          connectedLimit: (_ = E.ConnectedLimit) != null ? _ : 0,
          participantCount: x.length,
          participants: x,
          canInviteNewParticipant:
            (f = E.CanInviteNewParticipant) != null ? f : !1,
          canSwitchAudioVideo: !1,
          rotateVideo: !1,
          callWaitingInfo: {
            hasWaitingCall: !1,
            waitingCallId: null,
            waitingPeerJid: null,
            waitingGroupJid: null,
            waitingIsVideo: !1,
          },
          groupJid: D,
          linkToken: (g = E.LinkToken) != null ? g : null,
          isGuestEligible: (h = E.IsGuestEligible) != null ? h : !1,
          scheduledId: r("isStringNullOrEmpty")(E.ScheduledId)
            ? null
            : E.ScheduledId,
          isLightweight: E.IsLightweight,
          isPhashBased: !1,
          phash: "",
          canRingAll: !1,
          offerEpochTimeMs: 0,
          isBcall: !1,
          isBcallBroadcaster: !1,
          isBotCall: (y = E.IsBotCall) != null ? y : !1,
          isBotGroupCall: (C = E.IsBotGroupCall) != null ? C : !1,
          isNotE2ee: !1,
          vcExtendable: !1,
          isDualStreamSsEnabled: !1,
          isWaitingRoomEnabled: (b = E.IsWaitingRoomEnabled) != null ? b : !1,
          isWaitingRoomAdmin: (v = E.IsWaitingRoomAdmin) != null ? v : !1,
          isInWaitingRoom: (S = E.IsInWaitingRoom) != null ? S : !1,
          waitingRoomUsersCount: (R = E.WaitingRoomUsersCount) != null ? R : 0,
          waitingRoomUsers: ((L = E.WaitingRoomUsers) != null ? L : []).map(
            function (e) {
              return o("WAWebWidFactory").createWid(e.str);
            },
          ),
        },
      };
    }
    l.parseWindowsCallStateChangedData = e;
  },
  98,
);
