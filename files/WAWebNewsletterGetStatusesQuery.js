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
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l) {
            return (
              !(a != null && i != null) || s(0, 145243),
              o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
                t,
              ),
              o("WAWebNewsletterRpcUtils").runWithBackoff(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n;
                  a != null
                    ? (n = { statusAfterMixin: { statusesAfter: a } })
                    : i != null &&
                      (n = { statusBeforeMixin: { statusesBefore: i } });
                  var s = yield o(
                    "WASmaxNewslettersGetNewsletterStatusesRPC",
                  ).sendGetNewsletterStatusesRPC({
                    queryNewsletterParamsMixinArgs: {
                      queryNewsletterParamsArgs: {
                        queryNewsletterJIDParams: { anyJid: t, anyViewRole: r },
                      },
                    },
                    newsletterStatusRequestPayloadMixinArgs: {
                      statusesCount: Math.min(l != null ? l : e, e),
                      statusDirectionsArgs: n,
                    },
                  });
                  switch (s.name) {
                    case "GetNewsletterStatusesResponseSuccess": {
                      var u =
                        s.value.statusesNewsletterStatusResponsePayloadMixin;
                      return u.status;
                    }
                    case "GetNewsletterStatusesResponseClientError": {
                      var c = s.value.getNewsletterStatusesClientErrors;
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
                      var D = s.value.errorIQErrorInternalServerErrorMixin,
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
          },
        )),
        c.apply(this, arguments)
      );
    }
    l.queryNewsletterStatuses = u;
  },
  98,
);
