__d(
  "WAWebBotLogging",
  [
    "$InternalEnum",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebWamEnumBotEntryPointType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "Agent",
        "Shortcut",
        "Invoke",
        "Search",
      ]),
      s = (function () {
        var e = new Set();
        return (
          o("WAWebChatEntryPoint")
            .ChatEntryPoint.members()
            .forEach(function (t) {
              e: {
                if (
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .MetaAINullStateSuggestion ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .MetaAITypeaheadSuggestion
                ) {
                  e.add(t);
                  break e;
                }
                if (
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .BotChatListShortcut ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .ForwardedNewsletterMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Link ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Mention ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsLetterRecommendation ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterAdminInviteAcceptModal ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterCTAOnStatus ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterChatlist ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterCreationFlow ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterDirectory ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterDirectoryCategory ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterDirectoryCategorySearch ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterDirectorySearch ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterIntegrity ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterLinkCard ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterLinkCardButton ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterPostLinkCard ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterUpdatesTab ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewsletterUpdatesTabSearch ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Notification ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .SimilarNewsletters ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Unknown ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Vcard ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.VoipWindow ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .MetaAINewThreadCreation ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .MetaAINavigationBar ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .ForwardedAiBotMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore
                )
                  break e;
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              }
            }),
          e
        );
      })();
    function u(t) {
      switch (t) {
        case e.Agent:
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_CONTACT_ON_WA;
        case e.Shortcut:
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_CHATS_LIST_BUTTON;
        case e.Invoke:
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE;
        case e.Search:
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_SEARCH_CHATS_LIST;
      }
    }
    function c(t, n) {
      return s.has(n)
        ? e.Search
        : n === o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut ||
            o("WAWebBotUtils").isMetaAiBot(t)
          ? e.Shortcut
          : e.Agent;
    }
    ((l.BotEntryPointType = e),
      (l.getWamBotEntryPoint = u),
      (l.getBotEntryPoint = c));
  },
  98,
);
