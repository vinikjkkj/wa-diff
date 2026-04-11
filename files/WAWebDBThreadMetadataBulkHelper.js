__d(
  "WAWebDBThreadMetadataBulkHelper",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebThreadCommonModelUtils",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[persistNewMessagesThreadMetadataInBulk] no msgs",
                ])),
            );
            return;
          }
          var r = t.flatMap(
            o("WAWebThreadCommonModelUtils").getThreadDetailUpdatesFromMessage,
          );
          if (r.length === 0) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[persistNewMessagesThreadMetadataInBulk] no updates",
                ])),
            );
            return;
          }
          yield o(
            "WAWebThreadMetadataBulkJob",
          ).bulkCreateOrUpdateThreadsMetadata(r);
          var a = r.filter(function (e) {
            return (
              e.threadId.type === o("WAWebThreadUtils").ThreadType.AiThread
            );
          });
          a.length > 0 &&
            (yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateChatAiThreads",
              { aiThreads: a },
            ));
          var i = r.filter(function (e) {
            return (
              e.threadId.type ===
              o("WAWebThreadUtils").ThreadType.ViewAllReplies
            );
          });
          i.length > 0 &&
            (yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateChatViewRepliesThreads",
              { viewRepliesThreads: i },
            ));
          var l = _(t);
          if (l.length > 0) {
            var m = yield o(
              "WAWebThreadMetadataBulkJob",
            ).bulkIncrementThreadUnreadCount(l);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[persistNewMessagesThreadMetadataInBulk] unread++ ",
                  "",
                ])),
              l.length,
            );
            var p = f(m, r);
            yield (d || (d = n("Promise"))).all(
              Array.from(p.values()).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.chatId,
                        n = e.unreadCounts;
                      return yield o("WAWebBackendApi").frontendSendAndReceive(
                        "updateAiThreadUnreadCounts",
                        { chatId: t, unreadCounts: n },
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
    function f(e, t) {
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
    l.persistNewMessagesThreadMetadataInBulk = m;
  },
  98,
);
