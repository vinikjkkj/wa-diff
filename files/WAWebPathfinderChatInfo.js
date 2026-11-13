__d(
  "WAWebPathfinderChatInfo",
  [
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "chat" || e === "channel-thread";
    }
    function s(t) {
      var n, r, a;
      if (e(t)) {
        var i = o("WAWebChatCollection").ChatCollection.getActive();
        if (i != null) {
          var l = i.groupMetadata;
          return c({
            id: i.id,
            unreadCount: i.unreadCount,
            groupSize:
              (n =
                (r = l == null ? void 0 : l.size) != null
                  ? r
                  : l == null || (a = l.participants) == null
                    ? void 0
                    : a.length) != null
                ? n
                : 0,
            groupType: u(l),
            isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(i.id),
          });
        }
      }
    }
    function u(e) {
      return e == null || e.creation == null
        ? null
        : o("WAWebGroupMetadataGetters").getGroupType(e);
    }
    function c(e) {
      var t = {
          chat_has_unread_messages: e.unreadCount > 0 ? "true" : "false",
          chat_is_meta_ai_thread: e.isMetaAiThread ? "true" : "false",
        },
        n = d(e.id, e.isMetaAiThread);
      (n != null && (t.chat_type = n),
        n === "group" &&
          e.groupSize > 0 &&
          (t.chat_group_size = String(e.groupSize)),
        n === "group" &&
          e.groupType != null &&
          (t.chat_group_type = m(e.groupType)));
      var r = p(e.id);
      return (r != null && (t.ai_bot_type = r), t);
    }
    function d(e, t) {
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
    function m(e) {
      return e === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ? "default_subgroup"
        : e === o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
            e === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
          ? "subgroup"
          : e === o("WAWebGroupType").GroupType.DEFAULT ||
              e === o("WAWebGroupType").GroupType.COMMUNITY
            ? "group"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function p(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebBotUtils").isBusinessAssistantBot(e) ||
        e.isAiHub()
        ? "meta_ai"
        : e.isBot()
          ? "other_bot"
          : null;
    }
    ((l.getActiveChatInfoMetadata = s), (l.buildChatInfoMetadata = c));
  },
  98,
);
