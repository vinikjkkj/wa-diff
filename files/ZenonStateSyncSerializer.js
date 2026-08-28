__d(
  "ZenonStateSyncSerializer",
  [
    "AdminInitiatedCastingStateSerializers",
    "BreakoutStateBreakoutStateSerializers",
    "CanYouSeeMyScreenStateCanYouSeeMyScreenStateSerializers",
    "CathodeExtensionStateCathodeExtensionStateSerializers",
    "CompactSerializerPolyfill",
    "ConfigEngineStateConfigEngineStateSerializers",
    "ConversationBotConversationBotStateSerializers",
    "CoplayStateCoplayStateSerializers",
    "CostreamingStateWorkCostreamingStateSerializers",
    "CountdownTimerStateCountdownTimerStateSerializers",
    "CoviewStateCoviewStateSerializers",
    "DecryptedE2eeDataSerializers",
    "E2eeStateSerializers",
    "EmojiReactionsStateEmojiReactionsStateSerializers",
    "IntenticonsStateIntenticonsStateSerializers",
    "LiveStreamStateLiveStreamStateSerializers",
    "MediaInformationStateMediaInformationStateSerializers",
    "MediaSyncAutoplayStateMediaSyncAutoplayStateSerializers",
    "MediaSyncStateMediaSyncStateSerializers",
    "MeetingAssistantStateMeetingAssistantStateSerializers",
    "MeetingSummarizerMeetingSummarizerSerializers",
    "ModeratorControlsStateModeratorControlsStateSerializers",
    "NumberOfPeopleStateNumberOfPeopleStateSerializers",
    "PollsStatePollsStateSerializers",
    "RaisedHandsQueueStateRaisedHandsQueueStateSerializers",
    "SctpNegotiationStateSctpNegotiationStateSerializers",
    "ServerCaptionsStateServerCaptionsStateSerializers",
    "SidebandStateSidebandStateSerializers",
    "SimpleStateSimpleStateSerializers",
    "StateSyncSerializers",
    "WhiteboardStateWhiteboardStateSerializers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("StateSyncSerializers").deserializeSnapshot;
      return e != null
        ? o("CompactSerializerPolyfill").deserialize(e, t)
        : null;
    }
    function s(e) {
      var t = o("StateSyncSerializers").serializeSnapshot;
      return o("CompactSerializerPolyfill").serialize(e, t);
    }
    function u(e) {
      var t = o("DecryptedE2eeDataSerializers").deserializeDecryptedE2eeData;
      return e != null
        ? o("CompactSerializerPolyfill").deserialize(e, t)
        : null;
    }
    function c(e, t) {
      var n = null;
      switch (e) {
        case "admin_initiated_casting":
          n = o(
            "AdminInitiatedCastingStateSerializers",
          ).deserializeAdminInitiatedCastingParticipantOutputState;
          break;
        case "countdown_timer":
          n = o(
            "CountdownTimerStateCountdownTimerStateSerializers",
          ).deserializeCountdownTimerOutputState;
          break;
        case "polls":
          n = o(
            "PollsStatePollsStateSerializers",
          ).deserializePollsParticipantOutputState;
          break;
        case "emoji_reactions":
          n = o(
            "EmojiReactionsStateEmojiReactionsStateSerializers",
          ).deserializeEmojiReactionsOutputState;
          break;
        case "raised_hands_queue_e2ee":
        case "emoji_reactions_e2ee":
        case "polls_e2ee":
        case "countdown_timer_e2ee":
          n = o("DecryptedE2eeDataSerializers").deserializeDecryptedE2eeData;
          break;
        case "raised_hands_queue":
          n = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateSerializers",
          ).deserializeRaisedHandsQueueParticipantOutputState;
          break;
        case "simple_internal":
        case "simple_external":
          n = o(
            "SimpleStateSimpleStateSerializers",
          ).deserializeSimpleOutputState;
          break;
        case "live_stream":
          n = o(
            "LiveStreamStateLiveStreamStateSerializers",
          ).deserializeLiveStreamClientOutputState;
          break;
        case "moderator_controls":
          n = o(
            "ModeratorControlsStateModeratorControlsStateSerializers",
          ).deserializeModeratorControlsOutputState;
          break;
        case "media_information":
          n = o(
            "MediaInformationStateMediaInformationStateSerializers",
          ).deserializeMediaInformationOutputState;
          break;
        case "media_sync":
          n = o(
            "MediaSyncStateMediaSyncStateSerializers",
          ).deserializeMediaSyncOutputState;
          break;
        case "media_sync_autoplay":
          n = o(
            "MediaSyncAutoplayStateMediaSyncAutoplayStateSerializers",
          ).deserializeParticipantOutputState;
          break;
        case "coplay":
          n = o(
            "CoplayStateCoplayStateSerializers",
          ).deserializeCoplayOutputState;
          break;
        case "meeting_assistant":
          n = o(
            "MeetingAssistantStateMeetingAssistantStateSerializers",
          ).deserializeParticipantOutputState;
          break;
        case "whiteboard":
          n = o(
            "WhiteboardStateWhiteboardStateSerializers",
          ).deserializeWhiteboardOutputState;
          break;
        case "sideband":
          n = o(
            "SidebandStateSidebandStateSerializers",
          ).deserializeSidebandOutputState;
          break;
        case "breakout":
          n = o(
            "BreakoutStateBreakoutStateSerializers",
          ).deserializeBreakoutOutputState;
          break;
        case "coview":
          n = o(
            "CoviewStateCoviewStateSerializers",
          ).deserializeCoviewOutputState;
          break;
        case "can_you_see_my_screen":
          n = o(
            "CanYouSeeMyScreenStateCanYouSeeMyScreenStateSerializers",
          ).deserializeCanYouSeeMyScreenParticipantOutputState;
          break;
        case "intenticons":
          n = o(
            "IntenticonsStateIntenticonsStateSerializers",
          ).deserializeIntenticonParticipantOutputState;
          break;
        case "number_of_people":
          n = o(
            "NumberOfPeopleStateNumberOfPeopleStateSerializers",
          ).deserializeNumberOfPeopleOutputState;
          break;
        case "E2eeState":
          if (t != null) return { data: t };
          break;
        case "sctp_negotiation":
          n = o(
            "SctpNegotiationStateSctpNegotiationStateSerializers",
          ).deserializeSCTPNegotiationParticipantOutputState;
          break;
        case "config_engine":
          n = o(
            "ConfigEngineStateConfigEngineStateSerializers",
          ).deserializeConfigEngineClientOutputState;
          break;
        case "server_captions_state":
          n = o(
            "ServerCaptionsStateServerCaptionsStateSerializers",
          ).deserializeServerCaptionsParticipantOutputState;
          break;
        case "cathode_extension":
          n = o(
            "CathodeExtensionStateCathodeExtensionStateSerializers",
          ).deserializeCathodeExtensionParticipantOutputState;
          break;
        case "meeting_summarizer":
          n = o(
            "MeetingSummarizerMeetingSummarizerSerializers",
          ).deserializeMeetingSummarizerParticipantOutputState;
          break;
        case "work_costreaming":
          n = o(
            "CostreamingStateWorkCostreamingStateSerializers",
          ).deserializeWorkCostreamingClientOutputState;
          break;
        default:
          break;
      }
      return t != null && n != null
        ? o("CompactSerializerPolyfill").deserialize(t, n)
        : null;
    }
    function d(e, t) {
      var n = null;
      switch (e) {
        case "admin_initiated_casting":
          n = o(
            "AdminInitiatedCastingStateSerializers",
          ).serializeAdminInitiatedCastingParticipantInputState;
          break;
        case "countdown_timer":
          n = o(
            "CountdownTimerStateCountdownTimerStateSerializers",
          ).serializeCountdownTimerInputState;
          break;
        case "conversation_bot":
          n = o(
            "ConversationBotConversationBotStateSerializers",
          ).serializeParticipantInputState;
          break;
        case "polls":
          n = o(
            "PollsStatePollsStateSerializers",
          ).serializePollsParticipantInputState;
          break;
        case "polls_e2ee":
          n = o(
            "PollsStatePollsStateSerializers",
          ).serializeE2EEPollsParticipantPayload;
          break;
        case "emoji_reactions":
          n = o(
            "EmojiReactionsStateEmojiReactionsStateSerializers",
          ).serializeEmojiReactionsInputState;
          break;
        case "raised_hands_queue_e2ee":
          n = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateSerializers",
          ).serializeE2EERaisedHandsQueueParticipantPayload;
          break;
        case "emoji_reactions_e2ee":
          n = o(
            "EmojiReactionsStateEmojiReactionsStateSerializers",
          ).serializeE2EEEmojiReactionsParticipantPayload;
          break;
        case "countdown_timer_e2ee":
          n = o(
            "CountdownTimerStateCountdownTimerStateSerializers",
          ).serializeE2EECountdownTimerParticipantPayload;
          break;
        case "raised_hands_queue":
          n = o(
            "RaisedHandsQueueStateRaisedHandsQueueStateSerializers",
          ).serializeRaisedHandsQueueParticipantInputState;
          break;
        case "simple_internal":
        case "simple_external":
          n = o("SimpleStateSimpleStateSerializers").serializeSimpleInputState;
          break;
        case "live_stream":
          n = o(
            "LiveStreamStateLiveStreamStateSerializers",
          ).serializeLiveStreamClientInputState;
          break;
        case "moderator_controls":
          n = o(
            "ModeratorControlsStateModeratorControlsStateSerializers",
          ).serializeModeratorControlsInputState;
          break;
        case "media_information":
          n = o(
            "MediaInformationStateMediaInformationStateSerializers",
          ).serializeMediaInformationInputState;
          break;
        case "media_sync":
          n = o(
            "MediaSyncStateMediaSyncStateSerializers",
          ).serializeMediaSyncInputState;
          break;
        case "media_sync_autoplay":
          n = o(
            "MediaSyncAutoplayStateMediaSyncAutoplayStateSerializers",
          ).serializeParticipantInputState;
          break;
        case "coplay":
          n = o(
            "CoplayStateCoplayStateSerializers",
          ).serializeCoplayMatchInputState;
          break;
        case "meeting_assistant":
          n = o(
            "MeetingAssistantStateMeetingAssistantStateSerializers",
          ).serializeParticipantInputState;
          break;
        case "whiteboard":
          n = o(
            "WhiteboardStateWhiteboardStateSerializers",
          ).serializeWhiteboardInputState;
          break;
        case "sideband":
          n = o(
            "SidebandStateSidebandStateSerializers",
          ).serializeSidebandInputState;
          break;
        case "breakout":
          n = o(
            "BreakoutStateBreakoutStateSerializers",
          ).serializeBreakoutInputState;
          break;
        case "coview":
          n = o("CoviewStateCoviewStateSerializers").serializeCoviewInputState;
          break;
        case "intenticons":
          n = o(
            "IntenticonsStateIntenticonsStateSerializers",
          ).serializeIntenticonParticipantInputState;
          break;
        case "E2eeState":
          n = o("E2eeStateSerializers").serializeE2eeClientState;
          break;
        case "can_you_see_my_screen":
          n = o(
            "CanYouSeeMyScreenStateCanYouSeeMyScreenStateSerializers",
          ).serializeCanYouSeeMyScreenParticipantInputState;
          break;
        case "config_engine":
          n = o(
            "ConfigEngineStateConfigEngineStateSerializers",
          ).serializeConfigEngineClientInputState;
          break;
        case "number_of_people":
          n = o(
            "NumberOfPeopleStateNumberOfPeopleStateSerializers",
          ).serializeNumberOfPeopleInputState;
          break;
        case "sctp_negotiation":
          n = o(
            "SctpNegotiationStateSctpNegotiationStateSerializers",
          ).serializeSCTPNegotiationParticipantInputState;
          break;
        case "server_captions_state":
          n = o(
            "ServerCaptionsStateServerCaptionsStateSerializers",
          ).serializeServerCaptionsParticipantInputState;
          break;
        case "cathode_extension":
          n = o(
            "CathodeExtensionStateCathodeExtensionStateSerializers",
          ).serializeCathodeExtensionParticipantInputState;
          break;
        case "meeting_summarizer":
          n = o(
            "MeetingSummarizerMeetingSummarizerSerializers",
          ).serializeMeetingSummarizerParticipantInputState;
          break;
        case "work_costreaming":
          n = o(
            "CostreamingStateWorkCostreamingStateSerializers",
          ).serializeWorkCostreamingClientInputState;
          break;
        default:
          break;
      }
      return t != null && n != null
        ? o("CompactSerializerPolyfill").serialize(t, n)
        : null;
    }
    ((l.deserializeStateSyncSnapshot = e),
      (l.serializeStateSyncSnapshot = s),
      (l.deserializeE2eeData = u),
      (l.deserializeOutputState = c),
      (l.serializeInputState = d));
  },
  98,
);
