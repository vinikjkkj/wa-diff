__d(
  "WACrypto",
  ["WAArrayBufferUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.slice(-t.byteLength);
      return o("WAArrayBufferUtils").arrayBuffersEqualUNSAFE(n, t)
        ? e.slice(0, e.byteLength - t.byteLength)
        : e;
    }
    l.removeEncryptedPadding = e;
  },
  98,
);
