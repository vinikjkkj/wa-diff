__d(
  "WAWebDownloadManager",
  [
    "Promise",
    "WAAsyncCache",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAResultOrError",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebCreateMediaDownloadMetrics",
    "WAWebCryptoCreateMediaKeys",
    "WAWebCryptoDecryptMedia",
    "WAWebCryptoDecryptMediaV2",
    "WAWebCryptoDecryptPartialMedia",
    "WAWebCryptoImageStreamer",
    "WAWebDownloadAndDecryptCache",
    "WAWebDownloadManagerErrors",
    "WAWebFrontendMsgGetters",
    "WAWebGetMediaDownloadByterange",
    "WAWebGetUserMediaErrors",
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDebugString",
    "WAWebMediaFileErrors",
    "WAWebMediaGatingUtils",
    "WAWebMediaLoadErrors",
    "WAWebMediaObject",
    "WAWebMediaTypes",
    "WAWebMediaWorkerProxy",
    "WAWebMmsClient",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebNetworkType",
    "WAWebSerializeError",
    "WAWebSuspiciousContent",
    "WAWebValidateMediaFilehash",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamMsgUtils",
    "WAWebWebcMediaRmrWamEvent",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
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
      S,
      R,
      L,
      E,
      k,
      I = { PRELOAD_MMS_MEDIA: 1, PRELOAD_MMS_THUMBNAIL: 2 };
    function T(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT:
          return I.PRELOAD_MMS_THUMBNAIL;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC:
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
        default:
          return I.PRELOAD_MMS_MEDIA;
      }
    }
    var D = function () {
      var e = this;
      ((this.preloader = new (r("WAConcurrentPriorityPromiseQueue"))(10, {
        thumbnail: 4,
        histSyncChunk: 3,
      })),
        (this.loadSequence = new (r("WAConcurrentPriorityPromiseQueue"))(
          50,
          { thumbnail: 5 },
          0,
        )),
        (this.$1 = o("WAAsyncCache").asyncCache(
          function (e) {
            return o("WAWebDownloadAndDecryptCache").getLRUStoreKey(e);
          },
          new (o("WAWebDownloadAndDecryptCache").DownloadAndDecryptCache)(),
          function (t) {
            var n,
              r = t.downloadOrigin,
              a = t.downloadQpl,
              i = t.partialVideoOpts,
              l = (n = t.mimetype) != null ? n : "application/octet-stream",
              s = o("WAWebABProps").getABPropConfigValue(
                "web_use_kaleidoscope_media_check_enabled",
              ),
              u = function () {
                return (
                  a.addPoint("download_and_decrypt_start"),
                  x(t).then(function (e) {
                    return (
                      a.addPoint("download_and_decrypt_end", {
                        int: { byteLength: e.byteLength },
                      }),
                      G({ downloadOrigin: r, partialVideoOpts: i })
                        ? W({
                            input: e,
                            type: t.type,
                            rawMimeType: l,
                            downloadQpl: a,
                            ksClassifyEnabled: s,
                            failClosed: !1,
                            onSuspiciousContent: t.onSuspiciousContent,
                          })
                        : e
                    );
                  })
                );
              },
              c = {
                priority: -T(t.type),
                group:
                  t.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC
                    ? "histSyncChunk"
                    : "thumbnail",
                signal: t.signal,
              };
            return t.isPreload === !0
              ? e.preloader.enqueue(u, c)
              : t.shouldSequenceDownload === !0
                ? e.loadSequence.enqueue(
                    u,
                    babelHelpers.extends({}, c, { group: "thumbnail" }),
                  )
                : u();
          },
        )),
        (this.downloadAndMaybeDecrypt = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n,
              r = t.downloadOrigin,
              a = t.downloadQpl,
              i = t.partialVideoOpts,
              l = t.type,
              s = (n = t.mimetype) != null ? n : "application/octet-stream",
              u = o("WAWebABProps").getABPropConfigValue(
                "web_use_kaleidoscope_media_check_enabled",
              );
            return (
              a.addAnnotations({
                bool: { ksClassifyEnabled: u, isPartialVideo: i != null },
                string: {
                  mediaType: l,
                  rawMimeType: s,
                  downloadOrigin: r == null ? "unknown" : r.toString(),
                },
                int: {
                  activeDownloadCount:
                    e.preloader.getRunningTasksCount() +
                    e.loadSequence.getRunningTasksCount(),
                },
              }),
              G({ downloadOrigin: r, partialVideoOpts: i }) && H(l, s),
              e.$1(t)
            );
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })()),
        (this.rmr = r("WAMemoizeConcurrent")(function (e) {
          return e.mediaObject.filehash || "";
        }, N)),
        (this.checkExistence = r("WAMemoizeConcurrent")(function (e) {
          var t,
            n = (t = e.encFilehash) != null ? t : e.directPath;
          if (n == null)
            throw r("err")("checkExistence requires encFilehash or directPath");
          return n;
        }, w)));
    };
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            a = e.directPath,
            i = e.downloadOrigin,
            l = e.downloadQpl,
            s = e.encFilehash,
            u = e.experienceIds,
            c = e.filehash,
            d = e.imageDimensions,
            C = e.isViewOnce,
            b = e.mediaKey,
            v = e.mediaKeyTimestamp,
            S = e.mode,
            R = e.onDecryptStart,
            L = e.onProgress,
            E = e.partialVideoOpts,
            I = e.progressiveJpegOpts,
            T = e.staticUrl,
            D = e.type,
            x = e.userDownloadAttemptCount,
            $ = o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(D);
          if (b == null && $)
            throw (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[DownloadManager] expected media key for media type ",
                      "",
                    ])),
                  D,
                )
                .tags("media")
                .sendLogs("missing-media-key-for-media-type-" + D),
              new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                "decryptMedia: missing key for type " + D,
              )
            );
          if (s == null && $) {
            if (D !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
              throw (
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[DownloadManager] expected encFilehash for media type ",
                        "",
                      ])),
                    D,
                  )
                  .tags("media")
                  .sendLogs("missing-encfilehash-for-media-type-" + D),
                new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                  "decryptMedia: missing encFilehash for type " + D,
                )
              );
            if (T == null && a == null)
              throw (
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[DownloadManager] product media missing encFilehash and directPath/staticUrl",
                      ])),
                  )
                  .tags("media")
                  .sendLogs("missing-encfilehash-and-path-for-product"),
                new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                  "decryptMedia: missing encFilehash and directPath/staticUrl for type " +
                    D,
                )
              );
          }
          var P = I == null ? void 0 : I.scanCount,
            N =
              I != null &&
              (I.scanCount == null || I.scanCount === I.scanLengths.length),
            M = N ? null : P,
            w = yield o(
              "WAWebCreateMediaDownloadMetrics",
            ).createMediaDownloadMetrics({
              directPath: a,
              downloadOrigin: i,
              type: D,
              userDownloadAttemptCount: x,
              isViewOnce: C,
              downloadMode: S,
              isPrefetch: I != null && !N,
              imageDimensions: d,
              chatWid: t,
              mediaKeyTimestamp: v,
              experienceIds: u,
            }),
            A = w.handleDownloadAndDecryptSuccess,
            O = w.handleDownloadAttemptError,
            B = w.handleDownloadAttemptSuccess,
            W = w.handleDownloadError,
            q = w.handleDownloadHostFound,
            U = w.handleDownloadSuccess,
            V = w.markDecryptionEnd,
            H = w.markDecryptionStart,
            G = w.markNetworkT,
            z = w.startNetworkT,
            j = e.signal || new AbortController().signal,
            K = o("WAWebMediaDebugString").getDebugString(c),
            Q = { directPath: a, encFilehash: s, staticUrl: T, type: D };
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] start",
              ])),
            K,
          );
          try {
            var X = F({
                progressiveJpegOpts: I,
                filehash: c,
                debugString: K,
                scanCount: M,
              }),
              Y = function (t) {
                (O(t),
                  X != null &&
                    (X = F({
                      progressiveJpegOpts: I,
                      filehash: c,
                      debugString: K,
                      scanCount: M,
                    })));
              },
              J = r("WAWebGetMediaDownloadByterange")({
                partialVideoOpts: E,
                progressiveJpegOpts: I,
                scanCount: M,
              }),
              Z =
                M == null && I
                  ? function (e, t) {
                      var n;
                      (n = X) == null || n.handleProgress(e.total, t);
                    }
                  : null,
              ee =
                $ && b != null
                  ? r("WAWebCryptoCreateMediaKeys")(D, b).then(function (e) {
                      var t;
                      return ((t = X) == null || t.setCryptoKeys(e), e);
                    })
                  : (k || (k = n("Promise"))).resolve(null),
              te = yield (k || (k = n("Promise"))).all([
                ee,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  z();
                  try {
                    return yield r("WAWebMmsClient").download({
                      directPath: a,
                      filehash: $ ? s : c,
                      staticUrl: T,
                      type: D,
                      signal: j,
                      mode: S,
                      byteRange: J,
                      onData: Z,
                      onDownloadHostFound: q,
                      onDownloadAttemptSuccess: B,
                      onDownloadAttemptError: Y,
                      debugString: K,
                      onProgress: L,
                    });
                  } finally {
                    G();
                  }
                })(),
              ]),
              ne = te[0],
              re = te[1];
            U(re.byteLength);
            var oe = re;
            if (ne != null) {
              (R == null || R(),
                H(),
                l.addPoint("decrypt_start", {
                  int: { dataSize: re.byteLength },
                }),
                o("WAWebAppTracker").AppTracker.start(
                  o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                ));
              try {
                if (M != null && J != null) {
                  var ae,
                    ie = J.end - J.start + 1,
                    le = yield (ae = X) == null
                      ? void 0
                      : ae.handleProgress(ie, re);
                  if (le == null)
                    throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                      "Partial PJPEG decryption returned no data (encryptedFileSize=" +
                        ie +
                        ", scanCount=" +
                        M +
                        ")",
                    );
                  oe = le;
                } else if (E)
                  oe = yield o(
                    "WAWebCryptoDecryptPartialMedia",
                  ).decryptPartialMedia({ mediaKeys: ne, ciphertext: re });
                else {
                  var se =
                    o("WAWebABProps").getABPropConfigValue(
                      "web_media_compute_in_worker_enabled",
                    ) === !0;
                  (l.addAnnotations({
                    string: { decrypt_path: se ? "v2" : "v1" },
                  }),
                    se
                      ? (oe = yield r("WAWebCryptoDecryptMediaV2")({
                          mediaKeys: ne,
                          ciphertextHmac: re,
                          downloadQpl: l,
                          expectedPlaintextHash: c,
                          debugString: K,
                        }))
                      : (oe = yield r("WAWebCryptoDecryptMedia")({
                          mediaKeys: ne,
                          ciphertextHmac: re,
                          expectedPlaintextHash: c,
                          debugString: K,
                        })));
                }
              } finally {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                );
              }
              (l.addPoint("decrypt_end"), V());
            } else {
              var ue = E == null && M == null;
              if (ue) {
                var ce = yield o("WAWebValidateMediaFilehash").validateFileash(
                  oe,
                  c,
                );
                if (!ce)
                  throw new (o("WAWebMediaFileErrors").MediaHashMismatch)();
              }
            }
            return (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.download: [",
                    "] success",
                  ])),
                K,
              ),
              A(),
              oe
            );
          } catch (t) {
            throw (
              t instanceof o("WAWebMmsClientErrors").MediaNotFoundError
                ? (W(t, !!e.isFinalRmrRetry),
                  o("WALogger")
                    .LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "downloadManager.download: [",
                            "] expected error\n",
                            "",
                          ],
                          [
                            "downloadManager.download: [",
                            "] expected error\\n",
                            "",
                          ],
                        )),
                      K,
                      r("WAWebSerializeError")(t),
                    )
                    .verbose())
                : (W(r("getErrorSafe")(t), !0),
                  o("WALogger")
                    .WARN(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose(
                          ["downloadManager.download: [", "] error\n", ""],
                          ["downloadManager.download: [", "] error\\n", ""],
                        )),
                      K,
                      r("WAWebSerializeError")(t),
                    )
                    .verbose()),
              t
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    var P = 6e4;
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaObject,
            n = o("WAWebMediaDebugString").getDebugString(t.filehash),
            a = { filehash: t.filehash, type: t.type };
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.rmr: [",
                "] start",
              ])),
            n,
          ),
            t.consolidate({
              downloadStage: o("WAWebMediaTypes").DownloadStage.REUPLOADING,
            }));
          var i = self.performance.now(),
            l = new (o("WAWebWebcMediaRmrWamEvent").WebcMediaRmrWamEvent)(
              babelHelpers.extends({}, e.rmrData, {
                webcRmrReason: e.rmrReason,
              }),
            ),
            s = o("WAWebNetworkType").getEffectiveNetworkType();
          (s != null && (l.webcBrowserNetworkType = s),
            t.type &&
              (l.messageMediaType = o(
                "WAWebMediaObject",
              ).webMediaTypeToWamMediaType(t.type)),
            t.size != null && (l.webcMediaSize = t.size));
          function u(e) {
            var t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
            (l.webcChatType == null &&
              t &&
              (l.webcChatType = t.getWebcChatType()),
              l.webcMessageT == null && (l.webcMessageT = e.t),
              (l.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(e)));
          }
          var c = null;
          try {
            var d = t.rmr({ onMsgSelect: u });
            c = window.setTimeout(function () {
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "downloadManager.rmr: [",
                      "] RMR still pending after ",
                      "ms, type ",
                      "",
                    ])),
                  n,
                  P,
                  String(t.type),
                )
                .tags("non-sad")
                .sendLogs("media-rmr-slow");
            }, P);
            var m = yield d;
            if (
              ((l.webcRmrStatusCode = m),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.rmr: [",
                    "] status ",
                    "",
                  ])),
                n,
                m,
              ),
              m === 404)
            )
              throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
            if (m !== 200)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(m);
          } catch (e) {
            if (
              ((l.webcMediaRmrError = !0),
              e instanceof
                o("WAWebGetUserMediaErrors")
                  .RMRNotSupportedOnNewsletterMessagesError)
            )
              throw (
                e.mediaType ===
                  o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER ||
                e.mediaType ===
                  o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER_PACK
                  ? t.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.RESOLVED,
                    })
                  : o("WALogger")
                      .WARN(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose(
                            [
                              "downloadManager.rmr: [",
                              "] error RMRNotSupportedOnNewsletterMessagesError",
                              "\n",
                              "",
                            ],
                            [
                              "downloadManager.rmr: [",
                              "] error RMRNotSupportedOnNewsletterMessagesError",
                              "\\n",
                              "",
                            ],
                          )),
                        n,
                        e.message,
                        e.stack,
                      )
                      .verbose(),
                e
              );
            if (e instanceof o("WAWebDownloadManagerErrors").MediaNotOnPhone)
              throw (
                o("WALogger")
                  .LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "downloadManager.rmr: [",
                          "] error MediaNotOnPhone\n",
                          "",
                        ],
                        [
                          "downloadManager.rmr: [",
                          "] error MediaNotOnPhone\\n",
                          "",
                        ],
                      )),
                    n,
                    r("WAWebSerializeError")(e),
                  )
                  .verbose(),
                e
              );
            var p = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose(
                      ["downloadManager.rmr: [", "] error ", "\n", ""],
                      ["downloadManager.rmr: [", "] error ", "\\n", ""],
                    )),
                  n,
                  p.message,
                  p.stack,
                )
                .verbose(),
              new (o("WAWebMediaLoadErrors").MediaNeedsReupload)()
            );
          } finally {
            (c != null && window.clearTimeout(c),
              (l.webcMediaRmrT = Math.ceil(self.performance.now() - i)),
              l.commit());
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.directPath,
            n = e.encFilehash,
            o = e.signal,
            a = e.type;
          yield r("WAWebMmsClient").checkExistence({
            directPath: t,
            encFilehash: n,
            type: a,
            signal: o || new AbortController().signal,
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = e.debugString,
        n = e.filehash,
        r = e.progressiveJpegOpts,
        a = e.scanCount;
      if (r == null) return null;
      var i =
          a == null ||
          o("WAWebMediaGatingUtils").getHQImageThumbnailInChatScans() === 0
            ? null
            : a,
        l = i == null ? r.scanLengths : r.scanLengths.slice(0, i),
        s =
          i == null
            ? r.scansSidecar
            : r.scansSidecar.slice(
                0,
                i * o("WAWebCryptoDecryptPartialMedia").HMAC_SIZE,
              );
      return new (o("WAWebCryptoImageStreamer").ImageStreamer)({
        scanLengths: l,
        scansSidecar: s,
        mimetype: r.mimetype,
        filehash: n,
        debugString: t,
        onProgressiveUpdate: r.onProgressiveUpdate,
      });
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.downloadOrigin,
            n = e.downloadQpl,
            r = e.input,
            a = e.mimetype,
            i = e.onSuspiciousContent,
            l = e.type;
          if (!G({ downloadOrigin: t, partialVideoOpts: null })) return r;
          var s = a != null ? a : "application/octet-stream";
          return (
            H(l, s),
            W({
              input: r,
              type: l,
              rawMimeType: s,
              downloadQpl: n,
              ksClassifyEnabled: o("WAWebABProps").getABPropConfigValue(
                "web_use_kaleidoscope_media_check_enabled",
              ),
              failClosed: !0,
              onSuspiciousContent: i,
            })
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.downloadQpl,
            n = e.failClosed,
            a = e.input,
            i = e.ksClassifyEnabled,
            l = e.onSuspiciousContent,
            s = e.rawMimeType,
            u = e.type;
          if (
            !i ||
            !(yield o(
              "WAWebKaleidoscopeWasmFeatureSupport",
            ).checkKaleidoscopeWasmFeatureSupport())
          )
            return a;
          t.addPoint("kaleidoscope_classify_start");
          var c = yield o("WAWebMediaWorkerProxy")
              .kaleidoscopeClassifyInWorker({
                mediaType:
                  o("WAWebMmsMediaTypes").mediaTypeToKaleidoscopeMediaType(u),
                rawMimeType: s,
                input: a,
                eventFlow: t,
              })
              .catch(function (e) {
                return {
                  transferredBuffer: a,
                  result: o("WAResultOrError").makeError({
                    errorName: "worker-connection-runtime-error",
                    errorMessage: r("getErrorSafe")(e).message,
                  }),
                };
              }),
            d = c.result;
          if (d.success) {
            var m = d.value,
              p = m.mimetype,
              _ = m.score;
            t.addPoint("kaleidoscope_classify_end", {
              string: { ksMimeType: p },
              int: { ksScore: _ },
            });
            var f = U({
              ksScore: _,
              ksMimeType: p,
              rawMimeType: s,
              mediaType: u,
            });
            if (f === o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES)
              throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
                "Kaleidoscope dangerous score " + _ + " for media type " + u,
                u,
                s,
              );
            l == null || l(f);
          } else {
            var g;
            if (
              (o("WALogger").WARN(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "kaleidoscopeClassifiyInWorker failed. errorName: ",
                    ", errorMessage: ",
                    "",
                  ])),
                d.error.errorName,
                d.error.errorMessage,
              ),
              t.addPoint(d.error.errorName, {
                string: {
                  ksFailReason:
                    (g = d.error.errorMessage) != null ? g : d.error.errorName,
                },
              }),
              t.addPoint("kaleidoscope_classify_fail"),
              n)
            )
              throw r("err")(
                "kaleidoscope classify failed: " + d.error.errorName,
              );
            V(u) &&
              (t.addPoint("kaleidoscope_classify_fail_warned"),
              l == null ||
                l(o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP));
          }
          return c.transferredBuffer;
        })),
        q.apply(this, arguments)
      );
    }
    function U(t) {
      var n = t.ksMimeType,
        r = t.ksScore,
        a = t.mediaType,
        i = t.rawMimeType;
      return r >= 90
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] Kaleidoscope dangerous score ",
                  " for media type ",
                  " (detected ",
                  ", declared ",
                  ")",
                ])),
              r,
              a,
              n,
              i,
            )
            .tags("media", "security"),
          o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES)
        : r >= 80
          ? (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] Kaleidoscope suspicious score ",
                  " for media type ",
                  " (detected ",
                  ", declared ",
                  ")",
                ])),
              r,
              a,
              n,
              i,
            ),
            o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP)
          : o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO;
    }
    function V(e) {
      return (
        (e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT ||
          e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_DOCUMENT) &&
        o("WAWebABProps").getABPropConfigValue(
          "document_format_verification_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "document_format_verification_enforcement_enabled",
        )
      );
    }
    function H(e, t) {
      var n = o("WAWebMmsMediaTypes").mediaTypeToMsgTypeSupportedByAllowlist(e),
        r = !1;
      if (n != null) {
        var a = o("WAWebMmsMediaTypes").getValidMimeTypes(n);
        a == null
          ? (o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] no mime type allowlist for msg type ",
                    " (media type ",
                    ")",
                  ])),
                n,
                e,
              )
              .tags("media")
              .sendLogs("no-mimetype-allowlist-for-msg-type-" + n),
            (r = !0))
          : a.has(t) ||
            (o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] unexpected mimetype ",
                    " for media type ",
                    "",
                  ])),
                t,
                e,
              )
              .tags("media", "security")
              .sendLogs("unexpected-mimetype-for-media-type-" + e),
            (r = !0));
      } else
        t.toLowerCase() === "image/svg+xml" &&
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] blocked SVG mimetype for media type ",
                  "",
                ])),
              e,
            )
            .tags("media", "security")
            .sendLogs("blocked-svg-mimetype"),
          (r = !0));
      if (r)
        throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
          "Unexpected mimetype " + t + " for media type " + e,
          e,
          t,
        );
    }
    function G(e) {
      var t = e.downloadOrigin,
        n = e.partialVideoOpts;
      switch (t) {
        case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .PROFILE_PICTURE:
        case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .STATUS_ADS:
        case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .PRODUCT_CATALOG:
        case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .MESSAGE_HISTORY_SYNC:
        case o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.GDPR:
          return !1;
      }
      return n == null;
    }
    var z = new D();
    ((l.screenDecryptedMedia = O),
      (l.enforceKaleidoscopeScore = U),
      (l.downloadManager = z));
  },
  98,
);
