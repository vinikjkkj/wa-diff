__d(
  "WAWebThreadBridgeApi",
  [
    "WAWebAiThreadCollection",
    "WAWebAiThreadTypeUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebMaybeClearChatAiThreads",
    "WAWebMsgKey",
    "WAWebViewRepliesCollection",
    "WAWebViewRepliesModel",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      updateChatAiThreads: function (t) {
        var e = t.aiThreads;
        e.forEach(function (e) {
          var t,
            n,
            a = e.aiThreadInfo,
            i = e.botModeOverride,
            l = e.botModeSelection,
            s = e.chatId,
            u = e.creationTimestamp,
            c = e.lastMessageTimestamp,
            d = e.lastMsgKey,
            m = e.lastReceivedKey,
            p = e.pinThreadTimestamp,
            _ = e.threadId,
            f = e.unreadEditTimestampMs,
            g = o("WAWebChatCollection").ChatCollection.get(s);
          if (g) {
            var h =
              (t = g.aiThreads) != null
                ? t
                : new (o("WAWebAiThreadCollection").AiThreadCollection)();
            g.aiThreads || (g.aiThreads = h);
            var y = h.get(_),
              C =
                (y == null ? void 0 : y.creationTimestamp) != null &&
                u > y.creationTimestamp
                  ? void 0
                  : u;
            h.add(
              {
                id: _,
                title: a == null ? void 0 : a.title,
                aiThreadType:
                  (n = a == null ? void 0 : a.aiThreadType) != null
                    ? n
                    : o("WAWebAiThreadTypeUtils").AiThreadType.Default,
                creationTimestamp: C,
                lastMessageTimestamp: c,
                botModeSelection: l,
                botModeOverride: i,
                lastReceivedKey:
                  m != null ? r("WAWebMsgKey").fromString(m) : null,
                lastMsgKey: d != null ? r("WAWebMsgKey").fromString(d) : null,
                unreadEditTimestampMs: f,
                pinThreadTimestamp: p,
                isPending: !1,
              },
              { merge: !0 },
            );
          }
        });
      },
      updateChatViewRepliesThreads: function (t) {
        var e = t.viewRepliesThreads;
        e.forEach(function (e) {
          var t = e.chatId,
            n = e.creationTimestamp,
            a = e.lastMessageTimestamp,
            i = e.threadId,
            l = o("WAWebChatCollection").ChatCollection.get(t);
          if (l) {
            var s = l.viewRepliesThreads;
            s ||
              ((s = new (o("WAWebViewRepliesCollection").ViewRepliesCollection)(
                t,
              )),
              (l.viewRepliesThreads = s));
            var u = new (r("WAWebViewRepliesModel"))({
              id: i,
              creationTimestamp: n,
              lastMessageTimestamp: a,
            });
            s.add(u);
          }
        });
      },
      deleteChatAiThreads: function (t) {
        var e = t.chatId,
          n = t.msgIds,
          r = t.threadIds,
          a = o("WAWebChatCollection").ChatCollection.get(e);
        a == null || a.deleteMessages(n);
        var i = a == null ? void 0 : a.aiThreads;
        i && i.removeThreads(r);
      },
      deleteAiThreadsForChat: function (t) {
        var e = t.chatId,
          n = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebWidFactory").createWid(e),
          );
        n && o("WAWebMaybeClearChatAiThreads").maybeClearAiThreadsForChat(n);
      },
      resetAiThreadUnreadCounts: function (t) {
        var e = t.chatId,
          n = t.threadIds,
          r = o("WAWebChatCollection").ChatCollection.get(e),
          a = r == null ? void 0 : r.aiThreads;
        a &&
          n.forEach(function (e) {
            var t = a.get(e);
            t && t.set("unreadCount", 0);
          });
      },
      updateAiThreadUnreadCounts: function (t) {
        var e = t.chatId,
          n = t.unreadCounts,
          a = o("WAWebChatCollection").ChatCollection.get(e),
          i = a == null ? void 0 : a.aiThreads;
        i &&
          n.forEach(function (e) {
            var t = e.lastReceivedKey,
              n = e.threadId,
              o = e.unreadCount,
              a = i.get(n);
            a &&
              a.set({
                lastReceivedKey:
                  t != null ? r("WAWebMsgKey").fromString(t) : null,
                unreadCount: o,
              });
          });
      },
      initializeMetaAiBotAiThreads: function () {
        var e = [
          o("WAWebBotUtils").META_BOT_PN_WID,
          o("WAWebBotUtils").META_BOT_FBID_WID,
        ];
        for (var t of e) {
          var n = o("WAWebChatCollection").ChatCollection.get(t);
          n != null &&
            n.aiThreads == null &&
            (n.aiThreads = new (o(
              "WAWebAiThreadCollection",
            ).AiThreadCollection)());
        }
      },
    };
    l.ThreadBridgeApi = e;
  },
  98,
);
