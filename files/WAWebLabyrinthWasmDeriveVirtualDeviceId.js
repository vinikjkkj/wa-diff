__d(
  "WAWebLabyrinthWasmDeriveVirtualDeviceId",
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
    async function e(e, t) {
      try {
        return await o(
          "WAWebEBLabyrinthWaWasmReactorSingleton",
        ).labyrinthWaCommand(
          {
            InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
            ResultSpec: o("WAWebLabyrinthWaWasm.pb")
              .DeriveVirtualDeviceIdOutputSpec,
            validateResult: s,
          },
          {
            deriveVirtualDeviceIdInput: {
              recoveryCode: e,
              userId: o("WALongInt").decimalStringToLongInt(t),
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
    function s(e) {
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
              o("WAWebLabyrinthOpaqueTypes").makeVirtualDeviceId(
                n.virtualDeviceId,
              ),
            );
    }
    l.deriveVirtualDeviceIdWasm = e;
  },
  98,
);
