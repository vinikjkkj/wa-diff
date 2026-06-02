__d(
  "WAWebBizCreateProductCatalogJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementCreateCatalog",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (t == null)
        throw r("err")("createProductCatalogGraphQL: meUser is null");
      var n = await o("WAWebBizCatalogManagementCreateCatalog").createCatalog({
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
