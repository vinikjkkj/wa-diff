__d(
  "WAWebMmsClientUploadStreamer",
  [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WARaceSignal",
    "WARetryPromise",
    "WAWebHttpErrors",
    "WAWebMediaHosts",
    "WAWebMediaHostsRouteSelection",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsUploadStream",
    "WAWebMmsClientPollMediaHosts",
    "WAWebMmsClientSelectHost",
    "WAWebMmsMediaTypes",
    "WAWebNetworkStatus",
    "WAWebWamEnumOverallLastUploadRetryPhaseType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["auth"],
      s,
      u,
      c,
      d;
    function m(e, t) {
      var n = g(t);
      return (
        t === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && n > 0 && e > n
      );
    }
    var p = (function () {
      function t(e) {
        var t, r;
        ((this.$2 = Date.now()),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$9 = (d || (d = n("Promise"))).resolve()),
          (this.$6 = e.encFilehash),
          (this.$5 = e.type),
          (this.$7 = e.signal),
          (this.$3 = (t = e.byteOffset) != null ? t : 0),
          (this.$1 = e.encFilehash.slice(0, 10)),
          (this.$11 = e.token),
          (this.$12 = (r = e.generateThumbnailOnServer) != null ? r : !1),
          (this.$13 = e.onUploadHostFound),
          (this.$14 = e.onUploadAttemptSuccess),
          (this.$15 = e.onUploadAttemptError),
          (this.$16 = e.onProgress),
          (this.$17 = e.onFinalize),
          (this.$18 = e.onStreamUploadStart),
          (this.$10 = e.mediaId));
      }
      var a = t.prototype;
      return (
        (a.uploadCompleteFile = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n,
              a = e.ciphertextHmac,
              i = new Uint8Array(a);
            this.$8 = i.byteLength;
            var l = g(this.$5),
              u = l === 0 ? i.byteLength : l;
            ((t = this.$18) == null || t.call(this),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadStreamer: [",
                    "] start upload",
                  ])),
                this.$1,
              ),
              yield r("WAWebNetworkStatus").waitIfOffline());
            for (
              var c = Math.ceil((i.byteLength - this.$3) / u), d = 0;
              d < c;
              d++
            ) {
              this.$19(d, c);
              var m = this.$3 + d * u,
                p = m + u,
                _ = i.subarray(m, p);
              (yield this.$20(_, m), (this.$4 += _.byteLength));
            }
            var f = yield this.$21(this.$6);
            return (
              (n = this.$14) == null || n.call(this, Date.now() - this.$2),
              f
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.startUploadFromClient = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            (yield r("WAWebNetworkStatus").waitIfOffline(),
              (e = this.$18) == null || e.call(this));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.uploadChunkFromClient = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this;
            ((this.$9 = this.$9.then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield t.$20(e, t.$3),
                  (t.$4 += e.byteLength),
                  (t.$3 += e.byteLength));
              }),
            )),
              yield this.$9);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.finalizeUploadFromClient = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n,
              r = yield this.$9.then(function () {
                return t.$21(e);
              });
            return (
              (n = this.$14) == null || n.call(this, Date.now() - this.$2),
              r
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$22 = function () {
          this.$2 = Date.now();
        }),
        (a.$23 = function () {
          return Date.now() - this.$2;
        }),
        (a.$24 = function () {
          if (this.$8 != null) return this.$8 - this.$4;
        }),
        (a.$19 = function (t, n) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "uploadStreamer: [",
                "] uploading chunk ",
                "/",
                "",
              ])),
            this.$1,
            t + 1,
            n,
          );
        }),
        (a.$20 = function (t, a) {
          var e = this;
          return o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: this.$7,
            }),
            (function () {
              var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n, i) {
                  try {
                    yield e.$25(t, a, i);
                  } catch (t) {
                    var l = r("getErrorSafe")(t);
                    if (_(l, i))
                      return (
                        e.$15 == null ||
                          e.$15(
                            l,
                            e.$23(),
                            i,
                            o("WAWebWamEnumOverallLastUploadRetryPhaseType")
                              .OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.UPLOAD,
                          ),
                        e.$22(),
                        n(l)
                      );
                    throw l;
                  }
                },
              );
              return function (e, t) {
                return i.apply(this, arguments);
              };
            })(),
          );
        }),
        (a.$21 = function (t) {
          var e = this;
          return o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: this.$7,
            }),
            (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n, a) {
                  try {
                    return (e.$17 == null || e.$17(), yield e.$26(t, a));
                  } catch (t) {
                    var i = r("getErrorSafe")(t);
                    if (f(i, a))
                      return (
                        e.$15 == null ||
                          e.$15(
                            i,
                            e.$23(),
                            a,
                            o("WAWebWamEnumOverallLastUploadRetryPhaseType")
                              .OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.FINALIZE,
                          ),
                        e.$22(),
                        n(i)
                      );
                    throw i;
                  }
                },
              );
              return function (e, t) {
                return a.apply(this, arguments);
              };
            })(),
          );
        }),
        (a.$25 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, a, i) {
              var l = this,
                s = null,
                u = !1;
              yield r("WAWebNetworkStatus").waitIfOffline();
              var c = yield this.$27(i),
                m = c.auth,
                p = babelHelpers.objectWithoutPropertiesLoose(c, e),
                _ = (s = r("WAWebMmsClientSelectHost")({
                  selectedHost: p.selectedHost,
                  fallbackHost: p.fallbackHost,
                  lastHostUsed: s,
                  lastFetchMadeProgress: u,
                  attemptCount: i,
                })),
                f = function (t) {
                  ((u = !0), l.$16 == null || l.$16(t, a));
                };
              return r("WARetryPromise")(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var u = e.retry,
                        c = new AbortController(),
                        g = c.signal,
                        h = yield r("WARaceSignal")([g, l.$7], function (e) {
                          var r =
                              l.$8 != null &&
                              o(
                                "WAWebMmsClientPollMediaHosts",
                              ).shouldPollUploadHosts(l.$5, l.$8)
                                ? o("WAWebMmsClientPollMediaHosts")
                                    .pollMediaHosts({
                                      connectionBlock: p,
                                      signal: e,
                                      getHost: function () {
                                        return _;
                                      },
                                      getMediaHosts: function () {
                                        return l.$27(i, !0);
                                      },
                                      getRemainingBytes: function () {
                                        return l.$24();
                                      },
                                    })
                                    .then(function (e) {
                                      return { host: e, kind: "host-changed" };
                                    })
                                : null,
                            s = o("WAWebMmsClientMmsUploadStream")
                              .mmsUploadStream({
                                auth: m,
                                encFilehash: l.$6,
                                type: l.$5,
                                hostname: _.hostname,
                                byteStart: a,
                                byteEnd: a + t.byteLength,
                                chunk: t,
                                signal: e,
                                onProgress: f,
                                mediaId: l.$10,
                                token: l.$11,
                                generateThumbnailOnServer: l.$12,
                              })
                              .then(function () {
                                return { kind: "upload-completed" };
                              });
                          return (d || (d = n("Promise")))
                            .race([s, r].filter(Boolean))
                            .finally(function () {
                              return c.abort();
                            });
                        });
                      if (h.kind === "host-changed")
                        return ((s = _), (_ = h.host), u());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            },
          );
          function a(e, n, r) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.$26 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              yield r("WAWebNetworkStatus").waitIfOffline();
              var n = yield this.$27(t),
                a = n.auth,
                i = n.selectedHost;
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "uploadStreamer: [",
                      "] finalizing",
                    ])),
                  this.$1,
                ),
                o("WAWebMmsClientMmsUploadStream").mmsUploadStreamFinalize({
                  auth: a,
                  hostname: i.hostname,
                  encFilehash: this.$6,
                  finalHash: e,
                  type: this.$5,
                  signal: this.$7,
                  mediaId: this.$10,
                  generateThumbnailOnServer: this.$12,
                })
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$27 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n;
              t === void 0 && (t = !1);
              var r = yield o("WAWebMediaHosts").mediaHosts.getHostsInfo({
                operation: o("WAWebMediaHostsRouteSelection").OPERATIONS.UPLOAD,
                encFilehash: this.$6,
                type: this.$5,
                signal: this.$7,
                forceRefresh: t,
              });
              return (
                (n = this.$13) == null ||
                  n.call(this, {
                    failCount: e,
                    hostName: r.selectedHost.hostname,
                    hostClass: r.selectedHost.class,
                  }),
                r
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })();
    function _(e, t) {
      return (
        o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(e) &&
        t < r("WAWebMmsClientMmsBackoffOptions").retries
      );
    }
    function f(e, t) {
      return e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
        e.status >= 500
        ? !1
        : _(e, t);
    }
    function g(e) {
      return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT
        ? 50 * 1024 * 1024
        : 0;
    }
    ((l.shouldUseStreamingUpload = m), (l.UploadStreamer = p));
  },
  98,
);
