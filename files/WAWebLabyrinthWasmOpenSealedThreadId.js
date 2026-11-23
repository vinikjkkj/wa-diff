__d(
  "WAWebLabyrinthWasmOpenSealedThreadId",
  [
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.error,
        n = e.success;
      if (t != null)
        return o("WAResultOrError").makeError({
          error: t,
          kind: "wasm-output-error",
        });
      if (n == null)
        return o("WAResultOrError").makeError({ kind: "missing-output" });
      var r = o("WAWebLabyrinthOpaqueTypes").parseEpochAnonId(
        n.sealEpochAnonId,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            threadId: o("WAWebLabyrinthOpaqueTypes").makeThreadId(n.threadId),
            sealEpochAnonId: r.value,
          })
        : o("WAResultOrError").makeError({
            error: r.error.message,
            kind: "wasm-output-error",
          });
    }
    async function s(t) {
      try {
        return await o(
          "WAWebEBLabyrinthWaWasmReactorSingleton",
        ).labyrinthWaCommand(
          {
            InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
            ResultSpec: o("WAWebLabyrinthWaWasm.pb")
              .OpenSealedThreadIdOutputSpec,
            validateResult: e,
          },
          {
            openSealedThreadIdInput: {
              backupId: o("WALongInt").decimalStringToLongInt(t.backupId),
              sealedThreadId: t.sealedThreadId,
              epochs: t.epochs.map(function (e) {
                return {
                  serverEpochId: o("WALongInt").decimalStringToLongInt(
                    e.serverEpochId,
                  ),
                  epochAnonId: e.epochAnonId,
                  epochRootKey: e.epochRootKey,
                };
              }),
            },
          },
        );
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "exception",
        });
      }
    }
    l.openSealedThreadIdWasm = s;
  },
  98,
);
