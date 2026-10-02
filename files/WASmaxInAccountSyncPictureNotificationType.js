__d(
  "WASmaxInAccountSyncPictureNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationPictureMixin",
    "WASmaxInAccountSyncNotificationPictureNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationPictureMixin",
      ).parseNotificationPictureMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationPicture",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationPictureNoPayloadMixin",
      ).parseNotificationPictureNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationPictureNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Picture", "PictureNoPayload"],
            [t, n],
          );
    }
    l.parsePictureNotificationType = e;
  },
  98,
);
