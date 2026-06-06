__d(
  "WAWebBizRefreshCartJob",
  [
    "WALogger",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebLidMigrationUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = async function (n, a, i, l, s) {
        var t = await o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
          cart: {
            jid: n.toString(),
            products: a.map(function (e) {
              return { id: e };
            }),
            image_dimensions: { width: i, height: l },
            direct_connection_encrypted_info: s,
            variant_info_fields: "variant_properties",
          },
        });
        if (t.type === "success") return t.cartResult;
        throw (
          t.type,
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBizRefreshCart: error handling flow, Error Type ",
                "",
              ])),
            JSON.stringify(t.type),
          ),
          r("err")(
            "refreshCartGraphQL: error handling flow, Error Type " +
              JSON.stringify(t.type),
          )
        );
      };
    function u(e, t, n, r, a) {
      var i,
        l = (i = o("WAWebLidMigrationUtils").toPn(e)) != null ? i : e;
      return s(l, t, n, r, a);
    }
    l.refreshCart = u;
  },
  98,
);
