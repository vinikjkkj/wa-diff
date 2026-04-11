__d(
  "WAWebBizBotLogging",
  [
    "WAWebBotBaseGating",
    "WAWebBotBizJourneyWamEvent",
    "WAWebChatEntryPoint",
    "WAWebGetSharedSessionId",
    "WAWebWamEnumBotBizActionType",
    "WAWebWamEnumBotBizEntryPoint",
    "WAWebWamEnumBotBizType",
    "WAWebWamEnumBotType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebBotBaseGating").isBizBot3pEnabled()) {
        var t = new (o("WAWebBotBizJourneyWamEvent").BotBizJourneyWamEvent)({
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          botBizEntryPoint: o("WAWebWamEnumBotBizEntryPoint")
            .BOT_BIZ_ENTRY_POINT.SHARED_BOT_BIZ_CARD,
          botBizActionType: m(e),
          botBizType: c("3p"),
          botType: d("3p"),
        });
        t.commit();
      }
    }
    function s() {
      if (o("WAWebBotBaseGating").isBizBot3pEnabled()) {
        var e = new (o("WAWebBotBizJourneyWamEvent").BotBizJourneyWamEvent)({
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          botBizEntryPoint: o("WAWebWamEnumBotBizEntryPoint")
            .BOT_BIZ_ENTRY_POINT.SHARED_BOT_BIZ_DEEPLINK,
          botBizActionType: o("WAWebWamEnumBotBizActionType")
            .BOT_BIZ_ACTION_TYPE.BOT_BIZ_DEEPLINK_CLICK,
          botBizType: c("3p"),
          botType: d("3p"),
        });
        e.commit();
      }
    }
    function u(e, t, n) {
      if (
        !(
          (e === "3p" && !o("WAWebBotBaseGating").isBizBot3pEnabled()) ||
          (e === "1p" && !o("WAWebBotBaseGating").isBizBot1pEnabled())
        )
      ) {
        var r;
        switch (n) {
          case o("WAWebChatEntryPoint").ChatEntryPoint.Vcard:
            r = o("WAWebWamEnumBotBizEntryPoint").BOT_BIZ_ENTRY_POINT
              .SHARED_BOT_BIZ_CARD;
            break;
          case o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist:
            r = o("WAWebWamEnumBotBizEntryPoint").BOT_BIZ_ENTRY_POINT
              .BOT_BIZ_CHAT;
            break;
          default:
            r = void 0;
        }
        var a = new (o("WAWebBotBizJourneyWamEvent").BotBizJourneyWamEvent)({
          appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
          botBizActionType: m(t),
          botBizEntryPoint: r,
          botBizType: c(e),
          botType: d(e),
        });
        a.commit();
      }
    }
    function c(e) {
      switch (e) {
        case "1p":
          return o("WAWebWamEnumBotBizType").BOT_BIZ_TYPE.BOT_BIZ_1P;
        case "3p":
          return o("WAWebWamEnumBotBizType").BOT_BIZ_TYPE.BOT_BIZ_3P;
      }
    }
    function d(e) {
      switch (e) {
        case "1p":
          return o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ;
        case "3p":
          return o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ;
      }
    }
    function m(e) {
      switch (e) {
        case "card_click":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_CARD_CLICK;
        case "message_click":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_CARD_MESSAGE_CLICK;
        case "view_ai_click":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_CARD_VIEW_AI_CLICK;
        case "nux_appear":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_APPEAR;
        case "nux_dismiss":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_DISMISS;
        case "nux_select":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_SELECT;
        case "nux_view_new":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_APPEAR_NEW;
        case "nux_view_merged":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_APPEAR_MERGED;
        case "nux_dismiss_auto_accept":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_DISMISS_AUTO_ACCEPT;
        case "nux_continue_clicked":
          return o("WAWebWamEnumBotBizActionType").BOT_BIZ_ACTION_TYPE
            .BOT_BIZ_NUX_CONTINUE_CLICKED;
      }
    }
    ((l.logBizBot3pContactCardJourneyEvent = e),
      (l.logBizBot3pDeepLinkClickEvent = s),
      (l.logBizBotNuxJourneyEvent = u));
  },
  98,
);
