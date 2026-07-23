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
    "WAWebMediaGatingUtils",
    "WAWebMediaLoadErrors",
    "WAWebMediaObject",
    "WAWebMediaTypes",
    "WAWebMediaWorkerProxy",
    "WAWebMiscErrors",
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
              d = a.downloadQpl,
              m = a.partialVideoOpts,
              p = (i = a.mimetype) != null ? i : "application/octet-stream",
              _ = o("WAWebABProps").getABPropConfigValue(
                "web_use_kaleidoscope_media_check_enabled",
              ),
              f = function () {
                return (
                  d.addPoint("download_and_decrypt_start"),
                  x(a).then(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          d.addPoint("download_and_decrypt_end", {
                            int: { byteLength: t.byteLength },
                          });
                          var n = t;
                          if (
                            _ &&
                            B({ downloadOrigin: l, partialVideoOpts: m }) &&
                            (yield o(
                              "WAWebKaleidoscopeWasmFeatureSupport",
                            ).checkKaleidoscopeWasmFeatureSupport())
                          ) {
                            d.addPoint("kaleidoscope_classify_start");
                            var i = yield o("WAWebMediaWorkerProxy")
                              .kaleidoscopeClassifyInWorker({
                                mediaType: o(
                                  "WAWebMmsMediaTypes",
                                ).mediaTypeToKaleidoscopeMediaType(a.type),
                                rawMimeType: p,
                                input: t,
                                eventFlow: d,
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
                            var f = i.result;
                            if (f.success) {
                              var g = f.value,
                                h = g.mimetype,
                                y = g.score;
                              d.addPoint("kaleidoscope_classify_end", {
                                string: { ksMimeType: h },
                                int: { ksScore: y },
                              });
                              var C = O({
                                ksScore: y,
                                ksMimeType: h,
                                rawMimeType: p,
                                mediaType: a.type,
                              });
                              if (
                                C ===
                                o("WAWebSuspiciousContent")
                                  .WAWebSuspiciousContent.YES
                              )
                                throw new (o(
                                  "WAWebMiscErrors",
                                ).InvalidMediaFileType)(
                                  "Kaleidoscope dangerous score " +
                                    y +
                                    " for media type " +
                                    a.type,
                                  a.type,
                                  p,
                                );
                              a.onSuspiciousContent == null ||
                                a.onSuspiciousContent(C);
                            } else {
                              var b;
                              (o("WALogger").WARN(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "kaleidoscopeClassifiyInWorker failed. errorName: ",
                                    ", errorMessage: ",
                                    "",
                                  ])),
                                f.error.errorName,
                                f.error.errorMessage,
                              ),
                                d.addPoint(f.error.errorName, {
                                  string: {
                                    ksFailReason:
                                      (b = f.error.errorMessage) != null
                                        ? b
                                        : f.error.errorName,
                                  },
                                }),
                                d.addPoint("kaleidoscope_classify_fail"));
                            }
                          }
                          if (
                            B({ downloadOrigin: l, partialVideoOpts: m }) &&
                            (o(
                              "WAWebMediaGatingUtils",
                            ).isDownloadMimeTypeCheckLogEnabled() ||
                              o(
                                "WAWebMediaGatingUtils",
                              ).isDownloadMimeTypeCheckBlockEnabled())
                          ) {
                            var v = o(
                                "WAWebMmsMediaTypes",
                              ).mediaTypeToMsgTypeSupportedByAllowlist(a.type),
                              S = !1;
                            if (v != null) {
                              var R =
                                o("WAWebMmsMediaTypes").getValidMimeTypes(v);
                              R == null
                                ? (o("WALogger")
                                    .WARN(
                                      s ||
                                        (s =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[DownloadManager] no mime type allowlist for msg type ",
                                              " (media type ",
                                              ")",
                                            ],
                                          )),
                                      v,
                                      a.type,
                                    )
                                    .tags("media")
                                    .sendLogs(
                                      "no-mimetype-allowlist-for-msg-type-" + v,
                                    ),
                                  (S = !0))
                                : R.has(p) ||
                                  (o("WALogger")
                                    .WARN(
                                      u ||
                                        (u =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[DownloadManager] unexpected mimetype ",
                                              " for media type ",
                                              "",
                                            ],
                                          )),
                                      p,
                                      a.type,
                                    )
                                    .tags("media", "security")
                                    .sendLogs(
                                      "unexpected-mimetype-for-media-type-" +
                                        a.type,
                                    ),
                                  (S = !0));
                            } else
                              p.toLowerCase() === "image/svg+xml" &&
                                (o("WALogger")
                                  .WARN(
                                    c ||
                                      (c =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[DownloadManager] blocked SVG mimetype for media type ",
                                            "",
                                          ],
                                        )),
                                    a.type,
                                  )
                                  .tags("media", "security")
                                  .sendLogs("blocked-svg-mimetype"),
                                (S = !0));
                            if (
                              S &&
                              o(
                                "WAWebMediaGatingUtils",
                              ).isDownloadMimeTypeCheckBlockEnabled()
                            )
                              throw new (o(
                                "WAWebMiscErrors",
                              ).InvalidMediaFileType)(
                                "Unexpected mimetype " +
                                  p +
                                  " for media type " +
                                  a.type,
                                a.type,
                                p,
                              );
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
              g = {
                priority: -T(a.type),
                group:
                  a.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC
                    ? "histSyncChunk"
                    : "thumbnail",
                signal: a.signal,
              };
            return a.isPreload === !0
              ? t.preloader.enqueue(f, g)
              : a.shouldSequenceDownload === !0
                ? t.loadSequence.enqueue(
                    f,
                    babelHelpers.extends({}, g, { group: "thumbnail" }),
                  )
                : f();
          },
        )),
        (this.downloadAndMaybeDecrypt = function (e) {
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
            t.$1(e)
          );
        }),
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
            u = e.filehash,
            c = e.imageDimensions,
            d = e.isViewOnce,
            m = e.mediaKey,
            b = e.mediaKeyTimestamp,
            v = e.mode,
            S = e.onDecryptStart,
            R = e.onProgress,
            L = e.partialVideoOpts,
            E = e.progressiveJpegOpts,
            I = e.staticUrl,
            T = e.type,
            D = e.userDownloadAttemptCount,
            x = o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(T);
          if (m == null && x)
            throw (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[DownloadManager] expected media key for media type ",
                      "",
                    ])),
                  T,
                )
                .tags("media")
                .sendLogs("missing-media-key-for-media-type-" + T),
              new (o("WAWebMiscErrors").MediaDecryptionError)(
                "decryptMedia: missing key for type " + T,
              )
            );
          if (s == null && x) {
            if (T !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
              throw (
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[DownloadManager] expected encFilehash for media type ",
                        "",
                      ])),
                    T,
                  )
                  .tags("media")
                  .sendLogs("missing-encfilehash-for-media-type-" + T),
                new (o("WAWebMiscErrors").MediaDecryptionError)(
                  "decryptMedia: missing encFilehash for type " + T,
                )
              );
            if (I == null && a == null)
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
                new (o("WAWebMiscErrors").MediaDecryptionError)(
                  "decryptMedia: missing encFilehash and directPath/staticUrl for type " +
                    T,
                )
              );
          }
          var $ = E == null ? void 0 : E.scanCount,
            P =
              E != null &&
              (E.scanCount == null || E.scanCount === E.scanLengths.length),
            N = P ? null : $,
            M = yield o(
              "WAWebCreateMediaDownloadMetrics",
            ).createMediaDownloadMetrics({
              directPath: a,
              downloadOrigin: i,
              type: T,
              userDownloadAttemptCount: D,
              isViewOnce: d,
              downloadMode: v,
              isPrefetch: E != null && !P,
              imageDimensions: c,
              chatWid: t,
              mediaKeyTimestamp: b,
            }),
            w = M.handleDownloadAndDecryptSuccess,
            A = M.handleDownloadAttemptError,
            O = M.handleDownloadAttemptSuccess,
            B = M.handleDownloadError,
            W = M.handleDownloadHostFound,
            q = M.handleDownloadSuccess,
            U = M.markDecryptionEnd,
            V = M.markDecryptionStart,
            H = M.markNetworkT,
            G = M.mediaId,
            z = M.startNetworkT,
            j = e.signal || new AbortController().signal,
            K = o("WAWebMediaDebugString").getDebugString(u),
            Q = { directPath: a, encFilehash: s, staticUrl: I, type: T };
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] start",
              ])),
            K,
          );
          try {
            var X = F({
                progressiveJpegOpts: E,
                filehash: u,
                debugString: K,
                scanCount: N,
              }),
              Y = function (t) {
                (A(t),
                  X != null &&
                    (X = F({
                      progressiveJpegOpts: E,
                      filehash: u,
                      debugString: K,
                      scanCount: N,
                    })));
              },
              J = r("WAWebGetMediaDownloadByterange")({
                partialVideoOpts: L,
                progressiveJpegOpts: E,
                scanCount: N,
              }),
              Z =
                N == null && E
                  ? function (e, t) {
                      var n;
                      (n = X) == null || n.handleProgress(e.total, t);
                    }
                  : null,
              ee =
                x && m != null
                  ? r("WAWebCryptoCreateMediaKeys")(T, m).then(function (e) {
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
                      filehash: x ? s : u,
                      staticUrl: I,
                      type: T,
                      signal: j,
                      mode: v,
                      byteRange: J,
                      onData: Z,
                      onDownloadHostFound: W,
                      onDownloadAttemptSuccess: O,
                      onDownloadAttemptError: Y,
                      debugString: K,
                      onProgress: R,
                    });
                  } finally {
                    H();
                  }
                })(),
              ]),
              ne = te[0],
              re = te[1];
            q(re.byteLength);
            var oe = re;
            if (ne != null) {
              (o(
                "WAWebMmsDownloadUploadCrashLogger",
              ).downloadUploadCrashLogger.mark(
                G,
                o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                  .DOWNLOAD_DECRYPTION_STARTED,
              ),
                S == null || S(),
                V(),
                l.addPoint("decrypt_start", {
                  int: { dataSize: re.byteLength },
                }),
                o("WAWebAppTracker").AppTracker.start(
                  o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                ));
              try {
                if (N != null && J != null) {
                  var ae,
                    ie = J.end - J.start + 1,
                    le = yield (ae = X) == null
                      ? void 0
                      : ae.handleProgress(ie, re);
                  if (le == null)
                    throw new (o("WAWebMiscErrors").MediaDecryptionError)(
                      "Partial PJPEG decryption returned no data (encryptedFileSize=" +
                        ie +
                        ", scanCount=" +
                        N +
                        ")",
                    );
                  return le;
                } else if (L)
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
                          expectedPlaintextHash: u,
                          debugString: K,
                        }))
                      : (oe = yield r("WAWebCryptoDecryptMedia")({
                          mediaKeys: ne,
                          ciphertextHmac: re,
                          expectedPlaintextHash: u,
                          debugString: K,
                        })));
                }
              } finally {
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.MediaProcessing,
                );
              }
              (l.addPoint("decrypt_end"),
                U(),
                o(
                  "WAWebMmsDownloadUploadCrashLogger",
                ).downloadUploadCrashLogger.mark(
                  G,
                  o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                    .DOWNLOAD_DECRYPTION_FINISHED,
                ));
            } else {
              var ue = L == null && N == null;
              if (ue) {
                var ce = yield o("WAWebValidateMediaFilehash").validateFileash(
                  oe,
                  u,
                );
                if (!ce) throw new (o("WAWebMiscErrors").MediaHashMismatch)();
              }
            }
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.download: [",
                    "] success",
                  ])),
                K,
              ),
              w(),
              oe
            );
          } catch (t) {
            throw (
              t instanceof o("WAWebMmsClientErrors").MediaNotFoundError
                ? (B(t, !!e.isFinalRmrRetry),
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
                      K,
                      r("WAWebSerializeError")(t),
                    )
                    .verbose())
                : (B(r("getErrorSafe")(t), !0),
                  o("WALogger")
                    .WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose(
                          ["downloadManager.download: [", "] error\n", ""],
                          ["downloadManager.download: [", "] error\\n", ""],
                        )),
                      K,
                      r("WAWebSerializeError")(t),
                    )
                    .verbose()),
              o(
                "WAWebMmsDownloadUploadCrashLogger",
              ).downloadUploadCrashLogger.mark(
                G,
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function B(e) {
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
    var W = new D();
    ((l.enforceKaleidoscopeScore = O), (l.downloadManager = W));
  },
  98,
);
