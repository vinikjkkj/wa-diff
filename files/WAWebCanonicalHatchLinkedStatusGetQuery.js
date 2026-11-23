__d(
  "WAWebCanonicalHatchLinkedStatusGetQuery",
  [
    "WACustomError",
    "WAPromiseTimeout",
    "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
    "WAWebCanonicalUtils",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebHatchLinkedStatusFetchFailure",
    "WAWebRelayEnvironment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32e3,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchLinkedStatusGetQuery.graphql"));
    async function c() {
      var e,
        t,
        n,
        r,
        a,
        i,
        l = o("WAWebCanonicalUtils").isCanonicalPresent(),
        u = m(),
        c = await o("WAPromiseTimeout")
          .promiseTimeout(u.response, s, "hatch linked status query timed out")
          .finally(u.cancel)
          .catch(function (e) {
            return f(e, l);
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
            vmType: p(d),
            vmState: _((i = d.vm_info) == null ? void 0 : i.vm_state),
          };
    }
    function d(e) {
      if (e instanceof o("WACustomError").TimeoutError) return !0;
      if (!(e instanceof o("WAWebGraphQLServerError").GraphQLServerError))
        return !1;
      var t = e.source,
        n = t.errors,
        r = t.httpStatus;
      return (
        r != null &&
        r >= 500 &&
        r < 600 &&
        n.every(function (e) {
          var t = e.code;
          return t === r;
        })
      );
    }
    function m() {
      var e = !1,
        t = null,
        n = (async function () {
          var n = await o("WAWebRelayEnvironment").requireRelayRuntime(),
            r = n.fetchQuery,
            a = await o("WAWebRelayEnvironment").getEnvironment({
              environmentType: "whatsapp_web",
            });
          return new Promise(function (n, o) {
            if (e) {
              n(null);
              return;
            }
            t = r(a, u, {}).subscribe({
              next: n,
              error: o,
              complete: function () {
                return n(null);
              },
            });
          });
        })();
      return {
        response: n,
        cancel: function () {
          var n;
          ((e = !0), (n = t) == null || n.unsubscribe());
        },
      };
    }
    function p(e) {
      var t;
      if (e.has_channel !== !0 || e.status == null || e.is_paired == null)
        return null;
      var n = (t = e.vm_info) == null ? void 0 : t.vm_type;
      return n === "CVM" || n === "SVM" ? n : null;
    }
    function _(e) {
      return e === "ACTIVE" || e === "TRANSFERRING" ? e : null;
    }
    function f(e, t) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var n =
          "hatch linked status query failed: " +
          o("WAWebGraphQLServerError").formatGraphQLServerError(e);
        if (g(e))
          throw new (o(
            "WAWebHatchLinkedStatusFetchFailure",
          ).HatchLinkedStatusUnauthorizedError)(n, t);
        var r = new (o("WAWebGraphQLServerError").GraphQLServerError)(e.source);
        throw ((r.message = n), r);
      }
      throw e;
    }
    function g(e) {
      return e.source.errors.some(function (e) {
        var t = e.code;
        return (
          t ===
          o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
        );
      });
    }
    ((l.fetchHatchLinkedStatus = c), (l.isRetryableHatchLinkedStatusError = d));
  },
  98,
);
