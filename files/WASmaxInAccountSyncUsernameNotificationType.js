__d(
  "WASmaxInAccountSyncUsernameNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationUsernameChangeMixin",
    "WASmaxInAccountSyncNotificationUsernameDeletionMixin",
    "WASmaxInAccountSyncNotificationUsernameNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationUsernameNoPayloadMixin",
      ).parseNotificationUsernameNoPayloadMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationUsernameNoPayload",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationUsernameChangeMixin",
      ).parseNotificationUsernameChangeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationUsernameChange",
          value: n.value,
        });
      var r = o(
        "WASmaxInAccountSyncNotificationUsernameDeletionMixin",
      ).parseNotificationUsernameDeletionMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationUsernameDeletion",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["UsernameNoPayload", "UsernameChange", "UsernameDeletion"],
            [t, n, r],
          );
    }
    l.parseUsernameNotificationType = e;
  },
  98,
);
