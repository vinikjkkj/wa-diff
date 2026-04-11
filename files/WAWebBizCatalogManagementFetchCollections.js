__d(
  "WAWebBizCatalogManagementFetchCollections",
  [
    "WALogger",
    "WAWebBizCatalogManagementFetchCollectionsQuery.graphql",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebProductTypes.flow",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { type: "error" },
      m =
        e !== void 0
          ? e
          : (e = n("WAWebBizCatalogManagementFetchCollectionsQuery.graphql"));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchCollections: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchCollections: failed as "',
                  '"',
                ])),
              e.type,
            ),
            e);
      });
    }
    function _(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? f(t.token, e).then(function (e) {
                return (
                  e.type !== "success" && e.type === "auth-failure"
                    ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                    : e.type,
                  e
                );
              })
            : (t.type, t);
        });
    }
    function f(e, t) {
      var n;
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").fetchQuery(
            m,
            { request: t },
            {
              environmentType: "facebook",
              accessToken: e,
              getInlineDataReader: function (t) {
                n = t;
              },
            },
          );
        })
        .then(function (e) {
          var t, r, a, i;
          if (e == null) return d;
          var l =
            (t = e.xfb_whatsapp_catalog_collections) == null
              ? void 0
              : t.collections;
          if (l == null) return d;
          var s =
              (r = e.xfb_whatsapp_catalog_collections) == null
                ? void 0
                : r.paging,
            u = (a = s == null ? void 0 : s.after) != null ? a : "",
            c = l.map(function (e) {
              var t,
                r = e.id,
                a = e.name,
                i = e.status_info,
                l = i == null ? void 0 : i.status,
                s =
                  (t =
                    l != null
                      ? o("WAWebProductTypes.flow").asProductReviewType(l)
                      : void 0) != null
                    ? t
                    : "APPROVED",
                u = e.products
                  .map(function (e) {
                    return n(
                      o("WAWebBizCatalogManagementParseProductGraphql")
                        .PARSE_PRODUCT_FRAGMENT,
                      e,
                    );
                  })
                  .map(
                    o("WAWebBizCatalogManagementParseProductGraphql")
                      .parseProductGraphQL,
                  );
              return {
                id: r != null ? r : "",
                name: a != null ? a : "",
                rejectReason: i == null ? void 0 : i.reject_reason,
                commerceUrl: i == null ? void 0 : i.commerce_url,
                canAppeal: (i == null ? void 0 : i.can_appeal) === "true",
                reviewStatus: s,
                totalItemsCount: 0,
                products: u,
                isHidden: !1,
              };
            });
          return {
            type: "success",
            collectionsResult: {
              collections: c,
              afterCursor: u,
              catalog_type:
                (i = e.xfb_whatsapp_catalog_collections) == null
                  ? void 0
                  : i.catalog_type,
            },
          };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchCollectionsWithToken: failed with error",
                ])),
            ),
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : d
          );
        });
    }
    l.fetchCollections = p;
  },
  98,
);
