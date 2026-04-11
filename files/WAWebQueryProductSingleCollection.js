__d(
  "WAWebQueryProductSingleCollection",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementFetchSingleCollection",
    "WAWebBizGatingUtils",
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          try {
            var r,
              a = t.afterCursor,
              i = t.catalogWid,
              l = t.collectionId,
              u = t.directConnectionEncryptedInfo,
              c = t.height,
              d = t.limit,
              m = t.width,
              p = yield o("WAWebRelayClient").fetchQuery(
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
                      width: String(m),
                      height: String(c),
                      direct_connection_encrypted_info: u,
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
              _ =
                (p == null
                  ? void 0
                  : p.xwa_product_catalog_get_single_collection) || {},
              f = _.collection,
              g = _.paging,
              h = f || {},
              y = h.id,
              C = h.name,
              b = h.products,
              v = h.status_info,
              S = v == null ? void 0 : v.status,
              R =
                (r =
                  S != null
                    ? o("WAWebProductTypes.flow").asProductReviewType(S)
                    : void 0) != null
                  ? r
                  : "APPROVED";
            return {
              afterCursor: (g == null ? void 0 : g.after) || "",
              catalog_type: null,
              collections: [
                {
                  id: y || "",
                  name: C || "",
                  canAppeal: (v == null ? void 0 : v.can_appeal) === "true",
                  isHidden: !1,
                  reviewStatus: R,
                  totalItemsCount: 0,
                  products:
                    b != null
                      ? b.map(
                          o("WAWebBizParseProductGraphql").parseProductGraphQL,
                        )
                      : [],
                  rejectReason: v == null ? void 0 : v.reject_reason,
                  commerceUrl: v == null ? void 0 : v.commerce_url,
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          var t = e.afterCursor,
            n = e.catalogWid,
            r = e.collectionId,
            a = e.directConnectionEncryptedInfo,
            i = e.height,
            l = e.limit,
            s = e.width,
            c = yield o(
              "WAWebBizCatalogManagementFetchSingleCollection",
            ).fetchSingleCollection({
              collection: {
                biz_jid: n.toJid(),
                id: r,
                limit: String(l),
                after: t,
                width: String(s),
                height: String(i),
                direct_connection_encrypted_info: a,
              },
            });
          if (c.type === "success") return c.collectionsResult;
          throw (
            c.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(c.error)
              : c.type,
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "queryProductSingleCollectionGraphQLByOwner: unhandled err ",
                  "",
                ])),
              JSON.stringify(c),
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
