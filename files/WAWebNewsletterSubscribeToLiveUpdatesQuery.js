__d(
  "WAWebNewsletterSubscribeToLiveUpdatesQuery",
  [
    "WASmaxNewslettersSubscribeToLiveUpdatesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return s(e);
      });
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WASmaxNewslettersSubscribeToLiveUpdatesRPC",
          ).sendSubscribeToLiveUpdatesRPC({ iqTo: e });
          switch (t.name) {
            case "SubscribeToLiveUpdatesResponseSuccess":
              return { duration: t.value.liveUpdatesDuration * 1e3 };
            case "SubscribeToLiveUpdatesResponseServerError": {
              var n = t.value.errorIQErrorInternalServerErrorMixin,
                r = n.code,
                a = n.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(r, a);
            }
            case "SubscribeToLiveUpdatesResponseClientError": {
              var i = t.value.subscribeToLiveUpdatesClientErrors;
              switch (i.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var l = i.value.errorIQErrorItemNotFoundMixin,
                    s = l.code,
                    u = l.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    s,
                    u,
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var c = i.value.errorIQErrorRateOverlimitMixin,
                    d = c.code,
                    m = c.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    d,
                    m,
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var p = i.value.errorIQErrorBadRequestMixin,
                    _ = p.code,
                    f = p.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    _,
                    f,
                  );
                }
                case "SuspendedIQErrorResponse": {
                  var g = i.value.errorIQErrorLockedMixin,
                    h = g.code,
                    y = g.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    h,
                    y,
                  );
                }
                case "UnavailableForLegalReasonsResponse": {
                  var C =
                      i.value
                        .errorIQErrorUnavailableForLegalReasonsGenericMixin,
                    b = C.code,
                    v = C.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    b,
                    v,
                  );
                }
              }
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.subscribeToLiveUpdatesQuery = e;
  },
  98,
);
