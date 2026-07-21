__d(
  "WAWebBizCatalogDeleteProductsJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementDeleteProduct",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
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
          var t,
            n = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            a = yield o("WAWebBizCatalogManagementDeleteProduct").deleteProduct(
              {
                biz_jid:
                  (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    n,
                  )) != null
                    ? t
                    : n.toJid(),
                product_ids: e,
              },
            );
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          return e(t);
        })),
        c.apply(this, arguments)
      );
    }
    l.deleteProductsMD = u;
  },
  98,
);
