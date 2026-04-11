__d(
  "WAWebPonyfillsCryptoRandomUUID",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      return "randomUUID" in self.crypto
        ? self.crypto.randomUUID()
        : ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, function (e) {
            return (
              e ^
              (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
            ).toString(16);
          });
    }
    i.default = e;
  },
  66,
);
