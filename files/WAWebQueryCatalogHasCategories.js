__d(
  "WAWebQueryCatalogHasCategories",
  [
    "errorCode",
    "WALogger",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogHasCategoriesQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.catalogWid,
            a = t.imageDimensions,
            i = a === void 0 ? { width: 100, height: 100 } : a,
            l = t.sessionId;
          try {
            var s,
              c,
              d = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryCatalogHasCategoriesQuery.graphql")),
                {
                  request: {
                    categories: {
                      biz_jid:
                        (s = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(r)) != null
                          ? s
                          : r.toString(),
                      image_dimensions: i,
                      catalog_session_id: l,
                    },
                  },
                },
                {
                  eventLogger: o(
                    "WAWebCatalogEventLogger",
                  ).createCatalogEventLogger(
                    o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT
                      .GET_CATEGORIES,
                  ),
                },
              );
            return !!(
              !(
                d == null || (c = d.xwa_product_catalog_get_categories) == null
              ) && c.categories.length
            );
          } catch (e) {
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
              var m = e.source.errors || [],
                p = m[0];
              if ((p == null ? void 0 : p.code) === 2498052) return !1;
              o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(e);
            }
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_categories fetch failed",
                  ])),
              ),
              !1
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.queryCatalogHasCategories = c;
  },
  98,
);
