__d(
  "WAWebCryptoCurve25519CalculateSignature",
  ["WAWebCryptoLibraryUtilsApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield r("WAWebCryptoLibraryUtilsApi").signMsg(
            e.pubKey,
            e.privKey,
            t,
          );
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    l.calculateSignature = e;
  },
  98,
);
