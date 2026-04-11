__d(
  "WAWebSagaSystemMsg",
  ["WAWebContactSystemMsg", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "saga_init",
        templateParams: [],
      });
    }
    l.genSagaInitSystemMsg = e;
  },
  98,
);
