__d(
  "WAMediaCalculateFilehash",
  ["WACryptoDependencies", "WACryptoSha256"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WACryptoSha256").sha256Base64(e);
    }
    function s() {
      var e = o("WACryptoDependencies")
          .getCrypto()
          .getRandomValues(new Uint8Array(20)),
        t = e.buffer;
      return o("WACryptoSha256").sha256Base64(t);
    }
    ((l.calculateFilehash = e), (l.getRandomFilehash = s));
  },
  98,
);
