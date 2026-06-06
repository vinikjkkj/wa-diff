__d(
  "WAWebGetAccountNonce",
  ["WAWebGetAccountNonceMutation.graphql", "WAWebRelayClient", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var a,
        i = e !== void 0 ? e : (e = n("WAWebGetAccountNonceMutation.graphql")),
        l = await o("WAWebRelayClient").commitMutation(
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
    }
    l.default = s;
  },
  98,
);
