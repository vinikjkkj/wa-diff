__d(
  "WAWebBrPartnerPixKeyAttribution",
  ["Promise", "WAWebBrPixBankCatalog", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { kind: "none" },
      u = 15e3;
    function c(t) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null || e === "") return s;
          var t = yield c(e);
          return t == null
            ? s
            : {
                bankName: t.bankName,
                kind: "unverified",
                logoUrl: t.imageUrl.trim(),
              };
        })),
        m.apply(this, arguments)
      );
    }
    l.resolvePartnerPixKeyAttribution = d;
  },
  98,
);
