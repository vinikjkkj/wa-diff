__d(
  "WASmaxInAccountSyncNotificationPictureMixin",
  ["WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "delete");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    l.parseNotificationPictureMixin = e;
  },
  98,
);
