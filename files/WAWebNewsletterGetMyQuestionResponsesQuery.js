__d(
  "WAWebNewsletterGetMyQuestionResponsesQuery",
  [
    "Promise",
    "WASmaxNewslettersGetMyNewsletterResponsesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return u(e);
      });
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.myQuestionResponsesServerId,
            a = t.newsletterJid,
            i = yield o(
              "WASmaxNewslettersGetMyNewsletterResponsesRPC",
            ).sendGetMyNewsletterResponsesRPC({
              iqTo: a,
              myQuestionResponsesServerId: r,
            });
          switch (i.name) {
            case "GetMyNewsletterResponsesResponseSuccess":
              return i.value;
            case "GetMyNewsletterResponsesResponseServerError": {
              var l = i.value.errorIQErrorInternalServerErrorMixin,
                s = l.code,
                u = l.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(s),
                u,
              );
            }
            case "GetMyNewsletterResponsesResponseClientError": {
              var c = i.value.getNewsletterResponsesClientErrors;
              switch (c.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var d = c.value.errorIQErrorItemNotFoundMixin,
                    m = d.code,
                    p = d.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(m),
                      p,
                    ),
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var _ = c.value.errorIQErrorRateOverlimitMixin,
                    f = _.code,
                    g = _.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(f),
                      g,
                    ),
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var h = c.value.errorIQErrorBadRequestMixin,
                    y = h.code,
                    C = h.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(y),
                      C,
                    ),
                  );
                }
                case "SuspendedIQErrorResponse": {
                  var b = c.value.errorIQErrorLockedMixin,
                    v = b.code,
                    S = b.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(v),
                      S,
                    ),
                  );
                }
                case "NotAllowedIQErrorResponse": {
                  var R = c.value.errorIQErrorNotAllowedMixin,
                    L = R.code,
                    E = R.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(L),
                      E,
                    ),
                  );
                }
                case "UnauthorizedIQErrorResponse": {
                  var k = c.value.errorIQErrorNotAuthorizedMixin,
                    I = k.code,
                    T = k.text;
                  return (e || (e = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      Number(I),
                      T,
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
    l.getMyQuestionResponsesQuery = s;
  },
  98,
);
