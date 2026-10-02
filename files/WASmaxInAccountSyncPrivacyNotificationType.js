__d(
  "WASmaxInAccountSyncPrivacyNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationPrivacyMixin",
    "WASmaxInAccountSyncNotificationPrivacyNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationPrivacyNoPayloadMixin",
      ).parseNotificationPrivacyNoPayloadMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPrivacyNoPayload",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationPrivacyMixin",
      ).parseNotificationPrivacyMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationPrivacy",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["PrivacyNoPayload", "Privacy"],
            [t, n],
          );
    }
    l.parsePrivacyNotificationType = e;
  },
  98,
);
