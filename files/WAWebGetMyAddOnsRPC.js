__d(
  "WAWebGetMyAddOnsRPC",
  [
    "WASmaxNewslettersMyAddOnsRPC",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.count,
            n = e.newsletterJid,
            r = yield o("WASmaxNewslettersMyAddOnsRPC").sendMyAddOnsRPC({
              myAddonsLimit: t,
              myAddonsJid: n,
            });
          switch (r.name) {
            case "MyAddOnsResponseSuccess":
              return { messagesByNewsletter: r.value.myAddonsMessages };
            case "MyAddOnsResponseServerError": {
              var a = r.value.errorIQErrorInternalServerErrorMixin,
                i = a.code,
                l = a.text;
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                Number(i),
                l,
              );
            }
            case "MyAddOnsResponseClientError": {
              var s = r.value.myAddonsClientErrors;
              switch (s.name) {
                case "ItemNotFoundIQErrorResponse": {
                  var u = s.value.errorIQErrorItemNotFoundMixin,
                    c = u.code,
                    d = u.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(c),
                    d,
                  );
                }
                case "RateLimitedIQErrorResponse": {
                  var m = s.value.errorIQErrorRateOverlimitMixin,
                    p = m.code,
                    _ = m.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(p),
                    _,
                  );
                }
                case "BadRequestIQErrorResponse": {
                  var f = s.value.errorIQErrorBadRequestMixin,
                    g = f.code,
                    h = f.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(g),
                    h,
                  );
                }
                case "UnauthorizedIQErrorResponse": {
                  var y = s.value.errorIQErrorNotAuthorizedMixin,
                    C = y.code,
                    b = y.text;
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    Number(C),
                    b,
                  );
                }
              }
            }
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.getMyNewsletterAddOnsRPC = e;
  },
  98,
);
