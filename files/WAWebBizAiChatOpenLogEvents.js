__d(
  "WAWebBizAiChatOpenLogEvents",
  [
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiChatOpenAttribution",
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
      s = "handoff_chat_open",
      u = "handoff_chat_responded";
    function c(e) {
      return e === o("WAWebChatEntryPoint").ChatEntryPoint.Notification
        ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.NOTIFICATION
        : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar
          ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR
          : o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST;
    }
    function d(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: c(e),
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
    function m(t, n) {
      if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
        var r = o("WAWebBizAiAgentStatusUtils").resolveAiChatStatus(t);
        if (r != null) {
          var a =
            n != null
              ? o(
                  "WAWebBizAiChatOpenAttribution",
                ).getBizAiChatFilterNameFromEntryPoint(n)
              : null;
          o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            entryPoint:
              n === o("WAWebChatEntryPoint").ChatEntryPoint.Notification
                ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.NOTIFICATION
                : o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
            extraAttributes: a != null ? { filter: a } : void 0,
            featureName: o("WAWebWamEnumSmbFeatureNameEnum")
              .SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
            userActionTarget: r === "responding" ? e : s,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
              .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          });
        }
      }
    }
    function p(e) {
      if (o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()) {
        var t =
          e != null
            ? o(
                "WAWebBizAiChatOpenAttribution",
              ).getBizAiChatFilterNameFromEntryPoint(e)
            : null;
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          entryPoint:
            e === o("WAWebChatEntryPoint").ChatEntryPoint.Notification
              ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.NOTIFICATION
              : o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
          extraAttributes: t != null ? { filter: t } : void 0,
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
          userActionTarget: u,
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        });
      }
    }
    ((l.logAiHubChatOpen = d),
      (l.logAiChatOpen = m),
      (l.logHandoffChatResponded = p));
  },
  98,
);
