__d(
  "WAWebKmpCryptoProvider",
  [
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpCryptoProviderCommons",
    "WAWebKmpKotlinUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      createCipherText: function (t, r, a, i) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              n = yield o("WAWebKmpCryptoProviderCommons").createCipherText(
                t.name,
                (e = o("WAWebKmpKotlinUtils")).asInt8Array(r),
                e.asInt8Array(a),
                e.asInt8Array(i),
              );
            return e.asKmpByteArray(n);
          }),
        );
      },
      mac: function (t, r, a) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebKmpCryptoProviderCommons").mac(
              t.name,
              o("WAWebKmpKotlinUtils").asInt8Array(r),
              o("WAWebKmpKotlinUtils").asInt8Array(a),
            );
            return o("WAWebKmpKotlinUtils").asKmpByteArray(e);
          }),
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
