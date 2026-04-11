__d(
  "WAWebOrderSystemMsg",
  ["WAWebContactSystemMsg", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "order_ephemeral_exemption",
        templateParams: [],
      });
    }
    l.getOrderEphemeralExemptionSystemMsg = e;
  },
  98,
);
