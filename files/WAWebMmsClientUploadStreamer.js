__d(
  "WAWebMmsClientUploadStreamer",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["auth"],
      s,
      u,
      c;
    function d(e, t) {
      var n = f(t);
      return (
        t === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && n > 0 && e > n
      );
    }
    var m = (function () {
      function t(e) {
        var t, n;
        ((this.$2 = Date.now()),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$9 = Promise.resolve()),
          (this.$6 = e.encFilehash),
          (this.$5 = e.type),
          (this.$7 = e.signal),
          (this.$3 = (t = e.byteOffset) != null ? t : 0),
          (this.$1 = e.encFilehash.slice(0, 10)),
          (this.$11 = e.token),
          (this.$12 = (n = e.generateThumbnailOnServer) != null ? n : !1),
          (this.$13 = e.onUploadHostFound),
          (this.$14 = e.onUploadAttemptSuccess),
          (this.$15 = e.onUploadAttemptError),
          (this.$16 = e.onProgress),
          (this.$17 = e.onFinalize),
          (this.$18 = e.onStreamUploadStart),
          (this.$10 = e.mediaId));
      }
      var n = t.prototype;
      return (
        (n.uploadCompleteFile = async function (t) {
          var e,
            n,
            a = t.ciphertextHmac,
            i = new Uint8Array(a);
          this.$8 = i.byteLength;
          var l = f(this.$5),
            u = l === 0 ? i.byteLength : l;
          ((e = this.$18) == null || e.call(this),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "uploadStreamer: [",
                  "] start upload",
                ])),
              this.$1,
            ),
            await r("WAWebNetworkStatus").waitIfOffline());
          for (
            var c = Math.ceil((i.byteLength - this.$3) / u), d = 0;
            d < c;
            d++
          ) {
            this.$19(d, c);
            var m = this.$3 + d * u,
              p = m + u,
              _ = i.subarray(m, p);
            (await this.$20(_, m), (this.$4 += _.byteLength));
          }
          var g = await this.$21(this.$6);
          return (
            (n = this.$14) == null || n.call(this, Date.now() - this.$2),
            g
          );
        }),
        (n.startUploadFromClient = async function () {
          var e;
          (await r("WAWebNetworkStatus").waitIfOffline(),
            (e = this.$18) == null || e.call(this));
        }),
        (n.uploadChunkFromClient = async function (t) {
          var e = this;
          ((this.$9 = this.$9.then(async function () {
            (await e.$20(t, e.$3),
              (e.$4 += t.byteLength),
              (e.$3 += t.byteLength));
          })),
            await this.$9);
        }),
        (n.finalizeUploadFromClient = async function (t) {
          var e = this,
            n,
            r = await this.$9.then(function () {
              return e.$21(t);
            });
          return (
            (n = this.$14) == null || n.call(this, Date.now() - this.$2),
            r
          );
        }),
        (n.$22 = function () {
          this.$2 = Date.now();
        }),
        (n.$23 = function () {
          return Date.now() - this.$2;
        }),
        (n.$24 = function () {
          if (this.$8 != null) return this.$8 - this.$4;
        }),
        (n.$19 = function (t, n) {
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
        (n.$20 = function (t, n) {
          var e = this;
          return o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: this.$7,
            }),
            async function (a, i) {
              try {
                await e.$25(t, n, i);
              } catch (t) {
                var l = r("getErrorSafe")(t);
                if (p(l, i))
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
                    a(l)
                  );
                throw l;
              }
            },
          );
        }),
        (n.$21 = function (t) {
          var e = this;
          return o("WAExponentialBackoff").exponentialBackoff(
            babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
              signal: this.$7,
            }),
            async function (n, a) {
              try {
                return (e.$17 == null || e.$17(), await e.$26(t, a));
              } catch (t) {
                var i = r("getErrorSafe")(t);
                if (_(i, a))
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
        }),
        (n.$25 = async function (n, a, i) {
          var t = this,
            l = null,
            s = !1;
          await r("WAWebNetworkStatus").waitIfOffline();
          var u = await this.$27(i),
            c = u.auth,
            d = babelHelpers.objectWithoutPropertiesLoose(u, e),
            m = (l = r("WAWebMmsClientSelectHost")({
              selectedHost: d.selectedHost,
              fallbackHost: d.fallbackHost,
              lastHostUsed: l,
              lastFetchMadeProgress: s,
              attemptCount: i,
            })),
            p = function (n) {
              ((s = !0), t.$16 == null || t.$16(n, a));
            };
          return r("WARetryPromise")(async function (e) {
            var s = e.retry,
              u = new AbortController(),
              _ = u.signal,
              f = await r("WARaceSignal")([_, t.$7], function (e) {
                var r =
                    t.$8 != null &&
                    o("WAWebMmsClientPollMediaHosts").shouldPollUploadHosts(
                      t.$5,
                      t.$8,
                    )
                      ? o("WAWebMmsClientPollMediaHosts")
                          .pollMediaHosts({
                            connectionBlock: d,
                            signal: e,
                            getHost: function () {
                              return m;
                            },
                            getMediaHosts: function () {
                              return t.$27(i, !0);
                            },
                            getRemainingBytes: function () {
                              return t.$24();
                            },
                          })
                          .then(function (e) {
                            return { host: e, kind: "host-changed" };
                          })
                      : null,
                  l = o("WAWebMmsClientMmsUploadStream")
                    .mmsUploadStream({
                      auth: c,
                      encFilehash: t.$6,
                      type: t.$5,
                      hostname: m.hostname,
                      byteStart: a,
                      byteEnd: a + n.byteLength,
                      chunk: n,
                      signal: e,
                      onProgress: p,
                      mediaId: t.$10,
                      token: t.$11,
                      generateThumbnailOnServer: t.$12,
                    })
                    .then(function () {
                      return { kind: "upload-completed" };
                    });
                return Promise.race([l, r].filter(Boolean)).finally(
                  function () {
                    return u.abort();
                  },
                );
              });
            if (f.kind === "host-changed") return ((l = m), (m = f.host), s());
          });
        }),
        (n.$26 = async function (t, n) {
          await r("WAWebNetworkStatus").waitIfOffline();
          var e = await this.$27(n),
            a = e.auth,
            i = e.selectedHost;
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
              finalHash: t,
              type: this.$5,
              signal: this.$7,
              mediaId: this.$10,
              generateThumbnailOnServer: this.$12,
            })
          );
        }),
        (n.$27 = async function (t, n) {
          var e;
          n === void 0 && (n = !1);
          var r = await o("WAWebMediaHosts").mediaHosts.getHostsInfo({
            operation: o("WAWebMediaHostsRouteSelection").OPERATIONS.UPLOAD,
            encFilehash: this.$6,
            type: this.$5,
            signal: this.$7,
            forceRefresh: n,
          });
          return (
            (e = this.$13) == null ||
              e.call(this, {
                failCount: t,
                hostName: r.selectedHost.hostname,
                hostClass: r.selectedHost.class,
              }),
            r
          );
        }),
        t
      );
    })();
    function p(e, t) {
      return (
        o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(e) &&
        t < r("WAWebMmsClientMmsBackoffOptions").retries
      );
    }
    function _(e, t) {
      return e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
        e.status >= 500
        ? !1
        : p(e, t);
    }
    function f(e) {
      return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT
        ? 50 * 1024 * 1024
        : 0;
    }
    ((l.shouldUseStreamingUpload = d), (l.UploadStreamer = m));
  },
  98,
);
