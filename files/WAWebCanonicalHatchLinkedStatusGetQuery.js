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
            i,
            l = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebRelayClient").fetchQuery(
                  u,
                  {},
                  { environmentType: "whatsapp_web" },
                ),
                s,
                "hatch linked status query timed out",
              )
              .catch(_),
            c =
              l == null || (e = l.wa_genai_hatch_channel_metadata) == null
                ? void 0
                : e.linked_status;
          return c == null
            ? null
            : {
                hasChannel: (t = c.has_channel) != null ? t : !1,
                isPaired: (n = c.is_paired) != null ? n : !1,
                status: (r = c.status) != null ? r : null,
                channelFbid: (a = c.channel_fbid) != null ? a : null,
                isChannelAbsent: c.has_channel === !1,
                vmType: m(c),
                vmState: p((i = c.vm_info) == null ? void 0 : i.vm_state),
              };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t;
      if (e.has_channel !== !0 || e.status == null || e.is_paired == null)
        return null;
      var n = (t = e.vm_info) == null ? void 0 : t.vm_type;
      return n === "CVM" || n === "SVM" ? n : null;
    }
    function p(e) {
      return e === "ACTIVE" || e === "TRANSFERRING" ? e : null;
    }
    function _(e) {
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
