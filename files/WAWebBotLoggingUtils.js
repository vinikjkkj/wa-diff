__d(
  "WAWebBotLoggingUtils",
  [
    "WALogger",
    "WAWebBotJourneyLogger",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebProtobufsAICommon.pb",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumThreadActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t) {
      e: {
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.CHAT_LIST
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.CHATLIST;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_CHAT_SHORTCUT
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_WEB_INTRO_PANEL
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .WEB_INTRO_PANEL;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.AI_NULL_STATE
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .AISEARCH_NULL_STATE_SUGGESTION;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_SEARCH_CHATS_LIST
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .AISEARCH_TYPE_AHEAD_SUGGESTION;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_WEB_NAVIGATION_BAR
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .WEB_NAVIGATION_BAR;
        if (
          t === o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.FORWARD
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .META_AI_FORWARD;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .ASK_META_AI_CONTEXT_MENU
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .ASK_META_AI_CONTEXT_MENU;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .DEEPLINK_USER_SHARED
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.DEEPLINK;
        if (
          t ===
          o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.NOTIFICATION
        )
          return o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
            .NOTIFICATION;
        {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Encountered unexpected bot entry point: ",
                  "",
                ])),
              t,
            )
            .tags("bot-logging")
            .sendLogs("Unexpected bot entry point in bot metrics logging");
          return;
        }
      }
    }
    function p(e) {
      e: return e === o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist ||
        e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab
        ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.CHATLIST
        : e === o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut
          ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON
          : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel
            ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                .WEB_INTRO_PANEL
            : e ===
                o("WAWebChatEntryPoint").ChatEntryPoint
                  .MetaAINullStateSuggestion
              ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                  .AISEARCH_NULL_STATE_SUGGESTION
              : e ===
                  o("WAWebChatEntryPoint").ChatEntryPoint
                    .MetaAITypeaheadSuggestion
                ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                    .AISEARCH_TYPE_AHEAD_SUGGESTION
                : e ===
                    o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar
                  ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                      .WEB_NAVIGATION_BAR
                  : e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward
                    ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                        .META_AI_FORWARD
                    : e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI
                      ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                          .ASK_META_AI_CONTEXT_MENU
                      : e ===
                          o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1
                        ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                            .ASK_META_AI_CONTEXT_MENU_1ON1
                        : e ===
                            o("WAWebChatEntryPoint").ChatEntryPoint
                              .AskMetaAIGroup
                          ? o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                              .ASK_META_AI_CONTEXT_MENU_GROUP
                          : e ===
                              o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
                            ? o("WAWebProtobufsAICommon.pb")
                                .BotMetricsEntryPoint.DEEPLINK
                            : e ===
                                o("WAWebChatEntryPoint").ChatEntryPoint
                                  .Notification
                              ? o("WAWebProtobufsAICommon.pb")
                                  .BotMetricsEntryPoint.NOTIFICATION
                              : void 0;
    }
    function _(e) {
      return e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.FAVICON
        ? "favicon"
        : e === o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.CHATLIST
          ? "chat_list"
          : e ===
              o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                .AISEARCH_NULL_STATE_SUGGESTION
            ? "nullstate_suggestion"
            : e ===
                o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                  .AISEARCH_TYPE_AHEAD_SUGGESTION
              ? "typeahead_suggestion"
              : e ===
                  o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.DEEPLINK
                ? "deeplink"
                : e ===
                    o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                      .NOTIFICATION
                  ? "notification"
                  : e ===
                      o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint.AI_TAB
                    ? "ai_tab"
                    : e ===
                        o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                          .ASK_META_AI_CONTEXT_MENU
                      ? "ask_meta_ai_context_menu"
                      : e ===
                          o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                            .ASK_META_AI_CONTEXT_MENU_1ON1
                        ? "ask_meta_ai_context_menu_1on1"
                        : e ===
                            o("WAWebProtobufsAICommon.pb").BotMetricsEntryPoint
                              .ASK_META_AI_CONTEXT_MENU_GROUP
                          ? "ask_meta_ai_context_menu_group"
                          : e ===
                              o("WAWebProtobufsAICommon.pb")
                                .BotMetricsEntryPoint.META_AI_FORWARD
                            ? "meta_ai_forward"
                            : e ===
                                o("WAWebProtobufsAICommon.pb")
                                  .BotMetricsEntryPoint.WEB_INTRO_PANEL
                              ? "web_intro_panel"
                              : e ===
                                  o("WAWebProtobufsAICommon.pb")
                                    .BotMetricsEntryPoint.WEB_NAVIGATION_BAR
                                ? "web_navigation_bar"
                                : null;
    }
    function f(e) {
      e: {
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .CHAT_LIST;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_CHAT_SHORTCUT;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_WEB_INTRO_PANEL;
        if (
          e ===
          o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINullStateSuggestion
        )
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_NULL_STATE;
        if (
          e ===
          o("WAWebChatEntryPoint").ChatEntryPoint.MetaAITypeaheadSuggestion
        )
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_SEARCH_CHATS_LIST;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_WEB_NAVIGATION_BAR;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .FORWARD;
        if (
          e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI1on1 ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAIGroup
        )
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .ASK_META_AI_CONTEXT_MENU;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Mention)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE.INVOKE;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .AI_CONTACT_ON_WA;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .DEEPLINK_USER_SHARED;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.Notification)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .NOTIFICATION;
        if (e === o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab)
          return o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE
            .CHAT_LIST;
        if (
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList
        ) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[threading] ",
                  " - use original entry point",
                ])),
              e,
            )
            .tags("bot-logging")
            .sendLogs("Unexpected entry point in bot chat logging");
          return;
        }
        if (
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterIntegrity ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterChatlist ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectory ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectorySearch ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterDirectoryCategory ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterDirectoryCategorySearch ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.NewsLetterRecommendation ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterUpdatesTab ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterUpdatesTabSearch ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCreationFlow ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterAdminInviteAcceptModal ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterPostLinkCard ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCard ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterLinkCardButton ||
          e ===
            o("WAWebChatEntryPoint").ChatEntryPoint
              .ForwardedNewsletterMessage ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.Link ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.Vcard ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.PrivateReply ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.NewslettersTab ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.CommunitiesTab ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.VoipWindow ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore ||
          e === o("WAWebChatEntryPoint").ChatEntryPoint.Unknown
        ) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Encountered unexpected entry point: ",
                  "",
                ])),
              e,
            )
            .tags("bot-logging")
            .sendLogs("Unexpected entry point in bot chat logging");
          return;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function g(e) {
      var t = e.to;
      if (!(t == null || !o("WAWebBotUtils").isMetaAiBot(t))) {
        var n = o("WAWebBotJourneyLogger").BotJourneyLogger.getDestinationId();
        if (n != null) {
          var r = o(
            "WAWebBotJourneyLogger",
          ).BotJourneyLogger.getBotMetricsEntryPoint();
          if (r == null) {
            var a = o("WAWebBotJourneyLogger").BotJourneyLogger.getEntryPoint();
            a != null && (r = m(a));
          }
          if (r != null) return { destinationId: n, destinationEntryPoint: r };
        }
      }
    }
    function h(e) {
      return e == null
        ? "undefined"
        : e ===
            o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT
              .THREE_DOT_MENU
          ? "THREE_DOT_MENU"
          : e ===
              o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT
                .THREAD_LIST_VIEW
            ? "THREAD_LIST_VIEW"
            : e ===
                o("WAWebWamEnumMetaAiActionEntryPoint")
                  .META_AI_ACTION_ENTRY_POINT.TOP_NAV
              ? "TOP_NAV"
              : e ===
                  o("WAWebWamEnumMetaAiActionEntryPoint")
                    .META_AI_ACTION_ENTRY_POINT.CHAT_LIST
                ? "CHAT_LIST"
                : e ===
                    o("WAWebWamEnumMetaAiActionEntryPoint")
                      .META_AI_ACTION_ENTRY_POINT.NAVIGATION_BAR_BUTTON
                  ? "NAVIGATION_BAR_BUTTON"
                  : e ===
                      o("WAWebWamEnumMetaAiActionEntryPoint")
                        .META_AI_ACTION_ENTRY_POINT.CONTINUE_CHAT_MODULE
                    ? "CONTINUE_CHAT_MODULE"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    var y =
      ((c = {}),
      (c[
        (d = o("WAWebWamEnumBotEntryPointType")).BOT_ENTRY_POINT_TYPE.WA_CHAT
      ] = "WA_CHAT"),
      (c[d.BOT_ENTRY_POINT_TYPE.STATUS] = "STATUS"),
      (c[d.BOT_ENTRY_POINT_TYPE.NEW_CHAT] = "NEW_CHAT"),
      (c[d.BOT_ENTRY_POINT_TYPE.INVOKE] = "INVOKE"),
      (c[d.BOT_ENTRY_POINT_TYPE.SHARED_AI] = "SHARED_AI"),
      (c[d.BOT_ENTRY_POINT_TYPE.NOTIFICATION] = "NOTIFICATION"),
      (c[d.BOT_ENTRY_POINT_TYPE.BANNER] = "BANNER"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_CHATS_LIST_BUTTON] = "AI_CHATS_LIST_BUTTON"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_CONTACT_ON_WA] = "AI_CONTACT_ON_WA"),
      (c[d.BOT_ENTRY_POINT_TYPE.DEEPLINK_USER_SHARED] = "DEEPLINK_USER_SHARED"),
      (c[d.BOT_ENTRY_POINT_TYPE.DEEPLINK_QP] = "DEEPLINK_QP"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_SEARCH_CHATS_LIST] = "AI_SEARCH_CHATS_LIST"),
      (c[d.BOT_ENTRY_POINT_TYPE.CHAT_INFO_PAGE] = "CHAT_INFO_PAGE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_VOICE] = "AI_VOICE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_CHAT_SHORTCUT] = "AI_CHAT_SHORTCUT"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_IMAGINE_BOTTOM_SHEET] =
        "AI_IMAGINE_BOTTOM_SHEET"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_HOME_PREVIEW] = "AI_HOME_PREVIEW"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_SEARCH_CHATS_LIST_VOICE] =
        "AI_SEARCH_CHATS_LIST_VOICE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_CHAT_THREAD_VOICE] = "AI_CHAT_THREAD_VOICE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_FAB_VOICE] = "AI_FAB_VOICE"),
      (c[d.BOT_ENTRY_POINT_TYPE.CHAT_INFO_SETTINGS] = "CHAT_INFO_SETTINGS"),
      (c[d.BOT_ENTRY_POINT_TYPE.CHAT_THREAD] = "CHAT_THREAD"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_MEMORY_BOTTOM_SHEET] =
        "AI_MEMORY_BOTTOM_SHEET"),
      (c[d.BOT_ENTRY_POINT_TYPE.FORWARD] = "FORWARD"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_MEMORY_SYSTEM_MESSAGE] =
        "AI_MEMORY_SYSTEM_MESSAGE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_WIDGET] = "AI_WIDGET"),
      (c[d.BOT_ENTRY_POINT_TYPE.SHARE] = "SHARE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_NEW_FAB_VOICE] = "AI_NEW_FAB_VOICE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_TAB_DISCOVERY] = "AI_TAB_DISCOVERY"),
      (c[d.BOT_ENTRY_POINT_TYPE.CHAT_LIST] = "CHAT_LIST"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_TAB] = "AI_TAB"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_HOME_IN_TAB] = "AI_HOME_IN_TAB"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_NULL_STATE] = "AI_NULL_STATE"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_CREATION] = "AI_STUDIO_CREATION"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_PROFILE_EDIT] =
        "AI_STUDIO_PROFILE_EDIT"),
      (c[d.BOT_ENTRY_POINT_TYPE.BOT_SETTINGS] = "BOT_SETTINGS"),
      (c[d.BOT_ENTRY_POINT_TYPE.META_AI_LONG_PRESS_CONTEXT_MENU] =
        "META_AI_LONG_PRESS_CONTEXT_MENU"),
      (c[d.BOT_ENTRY_POINT_TYPE.FAB] = "FAB"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_NEW_FAB_VOICE_CALL_HISTORY] =
        "AI_NEW_FAB_VOICE_CALL_HISTORY"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_CREATION_FAB] =
        "AI_STUDIO_CREATION_FAB"),
      (c[d.BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_1ON1] = "INVOKE_META_AI_1ON1"),
      (c[d.BOT_ENTRY_POINT_TYPE.INVOKE_META_AI_GROUP] = "INVOKE_META_AI_GROUP"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_STUDIO_YOUR_AI] = "AI_STUDIO_YOUR_AI"),
      (c[d.BOT_ENTRY_POINT_TYPE.ASK_META_AI_CONTEXT_MENU] =
        "ASK_META_AI_CONTEXT_MENU"),
      (c[d.BOT_ENTRY_POINT_TYPE.META_AI_SETTINGS] = "META_AI_SETTINGS"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_STICKERS_BOTTOM_SHEET] =
        "AI_STICKERS_BOTTOM_SHEET"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_WEB_NAVIGATION_BAR] =
        "AI_WEB_NAVIGATION_BAR"),
      (c[d.BOT_ENTRY_POINT_TYPE.AI_WEB_INTRO_PANEL] = "AI_WEB_INTRO_PANEL"),
      c);
    function C(e) {
      var t;
      return e == null ? "undefined" : (t = y[e]) != null ? t : "undefined";
    }
    function b(e) {
      return e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.PIN
        ? "PIN"
        : e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.UNPIN
          ? "UNPIN"
          : e === o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.DELETE
            ? "DELETE"
            : e ===
                o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES.RENAME
              ? "RENAME"
              : e ===
                  o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES
                    .CLICK_NEW_CHAT
                ? "CLICK_NEW_CHAT"
                : e ===
                    o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES
                      .CLICK_CHAT_HISTORY
                  ? "CLICK_CHAT_HISTORY"
                  : e ===
                      o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES
                        .CLICK_CONVERSATION_THREAD
                    ? "CLICK_CONVERSATION_THREAD"
                    : e ===
                        o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES
                          .THREAD_ENTER
                      ? "THREAD_ENTER"
                      : e ===
                          o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES
                            .THREAD_EXIT
                        ? "THREAD_EXIT"
                        : e ===
                            o("WAWebWamEnumThreadActionTypes")
                              .THREAD_ACTION_TYPES.THREAD_LIST_IMPRESSION
                          ? "THREAD_LIST_IMPRESSION"
                          : e ===
                              o("WAWebWamEnumThreadActionTypes")
                                .THREAD_ACTION_TYPES.THREE_DOT_MENU
                            ? "THREE_DOT_MENU"
                            : e ===
                                o("WAWebWamEnumThreadActionTypes")
                                  .THREAD_ACTION_TYPES.FIRST_PROMPT_SENT
                              ? "FIRST_PROMPT_SENT"
                              : e ===
                                  o("WAWebWamEnumThreadActionTypes")
                                    .THREAD_ACTION_TYPES.SEARCH_RESULT_CLICK
                                ? "SEARCH_RESULT_CLICK"
                                : e ===
                                    o("WAWebWamEnumThreadActionTypes")
                                      .THREAD_ACTION_TYPES.SEARCH_RESULT_SHOWN
                                  ? "SEARCH_RESULT_SHOWN"
                                  : e ===
                                      o("WAWebWamEnumThreadActionTypes")
                                        .THREAD_ACTION_TYPES.AI_HOME_IMPRESSION
                                    ? "AI_HOME_IMPRESSION"
                                    : e ===
                                        o("WAWebWamEnumThreadActionTypes")
                                          .THREAD_ACTION_TYPES
                                          .CLICK_CONTINUE_CHAT_MODULE
                                      ? "CLICK_CONTINUE_CHAT_MODULE"
                                      : (function () {
                                          throw Error(
                                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                              e,
                                          );
                                        })();
    }
    ((l.getBotMetricsEntryPointFromBotEntryPoint = m),
      (l.getBotMetricsEntryPointFromChatEntryPoint = p),
      (l.getBotOriginFromBotMetricsEntryPoint = _),
      (l.getBotEntryPoint = f),
      (l.maybeGetBotMetricsMetadata = g),
      (l.getMetaAiActionEntryPointName = h),
      (l.getBotEntryPointTypeName = C),
      (l.getThreadActionTypeName = b));
  },
  98,
);
