__d(
  "WAWebBizCatalogAddProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAddProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a,
        i = o("WAWebUserUtils").getMeUserOrThrow(),
        l = await o("WAWebBizCatalogManagementAddProduct").addProduct({
          product: {
            biz_jid:
              (a = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                i,
              )) != null
                ? a
                : i.toJid(),
            width: t,
            height: n,
            product_info: o(
              "WAWebBizCatalogManagementParseProductGraphql",
            ).productModelToGraphQLInput(e),
          },
        });
      if (l.type === "success") return l.productResult;
      throw (
        l.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(l.error)
          : l.type,
        r("err")(
          "addProductGraphQL: error handling flow not implemented for " +
            JSON.stringify(l),
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
