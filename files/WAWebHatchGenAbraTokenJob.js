__d(
  "WAWebHatchGenAbraTokenJob",
  [
    "WAWebGraphQLServerError",
    "WAWebHatchGenAbraTokenJobMutation.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0 ? e : (e = n("WAWebHatchGenAbraTokenJobMutation.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, n, r;
          try {
            r = yield o("WAWebRelayClient").commitMutation(
              s,
              {},
              { environmentType: "whatsapp_web" },
            );
          } catch (e) {
            return { detail: d(e), kind: "failure" };
          }
          var a = (e = r) == null ? void 0 : e.wa_hatch_gen_abra_access_token,
            i = a == null ? void 0 : a.access_token;
          return (a == null ? void 0 : a.success) === !0 &&
            i != null &&
            i !== ""
            ? { kind: "ok", token: i }
            : {
                detail:
                  (t =
                    (n = m(a == null ? void 0 : a.error_code)) != null
                      ? n
                      : m(a == null ? void 0 : a.error_message)) != null
                    ? t
                    : "mint returned nothing",
                kind: "failure",
              };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t, n;
        return (
          "HTTP " +
          ((t = (n = e.source) == null ? void 0 : n.httpStatus) != null
            ? t
            : "?") +
          " " +
          o("WAWebGraphQLServerError").formatGraphQLServerError(e)
        );
      }
      return r("getErrorSafe")(e).message;
    }
    function m(e) {
      return e === "" ? null : e;
    }
    l.genHatchAbraToken = u;
  },
  98,
);
