__d(
  "WAWebCanonicalUserValidQuery",
  [
    "WAWebCanonicalUserValidQuery.graphql",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("WAWebCanonicalUserValidQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t = yield o("WAWebRelayClient").fetchQuery(
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
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchCanonicalUserValid = u;
  },
  98,
);
