__d(
  "WAWebUserThreadIdHmac",
  ["WABase64", "WACryptoHmac"],
  function (t, n, r, o, a, i, l) {
    var e = new TextEncoder();
    function s(t) {
      return e.encode(t).buffer;
    }
    async function u(e, t) {
      var n = await c(e),
        r = s(t),
        a = await o("WACryptoHmac").hmacSha256(n, r);
      return o("WABase64").encodeB64(a);
    }
    async function c(e) {
      var t = s(e);
      return self.crypto.subtle.digest("SHA-256", t);
    }
    l.generateUserThreadIDHMAC = u;
  },
  98,
);
