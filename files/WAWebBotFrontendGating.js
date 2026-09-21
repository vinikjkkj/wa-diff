__d(
  "WAWebBotFrontendGating",
  ["WAWebBotBaseGating", "WAWebBotUtils", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !e.isBot() || e.isSupportAgentBot()
        ? !1
        : o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebBotUtils").isBusinessAssistantBot(e)
            ? !o("WAWebBotBaseGating").isBotEnabled()
            : o("WAWebBotUtils").isMetaAiBot(e)
              ? !0
              : !o("WAWebBotBaseGating").isBotEnabled()
          : !o("WAWebBotBaseGating").isBotEnabled();
    }
    l.isBotChatUnavailable = e;
  },
  98,
);
