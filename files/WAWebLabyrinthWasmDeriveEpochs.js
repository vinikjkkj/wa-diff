__d(
  "WAWebLabyrinthWasmDeriveEpochs",
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
      var r = [];
      for (var a of n.epochs) {
        var i = o("WAWebLabyrinthOpaqueTypes").parseEpochAnonId(a.epochAnonId);
        if (!i.success)
          return o("WAResultOrError").makeError({
            error: i.error.message,
            kind: "wasm-output-error",
          });
        r.push({
          serverEpochId: o("WAWebLabyrinthOpaqueTypes").makeEpochId(
            o("WALongInt").longIntToDecimalString(a.serverEpochId),
          ),
          epochAnonId: i.value,
          epochRootKey: o("WAWebLabyrinthOpaqueTypes").makeEpochRootKey(
            a.epochRootKey,
          ),
        });
      }
      return o("WAResultOrError").makeResult(r);
    }
    async function s(t) {
      try {
        return await o(
          "WAWebEBLabyrinthWaWasmReactorSingleton",
        ).labyrinthWaCommand(
          {
            InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
            ResultSpec: o("WAWebLabyrinthWaWasm.pb").DeriveEpochsOutputSpec,
            validateResult: e,
          },
          {
            deriveEpochsInput: {
              epochStoragePrivateKey: t.epochStoragePrivateKey,
              epochs: t.epochs.map(function (e) {
                return {
                  serverEpochId: o("WALongInt").decimalStringToLongInt(
                    e.serverEpochId,
                  ),
                  epochAnonId: e.epochAnonId,
                  epochRootKey: e.epochRootKey,
                };
              }),
              edges: t.edges.map(function (e) {
                return {
                  fromEpoch: u(e.fromEpoch),
                  toEpoch: u(e.toEpoch),
                  forwardEdge: e.forwardEdge,
                  backwardEdge: e.backwardEdge,
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
    function u(e) {
      return {
        serverEpochId: o("WALongInt").decimalStringToLongInt(e.serverEpochId),
        epochAnonId: e.epochAnonId,
      };
    }
    l.deriveEpochsWasm = s;
  },
  98,
);
