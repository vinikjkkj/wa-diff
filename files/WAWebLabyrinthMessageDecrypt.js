__d(
  "WAWebLabyrinthMessageDecrypt",
  [
    "WAResultOrError",
    "WAWebLabyrinthWasmDecryptMessage",
    "WAWebProtobufsWeb.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = n.find(function (e) {
                return e.epochAnonId === t;
              }),
              a = e.encryptionVersion,
              i = e.messageId,
              l = e.timestampMs;
            return {
              encryptionVersion: a,
              epochAnonId: t,
              messageId: i,
              restoreResult: yield u(e, o, r),
              timestampMs: l,
            };
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.encryptedPayload,
            a = e.encryptionVersion;
          if ((r.success && r.value == null) || a == null)
            return o("WAResultOrError").makeError({ kind: "missing-payload" });
          if (t == null)
            return o("WAResultOrError").makeError({
              kind: "missing-epoch-key",
            });
          var i = t.epochAnonId,
            l = t.epochRootKey;
          if (!r.success) return d("decode-ciphertext", r.error);
          var s = r.value;
          if (s == null)
            return o("WAResultOrError").makeError({ kind: "missing-payload" });
          var u;
          try {
            u = yield o("WAWebLabyrinthWasmDecryptMessage").decryptMessageWasm({
              ciphertext: s,
              encryptionVersion: a,
              epochAnonId: i,
              epochRootKey: l,
              threadId: n,
            });
          } catch (e) {
            return d("decrypt", e);
          }
          if (!u.success)
            return o("WAResultOrError").makeError({
              error: u.error,
              kind: "decrypt-message-error",
            });
          try {
            var c = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsWeb.pb").WebMessageInfoSpec,
              u.value.plaintext,
            );
            return o("WAResultOrError").makeResult({ webMessageInfo: c });
          } catch (e) {
            return d("decode-protobuf", e);
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return o("WAResultOrError").makeError({
        error: r("getErrorSafe")(t),
        kind: "message-processing-error",
        stage: e,
      });
    }
    l.decryptLabyrinthMessageUnderItsEpoch = e;
  },
  98,
);
