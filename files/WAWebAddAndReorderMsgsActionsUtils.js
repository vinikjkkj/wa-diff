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
        m = u(i, l, s, d, n);
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
    function u(t, n, r, a, i) {
      var l = {},
        s = {},
        u,
        c,
        d,
        m = r.length,
        p = i;
      if (m === 0) return { msgs: n, collection: p };
      for (u = 0; u < m; u++) ((c = r[u]), (s[c.id] = c));
      for (m = n.length, u = 0; u < m; u++) ((c = n[u]), c && (l[c.id] = c));
      var _ = [],
        f = [];
      for (m = t.length, u = 0; u < m; u++)
        if (
          ((c = t[u]), !!c && ((d = l[c.id]), d && _.push(d), (d = s[c.id]), d))
        )
          if (d.recvFresh) (_.push(d), a.removeMsg(d), d.unset("recvFresh"));
          else {
            var g = a.getAllCMCs(),
              h = g.find(function (e) {
                return e.get(d.id);
              });
            (i && h === i) ||
              (h
                ? (h.forEach(function (e) {
                    (_.push(e), delete s[e.id]);
                  }),
                  h === a.msgs
                    ? (a.replaceMsgsCollection(i), (p = a.msgs))
                    : (a.notifyMsgCollectionMerge({
                        cmc1: i,
                        cmc2: h,
                        cmcResult: i,
                      }),
                      a.removeMsgsCollection(h)))
                : (f.push(c), _.push(s[c.id])));
          }
      if (f.length > 0) {
        var y = f.slice(0, 3).map(function (e) {
          return e.id;
        });
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Msg:reorder] merge CMC orphans=",
              " ids=",
              "",
            ])),
          f.length,
          y,
        );
      }
      return { msgs: _, collection: p };
    }
    l.default = s;
  },
  98,
);
