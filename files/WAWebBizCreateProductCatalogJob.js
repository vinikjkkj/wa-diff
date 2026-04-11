__d(
  "WAWebBizCreateProductCatalogJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementCreateCatalog",
    "WAWebBizGatingUtils",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (t == null)
            throw r("err")("createProductCatalogGraphQL: meUser is null");
          var n = yield o(
            "WAWebBizCatalogManagementCreateCatalog",
          ).createCatalog({
            product_catalog: { biz_jid: t.toJid() },
            platform: "WEB",
          });
          n.type !== "success" &&
            (n.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(n.error)
              : n.type,
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createProductCatalogGraphQL: unhandled error ",
                  "",
                ])),
              JSON.stringify(n),
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          return s();
        })),
        d.apply(this, arguments)
      );
    }
    l.createProductCatalog = c;
  },
  98,
);
