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
              p = t.directConnectionEncryptedInfo,
              _ = t.height,
              f = t.limit,
              g = t.variantInfoFields,
              h = t.variantThumbnailHeight,
              y = t.variantThumbnailWidth,
              C = t.width,
              b = yield o("WAWebRelayClient").fetchQuery(
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
                      width: String(C),
                      height: String(_),
                      direct_connection_encrypted_info: p,
                      limit: String(f),
                      after: u,
                      catalog_session_id: m,
                      variant_info_fields: g,
                      variant_thumbnail_height: h != null ? String(h) : null,
                      variant_thumbnail_width: y != null ? String(y) : null,
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
              v =
                b == null ||
                (a = b.xwa_product_catalog_get_product_catalog) == null
                  ? void 0
                  : a.product_catalog;
            if (v == null)
              return {
                data: [],
                catalog_id: null,
                catalog_name: null,
                catalog_type: null,
                paging: { cursors: { after: "", before: "" } },
              };
            var S = v.paging,
              R = v.products;
            return {
              data: R.map(o("WAWebBizParseProductGraphql").parseProductGraphQL),
              catalog_id: null,
              catalog_name: null,
              catalog_type: null,
              paging: {
                cursors: {
                  before: (i = S == null ? void 0 : S.before) != null ? i : "",
                  after: (l = S == null ? void 0 : S.after) != null ? l : "",
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
            l = e.directConnectionEncryptedInfo,
            s = l === void 0 ? null : l,
            c = e.height,
            d = e.limit,
            m = e.variantInfoFields,
            p = e.variantThumbnailHeight,
            _ = e.variantThumbnailWidth,
            f = e.width;
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          var g = yield o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog(
            {
              product_catalog: {
                jid:
                  (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    a,
                  )) != null
                    ? t
                    : a.toJid(),
                after: n,
                limit: String(d),
                width: String(f),
                height: String(c),
                belongs_to: { collection_id: i },
                allow_shop_source: r,
                direct_connection_encrypted_info: s,
                variant_info_fields: m,
                variant_thumbnail_height: p != null ? String(p) : null,
                variant_thumbnail_width: _ != null ? String(_) : null,
              },
              platform: "WEB",
            },
          );
          if (g.type === "success") return g.catalog;
          throw (
            g.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(
                  g.error,
                  o("WAWebMaybeThrowCatalogErrors").ErrorSourceForCatalogQuery
                    .GET_PRODUCT_CATALOG_OWNER_GRAPHQL,
                )
              : g.type,
            g.type === "recovery-required"
              ? new (o("WAWebBackendErrors").AdAccountRecoveryRequiredError)(
                  g.emailMask,
                )
              : g.type === "incorrect-nonce"
                ? new (o("WAWebBackendErrors").CatalogIncorrectNonceError)()
                : (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "queryCatalogGraphQLByOwner: unhandled error ",
                        "",
                      ])),
                    JSON.stringify(g),
                  ),
                  new (o("WAWebBackendErrors").CatalogUnknownError)())
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
