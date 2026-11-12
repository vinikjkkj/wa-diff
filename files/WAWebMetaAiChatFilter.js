__d(
  "WAWebMetaAiChatFilter",
  [
    "WAWebBotGating",
    "WAWebBotSupportGating",
    "WAWebBotUtils",
    "WAWebResolveBotProfile",
    "WAWebUserPrefsBot",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.id;
      if (
        o("WAWebBotUtils").isMetaAiBot(t) ||
        o("WAWebBotUtils").isBusinessAssistantBot(t) ||
        o("WAWebBotUtils").isHatchBot(t)
      )
        return !0;
      if (!t.isBot()) return !1;
      var n = o("WAWebResolveBotProfile").resolveBotSupportInput(t);
      return (
        o("WAWebBotSupportGating").isMetaAiThreadProfile(n) ||
        o("WAWebBotSupportGating").isThirdPartyAgent(n)
      );
    }
    function s() {
      return (
        o("WAWebUserPrefsBot").hasEverHadMetaAiThread() &&
        o("WAWebBotGating").isMetaAiThreadInboxFilterEnabled()
      );
    }
    ((l.isAiFilterChat = e), (l.shouldShowMetaAiFilter = s));
  },
  98,
);
