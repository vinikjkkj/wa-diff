__d(
  "WASmaxInAccountSyncBlocklistNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationBlocklistMixin",
    "WASmaxInAccountSyncNotificationBlocklistNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationBlocklistMixin",
      ).parseNotificationBlocklistMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationBlocklist",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationBlocklistNoPayloadMixin",
      ).parseNotificationBlocklistNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationBlocklistNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Blocklist", "BlocklistNoPayload"],
            [t, n],
          );
    }
    l.parseBlocklistNotificationType = e;
  },
  98,
);
