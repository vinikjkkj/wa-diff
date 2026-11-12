__d(
  "WAWebCanonicalHatchLinkedStatusGetQuery",
  [
    "Promise",
    "WACustomError",
    "WAPromiseTimeout",
    "WAWebCanonicalHatchLinkedStatusGetQuery.graphql",
    "WAWebCanonicalUtils",
    "WAWebGraphQLConstants",
    "WAWebGraphQLServerError",
    "WAWebHatchLinkedStatusFetchFailure",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 32e3,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebCanonicalHatchLinkedStatusGetQuery.graphql"));
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            r,
            a,
            i,
            l = o("WAWebCanonicalUtils").isCanonicalPresent(),
            s = _(),
            c = yield o("WAPromiseTimeout")
              .promiseTimeout(
                s.response,
                u,
                "hatch linked status query timed out",
              )
              .finally(s.cancel)
              .catch(function (e) {
                return h(e, l);
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
                vmType: f(d),
                vmState: g((i = d.vm_info) == null ? void 0 : i.vm_state),
              };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
    function _() {
      var e = !1,
        t = null,
        r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var r = yield o("WAWebRelayEnvironment").requireRelayRuntime(),
            a = r.fetchQuery,
            i = yield o("WAWebRelayEnvironment").getEnvironment({
              environmentType: "whatsapp_web",
            });
          return new (s || (s = n("Promise")))(function (n, r) {
            if (e) {
              n(null);
              return;
            }
            t = a(i, c, {}).subscribe({
              next: n,
              error: r,
              complete: function () {
                return n(null);
              },
            });
          });
        })();
      return {
        response: r,
        cancel: function () {
          var n;
          ((e = !0), (n = t) == null || n.unsubscribe());
        },
      };
    }
    function f(e) {
      var t;
      if (e.has_channel !== !0 || e.status == null || e.is_paired == null)
        return null;
      var n = (t = e.vm_info) == null ? void 0 : t.vm_type;
      return n === "CVM" || n === "SVM" ? n : null;
    }
    function g(e) {
      return e === "ACTIVE" || e === "TRANSFERRING" ? e : null;
    }
    function h(e, t) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var n =
          "hatch linked status query failed: " +
          o("WAWebGraphQLServerError").formatGraphQLServerError(e);
        if (y(e))
          throw new (o(
            "WAWebHatchLinkedStatusFetchFailure",
          ).HatchLinkedStatusUnauthorizedError)(n, t);
        var r = new (o("WAWebGraphQLServerError").GraphQLServerError)(e.source);
        throw ((r.message = n), r);
      }
      throw e;
    }
    function y(e) {
      return e.source.errors.some(function (e) {
        var t = e.code;
        return (
          t ===
          o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE
        );
      });
    }
    ((l.fetchHatchLinkedStatus = d), (l.isRetryableHatchLinkedStatusError = p));
  },
  98,
);
