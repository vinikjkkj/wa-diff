__d(
  "WAWebGenAiAgentLogEvents",
  [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useEffectEvent,
      d = n("$InternalEnum")({
        TURN_ON: "turn_on",
        TURN_OFF: "turn_off",
        CANCEL: "cancel",
        AUTO_REPLY_BLOCKING_BAR: "auto_reply_blocking_bar",
        AI_REPLIES: "ai_replies",
      });
    function m(e) {
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
    function p() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: d.AI_REPLIES,
      });
    }
    function _(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AUTO_REPLY_CONFIRMATION_DIALOG,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { is_turn_on: e },
      });
    }
    function f(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AUTO_REPLY_ERROR_DIALOG,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { is_turn_on: e },
      });
    }
    function g() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        userActionTarget: d.AUTO_REPLY_BLOCKING_BAR,
      });
    }
    function h() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: d.AUTO_REPLY_BLOCKING_BAR,
      });
    }
    function y() {
      u(function () {
        g();
      }, []);
    }
    function C(e) {
      var t = c(function () {
        _(e);
      });
      u(function () {
        t();
      }, []);
    }
    function b(e) {
      var t = c(function () {
        f(e);
      });
      u(function () {
        t();
      }, []);
    }
    ((l.WAWebGenAIAgentUserActionTargetEnum = d),
      (l.logGenAiAgentAutoReplyConfirmationDialogEvent = m),
      (l.logClickGenAiAgentAiReplies = p),
      (l.logViewGenAiAgentAutoReplyConfirmationDialog = _),
      (l.logViewGenAiAgentAutoReplyErrorDialog = f),
      (l.logViewGenAiAgentAutoReplyBlockingBar = g),
      (l.logClickGenAiAgentAutoReplyBlockingBar = h),
      (l.useLogViewGenAiAgentAutoReplyBlockingBar = y),
      (l.useLogViewGenAiAgentAutoReplyConfirmationDialog = C),
      (l.useLogViewGenAiAgentAutoReplyErrorDialog = b));
  },
  98,
);
