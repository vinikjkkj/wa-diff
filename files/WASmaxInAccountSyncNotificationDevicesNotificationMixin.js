__d(
  "WASmaxInAccountSyncNotificationDevicesNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncDevicesNotificationType",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "devices");
      if (!n.success) return n;
      var r = o(
        "WASmaxInAccountSyncDevicesNotificationType",
      ).parseDevicesNotificationType(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            devicesDevicesNotificationType: r.value,
          })
        : r;
    }
    l.parseNotificationDevicesNotificationMixin = e;
  },
  98,
);
