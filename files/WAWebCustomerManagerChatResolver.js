__d(
  "WAWebCustomerManagerChatResolver",
  [
    "WAWebChatCollection",
    "WAWebCustomerManagerChatJid",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      if (t != null) return t;
      var n = o("WAWebCustomerManagerChatJid").toChatJidOrNull(String(e));
      if (n == null) return null;
      var r = o("WAWebWidFactory").createWid(String(n)),
        a = r.isUser() ? o("WAWebLidMigrationUtils").toUserLid(r) : null;
      return a != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(a)
        : null;
    }
    l.resolveCustomerManagerChat = e;
  },
  98,
);
