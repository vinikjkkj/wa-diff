__d(
  "WAWebUpdateOfflinePeerReceipts",
  [
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebGroupUnreadMessageType",
    "WAWebMsgCollection",
    "WAWebNewsletterCollection",
    "WAWebUnreadMentionModel",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebCmd").Cmd.isMainStreamReadyMd &&
        (e.forEach(function (e) {
          var t,
            n = e.chatId,
            a = e.unreadCount,
            i = e.unreadMentionsOfMe,
            l =
              (t = o("WAWebChatCollection").ChatCollection.get(n)) != null
                ? t
                : r("WAWebNewsletterCollection").get(n);
          if (l != null) {
            var s = i.map(function (e) {
              return new (r("WAWebUnreadMentionModel"))({
                id: e.id,
                timestamp: e.timestamp,
              });
            });
            (l.unreadMentionMetadata.reset(),
              l.unreadMentionMetadata.addUnreadMentions(
                s,
                o("WAWebGroupUnreadMessageType").UnreadMessageType
                  .PERSISTANCE_LOAD,
              ),
              l.set({ unreadCount: a }));
          }
        }),
        t.forEach(function (e) {
          var t = e.ack,
            n = e.msgKey,
            r = o("WAWebMsgCollection").MsgCollection.get(n);
          r && r.updateAck(t);
        }));
    }
    l.updateOfflinePeerReceipt = e;
  },
  98,
);
