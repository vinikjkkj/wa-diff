__d(
  "WAWebKmpCryptoProviderCommons",
  [
    "WACryptoAesCbc",
    "WACryptoDependencies",
    "WACryptoHmac",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o("WACryptoAesCbc").aesCbcEncrypt(n, t, e);
          if (e.length !== 16) throw r("err")("IV must be 16 bytes");
          var i = a.slice(e.length);
          return new Int8Array(i);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WACryptoAesCbc").aesCbcDecrypt(n, e, t);
          return new Int8Array(r);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, o) {
            e: {
              if (t === "ENCRYPT") return e(n, r, o);
              if (t === "DECRYPT") return u(n, r, o);
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = new Int8Array(e);
      return o("WACryptoDependencies").getCrypto().getRandomValues(t);
    }
    ((l.createCipherText = d), (l.mac = p), (l.generateRandomBytes = f));
  },
  98,
);
