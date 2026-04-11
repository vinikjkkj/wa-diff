__d(
  "WAWebVoipEventConstants",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        STATE: "state",
        PEER_RECONNECTING: "peerReconnecting",
        IS_VIDEO: "isVideo",
        VIDEO_STATE: "videoState",
        SELF_VIDEO_STATE: "selfVideoState",
        SELF_MIC_MUTED: "selfMicMuted",
        PEER_MIC_MUTED: "peerMicMuted",
        SELF_AUDIO_LEVEL: "selfAudioLevel",
        PEER_AUDIO_LEVEL: "peerAudioLevel",
        SCREEN_SHARE_STATES: "screenShareStates",
        REACTION_STATES: "reactionStates",
        RAISED_HAND_STATES: "raisedHandStates",
        CALL_LINK_STATE: "callLinkState",
        CALL_LINK_CREATOR_JID: "callLinkCreatorJid",
        PEER_JID: "peerJid",
        IS_GROUP: "isGroup",
        GROUP_JID: "groupJid",
        MSG: "msg",
        DISPLAY_WAITING_ROOM_DENIED: "displayWaitingRoomDenied",
        GROUP_CALL_PARTICIPANT_STATES: "groupCallParticipantStates",
        GROUP_CALL_PARTICIPANTS_CONNECTED: "groupCallParticipantsConnected",
        WAITING_ROOM_STATE: "waitingRoomState",
        IS_IN_WAITING_ROOM: "isInWaitingRoom",
        NETWORK_HEALTH: "networkHealth",
      },
      l = {
        ACTIVE_CALL: "activeCall",
        SHOULD_SHOW_POST_CALL_SURVEY: "shouldShowPostCallSurvey",
        IS_IN_CONNECTED_CALL: "isInConnectedCall",
        MUTE_REQUEST_FAILED: "muteRequestFailed",
        MUTED_BY_OTHERS: "mutedByOthers",
      },
      s = { ONLINE: "online", OFFLINE: "offline" },
      u = { DISPLAY_INFO: "displayInfo" };
    function c(e) {
      return "change:" + e;
    }
    function d() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t
        .map(function (e) {
          return "change:" + e;
        })
        .join(" ");
    }
    ((i.VoipCallModelEvents = e),
      (i.VoipCallCollectionEvents = l),
      (i.VoipNetworkEvents = s),
      (i.VoipStreamEvents = u),
      (i.getChangeEvent = c),
      (i.getMultiChangeEvent = d));
  },
  66,
);
