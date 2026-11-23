__d(
  "WAWebBizCatalogAppealProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAppealProduct",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        a = o("WAWebUserUtils").getMeUserOrThrow(),
        i = await o("WAWebBizCatalogManagementAppealProduct").appealProduct({
          jid:
            (n = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(a)) !=
            null
              ? n
              : a.toJid(),
          product_id: e,
          reason: t,
        });
      if (i.type === "success") return i.result;
      throw (
        i.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(i.error)
          : i.type,
        r("err")(
          "appealProductGraphQL: error handling flow not implemented for " +
            JSON.stringify(i),
        )
      );
    }
    async function s(t, n) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return e(t, n);
    }
    l.appealProductMD = s;
  },
  98,
);
