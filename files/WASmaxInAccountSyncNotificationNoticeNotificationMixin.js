__d(
  "WASmaxInAccountSyncNotificationNoticeNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNoticeNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "notice");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncNoticeNotificationType",
      ).parseNoticeNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            noticeNoticeNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationNoticeNotificationMixin = e;
  },
  98,
);
