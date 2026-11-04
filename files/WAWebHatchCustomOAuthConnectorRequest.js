__d(
  "WAWebHatchCustomOAuthConnectorRequest",
  [
    "WAWebHatchCustomConnectorRequest",
    "WAWebHatchCustomOAuthUrls",
    "WAWebHatchJsonReaders",
    "WAWebHatchOAuthCallbackUrl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = "none",
      u = ["client_secret_basic", "client_secret_post", s];
    function c(e) {
      var t = e.flow === "oauth" ? d(e.spec) : null;
      return t == null || e.sessionId == null
        ? t
        : babelHelpers.extends({}, t, { sessionId: e.sessionId });
    }
    function d(t) {
      var n = o("WAWebHatchJsonReaders").readObject(t, "credential"),
        r = o("WAWebHatchJsonReaders").readString(n, "name"),
        a = o("WAWebHatchCustomConnectorRequest").readHatchCustomConnectorHosts(
          n,
          "domains",
        ),
        i = _(o("WAWebHatchJsonReaders").readObject(n, "oauth"));
      return o("WAWebHatchJsonReaders").readField(t, "version") !== e ||
        r == null ||
        !o("WAWebHatchCustomConnectorRequest").isHatchCustomConnectorName(r) ||
        a == null ||
        i == null
        ? null
        : {
            name: r,
            displayName: r.slice(
              o("WAWebHatchCustomConnectorRequest")
                .HATCH_CUSTOM_CONNECTOR_NAME_PREFIX.length,
            ),
            issuerDomain: i.issuer_domain,
            requiresClientSecret: i.token_endpoint_auth_method !== s,
            connector: {
              name: r,
              mode: "direct_oauth",
              hosts: a,
              token_refresh: [
                {
                  path: o(
                    "WAWebHatchCustomOAuthUrls",
                  ).hatchOAuthTokenRefreshPath(i.token_url),
                },
              ],
            },
            oauthBootstrap: i,
          };
    }
    function m(e, t, n, r) {
      var o = e.requiresClientSecret && n != null ? { client_secret: n } : {};
      return babelHelpers.extends(
        {
          connector: e.connector,
          oauth_bootstrap: babelHelpers.extends(
            {},
            e.oauthBootstrap,
            { client_id: t.trim() },
            o,
          ),
          replace_existing: r,
        },
        e.sessionId == null ? {} : { session_id: e.sessionId },
      );
    }
    function p(e, t) {
      return o("WAWebHatchCustomOAuthUrls").isSafeHatchOAuthAuthorizeUrl(
        t,
        e.issuerDomain,
      );
    }
    function _(e) {
      var t = o("WAWebHatchJsonReaders").readString(e, "issuer_domain"),
        n =
          t == null
            ? null
            : o(
                "WAWebHatchCustomConnectorRequest",
              ).normalizeHatchCustomConnectorHost(t),
        r = n == null ? null : g(e, n),
        a = h(e);
      return n == null || r == null || a == null
        ? null
        : babelHelpers.extends({}, r, f(e), {
            issuer_domain: n,
            token_endpoint_auth_method: a,
          });
    }
    function f(e) {
      var t = {},
        n = o("WAWebHatchJsonReaders").readNonEmptyString(e, "scope"),
        r = o("WAWebHatchJsonReaders").readNonEmptyString(e, "user_id");
      return (n != null && (t.scope = n), r != null && (t.user_id = r), t);
    }
    function g(e, t) {
      var n,
        r,
        a,
        i =
          (n = o("WAWebHatchJsonReaders").readString(e, "authorization_url")) !=
          null
            ? n
            : "",
        l =
          (r = o("WAWebHatchJsonReaders").readString(e, "token_url")) != null
            ? r
            : "",
        s = o("WAWebHatchJsonReaders").readNonEmptyString(e, "revoke_url"),
        u =
          (a = o("WAWebHatchJsonReaders").readString(e, "redirect_uri")) != null
            ? a
            : "",
        c = [t, o("WAWebHatchCustomOAuthUrls").hatchUrlHost(i)],
        d = function (n) {
          return (
            o("WAWebHatchCustomOAuthUrls").isHatchOAuthUrlAtIssuer(n, t) &&
            c.includes(o("WAWebHatchCustomOAuthUrls").hatchUrlHost(n))
          );
        };
      return !o("WAWebHatchCustomOAuthUrls").isHatchOAuthUrlAtIssuer(i, t) ||
        !d(l) ||
        (s != null && !d(s)) ||
        !o("WAWebHatchOAuthCallbackUrl").isHatchOAuthRedirectUri(u)
        ? null
        : babelHelpers.extends(
            { authorization_url: i, redirect_uri: u },
            s == null ? {} : { revoke_url: s },
            { token_url: l },
          );
    }
    function h(e) {
      var t = o("WAWebHatchJsonReaders").readNonEmptyString(
        e,
        "token_endpoint_auth_method",
      );
      return t == null
        ? s
        : u.find(function (e) {
            return e === t;
          });
    }
    ((l.decodeHatchCustomOAuthConnectorRequest = c),
      (l.decodeHatchCustomOAuthConnectorSpec = d),
      (l.customOAuthConnectorRegisterBody = m),
      (l.isSafeHatchCustomOAuthAuthorizeUrl = p));
  },
  98,
);
