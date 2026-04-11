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
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
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
                  var l = yield o(
                    "WASmaxNewslettersGetNewsletterStatusesRPC",
                  ).sendGetNewsletterStatusesRPC({
                    queryNewsletterParamsMixinArgs: {
                      queryNewsletterParamsArgs: {
                        queryNewsletterJIDParams: { anyJid: t, anyViewRole: r },
                      },
                    },
                    newsletterStatusRequestPayloadMixinArgs: {
                      statusesCount: e,
                      statusDirectionsArgs: n,
                    },
                  });
                  switch (l.name) {
                    case "GetNewsletterStatusesResponseSuccess": {
                      var s =
                        l.value.statusesNewsletterStatusResponsePayloadMixin;
                      return s.status;
                    }
                    case "GetNewsletterStatusesResponseClientError": {
                      var u = l.value.getNewsletterStatusesClientErrors;
                      switch (u.name) {
                        case "ItemNotFoundIQErrorResponse": {
                          var c = u.value.errorIQErrorItemNotFoundMixin,
                            d = c.code,
                            m = c.text;
                          throw new (o(
                            "WAWebBackendErrors",
                          ).ServerStatusCodeError)(d, m);
                        }
                        case "RateLimitedIQErrorResponse": {
                          var p = u.value.errorIQErrorRateOverlimitMixin,
                            _ = p.code,
                            f = p.text;
                          throw new (o(
                            "WAWebBackendErrors",
                          ).ServerStatusCodeError)(_, f);
                        }
                        case "BadRequestIQErrorResponse": {
                          var g = u.value.errorIQErrorBadRequestMixin,
                            h = g.code,
                            y = g.text;
                          throw new (o(
                            "WAWebBackendErrors",
                          ).ServerStatusCodeError)(h, y);
                        }
                        case "SuspendedIQErrorResponse": {
                          var C = u.value.errorIQErrorLockedMixin,
                            b = C.code,
                            v = C.text;
                          throw new (o(
                            "WAWebBackendErrors",
                          ).ServerStatusCodeError)(b, v);
                        }
                        case "UnavailableForLegalReasonsResponse": {
                          var S =
                              u.value
                                .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                            R = S.code,
                            L = S.text;
                          throw new (o(
                            "WAWebBackendErrors",
                          ).ServerStatusCodeError)(R, L);
                        }
                        case "NotAllowedIQErrorResponse": {
                          var E = u.value.errorIQErrorNotAllowedMixin,
                            k = E.code,
                            I = E.text;
                          throw new (o(
                            "WAWebBackendErrors",
                          ).ServerStatusCodeError)(k, I);
                        }
                      }
                      throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                        0,
                        "Unhandled client error: " + u.name,
                      );
                    }
                    case "GetNewsletterStatusesResponseServerError": {
                      var T = l.value.errorIQErrorInternalServerErrorMixin,
                        D = T.code,
                        x = T.text;
                      throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                        Number(D),
                        x,
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
