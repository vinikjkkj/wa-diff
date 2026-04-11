__d(
  "WAWebQueryCatalog",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementFetchCatalog",
    "WAWebBizGatingUtils",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          try {
            var r,
              a,
              i,
              l = t.afterCursor,
              u = t.allowShopSource,
              c = t.catalogWid,
              d = t.checkmarkCollectionId,
              m = t.directConnectionEncryptedInfo,
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
                      jid: c.toString(),
                      allow_shop_source: u
                        ? "ALLOWSHOPSOURCE_TRUE"
                        : "ALLOWSHOPSOURCE_FALSE",
                      width: String(y),
                      height: String(p),
                      direct_connection_encrypted_info: m,
                      limit: String(_),
                      after: l,
                      catalog_session_id: d,
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
                (r = C.xwa_product_catalog_get_product_catalog) == null
                  ? void 0
                  : r.product_catalog;
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
                  before: (a = v == null ? void 0 : v.before) != null ? a : "",
                  after: (i = v == null ? void 0 : v.after) != null ? i : "",
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
          var t = e.afterCursor,
            n = e.allowShopSource,
            r = e.catalogWid,
            a = e.checkmarkCollectionId,
            i = e.directConnectionEncryptedInfo,
            l = i === void 0 ? null : i,
            s = e.height,
            c = e.limit,
            d = e.variantInfoFields,
            m = e.variantThumbnailHeight,
            p = e.variantThumbnailWidth,
            _ = e.width;
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          var f = yield o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog(
            {
              product_catalog: {
                jid: r.toJid(),
                after: t,
                limit: String(c),
                width: String(_),
                height: String(s),
                belongs_to: { collection_id: a },
                allow_shop_source: n,
                direct_connection_encrypted_info: l,
                variant_info_fields: d,
                variant_thumbnail_height: m != null ? String(m) : null,
                variant_thumbnail_width: p != null ? String(p) : null,
              },
              platform: "WEB",
            },
          );
          if (f.type === "success") return f.catalog;
          throw (
            f.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(
                  f.error,
                  o("WAWebMaybeThrowCatalogErrors").ErrorSourceForCatalogQuery
                    .GET_PRODUCT_CATALOG_OWNER_GRAPHQL,
                )
              : f.type,
            f.type === "recovery-required" &&
            o("WAWebBizGatingUtils").catalogTokenRecoveryEnabled()
              ? new (o("WAWebBackendErrors").AdAccountRecoveryRequiredError)(
                  f.emailMask,
                )
              : f.type === "incorrect-nonce" &&
                  o("WAWebBizGatingUtils").catalogTokenRecoveryEnabled()
                ? new (o("WAWebBackendErrors").CatalogIncorrectNonceError)()
                : (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "queryCatalogGraphQLByOwner: unhandled error ",
                        "",
                      ])),
                    JSON.stringify(f),
                  ),
                  new (o("WAWebBackendErrors").CatalogUnknownError)())
          );
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      m = function (t) {
        var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e != null && e.equals(t.catalogWid) ? d(t) : c(t);
      },
      p = m;
    l.default = p;
  },
  98,
);
