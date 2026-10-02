__d(
  "WASmaxInAccountSyncStatusNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationStatusMixin",
    "WASmaxInAccountSyncNotificationStatusNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationStatusMixin",
      ).parseNotificationStatusMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationStatus",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationStatusNoPayloadMixin",
      ).parseNotificationStatusNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationStatusNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Status", "StatusNoPayload"],
            [t, n],
          );
    }
    l.parseStatusNotificationType = e;
  },
  98,
);
