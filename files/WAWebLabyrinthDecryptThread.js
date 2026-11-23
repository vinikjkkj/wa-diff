__d(
  "WAWebLabyrinthDecryptThread",
  [
    "WAResultOrError",
    "WAWebLabyrinthDeriveEpochs",
    "WAWebLabyrinthMessageDecrypt",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var r = t.epochEdges,
        a = t.messages,
        i = t.plainChatJid,
        l = await o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(e, r);
      return l.success
        ? s({
            encryptedMessages: a,
            epochs: l.value,
            index: 0,
            isStillCurrent: n,
            plainChatJid: i,
            restoredMessages: [],
          })
        : o("WAResultOrError").makeError(l.error);
    }
    async function s(e) {
      var t = e.encryptedMessages,
        n = e.epochs,
        r = e.index,
        a = e.isStillCurrent,
        i = e.plainChatJid,
        l = e.restoredMessages;
      if (r >= t.length) return o("WAResultOrError").makeResult(l);
      if (!a())
        return o("WAResultOrError").makeError({
          kind: "local-account-changed",
        });
      var u = t[r],
        c = u.encryptedPayload,
        d = u.encryptionVersion,
        m = u.epochAnonId,
        p = u.messageId,
        _ = u.timestampMs;
      return (
        l.push(
          await o(
            "WAWebLabyrinthMessageDecrypt",
          ).decryptLabyrinthMessageUnderItsEpoch(
            {
              encryptedPayload: c,
              encryptionVersion: d,
              messageId: p,
              timestampMs: _,
            },
            m,
            n,
            i,
          ),
        ),
        s({
          encryptedMessages: t,
          epochs: n,
          index: r + 1,
          isStillCurrent: a,
          plainChatJid: i,
          restoredMessages: l,
        })
      );
    }
    l.decryptLabyrinthEncryptedThread = e;
  },
  98,
);
