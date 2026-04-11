__d(
  "WAWebVoipWaCallEnums",
  ["$InternalEnum", "WAWebProtobufSyncAction.pb"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("$InternalEnum"))({
        None: 0,
        Calling: 1,
        PreacceptReceived: 2,
        ReceivedCall: 3,
        AcceptSent: 4,
        AcceptReceived: 5,
        CallActive: 6,
        CallActiveElseWhere: 7,
        ReceivedCallWithoutOffer: 8,
        Rejoining: 9,
        Link: 10,
        ConnectedLonely: 11,
        PreCalling: 12,
        CallStateEnding: 13,
        CallBCallStarting: 14,
      }),
      u = e({
        Undefined: 0,
        Connected: 1,
        Missed: 2,
        Declined: 3,
        Canceled: 4,
        Unavailable: 5,
        AcceptedElsewhere: 6,
        MissedNotificationsMuted: 7,
      }),
      c = e({
        Invalid: 0,
        Canceled: 1,
        Missed: 2,
        Unavailable: 3,
        Rejected: 4,
        Connected: 5,
        AcceptedElsewhere: 6,
        Failed: 7,
        ConnectedLonely: 8,
      });
    function d(e) {
      switch (e) {
        case c.Connected:
        case c.ConnectedLonely:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .CONNECTED;
        case c.Missed:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .MISSED;
        case c.Rejected:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .REJECTED;
        case c.Canceled:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .CANCELLED;
        case c.AcceptedElsewhere:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .ACCEPTEDELSEWHERE;
        case c.Unavailable:
        case c.Failed:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .UNAVAILABLE;
        case c.Invalid:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .INVALID;
      }
    }
    function m(e) {
      switch (e) {
        case u.Connected:
          return c.Connected;
        case u.Missed:
        case u.MissedNotificationsMuted:
          return c.Missed;
        case u.Declined:
          return c.Rejected;
        case u.Canceled:
          return c.Canceled;
        case u.Unavailable:
          return c.Unavailable;
        case u.AcceptedElsewhere:
          return c.AcceptedElsewhere;
        case u.Undefined:
          return c.Invalid;
      }
    }
    var p = e({
        Invalid: 0,
        Connected: 1,
        Incoming: 2,
        Receipt: 3,
        Rejected: 4,
        Terminated: 5,
        TimedOut: 6,
        CreatingCall: 7,
        Invisible: 8,
        Visible: 9,
        CancelOffer: 10,
        Invited: 11,
      }),
      _ = e({ Invalid: 0, Connected: 1, Invited: 2 });
    function f(e) {
      switch (e) {
        case p.Connected:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .CONNECTED;
        case p.Incoming:
        case p.Receipt:
        case p.Terminated:
        case p.TimedOut:
        case p.CancelOffer:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .MISSED;
        case p.Rejected:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .REJECTED;
        case p.Invited:
        case p.CreatingCall:
        case p.Invisible:
        case p.Visible:
        case p.Invalid:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .INVALID;
      }
    }
    var g = e({
        None: 0,
        CallOfferSent: 1,
        CallOfferReceived: 2,
        CallOfferAcked: 3,
        CallOfferNacked: 4,
        CallOfferReceiptReceived: 5,
        CallAcceptFailed: 6,
        CallAcceptSent: 7,
        CallAcceptReceived: 8,
        CallPreacceptReceived: 9,
        CallTerminateReceived: 10,
        CallRejectReceived: 11,
        CallOfferResend: 12,
        AudioStreamStarted: 13,
        P2PNegotiationSuccess: 14,
        RelayCreateSuccess: 15,
        CallStateChanged: 16,
        P2PNegotiationFailed: 17,
        MediaStreamError: 18,
        AudioInitError: 19,
        NoSamplingRatesForAudioRecord: 20,
        SendOfferFailed: 21,
        HandleOfferFailed: 22,
        SendAcceptFailed: 23,
        HandlePreAcceptFailed: 24,
        HandleAcceptFailed: 25,
        WillCreateSoundPort: 26,
        SoundPortCreateFailed: 27,
        TransportCandSendFailed: 28,
        P2PTransportCreateFailed: 29,
        P2PTransportMediaCreateFailed: 30,
        P2PTransportStartFailed: 31,
        P2PTransportRestartSuccess: 32,
        MissingRelayInfo: 33,
        ErrorGatheringHostCandidates: 34,
        MediaStreamStartError: 35,
        RelayLatencySendFailed: 36,
        RelayElectionSendFailed: 37,
        CallEnding: 38,
        CallCaptureBufferFilled: 39,
        CallCaptureEnded: 40,
        RxTimeout: 41,
        TxTimeout: 42,
        RxTrafficStarted: 43,
        RxTrafficStopped: 44,
        RTCPPacketReceived: 45,
        RTCPByeReceived: 46,
        RelayBindsFailed: 47,
        SoundPortCreated: 48,
        AudioDriverRestart: 49,
        Echo: 50,
        SelfVideoStateChanged: 51,
        PeerVideoStateChanged: 52,
        VideoPortCreated: 53,
        VideoPortCreateFailed: 54,
        VideoDecodeStarted: 55,
        VideoRenderStarted: 56,
        VideoCaptureStarted: 57,
        VideoPreviewFailed: 58,
        VideoPreviewReady: 59,
        VideoPreviewShouldMinimize: 60,
        VideoStreamCreateError: 61,
        VideoRenderFormatChanged: 62,
        VideoCodecMismatch: 63,
        VideoDecodePaused: 64,
        VideoDecodeResumed: 65,
        VideoEncodeFatalError: 66,
        VideoDecodeFatalError: 67,
        BatteryLevelLow: 68,
        PeerBatteryLevelLow: 69,
        GroupInfoChanged: 70,
        FieldstatsReady: 71,
        CallWaitingStateChanged: 72,
        MuteStateChanged: 73,
        InterruptionStateChanged: 74,
        RxTrafficStateForPeerChanged: 75,
        HandleAcceptReceiptFailed: 76,
        GroupParticipantLeft: 77,
        AudioRouteChangeRequest: 78,
        HandleAcceptAckFailed: 79,
        CallMissed: 80,
        WeakWiFiSwitchedToCellular: 81,
        CallAutoConnect: 82,
        RejectedDecryptionFailure: 83,
        PeerDeviceOrientationChanged: 84,
        HandleOfferAckFailed: 85,
        PendingCallAutoRejected: 86,
        FDLeakDetected: 87,
        RestartCamera: 88,
        AudioTestReplayFinished: 89,
        SyncDevices: 90,
        VideoCodecStateChanged: 91,
        CallFatal: 92,
        UpdateJoinableCallLog: 93,
        LobbyNacked: 94,
        PlayCallTone: 95,
        SendJoinableClientPollCriticalEvent: 96,
        SendLinkedGroupCallDowngradedCriticalEvent: 97,
        UpdateVoipSettings: 98,
        VoipErrDetectorEvent: 99,
        SpeakerStatusChanged: 100,
        LonelyStateTimeout: 101,
        MutedByOthers: 102,
        LinkCreateAcked: 103,
        LinkCreateNacked: 104,
        HeartbeatNacked: 105,
        CallLinkStateChanged: 106,
        LobbyTimeout: 107,
        MuteRequestFailed: 108,
        LinkQueryNacked: 109,
        LinkJoinNacked: 110,
        CallGridRankingChanged: 111,
        GroupCallBufferHandleMessages: 112,
        RemoveUserNacked: 113,
        VideoRenderingStateChanged: 114,
        UserRemoved: 115,
        ScreenShare: 116,
        NetHealthStatusChanged: 117,
        ReminderSetAcked: 118,
        HighDataUsageDetected: 119,
        LidCallerDisplayInfo: 120,
        EagerCallDismiss: 121,
        OfferPeekTimeout: 122,
        NetHealthStatusChangedV2: 123,
        AutoVideoPauseStateChanged: 124,
        BCallCreated: 125,
        BCallCreateFailed: 126,
        BCallAudienceUpdated: 127,
        CallSummaryReceived: 128,
        BCallJoinFailed: 129,
        BCallEndFailed: 130,
        BCallJoined: 131,
        BCallLeaveFailed: 132,
        ScreenContentType: 133,
        BCallEnded: 134,
        BCallStartNotify: 135,
        LinkEditAcked: 136,
        LinkEditNacked: 137,
        Update1to1CallLog: 138,
        CallLinkSelfStateChanged: 139,
        DataChannelReady: 140,
        AudioTxStarted: 141,
        HandleGroupCallReminder: 142,
        VoiceChatWaveReceived: 143,
        DataChannelConnectionTimeout: 144,
        ReactionStateChanged: 145,
        VideoStateChanged: 146,
        PeerVideoPermissionChanged: 147,
        RaiseHandStateChanged: 148,
        BotReconfigureSuccess: 149,
        AudioDeviceReady: 150,
        BotEarlyConnect: 151,
        MicrophoneDeviceReady: 152,
        SpeakerDeviceReady: 153,
        WearableAttributionStateChanged: 154,
        RxTranscriptMsg: 155,
        RelayListUpdate: 156,
        WaitingRoomDenied: 157,
        WaitingRoomStateChanged: 158,
        RemoveFailed: 159,
        E2EEStatusChanged: 160,
        WaitingRoomToggleAcked: 161,
        LinkQueryAcked: 162,
        EncodeTargetFpsChanged: 163,
        EncodeParamsChanged: 164,
        WaitingRoomAdmitAcked: 165,
        WaitingRoomDenyAcked: 166,
        P2PTransportUpdate: 167,
        Max: 168,
      }),
      h = e({
        Unknown: 0,
        AudioCapture: 1,
        AudioPlayback: 2,
        VideoCapture: 4,
        DesktopCapture: 8,
      }),
      y = e({
        Disabled: 0,
        Enabled: 1,
        Paused: 2,
        UpgradeRequest: 3,
        UpgradeAccept: 4,
        UpgradeReject: 5,
        Stopped: 6,
        UpgradeRejectByTimeout: 7,
        UpgradeCancel: 8,
        UpgradeCancelByTimeout: 9,
        UnknownPeer: 10,
        UpgradeRequestV2: 11,
        Error: 20,
      }),
      C = e({
        Unknown: 0,
        ParticipantAllocationFailure: 1,
        SetupError: 2,
        TxTimeout: 3,
        RxTimeout: 4,
        VideoStreamCreateError: 5,
        VideoPortCreateFailed: 6,
        NoSamplingRatesForAudioRecord: 7,
        AudioInitError: 8,
      }),
      b = e({
        LosingPlaybackCallback: 0,
        LosingRecordCallback: 1,
        SlowPlaybackCallback: 2,
        SlowRecordCallback: 3,
        RecordSilence: 4,
        RecordMax: 5,
        BuiltinAec: 6,
        FastPlaybackCallback: 7,
        FastRecordCallback: 8,
      }),
      v = e({ Display: 1, Clear: 2, Max: 3 }),
      S = e({ NotSupported: 0, Started: 1, Stopped: 2, Failed: 3 }),
      R = e({
        None: 0,
        NotSupported: 1,
        TakeOver: 2,
        MaxParticipantsExceeded: 3,
      }),
      L = e({
        VersionInvalid: -1,
        VersionLegacy: 0,
        Version1: 1,
        Version2: 2,
        Version3: 3,
        Version4: 4,
      }),
      E = e({
        Text: 0,
        NoIndicator: 1,
        SpinnerV1: 2,
        SpinnerV2: 3,
        NoSpinner: 4,
      }),
      k = e({
        Measuring: 0,
        NoNetwork: 1,
        Poor: 2,
        Average: 3,
        Good: 4,
        Max: 5,
      }),
      I = e({
        None: 0,
        QuerySent: 1,
        QueryAcked: 2,
        JoinSent: 3,
        JoinAcked: 4,
      }),
      T = e({ RelayBindsFailed: "relay_binds_failed" }),
      D = e({
        Legacy: 0,
        CallLinkJoinedCreator: 1,
        CallLinkJoinedJoiner: 2,
        CallLinkCreatorCallConnected: 3,
        CallLinkCreatorCallMissed: 4,
        WaitingRoomJoined: 5,
        WaitingRoomMultipleJoined: 6,
      });
    ((l.CallState = s),
      (l.CallResult = u),
      (l.CallLogResult = c),
      (l.getSyncCallResultFromCallLogResult = d),
      (l.convertCallResultToCallLogResult = m),
      (l.CallParticipantState = p),
      (l.CallSummaryUserState = _),
      (l.getSyncParticipantCallResultFromParticipantState = f),
      (l.CallEvent = g),
      (l.DeviceTypeEnum = h),
      (l.VideoState = y),
      (l.CallFatalReasonCode = C),
      (l.CallAudioRestartReason = b),
      (l.ReactionState = v),
      (l.ScreenShareState = S),
      (l.ScreenShareEndReason = R),
      (l.ScreenShareVersion = L),
      (l.ReconnectingOption = E),
      (l.NetHealthStatus = k),
      (l.CallLinkState = I),
      (l.CallFailedReason = T),
      (l.ServerReminderType = D));
  },
  98,
);
