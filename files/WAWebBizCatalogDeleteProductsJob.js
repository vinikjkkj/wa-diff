__d(
  "WAWebBizCatalogDeleteProductsJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementDeleteProduct",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (t == null) throw r("err")("deleteProductsGraphQL: meUser is null");
      var n = await o("WAWebBizCatalogManagementDeleteProduct").deleteProduct({
        biz_jid: t.toJid(),
        product_ids: e,
      });
      if (n.type === "success") return n.deleteResult;
      throw (
        n.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(n.error)
          : n.type,
        r("err")(
          "deleteProductsGraphQL: error handling flow not implemented for " +
            JSON.stringify(n),
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
