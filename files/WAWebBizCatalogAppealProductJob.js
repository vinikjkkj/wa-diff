__d(
  "WAWebBizCatalogAppealProductJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementAppealProduct",
    "WAWebBizGatingUtils",
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
          var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          if (n == null) throw r("err")("appealProductGraphQL: meUser is null");
          var a = yield o(
            "WAWebBizCatalogManagementAppealProduct",
          ).appealProduct({ jid: n.toJid(), product_id: e, reason: t });
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
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
