__d(
  "WAWebRedeemACSCredential",
  [
    "WABase64",
    "WACryptoHmac",
    "WAWebRedeemACSToken",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = new ArrayBuffer(0));
          var n = yield o("WAWebRedeemACSToken").redeemACSToken({
            projectName: e,
          });
          if (n != null) {
            var r = o("WABase64").encodeB64UrlSafe(n.token, !0),
              a = yield o("WACryptoHmac").hmacSha256(n.sharedSecret, t),
              i = o("WABase64").encodeB64UrlSafe(a, !0),
              l = r + "+" + i;
            return l;
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.redeemACSCredential = e;
  },
  98,
);
