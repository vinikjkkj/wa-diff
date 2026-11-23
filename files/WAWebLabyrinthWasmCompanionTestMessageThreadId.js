__d(
  "WAWebLabyrinthWasmCompanionTestMessageThreadId",
  [
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
          : o("WAResultOrError").makeResult({
              threadId: o("WAWebLabyrinthOpaqueTypes").makeThreadId(n.threadId),
            });
    }
    async function s() {
      try {
        var t = await o(
          "WAWebEBLabyrinthWaWasmReactorSingleton",
        ).labyrinthWaCommand(
          {
            InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
            ResultSpec: o("WAWebLabyrinthWaWasm.pb")
              .CompanionTestMessageThreadIdOutputSpec,
            validateResult: e,
          },
          { companionTestMessageThreadIdInput: {} },
        );
        return t.success
          ? o("WAResultOrError").makeResult(t.value.threadId)
          : t;
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "exception",
        });
      }
    }
    l.labyrinthCompanionTestMessageThreadIdWasm = s;
  },
  98,
);
