__d(
  "WAWebTPSessionUtils",
  ["WACryptoSha256"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = await o("WACryptoSha256").sha256Base64(e);
      return t;
    }
    l.createSessionId = e;
  },
  98,
);
