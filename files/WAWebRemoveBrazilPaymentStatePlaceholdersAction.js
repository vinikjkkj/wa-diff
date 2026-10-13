__d(
  "WAWebRemoveBrazilPaymentStatePlaceholdersAction",
  [
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      (e.forEach(function (e) {
        var t = c(e);
        t != null && (u(t), t.delete());
      }),
        t.forEach(function (e) {
          var t = e.chatId,
            n = e.count,
            r = s(t);
          r != null &&
            r.unreadCount > 0 &&
            (r.unreadCount = Math.max(r.unreadCount - n, 0));
        }));
    }
    function s(e) {
      var t;
      return (t = o("WAWebChatCollection").ChatCollection.get(e)) != null
        ? t
        : o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            o("WAWebWidFactory").createWid(e),
          );
    }
    function u(e) {
      var t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      t != null &&
        t.activeUnreadCount > 0 &&
        t.isActiveUnreadMsg(e) &&
        (t.activeUnreadCount -= 1);
    }
    function c(e) {
      var t,
        n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return (t = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? t
        : n != null
          ? o("WAWebMsgCollection").MsgCollection.get(n)
          : null;
    }
    l.removeResolvedBrazilPaymentStatePlaceholders = e;
  },
  98,
);
