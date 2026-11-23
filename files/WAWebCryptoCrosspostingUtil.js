__d(
  "WAWebCryptoCrosspostingUtil",
  ["WAWebCryptoCurve25519"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = await o("WAWebCryptoCurve25519").keyPair();
      return { publicKey: e.pubKey, privateKey: e.privKey };
    }
    l.generateKeys = e;
  },
  98,
);
