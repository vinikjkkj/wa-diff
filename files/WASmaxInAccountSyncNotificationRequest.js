__d(
  "WASmaxInAccountSyncNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationType",
    "WASmaxInAccountSyncServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "account_sync",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInAccountSyncServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      if (!a.success) return a;
      var i = o("WASmaxInAccountSyncNotificationType").parseNotificationType(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value, type: r.value }, a.value, {
              notificationType: i.value,
            }),
          )
        : i;
    }
    l.parseNotificationRequest = e;
  },
  98,
);
