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
      var t = o("WAWebCustomerManagerChatJid").toChatJidOrNull(e);
      return t == null
        ? null
        : { chatJid: t, wid: o("WAWebWidFactory").createWid(String(t)) };
    }
    function s(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e.chatJid);
      if (t != null) return t;
      var n = e.wid,
        r = n.isUser() ? o("WAWebLidMigrationUtils").toUserLid(n) : null;
      return r != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(r)
        : null;
    }
    function u(e) {
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
    ((l.prepareCustomerManagerChatLookup = e),
      (l.resolvePreparedCustomerManagerChat = s),
      (l.resolveCustomerManagerChat = u));
  },
  98,
);
