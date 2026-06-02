__d(
  "WAWebBizCatalogAppealProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAppealProduct",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (n == null) throw r("err")("appealProductGraphQL: meUser is null");
      var a = await o("WAWebBizCatalogManagementAppealProduct").appealProduct({
        jid: n.toJid(),
        product_id: e,
        reason: t,
      });
      if (a.type === "success") return a.result;
      throw (
        a.type === "graphql-error"
          ? o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(a.error)
          : a.type,
        r("err")(
          "appealProductGraphQL: error handling flow not implemented for " +
            JSON.stringify(a),
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
