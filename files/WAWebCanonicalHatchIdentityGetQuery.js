__d(
  "WAWebCanonicalHatchIdentityGetQuery",
  [
    "WAWebCanonicalHatchIdentityGetQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchIdentityGetQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            r,
            a = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web" },
            );
          return {
            name:
              (e =
                a == null || (t = a.wa_genai_hatch_identity_get) == null
                  ? void 0
                  : t.name) != null
                ? e
                : null,
            avatarUrl:
              (n =
                a == null ||
                (r = a.wa_genai_hatch_identity_get) == null ||
                (r = r.avatar) == null
                  ? void 0
                  : r.image_url) != null
                ? n
                : null,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchHatchIdentityGet = u;
  },
  98,
);
