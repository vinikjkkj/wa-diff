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
        case o("WAWebChatEntryPoint").ChatEntryPoint.GroupInvite:
        case o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoin:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Vcard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.CommunitySubgroupSwitcher:
        case o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewGroupCreation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder:
        case o("WAWebChatEntryPoint").ChatEntryPoint.BizPayment:
        case o("WAWebChatEntryPoint").ChatEntryPoint.DeprecatedLidChatBanner:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AddContactToGroup:
        case o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewChat:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewBroadcastCreation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ExistingGroupRedirect:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpToBottom:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatLoadAroundFallback:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpBackToContext:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatJumpToMention:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatMsgDrawer:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatQuestionReply:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatMessageEditComplete:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatPollNotification:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatScrollBoundary:
        case o("WAWebChatEntryPoint").ChatEntryPoint.InChatReactionMediaThumb:
        case o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ChatSearch:
        case o("WAWebChatEntryPoint").ChatEntryPoint.EventInfo:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MessageHistoryBundle:
        case o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.PttOocPlayer:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MessageGallery:
        case o("WAWebChatEntryPoint").ChatEntryPoint.BizProduct:
        case o("WAWebChatEntryPoint").ChatEntryPoint.EventCreation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.IntroPanel:
        case o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Forward:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Debug:
        case o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MessageReply:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Status:
        case o("WAWebChatEntryPoint").ChatEntryPoint.SystemMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MessageAdmin:
        case o("WAWebChatEntryPoint").ChatEntryPoint.GroupParticipant:
        case o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoinRequest:
        case o("WAWebChatEntryPoint").ChatEntryPoint.CommunityMember:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit:
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NumberChangeNotificationBanner:
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
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Initialization:
          break;
      }
      return o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.UNKNOWN;
    }
    l.getChatLockEntryPoint = e;
  },
  98,
);
