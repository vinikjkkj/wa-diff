__d(
  "WAWebBotFrontendLoggingUtils",
  ["WAWebThreadJourneyLogger", "WAWebThreadMsgUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WAWebThreadMsgUtils").getMsgAiThread(t);
      if (n != null) {
        var r = o(
          "WAWebThreadJourneyLogger",
        ).ThreadJourneyLogger.getLastMessageSentAiThreadId();
        if (n !== r) {
          var a,
            i,
            l = (a = e.aiThreads) == null ? void 0 : a.get(n),
            s =
              (i = l == null ? void 0 : l.creationTimestamp) != null
                ? i
                : Date.now();
          o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logFirstPromptSent(
            n,
            s,
          );
        }
      }
    }
    l.maybeLogFirstPromptSentInAiThread = e;
  },
  98,
);
