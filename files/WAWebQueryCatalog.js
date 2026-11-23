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
            i,
            l,
            u = r.afterCursor,
            c = r.allowShopSource,
            d = r.catalogWid,
            m = r.checkmarkCollectionId,
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
                    jid:
                      (t = o(
                        "WAWebGetFormattedCatalogJid",
                      ).getFormattedCatalogJid(d)) != null
                        ? t
                        : d.toString(),
                    allow_shop_source: c
                      ? "ALLOWSHOPSOURCE_TRUE"
                      : "ALLOWSHOPSOURCE_FALSE",
                    width: String(y),
                    height: String(p),
                    limit: String(_),
                    after: u,
                    catalog_session_id: m,
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
              (a = C.xwa_product_catalog_get_product_catalog) == null
                ? void 0
                : a.product_catalog;
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
                before: (i = v == null ? void 0 : v.before) != null ? i : "",
                after: (l = v == null ? void 0 : v.after) != null ? l : "",
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
        var e,
          n = t.afterCursor,
          r = t.allowShopSource,
          a = t.catalogWid,
          i = t.checkmarkCollectionId,
          l = t.height,
          s = t.limit,
          c = t.variantInfoFields,
          d = t.variantThumbnailHeight,
          m = t.variantThumbnailWidth,
          p = t.width;
        if (
          o("WAWebBizCatalogGatingUtils").commerceFeaturesDisabledBySanctions()
        )
          throw new (o("WAWebBackendErrors").E451)();
        var _ = await o("WAWebBizCatalogManagementFetchCatalog").fetchCatalog({
          product_catalog: {
            jid:
              (e = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                a,
              )) != null
                ? e
                : a.toJid(),
            after: n,
            limit: String(s),
            width: String(p),
            height: String(l),
            belongs_to: { collection_id: i },
            allow_shop_source: r,
            variant_info_fields: c,
            variant_thumbnail_height: d != null ? String(d) : null,
            variant_thumbnail_width: m != null ? String(m) : null,
          },
          platform: "WEB",
        });
        if (_.type === "success") return _.catalog;
        throw (
          _.type === "graphql-error"
            ? o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(
                _.error,
                o("WAWebMaybeThrowCatalogErrors").ErrorSourceForCatalogQuery
                  .GET_PRODUCT_CATALOG_OWNER_GRAPHQL,
              )
            : _.type,
          _.type === "recovery-required"
            ? new (o("WAWebBackendErrors").AdAccountRecoveryRequiredError)(
                _.emailMask,
              )
            : _.type === "incorrect-nonce"
              ? new (o("WAWebBackendErrors").CatalogIncorrectNonceError)()
              : (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "queryCatalogGraphQLByOwner: unhandled error ",
                      "",
                    ])),
                  JSON.stringify(_),
                ),
                new (o("WAWebBackendErrors").CatalogUnknownError)(
                  _.type === "auth-failure" ||
                    _.type === "error" ||
                    _.type === "timeout" ||
                    _.type === "too-many-attempts"
                    ? _.type
                    : void 0,
                ))
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
