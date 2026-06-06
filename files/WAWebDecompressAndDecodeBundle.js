__d(
  "WAWebDecompressAndDecodeBundle",
  ["WABinary", "WAGzip", "WAWebProtobufsGroupHistory.pb", "decodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new (o("WABinary").Binary)(e);
      return o("WAGzip").inflate(t.readByteArrayView());
    }
    async function s(t) {
      var n = await e(t);
      return o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec,
        n,
      );
    }
    ((l.decompressBundle = e), (l.decompressAndDecodeBundle = s));
  },
  98,
);
