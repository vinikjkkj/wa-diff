__d(
  "WAWebUnreadMentionMetadataBridgeApi",
  [
    "WAWebChatCollection",
    "WAWebGroupUnreadMessageType",
    "WAWebUnreadMentionModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      getPendingUnreadMentionCounts: function (t) {
        var e = t.chatIds,
          n = new Map();
        return (
          e.forEach(function (e) {
            var t,
              r,
              a = o("WAWebChatCollection").ChatCollection.get(e);
            n.set(
              e,
              (t =
                a == null || (r = a.groupMetadata) == null
                  ? void 0
                  : r.unreadMentionMetadata.pendingUnreadMentionCount) != null
                ? t
                : 0,
            );
          }),
          n
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
      updateUnreadMentionsFromInitialHistorySync: function (t) {
        var e = t.pendingUnreadMentionsMap,
          n = t.unreadMentionsToAdd;
        n.forEach(function (t, n) {
          var a,
            i,
            l = o("WAWebChatCollection").ChatCollection.get(n),
            s =
              l == null || (a = l.groupMetadata) == null
                ? void 0
                : a.unreadMentionMetadata,
            u = (i = e.get(n)) != null ? i : 0;
          if (s && s.pendingUnreadMentionCount > 0) {
            s.pendingUnreadMentionCount = u;
            var c = t.map(function (e) {
              var t = e.id,
                n = e.timestamp;
              return new (r("WAWebUnreadMentionModel"))({
                id: t,
                timestamp: n,
              });
            });
            s.addUnreadMentions(
              c,
              o("WAWebGroupUnreadMessageType").UnreadMessageType
                .HISTORYC_SYNC_CHUNK,
            );
          }
        });
      },
    };
    l.UnreadMentionMetadataBridgeApi = e;
  },
  98,
);
