__d(
  "WAWebBotSystemMsg",
  [
    "WATimeUtils",
    "WAWebBotBaseGating",
    "WAWebContactSystemMsg",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "bot_init",
        templateParams: [],
      });
    }
    function s(e, t) {
      var n, r, a;
      if (
        o("WAWebBotBaseGating").isBotEnabled() &&
        !t.id.isBot() &&
        ((n = t.groupMetadata) == null ? void 0 : n.isOpenBotGroup) !== !0 &&
        ((r = t.groupMetadata) == null ? void 0 : r.isTeeBotGroup) !== !0 &&
        e.botMessageSecret != null &&
        t.hasCreatedBotInvokeSystemMsg !== !0 &&
        (a = e.invokedBotWid) != null &&
        a.isBot()
      ) {
        var i = u(t.id);
        return i;
      }
      return null;
    }
    function u(e, t) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "bot_invoke_disclaimer",
        templateParams: [],
        t: t != null ? t : o("WATimeUtils").unixTime(),
      });
    }
    function c(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "biz_bot_1p_disclosure",
        templateParams: [],
      });
    }
    function d(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "biz_bot_3p_disclosure",
        templateParams: [],
      });
    }
    function m(e, t) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "bot_session_transparency_notice",
        botSessionTransparencyType: t,
        templateParams: [],
      });
    }
    ((l.genBotInitSystemMsg = e),
      (l.getMaybeSysMsgForBotInvoke = s),
      (l.createBotInvokeSystemMsg = u),
      (l.genBizBot1pDisclosureMessage = c),
      (l.genBizBot3pDisclosureMessage = d),
      (l.genBotSessionTransparencyNoticeSystemMsg = m));
  },
  98,
);
