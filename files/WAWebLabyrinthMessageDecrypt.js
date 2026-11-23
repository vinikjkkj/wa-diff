__d(
  "WAWebLabyrinthMessageDecrypt",
  [
    "WAResultOrError",
    "WAWebLabyrinthWasmDecryptMessage",
    "WAWebProtobufsWeb.pb",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n, r) {
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
        restoreResult: await s(e, o, r),
        timestampMs: l,
      };
    }
    async function s(e, t, n) {
      var r = e.encryptedPayload,
        a = e.encryptionVersion;
      if ((r.success && r.value == null) || a == null)
        return o("WAResultOrError").makeError({ kind: "missing-payload" });
      if (t == null)
        return o("WAResultOrError").makeError({ kind: "missing-epoch-key" });
      var i = t.epochAnonId,
        l = t.epochRootKey;
      if (!r.success) return u("decode-ciphertext", r.error);
      var s = r.value;
      if (s == null)
        return o("WAResultOrError").makeError({ kind: "missing-payload" });
      var c;
      try {
        c = await o("WAWebLabyrinthWasmDecryptMessage").decryptMessageWasm({
          ciphertext: s,
          encryptionVersion: a,
          epochAnonId: i,
          epochRootKey: l,
          threadId: n,
        });
      } catch (e) {
        return u("decrypt", e);
      }
      if (!c.success)
        return o("WAResultOrError").makeError({
          error: c.error,
          kind: "decrypt-message-error",
        });
      try {
        var d = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsWeb.pb").WebMessageInfoSpec,
          c.value.plaintext,
        );
        return o("WAResultOrError").makeResult({ webMessageInfo: d });
      } catch (e) {
        return u("decode-protobuf", e);
      }
    }
    function u(e, t) {
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
