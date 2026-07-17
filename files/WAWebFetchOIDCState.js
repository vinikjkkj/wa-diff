__d(
  "WAWebFetchOIDCState",
  [
    "WAWebFetchAdAccountToken",
    "WAWebFetchOIDCStateQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t =
              e !== void 0 ? e : (e = n("WAWebFetchOIDCStateQuery.graphql")),
            a = yield o("WAWebFetchAdAccountToken").fetchToken(),
            i = yield o("WAWebRelayClient").fetchQuery(
              t,
              {},
              { accessToken: a.token, environmentType: "facebook" },
            );
          return r("nullthrows")(
            i == null ? void 0 : i.xfb_wa_biz_get_oidc_state,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
