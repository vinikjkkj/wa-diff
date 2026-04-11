__d(
  "WAWebBizCatalogManagementFetchProductList",
  [
    "Promise",
    "WALogger",
    "WAWebBizCatalogManagementFetchProductListQuery.graphql",
    "WAWebBizCatalogManagementParseProductGraphql",
    "WAWebBizGatingUtils",
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
      d,
      m = { type: "error" },
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizCatalogManagementFetchProductListQuery.graphql"));
    function _(e) {
      return o("WAWebBizGatingUtils").graphQLForGetProductListEnabled()
        ? f(e).then(function (e) {
            return e.type === "success"
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchProductList: success",
                    ])),
                ),
                e)
              : (e.type,
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      'fetchProductList: failed as "',
                      '"',
                    ])),
                  e.type,
                ),
                e);
          })
        : (d || (d = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function f(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? g(t.token, e).then(function (e) {
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
    function g(e, t) {
      var n;
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").fetchQuery(
            p,
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
          var t;
          if (e == null) return m;
          var r =
            (t = e.xfb_whatsapp_catalog_product_list) == null ||
            (t = t.product_list) == null
              ? void 0
              : t.products;
          if (r == null) return m;
          var a = r
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
          return { type: "success", productsResult: a };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchProductListWithToken: failed with error",
                ])),
            ),
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : m
          );
        });
    }
    l.fetchProductList = _;
  },
  98,
);
