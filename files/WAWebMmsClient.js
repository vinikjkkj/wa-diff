__d(
  "WAWebMmsClient",
  [
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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(t) {
      var n = t.debugString,
        a = t.directPath,
        i = t.filehash,
        l = t.onDownloadAttemptSuccess,
        u = t.staticUrl,
        c = t.type,
        d = { directPath: a, filehash: i, type: c, staticUrl: u };
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "mmsClient.download: [",
            "] start",
          ])),
        n,
      );
      try {
        var m = await C(t),
          p = m.response,
          _ = m.retryStartTime;
        return (
          l(Date.now() - _),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "mmsClient.download: [",
                "] success",
              ])),
            n,
          ),
          p
        );
      } catch (e) {
        var f = r("getErrorSafe")(e);
        throw (
          o("WAWebMmsClientMmsLogError").mmsLogError({
            debug: d,
            error: f,
            source: "mmsClient.download",
          }),
          f
        );
      }
    }
    function f(e) {
      return h(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsCheckExistence(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function g(e) {
      return h(function (t) {
        return o("WAWebMmsClientMmsDownload").mmsGetEncryptedMediaSize(
          babelHelpers.extends({}, e, { hostname: t }),
        );
      }, e);
    }
    function h(e, t) {
      var n = t.directPath,
        a = t.encFilehash,
        i = t.signal,
        l = t.type,
        s = { directPath: n, type: l };
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: i,
          }),
          async function (t, s) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "runMmsTaskWithBackoff: attempt #",
                  "",
                ])),
              s + 1,
            );
            try {
              var u = await y({
                  operation: r("WAWebMmsOperationsConst").DOWNLOAD,
                  directPath: n,
                  encFilehash: a,
                  type: l,
                  signal: i,
                  failCount: s,
                }),
                d = await e(u);
              return d;
            } catch (e) {
              var m = r("getErrorSafe")(e);
              if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(m))
                return t(m);
              throw m;
            }
          },
        )
      );
    }
    async function y(e) {
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
    async function C(e) {
      var t = e.byteRange,
        n = e.debugString,
        a = e.directPath,
        i = e.filehash,
        l = e.mode,
        s = e.onData,
        u = e.onDownloadAttemptError,
        c = e.onDownloadHostFound,
        m = e.onProgress,
        p = e.signal,
        _ = e.staticUrl,
        f = e.type,
        g = Date.now(),
        h = !1,
        y = { directPath: a, filehash: i, type: f, staticUrl: _ },
        C = null,
        b = await o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: p,
          }),
          async function (e, y) {
            ((g = Date.now()),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
                type: f,
                signal: p,
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
                  lastFetchMadeProgress: h,
                });
              ((C = L),
                c({ hostName: L.hostname, hostClass: L.class, failCount: y }));
              var E = 0,
                k = null,
                I = { selectedHost: R, fallbackHost: S },
                T = function (t) {
                  if (t != null && k == null) {
                    var e = t.get("Content-Length"),
                      n = parseInt(String(e), 10);
                    k = Number.isNaN(n) ? null : n;
                  }
                };
              return await r("WARetryPromise")(async function (e) {
                var u = e.failCount,
                  c = e.retry,
                  d = function (t) {
                    (m == null || m(t),
                      (h = !0),
                      t.lengthComputable && (E = t.loaded));
                  };
                E = 0;
                var g = new AbortController(),
                  y = g.signal,
                  v = await r("WARaceSignal")([p, y], function (e) {
                    var r = o("WAWebMmsClientMmsDownload")
                        .mms4Download({
                          directPath: a,
                          encFilehash: i,
                          staticUrl: _,
                          hostname: L.hostname,
                          type: f,
                          signal: e,
                          mode: l,
                          byteRange: t,
                          debugString: n,
                          onHeadersReceived: T,
                          onProgress: d,
                          onData: s,
                          downloadBucket: L.selectedBucket,
                        })
                        .then(function (e) {
                          return { kind: "download-completed", arrayBuffer: e };
                        }),
                      u = o(
                        "WAWebMmsClientPollMediaHosts",
                      ).shouldPollDownloadHosts(f, k)
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
                        return g.abort();
                      },
                    );
                  });
                return v.kind === "host-changed"
                  ? ((L = v.host), (C = L), c())
                  : v.arrayBuffer;
              });
            } catch (t) {
              var D = r("getErrorSafe")(t);
              h = !1;
              var x = o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(D),
                $ = !x || y === r("WAWebMmsClientMmsBackoffOptions").retries;
              if (
                ($ || u({ error: D, overallT: Date.now() - g, failCount: y }),
                x)
              )
                return e(D);
              throw D;
            }
          },
        );
      return { response: r("nullthrows")(b), retryStartTime: g };
    }
    function b(e) {
      var t = e.companionUserSecret,
        n = e.directPath,
        a = e.encFilehash,
        i = e.encHandle;
      return v(
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
    function v(e, t) {
      var n = t.directPath,
        a = t.encFilehash,
        i = t.operation,
        l = t.signal,
        s = t.type,
        u = { directPath: n, type: s };
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "runTaskWithBackoff: start",
            ])),
        ),
        o("WAExponentialBackoff").exponentialBackoff(
          babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
            signal: l,
          }),
          async function (t, u) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "runMmsTaskWithBackoff: attempt #",
                  "",
                ])),
              u + 1,
            );
            try {
              var c = await S({
                  operation: i,
                  directPath: n,
                  encFilehash: a,
                  type: s,
                  signal: l,
                  failCount: u,
                }),
                d = c.auth,
                m = c.hostname,
                _ = await e(m, d);
              return _;
            } catch (e) {
              var f = r("getErrorSafe")(e);
              if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(f))
                return t(f);
              throw f;
            }
          },
        )
      );
    }
    async function S(e) {
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
    var R = o(
        "WAWebMmsClientUsingDependencies",
      ).createPartialMmsClientUsingDependencies({
        mediaHosts: o("WAWebMediaHosts").mediaHosts,
        networkStatus: r("WAWebNetworkStatus"),
      }),
      L = babelHelpers.extends(
        {
          download: _,
          checkExistence: f,
          getEncryptedMediaSize: g,
          deleteMdHistorySyncBlob: b,
        },
        R,
      ),
      E = L;
    l.default = E;
  },
  98,
);
