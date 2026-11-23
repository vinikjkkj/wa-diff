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
      var e = await c();
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
    }
    async function c() {
      try {
        var e,
          t = await o("WAWebRelayClient").fetchQuery(
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
        return d(e) ? "rejected" : "error";
      }
    }
    function d(e) {
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
    ((l.fetchCanonicalUserValid = u), (l.fetchCanonicalUserValidity = c));
  },
  98,
);
