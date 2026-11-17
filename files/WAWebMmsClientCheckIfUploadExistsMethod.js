__d(
  "WAWebMmsClientCheckIfUploadExistsMethod",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientSelectHost",
    "WAWebMmsOperationsConst",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      return a;
      function a(e) {
        return i.apply(this, arguments);
      }
      function i() {
        return (
          (i = n("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var i = a.encFilehash,
              l = a.generateThumbnailOnServer,
              c = a.mediaId,
              d = a.signal,
              m = a.type,
              p = !1,
              _ = { encFilehash: a.encFilehash, type: a.type };
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "mmsClient.checkIfUploadExists: start",
                ])),
            );
            try {
              var f = null,
                g = yield o("WAExponentialBackoff").exponentialBackoff(
                  babelHelpers.extends(
                    {},
                    r("WAWebMmsClientMmsBackoffOptions"),
                    { signal: d },
                  ),
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, n) {
                        var u;
                        (o("WALogger").LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "mmsClient.checkIfUploadExists: attempt #",
                              "",
                            ])),
                          n + 1,
                        ),
                          (u = a.uploadQpl) == null ||
                            u.addAnnotations({
                              bool: {
                                network_online: t.networkStatus.isOnline(),
                                navigator_online: navigator.onLine,
                              },
                            }),
                          yield t.networkStatus.waitIfOffline());
                        try {
                          var _ = yield t.mediaHosts.getHostsInfo({
                              operation: r("WAWebMmsOperationsConst").UPLOAD,
                              encFilehash: i,
                              type: m,
                              signal: d,
                            }),
                            g = _.auth,
                            h = _.fallbackHost,
                            y = _.selectedHost,
                            C = r("WAWebMmsClientSelectHost")({
                              selectedHost: y,
                              fallbackHost: h,
                              lastHostUsed: f,
                              attemptCount: n,
                              lastFetchMadeProgress: p,
                            });
                          return (
                            (f = C),
                            yield r("WAWebMmsClientMmsCheckIfUploadExists")({
                              auth: g,
                              encFilehash: i,
                              hostname: C.hostname,
                              type: m,
                              signal: d,
                              onProgress: function () {
                                p = !0;
                              },
                              mediaId: c,
                              token: a.token,
                              generateThumbnailOnServer: l,
                            })
                          );
                        } catch (t) {
                          var b = r("getErrorSafe")(t);
                          if (
                            o(
                              "WAWebMmsClientIsErrorRetryable",
                            ).isErrorRetryable(b)
                          )
                            return e(b);
                          throw b;
                        }
                      },
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "mmsClient.checkIfUploadExists: success",
                    ])),
                ),
                g
              );
            } catch (e) {
              var h = r("getErrorSafe")(e);
              throw (
                o("WAWebMmsClientMmsLogError").mmsLogError({
                  debug: _,
                  error: h,
                  source: "mmsClient.checkIfUploadExists",
                }),
                h
              );
            }
          })),
          i.apply(this, arguments)
        );
      }
    }
    l.createCheckIfUploadExistsWithDependencies = c;
  },
  98,
);
