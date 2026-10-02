__d(
  "WASmaxInAccountSyncNotificationPictureNoPayloadMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
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
    l.parseNotificationPictureNoPayloadMixin = e;
  },
  98,
);
