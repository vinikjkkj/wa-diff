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
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductTypes.flow",
    "WAWebQueryProductCollectionsQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = async function (r) {
        if (
          o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()
        )
          throw new (o("WAWebBackendErrors").E451)();
        try {
          var t = r.afterCursor,
            a = r.catalogWid,
            i = r.directConnectionEncryptedInfo,
            l = r.height,
            s = r.limit,
            c = r.productsCount,
            d = r.variantInfoFields,
            m = r.variantThumbnailHeight,
            p = r.variantThumbnailWidth,
            _ = r.width,
            f = await o("WAWebRelayClient").fetchQuery(
              e !== void 0
                ? e
                : (e = n("WAWebQueryProductCollectionsQuery.graphql")),
              {
                request: {
                  collections: {
                    biz_jid: a.toString(),
                    collection_limit: String(s),
                    item_limit: String(c),
                    after: t,
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
            (f == null ? void 0 : f.xwa_product_catalog_get_collections) == null
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
      },
      m = async function (t) {
        if (
          o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()
        )
          throw new (o("WAWebBackendErrors").E451)();
        var e = t.afterCursor,
          n = t.catalogWid,
          r = t.directConnectionEncryptedInfo,
          a = t.height,
          i = t.limit,
          l = t.productsCount,
          s = t.variantInfoFields,
          u = t.variantThumbnailHeight,
          d = t.variantThumbnailWidth,
          m = t.width,
          p = await o(
            "WAWebBizCatalogManagementFetchCollections",
          ).fetchCollections({
            collections: {
              biz_jid: n.toJid(),
              after: e,
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
          o("WAWebMaybeThrowCatalogErrors").maybeThrowLocalErrorForCatalogQuery(
            p.error,
          );
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
      },
      p = function (t) {
        var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e != null && e.equals(t.catalogWid) ? m(t) : d(t);
      },
      _ = p;
    l.default = _;
  },
  98,
);
