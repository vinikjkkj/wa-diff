__d(
  "WAWebBotSystemMsg",
  ["WATimeUtils", "WAWebContactSystemMsg", "WAWebMsgType"],
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
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "bot_invoke_disclaimer",
        templateParams: [],
        t: t != null ? t : o("WATimeUtils").unixTime(),
      });
    }
    function u(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "biz_bot_1p_disclosure",
        templateParams: [],
      });
    }
    function c(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "biz_bot_3p_disclosure",
        templateParams: [],
      });
    }
    function d(e, t) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "bot_session_transparency_notice",
        botSessionTransparencyType: t,
        templateParams: [],
      });
    }
    ((l.genBotInitSystemMsg = e),
      (l.createBotInvokeSystemMsg = s),
      (l.genBizBot1pDisclosureMessage = u),
      (l.genBizBot3pDisclosureMessage = c),
      (l.genBotSessionTransparencyNoticeSystemMsg = d));
  },
  98,
);
