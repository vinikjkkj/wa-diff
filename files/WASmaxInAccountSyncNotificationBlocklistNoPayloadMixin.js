__d(
  "WASmaxInAccountSyncNotificationBlocklistNoPayloadMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "blocklist");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "action",
        "modify",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ action: n.value })
        : n;
    }
    l.parseNotificationBlocklistNoPayloadMixin = e;
  },
  98,
);
