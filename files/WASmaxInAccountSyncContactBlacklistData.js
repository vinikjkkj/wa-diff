__d(
  "WASmaxInAccountSyncContactBlacklistData",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationContactBlacklistNoAdditionalDataMixin",
    "WASmaxInAccountSyncNotificationContactBlacklistWithAdditionalDataMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationContactBlacklistWithAdditionalDataMixin",
      ).parseNotificationContactBlacklistWithAdditionalDataMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationContactBlacklistWithAdditionalData",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationContactBlacklistNoAdditionalDataMixin",
      ).parseNotificationContactBlacklistNoAdditionalDataMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationContactBlacklistNoAdditionalData",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ContactBlacklistWithAdditionalData",
              "ContactBlacklistNoAdditionalData",
            ],
            [t, n],
          );
    }
    l.parseContactBlacklistData = e;
  },
  98,
);
