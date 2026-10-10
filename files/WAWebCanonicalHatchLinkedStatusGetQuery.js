__d(
  "WAWebCanonicalHatchLinkedStatusGetQuery",
  [
    "WAPromiseTimeout",
    "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32e3,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchLinkedStatusGetQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            r,
            a,
            i = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebRelayClient").fetchQuery(
                  u,
                  {},
                  { environmentType: "whatsapp_web" },
                ),
                s,
                "hatch linked status query timed out",
              )
              .catch(m),
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      throw e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? r("err")(
            "hatch linked status query failed: " +
              o("WAWebGraphQLServerError").formatGraphQLServerError(e),
          )
        : e;
    }
    l.fetchHatchLinkedStatus = c;
  },
  98,
);
