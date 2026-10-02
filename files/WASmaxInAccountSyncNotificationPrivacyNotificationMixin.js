__d(
  "WASmaxInAccountSyncNotificationPrivacyNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncPrivacyNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncPrivacyNotificationType",
      ).parsePrivacyNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            privacyPrivacyNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationPrivacyNotificationMixin = e;
  },
  98,
);
