__d(
  "WAWebBizCatalogProductVisibilitySetJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementUpdateProductVisibility",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw r("err")(
        "updateProductVisibilityGraphQL: error handling flow not implemented for " +
          JSON.stringify(e),
      );
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (i == null)
            throw r("err")("updateProductVisibilityGraphQL: meUser is null");
          var l = yield o(
            "WAWebBizCatalogManagementUpdateProductVisibility",
          ).updateProductVisibility({
            jid:
              (a = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                i,
              )) != null
                ? a
                : i.toJid(),
            products: [{ product_id: t, is_hidden: n }],
          });
          if (l.type === "success") return l.result === !0 ? void 0 : e(l);
          if (l.type === "graphql-error")
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(l.error);
          else return (l.type, e(l));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          return s(e, t);
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
