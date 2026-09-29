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
          function* (t, n, a, i) {
            var l,
              s = yield o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
                cart: {
                  jid:
                    (l = o(
                      "WAWebGetFormattedCatalogJid",
                    ).getFormattedCatalogJid(t)) != null
                      ? l
                      : t.toString(),
                  products: n.map(function (e) {
                    return { id: e };
                  }),
                  image_dimensions: { width: a, height: i },
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
        return function (n, r, o, a) {
          return t.apply(this, arguments);
        };
      })();
    function u(e) {
      var t,
        n = e.bizJID,
        r = e.ids,
        a = e.imageHeight,
        i = e.imageWidth,
        l = (t = o("WAWebLidMigrationUtils").toPn(n)) != null ? t : n;
      return s(l, r, i, a);
    }
    l.refreshCart = u;
  },
  98,
);
