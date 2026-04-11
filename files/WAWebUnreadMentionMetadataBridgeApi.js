__d(
  "WAWebUnreadMentionMetadataBridgeApi",
  [
    "WAWebChatCollection",
    "WAWebGroupUnreadMessageType",
    "WAWebMsgGetters",
    "WAWebUnreadMentionModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      processAndGetUnreadMentionsInfo: function (t) {
        var e = t.filteredMsgs,
          n = new Map(),
          r = new Map();
        return (
          e.forEach(function (e) {
            if (o("WAWebMsgGetters").getIsImportantMessage(e)) {
              var t = e.id.remote.toString(),
                a = 0;
              if (r.has(t)) {
                var u;
                a = (u = r.get(t)) != null ? u : 0;
              } else {
                var i,
                  l,
                  s = o("WAWebChatCollection").ChatCollection.get(t);
                ((a =
                  (i =
                    s == null || (l = s.groupMetadata) == null
                      ? void 0
                      : l.unreadMentionMetadata.pendingUnreadMentionCount) !=
                  null
                    ? i
                    : 0),
                  r.set(t, a));
              }
              if (a > 0) {
                r.set(t, a - 1);
                var c = { id: e.id.toString(), timestamp: e.t };
                if (n.has(t)) {
                  var d;
                  (d = n.get(t)) == null || d.push(c);
                } else n.set(t, [c]);
              }
            }
          }),
          { unreadMentionsToAdd: n, pendingUnreadMentionsMap: r }
        );
      },
      getChatIdsNeedToBeDeletedFromUnreadMentionInfo: function (t) {
        var e = t.pendingUnreadMentionsMap,
          n = t.unreadMentionsToAdd,
          a = [];
        return (
          n.forEach(function (t, n) {
            var i,
              l,
              s = o("WAWebChatCollection").ChatCollection.get(n),
              u = (i = e.get(n)) != null ? i : 0,
              c =
                s == null || (l = s.groupMetadata) == null
                  ? void 0
                  : l.unreadMentionMetadata;
            if (
              (c == null ? void 0 : c.pendingUnreadMentionCount) === 0 ||
              (s != null && s.hasChatBeenOpened)
            ) {
              a.push(n);
              return;
            }
            if (c && c.pendingUnreadMentionCount > 0) {
              c.pendingUnreadMentionCount = u;
              var d = t.map(function (e) {
                return new (r("WAWebUnreadMentionModel"))({
                  id: e.id.toString(),
                  timestamp: e.timestamp,
                });
              });
              c.addUnreadMentions(
                d,
                o("WAWebGroupUnreadMessageType").UnreadMessageType
                  .HISTORYC_SYNC_CHUNK,
              );
            }
          }),
          a
        );
      },
      updateUnreadMentionMetadataByAdding: function (t) {
        var e,
          n = t.chatId,
          a = t.newUnreadMentions,
          i = t.pendingUnreadMentionCount,
          l = o("WAWebChatCollection").ChatCollection.get(n),
          s =
            l == null || (e = l.groupMetadata) == null
              ? void 0
              : e.unreadMentionMetadata,
          u = a.map(function (e) {
            return new (r("WAWebUnreadMentionModel"))({
              id: e.id.toString(),
              timestamp: e.timestamp,
            });
          });
        s &&
          s.pendingUnreadMentionCount > 0 &&
          ((s.pendingUnreadMentionCount = i),
          s.addUnreadMentions(
            u,
            o("WAWebGroupUnreadMessageType").UnreadMessageType
              .HISTORYC_SYNC_CHUNK,
          ));
      },
    };
    l.UnreadMentionMetadataBridgeApi = e;
  },
  98,
);
