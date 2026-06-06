__d(
  "WAWebKmpCryptoProviderCommons",
  ["WACryptoAesCbc", "WACryptoDependencies", "WACryptoHmac", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var a = await o("WACryptoAesCbc").aesCbcEncrypt(n, t, e);
      if (e.length !== 16) throw r("err")("IV must be 16 bytes");
      var i = a.slice(e.length);
      return new Int8Array(i);
    }
    async function s(e, t, n) {
      var r = await o("WACryptoAesCbc").aesCbcDecrypt(n, e, t);
      return new Int8Array(r);
    }
    async function u(t, n, r, o) {
      e: {
        if (t === "ENCRYPT") return e(n, r, o);
        if (t === "DECRYPT") return s(n, r, o);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    async function c(e, t, n) {
      var r =
        e === "HMAC_SHA_256"
          ? o("WACryptoHmac").hmacSha256
          : e === "HMAC_SHA_512"
            ? o("WACryptoHmac").hmacSha512
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
      return r(n, t).then(function (e) {
        return new Int8Array(e);
      });
    }
    function d(e) {
      var t = new Int8Array(e);
      return o("WACryptoDependencies").getCrypto().getRandomValues(t);
    }
    ((l.createCipherText = u), (l.mac = c), (l.generateRandomBytes = d));
  },
  98,
);
