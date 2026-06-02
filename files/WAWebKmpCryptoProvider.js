__d(
  "WAWebKmpCryptoProvider",
  [
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpCryptoProviderCommons",
    "WAWebKmpKotlinUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      createCipherText: function (t, n, r, a) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          async function () {
            var e,
              i = await o("WAWebKmpCryptoProviderCommons").createCipherText(
                t.name,
                (e = o("WAWebKmpKotlinUtils")).asInt8Array(n),
                e.asInt8Array(r),
                e.asInt8Array(a),
              );
            return e.asKmpByteArray(i);
          },
        );
      },
      mac: function (t, n, r) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          async function () {
            var e = await o("WAWebKmpCryptoProviderCommons").mac(
              t.name,
              o("WAWebKmpKotlinUtils").asInt8Array(n),
              o("WAWebKmpKotlinUtils").asInt8Array(r),
            );
            return o("WAWebKmpKotlinUtils").asKmpByteArray(e);
          },
        );
      },
      generateRandomBytes: function (t) {
        return o("WAWebKmpBridgeResultWrappers").wrapUnexpectedKmpSuccessSync(
          function () {
            return o("WAWebKmpKotlinUtils").asKmpByteArray(
              o("WAWebKmpCryptoProviderCommons").generateRandomBytes(t),
            );
          },
        );
      },
    };
    l.cryptoProvider = e;
  },
  98,
);
