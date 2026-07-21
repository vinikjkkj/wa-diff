__d(
  "WAWebBizCatalogEditProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementEditProduct",
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
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          return u(e, t, n);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            l = yield o("WAWebBizCatalogManagementEditProduct").editProduct({
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
        })),
        c.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
