__d(
  "WAWebKmpHKDF",
  [
    "WACryptoHkdf",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      deriveSecrets: function (t, r, a) {
        return o("WAWebKmpBridgeResultWrappers").wrapUnexpectedKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WACryptoHkdf").extractAndExpand(
              o("WAWebKmpKotlinUtils").asUint8Array(t).buffer,
              o("WAWebKmpKotlinUtils").asUint8Array(r).buffer,
              a,
            );
            return o("WAWebKmpKotlinUtils").asKmpByteArray(e);
          }),
        );
      },
    };
    l.kmpHKDF = e;
  },
  98,
);
