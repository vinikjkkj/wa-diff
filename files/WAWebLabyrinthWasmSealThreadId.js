__d(
  "WAWebLabyrinthWasmSealThreadId",
  [
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.error,
        n = e.success;
      return t != null
        ? o("WAResultOrError").makeError({
            error: t,
            kind: "wasm-output-error",
          })
        : n == null
          ? o("WAResultOrError").makeError({ kind: "missing-output" })
          : o("WAResultOrError").makeResult(
              o("WAWebLabyrinthOpaqueTypes").makeSealedThreadId(
                n.sealedThreadId,
              ),
            );
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield o(
              "WAWebEBLabyrinthWaWasmReactorSingleton",
            ).labyrinthWaCommand(
              {
                InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
                ResultSpec: o("WAWebLabyrinthWaWasm.pb").SealThreadIdOutputSpec,
                validateResult: e,
              },
              {
                sealThreadIdInput: {
                  epochRootKey: t.epochRootKey,
                  epochAnonId: t.epochAnonId,
                  backupId: o("WALongInt").decimalStringToLongInt(t.backupId),
                  threadId: t.threadId,
                },
              },
            );
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "exception",
            });
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.sealThreadIdWasm = s;
  },
  98,
);
