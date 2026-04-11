__d(
  "WAWebPostSendOptOutSystemMsg",
  ["WAWebContactSystemMsg", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "marketing_messages_post_send_opt_out",
        templateParams: [t],
      });
    }
    l.getPostSendOptOutSystemMsg = e;
  },
  98,
);
