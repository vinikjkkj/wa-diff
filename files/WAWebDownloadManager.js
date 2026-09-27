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
    "WAWebMmsDownloadUploadCrashLogger",
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
      var t = this;
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
          function (a) {
            var i,
              l = a.downloadOrigin,
              s = a.downloadQpl,
              u = a.partialVideoOpts,
              c = (i = a.mimetype) != null ? i : "application/octet-stream",
              d = o("WAWebABProps").getABPropConfigValue(
                "web_use_kaleidoscope_media_check_enabled",
              ),
              m = function () {
                return (
                  s.addPoint("download_and_decrypt_start"),
                  x(a).then(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          s.addPoint("download_and_decrypt_end", {
                            int: { byteLength: t.byteLength },
                          });
                          var n = t;
                          if (
                            d &&
                            W({ downloadOrigin: l, partialVideoOpts: u }) &&
                            (yield o(
                              "WAWebKaleidoscopeWasmFeatureSupport",
                            ).checkKaleidoscopeWasmFeatureSupport())
                          ) {
                            s.addPoint("kaleidoscope_classify_start");
                            var i = yield o("WAWebMediaWorkerProxy")
                              .kaleidoscopeClassifyInWorker({
                                mediaType: o(
                                  "WAWebMmsMediaTypes",
                                ).mediaTypeToKaleidoscopeMediaType(a.type),
                                rawMimeType: c,
                                input: t,
                                eventFlow: s,
                              })
                              .catch(function (e) {
                                return {
                                  transferredBuffer: t,
                                  result: o("WAResultOrError").makeError({
                                    errorName:
                                      "worker-connection-runtime-error",
                                    errorMessage: r("getErrorSafe")(e).message,
                                  }),
                                };
                              });
                            n = i.transferredBuffer;
                            var m = i.result;
                            if (m.success) {
                              var p = m.value,
                                _ = p.mimetype,
                                f = p.score;
                              s.addPoint("kaleidoscope_classify_end", {
                                string: { ksMimeType: _ },
                                int: { ksScore: f },
                              });
                              var g = O({
                                ksScore: f,
                                ksMimeType: _,
                                rawMimeType: c,
                                mediaType: a.type,
                              });
                              if (
                                g ===
                                o("WAWebSuspiciousContent")
                                  .WAWebSuspiciousContent.YES
                              )
                                throw new (o(
                                  "WAWebMediaFileErrors",
                                ).InvalidMediaFileType)(
                                  "Kaleidoscope dangerous score " +
                                    f +
                                    " for media type " +
                                    a.type,
                                  a.type,
                                  c,
                                );
                              a.onSuspiciousContent == null ||
                                a.onSuspiciousContent(g);
                            } else {
                              var h;
                              (o("WALogger").WARN(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "kaleidoscopeClassifiyInWorker failed. errorName: ",
                                    ", errorMessage: ",
                                    "",
                                  ])),
                                m.error.errorName,
                                m.error.errorMessage,
                              ),
                                s.addPoint(m.error.errorName, {
                                  string: {
                                    ksFailReason:
                                      (h = m.error.errorMessage) != null
                                        ? h
                                        : m.error.errorName,
                                  },
                                }),
                                s.addPoint("kaleidoscope_classify_fail"));
                            }
                          }
                          return n;
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  )
                );
              },
              p = {
                priority: -T(a.type),
                group:
                  a.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC
                    ? "histSyncChunk"
                    : "thumbnail",
                signal: a.signal,
              };
            return a.isPreload === !0
              ? t.preloader.enqueue(m, p)
              : a.shouldSequenceDownload === !0
                ? t.loadSequence.enqueue(
                    m,
                    babelHelpers.extends({}, p, { group: "thumbnail" }),
                  )
                : m();
          },
        )),
        (this.downloadAndMaybeDecrypt = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n,
              r = e.downloadOrigin,
              a = e.downloadQpl,
              i = e.partialVideoOpts,
              l = e.type,
              s = (n = e.mimetype) != null ? n : "application/octet-stream",
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
                    t.preloader.getRunningTasksCount() +
                    t.loadSequence.getRunningTasksCount(),
                },
              }),
              W({ downloadOrigin: r, partialVideoOpts: i }) && B(l, s),
              t.$1(e)
            );
          });
          return function (t) {
            return e.apply(this, arguments);
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
        }, w)),
        o(
          "WAWebMmsDownloadUploadCrashLogger",
        ).downloadUploadCrashLogger.init());
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
            m = e.isViewOnce,
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
              isViewOnce: m,
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
            z = w.mediaId,
            j = w.startNetworkT,
            K = e.signal || new AbortController().signal,
            Q = o("WAWebMediaDebugString").getDebugString(c),
            X = { directPath: a, encFilehash: s, staticUrl: T, type: D };
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] start",
              ])),
            Q,
          );
          try {
            var Y = F({
                progressiveJpegOpts: I,
                filehash: c,
                debugString: Q,
                scanCount: M,
              }),
              J = function (t) {
                (O(t),
                  Y != null &&
                    (Y = F({
                      progressiveJpegOpts: I,
                      filehash: c,
                      debugString: Q,
                      scanCount: M,
                    })));
              },
              Z = r("WAWebGetMediaDownloadByterange")({
                partialVideoOpts: E,
                progressiveJpegOpts: I,
                scanCount: M,
              }),
              ee =
                M == null && I
                  ? function (e, t) {
                      var n;
                      (n = Y) == null || n.handleProgress(e.total, t);
                    }
                  : null,
              te =
                $ && b != null
                  ? r("WAWebCryptoCreateMediaKeys")(D, b).then(function (e) {
                      var t;
                      return ((t = Y) == null || t.setCryptoKeys(e), e);
                    })
                  : (k || (k = n("Promise"))).resolve(null),
              ne = yield (k || (k = n("Promise"))).all([
                te,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  j();
                  try {
                    return yield r("WAWebMmsClient").download({
                      directPath: a,
                      filehash: $ ? s : c,
                      staticUrl: T,
                      type: D,
                      signal: K,
                      mode: S,
                      byteRange: Z,
                      onData: ee,
                      onDownloadHostFound: q,
                      onDownloadAttemptSuccess: B,
                      onDownloadAttemptError: J,
                      debugString: Q,
                      onProgress: L,
                    });
                  } finally {
                    G();
                  }
                })(),
              ]),
              re = ne[0],
              oe = ne[1];
            U(oe.byteLength);
            var ae = oe;
            if (re != null) {
              (o(
                "WAWebMmsDownloadUploadCrashLogger",
              ).downloadUploadCrashLogger.mark(
                z,
                o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                  .DOWNLOAD_DECRYPTION_STARTED,
              ),
                R == null || R(),
                H(),
                l.addPoint("decrypt_start", {
                  int: { dataSize: oe.byteLength },
                }),
                o("WAWebAppTracker").AppTracker.start(
                  o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                ));
              try {
                if (M != null && Z != null) {
                  var ie,
                    le = Z.end - Z.start + 1,
                    se = yield (ie = Y) == null
                      ? void 0
                      : ie.handleProgress(le, oe);
                  if (se == null)
                    throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                      "Partial PJPEG decryption returned no data (encryptedFileSize=" +
                        le +
                        ", scanCount=" +
                        M +
                        ")",
                    );
                  ae = se;
                } else if (E)
                  ae = yield o(
                    "WAWebCryptoDecryptPartialMedia",
                  ).decryptPartialMedia({ mediaKeys: re, ciphertext: oe });
                else {
                  var ue =
                    o("WAWebABProps").getABPropConfigValue(
                      "web_media_compute_in_worker_enabled",
                    ) === !0;
                  (l.addAnnotations({
                    string: { decrypt_path: ue ? "v2" : "v1" },
                  }),
                    ue
                      ? (ae = yield r("WAWebCryptoDecryptMediaV2")({
                          mediaKeys: re,
                          ciphertextHmac: oe,
                          downloadQpl: l,
                          expectedPlaintextHash: c,
                          debugString: Q,
                        }))
                      : (ae = yield r("WAWebCryptoDecryptMedia")({
                          mediaKeys: re,
                          ciphertextHmac: oe,
                          expectedPlaintextHash: c,
                          debugString: Q,
                        })));
                }
              } finally {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                );
              }
              (l.addPoint("decrypt_end"),
                V(),
                o(
                  "WAWebMmsDownloadUploadCrashLogger",
                ).downloadUploadCrashLogger.mark(
                  z,
                  o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                    .DOWNLOAD_DECRYPTION_FINISHED,
                ));
            } else {
              var ce = E == null && M == null;
              if (ce) {
                var de = yield o("WAWebValidateMediaFilehash").validateFileash(
                  ae,
                  c,
                );
                if (!de)
                  throw new (o("WAWebMediaFileErrors").MediaHashMismatch)();
              }
            }
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.download: [",
                    "] success",
                  ])),
                Q,
              ),
              A(),
              ae
            );
          } catch (t) {
            throw (
              t instanceof o("WAWebMmsClientErrors").MediaNotFoundError
                ? (W(t, !!e.isFinalRmrRetry),
                  o("WALogger")
                    .LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose(
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
                      Q,
                      r("WAWebSerializeError")(t),
                    )
                    .verbose())
                : (W(r("getErrorSafe")(t), !0),
                  o("WALogger")
                    .WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose(
                          ["downloadManager.download: [", "] error\n", ""],
                          ["downloadManager.download: [", "] error\\n", ""],
                        )),
                      Q,
                      r("WAWebSerializeError")(t),
                    )
                    .verbose()),
              o(
                "WAWebMmsDownloadUploadCrashLogger",
              ).downloadUploadCrashLogger.mark(
                z,
                o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                  .DOWNLOAD_ERROR,
              ),
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
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
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
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose(
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose(
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose(
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
      var t = e.ksMimeType,
        n = e.ksScore,
        r = e.mediaType,
        a = e.rawMimeType;
      return n >= 90
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] Kaleidoscope dangerous score ",
                  " for media type ",
                  " (detected ",
                  ", declared ",
                  ")",
                ])),
              n,
              r,
              t,
              a,
            )
            .tags("media", "security"),
          o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES)
        : n >= 80
          ? (o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] Kaleidoscope suspicious score ",
                  " for media type ",
                  " (detected ",
                  ", declared ",
                  ")",
                ])),
              n,
              r,
              t,
              a,
            ),
            o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP)
          : o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO;
    }
    function B(e, t) {
      var n = o("WAWebMmsMediaTypes").mediaTypeToMsgTypeSupportedByAllowlist(e),
        r = !1;
      if (n != null) {
        var a = o("WAWebMmsMediaTypes").getValidMimeTypes(n);
        a == null
          ? (o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function W(e) {
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
    var q = new D();
    ((l.enforceKaleidoscopeScore = O), (l.downloadManager = q));
  },
  98,
);
