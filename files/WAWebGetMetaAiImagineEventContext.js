__d(
  "WAWebGetMetaAiImagineEventContext",
  [
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumImagineActionThreadType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n,
        r,
        a =
          (t = e.aiThreads) == null || (t = t.getFirstActivated()) == null
            ? void 0
            : t.id,
        i =
          a != null
            ? await o("WAWebChatThreadLogging").getThreadIDHMAC(a)
            : null;
      return {
        aiSessionId:
          (n = o(
            "WAWebThreadJourneyLogger",
          ).ThreadJourneyLogger.getAiSessionId()) != null
            ? n
            : void 0,
        metaAiConversationThreadId: i != null ? i : void 0,
        threadType: s(e),
        unifiedSessionId:
          (r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) !=
          null
            ? r
            : void 0,
      };
    }
    function s(e) {
      if (o("WAWebBotUtils").isBotChannelFBID(e.id))
        return o("WAWebWamEnumImagineActionThreadType")
          .IMAGINE_ACTION_THREAD_TYPE.TO_CHARACTER;
      if (o("WAWebBotUtils").isAnyMetaAiBot(e.id))
        return o("WAWebWamEnumImagineActionThreadType")
          .IMAGINE_ACTION_THREAD_TYPE.META_AI;
    }
    l.getMetaAiImagineEventContext = e;
  },
  98,
);
