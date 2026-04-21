__d(
  "WAWebSignalKeyApi",
  ["WAWebCryptoCurve25519", "WAWebCryptoLibraryUtilsApi"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebCryptoLibraryUtilsApi").makePreKey(e),
        n = t.preKeyId,
        o = t.privKey,
        a = t.pubKey,
        i = { privKey: o, pubKey: a };
      return { keyId: n, keyPair: i, isDirectDistribution: 0 };
    }
    function s(e, t) {
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
    }
    function u() {
      return r("WAWebCryptoLibraryUtilsApi").makeKeyPair();
    }
    ((l.generatePreKeyPair = e),
      (l.generateSignedKeyPair = s),
      (l.generateIdentityKeyPair = u));
  },
  98,
);
