__d(
  "WAWebCryptoCalculateFirstFrameSidecar",
  ["WACryptoHmac", "WAWebCryptoCalculateStreamingSidecar"],
  function (t, n, r, o, a, i, l) {
    var e = 16;
    function s(t, n, r) {
      var a = Math.ceil(t / e) * e,
        i = n.slice(0, o("WAWebCryptoCalculateStreamingSidecar").IV_LENGTH + a);
      return o("WACryptoHmac").hmacSha256(
        r,
        i,
        o("WAWebCryptoCalculateStreamingSidecar").HMAC_LENGTH,
      );
    }
    l.default = s;
  },
  98,
);
