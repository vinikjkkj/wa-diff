__d(
  "WAWebMmsClient",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      v,
      S;
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.encFilehash,
            a = e.generateThumbnailOnServer,
            i = e.mediaId,
            l = e.signal,
            s = e.type,
            u = !1,
            c = { encFilehash: e.encFilehash, type: e.type };
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.checkIfUploadExists: start",
              ])),
          );
          try {
            var d = null,
              f = yield o("WAExponentialBackoff").exponentialBackoff(
                babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                  signal: l,
                }),
                (function () {
                  var c = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n, c) {
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "mmsClient.checkIfUploadExists: attempt #",
                            "",
                          ])),
                        c + 1,
                      ),
                        yield r("WAWebNetworkStatus").waitIfOffline());
                      try {
                        var m = yield o(
                            "WAWebMediaHosts",
                          ).mediaHosts.getHostsInfo({
                            operation: r("WAWebMmsOperationsConst").UPLOAD,
                            encFilehash: t,
                            type: s,
                            signal: l,
                          }),
                          _ = m.auth,
                          f = m.fallbackHost,
                          g = m.selectedHost,
                          h = r("WAWebMmsClientSelectHost")({
                            selectedHost: g,
                            fallbackHost: f,
                            lastHostUsed: d,
                            attemptCount: c,
                            lastFetchMadeProgress: u,
                          });
                        return (
                          (d = h),
                          yield r("WAWebMmsClientMmsCheckIfUploadExists")({
                            auth: _,
                            encFilehash: t,
                            hostname: h.hostname,
                            type: s,
                            signal: l,
                            onProgress: function () {
                              u = !0;
                            },
                            mediaId: i,
                            token: e.token,
                            generateThumbnailOnServer: a,
                          })
                        );
                      } catch (e) {
                        var y = r("getErrorSafe")(e);
                        if (
                          o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(
                            y,
                          )
                        )
                          return n(y);
                        throw y;
                      }
                    },
                  );
                  return function (e, t) {
                    return c.apply(this, arguments);
                  };
                })(),
              );
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.checkIfUploadExists: success",
                  ])),
              ),
              f
            );
          } catch (e) {
            var g = r("getErrorSafe")(e);
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError(
                "mmsClient.checkIfUploadExists",
                g,
                c,
              ),
              g
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.encFilehash,
            a = t.onUploadAttemptSuccess,
            i = t.type,
            l = { encFilehash: n, type: i };
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
              return yield c.uploadCompleteFile({ ciphertextHmac: s });
            }
            var d = yield O(t),
              m = d.response,
              p = d.retryStartTime;
            return (
              a(Date.now() - p),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.upload: success",
                  ])),
              ),
              r("WANullthrows")(m)
            );
          } catch (e) {
            var _ = r("getErrorSafe")(e);
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError(
                "mmsClient.upload",
                _,
                l,
                !1,
              ),
              _
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.debugString,
            n = e.directPath,
            a = e.filehash,
            i = e.onDownloadAttemptSuccess,
            l = e.staticUrl,
            s = e.type,
            u = { directPath: n, filehash: a, type: s, staticUrl: l };
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.download: [",
                "] start",
              ])),
            t,
          );
          try {
            var c = yield M(e),
              d = c.response,
              m = c.retryStartTime;
            return (
              i(Date.now() - m),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.download: [",
                    "] success",
                  ])),
                t,
              ),
              d
            );
          } catch (e) {
            var p = r("getErrorSafe")(e);
            throw (
              o("WAWebMmsClientMmsLogError").mmsLogError(
                "mmsClient.download",
                p,
                u,
              ),
              p
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return $(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsCheckExistence(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function x(e) {
      return $(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsGetEncryptedMediaSize(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function $(e, t) {
      var a = t.directPath,
        i = t.encFilehash,
        l = t.signal,
        c = t.type,
        d = { directPath: a, type: c };
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: l,
          }),
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "runMmsTaskWithBackoff: attempt #",
                      "",
                    ])),
                  n + 1,
                );
                try {
                  var s = yield P({
                      operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                      directPath: a,
                      encFilehash: i,
                      type: c,
                      signal: l,
                      failCount: n,
                    }),
                    d = yield e(s);
                  return d;
                } catch (e) {
                  var m = r("getErrorSafe")(e);
                  if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(m))
                    return t(m);
                  throw m;
                }
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
        )
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directPath,
            n = e.encFilehash,
            r = e.failCount,
            a = e.operation,
            i = e.signal,
            l = e.type,
            s = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
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
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.byteRange,
            a = e.debugString,
            i = e.directPath,
            l = e.filehash,
            s = e.mode,
            u = e.onData,
            c = e.onDownloadAttemptError,
            d = e.onDownloadHostFound,
            m = e.onProgress,
            p = e.signal,
            _ = e.staticUrl,
            f = e.type,
            g = Date.now(),
            h = !1,
            y = { directPath: i, filehash: l, type: f, staticUrl: _ },
            b = null,
            v = yield o("WAExponentialBackoff").exponentialBackoff(
              babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal: p,
              }),
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, y) {
                    ((g = Date.now()),
                      o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "mmsClient.download: [",
                            "] attempt #",
                            "",
                          ])),
                        a,
                        y + 1,
                      ));
                    var v = function (t) {
                      return o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                        operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                        directPath: i,
                        encFilehash: l,
                        type: f,
                        signal: p,
                        forceRefresh: t,
                      });
                    };
                    try {
                      var R = yield v(),
                        L = R.fallbackHost,
                        E = R.selectedHost,
                        k = r("WAWebMmsClientSelectHost")({
                          selectedHost: E,
                          fallbackHost: L,
                          attemptCount: y,
                          lastHostUsed: b,
                          lastFetchMadeProgress: h,
                        });
                      ((b = k),
                        d({
                          hostName: k.hostname,
                          hostClass: k.class,
                          failCount: y,
                        }));
                      var I = 0,
                        T = null,
                        D = { selectedHost: E, fallbackHost: L },
                        x = function (t) {
                          if (t != null && T == null) {
                            var e = t.get("Content-Length"),
                              n = parseInt(e, 10);
                            T = Number.isNaN(n) ? null : n;
                          }
                        };
                      return yield r("WARetryPromise")(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var c = e.failCount,
                                d = e.retry,
                                g = function (t) {
                                  (m == null || m(t),
                                    (h = !0),
                                    t.lengthComputable && (I = t.loaded));
                                };
                              I = 0;
                              var y = new AbortController(),
                                C = y.signal,
                                R = yield r("WARaceSignal")(
                                  [p, C],
                                  function (e) {
                                    var r = o("WAWebMmsClientMmsDownload")
                                        .mms4Download({
                                          directPath: i,
                                          encFilehash: l,
                                          staticUrl: _,
                                          hostname: k.hostname,
                                          type: f,
                                          signal: e,
                                          mode: s,
                                          byteRange: t,
                                          debugString: a,
                                          onHeadersReceived: x,
                                          onProgress: g,
                                          onData: u,
                                          downloadBucket: k.selectedBucket,
                                        })
                                        .then(function (e) {
                                          return {
                                            kind: "download-completed",
                                            arrayBuffer: e,
                                          };
                                        }),
                                      c = o(
                                        "WAWebMmsClientPollMediaHosts",
                                      ).shouldPollDownloadHosts(f, T)
                                        ? o("WAWebMmsClientPollMediaHosts")
                                            .pollMediaHosts({
                                              connectionBlock: D,
                                              getHost: function () {
                                                return k;
                                              },
                                              getMediaHosts: function () {
                                                return v(!0);
                                              },
                                              getRemainingBytes: function () {
                                                return T != null ? T - I : null;
                                              },
                                              signal: e,
                                            })
                                            .then(function (e) {
                                              return {
                                                kind: "host-changed",
                                                host: e,
                                              };
                                            })
                                        : null;
                                    return (S || (S = n("Promise")))
                                      .race([r, c].filter(Boolean))
                                      .finally(function () {
                                        return y.abort();
                                      });
                                  },
                                );
                              return R.kind === "host-changed"
                                ? ((k = R.host), (b = k), d())
                                : R.arrayBuffer;
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      );
                    } catch (t) {
                      var $ = r("getErrorSafe")(t);
                      h = !1;
                      var P = o(
                          "WAWebMmsClientIsErrorRetryable",
                        ).isErrorRetryable($),
                        N =
                          !P ||
                          y === r("WAWebMmsClientMmsBackoffOptions").retries;
                      if (
                        (N ||
                          c({
                            error: $,
                            overallT: Date.now() - g,
                            failCount: y,
                          }),
                        P)
                      )
                        return e($);
                      throw $;
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return { response: r("WANullthrows")(v), retryStartTime: g };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var _ = yield r("WAWebMmsClientMmsCheckIfUploadExists")({
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to compute upload offset",
                    ])),
                )
                .verbose()
                .sendLogs("upload-offset-failed"),
              0
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.byteOffset,
            a = e.ciphertextHmac,
            i = e.encFilehash,
            l = e.generateThumbnailOnServer,
            s = e.mediaId,
            u = e.onProgress,
            c = e.onUploadAttemptError,
            d = e.onUploadHostFound,
            m = e.signal,
            p = e.type,
            _ = !1,
            f = Date.now(),
            g = { encFilehash: i, type: p },
            h = null,
            y = yield o("WAExponentialBackoff").exponentialBackoff(
              babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal: m,
              }),
              (function () {
                var g = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (g, y) {
                    var C = function (t) {
                      return o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                        operation: r("WAWebMmsOperationsConst").UPLOAD,
                        encFilehash: i,
                        type: p,
                        signal: m,
                        forceRefresh: t,
                      });
                    };
                    ((f = Date.now()),
                      o("WALogger").LOG(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "mmsClient.upload: attempt #",
                            "",
                          ])),
                        y + 1,
                      ));
                    try {
                      yield r("WAWebNetworkStatus").waitIfOffline();
                      var b = yield C(),
                        R = b.auth,
                        L = b.fallbackHost,
                        E = b.selectedHost,
                        k = { selectedHost: E, fallbackHost: L },
                        I = r("WAWebMmsClientSelectHost")({
                          selectedHost: E,
                          fallbackHost: L,
                          attemptCount: y,
                          lastHostUsed: h,
                          lastFetchMadeProgress: _,
                        });
                      return (
                        (h = I),
                        d({
                          hostName: I.hostname,
                          hostClass: I.class,
                          failCount: y,
                        }),
                        yield r("WARetryPromise")(
                          (function () {
                            var c = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (c) {
                              var d = c.retry,
                                f = yield A({
                                  auth: R,
                                  encFilehash: i,
                                  byteLength: a.byteLength,
                                  hostname: I.hostname,
                                  type: p,
                                  signal: m,
                                  byteOffset: t,
                                  failCount: y,
                                  mediaId: s,
                                  token: e.token,
                                  generateThumbnailOnServer: l,
                                }),
                                g = new AbortController(),
                                b = g.signal,
                                v = yield r("WARaceSignal")(
                                  [m, b],
                                  function (t) {
                                    var c = o(
                                        "WAWebMmsClientPollMediaHosts",
                                      ).shouldPollUploadHosts(p, a.byteLength)
                                        ? o("WAWebMmsClientPollMediaHosts")
                                            .pollMediaHosts({
                                              connectionBlock: k,
                                              getHost: function () {
                                                return I;
                                              },
                                              getMediaHosts: function () {
                                                return C(!0);
                                              },
                                              getRemainingBytes: function () {
                                                return a.byteLength;
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
                                      d = r("WAWebMmsClientMmsUpload")({
                                        auth: R,
                                        ciphertextHmac:
                                          f > 0
                                            ? new Uint8Array(a).subarray(f)
                                            : a,
                                        hostname: I.hostname,
                                        encFilehash: i,
                                        type: p,
                                        signal: m,
                                        onProgress: function (t) {
                                          ((_ = !0), u(t, f));
                                        },
                                        byteRange:
                                          f > 0
                                            ? { start: f, end: a.byteLength }
                                            : void 0,
                                        mediaId: s,
                                        token: e.token,
                                        generateThumbnailOnServer: l,
                                      }).then(function (e) {
                                        return {
                                          kind: "upload-completed",
                                          value: e,
                                        };
                                      });
                                    return (S || (S = n("Promise")))
                                      .race([d, c].filter(Boolean))
                                      .finally(function () {
                                        return g.abort();
                                      });
                                  },
                                );
                              return v.kind === "host-changed"
                                ? ((I = v.host), (h = I), d())
                                : v.value;
                            });
                            return function (e) {
                              return c.apply(this, arguments);
                            };
                          })(),
                        )
                      );
                    } catch (e) {
                      var T = r("getErrorSafe")(e);
                      _ = !1;
                      var D = o(
                          "WAWebMmsClientIsErrorRetryable",
                        ).isErrorRetryable(T),
                        x =
                          !D ||
                          y === r("WAWebMmsClientMmsBackoffOptions").retries;
                      if (
                        (x ||
                          c(
                            T,
                            Date.now() - f,
                            y,
                            o("WAWebWamEnumOverallLastUploadRetryPhaseType")
                              .OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                          ),
                        D)
                      )
                        return g(T);
                      throw T;
                    }
                  },
                );
                return function (e, t) {
                  return g.apply(this, arguments);
                };
              })(),
            );
          return { response: y, retryStartTime: f };
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      var t = e.companionUserSecret,
        n = e.directPath,
        a = e.encFilehash,
        i = e.encHandle;
      return q(
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
    function q(e, t) {
      var a = t.directPath,
        i = t.encFilehash,
        l = t.operation,
        s = t.signal,
        u = t.type,
        m = { directPath: a, type: u };
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: s,
          }),
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "runMmsTaskWithBackoff: attempt #",
                      "",
                    ])),
                  n + 1,
                );
                try {
                  var c = yield U({
                      operation: l,
                      directPath: a,
                      encFilehash: i,
                      type: u,
                      signal: s,
                      failCount: n,
                    }),
                    m = c.auth,
                    p = c.hostname,
                    _ = yield e(p, m);
                  return _;
                } catch (e) {
                  var f = r("getErrorSafe")(e);
                  if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(f))
                    return t(f);
                  throw f;
                }
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
        )
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directPath,
            n = e.encFilehash,
            r = e.failCount,
            a = e.operation,
            i = e.signal,
            l = e.type,
            s = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
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
        })),
        V.apply(this, arguments)
      );
    }
    var H = {
        download: I,
        upload: E,
        checkExistence: D,
        getEncryptedMediaSize: x,
        checkIfUploadExists: R,
        deleteMdHistorySyncBlob: W,
      },
      G = H;
    l.default = G;
  },
  98,
);
