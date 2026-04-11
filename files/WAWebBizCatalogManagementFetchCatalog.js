__d(
  "WAWebBizCatalogManagementFetchCatalog",
  [
    "WALogger",
    "WAWebBizCatalogManagementFetchCatalogQuery.graphql",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
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
          : (e = n("WAWebBizCatalogManagementFetchCatalogQuery.graphql"));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchCatalog: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchCatalog: failed as "',
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
          var t, r, a;
          if (e == null) return d;
          var i =
            (t = e.xfb_whatsapp_catalog) == null ? void 0 : t.product_catalog;
          if (i == null) return d;
          var l = i.paging,
            s = i.products,
            u = (r = l == null ? void 0 : l.before) != null ? r : "",
            c = (a = l == null ? void 0 : l.after) != null ? a : "",
            m = s
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
            type: "success",
            catalog: {
              data: m,
              catalog_id: i.catalog_id,
              catalog_name: i.catalog_name,
              catalog_type: i.catalog_type,
              paging: { cursors: { before: u, after: c } },
            },
          };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchCatalogWithToken: failed with error",
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
    l.fetchCatalog = p;
  },
  98,
);
