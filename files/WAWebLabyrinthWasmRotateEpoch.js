__d(
  "WAWebLabyrinthWasmRotateEpoch",
  [
    "WALogger",
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthOpaqueTypes",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return {
        encryptedPrevEpochAnonId: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeEncryptedPreviousEpochAnonId(e.encryptedPrevEpochAnonId),
        encryptedPrevEpochRootKey: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeEncryptedEpochRootKey(e.encryptedPrevEpochRootKey),
        prevEpochRootKeyFingerprint: o(
          "WAWebLabyrinthOpaqueTypes",
        ).makeEpochRootKeyFingerprint(e.prevEpochRootKeyFingerprint),
      };
    }
    function c(e) {
      return e.length === 0
        ? null
        : e.map(function (e) {
            var t = e.deviceEpochHmac,
              n = e.deviceId,
              r = e.encryptedEpochKey;
            return {
              deviceId: o("WAWebLabyrinthOpaqueTypes").makeEbDeviceId(
                o("WALongInt").longIntToDecimalString(n),
              ),
              encryptedEpochKey: o(
                "WAWebLabyrinthOpaqueTypes",
              ).makeEncryptedEntropy(r),
              deviceEpochHmac: o(
                "WAWebLabyrinthOpaqueTypes",
              ).makeDeviceEpochHmac(t),
            };
          });
    }
    function d(e) {
      var t = e.error,
        n = e.success;
      if (t != null)
        return o("WAResultOrError").makeError({
          errorName: "wasm-error",
          failReason: t,
        });
      if (n == null)
        return o("WAResultOrError").makeError({ errorName: "missing-output" });
      var r = c(n.memberEdges);
      if (r == null)
        return o("WAResultOrError").makeError({ errorName: "missing-output" });
      var a = o("WAWebLabyrinthOpaqueTypes").parseEpochAnonId(n.newEpochAnonId);
      return a.success
        ? o("WAResultOrError").makeResult({
            newEpochRootKey: o("WAWebLabyrinthOpaqueTypes").makeEpochRootKey(
              n.newEpochRootKey,
            ),
            newEpochAnonId: a.value,
            backwardEdge: u(n.backwardEdge),
            memberEdges: r,
            epochRootKeyFingerprint: o(
              "WAWebLabyrinthOpaqueTypes",
            ).makeEpochRootKeyFingerprint(n.epochRootKeyFingerprint),
          })
        : o("WAResultOrError").makeError({
            errorName: "wasm-error",
            failReason: a.error.message,
          });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebEBLabyrinthWaWasmReactorSingleton",
          ).labyrinthWaCommand(
            {
              InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
              ResultSpec: o("WAWebLabyrinthWaWasm.pb").RotateEpochOutputSpec,
              validateResult: d,
            },
            {
              rotateEpochInput: {
                currentEpochRootKey: t.currentEpochRootKey,
                currentEpochAnonId: t.currentEpochAnonId,
                currentEpochFbid: o("WALongInt").decimalStringToLongInt(
                  t.currentEpochFbid,
                ),
                epochStorageAuthPrivateKey: t.epochStorageAuthPrivateKey,
                members: t.members.map(function (e) {
                  return {
                    deviceId: o("WALongInt").decimalStringToLongInt(e.deviceId),
                    epochStoragePublicKey: e.epochStoragePublicKey,
                    devicePublicKey: e.devicePublicKey,
                    epochStoragePublicKeySig: e.epochStoragePublicKeySig,
                    prevDeviceEpochHmac: e.prevDeviceEpochHmac,
                  };
                }),
              },
            },
          );
          if (n.success) return n;
          var r = n.error;
          return r.errorName === "wasm-error"
            ? (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[Labyrinth] rotateEpochWasm failed: ",
                    "",
                  ])),
                r.failReason,
              ),
              o("WAResultOrError").makeError("wasm-error"))
            : r.errorName === "missing-output"
              ? (o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[Labyrinth] rotateEpochWasm returned an incomplete output",
                    ])),
                ),
                o("WAResultOrError").makeError("missing-output"))
              : o("WAResultOrError").makeError(r);
        })),
        p.apply(this, arguments)
      );
    }
    l.rotateEpochWasm = m;
  },
  98,
);
