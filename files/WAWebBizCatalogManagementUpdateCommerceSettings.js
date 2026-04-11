__d(
  "WAWebBizCatalogManagementUpdateCommerceSettings",
  [
    "Promise",
    "WALogger",
    "WAWebBizCatalogManagementUpdateCommerceSettingsMutation.graphql",
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
          : (e = n(
              "WAWebBizCatalogManagementUpdateCommerceSettingsMutation.graphql",
            ));
    function _(e) {
      return o("WAWebBizGatingUtils").graphQLForCommerceSettingsEnabled()
        ? f(e).then(function (e) {
            return e.type === "success"
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "updateCommerceSettings: success",
                    ])),
                ),
                e)
              : (e.type,
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      'updateCommerceSettings: failed as "',
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
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").commitMutation(
            p,
            { input: t },
            { environmentType: "facebook", accessToken: e },
          );
        })
        .then(function (e) {
          if (e == null) return m;
          var t = e.xfb_whatsapp_smb_commerce_settings;
          return t == null || (t == null ? void 0 : t.cart_enabled) == null
            ? m
            : { type: "success", result: t.cart_enabled };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "updateCommerceSettingsWithToken: failed with error",
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
    l.updateCommerceSettings = _;
  },
  98,
);
