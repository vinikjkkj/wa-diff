__d(
  "EBMinosWasmVerifySingleEpoch",
  [
    "EBMinosTypes",
    "EBMinosWasm.pb",
    "EBMinosWasmReactorSingleton",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      function e(e) {
        var t = e.epochHead,
          n = e.valid;
        return o("WAResultOrError").makeResult({
          epochHead:
            n && t != null ? o("EBMinosTypes").unsafeCastToEpochHead(t) : null,
          valid: n,
        });
      }
      return async function (n) {
        var t = n.epochPublicData,
          r = n.signature;
        return await o("EBMinosWasmReactorSingleton").DEPRECATED_minosCommand(
          {
            InputSpec: o("EBMinosWasm.pb").MinosCommandSpec,
            ResultSpec: o("EBMinosWasm.pb").MinosVerifySingleEpochResultSpec,
            validateResult: e,
          },
          { minosVerifySingleEpoch: { epochPublicData: t, signature: r } },
        );
      };
    }
    var s = e();
    l.verifySingleEpoch = s;
  },
  98,
);
