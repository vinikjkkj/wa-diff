__d(
  "WAWebChatUnreadMentions",
  ["WAWebGroupUnreadMessageType", "WAWebUnreadMentionModel"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.unreadMentionsOfMe) {
        var t = new Map(
          e.unreadMentionsOfMe.map(function (e) {
            return [String(e.id), e];
          }),
        );
        e.listenTo(e.msgs, "bulk_add", function (n) {
          for (var a of n) {
            var i = a.id.toString(),
              l = t.get(i);
            !l ||
              !e.isUnreadMsg(a) ||
              e.unreadMentionMetadata.addUnreadMentions(
                [new (r("WAWebUnreadMentionModel"))(l)],
                o("WAWebGroupUnreadMessageType").UnreadMessageType
                  .PERSISTANCE_LOAD,
              );
          }
        });
      }
      (e.unreadMentionCount != null &&
        (e.unreadMentionMetadata.pendingUnreadMentionCount =
          e.unreadMentionCount),
        s(e));
    }
    function s(e) {
      e.hasUnreadMention = e.unreadMentionMetadata.getUnreadMentionCount() > 0;
    }
    ((l.initializeUnreadMentions = e), (l.handleUnreadMention = s));
  },
  98,
);
