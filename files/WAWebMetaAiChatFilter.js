__d(
  "WAWebMetaAiChatFilter",
  [
    "WAWebBotGating",
    "WAWebBotSupportGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebFetchMissingAiFilterBotProfiles",
    "WAWebFrontendChatGetters",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(e) {
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
    function u(e) {
      return s(e) && !e.archive;
    }
    function c() {
      var t = 0;
      return (
        o("WAWebChatCollection").ChatCollection.some(function (n) {
          return (
            u(n) &&
            o("WAWebFrontendChatGetters").getShouldAppearInList(n) &&
            ++t >= e
          );
        }) && o("WAWebBotGating").isMetaAiThreadInboxFilterEnabled()
      );
    }
    function d() {
      o("WAWebChatCollection").ChatCollection.some(function (e) {
        var t = e.id;
        return o("WAWebResolveBotProfile").isBotProfileMissing(t);
      }) &&
        o("WAWebBotGating").isMetaAiThreadInboxFilterEnabled() &&
        o(
          "WAWebFetchMissingAiFilterBotProfiles",
        ).maybeFetchMissingAiFilterBotProfiles();
    }
    ((l.isAiFilterChat = s),
      (l.isChatListedInAiFilter = u),
      (l.shouldShowMetaAiFilter = c),
      (l.fetchMissingAiFilterProfilesIfNeeded = d));
  },
  98,
);
