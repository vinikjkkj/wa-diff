__d(
  "WAWebKmpHKDF",
  ["WACryptoHkdf", "WAWebKmpBridgeResultWrappers", "WAWebKmpKotlinUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      deriveSecrets: function (t, n, r) {
        return o("WAWebKmpBridgeResultWrappers").wrapUnexpectedKmpSuccess(
          async function () {
            var e = await o("WACryptoHkdf").extractAndExpand(
              o("WAWebKmpKotlinUtils").asUint8Array(t).buffer,
              o("WAWebKmpKotlinUtils").asUint8Array(n).buffer,
              r,
            );
            return o("WAWebKmpKotlinUtils").asKmpByteArray(e);
          },
        );
      },
    };
    l.kmpHKDF = e;
  },
  98,
);
