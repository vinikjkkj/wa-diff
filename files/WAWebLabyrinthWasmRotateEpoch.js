__d(
  "WAWebLabyrinthWasmRotateEpoch",
  [
    "WALogger",
    "WALongInt",
    "WAResultOrError",
    "WAWebEBLabyrinthWaWasmReactorSingleton",
    "WAWebLabyrinthWaWasm.pb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t = e.encryptedPrevEpochAnonId,
        n = e.encryptedPrevEpochRootKey,
        r = e.prevEpochRootKeyFingerprint;
      return t == null || n == null || r == null
        ? null
        : {
            encryptedPrevEpochAnonId: t,
            encryptedPrevEpochRootKey: n,
            prevEpochRootKeyFingerprint: r,
          };
    }
    function c(e) {
      if (e.length === 0) return null;
      var t = [];
      for (var n of e) {
        var r = n.deviceEpochHmac,
          a = n.deviceId,
          i = n.encryptedEpochKey;
        if (a == null || i == null || r == null) return null;
        t.push({
          deviceId: o("WALongInt").longIntToDecimalString(a),
          encryptedEpochKey: i,
          deviceEpochHmac: r,
        });
      }
      return t;
    }
    function d(e) {
      if (e.error != null)
        return o("WAResultOrError").makeError({
          errorName: "wasm-error",
          failReason: e.error,
        });
      var t = e.epochAnonId,
        n = e.epochRootKeyFingerprint,
        r = e.newEpochAnonId,
        a = e.newEpochFbid,
        i = e.newEpochRootKey,
        l = e.backwardEdge == null ? null : u(e.backwardEdge),
        s = c(e.memberEdges);
      return i == null ||
        r == null ||
        a == null ||
        t == null ||
        n == null ||
        l == null ||
        s == null
        ? o("WAResultOrError").makeError({ errorName: "missing-output" })
        : o("WAResultOrError").makeResult({
            newEpochRootKey: i,
            newEpochAnonId: o("WALongInt").longIntToDecimalString(r),
            newEpochFbid: o("WALongInt").longIntToDecimalString(a),
            newEpochAnonIdBytes: t,
            backwardEdge: l,
            memberEdges: s,
            epochRootKeyFingerprint: n,
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
                epochStoragePrivateKey: t.epochStoragePrivateKey,
                members: t.members.map(function (e) {
                  return {
                    deviceId: o("WALongInt").decimalStringToLongInt(e.deviceId),
                    epochStoragePublicKey: e.epochStoragePublicKey,
                    devicePublicKey: e.devicePublicKey,
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
