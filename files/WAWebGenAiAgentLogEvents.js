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
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useEffectEvent,
      d = n("$InternalEnum")({
        TURN_ON: "turn_on",
        TURN_OFF: "turn_off",
        CANCEL: "cancel",
        AUTO_REPLY_BLOCKING_BAR: "auto_reply_blocking_bar",
        AUTO_REPLY_FAB: "auto_reply_fab",
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
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        userActionTarget: d.AUTO_REPLY_FAB,
      });
    }
    function C() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: d.AUTO_REPLY_FAB,
      });
    }
    function b() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        u(v, t));
    }
    function v() {
      y();
    }
    function S() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        u(R, t));
    }
    function R() {
      g();
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e
        ? ((n = function () {
            _(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = c(n),
        a;
      t[2] !== r
        ? ((a = function () {
            r();
          }),
          (t[2] = r),
          (t[3] = a))
        : (a = t[3]);
      var i;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (t[4] = i))
        : (i = t[4]),
        u(a, i));
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] !== e
        ? ((n = function () {
            f(e);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = c(n),
        a;
      t[2] !== r
        ? ((a = function () {
            r();
          }),
          (t[2] = r),
          (t[3] = a))
        : (a = t[3]);
      var i;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (t[4] = i))
        : (i = t[4]),
        u(a, i));
    }
    ((l.WAWebGenAIAgentUserActionTargetEnum = d),
      (l.logGenAiAgentAutoReplyConfirmationDialogEvent = m),
      (l.logClickGenAiAgentAiReplies = p),
      (l.logViewGenAiAgentAutoReplyConfirmationDialog = _),
      (l.logViewGenAiAgentAutoReplyErrorDialog = f),
      (l.logViewGenAiAgentAutoReplyBlockingBar = g),
      (l.logClickGenAiAgentAutoReplyBlockingBar = h),
      (l.logClickGenAiAgentAutoReplyFab = C),
      (l.useLogViewGenAiAgentAutoReplyFab = b),
      (l.useLogViewGenAiAgentAutoReplyBlockingBar = S),
      (l.useLogViewGenAiAgentAutoReplyConfirmationDialog = L),
      (l.useLogViewGenAiAgentAutoReplyErrorDialog = E));
  },
  98,
);
