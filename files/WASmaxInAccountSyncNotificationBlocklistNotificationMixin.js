__d(
  "WASmaxInAccountSyncNotificationBlocklistNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncBlocklistNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "blocklist");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncBlocklistNotificationType",
      ).parseBlocklistNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            blocklistBlocklistNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationBlocklistNotificationMixin = e;
  },
  98,
);
