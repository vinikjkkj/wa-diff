__d(
  "WAWebQueryCatalog",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchCatalog",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          try {
            var r,
              a,
              i,
              l,
              u = t.afterCursor,
              c = t.allowShopSource,
              d = t.catalogWid,
              m = t.checkmarkCollectionId,
              p = t.height,
              _ = t.limit,
              f = t.variantInfoFields,
              g = t.variantThumbnailHeight,
              h = t.variantThumbnailWidth,
              y = t.width,
              C = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0 ? e : (e = n("WAWebQueryCatalogQuery.graphql")),
                {
                  request: {
                    product_catalog: {
                      jid:
                        (r = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(d)) != null
                          ? r
                          : d.toString(),
                      allow_shop_source: c
                        ? "ALLOWSHOPSOURCE_TRUE"
                        : "ALLOWSHOPSOURCE_FALSE",
                      width: String(y),
                      height: String(p),
                      limit: String(_),
                      after: u,
                      catalog_session_id: m,
                      variant_info_fields: f,
                      variant_thumbnail_height: g != null ? String(g) : null,
                      variant_thumbnail_width: h != null ? String(h) : null,
                    },
                  },
                },
                {
                  eventLogger: o(
                    "WAWebCatalogEventLogger",
                  ).createCatalogEventLogger(
                    o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT
                      .GET_CATALOG,
                  ),
                },
              ),
              b =
                C == null ||
                (a = C.xwa_product_catalog_get_product_catalog) == null
                  ? void 0
                  : a.product_catalog;
            if (b == null)
              return {
                data: [],
                catalog_id: null,
                catalog_name: null,
                catalog_type: null,
                paging: { cursors: { after: "", before: "" } },
              };
            var v = b.paging,
              S = b.products;
            return {
              data: S.map(o("WAWebBizParseProductGraphql").parseProductGraphQL),
              catalog_id: null,
              catalog_name: null,
              catalog_type: null,
              paging: {
                cursors: {
                  before: (i = v == null ? void 0 : v.before) != null ? i : "",
                  after: (l = v == null ? void 0 : v.after) != null ? l : "",
                },
              },
            };
          } catch (e) {
            throw (
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
                o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(e),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_product_catalog failed",
                  ])),
              ),
              new (o("WAWebBackendErrors").CatalogUnknownError)()
            );
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.afterCursor,
            r = e.allowShopSource,
            a = e.catalogWid,
            i = e.checkmarkCollectionId,
            l = e.height,
            s = e.limit,
            c = e.variantInfoFields,
            d = e.variantThumbnailHeight,
            m = e.variantThumbnailWidth,
            p = e.width;
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          var _ = yield o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog(
            {
              product_catalog: {
                jid:
                  (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    a,
                  )) != null
                    ? t
                    : a.toJid(),
                after: n,
                limit: String(s),
                width: String(p),
                height: String(l),
                belongs_to: { collection_id: i },
                allow_shop_source: r,
                variant_info_fields: c,
                variant_thumbnail_height: d != null ? String(d) : null,
                variant_thumbnail_width: m != null ? String(m) : null,
              },
              platform: "WEB",
            },
          );
          if (_.type === "success") return _.catalog;
          throw (
            _.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(
                  _.error,
                  o("WAWebMaybeThrowCatalogErrors").ErrorSourceForCatalogQuery
                    .GET_PRODUCT_CATALOG_OWNER_GRAPHQL,
                )
              : _.type,
            _.type === "recovery-required"
              ? new (o("WAWebBackendErrors").AdAccountRecoveryRequiredError)(
                  _.emailMask,
                )
              : _.type === "incorrect-nonce"
                ? new (o("WAWebBackendErrors").CatalogIncorrectNonceError)()
                : (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "queryCatalogGraphQLByOwner: unhandled error ",
                        "",
                      ])),
                    JSON.stringify(_),
                  ),
                  new (o("WAWebBackendErrors").CatalogUnknownError)(
                    _.type === "auth-failure" ||
                      _.type === "error" ||
                      _.type === "timeout" ||
                      _.type === "too-many-attempts"
                      ? _.type
                      : void 0,
                  ))
          );
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      m = function (t) {
        return o("WAWebUserPrefsMeUser").isMeAccount(t.catalogWid)
          ? d(t)
          : c(t);
      },
      p = m;
    l.default = p;
  },
  98,
);
