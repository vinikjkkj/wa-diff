__d(
  "WASmaxInPreKeysNotificationContactIDChangedLIDAttrMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "lid");
      return n.success ? o("WAResultOrError").makeResult({ lid: n.value }) : n;
    }
    l.parseNotificationContactIDChangedLIDAttrMixin = e;
  },
  98,
);
