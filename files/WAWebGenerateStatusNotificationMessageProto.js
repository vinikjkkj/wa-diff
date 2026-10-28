__d(
  "WAWebGenerateStatusNotificationMessageProto",
  ["WACryptoPkcs7", "WAWebProtobufsE2E.pb", "decodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = t.futureproofBuffer;
      return n == null
        ? null
        : babelHelpers.extends(
            {},
            o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(n)),
            ),
          );
    }
    l.default = e;
  },
  98,
);
