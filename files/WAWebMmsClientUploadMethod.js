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
    "WAWebNetworkStatusStateManager",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ciphertextHmac", "uploadQpl"],
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
                  p = n.uploadQpl,
                  _ = babelHelpers.objectWithoutPropertiesLoose(n, e),
                  f = new (o("WAWebMmsClientUploadStreamer").UploadStreamer)(
                    _,
                    { mediaHosts: t.mediaHosts },
                  );
                return yield f.uploadCompleteFile({ ciphertextHmac: m });
              }
              var g = yield l(n),
                h = g.response,
                y = g.retryStartTime;
              return (
                i(Date.now() - y),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "mmsClient.upload: success",
                    ])),
                ),
                r("nullthrows")(h)
              );
            } catch (e) {
              var C = r("getErrorSafe")(e);
              throw (
                o("WAWebMmsClientMmsLogError").mmsLogError({
                  debug: d,
                  error: C,
                  hasExpectedErrors: !1,
                  source: "mmsClient.upload",
                }),
                C
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
                        var L;
                        (L = e.uploadQpl) == null ||
                          L.addAnnotations({
                            bool: {
                              network_online: t.networkStatus.isOnline(),
                              navigator_online: navigator.onLine,
                            },
                          });
                        var E = o(
                          "WAWebNetworkStatusStateManager",
                        ).networkOfflineCauseStateManager.get();
                        if (E != null) {
                          var k;
                          (k = e.uploadQpl) == null ||
                            k.addAnnotations({
                              string: { network_offline_source: E.source },
                              int: {
                                network_offline_age_ms: Date.now() - E.sinceMs,
                              },
                            });
                        }
                        yield t.networkStatus.waitIfOffline();
                        var I = yield R(),
                          T = I.auth,
                          D = I.fallbackHost,
                          x = I.selectedHost,
                          $ = { selectedHost: x, fallbackHost: D },
                          P = r("WAWebMmsClientSelectHost")({
                            selectedHost: x,
                            fallbackHost: D,
                            attemptCount: S,
                            lastHostUsed: v,
                            lastFetchMadeProgress: y,
                          });
                        return (
                          (v = P),
                          f({
                            hostName: P.hostname,
                            hostClass: P.class,
                            failCount: S,
                          }),
                          yield r("WARetryPromise")(
                            (function () {
                              var t = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (t) {
                                var c = t.retry,
                                  p = yield _({
                                    auth: T,
                                    encFilehash: l,
                                    byteLength: i.byteLength,
                                    hostname: P.hostname,
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
                                                connectionBlock: $,
                                                getHost: function () {
                                                  return P;
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
                                          auth: T,
                                          ciphertextHmac:
                                            p > 0
                                              ? new Uint8Array(i).subarray(p)
                                              : i,
                                          hostname: P.hostname,
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
                                  ? ((P = b.host), (v = P), c())
                                  : b.value;
                              });
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })(),
                          )
                        );
                      } catch (e) {
                        var N = r("getErrorSafe")(e);
                        y = !1;
                        var M = o(
                            "WAWebMmsClientIsErrorRetryable",
                          ).isErrorRetryable(N),
                          w =
                            !M ||
                            S === r("WAWebMmsClientMmsBackoffOptions").retries;
                        if (
                          (w ||
                            p({
                              error: N,
                              failCount: S,
                              overallLastUploadRetryPhase: o(
                                "WAWebWamEnumOverallLastUploadRetryPhaseType",
                              ).OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                              overallT: Date.now() - C,
                            }),
                          M)
                        )
                          return b(N);
                        throw N;
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
