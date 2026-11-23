__d(
  "WAWebCanonicalHatchCommandGetQuery",
  ["WAWebCanonicalHatchCommandGetQuery.graphql", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchCommandGetQuery.graphql"));
    async function u() {
      var e = await o("WAWebRelayClient").fetchQuery(
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
    }
    l.fetchHatchCommandGet = u;
  },
  98,
);
