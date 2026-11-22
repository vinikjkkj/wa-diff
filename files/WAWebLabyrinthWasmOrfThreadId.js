__d(
  "WAWebLabyrinthWasmOrfThreadId",
  [
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
          : o("WAResultOrError").makeResult({
              orfThreadId: o("WAWebLabyrinthOpaqueTypes").makeObliviousId(
                n.orfThreadId,
              ),
            });
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o(
              "WAWebEBLabyrinthWaWasmReactorSingleton",
            ).labyrinthWaCommand(
              {
                InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
                ResultSpec: o("WAWebLabyrinthWaWasm.pb").OrfThreadIdOutputSpec,
                validateResult: e,
              },
              {
                orfThreadIdInput: {
                  orfClientState: t.orfClientState,
                  threadId: t.threadId,
                },
              },
            );
            return n.success
              ? o("WAResultOrError").makeResult(n.value.orfThreadId)
              : n;
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
    l.labyrinthOrfThreadIdWasm = s;
  },
  98,
);
