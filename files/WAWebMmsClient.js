__d(
  "WAWebMmsClient",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WANullthrows",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebMediaHosts",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsDeleteMdHistorySyncBlob",
    "WAWebMmsClientMmsDownload",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientMmsUpload",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsClientUploadStreamer",
    "WAWebMmsMediaTypes",
    "WAWebMmsOperationsConst",
    "WAWebNetworkStatus",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ciphertextHmac"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v;
    async function S(e) {
      var t = e.encFilehash,
        n = e.generateThumbnailOnServer,
        a = e.mediaId,
        i = e.signal,
        l = e.type,
        d = !1,
        m = { encFilehash: e.encFilehash, type: e.type };
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "mmsClient.checkIfUploadExists: start",
          ])),
      );
      try {
        var p = null,
          _ = await o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: i,
            }),
            async function (s, c) {
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.checkIfUploadExists: attempt #",
                    "",
                  ])),
                c + 1,
              ),
                await r("WAWebNetworkStatus").waitIfOffline());
              try {
                var m = await o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                    operation: r("WAWebMmsOperationsConst").UPLOAD,
                    encFilehash: t,
                    type: l,
                    signal: i,
                  }),
                  _ = m.auth,
                  f = m.fallbackHost,
                  g = m.selectedHost,
                  h = r("WAWebMmsClientSelectHost")({
                    selectedHost: g,
                    fallbackHost: f,
                    lastHostUsed: p,
                    attemptCount: c,
                    lastFetchMadeProgress: d,
                  });
                return (
                  (p = h),
                  await r("WAWebMmsClientMmsCheckIfUploadExists")({
                    auth: _,
                    encFilehash: t,
                    hostname: h.hostname,
                    type: l,
                    signal: i,
                    onProgress: function () {
                      d = !0;
                    },
                    mediaId: a,
                    token: e.token,
                    generateThumbnailOnServer: n,
                  })
                );
              } catch (e) {
                var y = r("getErrorSafe")(e);
                if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(y))
                  return s(y);
                throw y;
              }
            },
          );
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.checkIfUploadExists: success",
              ])),
          ),
          _
        );
      } catch (e) {
        var f = r("getErrorSafe")(e);
        throw (
          o("WAWebMmsClientMmsLogError").mmsLogError(
            "mmsClient.checkIfUploadExists",
            f,
            m,
          ),
          f
        );
      }
    }
    async function R(t) {
      var n = t.encFilehash,
        a = t.onUploadAttemptSuccess,
        i = t.type,
        l = { encFilehash: n, type: i };
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "mmsClient.upload: start",
          ])),
      );
      try {
        if (
          o("WAWebMmsClientUploadStreamer").shouldUseStreamingUpload(
            t.ciphertextHmac.byteLength,
            t.type,
          )
        ) {
          var s = t.ciphertextHmac,
            u = babelHelpers.objectWithoutPropertiesLoose(t, e),
            c = new (o("WAWebMmsClientUploadStreamer").UploadStreamer)(u);
          return await c.uploadCompleteFile({ ciphertextHmac: s });
        }
        var p = await $(t),
          _ = p.response,
          f = p.retryStartTime;
        return (
          a(Date.now() - f),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.upload: success",
              ])),
          ),
          r("WANullthrows")(_)
        );
      } catch (e) {
        var g = r("getErrorSafe")(e);
        throw (
          o("WAWebMmsClientMmsLogError").mmsLogError(
            "mmsClient.upload",
            g,
            l,
            !1,
          ),
          g
        );
      }
    }
    async function L(e) {
      var t = e.debugString,
        n = e.directPath,
        a = e.filehash,
        i = e.onDownloadAttemptSuccess,
        l = e.staticUrl,
        s = e.type,
        u = { directPath: n, filehash: a, type: s, staticUrl: l };
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "mmsClient.download: [",
            "] start",
          ])),
        t,
      );
      try {
        var c = await D(e),
          d = c.response,
          m = c.retryStartTime;
        return (
          i(Date.now() - m),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.download: [",
                "] success",
              ])),
            t,
          ),
          d
        );
      } catch (e) {
        var f = r("getErrorSafe")(e);
        throw (
          o("WAWebMmsClientMmsLogError").mmsLogError(
            "mmsClient.download",
            f,
            u,
          ),
          f
        );
      }
    }
    function E(e) {
      return I(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsCheckExistence(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function k(e) {
      return I(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsGetEncryptedMediaSize(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function I(e, t) {
      var n = t.directPath,
        a = t.encFilehash,
        i = t.signal,
        l = t.type,
        s = { directPath: n, type: l };
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: i,
          }),
          async function (t, s) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "runMmsTaskWithBackoff: attempt #",
                  "",
                ])),
              s + 1,
            );
            try {
              var u = await T({
                  operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                  directPath: n,
                  encFilehash: a,
                  type: l,
                  signal: i,
                  failCount: s,
                }),
                c = await e(u);
              return c;
            } catch (e) {
              var d = r("getErrorSafe")(e);
              if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(d))
                return t(d);
              throw d;
            }
          },
        )
      );
    }
    async function T(e) {
      var t = e.directPath,
        n = e.encFilehash,
        r = e.failCount,
        a = e.operation,
        i = e.signal,
        l = e.type,
        s = await o("WAWebMediaHosts").mediaHosts.getHostsInfo({
          operation: a,
          directPath: t,
          encFilehash: n,
          type: l,
          signal: i,
        }),
        u = s.fallbackHost,
        c = s.selectedHost,
        d = r >= 2 && u ? u : c;
      return d.hostname;
    }
    async function D(e) {
      var t = e.byteRange,
        n = e.debugString,
        a = e.directPath,
        i = e.filehash,
        l = e.mode,
        s = e.onData,
        u = e.onDownloadAttemptError,
        c = e.onDownloadHostFound,
        d = e.onProgress,
        m = e.signal,
        p = e.staticUrl,
        _ = e.type,
        f = Date.now(),
        g = !1,
        y = { directPath: a, filehash: i, type: _, staticUrl: p },
        C = null,
        b = await o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: m,
          }),
          async function (e, y) {
            ((f = Date.now()),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.download: [",
                    "] attempt #",
                    "",
                  ])),
                n,
                y + 1,
              ));
            var b = function (t) {
              return o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                directPath: a,
                encFilehash: i,
                type: _,
                signal: m,
                forceRefresh: t,
              });
            };
            try {
              var v = await b(),
                S = v.fallbackHost,
                R = v.selectedHost,
                L = r("WAWebMmsClientSelectHost")({
                  selectedHost: R,
                  fallbackHost: S,
                  attemptCount: y,
                  lastHostUsed: C,
                  lastFetchMadeProgress: g,
                });
              ((C = L),
                c({ hostName: L.hostname, hostClass: L.class, failCount: y }));
              var E = 0,
                k = null,
                I = { selectedHost: R, fallbackHost: S },
                T = function (t) {
                  if (t != null && k == null) {
                    var e = t.get("Content-Length"),
                      n = parseInt(e, 10);
                    k = Number.isNaN(n) ? null : n;
                  }
                };
              return await r("WARetryPromise")(async function (e) {
                var u = e.failCount,
                  c = e.retry,
                  f = function (t) {
                    (d == null || d(t),
                      (g = !0),
                      t.lengthComputable && (E = t.loaded));
                  };
                E = 0;
                var h = new AbortController(),
                  y = h.signal,
                  v = await r("WARaceSignal")([m, y], function (e) {
                    var r = o("WAWebMmsClientMmsDownload")
                        .mms4Download({
                          directPath: a,
                          encFilehash: i,
                          staticUrl: p,
                          hostname: L.hostname,
                          type: _,
                          signal: e,
                          mode: l,
                          byteRange: t,
                          debugString: n,
                          onHeadersReceived: T,
                          onProgress: f,
                          onData: s,
                          downloadBucket: L.selectedBucket,
                        })
                        .then(function (e) {
                          return { kind: "download-completed", arrayBuffer: e };
                        }),
                      u = o(
                        "WAWebMmsClientPollMediaHosts",
                      ).shouldPollDownloadHosts(_, k)
                        ? o("WAWebMmsClientPollMediaHosts")
                            .pollMediaHosts({
                              connectionBlock: I,
                              getHost: function () {
                                return L;
                              },
                              getMediaHosts: function () {
                                return b(!0);
                              },
                              getRemainingBytes: function () {
                                return k != null ? k - E : null;
                              },
                              signal: e,
                            })
                            .then(function (e) {
                              return { kind: "host-changed", host: e };
                            })
                        : null;
                    return Promise.race([r, u].filter(Boolean)).finally(
                      function () {
                        return h.abort();
                      },
                    );
                  });
                return v.kind === "host-changed"
                  ? ((L = v.host), (C = L), c())
                  : v.arrayBuffer;
              });
            } catch (t) {
              var D = r("getErrorSafe")(t);
              g = !1;
              var x = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(D),
                $ = !x || y === r("WAWebMmsClientMmsBackoffOptions").retries;
              if (
                ($ || u({ error: D, overallT: Date.now() - f, failCount: y }),
                x)
              )
                return e(D);
              throw D;
            }
          },
        );
      return { response: r("WANullthrows")(b), retryStartTime: f };
    }
    async function x(e) {
      var t = e.auth,
        n = e.byteLength,
        a = e.byteOffset,
        i = e.encFilehash,
        l = e.failCount,
        s = e.generateThumbnailOnServer,
        u = e.hostname,
        c = e.mediaId,
        d = e.signal,
        m = e.token,
        p = e.type;
      if (a != null && l === 0) return a;
      if (!o("WAWebMmsClientPollMediaHosts").shouldPollUploadHosts(p, n))
        return 0;
      try {
        var _ = await r("WAWebMmsClientMmsCheckIfUploadExists")({
          auth: t,
          encFilehash: i,
          hostname: u,
          type: p,
          signal: d,
          mediaId: c,
          token: m,
          generateThumbnailOnServer: s,
        });
        if (_.complete) return 0;
        var f = _.resume;
        return f >= n ? 0 : f;
      } catch (e) {
        var g = r("getErrorSafe")(e);
        return (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to compute upload offset",
                ])),
            )
            .verbose()
            .sendLogs("upload-offset-failed"),
          0
        );
      }
    }
    async function $(e) {
      var t = e.byteOffset,
        n = e.ciphertextHmac,
        a = e.encFilehash,
        i = e.generateThumbnailOnServer,
        l = e.mediaId,
        s = e.onProgress,
        u = e.onUploadAttemptError,
        c = e.onUploadHostFound,
        d = e.signal,
        m = e.type,
        p = !1,
        _ = Date.now(),
        f = { encFilehash: a, type: m },
        g = null,
        h = await o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: d,
          }),
          async function (f, h) {
            var y = function (t) {
              return o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                operation: r("WAWebMmsOperationsConst").UPLOAD,
                encFilehash: a,
                type: m,
                signal: d,
                forceRefresh: t,
              });
            };
            ((_ = Date.now()),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.upload: attempt #",
                    "",
                  ])),
                h + 1,
              ));
            try {
              await r("WAWebNetworkStatus").waitIfOffline();
              var b = await y(),
                v = b.auth,
                S = b.fallbackHost,
                R = b.selectedHost,
                L = { selectedHost: R, fallbackHost: S },
                E = r("WAWebMmsClientSelectHost")({
                  selectedHost: R,
                  fallbackHost: S,
                  attemptCount: h,
                  lastHostUsed: g,
                  lastFetchMadeProgress: p,
                });
              return (
                (g = E),
                c({ hostName: E.hostname, hostClass: E.class, failCount: h }),
                await r("WARetryPromise")(async function (u) {
                  var c = u.retry,
                    _ = await x({
                      auth: v,
                      encFilehash: a,
                      byteLength: n.byteLength,
                      hostname: E.hostname,
                      type: m,
                      signal: d,
                      byteOffset: t,
                      failCount: h,
                      mediaId: l,
                      token: e.token,
                      generateThumbnailOnServer: i,
                    }),
                    f = new AbortController(),
                    C = f.signal,
                    b = await r("WARaceSignal")([d, C], function (t) {
                      var u = o(
                          "WAWebMmsClientPollMediaHosts",
                        ).shouldPollUploadHosts(m, n.byteLength)
                          ? o("WAWebMmsClientPollMediaHosts")
                              .pollMediaHosts({
                                connectionBlock: L,
                                getHost: function () {
                                  return E;
                                },
                                getMediaHosts: function () {
                                  return y(!0);
                                },
                                getRemainingBytes: function () {
                                  return n.byteLength;
                                },
                                signal: t,
                              })
                              .then(function (e) {
                                return { kind: "host-changed", host: e };
                              })
                          : null,
                        c = r("WAWebMmsClientMmsUpload")({
                          auth: v,
                          ciphertextHmac:
                            _ > 0 ? new Uint8Array(n).subarray(_) : n,
                          hostname: E.hostname,
                          encFilehash: a,
                          type: m,
                          signal: d,
                          onProgress: function (t) {
                            ((p = !0), s(t, _));
                          },
                          byteRange:
                            _ > 0 ? { start: _, end: n.byteLength } : void 0,
                          mediaId: l,
                          token: e.token,
                          generateThumbnailOnServer: i,
                        }).then(function (e) {
                          return { kind: "upload-completed", value: e };
                        });
                      return Promise.race([c, u].filter(Boolean)).finally(
                        function () {
                          return f.abort();
                        },
                      );
                    });
                  return b.kind === "host-changed"
                    ? ((E = b.host), (g = E), c())
                    : b.value;
                })
              );
            } catch (e) {
              var k = r("getErrorSafe")(e);
              p = !1;
              var I = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(k),
                T = !I || h === r("WAWebMmsClientMmsBackoffOptions").retries;
              if (
                (T ||
                  u(
                    k,
                    Date.now() - _,
                    h,
                    o("WAWebWamEnumOverallLastUploadRetryPhaseType")
                      .OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                  ),
                I)
              )
                return f(k);
              throw k;
            }
          },
        );
      return { response: h, retryStartTime: _ };
    }
    function P(e) {
      var t = e.companionUserSecret,
        n = e.directPath,
        a = e.encFilehash,
        i = e.encHandle;
      return N(
        function (e, o) {
          return r("WAWebMmsClientMmsDeleteMdHistorySyncBlob")({
            directPath: n,
            hostname: e,
            encFilehash: a,
            auth: o,
            encHandle: i,
            companionUserSecret: t,
          });
        },
        babelHelpers.extends({}, e, {
          type: o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
          operation: r("WAWebMmsOperationsConst").UPLOAD,
        }),
      );
    }
    function N(e, t) {
      var n = t.directPath,
        a = t.encFilehash,
        i = t.operation,
        l = t.signal,
        s = t.type,
        u = { directPath: n, type: s };
      return (
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: l,
          }),
          async function (t, u) {
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "runMmsTaskWithBackoff: attempt #",
                  "",
                ])),
              u + 1,
            );
            try {
              var c = await M({
                  operation: i,
                  directPath: n,
                  encFilehash: a,
                  type: s,
                  signal: l,
                  failCount: u,
                }),
                d = c.auth,
                m = c.hostname,
                p = await e(m, d);
              return p;
            } catch (e) {
              var _ = r("getErrorSafe")(e);
              if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(_))
                return t(_);
              throw _;
            }
          },
        )
      );
    }
    async function M(e) {
      var t = e.directPath,
        n = e.encFilehash,
        r = e.failCount,
        a = e.operation,
        i = e.signal,
        l = e.type,
        s = await o("WAWebMediaHosts").mediaHosts.getHostsInfo({
          operation: a,
          directPath: t,
          encFilehash: n,
          type: l,
          signal: i,
        }),
        u = s.auth,
        c = s.fallbackHost,
        d = s.selectedHost,
        m = r >= 2 && c ? c : d;
      return { hostname: m.hostname, auth: u };
    }
    var w = {
        download: L,
        upload: R,
        checkExistence: E,
        getEncryptedMediaSize: k,
        checkIfUploadExists: S,
        deleteMdHistorySyncBlob: P,
      },
      A = w;
    l.default = A;
  },
  98,
);
