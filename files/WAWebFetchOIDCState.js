__d(
  "WAWebFetchOIDCState",
  [
    "WANullthrows",
    "WAWebFetchAdAccountToken",
    "WAWebFetchOIDCStateQuery.graphql",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var t = e !== void 0 ? e : (e = n("WAWebFetchOIDCStateQuery.graphql")),
        a = await o("WAWebFetchAdAccountToken").fetchToken(),
        i = await o("WAWebRelayClient").fetchQuery(
          t,
          {},
          { accessToken: a.token, environmentType: "facebook" },
        );
      return r("WANullthrows")(
        i == null ? void 0 : i.xfb_wa_biz_get_oidc_state,
      );
    }
    l.default = s;
  },
  98,
);
