__d(
  "EBMinosWasmVerifySingleEpoch",
  [
    "EBMinosWasm.pb",
    "EBMinosWasmReactorSingleton",
    "WAResultOrError",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      function e(e) {
        var t = e.valid;
        return o("WAResultOrError").makeResult({ valid: t });
      }
      return (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.epochPublicData,
            r = t.signature;
          return yield o("EBMinosWasmReactorSingleton").DEPRECATED_minosCommand(
            {
              InputSpec: o("EBMinosWasm.pb").MinosCommandSpec,
              ResultSpec: o("EBMinosWasm.pb").MinosVerifySingleEpochResultSpec,
              validateResult: e,
            },
            { minosVerifySingleEpoch: { epochPublicData: n, signature: r } },
          );
        });
        function r(e) {
          return t.apply(this, arguments);
        }
        return r;
      })();
    }
    var s = e();
    l.verifySingleEpoch = s;
  },
  98,
);
