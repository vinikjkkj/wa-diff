__d(
  "WAWebLabyrinthDeriveEpochs",
  [
    "WAResultOrError",
    "WAWebLabyrinthWasmDeriveEpochs",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          try {
            n = t.map(u);
          } catch (e) {
            return o("WAResultOrError").makeError({
              error: r("getErrorSafe")(e),
              kind: "decode-epoch-edge-error",
            });
          }
          var a = yield o("WAWebLabyrinthWasmDeriveEpochs").deriveEpochsWasm({
            epochStoragePrivateKey: e.epochStoragePrivateKey,
            epochs: [
              {
                serverEpochId: e.currentEpoch.serverEpochId,
                epochAnonId: e.currentEpoch.epochAnonId,
                epochRootKey: e.currentEpoch.epochRootKey,
              },
            ],
            edges: n,
          });
          return a.success
            ? o("WAResultOrError").makeResult(
                a.value.map(function (e) {
                  return {
                    serverEpochId: e.serverEpochId,
                    epochAnonId: e.epochAnonId,
                    epochRootKey: e.epochRootKey,
                  };
                }),
              )
            : o("WAResultOrError").makeError({
                error: a.error,
                kind: "derive-epochs-error",
              });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.backwardEdge,
        n = e.forwardEdge,
        r = e.fromEpoch,
        o = e.toEpoch;
      return {
        fromEpoch: c(r),
        toEpoch: c(o),
        forwardEdge:
          n == null
            ? null
            : {
                encryptedEntropy: m(
                  n.encryptedEntropy,
                  "forward_edge.encrypted_entropy",
                ),
                authPublicKey: d(
                  n.authPublicKey,
                  "forward_edge.auth_public_key",
                ),
              },
        backwardEdge: t == null ? null : m(t, "backward_edge"),
      };
    }
    function c(e) {
      if (
        (e == null ? void 0 : e.serverEpochId) == null ||
        e.serverEpochId.length === 0
      )
        throw r("err")("epoch derivation edge is missing an epoch_id");
      var t = e.epochAnonId;
      if (!t.success) throw t.error;
      if (t.value == null)
        throw r("err")("epoch derivation edge is missing epoch_anon_id");
      return { serverEpochId: e.serverEpochId, epochAnonId: t.value };
    }
    function d(e, t) {
      if (!e.success) throw e.error;
      if (e.value == null)
        throw r("err")("epoch derivation edge is missing " + t);
      return e.value;
    }
    function m(e, t) {
      if (!e.success) throw e.error;
      var n = e.value;
      if (n == null) throw r("err")("epoch derivation edge is missing " + t);
      return n;
    }
    l.deriveLabyrinthEpochs = e;
  },
  98,
);
