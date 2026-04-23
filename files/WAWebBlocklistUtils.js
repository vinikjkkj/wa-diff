__d(
  "WAWebBlocklistUtils",
  [
    "WAWebABProps",
    "WAWebBlockContants",
    "WAWebSpamConstants",
    "WAWebWamEnumBlockEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock:
        case o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious:
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsBlock:
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsBlockSuspicious:
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsReport:
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsReportSuspicious:
        case o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock:
          return !0;
        default:
          return !1;
      }
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "report_block_improvements_for_groups_enabled",
      );
    }
    function u(e) {
      switch (e) {
        case o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock:
        case o("WAWebBlockContants").BlockEntryPoint.BizOldSpamBannerBlock:
          return o("WAWebSpamConstants").SpamFlow.OneToOneOldSpamBannerBlock;
        case o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock:
          return o("WAWebSpamConstants").SpamFlow.BizSpamBannerBlock;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListBlock:
          return o("WAWebSpamConstants").SpamFlow.ChatListBlock;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListNoInsubBlock:
          return o("WAWebSpamConstants").SpamFlow.ChatListNoInsubBlock;
        case o("WAWebBlockContants").BlockEntryPoint.NotificationBlock:
          return o("WAWebSpamConstants").SpamFlow.NotificationBlock;
        case o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock:
          return o("WAWebSpamConstants").SpamFlow.OverflowMenuBlock;
        default:
          return o("WAWebSpamConstants").SpamFlow.Block;
      }
    }
    function c(e) {
      switch (e) {
        case o("WAWebSpamConstants").SpamFlow.OverflowMenuReport:
          return o("WAWebBlockContants").BlockEntryPoint.OverflowMenuReport;
        case o("WAWebSpamConstants").SpamFlow.MediaViewer:
          return o("WAWebBlockContants").BlockEntryPoint.MediaViewer;
        case o("WAWebSpamConstants").SpamFlow.MessageMenu:
          return o("WAWebBlockContants").BlockEntryPoint.MessageMenu;
        case o("WAWebSpamConstants").SpamFlow.AccountInfoReport:
          return o("WAWebBlockContants").BlockEntryPoint.AccountInfoReport;
        case o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport:
          return o("WAWebBlockContants").BlockEntryPoint
            .OneToOneChatSpamBannerReport;
        case o("WAWebSpamConstants").SpamFlow.ChatFmxCardSafetyToolsReport:
          return o("WAWebBlockContants").BlockEntryPoint
            .ChatFmxCardSafetyToolsReport;
        case o("WAWebSpamConstants").SpamFlow
          .ChatFmxCardSafetyToolsReportSuspicious:
          return o("WAWebBlockContants").BlockEntryPoint
            .ChatFmxCardSafetyToolsReportSuspicious;
        default:
          return null;
      }
    }
    function d(e) {
      if (e == null)
        return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.OTHER;
      switch (e) {
        case o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .ONE_TO_ONE_OLD_SPAM_BANNER_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.OneToOneSpamBannerBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .ONE_TO_ONE_SPAM_BANNER_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.AccountInfo:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .ACCOUNT_INFO;
        case o("WAWebBlockContants").BlockEntryPoint.AccountInfoReport:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .ACCOUNT_INFO_REPORT;
        case o("WAWebBlockContants").BlockEntryPoint.BizOldSpamBannerBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .BIZ_OLD_SPAM_BANNER_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .BIZ_SPAM_BANNER_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.BlockHeaderChat:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .BLOCK_HEADER_CHAT;
        case o("WAWebBlockContants").BlockEntryPoint.CallLog:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.CALL_LOG;
        case o("WAWebBlockContants").BlockEntryPoint.Chat:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.CHAT;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_LIST_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListContextMenuBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_LIST_CONTEXT_MENU_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListNoInsubBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_LIST_NOINSUB_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.NotificationBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .NOTIFICATION_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .OVERFLOW_MENU_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.OverflowMenuReport:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .OVERFLOW_MENU_REPORT;
        case o("WAWebBlockContants").BlockEntryPoint.Profile:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.PROFILE;
        case o("WAWebBlockContants").BlockEntryPoint.TriggeredBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .TRIGGERED_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.BlockList:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.BLOCK_LIST;
        case o("WAWebBlockContants").BlockEntryPoint.MediaViewer:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .MEDIA_VIEWER;
        case o("WAWebBlockContants").BlockEntryPoint.MessageMenu:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .MESSAGE_MENU;
        case o("WAWebBlockContants").BlockEntryPoint
          .OneToOneChatSpamBannerReport:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .ONE_TO_ONE_SPAM_BANNER_REPORT;
        case o("WAWebBlockContants").BlockEntryPoint.StatusPostReport:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .STATUS_POST_REPORT;
        case o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_FMX_CARD_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_FMX_CARD_BLOCK_SUSPICIOUS;
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsBlock:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_FMX_CARD_SAFETY_TOOLS_BLOCK;
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsBlockSuspicious:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_FMX_CARD_SAFETY_TOOLS_BLOCK_SUSPICIOUS;
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsReport:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_FMX_CARD_SAFETY_TOOLS_REPORT;
        case o("WAWebBlockContants").BlockEntryPoint
          .ChatFmxCardSafetyToolsReportSuspicious:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .CHAT_FMX_CARD_SAFETY_TOOLS_REPORT_SUSPICIOUS;
        case o("WAWebBlockContants").BlockEntryPoint
          .OneToOneBlockedChatComposer:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT
            .ONE_TO_ONE_BLOCKED_CHAT_COMPOSER;
        default:
          return o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.OTHER;
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebBlockContants").BlockEntryPoint.Profile:
          return 1;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListBlock:
          return 2;
        case o("WAWebBlockContants").BlockEntryPoint.BlockList:
          return 1;
        default:
          return null;
      }
    }
    function p(e) {
      switch (e) {
        case o("WAWebBlockContants").BlockEntryPoint.Profile:
          return 3;
        case o("WAWebBlockContants").BlockEntryPoint.ChatListBlock:
          return 4;
        case o("WAWebBlockContants").BlockEntryPoint.BlockList:
          return 5;
        default:
          return null;
      }
    }
    ((l.isReportPreCheckedForOneToOneChats = e),
      (l.isRBIForGroupsEnabled = s),
      (l.getSpamFlowFromBlockEntryPoint = u),
      (l.getBlockEntryPointFromSpamFlow = c),
      (l.getBlockEventMetricFromBlockEntryPoint = d),
      (l.getBlockPsaRemoveEntryPointFromBlockEntryPoint = m),
      (l.getUnblockPsaRemoveEntryPointFromBlockEntryPoint = p));
  },
  98,
);
