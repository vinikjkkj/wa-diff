__d(
  "WAWebNewsletterGetMessageUpdatesQuery",
  [
    "Promise",
    "WANullthrows",
    "WASmaxNewslettersGetNewsletterMessageUpdatesRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return u(e, t);
      });
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = r.count,
            i = r.cursor,
            l = r.since,
            s = yield o(
              "WASmaxNewslettersGetNewsletterMessageUpdatesRPC",
            ).sendGetNewsletterMessageUpdatesRPC({
              iqTo: t,
              messageUpdatesCount: a,
              messageUpdatesSince: l,
              messageUpdatesBeforeOrAfterMixinMixinGroupArgs: d(i),
            });
          switch (s.name) {
            case "GetNewsletterMessageUpdatesResponseSuccess": {
              var u,
                c =
                  s.value
                    .messageUpdatesMessagesNewsletterMessageResponsePayloadMixin;
              return {
                updates: c.message,
                timestamp: (u = c.t) != null ? u : o("WATimeUtils").unixTime(),
              };
            }
            case "GetNewsletterMessageUpdatesResponseServerError": {
              var m = s.value.errorIQErrorInternalServerErrorMixin,
                p = m.code,
                _ = m.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(p),
                _,
              );
            }
            case "GetNewsletterMessageUpdatesResponseClientError": {
              var f = s.value.getNewsletterMessageUpdatesClientErrors;
              switch (f.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var g = f.value.errorIQErrorItemNotFoundMixin,
                    h = g.code,
                    y = g.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(h),
                      y,
                    ),
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var C = f.value.errorIQErrorRateOverlimitMixin,
                    b = C.code,
                    v = C.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(b),
                      v,
                    ),
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var S = f.value.errorIQErrorBadRequestMixin,
                    R = S.code,
                    L = S.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(R),
                      L,
                    ),
                  );
                }
                case "SuspendedIQErrorResponse": {
                  var E = f.value.errorIQErrorLockedMixin,
                    k = E.code,
                    I = E.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(k),
                      I,
                    ),
                  );
                }
                case "UnavailableForLegalReasonsResponse": {
                  var T =
                      f.value
                        .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                    D = T.code,
                    x = T.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(D),
                      x,
                    ),
                  );
                }
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return e.after != null
        ? { messageUpdatesAfterMixin: { messageUpdatesAfter: e.after } }
        : {
            messageUpdatesBeforeMixin: {
              messageUpdatesBefore: r("WANullthrows")(e.before),
            },
          };
    }
    l.getNewsletterMessageUpdatesQuery = s;
  },
  98,
);
