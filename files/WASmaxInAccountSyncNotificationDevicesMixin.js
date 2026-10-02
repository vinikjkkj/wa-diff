__d(
  "WASmaxInAccountSyncNotificationDevicesMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "key-index",
        0,
        void 0,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, keyIndex: r.value })
        : r;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "key-index-list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ts", -1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 0, 100);
      return r.success
        ? o("WAResultOrError").makeResult({
            ts: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "devices");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "key-index-list",
        s,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t, "dhash");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(t, "device", 0, 1e3, e);
      return i.success
        ? o("WAResultOrError").makeResult({
            dhash: a.value,
            keyIndexList: r.value,
            device: i.value,
          })
        : i;
    }
    ((l.parseNotificationDevicesDevice = e),
      (l.parseNotificationDevicesKeyIndexList = s),
      (l.parseNotificationDevicesMixin = u));
  },
  98,
);
