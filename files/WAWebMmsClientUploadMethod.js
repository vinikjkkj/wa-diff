__d(
  "WAWebMmsClientUploadMethod",
  [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientMmsUpload",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsOperationsConst",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ciphertextHmac"],
      s,
      u,
      c,
      d,
      m;
    function p(t) {
      return a;
      function a(e) {
        return i.apply(this, arguments);
      }
      function i() {
        return (
          (i = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var a = n.encFilehash,
              i = n.onUploadAttemptSuccess,
              c = n.type,
              d = { encFilehash: a, type: c };
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "mmsClient.upload: start",
                ])),
            );
            try {
              if (
                o("WAWebMmsClientUploadStreamer").shouldUseStreamingUpload(
                  n.ciphertextHmac.byteLength,
                  n.type,
                )
              ) {
                var m = n.ciphertextHmac,
                  p = babelHelpers.objectWithoutPropertiesLoose(n, e),
                  _ = new (o("WAWebMmsClientUploadStreamer").UploadStreamer)(
                    p,
                    { mediaHosts: t.mediaHosts },
                  );
                return yield _.uploadCompleteFile({ ciphertextHmac: m });
              }
              var f = yield l(n),
                g = f.response,
                h = f.retryStartTime;
              return (
                i(Date.now() - h),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "mmsClient.upload: success",
                    ])),
                ),
                r("nullthrows")(g)
              );
            } catch (e) {
              var y = r("getErrorSafe")(e);
              throw (
                o("WAWebMmsClientMmsLogError").mmsLogError(
                  "mmsClient.upload",
                  y,
                  d,
                  !1,
                ),
                y
              );
            }
          })),
          i.apply(this, arguments)
        );
      }
      function l(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (
          (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var a = e.byteOffset,
              i = e.ciphertextHmac,
              l = e.encFilehash,
              s = e.generateThumbnailOnServer,
              u = e.mediaId,
              d = e.onProgress,
              p = e.onUploadAttemptError,
              f = e.onUploadHostFound,
              g = e.signal,
              h = e.type,
              y = !1,
              C = Date.now(),
              b = { encFilehash: l, type: h },
              v = null,
              S = yield o("WAExponentialBackoff").exponentialBackoff(
                babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                  signal: g,
                }),
                (function () {
                  var b = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (b, S) {
                      var R = function (n) {
                        return t.mediaHosts.getHostsInfo({
                          operation: r("WAWebMmsOperationsConst").UPLOAD,
                          encFilehash: l,
                          type: h,
                          signal: g,
                          forceRefresh: n,
                        });
                      };
                      ((C = Date.now()),
                        o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "mmsClient.upload: attempt #",
                              "",
                            ])),
                          S + 1,
                        ));
                      try {
                        yield t.networkStatus.waitIfOffline();
                        var L = yield R(),
                          E = L.auth,
                          k = L.fallbackHost,
                          I = L.selectedHost,
                          T = { selectedHost: I, fallbackHost: k },
                          D = r("WAWebMmsClientSelectHost")({
                            selectedHost: I,
                            fallbackHost: k,
                            attemptCount: S,
                            lastHostUsed: v,
                            lastFetchMadeProgress: y,
                          });
                        return (
                          (v = D),
                          f({
                            hostName: D.hostname,
                            hostClass: D.class,
                            failCount: S,
                          }),
                          yield r("WARetryPromise")(
                            (function () {
                              var t = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (t) {
                                var c = t.retry,
                                  p = yield _({
                                    auth: E,
                                    encFilehash: l,
                                    byteLength: i.byteLength,
                                    hostname: D.hostname,
                                    type: h,
                                    signal: g,
                                    byteOffset: a,
                                    failCount: S,
                                    mediaId: u,
                                    token: e.token,
                                    generateThumbnailOnServer: s,
                                  }),
                                  f = new AbortController(),
                                  C = f.signal,
                                  b = yield r("WARaceSignal")(
                                    [g, C],
                                    function (t) {
                                      var a = o(
                                          "WAWebMmsClientPollMediaHosts",
                                        ).shouldPollUploadHosts(h, i.byteLength)
                                          ? o("WAWebMmsClientPollMediaHosts")
                                              .pollMediaHosts({
                                                connectionBlock: T,
                                                getHost: function () {
                                                  return D;
                                                },
                                                getMediaHosts: function () {
                                                  return R(!0);
                                                },
                                                getRemainingBytes: function () {
                                                  return i.byteLength;
                                                },
                                                signal: t,
                                              })
                                              .then(function (e) {
                                                return {
                                                  kind: "host-changed",
                                                  host: e,
                                                };
                                              })
                                          : null,
                                        c = r("WAWebMmsClientMmsUpload")({
                                          auth: E,
                                          ciphertextHmac:
                                            p > 0
                                              ? new Uint8Array(i).subarray(p)
                                              : i,
                                          hostname: D.hostname,
                                          encFilehash: l,
                                          type: h,
                                          signal: g,
                                          onProgress: function (t) {
                                            ((y = !0), d(t, p));
                                          },
                                          byteRange:
                                            p > 0
                                              ? { start: p, end: i.byteLength }
                                              : void 0,
                                          mediaId: u,
                                          token: e.token,
                                          generateThumbnailOnServer: s,
                                        }).then(function (e) {
                                          return {
                                            kind: "upload-completed",
                                            value: e,
                                          };
                                        });
                                      return (m || (m = n("Promise")))
                                        .race([c, a].filter(Boolean))
                                        .finally(function () {
                                          return f.abort();
                                        });
                                    },
                                  );
                                return b.kind === "host-changed"
                                  ? ((D = b.host), (v = D), c())
                                  : b.value;
                              });
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          )
                        );
                      } catch (e) {
                        var x = r("getErrorSafe")(e);
                        y = !1;
                        var $ = o(
                            "WAWebMmsClientIsErrorRetryable",
                          ).isErrorRetryable(x),
                          P =
                            !$ ||
                            S === r("WAWebMmsClientMmsBackoffOptions").retries;
                        if (
                          (P ||
                            p(
                              x,
                              Date.now() - C,
                              S,
                              o("WAWebWamEnumOverallLastUploadRetryPhaseType")
                                .OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                            ),
                          $)
                        )
                          return b(x);
                        throw x;
                      }
                    },
                  );
                  return function (e, t) {
                    return b.apply(this, arguments);
                  };
                })(),
              );
            return { response: S, retryStartTime: C };
          })),
          p.apply(this, arguments)
        );
      }
      function _(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (
          (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.auth,
              n = e.byteLength,
              a = e.byteOffset,
              i = e.encFilehash,
              l = e.failCount,
              s = e.generateThumbnailOnServer,
              u = e.hostname,
              c = e.mediaId,
              m = e.signal,
              p = e.token,
              _ = e.type;
            if (a != null && l === 0) return a;
            if (!o("WAWebMmsClientPollMediaHosts").shouldPollUploadHosts(_, n))
              return 0;
            try {
              var f = yield r("WAWebMmsClientMmsCheckIfUploadExists")({
                auth: t,
                encFilehash: i,
                hostname: u,
                type: _,
                signal: m,
                mediaId: c,
                token: p,
                generateThumbnailOnServer: s,
              });
              if (f.complete) return 0;
              var g = f.resume;
              return g >= n ? 0 : g;
            } catch (e) {
              var h = r("getErrorSafe")(e);
              return (
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to compute upload offset",
                      ])),
                  )
                  .verbose()
                  .sendLogs("upload-offset-failed"),
                0
              );
            }
          })),
          f.apply(this, arguments)
        );
      }
    }
    l.buildUploadMethodWithDependencies = p;
  },
  98,
);
