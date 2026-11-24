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
    "WAWebMmsClientUploadRetryResume",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsClientWaitForNetworkBeforeAttempt",
    "WAWebMmsOperationsConst",
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
          b = null,
          v = await o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: _,
            }),
            async function (y, v) {
              var S = function (n) {
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
                  v + 1,
                ));
              try {
                await o(
                  "WAWebMmsClientWaitForNetworkBeforeAttempt",
                ).waitForNetworkBeforeAttempt({
                  failCount: v,
                  networkStatus: t.networkStatus,
                  uploadQpl: e.uploadQpl,
                });
                var R = await S(),
                  L = R.auth,
                  E = R.fallbackHost,
                  k = R.selectedHost,
                  I = { selectedHost: k, fallbackHost: E },
                  T = r("WAWebMmsClientSelectHost")({
                    selectedHost: k,
                    fallbackHost: E,
                    attemptCount: v,
                    lastHostUsed: C,
                    lastFetchMadeProgress: g,
                  });
                return (
                  (C = T),
                  p({ hostName: T.hostname, hostClass: T.class, failCount: v }),
                  await r("WARetryPromise")(async function (t) {
                    var c = t.retry,
                      m = await i({
                        auth: L,
                        encFilehash: l,
                        byteLength: a.byteLength,
                        hostname: T.hostname,
                        type: f,
                        signal: _,
                        byteOffset: n,
                        failCount: v,
                        mediaId: u,
                        token: e.token,
                        generateThumbnailOnServer: s,
                      }),
                      p = new AbortController(),
                      h = p.signal,
                      y = await r("WARaceSignal")([_, h], function (t) {
                        var i = o(
                            "WAWebMmsClientPollMediaHosts",
                          ).shouldPollUploadHosts(f, a.byteLength)
                            ? o("WAWebMmsClientPollMediaHosts")
                                .pollMediaHosts({
                                  connectionBlock: I,
                                  getHost: function () {
                                    return T;
                                  },
                                  getMediaHosts: function () {
                                    return S(!0);
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
                          c = (
                            o(
                              "WAWebMmsClientUploadRetryResume",
                            ).shouldResumeUploadRetry({
                              byteLength: a.byteLength,
                              encFilehash: l,
                              failCount: v,
                              firstAttemptOffset: n,
                              pollsUploadHosts: i != null,
                              previousAttemptError: b,
                              token: e.token,
                              type: f,
                            })
                              ? o(
                                  "WAWebMmsClientUploadRetryResume",
                                ).uploadRetryFromServerCount({
                                  auth: L,
                                  ciphertextHmac: a,
                                  encFilehash: l,
                                  generateThumbnailOnServer: s,
                                  hostname: T.hostname,
                                  mediaId: u,
                                  onProgress: function (t, n) {
                                    ((g = !0), d(t, n));
                                  },
                                  signal: _,
                                  token: e.token,
                                  type: f,
                                  uploadQpl: e.uploadQpl,
                                })
                              : r("WAWebMmsClientMmsUpload")({
                                  auth: L,
                                  ciphertextHmac:
                                    m > 0 ? new Uint8Array(a).subarray(m) : a,
                                  hostname: T.hostname,
                                  encFilehash: l,
                                  type: f,
                                  signal: _,
                                  onProgress: function (t) {
                                    ((g = !0), d(t, m));
                                  },
                                  byteRange:
                                    m > 0
                                      ? { start: m, end: a.byteLength }
                                      : void 0,
                                  mediaId: u,
                                  token: e.token,
                                  generateThumbnailOnServer: s,
                                })
                          ).then(function (e) {
                            return { kind: "upload-completed", value: e };
                          });
                        return Promise.race([c, i].filter(Boolean)).finally(
                          function () {
                            return p.abort();
                          },
                        );
                      });
                    return y.kind === "host-changed"
                      ? ((T = y.host), (C = T), c())
                      : y.value;
                  })
                );
              } catch (e) {
                var D = r("getErrorSafe")(e);
                ((g = !1), (b = D));
                var x = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(D),
                  $ = !x || v === r("WAWebMmsClientMmsBackoffOptions").retries;
                if (
                  ($ ||
                    m({
                      error: D,
                      failCount: v,
                      overallLastUploadRetryPhase: o(
                        "WAWebWamEnumOverallLastUploadRetryPhaseType",
                      ).OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                      overallT: Date.now() - h,
                    }),
                  x)
                )
                  return y(D);
                throw D;
              }
            },
          );
        return { response: v, retryStartTime: h };
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
