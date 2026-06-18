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
        encrypted_payload: o("WABase64").encodeB64(e.encryptedProtobuf),
        offline_threading_id: o("WALongInt").longIntToDecimalString(
          e.offlineThreadingId,
        ),
        operation_type: "UPSERT",
        orf_thread_id: o("WABase64").encodeB64(e.orfThreadId),
        thread_type: t,
        timestamp: o("WALongInt").longIntToDecimalString(e.timestampMs),
        value_secret_ref: e.valueSecretRef,
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
          if (!a.success) return a;
          var i = c(a.value, (n = t.threadType) != null ? n : "ONE_TO_ONE");
          return o("WAResultOrError").makeResult(i);
        })),
        m.apply(this, arguments)
      );
    }
    l.encryptMessageWasm = d;
  },
  98,
);
