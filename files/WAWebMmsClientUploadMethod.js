__d(
  "WAWebMmsClientUploadMethod",
  [
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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ciphertextHmac", "uploadQpl"],
      s,
      u,
      c,
      d;
    function m(t) {
      return n;
      async function n(n) {
        var i = n.encFilehash,
          l = n.onUploadAttemptSuccess,
          c = n.type,
          d = { encFilehash: i, type: c };
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
              f = new (o("WAWebMmsClientUploadStreamer").UploadStreamer)(_, {
                mediaHosts: t.mediaHosts,
              });
            return await f.uploadCompleteFile({ ciphertextHmac: m });
          }
          var g = await a(n),
            h = g.response,
            y = g.retryStartTime;
          return (
            l(Date.now() - y),
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
      }
      async function a(e) {
        var n = e.byteOffset,
          a = e.ciphertextHmac,
          l = e.encFilehash,
          s = e.generateThumbnailOnServer,
          u = e.mediaId,
          d = e.onProgress,
          m = e.onUploadAttemptError,
          p = e.onUploadHostFound,
          _ = e.signal,
          f = e.type,
          g = !1,
          h = Date.now(),
          y = { encFilehash: l, type: f },
          C = null,
          b = await o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: _,
            }),
            async function (y, b) {
              var v = function (n) {
                return t.mediaHosts.getHostsInfo({
                  operation: r("WAWebMmsOperationsConst").UPLOAD,
                  encFilehash: l,
                  type: f,
                  signal: _,
                  forceRefresh: n,
                });
              };
              ((h = Date.now()),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "mmsClient.upload: attempt #",
                      "",
                    ])),
                  b + 1,
                ));
              try {
                var S;
                (S = e.uploadQpl) == null ||
                  S.addAnnotations({
                    bool: {
                      network_online: t.networkStatus.isOnline(),
                      navigator_online: navigator.onLine,
                    },
                  });
                var R = o(
                  "WAWebNetworkStatusStateManager",
                ).networkOfflineCauseStateManager.get();
                if (R != null) {
                  var L;
                  (L = e.uploadQpl) == null ||
                    L.addAnnotations({
                      string: { network_offline_source: R.source },
                      int: { network_offline_age_ms: Date.now() - R.sinceMs },
                    });
                }
                await t.networkStatus.waitIfOffline();
                var E = await v(),
                  k = E.auth,
                  I = E.fallbackHost,
                  T = E.selectedHost,
                  D = { selectedHost: T, fallbackHost: I },
                  x = r("WAWebMmsClientSelectHost")({
                    selectedHost: T,
                    fallbackHost: I,
                    attemptCount: b,
                    lastHostUsed: C,
                    lastFetchMadeProgress: g,
                  });
                return (
                  (C = x),
                  p({ hostName: x.hostname, hostClass: x.class, failCount: b }),
                  await r("WARetryPromise")(async function (t) {
                    var c = t.retry,
                      m = await i({
                        auth: k,
                        encFilehash: l,
                        byteLength: a.byteLength,
                        hostname: x.hostname,
                        type: f,
                        signal: _,
                        byteOffset: n,
                        failCount: b,
                        mediaId: u,
                        token: e.token,
                        generateThumbnailOnServer: s,
                      }),
                      p = new AbortController(),
                      h = p.signal,
                      y = await r("WARaceSignal")([_, h], function (t) {
                        var n = o(
                            "WAWebMmsClientPollMediaHosts",
                          ).shouldPollUploadHosts(f, a.byteLength)
                            ? o("WAWebMmsClientPollMediaHosts")
                                .pollMediaHosts({
                                  connectionBlock: D,
                                  getHost: function () {
                                    return x;
                                  },
                                  getMediaHosts: function () {
                                    return v(!0);
                                  },
                                  getRemainingBytes: function () {
                                    return a.byteLength;
                                  },
                                  signal: t,
                                })
                                .then(function (e) {
                                  return { kind: "host-changed", host: e };
                                })
                            : null,
                          i = r("WAWebMmsClientMmsUpload")({
                            auth: k,
                            ciphertextHmac:
                              m > 0 ? new Uint8Array(a).subarray(m) : a,
                            hostname: x.hostname,
                            encFilehash: l,
                            type: f,
                            signal: _,
                            onProgress: function (t) {
                              ((g = !0), d(t, m));
                            },
                            byteRange:
                              m > 0 ? { start: m, end: a.byteLength } : void 0,
                            mediaId: u,
                            token: e.token,
                            generateThumbnailOnServer: s,
                          }).then(function (e) {
                            return { kind: "upload-completed", value: e };
                          });
                        return Promise.race([i, n].filter(Boolean)).finally(
                          function () {
                            return p.abort();
                          },
                        );
                      });
                    return y.kind === "host-changed"
                      ? ((x = y.host), (C = x), c())
                      : y.value;
                  })
                );
              } catch (e) {
                var $ = r("getErrorSafe")(e);
                g = !1;
                var P = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable($),
                  N = !P || b === r("WAWebMmsClientMmsBackoffOptions").retries;
                if (
                  (N ||
                    m({
                      error: $,
                      failCount: b,
                      overallLastUploadRetryPhase: o(
                        "WAWebWamEnumOverallLastUploadRetryPhaseType",
                      ).OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                      overallT: Date.now() - h,
                    }),
                  P)
                )
                  return y($);
                throw $;
              }
            },
          );
        return { response: b, retryStartTime: h };
      }
      async function i(e) {
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
          var f = await r("WAWebMmsClientMmsCheckIfUploadExists")({
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
      }
    }
    l.buildUploadMethodWithDependencies = m;
  },
  98,
);
