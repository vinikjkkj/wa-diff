__d(
  "WAWebQueryProductSingleCollection",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchSingleCollection",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
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
              a,
              i = t.afterCursor,
              l = t.catalogWid,
              u = t.collectionId,
              c = t.directConnectionEncryptedInfo,
              d = t.height,
              m = t.limit,
              p = t.variantInfoFields,
              _ = t.variantThumbnailHeight,
              f = t.variantThumbnailWidth,
              g = t.width,
              h = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryProductSingleCollectionQuery.graphql")),
                {
                  request: {
                    collection: {
                      biz_jid:
                        (r = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(l)) != null
                          ? r
                          : l.toString(),
                      id: u,
                      limit: String(m),
                      after: i,
                      width: String(g),
                      height: String(d),
                      direct_connection_encrypted_info: c,
                      variant_info_fields: p,
                      variant_thumbnail_height: _ != null ? String(_) : null,
                      variant_thumbnail_width: f != null ? String(f) : null,
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
              y =
                (h == null
                  ? void 0
                  : h.xwa_product_catalog_get_single_collection) || {},
              C = y.collection,
              b = y.paging,
              v = C || {},
              S = v.id,
              R = v.name,
              L = v.products,
              E = v.status_info,
              k = E == null ? void 0 : E.status,
              I =
                (a =
                  k != null
                    ? o("WAWebProductTypes.flow").asProductReviewType(k)
                    : void 0) != null
                  ? a
                  : "APPROVED";
            return {
              afterCursor: (b == null ? void 0 : b.after) || "",
              catalog_type: null,
              collections: [
                {
                  id: S || "",
                  name: R || "",
                  canAppeal: (E == null ? void 0 : E.can_appeal) === "true",
                  isHidden: !1,
                  reviewStatus: I,
                  totalItemsCount: 0,
                  products:
                    L != null
                      ? L.map(
                          o("WAWebBizParseProductGraphql").parseProductGraphQL,
                        )
                      : [],
                  rejectReason: E == null ? void 0 : E.reject_reason,
                  commerceUrl: E == null ? void 0 : E.commerce_url,
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
          var t;
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          var n = e.afterCursor,
            r = e.catalogWid,
            a = e.collectionId,
            i = e.directConnectionEncryptedInfo,
            l = e.height,
            s = e.limit,
            c = e.variantInfoFields,
            d = e.variantThumbnailHeight,
            m = e.variantThumbnailWidth,
            p = e.width,
            _ = yield o(
              "WAWebBizCatalogManagementFetchSingleCollection",
            ).fetchSingleCollection({
              collection: {
                biz_jid:
                  (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    r,
                  )) != null
                    ? t
                    : r.toJid(),
                id: a,
                limit: String(s),
                after: n,
                width: String(p),
                height: String(l),
                direct_connection_encrypted_info: i,
                variant_info_fields: c,
                variant_thumbnail_height: d != null ? String(d) : null,
                variant_thumbnail_width: m != null ? String(m) : null,
              },
            });
          if (_.type === "success") return _.collectionsResult;
          throw (
            _.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(_.error)
              : _.type,
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "queryProductSingleCollectionGraphQLByOwner: unhandled err ",
                  "",
                ])),
              JSON.stringify(_),
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
