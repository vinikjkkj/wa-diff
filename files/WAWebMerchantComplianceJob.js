__d(
  "WAWebMerchantComplianceJob",
  [
    "WAWebBizGetMerchantCompliance",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return s(e);
    }
    async function s(e) {
      var t,
        n = await o("WAWebBizGetMerchantCompliance").getMerchantCompliance({
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
    }
    l.getMerchantCompliance = e;
  },
  98,
);
