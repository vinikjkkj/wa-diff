__d(
  "WASmaxInAccountSyncNotificationStatusNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncStatusNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "status");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncStatusNotificationType",
      ).parseStatusNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            statusStatusNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationStatusNotificationMixin = e;
  },
  98,
);
