__d(
  "WAWebCryptoCrosspostingUtil",
  ["WAWebCryptoCurve25519", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebCryptoCurve25519").keyPair();
          return { publicKey: e.pubKey, privateKey: e.privKey };
        })),
        s.apply(this, arguments)
      );
    }
    l.generateKeys = e;
  },
  98,
);
