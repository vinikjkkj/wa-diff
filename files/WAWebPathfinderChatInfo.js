__d(
  "WAWebPathfinderChatInfo",
  ["WAWebBotUtils", "WAWebChatCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t,
        n,
        r,
        a = o("WAWebChatCollection").ChatCollection.getActive();
      if (a != null)
        return s({
          id: a.id,
          unreadCount: a.unreadCount,
          groupSize:
            (e =
              (t = (n = a.groupMetadata) == null ? void 0 : n.size) != null
                ? t
                : (r = a.groupMetadata) == null || (r = r.participants) == null
                  ? void 0
                  : r.length) != null
              ? e
              : 0,
          isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(a.id),
        });
    }
    function s(e) {
      var t = {
          chat_has_unread_messages: e.unreadCount > 0 ? "true" : "false",
          chat_is_meta_ai_thread: e.isMetaAiThread ? "true" : "false",
        },
        n = u(e.id, e.isMetaAiThread);
      return (
        n != null && (t.chat_type = n),
        n === "group" &&
          e.groupSize > 0 &&
          (t.chat_group_size = String(e.groupSize)),
        t
      );
    }
    function u(e, t) {
      return r("WAWebWid").isGroup(e)
        ? "group"
        : e.isBroadcastList()
          ? "broadcast"
          : r("WAWebWid").isNewsletter(e)
            ? "channel"
            : t
              ? "meta_ai"
              : r("WAWebWid").isStatus(e)
                ? "status"
                : r("WAWebWid").isUser(e)
                  ? "individual"
                  : null;
    }
    ((l.getActiveChatInfoMetadata = e), (l.buildChatInfoMetadata = s));
  },
  98,
);
