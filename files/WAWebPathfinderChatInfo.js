__d(
  "WAWebPathfinderChatInfo",
  [
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebNewsletterCollection",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "chat" || e === "channel-thread";
    }
    function s(t, n) {
      var r, a, i;
      if (e(t)) {
        var l = u(t, n);
        if (l != null) {
          var s = l.groupMetadata;
          return d({
            id: l.id,
            unreadCount: l.unreadCount,
            groupSize:
              (r =
                (a = s == null ? void 0 : s.size) != null
                  ? a
                  : s == null || (i = s.participants) == null
                    ? void 0
                    : i.length) != null
                ? r
                : 0,
            groupType: c(s),
            isMetaAiThread: o("WAWebBotUtils").isMetaAiBot(l.id),
          });
        }
      }
    }
    function u(e, t) {
      return e === "channel-thread"
        ? t == null
          ? null
          : r("WAWebNewsletterCollection").get(t)
        : e === "chat"
          ? o("WAWebChatCollection").ChatCollection.getActive()
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function c(e) {
      return e == null || e.creation == null
        ? null
        : o("WAWebGroupMetadataGetters").getGroupType(e);
    }
    function d(e) {
      var t = {
          chat_has_unread_messages: e.unreadCount > 0 ? "true" : "false",
          chat_is_meta_ai_thread: e.isMetaAiThread ? "true" : "false",
        },
        n = m(e.id, e.isMetaAiThread);
      (n != null && (t.chat_type = n),
        n === "group" &&
          e.groupSize > 0 &&
          (t.chat_group_size = String(e.groupSize)),
        n === "group" &&
          e.groupType != null &&
          (t.chat_group_type = p(e.groupType)));
      var r = _(e.id);
      return (r != null && (t.ai_bot_type = r), t);
    }
    function m(e, t) {
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
    function p(e) {
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
    function _(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) ||
        o("WAWebBotUtils").isBusinessAssistantBot(e) ||
        e.isAiHub()
        ? "meta_ai"
        : e.isBot()
          ? "other_bot"
          : null;
    }
    ((l.getActiveChatInfoMetadata = s), (l.buildChatInfoMetadata = d));
  },
  98,
);
