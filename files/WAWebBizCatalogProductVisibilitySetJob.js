__d(
  "WAWebBizCatalogProductVisibilitySetJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementUpdateProductVisibility",
    "WAWebBizGatingUtils",
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
          var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (a == null)
            throw r("err")("updateProductVisibilityGraphQL: meUser is null");
          var i = yield o(
            "WAWebBizCatalogManagementUpdateProductVisibility",
          ).updateProductVisibility({
            jid: a.toJid(),
            products: [{ product_id: t, is_hidden: n }],
          });
          if (i.type === "success") return i.result === !0 ? void 0 : e(i);
          if (i.type === "graphql-error")
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(i.error);
          else return (i.type, e(i));
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
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
