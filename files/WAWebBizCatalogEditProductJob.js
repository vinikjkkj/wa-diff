__d(
  "WAWebBizCatalogEditProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementEditProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebBizGatingUtils",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (a == null) throw r("err")("editProductGraphQL: meUser is null");
          var i = yield o("WAWebBizCatalogManagementEditProduct").editProduct({
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          return e(t, n, r);
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
