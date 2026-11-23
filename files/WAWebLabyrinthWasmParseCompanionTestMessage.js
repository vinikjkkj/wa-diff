__d(
  "WAWebLabyrinthWasmParseCompanionTestMessage",
  [
    "WALongInt",
    "WAResultOrError",
    "WATimeUtils",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
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
              createdAtMs: o("WATimeUtils").castToMillisTime(
                o("WALongInt").numberOrThrowIfTooLarge(n.createdAtMs),
              ),
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
              .ParseCompanionTestMessageOutputSpec,
            validateResult: e,
          },
          { parseCompanionTestMessageInput: { plaintext: t } },
        );
      } catch (e) {
        return o("WAResultOrError").makeError({
          error: r("getErrorSafe")(e),
          kind: "exception",
        });
      }
    }
    l.parseLabyrinthCompanionTestMessageWasm = s;
  },
  98,
);
