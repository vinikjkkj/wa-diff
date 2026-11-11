__d(
  "WAWebCanonicalHatchLinkedStatusGetQuery",
  [
    "WAPromiseTimeout",
    "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
    "WAWebCanonicalUtils",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebHatchLinkedStatusFetchFailure",
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
            l = o("WAWebCanonicalUtils").isCanonicalPresent(),
            c = yield o("WAPromiseTimeout")
              .promiseTimeout(
                o("WAWebRelayClient").fetchQuery(
                  u,
                  {},
                  { environmentType: "whatsapp_web" },
                ),
                s,
                "hatch linked status query timed out",
              )
              .catch(function (e) {
                return _(e, l);
              }),
            d =
              c == null || (e = c.wa_genai_hatch_channel_metadata) == null
                ? void 0
                : e.linked_status;
          return d == null
            ? null
            : {
                hasChannel: (t = d.has_channel) != null ? t : !1,
                isPaired: (n = d.is_paired) != null ? n : !1,
                status: (r = d.status) != null ? r : null,
                channelFbid: (a = d.channel_fbid) != null ? a : null,
                isChannelAbsent: d.has_channel === !1,
                vmType: m(d),
                vmState: p((i = d.vm_info) == null ? void 0 : i.vm_state),
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
    function _(e, t) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var n =
          "hatch linked status query failed: " +
          o("WAWebGraphQLServerError").formatGraphQLServerError(e);
        throw f(e)
          ? new (o(
              "WAWebHatchLinkedStatusFetchFailure",
            ).HatchLinkedStatusUnauthorizedError)(n, t)
          : r("err")(n);
      }
      throw e;
    }
    function f(e) {
      return e.source.errors.some(function (e) {
        var t = e.code;
        return (
          t ===
          o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
        );
      });
    }
    l.fetchHatchLinkedStatus = c;
  },
  98,
);
