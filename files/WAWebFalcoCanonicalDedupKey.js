__d(
  "WAWebFalcoCanonicalDedupKey",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = new Uint32Array(2);
      return (
        self.crypto.getRandomValues(e),
        (e[1] % 2097152) * 4294967296 + e[0]
      );
    }
    i.default = e;
  },
  66,
);
