__d(
  "WAWebBizCatalogDeleteProductsJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementDeleteProduct",
    "WAWebBizGatingUtils",
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
          var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (t == null)
            throw r("err")("deleteProductsGraphQL: meUser is null");
          var n = yield o(
            "WAWebBizCatalogManagementDeleteProduct",
          ).deleteProduct({ biz_jid: t.toJid(), product_ids: e });
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
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
