__d(
  "WAWebQueryProductSingleCollection",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchSingleCollection",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductTypes.flow",
    "WAWebQueryProductSingleCollectionQuery.graphql",
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
              a = t.afterCursor,
              i = t.catalogWid,
              l = t.collectionId,
              u = t.directConnectionEncryptedInfo,
              c = t.height,
              d = t.limit,
              m = t.variantInfoFields,
              p = t.variantThumbnailHeight,
              _ = t.variantThumbnailWidth,
              f = t.width,
              g = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryProductSingleCollectionQuery.graphql")),
                {
                  request: {
                    collection: {
                      biz_jid: i.toString(),
                      id: l,
                      limit: String(d),
                      after: a,
                      width: String(f),
                      height: String(c),
                      direct_connection_encrypted_info: u,
                      variant_info_fields: m,
                      variant_thumbnail_height: p != null ? String(p) : null,
                      variant_thumbnail_width: _ != null ? String(_) : null,
                    },
                  },
                },
                {
                  eventLogger: o(
                    "WAWebCatalogEventLogger",
                  ).createCatalogEventLogger(
                    o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT
                      .GET_SINGLE_COLLECTION,
                  ),
                },
              ),
              h =
                (g == null
                  ? void 0
                  : g.xwa_product_catalog_get_single_collection) || {},
              y = h.collection,
              C = h.paging,
              b = y || {},
              v = b.id,
              S = b.name,
              R = b.products,
              L = b.status_info,
              E = L == null ? void 0 : L.status,
              k =
                (r =
                  E != null
                    ? o("WAWebProductTypes.flow").asProductReviewType(E)
                    : void 0) != null
                  ? r
                  : "APPROVED";
            return {
              afterCursor: (C == null ? void 0 : C.after) || "",
              catalog_type: null,
              collections: [
                {
                  id: v || "",
                  name: S || "",
                  canAppeal: (L == null ? void 0 : L.can_appeal) === "true",
                  isHidden: !1,
                  reviewStatus: k,
                  totalItemsCount: 0,
                  products:
                    R != null
                      ? R.map(
                          o("WAWebBizParseProductGraphql").parseProductGraphQL,
                        )
                      : [],
                  rejectReason: L == null ? void 0 : L.reject_reason,
                  commerceUrl: L == null ? void 0 : L.commerce_url,
                },
              ],
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
                    "GraphQL: get_single_collection fetch failed",
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
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          var t = e.afterCursor,
            n = e.catalogWid,
            r = e.collectionId,
            a = e.directConnectionEncryptedInfo,
            i = e.height,
            l = e.limit,
            s = e.variantInfoFields,
            c = e.variantThumbnailHeight,
            d = e.variantThumbnailWidth,
            m = e.width,
            p = yield o(
              "WAWebBizCatalogManagementFetchSingleCollection",
            ).fetchSingleCollection({
              collection: {
                biz_jid: n.toJid(),
                id: r,
                limit: String(l),
                after: t,
                width: String(m),
                height: String(i),
                direct_connection_encrypted_info: a,
                variant_info_fields: s,
                variant_thumbnail_height: c != null ? String(c) : null,
                variant_thumbnail_width: d != null ? String(d) : null,
              },
            });
          if (p.type === "success") return p.collectionsResult;
          throw (
            p.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(p.error)
              : p.type,
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "queryProductSingleCollectionGraphQLByOwner: unhandled err ",
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
      m = function (t) {
        var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e != null && e.equals(t.catalogWid) ? d(t) : c(t);
      },
      p = m;
    l.default = p;
  },
  98,
);
