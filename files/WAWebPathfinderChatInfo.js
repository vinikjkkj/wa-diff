__d(
  "WAWebPathfinderChatInfo",
  ["WAWebBotUtils", "WAWebChatCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "chat" || e === "channel-thread";
    }
    function s(t) {
      var n, r, a, i;
      if (e(t)) {
        var l = o("WAWebChatCollection").ChatCollection.getActive();
        if (l != null)
          return u({
            id: l.id,
            unreadCount: l.unreadCount,
            groupSize:
              (n =
                (r = (a = l.groupMetadata) == null ? void 0 : a.size) != null
                  ? r
                  : (i = l.groupMetadata) == null ||
                      (i = i.participants) == null
                    ? void 0
                    : i.length) != null
                ? n
                : 0,
            isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(l.id),
          });
      }
    }
    function u(e) {
      var t = {
          chat_has_unread_messages: e.unreadCount > 0 ? "true" : "false",
          chat_is_meta_ai_thread: e.isMetaAiThread ? "true" : "false",
        },
        n = c(e.id, e.isMetaAiThread);
      (n != null && (t.chat_type = n),
        n === "group" &&
          e.groupSize > 0 &&
          (t.chat_group_size = String(e.groupSize)));
      var r = d(e.id);
      return (r != null && (t.ai_bot_type = r), t);
    }
    function c(e, t) {
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
    function d(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebBotUtils").isBusinessAssistantBot(e) ||
        e.isAiHub()
        ? "meta_ai"
        : e.isBot()
          ? "other_bot"
          : null;
    }
    ((l.getActiveChatInfoMetadata = s), (l.buildChatInfoMetadata = u));
  },
  98,
);
