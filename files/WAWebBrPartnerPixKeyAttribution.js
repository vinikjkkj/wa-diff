__d(
  "WAWebBrPartnerPixKeyAttribution",
  ["Promise", "WAWebBrPixBankCatalog", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { kind: "none" },
      u = 15e3;
    function c(e) {
      var t,
        n = (t = e == null ? void 0 : e.trim()) != null ? t : "";
      return n === "" ? s : { bankName: n, kind: "unverified" };
    }
    function d(t) {
      return new (e || (e = n("Promise")))(function (e) {
        var n = self.setTimeout(function () {
            e(null);
          }, u),
          r = function (r) {
            (self.clearTimeout(n), e(r));
          };
        o("WAWebBrPixBankCatalog")
          .getPixBankByRefId(t)
          .then(r, function () {
            r(null);
          });
      });
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = c(t);
          if (e == null || e === "") return n;
          var r = yield d(e);
          return r == null
            ? n
            : {
                bankName: r.bankName,
                kind: "verified",
                logoUrl: r.imageUrl.trim(),
              };
        })),
        p.apply(this, arguments)
      );
    }
    ((l.unverifiedPartnerPixKeyAttribution = c),
      (l.resolvePartnerPixKeyAttribution = m));
  },
  98,
);
