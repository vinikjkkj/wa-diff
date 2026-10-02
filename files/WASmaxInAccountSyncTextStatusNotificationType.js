__d(
  "WASmaxInAccountSyncTextStatusNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationTextStatusMixin",
    "WASmaxInAccountSyncNotificationTextStatusNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationTextStatusMixin",
      ).parseNotificationTextStatusMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationTextStatus",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationTextStatusNoPayloadMixin",
      ).parseNotificationTextStatusNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationTextStatusNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["TextStatus", "TextStatusNoPayload"],
            [t, n],
          );
    }
    l.parseTextStatusNotificationType = e;
  },
  98,
);
