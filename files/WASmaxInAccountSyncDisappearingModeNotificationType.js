__d(
  "WASmaxInAccountSyncDisappearingModeNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationDisappearingModeMixin",
    "WASmaxInAccountSyncNotificationDisappearingModeNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationDisappearingModeMixin",
      ).parseNotificationDisappearingModeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDisappearingMode",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationDisappearingModeNoPayloadMixin",
      ).parseNotificationDisappearingModeNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationDisappearingModeNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["DisappearingMode", "DisappearingModeNoPayload"],
            [t, n],
          );
    }
    l.parseDisappearingModeNotificationType = e;
  },
  98,
);
