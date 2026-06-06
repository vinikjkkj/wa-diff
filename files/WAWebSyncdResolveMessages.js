__d(
  "WAWebSyncdResolveMessages",
  [
    "WAWebABProps",
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
    async function s(t, n) {
      n === void 0 && (n = 50);
      var r = e(t, n),
        a = await Promise.all(
          r.map(function (e) {
            return o("WAWebSchemaMessage")
              .getMessageTable()
              .startsWithAnyOf(["id"], e);
          }),
        ),
        i = new Set();
      for (var l of a) for (var s of l) s && !i.has(s.id) && i.add(s.id);
      return Array.from(i);
    }
    async function u(e) {
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
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "synced_message_keys_processing_type",
      );
    }
    async function d(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "message_keys_async_chunk_size",
      );
      return c() === "async-chunk" ? await p(e, t) : await m(e);
    }
    async function m(e) {
      var t = await u(e),
        n = t.incomingRemoteToLocalChatId,
        r = t.msgKeys,
        a = [];
      return (
        await o("WAWebSchemaMessage")
          .getMessageTable()
          .startsWithAnyOf(["id"], r)
          .then(function (e) {
            return e.forEach(function (e) {
              e && a.push(e.id);
            });
          }),
        { messagesInDB: a, incomingRemoteToLocalChatId: n }
      );
    }
    async function p(e, t) {
      var n = await u(e),
        r = n.incomingRemoteToLocalChatId,
        o = n.msgKeys,
        a = await s(o, t);
      return { messagesInDB: a, incomingRemoteToLocalChatId: r };
    }
    l.resolveMessagesForMutations = d;
  },
  98,
);
