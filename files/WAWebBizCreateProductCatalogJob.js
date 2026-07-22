__d(
  "WAWebBizCreateProductCatalogJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementCreateCatalog",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            n = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            r = yield o("WAWebBizCatalogManagementCreateCatalog").createCatalog(
              {
                product_catalog: {
                  biz_jid:
                    (t = o(
                      "WAWebGetFormattedCatalogJid",
                    ).getFormattedCatalogJid(n)) != null
                      ? t
                      : n.toJid(),
                },
                platform: "WEB",
              },
            );
          r.type !== "success" &&
            (r.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(r.error)
              : r.type,
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createProductCatalogGraphQL: unhandled error ",
                  "",
                ])),
              JSON.stringify(r),
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
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
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
