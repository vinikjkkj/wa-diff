__d(
  "WAWebBizQuickReplyBridge",
  ["Promise", "WAWebSchemaQuickReply"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = (e || (e = n("Promise"))).resolve(),
        a = t.count,
        i = t.id,
        l = t.keywords,
        s = t.message,
        u = t.shortcut,
        c = { id: i, shortcut: u, count: a, message: s, keywords: l };
      return (
        (r = o("WAWebSchemaQuickReply")
          .getQuickReplyTable()
          .createOrReplace(c)),
        r
      );
    }
    l.updateQuickReply = s;
  },
  98,
);
