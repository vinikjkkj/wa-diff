__d(
  "WAWebNewsletterGetStatusesQuery",
  [
    "invariant",
    "WASmaxNewslettersGetNewsletterStatusesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 100;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.afterServerId,
            a = t.beforeServerId,
            i = t.count,
            l = t.newsletterJid,
            u = t.viewRole;
          return (
            !(r != null && a != null) || s(0, 145243),
            o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(l),
            o("WAWebNewsletterRpcUtils").runWithBackoff(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t;
                r != null
                  ? (t = { statusAfterMixin: { statusesAfter: r } })
                  : a != null &&
                    (t = { statusBeforeMixin: { statusesBefore: a } });
                var n = yield o(
                  "WASmaxNewslettersGetNewsletterStatusesRPC",
                ).sendGetNewsletterStatusesRPC({
                  queryNewsletterParamsMixinArgs: {
                    queryNewsletterParamsArgs: {
                      queryNewsletterJIDParams: { anyJid: l, anyViewRole: u },
                    },
                  },
                  newsletterStatusRequestPayloadMixinArgs: {
                    statusesCount: Math.min(i != null ? i : e, e),
                    statusDirectionsArgs: t,
                  },
                });
                switch (n.name) {
                  case "GetNewsletterStatusesResponseSuccess": {
                    var s =
                      n.value.statusesNewsletterStatusResponsePayloadMixin;
                    return s.status;
                  }
                  case "GetNewsletterStatusesResponseClientError": {
                    var c = n.value.getNewsletterStatusesClientErrors;
                    switch (c.name) {
                      case "ItemNotFoundIQErrorResponse": {
                        var d = c.value.errorIQErrorItemNotFoundMixin,
                          m = d.code,
                          p = d.text;
                        throw new (o(
                          "WAWebBackendErrors",
                        ).ServerStatusCodeError)(m, p);
                      }
                      case "RateLimitedIQErrorResponse": {
                        var _ = c.value.errorIQErrorRateOverlimitMixin,
                          f = _.code,
                          g = _.text;
                        throw new (o(
                          "WAWebBackendErrors",
                        ).ServerStatusCodeError)(f, g);
                      }
                      case "BadRequestIQErrorResponse": {
                        var h = c.value.errorIQErrorBadRequestMixin,
                          y = h.code,
                          C = h.text;
                        throw new (o(
                          "WAWebBackendErrors",
                        ).ServerStatusCodeError)(y, C);
                      }
                      case "SuspendedIQErrorResponse": {
                        var b = c.value.errorIQErrorLockedMixin,
                          v = b.code,
                          S = b.text;
                        throw new (o(
                          "WAWebBackendErrors",
                        ).ServerStatusCodeError)(v, S);
                      }
                      case "UnavailableForLegalReasonsResponse": {
                        var R =
                            c.value
                              .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                          L = R.code,
                          E = R.text;
                        throw new (o(
                          "WAWebBackendErrors",
                        ).ServerStatusCodeError)(L, E);
                      }
                      case "NotAllowedIQErrorResponse": {
                        var k = c.value.errorIQErrorNotAllowedMixin,
                          I = k.code,
                          T = k.text;
                        throw new (o(
                          "WAWebBackendErrors",
                        ).ServerStatusCodeError)(I, T);
                      }
                    }
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      0,
                      "Unhandled client error: " + c.name,
                    );
                  }
                  case "GetNewsletterStatusesResponseServerError": {
                    var D = n.value.errorIQErrorInternalServerErrorMixin,
                      x = D.code,
                      $ = D.text;
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(x),
                      $,
                    );
                  }
                }
              }),
            )
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.queryNewsletterStatuses = u;
  },
  98,
);
