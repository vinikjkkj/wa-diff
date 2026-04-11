__d(
  "WAWebBizCatalogManagementUpdateProductVisibility",
  [
    "WALogger",
    "WAWebBizCatalogManagementUpdateProductVisibilityMutation.graphql",
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
          : (e = n(
              "WAWebBizCatalogManagementUpdateProductVisibilityMutation.graphql",
            ));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "updateProductVisibility: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'updateProductVisibility: failed as "',
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
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").commitMutation(
            m,
            { input: t },
            { environmentType: "facebook", accessToken: e },
          );
        })
        .then(function (e) {
          if (e == null) return d;
          var t = e.xfb_whatsapp_catalog_product_visibility_update;
          return t == null || (t == null ? void 0 : t.success) == null
            ? d
            : { type: "success", result: t.success };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "updateProductVisibilityWithToken: failed with error",
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
    l.updateProductVisibility = p;
  },
  98,
);
