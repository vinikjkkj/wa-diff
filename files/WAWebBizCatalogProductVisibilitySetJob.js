__d(
  "WAWebBizCatalogProductVisibilitySetJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementUpdateProductVisibility",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw r("err")(
        "updateProductVisibilityGraphQL: error handling flow not implemented for " +
          JSON.stringify(e),
      );
    }
    async function s(t, n) {
      var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      if (a == null)
        throw r("err")("updateProductVisibilityGraphQL: meUser is null");
      var i = await o(
        "WAWebBizCatalogManagementUpdateProductVisibility",
      ).updateProductVisibility({
        jid: a.toJid(),
        products: [{ product_id: t, is_hidden: n }],
      });
      if (i.type === "success") return i.result === !0 ? void 0 : e(i);
      if (i.type === "graphql-error")
        o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(
          i.error,
        );
      else return (i.type, e(i));
    }
    async function u(e, t) {
      if (o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions())
        throw new (o("WAWebBackendErrors").E451)();
      return s(e, t);
    }
    l.default = u;
  },
  98,
);
