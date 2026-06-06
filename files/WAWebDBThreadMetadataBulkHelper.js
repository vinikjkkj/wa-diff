__d(
  "WAWebDBThreadMetadataBulkHelper",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t) {
      if (t.length === 0) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[persistNewMessagesThreadMetadataInBulk] no msgs",
            ])),
        );
        return;
      }
      var n = t.flatMap(
        o("WAWebThreadCommonModelUtils").getThreadDetailUpdatesFromMessage,
      );
      if (n.length === 0) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[persistNewMessagesThreadMetadataInBulk] no updates",
            ])),
        );
        return;
      }
      await o("WAWebThreadMetadataBulkJob").bulkCreateOrUpdateThreadsMetadata(
        n,
      );
      var r = n.filter(function (e) {
        return e.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread;
      });
      r.length > 0 &&
        (await o("WAWebBackendApi").frontendSendAndReceive(
          "updateChatAiThreads",
          { aiThreads: r },
        ));
      var a = n.filter(function (e) {
        return (
          e.threadId.type === o("WAWebThreadUtils").ThreadType.ViewAllReplies
        );
      });
      a.length > 0 &&
        (await o("WAWebBackendApi").frontendSendAndReceive(
          "updateChatViewRepliesThreads",
          { viewRepliesThreads: a },
        ));
      var i = m(t);
      if (i.length > 0) {
        var l = await o(
          "WAWebThreadMetadataBulkJob",
        ).bulkIncrementThreadUnreadCount(i);
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[persistNewMessagesThreadMetadataInBulk] unread++ ",
              "",
            ])),
          i.length,
        );
        var d = p(l, n);
        await Promise.all(
          Array.from(d.values()).map(async function (e) {
            var t = e.chatId,
              n = e.unreadCounts;
            return await o("WAWebBackendApi").frontendSendAndReceive(
              "updateAiThreadUnreadCounts",
              { chatId: t, unreadCounts: n },
            );
          }),
        );
      }
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[persistNewMessagesThreadMetadataInBulk] done ",
            " msgs",
          ])),
        t.length,
      );
    }
    function m(e) {
      var t = new Map();
      for (var n of e) {
        var a = r("WAWebMsgKey").from(n.id),
          i = n.threadIds;
        if (!a.fromMe && o("WAWebMsgGetters").getIsUnreadType(n) && i != null) {
          for (var l of i)
            if (l.type === o("WAWebThreadUtils").ThreadType.AiThread) {
              var s,
                u = l.toString(),
                c = t.get(u),
                d = (s = c == null ? void 0 : c.delta) != null ? s : 0;
              t.set(u, { delta: d + 1, lastReceivedKey: a.toString() });
            }
        }
      }
      return Array.from(t.entries(), function (e) {
        var t = e[0],
          n = e[1];
        return {
          threadId: r("WAWebThreadId").from(t),
          delta: n.delta,
          lastReceivedKey: n.lastReceivedKey,
        };
      });
    }
    function p(e, t) {
      var n = new Map();
      for (var r of t)
        r.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread &&
          n.set(r.threadId.toString(), r.chatId);
      var a = new Map();
      for (var i of e) {
        var l = i.lastReceivedKey,
          s = i.threadId,
          u = i.unreadCount,
          c = n.get(s.toString());
        if (c != null) {
          var d = c.toString(),
            m = a.get(d);
          (m == null && ((m = { chatId: c, unreadCounts: [] }), a.set(d, m)),
            m.unreadCounts.push({
              threadId: s,
              unreadCount: u,
              lastReceivedKey: l,
            }));
        }
      }
      return a;
    }
    l.persistNewMessagesThreadMetadataInBulk = d;
  },
  98,
);
