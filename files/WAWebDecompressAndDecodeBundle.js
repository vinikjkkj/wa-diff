__d(
  "WAWebDecompressAndDecodeBundle",
  ["WABinary", "WAGzip"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new (o("WABinary").Binary)(e);
      return o("WAGzip").inflate(t.readByteArrayView());
    }
    l.decompressBundle = e;
  },
  98,
);
