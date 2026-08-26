__d(
  "WAWebBotLogging",
  ["$InternalEnum", "WAWebChatEntryPoint", "WAWebWamEnumBotEntryPointType"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Shortcut", "Invoke", "Search"]),
      s = (function () {
        var e = new Set();
        return (
          o("WAWebChatEntryPoint")
            .ChatEntryPoint.members()
            .forEach(function (t) {
              e: {
                if (
                  t ===
                  o("WAWebChatEntryPoint").ChatEntryPoint.MetaAISearchAskButton
                ) {
                  e.add(t);
                  break e;
                }
                if (
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .BotChatListShortcut ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .AgentsSettingsList ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .CommunitySubgroupSwitcher ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .CommunityNewGroupCreation ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.NewGroupCreation ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.BizPayment ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .DeprecatedLidChatBanner ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.AddContactToGroup ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.DialerPad ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.NewChat ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NewBroadcastCreation ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.InfoDrawer ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .ExistingGroupRedirect ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatJumpToBottom ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatLoadAroundFallback ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatJumpBackToContext ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatJumpToMention ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.InChatMsgDrawer ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.InChatDatePicker ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatQuestionReply ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatMessageEditComplete ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatPollNotification ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatScrollBoundary ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .InChatReactionMediaThumb ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.MediaViewer ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.MediaHub ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ChatSearch ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.EventInfo ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .MessageHistoryBundle ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.PinnedMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.PttOocPlayer ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.MessageGallery ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.BizProduct ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.EventCreation ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.IntroPanel ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.SendMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Forward ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Debug ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.DragAndDrop ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.MessageReply ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Status ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.SystemMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.MessageAdmin ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.GroupParticipant ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .SubgroupJoinRequest ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.CommunityMember ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ContactsTab ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .NumberChangeNotificationBanner ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage ||
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint
                      .ForwardedNewsletterMessage ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.Link ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.GroupInvite ||
                  t === o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoin ||
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
                  t ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.Initialization ||
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
    function c(t) {
      return s.has(t) ? e.Search : e.Shortcut;
    }
    ((l.BotEntryPointType = e),
      (l.getWamBotEntryPoint = u),
      (l.getBotEntryPoint = c));
  },
  98,
);
