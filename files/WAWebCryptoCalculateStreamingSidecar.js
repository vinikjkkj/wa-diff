__d(
  "WAWebCryptoCalculateStreamingSidecar",
  ["WAArrayBuffersConcat", "WACryptoHmac"],
  function (t, n, r, o, a, i, l) {
    var e = 65536,
      s = 16,
      u = 10;
    async function c(t, n) {
      var r = t instanceof ArrayBuffer ? t.byteLength : t.buffer.byteLength,
        a = r - s,
        i = Math.ceil(a / e),
        l = Array.from({ length: i }, function (r, a) {
          var i = a * e,
            l = i + s + e,
            c = t.slice(i, l);
          return o("WACryptoHmac").hmacSha256(n, c, u);
        }),
        c = await Promise.all(l);
      return o("WAArrayBuffersConcat").concatArrayBuffers.apply(void 0, c);
    }
    ((l.IV_LENGTH = s), (l.HMAC_LENGTH = u), (l.calculateStreamingSidecar = c));
  },
  98,
);
