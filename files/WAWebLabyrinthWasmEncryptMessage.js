__d(
  "WAWebLabyrinthWasmEncryptMessage",
  [
    "WALongInt",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.error,
        n = e.success;
      return t != null
        ? o("WAResultOrError").makeError("wasm-error")
        : n == null
          ? o("WAResultOrError").makeError("missing-output")
          : o("WAResultOrError").makeResult({
              encryptedProtobuf: o(
                "WAWebLabyrinthOpaqueTypes",
              ).makeEncryptedMessagePayload(n.encryptedProtobuf),
              offlineThreadingId: n.offlineThreadingId,
              orfThreadId: o("WAWebLabyrinthOpaqueTypes").makeObliviousId(
                n.orfThreadId,
              ),
              timestampMs: n.timestampMs,
              valueSecretRef: o("WAWebLabyrinthOpaqueTypes").makeValueSecretRef(
                n.valueSecretRef,
              ),
            });
    }
    function s(e, t) {
      return {
        encryptedPayload: e.encryptedProtobuf,
        offlineThreadingId: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeOfflineThreadingId(
          o("WALongInt").longIntToDecimalString(e.offlineThreadingId),
        ),
        orfThreadId: e.orfThreadId,
        threadType: t,
        timestamp: o("WATimeUtils").castLongIntToMillisTime(e.timestampMs),
        valueSecretRef: e.valueSecretRef,
      };
    }
    async function u(t) {
      var n = await o(
        "WAWebEBLabyrinthWaWasmReactorSingleton",
      ).labyrinthWaCommand(
        {
          InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
          ResultSpec: o("WAWebLabyrinthWaWasm.pb").EncryptMessageOutputSpec,
          validateResult: e,
        },
        {
          encryptMessageInput: {
            backupId: o("WALongInt").decimalStringToLongInt(String(t.backupId)),
            epochAnonId: t.epochAnonId,
            epochId: o("WALongInt").decimalStringToLongInt(String(t.epochId)),
            epochRootKey: t.epochRootKey,
            mailboxRootKey: t.mailboxRootKey,
            orfClientState: t.orfClientState,
            plaintextPayload: t.plaintext,
            stanzaId: t.stanzaId,
            threadId: t.threadId,
            timestampMs: t.timestampMs,
            waCanonicalUserFbid: o("WALongInt").decimalStringToLongInt(
              String(t.waCanonicalUserFbid),
            ),
          },
        },
      );
      return n.success
        ? o("WAResultOrError").makeResult(s(n.value, t.threadType))
        : n;
    }
    l.encryptMessageWasm = u;
  },
  98,
);
