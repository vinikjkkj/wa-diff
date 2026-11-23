__d(
  "WAWebBrPixBankCatalog",
  ["WALogger", "WASmaxBrPaymentGetPixBankListRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = null,
      d = null;
    function m(e, t) {
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
        : { banksByRefId: n, expiresAtMs: t + r * u };
    }
    async function p() {
      try {
        var t = await o(
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
          : m(t.value.accountBanksBank, Date.now());
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
    }
    function _() {
      var e = c;
      if (e != null && e.expiresAtMs > Date.now()) return Promise.resolve(e);
      var t = d;
      if (t != null) return t;
      var n = p().then(function (e) {
        return (e != null && (c = e), d === n && (d = null), e);
      });
      return ((d = n), n);
    }
    async function f(e) {
      var t;
      if (e === "") return null;
      var n = await _();
      return (t = n == null ? void 0 : n.banksByRefId.get(e)) != null
        ? t
        : null;
    }
    l.getPixBankByRefId = f;
  },
  98,
);
