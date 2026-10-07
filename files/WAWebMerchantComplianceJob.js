__d(
  "WAWebMerchantComplianceJob",
  [
    "WAWebBizGetMerchantCompliance",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return u(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebBizGetMerchantCompliance").getMerchantCompliance({
              biz_jid:
                (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                  e[0].wid,
                )) != null
                  ? t
                  : e[0].wid.toJid(),
            });
          if (n.type === "success") return n.merchant_info;
          throw (
            n.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(n.error)
              : n.type,
            r("err")(
              "getMerchantComplianceGraphQL: error handling flow not implemented for " +
                JSON.stringify(n),
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.getMerchantCompliance = e;
  },
  98,
);
