__d(
  "WAWebWAAOnboarding",
  [
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "WAWebWAAOnboardingMutation.graphql",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var a = e !== void 0 ? e : (e = n("WAWebWAAOnboardingMutation.graphql")),
        i = await o("WAWebFetchAdAccountToken").fetchToken();
      if (i.type === "success") {
        var l,
          s = await o("WAWebRelayClient").commitMutation(
            a,
            {
              input: {
                flow_id: t,
                request_id: new Date().getTime().toString(),
              },
            },
            { accessToken: i.token, environmentType: "facebook" },
          ),
          u = r("nullthrows")(
            s == null || (l = s.create_or_onboard_wa_ad_account) == null
              ? void 0
              : l.ad_account_id,
          );
        return u;
      }
      throw r("err")("Failed create WhatsApp Ad account");
    }
    l.default = s;
  },
  98,
);
