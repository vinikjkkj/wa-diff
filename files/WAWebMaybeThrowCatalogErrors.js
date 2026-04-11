__d(
  "WAWebMaybeThrowCatalogErrors",
  ["errorCode", "$InternalEnum", "WALogger", "WAWebBackendErrors"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = n("$InternalEnum").Mirrored(["GET_PRODUCT_CATALOG_OWNER_GRAPHQL"]);
    function d(t, n) {
      var r = t.source.errors || [],
        a = r[0],
        i = a == null ? void 0 : a.code;
      if (i != null) {
        if (
          (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "maybeThrowLocalErrorForCatalogQuery: error code ",
                "",
              ])),
            i,
          ),
          n === c.GET_PRODUCT_CATALOG_OWNER_GRAPHQL && i === 2498052)
        )
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            404,
            t.message,
          );
        switch (i) {
          case 2498052:
          case 2498049:
          case 2498050:
          case 2498051:
          case 2498053:
          case 2498056:
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              400,
              t.message,
            );
          case 2498048:
            throw new (o("WAWebBackendErrors").E451)();
          case 2498054:
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(421);
          case 2498103:
          case 2498102:
            throw new (o("WAWebBackendErrors").CollectionReorderError)();
        }
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "maybeThrowLocalErrorForCatalogQuery: unknown error code ",
              "",
            ])),
          i,
        );
      }
    }
    ((l.ErrorSourceForCatalogQuery = c),
      (l.maybeThrowLocalErrorForCatalogQuery = d));
  },
  98,
);
