__d(
  "WAWebScheduledMsgMexNotificationHandlers",
  [
    "WAWebScheduledMsgPostNotificationHandler",
    "WAWebScheduledMsgRevealNotificationHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      NotificationScheduledMessagePost: o(
        "WAWebScheduledMsgPostNotificationHandler",
      ).mexHandleScheduledMsgPost,
      NotificationScheduledMessageReveal: o(
        "WAWebScheduledMsgRevealNotificationHandler",
      ).mexHandleScheduledMsgReveal,
    };
    l.default = e;
  },
  98,
);
