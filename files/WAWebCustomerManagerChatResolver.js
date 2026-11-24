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
      return t != null ? t : c(e.wid);
    }
    function u(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      if (t != null) return t;
      var n = o("WAWebCustomerManagerChatJid").toChatJidOrNull(String(e));
      return n == null ? null : c(o("WAWebWidFactory").createWid(String(n)));
    }
    function c(e) {
      var t = e.isUser() ? o("WAWebLidMigrationUtils").toUserLid(e) : null;
      return t != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t)
        : null;
    }
    ((l.prepareCustomerManagerChatLookup = e),
      (l.resolvePreparedCustomerManagerChat = s),
      (l.resolveCustomerManagerChat = u));
  },
  98,
);
