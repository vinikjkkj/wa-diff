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
            ),
            i =
              a == null || (e = a.wa_genai_hatch_channel_metadata) == null
                ? void 0
                : e.identity;
          return {
            name: (t = i == null ? void 0 : i.name) != null ? t : null,
            avatarUrl:
              (n =
                i == null || (r = i.avatar) == null ? void 0 : r.image_url) !=
              null
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
