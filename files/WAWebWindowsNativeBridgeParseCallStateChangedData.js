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
        L = o("WAWebVoipJsonParserNative").parseJsonFromNativeBridge(e);
      if (L == null) throw r("err")("Invalid call ending data");
      var E = r("nullthrows")(
          o("WAWebVoipWaCallEnums").CallState.cast(L.CallState),
        ),
        k = o("WAWebWidFactory").createWid(L.CreatorJid.str),
        I = o("WAWebWidFactory").createWid(L.PeerJid),
        T = r("isStringNullOrEmpty")(L.GroupJid)
          ? null
          : o("WAWebWidFactory").createWid(L.GroupJid),
        D = L.Participants
          ? L.Participants.map(function (e) {
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
        CallState: E,
        call_info: {
          callState: E,
          callId: L.CallId,
          globalCallId: "",
          relayCallUuid: "",
          selfParticipantUuid: "",
          peerJid: I,
          initialPeerJid: o("WAWebWidFactory").createWid(L.InitialPeerJid),
          creatorJid: o("WAWebWidFactory").createUserWidOrThrow(
            k.user,
            k.server,
          ),
          creatorDeviceJid: k,
          isCaller: o("WAWebUserPrefsMeUser").isMeAccount(k),
          callDuration: (t = L.CallDuration) != null ? t : 0,
          callActiveDuration: 0,
          audioDuration: (n = L.AudioDuration) != null ? n : 0,
          videoDuration: (a = L.VideoDuration) != null ? a : 0,
          callEnding: !1,
          callEndedByMe: (i = L.EndedByMe) != null ? i : !1,
          callResult:
            (l = o("WAWebVoipWaCallEnums").CallResult.cast(L.CallResult)) !=
            null
              ? l
              : o("WAWebVoipWaCallEnums").CallResult.Undefined,
          callSetupErrorType: 0,
          bytesSent: (s = L.BytesSent) != null ? s : 0,
          bytesReceived: (u = L.BytesReceived) != null ? u : 0,
          videoEnabledAtCallStart: L.VideoEnabled,
          videoEnabled: L.VideoEnabled,
          videoCaptureStarted: !1,
          videoPreviewStarted: (c = L.VideoPreviewStarted) != null ? c : !1,
          avAutoAcceptEnabled: (d = L.AVAutoAcceptEnabled) != null ? d : !1,
          avDowngradeEnabled: !1,
          groupAvUpgradable: (m = L.GroupAVUpgradable) != null ? m : !1,
          selfCameraFrontFacing: !1,
          aecMode: 0,
          isGroupCall: L.IsGroupCall,
          isUpgradedGroupCallBeforeConnected: !1,
          enableGroupCall: !1,
          isGroupCallCreatedOnServer: !1,
          isJoinableGroupCall: L.IsJoinableCall,
          initialGroupTransactionId:
            (p = L.InitialGroupTransactionId) != null ? p : 0,
          connectedLimit: (_ = L.ConnectedLimit) != null ? _ : 0,
          participantCount: D.length,
          participants: D,
          canInviteNewParticipant:
            (f = L.CanInviteNewParticipant) != null ? f : !1,
          canSwitchAudioVideo: !1,
          rotateVideo: !1,
          callWaitingInfo: {
            hasWaitingCall: !1,
            waitingCallId: null,
            waitingPeerJid: null,
            waitingGroupJid: null,
            waitingIsVideo: !1,
          },
          groupJid: T,
          linkToken: (g = L.LinkToken) != null ? g : null,
          scheduledId: r("isStringNullOrEmpty")(L.ScheduledId)
            ? null
            : L.ScheduledId,
          isLightweight: L.IsLightweight,
          isPhashBased: !1,
          phash: "",
          canRingAll: !1,
          offerEpochTimeMs: 0,
          isBcall: !1,
          isBcallBroadcaster: !1,
          isBotCall: (h = L.IsBotCall) != null ? h : !1,
          isBotGroupCall: (y = L.IsBotGroupCall) != null ? y : !1,
          isNotE2ee: !1,
          vcExtendable: !1,
          isWaitingRoomEnabled: (C = L.IsWaitingRoomEnabled) != null ? C : !1,
          isWaitingRoomAdmin: (b = L.IsWaitingRoomAdmin) != null ? b : !1,
          isInWaitingRoom: (v = L.IsInWaitingRoom) != null ? v : !1,
          waitingRoomUsersCount: (S = L.WaitingRoomUsersCount) != null ? S : 0,
          waitingRoomUsers: ((R = L.WaitingRoomUsers) != null ? R : []).map(
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
