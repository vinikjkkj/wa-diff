__d(
  "WAWebCanonicalHatchLinkedStatusGetQuery",
  [
    "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchLinkedStatusGetQuery.graphql"));
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
            a,
            i = yield o("WAWebRelayClient").fetchQuery(
              s,
              {},
              { environmentType: "whatsapp_web" },
            ),
            l =
              i == null || (e = i.wa_genai_hatch_channel_metadata) == null
                ? void 0
                : e.linked_status;
          return l == null
            ? null
            : {
                hasChannel: (t = l.has_channel) != null ? t : !1,
                isPaired: (n = l.is_paired) != null ? n : !1,
                status: (r = l.status) != null ? r : null,
                channelFbid: (a = l.channel_fbid) != null ? a : null,
              };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchHatchLinkedStatus = u;
  },
  98,
);
