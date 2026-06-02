__d(
  "WAWebGetMetaAiImagineEventContext",
  ["WAWebChatThreadLogging", "WAWebThreadJourneyLogger", "WAWebUnifiedSession"],
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
        unifiedSessionId:
          (r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) !=
          null
            ? r
            : void 0,
      };
    }
    l.getMetaAiImagineEventContext = e;
  },
  98,
);
