__d(
  "WAWebCryptoCurve25519CalculateSignature",
  ["WAWebCryptoLibraryUtilsApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = await r("WAWebCryptoLibraryUtilsApi").signMsg(
        e.pubKey,
        e.privKey,
        t,
      );
      return n;
    }
    l.calculateSignature = e;
  },
  98,
);
