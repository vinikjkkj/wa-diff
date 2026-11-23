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
    "WAWebProductTypes",
    "WAWebQueryProductSingleCollectionQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = async function (r) {
        if (
          o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()
        )
          throw new (o("WAWebBackendErrors").E451)();
        try {
          var t,
            a,
            i = r.afterCursor,
            l = r.catalogWid,
            u = r.collectionId,
            c = r.height,
            d = r.limit,
            m = r.variantInfoFields,
            p = r.variantThumbnailHeight,
            _ = r.variantThumbnailWidth,
            f = r.width,
            g = await o("WAWebRelayClient").fetchQuery(
              e !== void 0
                ? e
                : (e = n("WAWebQueryProductSingleCollectionQuery.graphql")),
              {
                request: {
                  collection: {
                    biz_jid:
                      (t = o(
                        "WAWebGetFormattedCatalogJid",
                      ).getFormattedCatalogJid(l)) != null
                        ? t
                        : l.toString(),
                    id: u,
                    limit: String(d),
                    after: i,
                    width: String(f),
                    height: String(c),
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
              (a =
                E != null
                  ? o("WAWebProductTypes").asProductReviewType(E)
                  : void 0) != null
                ? a
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
      },
      d = async function (t) {
        var e;
        if (
          o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()
        )
          throw new (o("WAWebBackendErrors").E451)();
        var n = t.afterCursor,
          r = t.catalogWid,
          a = t.collectionId,
          i = t.height,
          l = t.limit,
          s = t.variantInfoFields,
          c = t.variantThumbnailHeight,
          d = t.variantThumbnailWidth,
          m = t.width,
          p = await o(
            "WAWebBizCatalogManagementFetchSingleCollection",
          ).fetchSingleCollection({
            collection: {
              biz_jid:
                (e = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                  r,
                )) != null
                  ? e
                  : r.toJid(),
              id: a,
              limit: String(l),
              after: n,
              width: String(m),
              height: String(i),
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
      },
      m = function (t) {
        return o("WAWebUserUtils").isMeAccount(t.catalogWid) ? d(t) : c(t);
      },
      p = m;
    l.default = p;
  },
  98,
);
