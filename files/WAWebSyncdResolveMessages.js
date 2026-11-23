__d(
  "WAWebSyncdResolveMessages",
  [
    "WAWebSchemaMessage",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (var n = [], r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
      return n;
    }
    var s = 50;
    async function u(t) {
      var n = e(t, s),
        r = await Promise.all(
          n.map(function (e) {
            return o("WAWebSchemaMessage")
              .getMessageTable()
              .startsWithAnyOf(["id"], e);
          }),
        ),
        a = new Set();
      for (var i of r) for (var l of i) l && !a.has(l.id) && a.add(l.id);
      return Array.from(a);
    }
    async function c(e) {
      var t = new Map(),
        n = (
          await Promise.all(
            e.map(async function (e) {
              var n = e.indexParts,
                a = n[1],
                i = n[2],
                l = n[3],
                s = n[4];
              if (!a || !i || !l || !s || !r("WAWebWid").isWid(a)) return null;
              var u = await o("WAWebSyncdGetChat").resolveChatForMutationIndex(
                o("WAWebWidFactory").createWid(a),
              );
              if (u.success) {
                var c = u.chat.id;
                t.set(a, c);
                var d = o("WAWebSyncdIndexUtils").syncKeyToMsgKey(c, i, l, s);
                return d != null
                  ? o(
                      "WAWebSyncdIndexUtils",
                    ).msgKeyToDbIdWithoutFromMeParticipant(d)
                  : null;
              }
            }),
          )
        ).filter(Boolean);
      return { incomingRemoteToLocalChatId: t, msgKeys: n };
    }
    async function d(e) {
      var t = await c(e),
        n = t.incomingRemoteToLocalChatId,
        r = t.msgKeys,
        o = await u(r);
      return { messagesInDB: o, incomingRemoteToLocalChatId: n };
    }
    l.resolveMessagesForMutations = d;
  },
  98,
);
