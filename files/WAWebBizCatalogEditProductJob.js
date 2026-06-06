__d(
  "WAWebBizCatalogEditProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementEditProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (a == null) throw r("err")("editProductGraphQL: meUser is null");
      var i = await o("WAWebBizCatalogManagementEditProduct").editProduct({
        product: {
          biz_jid: a.toJid(),
          product_id: e.id.toString(),
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
          "editProductGraphQL: error handling flow not implemented for " +
            JSON.stringify(i),
        )
      );
    }
    async function s(t, n, r) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return e(t, n, r);
    }
    l.default = s;
  },
  98,
);
