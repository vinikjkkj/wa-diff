__d(
  "WAWebGetAccountNonce",
  [
    "WAWebGetAccountNonceMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i =
              e !== void 0
                ? e
                : (e = n("WAWebGetAccountNonceMutation.graphql")),
            l = yield o("WAWebRelayClient").commitMutation(
              i,
              { input: { identifier: { scope: "REQUEST" } } },
              { accessToken: t.token, environmentType: "facebook" },
            );
          return r("nullthrows")(
            l == null ||
              (a = l.xfb_wa_biz_account_nonce) == null ||
              (a = a.detail) == null
              ? void 0
              : a.nonce,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
