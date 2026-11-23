__d(
  "WAWebSignupMetadataQuery",
  [
    "WAWebGraphQLConstants",
    "WAWebRelayClient",
    "WAWebSignupMetadataQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebSignupMetadataQuery.graphql"));
    async function u(e, t) {
      var n = await o("WAWebRelayClient").fetchQuery(
          s,
          { signup_id: e, phone_number: t },
          {
            environmentType: "whatsapp_www",
            accessToken: o("WAWebGraphQLConstants")
              .WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN,
          },
        ),
        r = n == null ? void 0 : n.wa_signup_metadata;
      return r == null
        ? null
        : {
            id: r.id,
            signup_message: r.signup_message,
            privacy_policy_url: r.privacy_policy_url,
          };
    }
    l.fetchSignupMetadataGraphQL = u;
  },
  98,
);
