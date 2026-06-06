__d(
  "WAWebRedeemACSCredential",
  ["WABase64", "WACryptoHmac", "WAWebRedeemACSToken"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      t === void 0 && (t = new ArrayBuffer(0));
      var n = await o("WAWebRedeemACSToken").redeemACSToken({ projectName: e });
      if (n != null) {
        var r = o("WABase64").encodeB64UrlSafe(n.token, !0),
          a = await o("WACryptoHmac").hmacSha256(n.sharedSecret, t),
          i = o("WABase64").encodeB64UrlSafe(a, !0),
          l = r + "+" + i;
        return l;
      }
    }
    l.redeemACSCredential = e;
  },
  98,
);
