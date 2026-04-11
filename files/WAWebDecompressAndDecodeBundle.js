__d(
  "WAWebDecompressAndDecodeBundle",
  [
    "WABinary",
    "WAGzip",
    "WAWebProtobufsGroupHistory.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e(t);
          return o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
            n,
          );
        })),
        c.apply(this, arguments)
      );
    }
    ((l.decompressBundle = e), (l.decompressAndDecodeBundle = u));
  },
  98,
);
