__d(
  "WAWebNewsletterGetMessageUpdatesQuery",
  [
    "WANullthrows",
    "WASmaxNewslettersGetNewsletterMessageUpdatesRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return s(e, t);
      });
    }
    async function s(e, t) {
      var n = t.count,
        r = t.cursor,
        a = t.since,
        i = await o(
          "WASmaxNewslettersGetNewsletterMessageUpdatesRPC",
        ).sendGetNewsletterMessageUpdatesRPC({
          iqTo: e,
          messageUpdatesCount: n,
          messageUpdatesSince: a,
          messageUpdatesBeforeOrAfterMixinMixinGroupArgs: u(r),
        });
      switch (i.name) {
        case "GetNewsletterMessageUpdatesResponseSuccess": {
          var l,
            s =
              i.value
                .messageUpdatesMessagesNewsletterMessageResponsePayloadMixin;
          return {
            updates: s.message,
            timestamp: (l = s.t) != null ? l : o("WATimeUtils").unixTime(),
          };
        }
        case "GetNewsletterMessageUpdatesResponseServerError": {
          var c = i.value.errorIQErrorInternalServerErrorMixin,
            d = c.code,
            m = c.text;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            Number(d),
            m,
          );
        }
        case "GetNewsletterMessageUpdatesResponseClientError": {
          var p = i.value.getNewsletterMessageUpdatesClientErrors;
          switch (p.name) {
            case "ItemNotFoundIQErrorResponse": {
              var _ = p.value.errorIQErrorItemNotFoundMixin,
                f = _.code,
                g = _.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(f),
                  g,
                ),
              );
            }
            case "RateLimitedIQErrorResponse": {
              var h = p.value.errorIQErrorRateOverlimitMixin,
                y = h.code,
                C = h.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(y),
                  C,
                ),
              );
            }
            case "BadRequestIQErrorResponse": {
              var b = p.value.errorIQErrorBadRequestMixin,
                v = b.code,
                S = b.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(v),
                  S,
                ),
              );
            }
            case "SuspendedIQErrorResponse": {
              var R = p.value.errorIQErrorLockedMixin,
                L = R.code,
                E = R.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(L),
                  E,
                ),
              );
            }
            case "UnavailableForLegalReasonsResponse": {
              var k =
                  p.value.errorIQErrorUnavailableForLegalReasonsGenericMixin,
                I = k.code,
                T = k.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(I),
                  T,
                ),
              );
            }
          }
        }
      }
    }
    function u(e) {
      return e.after != null
        ? { messageUpdatesAfterMixin: { messageUpdatesAfter: e.after } }
        : {
            messageUpdatesBeforeMixin: {
              messageUpdatesBefore: r("WANullthrows")(e.before),
            },
          };
    }
    l.getNewsletterMessageUpdatesQuery = e;
  },
  98,
);
