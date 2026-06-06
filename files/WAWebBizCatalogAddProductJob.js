__d(
  "WAWebBizCatalogAddProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAddProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (a == null) throw r("err")("addProductGraphQL: meUser is null");
      var i = await o("WAWebBizCatalogManagementAddProduct").addProduct({
        product: {
          biz_jid: a.toJid(),
          width: t,
          height: n,
          product_info: o(
            "WAWebBizCatalogManagementParseProductGraphql",
          ).productModelToGraphQLInput(e),
        },
      });
      if (i.type === "success") return i.productResult;
      throw (
        i.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(i.error)
          : i.type,
        r("err")(
          "addProductGraphQL: error handling flow not implemented for " +
            JSON.stringify(i),
        )
      );
    }
    async function s(t, n, r) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return e(t, n, r);
    }
    l.addProductMD = s;
  },
  98,
);
