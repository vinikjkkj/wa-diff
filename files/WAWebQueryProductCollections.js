__d(
  "WAWebQueryProductCollections",
  [
    "errorCode",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchCollections",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
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
              l = t.directConnectionEncryptedInfo,
              s = t.height,
              c = t.limit,
              d = t.productsCount,
              m = t.variantInfoFields,
              p = t.variantThumbnailHeight,
              _ = t.variantThumbnailWidth,
              f = t.width,
              g = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryProductCollectionsQuery.graphql")),
                {
                  request: {
                    collections: {
                      biz_jid:
                        (r = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(i)) != null
                          ? r
                          : i.toString(),
                      collection_limit: String(c),
                      item_limit: String(d),
                      after: a,
                      width: String(f),
                      height: String(s),
                      direct_connection_encrypted_info: l,
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
                      .GET_COLLECTIONS,
                  ),
                },
              );
            if (
              (g == null ? void 0 : g.xwa_product_catalog_get_collections) ==
              null
            )
              return { afterCursor: "", collections: [], catalog_type: null };
            var h = g.xwa_product_catalog_get_collections,
              y = h.collections,
              C = h.paging;
            return {
              afterCursor: (C == null ? void 0 : C.after) || "",
              collections: y.map(function (e) {
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
              var b,
                v = ((b = e.source) == null ? void 0 : b.errors) || [],
                S = v[0];
              if ((S == null ? void 0 : S.code) === 2498052)
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
          var t;
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          var n = e.afterCursor,
            r = e.catalogWid,
            a = e.directConnectionEncryptedInfo,
            i = e.height,
            l = e.limit,
            s = e.productsCount,
            u = e.variantInfoFields,
            d = e.variantThumbnailHeight,
            m = e.variantThumbnailWidth,
            p = e.width,
            _ = yield o(
              "WAWebBizCatalogManagementFetchCollections",
            ).fetchCollections({
              collections: {
                biz_jid:
                  (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    r,
                  )) != null
                    ? t
                    : r.toJid(),
                after: n,
                collection_limit: String(l),
                item_limit: String(s),
                width: String(p),
                height: String(i),
                direct_connection_encrypted_info: a,
                variant_info_fields: u,
                variant_thumbnail_height: d != null ? String(d) : null,
                variant_thumbnail_width: m != null ? String(m) : null,
              },
            });
          if (_.type === "success") return _.collectionsResult;
          if (_.type === "graphql-error") {
            var f;
            if (
              ((f = _.error.source.errors[0]) == null ? void 0 : f.code) ===
              2498052
            )
              return { collections: [], afterCursor: "", catalog_type: null };
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(_.error);
          } else _.type;
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryCollectionsGraphQLByOwner: unhandled error ",
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
      p = function (t) {
        return o("WAWebUserPrefsMeUser").isMeAccount(t.catalogWid)
          ? m(t)
          : d(t);
      },
      _ = p;
    l.default = _;
  },
  98,
);
