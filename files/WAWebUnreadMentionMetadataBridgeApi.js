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
              r = o("WAWebChatCollection").ChatCollection.get(e);
            n.set(
              e,
              (t =
                r == null
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
              l = o("WAWebChatCollection").ChatCollection.get(n),
              s = (i = e.get(n)) != null ? i : 0,
              u = l == null ? void 0 : l.unreadMentionMetadata;
            if (
              (u == null ? void 0 : u.pendingUnreadMentionCount) === 0 ||
              (l != null && l.hasChatBeenOpened)
            ) {
              a.push(n);
              return;
            }
            if (u && u.pendingUnreadMentionCount > 0) {
              u.pendingUnreadMentionCount = s;
              var c = t.map(function (e) {
                return new (r("WAWebUnreadMentionModel"))({
                  id: e.id.toString(),
                  timestamp: e.timestamp,
                });
              });
              u.addUnreadMentions(
                c,
                o("WAWebGroupUnreadMessageType").UnreadMessageType
                  .HISTORYC_SYNC_CHUNK,
              );
            }
          }),
          a
        );
      },
      updateUnreadMentionMetadataByAdding: function (t) {
        var e = t.chatId,
          n = t.newUnreadMentions,
          a = t.pendingUnreadMentionCount,
          i = o("WAWebChatCollection").ChatCollection.get(e),
          l = i == null ? void 0 : i.unreadMentionMetadata,
          s = n.map(function (e) {
            return new (r("WAWebUnreadMentionModel"))({
              id: e.id.toString(),
              timestamp: e.timestamp,
            });
          });
        l &&
          l.pendingUnreadMentionCount > 0 &&
          ((l.pendingUnreadMentionCount = a),
          l.addUnreadMentions(
            s,
            o("WAWebGroupUnreadMessageType").UnreadMessageType
              .HISTORYC_SYNC_CHUNK,
          ));
      },
      updateUnreadMentionsFromInitialHistorySync: function (t) {
        var e = t.pendingUnreadMentionsMap,
          n = t.unreadMentionsToAdd;
        n.forEach(function (t, n) {
          var a,
            i = o("WAWebChatCollection").ChatCollection.get(n),
            l = i == null ? void 0 : i.unreadMentionMetadata,
            s = (a = e.get(n)) != null ? a : 0;
          if (l && l.pendingUnreadMentionCount > 0) {
            l.pendingUnreadMentionCount = s;
            var u = t.map(function (e) {
              var t = e.id,
                n = e.timestamp;
              return new (r("WAWebUnreadMentionModel"))({
                id: t,
                timestamp: n,
              });
            });
            l.addUnreadMentions(
              u,
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
