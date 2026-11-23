__d(
  "WAWebCryptoEncryptMediaLocal",
  [
    "WACryptoHmac",
    "WAMediaCalculateFilehash",
    "WAWebCryptoEncryptMediaUsingDependencies",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        computeHmac: async function (t) {
          var e = t.data,
            n = t.length,
            r = t.macKey;
          return {
            hmac: await o("WACryptoHmac").hmacSha256(r, e, n),
            macKey: r,
            data: e,
          };
        },
        computeFilehash: async function (t) {
          var e = t.ciphertextHmac;
          return {
            hash: await o("WAMediaCalculateFilehash").calculateFilehash(e),
            ciphertextHmac: e,
          };
        },
      },
      s = o(
        "WAWebCryptoEncryptMediaUsingDependencies",
      ).createEncryptMediaUsingDependencies(e);
    l.encryptMediaLocal = s;
  },
  98,
);
