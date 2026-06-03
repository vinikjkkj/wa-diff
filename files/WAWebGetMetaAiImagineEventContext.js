__d(
  "WAWebGetMetaAiImagineEventContext",
  [
    "WAWebChatThreadLogging",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a =
              (t = e.aiThreads) == null || (t = t.getFirstActivated()) == null
                ? void 0
                : t.id,
            i =
              a != null
                ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(a)
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
              (r = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId()) != null
                ? r
                : void 0,
          };
        })),
        s.apply(this, arguments)
      );
    }
    l.getMetaAiImagineEventContext = e;
  },
  98,
);
