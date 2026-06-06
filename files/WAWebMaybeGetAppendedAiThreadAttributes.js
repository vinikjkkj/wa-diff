__d(
  "WAWebMaybeGetAppendedAiThreadAttributes",
  [
    "WANullthrows",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotDeviceCapabilities",
    "WAWebBotUtils",
    "WAWebCreateAiThreadTitleForMessage",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = e.to;
      if (!o("WAWebBotUtils").isMetaAiBot(n)) return c(e);
      var a = await o("WAWebBotDeviceCapabilities").primaryHasAiThreadSupport();
      if (!a || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled())
        return c(e);
      if (s(e)) return u(e);
      var i = e.quotedMsg;
      if (s(i)) return u(r("WANullthrows")(i, "quotedMsg"));
      var l = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId(),
        d = { aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default },
        m = (t = e == null ? void 0 : e.threadIds) != null ? t : [];
      return [[].concat(m, [l]), d];
    }
    function s(e) {
      return (e == null ? void 0 : e.threadIds) == null
        ? !1
        : e.threadIds.some(function (e) {
            return e.type === o("WAWebThreadUtils").ThreadType.AiThread;
          });
    }
    function u(e) {
      var t,
        n,
        r = (t = e == null ? void 0 : e.threadIds) != null ? t : [],
        a = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId();
      if (o("WAWebThreadMsgUtils").isMsgInThread(e, a)) {
        var i;
        return [
          r,
          (i = e == null ? void 0 : e.aiThreadInfo) != null ? i : void 0,
        ];
      }
      var l = (n = e == null ? void 0 : e.aiThreadInfo) != null ? n : {},
        s = l.aiThreadType,
        u = l.title,
        c = o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(
          u != null
            ? u
            : o(
                "WAWebCreateAiThreadTitleForMessage",
              ).createAiThreadTitleForMessage(e),
          s != null ? s : o("WAWebAiThreadTypeUtils").AiThreadType.Default,
        );
      return [r, c];
    }
    function c(e) {
      var t;
      return [
        (t = e.threadIds) == null
          ? void 0
          : t.filter(function (e) {
              return e.type !== o("WAWebThreadUtils").ThreadType.AiThread;
            }),
        void 0,
      ];
    }
    l.maybeGetAppendedAiThreadAttributes = e;
  },
  98,
);
