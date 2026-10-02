__d(
  "WASmaxInPreKeysLowCountNotificationLowCountBothOrNotificationLowCountLegacyOnlyOrNotificationLowCountPQOnlyMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInPreKeysNotificationLowCountLowCountBothMixin",
    "WASmaxInPreKeysNotificationLowCountLowCountLegacyOnlyMixin",
    "WASmaxInPreKeysNotificationLowCountLowCountPQOnlyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPreKeysNotificationLowCountLowCountBothMixin",
      ).parseNotificationLowCountLowCountBothMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationLowCountLowCountBoth",
          value: t.value,
        });
      var n = o(
        "WASmaxInPreKeysNotificationLowCountLowCountLegacyOnlyMixin",
      ).parseNotificationLowCountLowCountLegacyOnlyMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationLowCountLowCountLegacyOnly",
          value: n.value,
        });
      var r = o(
        "WASmaxInPreKeysNotificationLowCountLowCountPQOnlyMixin",
      ).parseNotificationLowCountLowCountPQOnlyMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationLowCountLowCountPQOnly",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["LowCountBoth", "LowCountLegacyOnly", "LowCountPQOnly"],
            [t, n, r],
          );
    }
    l.parseLowCountNotificationLowCountBothOrNotificationLowCountLegacyOnlyOrNotificationLowCountPQOnlyMixinGroup =
      e;
  },
  98,
);
