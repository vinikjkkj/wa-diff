__d(
  "WAWebBizRefreshCartJob",
  [
    "WALogger",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebGetFormattedCatalogJid",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            var s,
              u = yield o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
                cart: {
                  jid:
                    (s = o(
                      "WAWebGetFormattedCatalogJid",
                    ).getFormattedCatalogJid(t)) != null
                      ? s
                      : t.toString(),
                  products: n.map(function (e) {
                    return { id: e };
                  }),
                  image_dimensions: { width: a, height: i },
                  direct_connection_encrypted_info: l,
                  variant_info_fields: "variant_properties",
                },
              });
            if (u.type === "success") return u.cartResult;
            throw (
              u.type,
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBizRefreshCart: error handling flow, Error Type ",
                    "",
                  ])),
                JSON.stringify(u.type),
              ),
              r("err")(
                "refreshCartGraphQL: error handling flow, Error Type " +
                  JSON.stringify(u.type),
              )
            );
          },
        );
        return function (n, r, o, a, i) {
          return t.apply(this, arguments);
        };
      })();
    function u(e, t, n, r, a) {
      var i,
        l = (i = o("WAWebLidMigrationUtils").toPn(e)) != null ? i : e;
      return s(l, t, n, r, a);
    }
    l.refreshCart = u;
  },
  98,
);
