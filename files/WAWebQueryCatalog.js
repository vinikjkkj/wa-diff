__d(
  "WAWebQueryCatalog",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchCatalog",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
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
            i,
            l = r.afterCursor,
            u = r.allowShopSource,
            c = r.catalogWid,
            d = r.checkmarkCollectionId,
            m = r.directConnectionEncryptedInfo,
            p = r.height,
            _ = r.limit,
            f = r.variantInfoFields,
            g = r.variantThumbnailHeight,
            h = r.variantThumbnailWidth,
            y = r.width,
            C = await o("WAWebRelayClient").fetchQuery(
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
              (t = C.xwa_product_catalog_get_product_catalog) == null
                ? void 0
                : t.product_catalog;
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
      },
      d = async function (t) {
        var e = t.afterCursor,
          n = t.allowShopSource,
          r = t.catalogWid,
          a = t.checkmarkCollectionId,
          i = t.directConnectionEncryptedInfo,
          l = i === void 0 ? null : i,
          s = t.height,
          c = t.limit,
          d = t.variantInfoFields,
          m = t.variantThumbnailHeight,
          p = t.variantThumbnailWidth,
          _ = t.width;
        if (
          o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()
        )
          throw new (o("WAWebBackendErrors").E451)();
        var f = await o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog({
          product_catalog: {
            jid: r.toJid(),
            after: e,
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
        });
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
          f.type === "recovery-required"
            ? new (o("WAWebBackendErrors").AdAccountRecoveryRequiredError)(
                f.emailMask,
              )
            : f.type === "incorrect-nonce"
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
      },
      m = function (t) {
        var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e != null && e.equals(t.catalogWid) ? d(t) : c(t);
      },
      p = m;
    l.default = p;
  },
  98,
);
