__d(
  "WAWebGetAccessTokenFromOIDCCode",
  [
    "WAWebFetchAdAccountToken",
    "WAWebGetAccessTokenFromOIDCCodeMutation.graphql",
    "WAWebRelayClient",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, a) {
      var i =
          e !== void 0
            ? e
            : (e = n("WAWebGetAccessTokenFromOIDCCodeMutation.graphql")),
        l = await o("WAWebFetchAdAccountToken").fetchToken();
      if (l.type === "success") {
        var s,
          u,
          c = await o("WAWebRelayClient").commitMutation(
            i,
            { code: t, state: a },
            { accessToken: l.token, environmentType: "facebook" },
          ),
          d = r("nullthrows")(
            c == null || (s = c.xfb_wa_biz_get_token_from_oidc_code) == null
              ? void 0
              : s.access_token,
          ),
          m = r("nullthrows")(
            c == null || (u = c.xfb_wa_biz_get_token_from_oidc_code) == null
              ? void 0
              : u.fb_user_id,
          );
        return { bp_id: m, token: d, type: "FB" };
      }
      throw r("err")("Failed to fetch token");
    }
    l.default = s;
  },
  98,
);
