__d(
  "WAWebNewsletterGetStatusesQuery",
  [
    "invariant",
    "WASmaxNewslettersGetNewsletterStatusesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 100;
    async function u(t, n, r, a, i) {
      return (
        !(r != null && a != null) || s(0, 145243),
        o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(t),
        o("WAWebNewsletterRpcUtils").runWithBackoff(async function () {
          var l;
          r != null
            ? (l = { statusAfterMixin: { statusesAfter: r } })
            : a != null && (l = { statusBeforeMixin: { statusesBefore: a } });
          var s = await o(
            "WASmaxNewslettersGetNewsletterStatusesRPC",
          ).sendGetNewsletterStatusesRPC({
            queryNewsletterParamsMixinArgs: {
              queryNewsletterParamsArgs: {
                queryNewsletterJIDParams: { anyJid: t, anyViewRole: n },
              },
            },
            newsletterStatusRequestPayloadMixinArgs: {
              statusesCount: Math.min(i != null ? i : e, e),
              statusDirectionsArgs: l,
            },
          });
          switch (s.name) {
            case "GetNewsletterStatusesResponseSuccess": {
              var u = s.value.statusesNewsletterStatusResponsePayloadMixin;
              return u.status;
            }
            case "GetNewsletterStatusesResponseClientError": {
              var c = s.value.getNewsletterStatusesClientErrors;
              switch (c.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var d = c.value.errorIQErrorItemNotFoundMixin,
                    m = d.code,
                    p = d.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    m,
                    p,
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var _ = c.value.errorIQErrorRateOverlimitMixin,
                    f = _.code,
                    g = _.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    f,
                    g,
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var h = c.value.errorIQErrorBadRequestMixin,
                    y = h.code,
                    C = h.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    y,
                    C,
                  );
                }
                case "SuspendedIQErrorResponse": {
                  var b = c.value.errorIQErrorLockedMixin,
                    v = b.code,
                    S = b.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    v,
                    S,
                  );
                }
                case "UnavailableForLegalReasonsResponse": {
                  var R =
                      c.value
                        .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                    L = R.code,
                    E = R.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    L,
                    E,
                  );
                }
                case "NotAllowedIQErrorResponse": {
                  var k = c.value.errorIQErrorNotAllowedMixin,
                    I = k.code,
                    T = k.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    I,
                    T,
                  );
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
        })
      );
    }
    l.queryNewsletterStatuses = u;
  },
  98,
);
