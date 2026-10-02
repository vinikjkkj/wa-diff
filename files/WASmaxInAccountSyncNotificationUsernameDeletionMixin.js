__d(
  "WASmaxInAccountSyncNotificationUsernameDeletionMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "username");
      return t.success ? o("WASmaxParseUtils").voidSuccess : t;
    }
    l.parseNotificationUsernameDeletionMixin = e;
  },
  98,
);
