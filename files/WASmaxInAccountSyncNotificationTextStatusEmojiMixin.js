__d(
  "WASmaxInAccountSyncNotificationTextStatusEmojiMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "emoji");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "content");
      return n.success
        ? o("WAResultOrError").makeResult({ content: n.value })
        : n;
    }
    l.parseNotificationTextStatusEmojiMixin = e;
  },
  98,
);
