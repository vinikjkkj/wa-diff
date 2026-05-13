__d(
  "WAWebGenAiAgentLogEvents",
  [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = n("$InternalEnum")({
        TURN_ON: "turn_on",
        TURN_OFF: "turn_off",
        CANCEL: "cancel",
        AUTO_REPLY_BLOCKING_BAR: "auto_reply_blocking_bar",
        AUTO_REPLY_FAB: "auto_reply_fab",
      });
    function c(e) {
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
    function d() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        userActionTarget: u.AUTO_REPLY_BLOCKING_BAR,
      });
    }
    function m() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: u.AUTO_REPLY_BLOCKING_BAR,
      });
    }
    function p() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        userActionTarget: u.AUTO_REPLY_FAB,
      });
    }
    function _() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: u.AUTO_REPLY_FAB,
      });
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        s(g, t));
    }
    function g() {
      p();
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        s(y, t));
    }
    function y() {
      d();
    }
    ((l.WAWebGenAIAgentUserActionTargetEnum = u),
      (l.logGenAiAgentAutoReplyConfirmationDialogEvent = c),
      (l.logViewGenAiAgentAutoReplyBlockingBar = d),
      (l.logClickGenAiAgentAutoReplyBlockingBar = m),
      (l.logViewGenAiAgentAutoReplyFab = p),
      (l.logClickGenAiAgentAutoReplyFab = _),
      (l.useLogViewGenAiAgentAutoReplyFab = f),
      (l.useLogViewGenAiAgentAutoReplyBlockingBar = h));
  },
  98,
);
