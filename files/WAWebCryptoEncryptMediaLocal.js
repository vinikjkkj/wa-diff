__d(
  "WAWebCryptoEncryptMediaLocal",
  [
    "WACryptoHmac",
    "WAMediaCalculateFilehash",
    "WAWebCryptoEncryptMediaUsingDependencies",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        computeHmac: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.data,
              n = e.length,
              r = e.macKey;
            return {
              hmac: yield o("WACryptoHmac").hmacSha256(r, t, n),
              macKey: r,
              data: t,
            };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        computeFilehash: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.ciphertextHmac;
            return {
              hash: yield o("WAMediaCalculateFilehash").calculateFilehash(t),
              ciphertextHmac: t,
            };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      s = o(
        "WAWebCryptoEncryptMediaUsingDependencies",
      ).createEncryptMediaUsingDependencies(e);
    l.encryptMediaLocal = s;
  },
  98,
);
