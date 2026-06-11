__d(
  "WAWebBizCatalogAppealProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementAppealProduct",
    "WAWebGetFormattedCatalogJid",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (a == null) throw r("err")("appealProductGraphQL: meUser is null");
          var i = yield o(
            "WAWebBizCatalogManagementAppealProduct",
          ).appealProduct({
            jid:
              (n = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                a,
              )) != null
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          return e(t, n);
        })),
        c.apply(this, arguments)
      );
    }
    l.appealProductMD = u;
  },
  98,
);
