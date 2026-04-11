__d(
  "WAWebUpdateReactionMessageUIAction",
  [
    "Promise",
    "WAWebDBGetReactions",
    "WAWebReactionDataUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsMsgAction",
    "WAWebReactionsUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebReactionsUtils").createReactionsRow(e);
          if (n != null) {
            var r = !t,
              a =
                "reaction " +
                String(e.id) +
                " received to: " +
                String(e.reactionParentKey),
              i = yield o(
                "WAWebDBGetReactions",
              ).existsReactionAddressingModeInsensitive({
                parentMsgKey: n.parentMsgKey,
                senderUserJid: n.senderUserJid,
              });
            if (i && i.msgKey === n.msgKey) {
              var l = i;
              yield o(
                "WAWebReactionsMsgAction",
              ).addOrUpdateReactionsModelCollection(l, { allowNotify: r });
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = new Set(e);
      for (var n of o("WAWebReactionsCollection").ReactionsCollection.toArray())
        for (var r of n.reactions.toArray())
          for (var a of t) {
            var i = r.senders.get(a);
            if (i != null && (r.senders.remove(a), t.delete(a), t.size === 0))
              return;
          }
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          (yield (e || (e = n("Promise"))).all(
            t.map(function (e) {
              return o(
                "WAWebReactionsMsgAction",
              ).addOrUpdateReactionsModelCollection(
                o("WAWebReactionDataUtils").reactionMsgDataToReactionRow(e),
                a,
              );
            }),
          ),
            r.length > 0 && c(r));
        })),
        m.apply(this, arguments)
      );
    }
    ((l.updateReactionUI = s), (l.updateReactionCollection = d));
  },
  98,
);
