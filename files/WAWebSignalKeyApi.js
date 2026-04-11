__d(
  "WAWebSignalKeyApi",
  [
    "WAWebCryptoCurve25519",
    "WAWebCryptoLibraryUtilsApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("WAWebCryptoLibraryUtilsApi").makePreKey(e),
            n = t.preKeyId,
            o = t.privKey,
            a = t.pubKey,
            i = { privKey: o, pubKey: a };
          return { keyId: n, keyPair: i, isDirectDistribution: 0 };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = r("WAWebCryptoLibraryUtilsApi").makeSignedPreKey(
              o("WAWebCryptoCurve25519").toCurveKeyPair(e),
              t,
            ),
            a = n.preKeyId,
            i = n.privKey,
            l = n.pubKey,
            s = n.signature,
            u = { privKey: i, pubKey: l };
          return {
            keyId: a,
            keyPair: o("WAWebCryptoCurve25519").toCurveKeyPair(u),
            signature: s,
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("WAWebCryptoLibraryUtilsApi").makeKeyPair();
        })),
        m.apply(this, arguments)
      );
    }
    ((l.generatePreKeyPair = e),
      (l.generateSignedKeyPair = u),
      (l.generateIdentityKeyPair = d));
  },
  98,
);
