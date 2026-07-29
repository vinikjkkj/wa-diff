__d(
  "WAWebBizAiChatOpenLogEvents",
  [
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatEntryPoint",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ai_responding_chat_open",
      s = "handoff_chat_open";
    function u(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint:
          e === o("WAWebChatEntryPoint").ChatEntryPoint.Notification
            ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.NOTIFICATION
            : o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
        extraAttributes: {
          is_onboarded: o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent(),
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_AI_HUB_CHAT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function c(t, n) {
      if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
        var r = o("WAWebBizAiAgentStatusUtils").resolveAiChatStatus(t);
        r != null &&
          o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint:
              n === o("WAWebChatEntryPoint").ChatEntryPoint.Notification
                ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.NOTIFICATION
                : o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum")
              .SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
            userActionTarget: r === "responding" ? e : s,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
              .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          });
      }
    }
    ((l.logAiHubChatOpen = u), (l.logAiChatOpen = c));
  },
  98,
);
