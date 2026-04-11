__d(
  "WAWebCryptoCalculateStreamingSidecar",
  [
    "Promise",
    "WAArrayBuffersConcat",
    "WACryptoHmac",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 65536,
      u = 16,
      c = 10;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = t instanceof ArrayBuffer ? t.byteLength : t.buffer.byteLength,
            i = a - u,
            l = Math.ceil(i / s),
            d = Array.from({ length: l }, function (e, n) {
              var a = n * s,
                i = a + u + s,
                l = t.slice(a, i);
              return o("WACryptoHmac").hmacSha256(r, l, c);
            }),
            m = yield (e || (e = n("Promise"))).all(d);
          return o("WAArrayBuffersConcat").concatArrayBuffers.apply(void 0, m);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.IV_LENGTH = u), (l.HMAC_LENGTH = c), (l.calculateStreamingSidecar = d));
  },
  98,
);
