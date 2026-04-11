__d(
  "WAWebQueryProductCollections",
  [
    "errorCode",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementFetchCollections",
    "WAWebBizGatingUtils",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductTypes.flow",
    "WAWebQueryProductCollectionsQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          try {
            var r = t.afterCursor,
              a = t.catalogWid,
              i = t.directConnectionEncryptedInfo,
              l = t.height,
              s = t.limit,
              c = t.productsCount,
              d = t.variantInfoFields,
              m = t.variantThumbnailHeight,
              p = t.variantThumbnailWidth,
              _ = t.width,
              f = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryProductCollectionsQuery.graphql")),
                {
                  request: {
                    collections: {
                      biz_jid: a.toString(),
                      collection_limit: String(s),
                      item_limit: String(c),
                      after: r,
                      width: String(_),
                      height: String(l),
                      direct_connection_encrypted_info: i,
                      variant_info_fields: d,
                      variant_thumbnail_height: m != null ? String(m) : null,
                      variant_thumbnail_width: p != null ? String(p) : null,
                    },
                  },
                },
                {
                  eventLogger: o(
                    "WAWebCatalogEventLogger",
                  ).createCatalogEventLogger(
                    o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT
                      .GET_COLLECTIONS,
                  ),
                },
              );
            if (
              (f == null ? void 0 : f.xwa_product_catalog_get_collections) ==
              null
            )
              return { afterCursor: "", collections: [], catalog_type: null };
            var g = f.xwa_product_catalog_get_collections,
              h = g.collections,
              y = g.paging;
            return {
              afterCursor: (y == null ? void 0 : y.after) || "",
              collections: h.map(function (e) {
                var t,
                  n = e.id,
                  r = e.name,
                  a = e.products,
                  i = e.status_info,
                  l = i == null ? void 0 : i.status,
                  s =
                    (t =
                      l != null
                        ? o("WAWebProductTypes.flow").asProductReviewType(l)
                        : void 0) != null
                      ? t
                      : "APPROVED";
                return {
                  id: n || "",
                  name: r || "",
                  canAppeal: (i == null ? void 0 : i.can_appeal) === "true",
                  isHidden: !1,
                  reviewStatus: s,
                  totalItemsCount: 0,
                  products: a.map(
                    o("WAWebBizParseProductGraphql").parseProductGraphQL,
                  ),
                  rejectReason: i == null ? void 0 : i.reject_reason,
                  commerceUrl: i == null ? void 0 : i.commerce_url,
                };
              }),
              catalog_type: null,
            };
          } catch (e) {
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
              var C,
                b = ((C = e.source) == null ? void 0 : C.errors) || [],
                v = b[0];
              if ((v == null ? void 0 : v.code) === 2498052)
                return { collections: [], afterCursor: "", catalog_type: null };
              o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(e);
            }
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_collections fetch failed",
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
      m = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          var t = e.afterCursor,
            n = e.catalogWid,
            r = e.directConnectionEncryptedInfo,
            a = e.height,
            i = e.limit,
            l = e.productsCount,
            s = e.variantInfoFields,
            u = e.variantThumbnailHeight,
            d = e.variantThumbnailWidth,
            m = e.width,
            p = yield o(
              "WAWebBizCatalogManagementFetchCollections",
            ).fetchCollections({
              collections: {
                biz_jid: n.toJid(),
                after: t,
                collection_limit: String(i),
                item_limit: String(l),
                width: String(m),
                height: String(a),
                direct_connection_encrypted_info: r,
                variant_info_fields: s,
                variant_thumbnail_height: u != null ? String(u) : null,
                variant_thumbnail_width: d != null ? String(d) : null,
              },
            });
          if (p.type === "success") return p.collectionsResult;
          if (p.type === "graphql-error") {
            var _;
            if (
              ((_ = p.error.source.errors[0]) == null ? void 0 : _.code) ===
              2498052
            )
              return { collections: [], afterCursor: "", catalog_type: null };
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(p.error);
          } else p.type;
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryCollectionsGraphQLByOwner: unhandled error ",
                  "",
                ])),
              JSON.stringify(p),
            ),
            new (o("WAWebBackendErrors").CatalogUnknownError)()
          );
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      p = function (t) {
        var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e != null && e.equals(t.catalogWid) ? m(t) : d(t);
      },
      _ = p;
    l.default = _;
  },
  98,
);
