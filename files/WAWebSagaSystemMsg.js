__d(
  "WAWebSagaSystemMsg",
  ["WAWebChatOpeningNotice", "WAWebContactSystemMsg", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: o("WAWebChatOpeningNotice").CHAT_OPENING_NOTICE.SAGA,
        templateParams: [],
      });
    }
    l.genSagaInitSystemMsg = e;
  },
  98,
);
