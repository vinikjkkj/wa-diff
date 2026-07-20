__d(
  "WAWebMmsClient",
  [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebMediaHosts",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsDeleteMdHistorySyncBlob",
    "WAWebMmsClientMmsDownload",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsClientUsingDependencies",
    "WAWebMmsMediaTypes",
    "WAWebMmsOperationsConst",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.debugString,
            n = e.directPath,
            a = e.filehash,
            i = e.onDownloadAttemptSuccess,
            l = e.staticUrl,
            s = e.type,
            u = { directPath: n, filehash: a, type: s, staticUrl: l };
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.download: [",
                "] start",
              ])),
            t,
          );
          try {
            var c = yield S(e),
              p = c.response,
              _ = c.retryStartTime;
            return (
              i(Date.now() - _),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.download: [",
                    "] success",
                  ])),
                t,
              ),
              p
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return C(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsCheckExistence(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function y(e) {
      return C(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsGetEncryptedMediaSize(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function C(t, a) {
      var i = a.directPath,
        l = a.encFilehash,
        u = a.signal,
        c = a.type,
        d = { directPath: i, type: c };
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: u,
          }),
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "runMmsTaskWithBackoff: attempt #",
                      "",
                    ])),
                  n + 1,
                );
                try {
                  var a = yield b({
                      operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                      directPath: i,
                      encFilehash: l,
                      type: c,
                      signal: u,
                      failCount: n,
                    }),
                    d = yield t(a);
                  return d;
                } catch (t) {
                  var m = r("getErrorSafe")(t);
                  if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(m))
                    return e(m);
                  throw m;
                }
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
        )
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.byteRange,
            a = e.debugString,
            i = e.directPath,
            l = e.filehash,
            s = e.mode,
            u = e.onData,
            c = e.onDownloadAttemptError,
            d = e.onDownloadHostFound,
            m = e.onProgress,
            f = e.signal,
            g = e.staticUrl,
            h = e.type,
            y = Date.now(),
            C = !1,
            b = { directPath: i, filehash: l, type: h, staticUrl: g },
            v = null,
            S = yield o("WAExponentialBackoff").exponentialBackoff(
              babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                signal: f,
              }),
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, b) {
                    ((y = Date.now()),
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "mmsClient.download: [",
                            "] attempt #",
                            "",
                          ])),
                        a,
                        b + 1,
                      ));
                    var S = function (t) {
                      return o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                        operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                        directPath: i,
                        encFilehash: l,
                        type: h,
                        signal: f,
                        forceRefresh: t,
                      });
                    };
                    try {
                      var R = yield S(),
                        L = R.fallbackHost,
                        E = R.selectedHost,
                        k = r("WAWebMmsClientSelectHost")({
                          selectedHost: E,
                          fallbackHost: L,
                          attemptCount: b,
                          lastHostUsed: v,
                          lastFetchMadeProgress: C,
                        });
                      ((v = k),
                        d({
                          hostName: k.hostname,
                          hostClass: k.class,
                          failCount: b,
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
                                p = function (t) {
                                  (m == null || m(t),
                                    (C = !0),
                                    t.lengthComputable && (I = t.loaded));
                                };
                              I = 0;
                              var y = new AbortController(),
                                b = y.signal,
                                R = yield r("WARaceSignal")(
                                  [f, b],
                                  function (e) {
                                    var r = o("WAWebMmsClientMmsDownload")
                                        .mms4Download({
                                          directPath: i,
                                          encFilehash: l,
                                          staticUrl: g,
                                          hostname: k.hostname,
                                          type: h,
                                          signal: e,
                                          mode: s,
                                          byteRange: t,
                                          debugString: a,
                                          onHeadersReceived: x,
                                          onProgress: p,
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
                                      ).shouldPollDownloadHosts(h, T)
                                        ? o("WAWebMmsClientPollMediaHosts")
                                            .pollMediaHosts({
                                              connectionBlock: D,
                                              getHost: function () {
                                                return k;
                                              },
                                              getMediaHosts: function () {
                                                return S(!0);
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
                                    return (_ || (_ = n("Promise")))
                                      .race([r, c].filter(Boolean))
                                      .finally(function () {
                                        return y.abort();
                                      });
                                  },
                                );
                              return R.kind === "host-changed"
                                ? ((k = R.host), (v = k), d())
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
                      C = !1;
                      var P = o(
                          "WAWebMmsClientIsErrorRetryable",
                        ).isErrorRetryable($),
                        N =
                          !P ||
                          b === r("WAWebMmsClientMmsBackoffOptions").retries;
                      if (
                        (N ||
                          c({
                            error: $,
                            overallT: Date.now() - y,
                            failCount: b,
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
          return { response: r("nullthrows")(S), retryStartTime: y };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e.companionUserSecret,
        n = e.directPath,
        a = e.encFilehash,
        i = e.encHandle;
      return E(
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
    function E(e, t) {
      var a = t.directPath,
        i = t.encFilehash,
        l = t.operation,
        s = t.signal,
        d = t.type,
        m = { directPath: a, type: d };
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "runMmsTaskWithBackoff: attempt #",
                      "",
                    ])),
                  n + 1,
                );
                try {
                  var u = yield k({
                      operation: l,
                      directPath: a,
                      encFilehash: i,
                      type: d,
                      signal: s,
                      failCount: n,
                    }),
                    m = u.auth,
                    p = u.hostname,
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
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        I.apply(this, arguments)
      );
    }
    var T = o(
        "WAWebMmsClientUsingDependencies",
      ).createPartialMmsClientUsingDependencies({
        mediaHosts: o("WAWebMediaHosts").mediaHosts,
        networkStatus: r("WAWebNetworkStatus"),
      }),
      D = babelHelpers.extends(
        {
          download: f,
          checkExistence: h,
          getEncryptedMediaSize: y,
          deleteMdHistorySyncBlob: L,
        },
        T,
      ),
      x = D;
    l.default = x;
  },
  98,
);
