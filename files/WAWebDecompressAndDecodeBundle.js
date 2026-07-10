__d(
  "WAWebDecompressAndDecodeBundle",
  ["WABinary", "WAGzip", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e);
          return o("WAGzip").inflate(t.readByteArrayView());
        })),
        s.apply(this, arguments)
      );
    }
    l.decompressBundle = e;
  },
  98,
);
