__d(
  "WAWebLabyrinthWasmDecryptMessage",
  [
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.error != null
        ? o("WAResultOrError").makeError("wasm-error")
        : e.plaintextPayload == null
          ? o("WAResultOrError").makeError("missing-output")
          : o("WAResultOrError").makeResult({
              plaintextPayload: e.plaintextPayload,
            });
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebEBLabyrinthWaWasmReactorSingleton",
          ).labyrinthWaCommand(
            {
              InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
              ResultSpec: o("WAWebLabyrinthWaWasm.pb").DecryptMessageOutputSpec,
              validateResult: e,
            },
            {
              decryptMessageInput: {
                ciphertext: t.ciphertext,
                encryptionVersion: t.encryptionVersion,
                epochAnonId: t.epochAnonId,
                epochRootKey: t.epochRootKey,
                threadId: t.threadId,
              },
            },
          );
          return n.success
            ? o("WAResultOrError").makeResult({
                plaintext: n.value.plaintextPayload,
              })
            : n;
        })),
        u.apply(this, arguments)
      );
    }
    l.decryptMessageWasm = s;
  },
  98,
);
