__d(
  "WASmaxInAccountSyncNoticeNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationNoticeMixin",
    "WASmaxInAccountSyncNotificationNoticeNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationNoticeMixin",
      ).parseNotificationNoticeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationNotice",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationNoticeNoPayloadMixin",
      ).parseNotificationNoticeNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationNoticeNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Notice", "NoticeNoPayload"],
            [t, n],
          );
    }
    l.parseNoticeNotificationType = e;
  },
  98,
);
