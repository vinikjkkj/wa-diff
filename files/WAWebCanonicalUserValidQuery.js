__d(
  "WAWebCanonicalUserValidQuery",
  [
    "WAWebCanonicalUserValidQuery.graphql",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebCanonicalUserValidQuery.graphql"));
    async function u() {
      try {
        var e,
          t = await o("WAWebRelayClient").fetchQuery(
            s,
            {},
            { environmentType: "whatsapp_web" },
          );
        return (t == null || (e = t.xwa_canonical_user_valid) == null
          ? void 0
          : e.success) === !0
          ? "valid"
          : "invalid";
      } catch (e) {
        if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
          var n = e.source.errors.some(function (e) {
            return (
              e.code ===
              o("WAWebGraphQLConstants")
                .WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
            );
          });
          if (n) return "invalid";
        }
        return "error";
      }
    }
    l.fetchCanonicalUserValid = u;
  },
  98,
);
