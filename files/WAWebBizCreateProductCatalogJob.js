__d(
  "WAWebBizCreateProductCatalogJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementCreateCatalog",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t,
        n = o("WAWebUserUtils").getMeUserOrThrow(),
        r = await o("WAWebBizCatalogManagementCreateCatalog").createCatalog({
          product_catalog: {
            biz_jid:
              (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                n,
              )) != null
                ? t
                : n.toJid(),
          },
          platform: "WEB",
        });
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
    }
    async function u() {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return s();
    }
    l.createProductCatalog = u;
  },
  98,
);
