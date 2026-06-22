__d(
  "WAWebLabyrinthWasmEncryptMessage",
  [
    "EBLabyrinthWaWasmReactorSingleton",
    "WABase64",
    "WALongInt",
    "WAResultOrError",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e == "string" ? o("WABase64").decodeB64(e) : e;
    }
    function s(e) {
      return new TextEncoder().encode(e);
    }
    function u(e) {
      return e.error != null
        ? o("WAResultOrError").makeError("wasm-error")
        : e.encryptedProtobuf == null ||
            e.orfThreadId == null ||
            e.valueSecretRef == null ||
            e.offlineThreadingId == null ||
            e.timestampMs == null
          ? o("WAResultOrError").makeError("missing-output")
          : o("WAResultOrError").makeResult({
              encryptedProtobuf: e.encryptedProtobuf,
              messageKey: e.messageKey,
              offlineThreadingId: e.offlineThreadingId,
              orfThreadId: e.orfThreadId,
              timestampMs: e.timestampMs,
              valueSecretRef: e.valueSecretRef,
            });
    }
    function c(e, t) {
      return {
        encryptedPayload: o("WABase64").encodeB64(e.encryptedProtobuf),
        offlineThreadingId: o("WALongInt").longIntToDecimalString(
          e.offlineThreadingId,
        ),
        orfThreadId: o("WABase64").encodeB64(e.orfThreadId),
        threadType: t,
        timestamp: o("WALongInt").longIntToDecimalString(e.timestampMs),
        valueSecretRef: e.valueSecretRef,
      };
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a = yield o("EBLabyrinthWaWasmReactorSingleton").labyrinthWaCommand(
              {
                InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
                ResultSpec: o("WAWebLabyrinthWaWasm.pb")
                  .EncryptMessageOutputSpec,
                validateResult: u,
              },
              {
                encryptMessageInput: {
                  backupId: (r = o("WALongInt")).decimalStringToLongInt(
                    String(t.backupId),
                  ),
                  epochAnonId: e(t.epochAnonId),
                  epochId: r.decimalStringToLongInt(String(t.epochId)),
                  epochRootKey: e(t.epochRootKey),
                  mailboxRootKey: e(t.mailboxRootKey),
                  orfClientState: e(t.orfClientState),
                  plaintextPayload: s(t.plaintext),
                  stanzaId: t.stanzaId,
                  threadId: t.threadId,
                  timestampMs: r.decimalStringToLongInt(String(t.timestampMs)),
                  waCanonicalUserFbid: r.decimalStringToLongInt(
                    String(t.waCanonicalUserFbid),
                  ),
                },
              },
            );
          return a.success
            ? o("WAResultOrError").makeResult(
                c(a.value, (n = t.threadType) != null ? n : "ONE_TO_ONE"),
              )
            : a;
        })),
        m.apply(this, arguments)
      );
    }
    l.encryptMessageWasm = d;
  },
  98,
);
