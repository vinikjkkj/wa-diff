__d(
  "WAWebBizCatalogEditProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementEditProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return s(e, t, n);
    }
    async function s(e, t, n) {
      var a,
        i = o("WAWebUserUtils").getMeUserOrThrow(),
        l = await o("WAWebBizCatalogManagementEditProduct").editProduct({
          product: {
            biz_jid:
              (a = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                i,
              )) != null
                ? a
                : i.toJid(),
            product_id: e.id.toString(),
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
          "editProductGraphQL: error handling flow not implemented for " +
            JSON.stringify(l),
        )
      );
    }
    l.default = e;
  },
  98,
);
