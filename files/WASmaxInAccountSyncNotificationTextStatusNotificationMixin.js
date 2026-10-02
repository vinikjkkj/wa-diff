__d(
  "WASmaxInAccountSyncNotificationTextStatusNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncTextStatusNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "text_status");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncTextStatusNotificationType",
      ).parseTextStatusNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            textStatusTextStatusNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationTextStatusNotificationMixin = e;
  },
  98,
);
