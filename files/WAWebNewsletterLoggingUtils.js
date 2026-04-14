__d(
  "WAWebNewsletterLoggingUtils",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCommonNewsletterEnums",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelEntryPointMetadata",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      switch (t) {
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCreationFlow:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterIntegrity:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .UPDATES_TAB;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectory:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .DIRECTORY;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectorySearch:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .DIRECTORY_SEARCH;
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterDirectoryCategory:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .DIRECTORY_CATEGORIES;
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterDirectoryCategorySearch:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .DIRECTORY_CATEGORIES_SEARCH;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTab:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .UPDATES_TAB;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTabSearch:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .UPDATES_TAB_SEARCH;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsLetterRecommendation:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .RECOMMENDED_LIST;
        case o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedNewsletterMessage:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .FORWARDED_MESSAGE;
        case o("WAWebChatEntryPoint").ChatEntryPoint.Link:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.LINK;
        case o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .DEEPLINK;
        case o("WAWebChatEntryPoint").ChatEntryPoint.Notification:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .NOTIFICATION;
        case o("WAWebChatEntryPoint").ChatEntryPoint
          .NewsletterAdminInviteAcceptModal:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .ADMIN_INVITE_MESSAGE;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.STATUS;
        case o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters:
          return o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT
            .SIMILAR_CHANNEL;
        case o("WAWebChatEntryPoint").ChatEntryPoint.Vcard:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist:
        case o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut:
        case o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply:
        case o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Mention:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab:
        case o("WAWebChatEntryPoint").ChatEntryPoint.VoipWindow:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINullStateSuggestion:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAITypeaheadSuggestion:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel:
        case o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward:
        case o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1:
        case o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup:
        case o("WAWebChatEntryPoint").ChatEntryPoint.ForwardedAiBotMessage:
        case o("WAWebChatEntryPoint").ChatEntryPoint.Unknown:
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected entry point: ",
                    "",
                  ])),
                t,
              )
              .tags("newsletter-logging")
              .sendLogs("Unexpected entry point in newsletter open logging"),
            o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.UNKNOWN
          );
      }
    }
    function c(e) {
      switch (e) {
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard:
          return o("WAWebWamEnumChannelEntryPointMetadata")
            .CHANNEL_ENTRY_POINT_METADATA.LINK_TOOLTIP;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton:
          return o("WAWebWamEnumChannelEntryPointMetadata")
            .CHANNEL_ENTRY_POINT_METADATA.LINK_BUTTON;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard:
          return o("WAWebWamEnumChannelEntryPointMetadata")
            .CHANNEL_ENTRY_POINT_METADATA.POST_TOOLTIP;
        case o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus:
          return o("WAWebWamEnumChannelEntryPointMetadata")
            .CHANNEL_ENTRY_POINT_METADATA.STATUS_HEADER;
        default:
          return;
      }
    }
    function d(e) {
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
          return o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.OWNER;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          return o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.ADMIN;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType
          .Subscriber:
          return o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.FOLLOWER;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest:
          return o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST;
      }
    }
    function m(e) {
      var t = e == null ? void 0 : e.membershipType;
      return t == null ? null : d(t);
    }
    function p(e) {
      switch (e) {
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_CATEGORIES:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_DIRECTORY_CATEGORIES;
        case o("WAWebWamEnumTsSurface").TS_SURFACE
          .CHANNEL_DIRECTORY_CATEGORIES_SEARCH:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_DIRECTORY_CATEGORIES_SEARCH;
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_DIRECTORY;
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_DIRECTORY_SEARCH:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_DIRECTORY_SEARCH;
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME_SEARCH:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_UPDATES_HOME_SEARCH;
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_UPDATES_HOME:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_UPDATES_HOME;
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_THREAD;
        case o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE:
          return o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
            .CHANNEL_PROFILE;
        default:
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected discovery surface: ",
                    "",
                  ])),
                e,
              )
              .tags("newsletter-logging")
              .sendLogs("Unexpected entry point in newsletter open logging"),
            o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
              .CHANNEL_UPDATES_HOME
          );
      }
    }
    function _(e) {
      switch (e) {
        case o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.OWNER:
          return "owner";
        case o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.ADMIN:
          return "admin";
        case o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.FOLLOWER:
          return "follower";
        case o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST:
          return "guest";
      }
    }
    ((l.getChannelEntryPoint = u),
      (l.getChannelEntryPointMetadata = c),
      (l.getChannelUserType = d),
      (l.getChannelUserTypeFromMembershipType = m),
      (l.getEventSurfaceFromDiscoverySurface = p),
      (l.getChannelUserStringFromChannelUserType = _));
  },
  98,
);
