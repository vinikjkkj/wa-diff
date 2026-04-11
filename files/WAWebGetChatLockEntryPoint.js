__d(
  "WAWebGetChatLockEntryPoint",
  ["WAWebChatEntryPoint", "WAWebWamEnumActionEntryPoint"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist:
          return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST;
        case o("WAWebChatEntryPoint").ChatEntryPoint.Notification:
          return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
            .NOTIFICATIONS;
        case o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply:
          return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
            .PRIVATE_REPLY;
        case o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage:
          return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
            .DIRECT_MESSAGE;
        case o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo:
          return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_INFO;
        case o("WAWebChatEntryPoint").ChatEntryPoint.Mention:
          return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
            .DIRECT_MESSAGE;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterIntegrity:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectory:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectorySearch:
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterDirectoryCategory:
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterDirectoryCategorySearch:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsLetterRecommendation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTabSearch:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCreationFlow:
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterAdminInviteAcceptModal:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedNewsletterMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus:
        case o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Link:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Vcard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.VoipWindow:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINullStateSuggestion:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAITypeaheadSuggestion:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward:
        case o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Unknown:
          break;
      }
      return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.UNKNOWN;
    }
    l.getChatLockEntryPoint = e;
  },
  98,
);
