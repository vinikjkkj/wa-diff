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
          var e = yield d();
          return e === "valid"
            ? "valid"
            : e === "rejected" || e === "incomplete"
              ? "invalid"
              : e === "error"
                ? "error"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t = yield o("WAWebRelayClient").fetchQuery(
                s,
                {},
                { environmentType: "whatsapp_web" },
              );
            return (function (e) {
              return e === !0 ? "valid" : e === !1 ? "rejected" : "incomplete";
            })(
              t == null || (e = t.xwa_canonical_user_valid) == null
                ? void 0
                : e.success,
            );
          } catch (e) {
            return p(e) ? "rejected" : "error";
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return (
        e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
        e.source.errors.some(function (e) {
          return (
            e.code ===
            o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
          );
        })
      );
    }
    ((l.fetchCanonicalUserValid = u), (l.fetchCanonicalUserValidity = d));
  },
  98,
);
