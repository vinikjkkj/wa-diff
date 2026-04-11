__d(
  "WAWebGenAiAgentLogEvents",
  [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      TURN_ON: "turn_on",
      TURN_OFF: "turn_off",
      CANCEL: "cancel",
      AUTO_REPLY_BLOCKING_BAR: "auto_reply_blocking_bar",
    });
    function s(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AUTO_REPLY_CONFIRMATION_DIALOG,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: e,
      });
    }
    function u() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: e.AUTO_REPLY_BLOCKING_BAR,
      });
    }
    ((l.WAWebGenAIAgentUserActionTargetEnum = e),
      (l.logGenAiAgentAutoReplyConfirmationDialogEvent = s),
      (l.logClickGenAiAgentAutoReplyBlockingBar = u));
  },
  98,
);
