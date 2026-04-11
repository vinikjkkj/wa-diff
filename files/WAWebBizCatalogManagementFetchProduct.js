__d(
  "WAWebBizCatalogManagementFetchProduct",
  [
    "WALogger",
    "WAWebBizCatalogManagementFetchProductQuery.graphql",
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
          : (e = n("WAWebBizCatalogManagementFetchProductQuery.graphql"));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchProduct: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchProduct: failed as "',
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
            (t = e.xfb_whatsapp_catalog_product) == null ||
            (t = t.product_catalog) == null
              ? void 0
              : t.product;
          if (i == null) return d;
          var l = o(
            "WAWebBizCatalogManagementParseProductGraphql",
          ).parseProductGraphQL(
            n(
              o("WAWebBizCatalogManagementParseProductGraphql")
                .PARSE_PRODUCT_FRAGMENT,
              i,
            ),
          );
          return {
            type: "success",
            productResult: {
              data: l,
              catalog_id:
                (r = e.xfb_whatsapp_catalog_product) == null ||
                (r = r.product_catalog) == null
                  ? void 0
                  : r.catalog_id,
              catalog_type:
                (a = e.xfb_whatsapp_catalog_product) == null ||
                (a = a.product_catalog) == null
                  ? void 0
                  : a.catalog_type,
            },
          };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchProductWithToken: failed with error",
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
    l.fetchProduct = p;
  },
  98,
);
