__d(
  "WAWebMarketingMessagesFeedbackSystemMsg",
  ["WAWebContactSystemMsg", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "marketing_messages_from_business_stopped",
        templateParams: [],
      });
    }
    function s(e) {
      return o("WAWebContactSystemMsg").genNotificationMsg(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "marketing_messages_from_business_resumed",
        templateParams: [],
      });
    }
    ((l.getMarketingMessagesStoppedSystemMsg = e),
      (l.getMarketingMessagesResumedSystemMsg = s));
  },
  98,
);
