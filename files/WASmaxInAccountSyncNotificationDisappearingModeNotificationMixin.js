__d(
  "WASmaxInAccountSyncNotificationDisappearingModeNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncDisappearingModeNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "disappearing_mode",
      );
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncDisappearingModeNotificationType",
      ).parseDisappearingModeNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            disappearingModeDisappearingModeNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationDisappearingModeNotificationMixin = e;
  },
  98,
);
