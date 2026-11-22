__d(
  "WAWebLabyrinthWasmDeriveEpochs",
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
                      fromEpoch: c(e.fromEpoch),
                      toEpoch: c(e.toEpoch),
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return {
        serverEpochId: o("WALongInt").decimalStringToLongInt(e.serverEpochId),
        epochAnonId: e.epochAnonId,
      };
    }
    l.deriveEpochsWasm = s;
  },
  98,
);
