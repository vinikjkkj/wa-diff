__d(
  "WAWebNewsletterGetMyQuestionResponsesQuery",
  [
    "WASmaxNewslettersGetMyNewsletterResponsesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return s(e);
      });
    }
    async function s(e) {
      var t = e.myQuestionResponsesServerId,
        n = e.newsletterJid,
        r = await o(
          "WASmaxNewslettersGetMyNewsletterResponsesRPC",
        ).sendGetMyNewsletterResponsesRPC({
          iqTo: n,
          myQuestionResponsesServerId: t,
        });
      switch (r.name) {
        case "GetMyNewsletterResponsesResponseSuccess":
          return r.value;
        case "GetMyNewsletterResponsesResponseServerError": {
          var a = r.value.errorIQErrorInternalServerErrorMixin,
            i = a.code,
            l = a.text;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            Number(i),
            l,
          );
        }
        case "GetMyNewsletterResponsesResponseClientError": {
          var s = r.value.getNewsletterResponsesClientErrors;
          switch (s.name) {
            case "ItemNotFoundIQErrorResponse": {
              var u = s.value.errorIQErrorItemNotFoundMixin,
                c = u.code,
                d = u.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(c),
                  d,
                ),
              );
            }
            case "RateLimitedIQErrorResponse": {
              var m = s.value.errorIQErrorRateOverlimitMixin,
                p = m.code,
                _ = m.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(p),
                  _,
                ),
              );
            }
            case "BadRequestIQErrorResponse": {
              var f = s.value.errorIQErrorBadRequestMixin,
                g = f.code,
                h = f.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(g),
                  h,
                ),
              );
            }
            case "SuspendedIQErrorResponse": {
              var y = s.value.errorIQErrorLockedMixin,
                C = y.code,
                b = y.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(C),
                  b,
                ),
              );
            }
            case "NotAllowedIQErrorResponse": {
              var v = s.value.errorIQErrorNotAllowedMixin,
                S = v.code,
                R = v.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(S),
                  R,
                ),
              );
            }
            case "UnauthorizedIQErrorResponse": {
              var L = s.value.errorIQErrorNotAuthorizedMixin,
                E = L.code,
                k = L.text;
              return Promise.reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(E),
                  k,
                ),
              );
            }
          }
        }
      }
    }
    l.getMyQuestionResponsesQuery = e;
  },
  98,
);
