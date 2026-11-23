__d(
  "WAWebLabyrinthWasmComputeClientSealToken",
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
      return t != null
        ? o("WAResultOrError").makeError({
            error: t,
            kind: "wasm-output-error",
          })
        : n == null
          ? o("WAResultOrError").makeError({ kind: "missing-output" })
          : o("WAResultOrError").makeResult(
              o("WAWebLabyrinthOpaqueTypes").makeClientSealToken(
                n.clientSealToken,
              ),
            );
    }
    async function s(t) {
      try {
        return await o(
          "WAWebEBLabyrinthWaWasmReactorSingleton",
        ).labyrinthWaCommand(
          {
            InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
            ResultSpec: o("WAWebLabyrinthWaWasm.pb")
              .ComputeClientSealTokenOutputSpec,
            validateResult: e,
          },
          {
            computeClientSealTokenInput: {
              orfClientState: t.orfClientState,
              backupId: o("WALongInt").decimalStringToLongInt(t.backupId),
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
    l.computeClientSealTokenWasm = s;
  },
  98,
);
