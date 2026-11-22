__d(
  "WAWebLabyrinthDecryptThread",
  [
    "WAResultOrError",
    "WAWebLabyrinthDeriveEpochs",
    "WAWebLabyrinthMessageDecrypt",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.epochEdges,
            a = t.messages,
            i = t.plainChatJid,
            l = yield o("WAWebLabyrinthDeriveEpochs").deriveLabyrinthEpochs(
              e,
              r,
            );
          return l.success
            ? u({
                encryptedMessages: a,
                epochs: l.value,
                index: 0,
                isStillCurrent: n,
                plainChatJid: i,
                restoredMessages: [],
              })
            : o("WAResultOrError").makeError(l.error);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = t[r],
            c = s.encryptedPayload,
            d = s.encryptionVersion,
            m = s.epochAnonId,
            p = s.messageId,
            _ = s.timestampMs;
          return (
            l.push(
              yield o(
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
            u({
              encryptedMessages: t,
              epochs: n,
              index: r + 1,
              isStillCurrent: a,
              plainChatJid: i,
              restoredMessages: l,
            })
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.decryptLabyrinthEncryptedThread = e;
  },
  98,
);
