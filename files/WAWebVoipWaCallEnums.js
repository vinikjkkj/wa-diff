__d(
  "WAWebVoipWaCallEnums",
  ["$InternalEnum", "WAWebProtobufSyncAction.pb", "WAWebWamEnumCallResultType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = n("$InternalEnum"))({
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
      c = s({
        Undefined: 0,
        Connected: 1,
        Missed: 2,
        Declined: 3,
        Canceled: 4,
        Unavailable: 5,
        AcceptedElsewhere: 6,
        MissedNotificationsMuted: 7,
      }),
      d = s({
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
    function m(e) {
      switch (e) {
        case d.Connected:
        case d.ConnectedLonely:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .CONNECTED;
        case d.Missed:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .MISSED;
        case d.Rejected:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .REJECTED;
        case d.Canceled:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .CANCELLED;
        case d.AcceptedElsewhere:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .ACCEPTEDELSEWHERE;
        case d.Unavailable:
        case d.Failed:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .UNAVAILABLE;
        case d.Invalid:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .INVALID;
      }
    }
    function p(e) {
      switch (e) {
        case c.Connected:
          return d.Connected;
        case c.Missed:
        case c.MissedNotificationsMuted:
          return d.Missed;
        case c.Declined:
          return d.Rejected;
        case c.Canceled:
          return d.Canceled;
        case c.Unavailable:
          return d.Unavailable;
        case c.AcceptedElsewhere:
          return d.AcceptedElsewhere;
        case c.Undefined:
          return d.Invalid;
      }
    }
    var _ = new Map([
      [
        (e = o("WAWebWamEnumCallResultType")).CALL_RESULT_TYPE.CONNECTED,
        d.Connected,
      ],
      [e.CALL_RESULT_TYPE.REJECTED_BY_USER, d.Rejected],
      [e.CALL_RESULT_TYPE.REJECTED_ELSEWHERE, d.Rejected],
      [e.CALL_RESULT_TYPE.REJECTED_BY_SERVER, d.Failed],
      [e.CALL_RESULT_TYPE.SETUP_ERROR, d.Failed],
      [e.CALL_RESULT_TYPE.SERVER_NACK, d.Failed],
      [e.CALL_RESULT_TYPE.CALL_REJECTED_TOS, d.Failed],
      [e.CALL_RESULT_TYPE.CALL_REJECTED_E2E, d.Failed],
      [e.CALL_RESULT_TYPE.PEER_SETUP_ERROR, d.Failed],
      [e.CALL_RESULT_TYPE.ACCEPTED_BUT_NOT_CONNECTED, d.Unavailable],
      [e.CALL_RESULT_TYPE.CALL_OFFER_ACK_NOT_RECEIVED, d.Unavailable],
      [e.CALL_RESULT_TYPE.CALL_REJECTED_UNAVAILABLE, d.Unavailable],
      [e.CALL_RESULT_TYPE.CALL_IS_FULL, d.Unavailable],
      [e.CALL_RESULT_TYPE.MISSED, d.Missed],
      [e.CALL_RESULT_TYPE.BUSY, d.Missed],
      [e.CALL_RESULT_TYPE.MISSED_NO_RECEIPT, d.Missed],
      [e.CALL_RESULT_TYPE.CALL_DOES_NOT_EXIST_FOR_REJOIN, d.Missed],
      [e.CALL_RESULT_TYPE.CALL_CANCELED_CELLULAR_IN_PROGRESS, d.Canceled],
      [e.CALL_RESULT_TYPE.CALL_CANCELED_AIRPLANE_MODE_ON, d.Canceled],
      [e.CALL_RESULT_TYPE.CALL_CANCELED_NO_NETWORK, d.Canceled],
      [e.CALL_RESULT_TYPE.CALL_CANCELED_OFFER_NOT_SENT, d.Canceled],
      [e.CALL_RESULT_TYPE.CALL_OFFER_ACK_CORRUPT, d.Canceled],
      [e.CALL_RESULT_TYPE.ACCEPTED_ELSEWHERE, d.AcceptedElsewhere],
      [e.CALL_RESULT_TYPE.LONELY, d.ConnectedLonely],
    ]);
    function f(e) {
      var t;
      return (t = _.get(e)) != null ? t : d.Invalid;
    }
    var g = s({
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
      h = s({ Invalid: 0, Connected: 1, Invited: 2 });
    function y(e) {
      switch (e) {
        case g.Connected:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .CONNECTED;
        case g.Incoming:
        case g.Receipt:
        case g.Terminated:
        case g.TimedOut:
        case g.CancelOffer:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .MISSED;
        case g.Rejected:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .REJECTED;
        case g.Invited:
        case g.CreatingCall:
        case g.Invisible:
        case g.Visible:
        case g.Invalid:
          return o("WAWebProtobufSyncAction.pb").CallLogRecord$CallResult
            .INVALID;
      }
    }
    var C = s({
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
      b = s({
        Unknown: 0,
        AudioCapture: 1,
        AudioPlayback: 2,
        VideoCapture: 4,
        DesktopCapture: 8,
      }),
      v = s({
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
      S = s({
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
      R = s({
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
      L = s({ Display: 1, Clear: 2, Max: 3 }),
      E = s({ NotSupported: 0, Started: 1, Stopped: 2, Failed: 3 }),
      k = s({
        None: 0,
        NotSupported: 1,
        TakeOver: 2,
        MaxParticipantsExceeded: 3,
      }),
      I = s({
        VersionInvalid: -1,
        VersionLegacy: 0,
        Version1: 1,
        Version2: 2,
        Version3: 3,
        Version4: 4,
      }),
      T = s({
        Text: 0,
        NoIndicator: 1,
        SpinnerV1: 2,
        SpinnerV2: 3,
        NoSpinner: 4,
      }),
      D = s({
        Measuring: 0,
        NoNetwork: 1,
        Poor: 2,
        Average: 3,
        Good: 4,
        Max: 5,
      }),
      x = s({ Invalid: 0, None: 1, Admin: 2, Bot: 3 }),
      $ = s({
        None: 0,
        QuerySent: 1,
        QueryAcked: 2,
        JoinSent: 3,
        JoinAcked: 4,
      }),
      P = s({ RelayBindsFailed: "relay_binds_failed" }),
      N = s({
        Legacy: 0,
        CallLinkJoinedCreator: 1,
        CallLinkJoinedJoiner: 2,
        CallLinkCreatorCallConnected: 3,
        CallLinkCreatorCallMissed: 4,
        WaitingRoomJoined: 5,
        WaitingRoomMultipleJoined: 6,
      }),
      M = s({ Unknown: 0, Guest: 1 }),
      w = "guest";
    function A(e) {
      return e === w ? M.Guest : M.Unknown;
    }
    var F = s({ None: 0, GuestsOnly: 1 }),
      O = "guests_only";
    function B(e) {
      return e === O ? F.GuestsOnly : F.None;
    }
    var W = s({ Gallery: 0, Speaker: 1, Pinning: 2 }),
      q = s({
        Unknown: 0,
        Android: 1,
        IPhone: 2,
        WP: 3,
        IOSTablet: 4,
        Kaios: 5,
        Windows: 6,
        Portal: 7,
        MacElectron: 8,
        WindowsElectron: 9,
        Wearm: 10,
        Macos: 11,
        CAPI: 12,
        IPad: 13,
        SMBA: 14,
        SMBI: 15,
        Web: 16,
      });
    ((l.CallState = u),
      (l.CallResult = c),
      (l.CallLogResult = d),
      (l.getSyncCallResultFromCallLogResult = m),
      (l.convertCallResultToCallLogResult = p),
      (l.getCallLogResultFromWamCallResult = f),
      (l.CallParticipantState = g),
      (l.CallSummaryUserState = h),
      (l.getSyncParticipantCallResultFromParticipantState = y),
      (l.CallEvent = C),
      (l.DeviceTypeEnum = b),
      (l.VideoState = v),
      (l.CallFatalReasonCode = S),
      (l.CallAudioRestartReason = R),
      (l.ReactionState = L),
      (l.ScreenShareState = E),
      (l.ScreenShareEndReason = k),
      (l.ScreenShareVersion = I),
      (l.ReconnectingOption = T),
      (l.NetHealthStatus = D),
      (l.CallUserType = x),
      (l.CallLinkState = $),
      (l.CallFailedReason = P),
      (l.ServerReminderType = N),
      (l.AccountKind = M),
      (l.wireStringToAccountKind = A),
      (l.WaitingRoomFilter = F),
      (l.wireStringToWaitingRoomFilter = B),
      (l.UiViewMode = W),
      (l.ClientPlatform = q));
  },
  98,
);
