__d(
  "WAWebBizRefreshCartJob",
  [
    "WALogger",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            var s = yield o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
              cart: {
                jid: t.toString(),
                products: n.map(function (e) {
                  return { id: e };
                }),
                image_dimensions: { width: a, height: i },
                direct_connection_encrypted_info: l,
                variant_info_fields: "variant_properties",
              },
            });
            if (s.type === "success") return s.cartResult;
            throw (
              s.type,
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBizRefreshCart: error handling flow, Error Type ",
                    "",
                  ])),
                JSON.stringify(s.type),
              ),
              r("err")(
                "refreshCartGraphQL: error handling flow, Error Type " +
                  JSON.stringify(s.type),
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
