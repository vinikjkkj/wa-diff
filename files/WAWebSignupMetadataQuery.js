__d(
  "WAWebSignupMetadataQuery",
  [
    "WAWebGraphQLConstants",
    "WAWebRelayClient",
    "WAWebSignupMetadataQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebSignupMetadataQuery.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebRelayClient").fetchQuery(
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
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchSignupMetadataGraphQL = u;
  },
  98,
);
