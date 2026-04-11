__d(
  "WAWebCanonicalHatchAgentStatusGetQuery",
  [
    "WAWebCanonicalHatchAgentStatusGetQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchAgentStatusGetQuery.graphql"));
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            r = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web" },
            ),
            a =
              r == null || (e = r.wa_genai_hatch_channel_metadata) == null
                ? void 0
                : e.agent_status;
          return a == null
            ? null
            : {
                activityCode: (t = a.activity_code) != null ? t : "",
                activityText: (n = a.activity_text) != null ? n : "",
              };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchHatchAgentStatus = u;
  },
  98,
);
