__d(
  "WAWebBrPartnerPixKeyAttribution",
  ["WAWebBrPixBankCatalog"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { kind: "none" },
      s = 15e3;
    function u(e) {
      return new Promise(function (t) {
        var n = self.setTimeout(function () {
            t(null);
          }, s),
          r = function (r) {
            (self.clearTimeout(n), t(r));
          };
        o("WAWebBrPixBankCatalog")
          .getPixBankByRefId(e)
          .then(r, function () {
            r(null);
          });
      });
    }
    async function c(t) {
      if (t == null || t === "") return e;
      var n = await u(t);
      return n == null
        ? e
        : {
            bankName: n.bankName,
            kind: "unverified",
            logoUrl: n.imageUrl.trim(),
          };
    }
    ((l.lookUpWithinWait = u), (l.resolvePartnerPixKeyAttribution = c));
  },
  98,
);
