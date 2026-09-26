__d(
  "WAWebBrPixBankCatalog",
  [
    "Promise",
    "WALogger",
    "WASmaxBrPaymentGetPixBankListRPC",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1e3,
      d = null,
      m = null;
    function p(e, t) {
      var n = new Map(),
        r = Number.POSITIVE_INFINITY;
      for (var o of e)
        o.bankRefId === "" ||
          o.bankName.trim() === "" ||
          o.ttl <= 0 ||
          (n.set(o.bankRefId, {
            bankName: o.bankName,
            bankRefId: o.bankRefId,
            imageUrl: o.imageUrl,
          }),
          (r = Math.min(r, o.ttl)));
      return n.size === 0 || !Number.isFinite(r)
        ? null
        : { banksByRefId: n, expiresAtMs: t + r * c };
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o(
              "WASmaxBrPaymentGetPixBankListRPC",
            ).sendGetPixBankListRPC();
            return t.name !== "GetPixBankListResponseSuccess"
              ? (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "br_pix_bank_catalog: bank list request returned an error",
                      ])),
                  )
                  .sendLogs("br-pix-bank-catalog-fetch"),
                null)
              : p(t.value.accountBanksBank, Date.now());
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "br_pix_bank_catalog: bank list request failed",
                    ])),
                )
                .sendLogs("br-pix-bank-catalog-fetch"),
              null
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      var e = d;
      if (e != null && e.expiresAtMs > Date.now())
        return (u || (u = n("Promise"))).resolve(e);
      var t = m;
      if (t != null) return t;
      var r = _().then(function (e) {
        return (e != null && (d = e), m === r && (m = null), e);
      });
      return ((m = r), r);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e === "") return null;
          var n = yield g();
          return (t = n == null ? void 0 : n.banksByRefId.get(e)) != null
            ? t
            : null;
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      ((d = null), (m = null));
    }
    ((l.getPixBankByRefId = h), (l.resetPixBankCatalogForTesting = C));
  },
  98,
);
