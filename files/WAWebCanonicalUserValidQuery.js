__d(
  "WAWebCanonicalUserValidQuery",
  [
    "WAWebCanonicalUserValidQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1675002,
      u = e !== void 0 ? e : (e = n("WAWebCanonicalUserValidQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t = yield o("WAWebRelayClient").fetchQuery(
                u,
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
                return e.code === s;
              });
              if (n) return "invalid";
            }
            return "error";
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchCanonicalUserValid = c;
  },
  98,
);
