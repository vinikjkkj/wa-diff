__d(
  "WAWebBizCatalogDeleteProductsJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementDeleteProduct",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t,
        n = o("WAWebUserUtils").getMeUserOrThrow(),
        a = await o("WAWebBizCatalogManagementDeleteProduct").deleteProduct({
          biz_jid:
            (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(n)) !=
            null
              ? t
              : n.toJid(),
          product_ids: e,
        });
      if (a.type === "success") return a.deleteResult;
      throw (
        a.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(a.error)
          : a.type,
        r("err")(
          "deleteProductsGraphQL: error handling flow not implemented for " +
            JSON.stringify(a),
        )
      );
    }
    async function s(t) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return e(t);
    }
    l.deleteProductsMD = s;
  },
  98,
);
