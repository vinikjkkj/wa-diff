__d(
  "WASmaxInAccountSyncNotificationUsernameChangeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "username");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "username");
      return n.success
        ? o("WAResultOrError").makeResult({ username: n.value })
        : n;
    }
    l.parseNotificationUsernameChangeMixin = e;
  },
  98,
);
