__d(
  "WAWebAddAndReorderMsgsActionsUtils",
  ["WALogger", "WAWebMsgModelUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.anchorMsgKey,
        n = e.chatMsgsCollection,
        r = e.firstUnreadKey,
        a = e.insertAfter,
        i = e.msgHistory,
        l = e.newMsgs,
        s = e.reorderMsgs,
        c = e.resetMostRecentMsgs,
        d = e.threadOrChat,
        m = u({
          chatMsgsCollection: n,
          newMsgs: l,
          payloadMsgs: i,
          reorderMsgs: s,
          threadOrChat: d,
        });
      o("WAWebMsgModelUtils").addRecordsToChat({
        anchorMsgKey: t,
        chatMsgsCollection: m.collection,
        firstUnreadKey: r,
        insertAfter: a,
        newRecords: m.msgs,
        resetMostRecentMsgs: c,
        threadOrChat: d,
      });
    }
    function u(t) {
      var n = t.chatMsgsCollection,
        r = t.newMsgs,
        a = t.payloadMsgs,
        i = t.reorderMsgs,
        l = t.threadOrChat,
        s = {},
        u = {},
        c,
        d,
        m,
        p = i.length,
        _ = n;
      if (p === 0) return { msgs: r, collection: _ };
      for (c = 0; c < p; c++) ((d = i[c]), (u[d.id] = d));
      for (p = r.length, c = 0; c < p; c++) ((d = r[c]), d && (s[d.id] = d));
      var f = [],
        g = [];
      for (p = a.length, c = 0; c < p; c++)
        if (
          ((d = a[c]), !!d && ((m = s[d.id]), m && f.push(m), (m = u[d.id]), m))
        )
          if (m.recvFresh) (f.push(m), l.removeMsg(m), m.unset("recvFresh"));
          else {
            var h = l.getAllCMCs(),
              y = h.find(function (e) {
                return e.get(m.id);
              });
            (n && y === n) ||
              (y
                ? (y.forEach(function (e) {
                    (f.push(e), delete u[e.id]);
                  }),
                  y === l.msgs
                    ? (l.replaceMsgsCollection(n), (_ = l.msgs))
                    : (l.notifyMsgCollectionMerge({
                        cmc1: n,
                        cmc2: y,
                        cmcResult: n,
                      }),
                      l.removeMsgsCollection(y)))
                : (g.push(d), f.push(u[d.id])));
          }
      if (g.length > 0) {
        var C = g.slice(0, 3).map(function (e) {
          return e.id;
        });
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Msg:reorder] merge CMC orphans=",
              " ids=",
              "",
            ])),
          g.length,
          C,
        );
      }
      return { msgs: f, collection: _ };
    }
    l.default = s;
  },
  98,
);
