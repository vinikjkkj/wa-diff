__d(
  "WAWebCanonicalHatchCommandGetQuery",
  [
    "WAWebCanonicalHatchCommandGetQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchCommandGetQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web" },
            ),
            t = e == null ? void 0 : e.wa_genai_hatch_command_get;
          return t == null
            ? []
            : t
                .filter(function (e) {
                  return e.id != null && e.name != null && e.prompt != null;
                })
                .map(function (e) {
                  var t, n, r, o;
                  return {
                    id: (t = e.id) != null ? t : "",
                    name: (n = e.name) != null ? n : "",
                    description: (r = e.description) != null ? r : "",
                    prompt: (o = e.prompt) != null ? o : "",
                  };
                });
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchHatchCommandGet = u;
  },
  98,
);
