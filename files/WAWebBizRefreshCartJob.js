__d(
  "WAWebBizRefreshCartJob",
  [
    "WALogger",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebGetFormattedCatalogJid",
    "WAWebLidMigrationUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = async function (n, a, i, l) {
        var t,
          s = await o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
            cart: {
              jid:
                (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                  n,
                )) != null
                  ? t
                  : n.toString(),
              products: a.map(function (e) {
                return { id: e };
              }),
              image_dimensions: { width: i, height: l },
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
      };
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
