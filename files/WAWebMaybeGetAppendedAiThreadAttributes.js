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
            n = e.to;
          if (!o("WAWebBotUtils").isMetaAiBot(n)) return d(e);
          var a = yield o(
            "WAWebBotDeviceCapabilities",
          ).primaryHasAiThreadSupport();
          if (!a || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled())
            return d(e);
          if (u(e)) return c(e);
          var i = e.quotedMsg;
          if (u(i)) return c(r("WANullthrows")(i, "quotedMsg"));
          var l = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId(),
            s = {
              aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default,
            },
            m = (t = e == null ? void 0 : e.threadIds) != null ? t : [];
          return [[].concat(m, [l]), s];
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return (e == null ? void 0 : e.threadIds) == null
        ? !1
        : e.threadIds.some(function (e) {
            return e.type === o("WAWebThreadUtils").ThreadType.AiThread;
          });
    }
    function c(e) {
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
    function d(e) {
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
