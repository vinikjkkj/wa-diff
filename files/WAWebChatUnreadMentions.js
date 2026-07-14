__d(
  "WAWebChatUnreadMentions",
  [
    "WAWebChatGetters",
    "WAWebGroupUnreadMessageType",
    "WAWebUnreadMentionModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e.unreadMentionsOfMe) {
        var n = new Map(
          e.unreadMentionsOfMe.map(function (e) {
            return [String(e.id), e];
          }),
        );
        e.listenTo(e.msgs, "bulk_add", function (a) {
          for (var i of a) {
            var l = i.id.toString(),
              s = n.get(l);
            !s ||
              !e.isUnreadMsg(i) ||
              t.unreadMentionMetadata.addUnreadMentions(
                [new (r("WAWebUnreadMentionModel"))(s)],
                o("WAWebGroupUnreadMessageType").UnreadMessageType
                  .PERSISTANCE_LOAD,
              );
          }
        });
      }
      (e.unreadMentionCount != null &&
        (t.unreadMentionMetadata.pendingUnreadMentionCount =
          e.unreadMentionCount),
        s(e));
    }
    function s(e) {
      o("WAWebChatGetters").getIsGroup(e) &&
        e.groupMetadata &&
        (e.hasUnreadMention =
          e.groupMetadata.unreadMentionMetadata.getUnreadMentionCount() > 0);
    }
    ((l.initializeUnreadMentions = e), (l.handleUnreadMention = s));
  },
  98,
);
