__d(
  "WAWebBizCatalogAddProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAddProduct",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebGetFormattedCatalogJid",
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
          var a,
            i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (i == null) throw r("err")("addProductGraphQL: meUser is null");
          var l = yield o("WAWebBizCatalogManagementAddProduct").addProduct({
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
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          return e(t, n, r);
        })),
        c.apply(this, arguments)
      );
    }
    l.addProductMD = u;
  },
  98,
);
