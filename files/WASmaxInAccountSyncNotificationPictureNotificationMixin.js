__d(
  "WASmaxInAccountSyncNotificationPictureNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncPictureNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncPictureNotificationType",
      ).parsePictureNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            picturePictureNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationPictureNotificationMixin = e;
  },
  98,
);
