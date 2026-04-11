__d(
  "WAWebQuickReplyBridgeApi",
  [
    "Promise",
    "WAWebBizGatingUtils",
    "WAWebQuickReplyCollection",
    "WAWebSchemaQuickReply",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        removeQuickReplyFromCollection: function (t) {
          var e = t.id;
          o("WAWebQuickReplyCollection").QuickReplyCollection.remove(e);
        },
        updateQuickReplyCollection: function (t) {
          var e = t.count,
            n = t.id,
            r = t.keywords,
            a = t.message,
            i = t.shortcut;
          o("WAWebQuickReplyCollection").QuickReplyCollection.add(
            { id: n, shortcut: i, message: a, keywords: r, count: e },
            { merge: !0 },
          );
        },
        restoreQuickReplies: function () {
          return o("WAWebBizGatingUtils").canSendQuickReply()
            ? o("WAWebSchemaQuickReply")
                .getQuickReplyTable()
                .all()
                .then(function (e) {
                  o(
                    "WAWebQuickReplyCollection",
                  ).QuickReplyCollection.initializeFromCache(e);
                })
            : (e || (e = n("Promise"))).resolve();
        },
      };
    l.QuickReplyBridgeApi = s;
  },
  98,
);
