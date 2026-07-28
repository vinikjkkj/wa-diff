__d(
  "WAWebLabyrinthWasmEncryptMessage",
  [
    "WABase64",
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
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
              offlineThreadingId: e.offlineThreadingId,
              orfThreadId: e.orfThreadId,
              timestampMs: e.timestampMs,
              valueSecretRef: e.valueSecretRef,
            });
    }
    function c(e, t) {
      return {
        encryptedPayload: e.encryptedProtobuf,
        offlineThreadingId: o("WALongInt").longIntToDecimalString(
          e.offlineThreadingId,
        ),
        orfThreadId: e.orfThreadId,
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
            r = yield o(
              "WAWebEBLabyrinthWaWasmReactorSingleton",
            ).labyrinthWaCommand(
              {
                InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
                ResultSpec: o("WAWebLabyrinthWaWasm.pb")
                  .EncryptMessageOutputSpec,
                validateResult: u,
              },
              {
                encryptMessageInput: {
                  backupId: (n = o("WALongInt")).decimalStringToLongInt(
                    String(t.backupId),
                  ),
                  epochAnonId: e(t.epochAnonId),
                  epochId: n.decimalStringToLongInt(String(t.epochId)),
                  epochRootKey: e(t.epochRootKey),
                  mailboxRootKey: e(t.mailboxRootKey),
                  orfClientState: e(t.orfClientState),
                  plaintextPayload: s(t.plaintext),
                  stanzaId: t.stanzaId,
                  threadId: t.threadId,
                  timestampMs: n.decimalStringToLongInt(String(t.timestampMs)),
                  waCanonicalUserFbid: n.decimalStringToLongInt(
                    String(t.waCanonicalUserFbid),
                  ),
                },
              },
            );
          return r.success
            ? o("WAResultOrError").makeResult(c(r.value, t.threadType))
            : r;
        })),
        m.apply(this, arguments)
      );
    }
    l.encryptMessageWasm = d;
  },
  98,
);
