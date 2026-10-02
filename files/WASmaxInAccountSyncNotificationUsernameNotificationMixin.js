__d(
  "WASmaxInAccountSyncNotificationUsernameNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncUsernameNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "username");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncUsernameNotificationType",
      ).parseUsernameNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            usernameUsernameNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationUsernameNotificationMixin = e;
  },
  98,
);
