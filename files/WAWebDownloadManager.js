__d(
  "WAWebDownloadManager",
  [
    "Promise",
    "WAAsyncCache",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAMemoizeConcurrent",
    "WANullthrows",
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
    "WAWebKaleidoscopeWasmFeatureSupport",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDebugString",
    "WAWebMediaGatingUtils",
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
      L = { PRELOAD_MMS_MEDIA: 1, PRELOAD_MMS_THUMBNAIL: 2 },
      E = function (t) {
        switch (t) {
          case o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT:
            return L.PRELOAD_MMS_THUMBNAIL;
          case o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC:
          case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
          default:
            return L.PRELOAD_MMS_MEDIA;
        }
      },
      k = function () {
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
                    I(a).then(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
                            d.addPoint("download_and_decrypt_end", {
                              int: { byteLength: t.byteLength },
                            });
                            var n = t;
                            if (
                              _ &&
                              M({ downloadOrigin: l, partialVideoOpts: m }) &&
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
                                      errorMessage:
                                        r("getErrorSafe")(e).message,
                                    }),
                                  };
                                });
                              n = i.transferredBuffer;
                              var f = i.result;
                              if (f.success)
                                d.addPoint("kaleidoscope_classify_end", {
                                  string: { ksMimeType: f.value.mimetype },
                                  int: { ksScore: f.value.score },
                                });
                              else {
                                var g;
                                (o("WALogger").WARN(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
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
                                        (g = f.error.errorMessage) != null
                                          ? g
                                          : f.error.errorName,
                                    },
                                  }),
                                  d.addPoint("kaleidoscope_classify_fail"));
                              }
                            }
                            if (
                              M({ downloadOrigin: l, partialVideoOpts: m }) &&
                              (o(
                                "WAWebMediaGatingUtils",
                              ).isDownloadMimeTypeCheckLogEnabled() ||
                                o(
                                  "WAWebMediaGatingUtils",
                                ).isDownloadMimeTypeCheckBlockEnabled())
                            ) {
                              var h = o(
                                  "WAWebMmsMediaTypes",
                                ).mediaTypeToMsgTypeSupportedByAllowlist(
                                  a.type,
                                ),
                                y = !1;
                              if (h != null) {
                                var C =
                                  o("WAWebMmsMediaTypes").getValidMimeTypes(h);
                                C == null
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
                                        h,
                                        a.type,
                                      )
                                      .tags("media")
                                      .sendLogs(
                                        "no-mimetype-allowlist-for-msg-type-" +
                                          h,
                                      ),
                                    (y = !0))
                                  : C.has(p) ||
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
                                    (y = !0));
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
                                  (y = !0));
                              if (
                                y &&
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
                  priority: -E(a.type),
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
          }, D)),
          (this.checkExistence = r("WAMemoizeConcurrent")(function (e) {
            var t,
              n = (t = e.encFilehash) != null ? t : e.directPath;
            if (n == null)
              throw r("err")(
                "checkExistence requires encFilehash or directPath",
              );
            return n;
          }, $)),
          o(
            "WAWebMmsDownloadUploadCrashLogger",
          ).downloadUploadCrashLogger.init());
      };
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            a = e.directPath,
            i = e.downloadOrigin,
            l = e.downloadQpl,
            s = e.encFilehash,
            u = e.filehash,
            c = e.imageDimensions,
            y = e.isViewOnce,
            C = e.mediaKey,
            b = e.mediaKeyTimestamp,
            v = e.mode,
            S = e.onDecryptStart,
            L = e.onProgress,
            E = e.partialVideoOpts,
            k = e.progressiveJpegOpts,
            I = e.staticUrl,
            T = e.type,
            D = e.userDownloadAttemptCount,
            x = o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(T);
          if (C == null && x)
            throw (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
          var $ = k == null ? void 0 : k.scanCount,
            P =
              k != null &&
              (k.scanCount == null || k.scanCount === k.scanLengths.length),
            M = P ? null : $,
            w = yield o(
              "WAWebCreateMediaDownloadMetrics",
            ).createMediaDownloadMetrics({
              directPath: a,
              downloadOrigin: i,
              type: T,
              userDownloadAttemptCount: D,
              isViewOnce: y,
              downloadMode: v,
              isPrefetch: k != null && !P,
              imageDimensions: c,
              chatWid: t,
              mediaKeyTimestamp: b,
            }),
            A = w.handleDownloadAndDecryptSuccess,
            F = w.handleDownloadAttemptError,
            O = w.handleDownloadAttemptSuccess,
            B = w.handleDownloadError,
            W = w.handleDownloadHostFound,
            q = w.handleDownloadSuccess,
            U = w.markDecryptionEnd,
            V = w.markDecryptionStart,
            H = w.markNetworkT,
            G = w.mediaId,
            z = w.startNetworkT,
            j = e.signal || new AbortController().signal,
            K = o("WAWebMediaDebugString").getDebugString(u),
            Q = { directPath: a, encFilehash: s, staticUrl: I, type: T };
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] start",
              ])),
            K,
          );
          try {
            var X = N({
                progressiveJpegOpts: k,
                filehash: u,
                debugString: K,
                scanCount: M,
              }),
              Y = function (t) {
                (F(t),
                  X != null &&
                    (X = N({
                      progressiveJpegOpts: k,
                      filehash: u,
                      debugString: K,
                      scanCount: M,
                    })));
              },
              J = r("WAWebGetMediaDownloadByterange")({
                partialVideoOpts: E,
                progressiveJpegOpts: k,
                scanCount: M,
              }),
              Z =
                M == null && k
                  ? function (e, t) {
                      var n;
                      (n = X) == null || n.handleProgress(e.total, t);
                    }
                  : null,
              ee =
                x && C != null
                  ? r("WAWebCryptoCreateMediaKeys")(T, C).then(function (e) {
                      var t;
                      return ((t = X) == null || t.setCryptoKeys(e), e);
                    })
                  : (R || (R = n("Promise"))).resolve(null),
              te = yield (R || (R = n("Promise"))).all([
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
                      onProgress: L,
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
                if (M != null && J != null) {
                  var ae,
                    ie = J.end - J.start;
                  return r("WANullthrows")(
                    yield (ae = X) == null ? void 0 : ae.handleProgress(ie, re),
                  );
                } else if (E)
                  oe = yield o(
                    "WAWebCryptoDecryptPartialMedia",
                  ).decryptPartialMedia({ mediaKeys: ne, ciphertext: re });
                else {
                  var le =
                    o("WAWebABProps").getABPropConfigValue(
                      "web_media_compute_in_worker_enabled",
                    ) === !0;
                  (l.addAnnotations({
                    string: { decrypt_path: le ? "v2" : "v1" },
                  }),
                    le
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
              var se = E == null && M == null;
              if (se) {
                var ue = yield o("WAWebValidateMediaFilehash").validateFileash(
                  oe,
                  u,
                );
                if (!ue) throw new (o("WAWebMiscErrors").MediaHashMismatch)();
              }
            }
            return (
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                ? (B(t, !!e.isFinalRmrRetry),
                  o("WALogger")
                    .LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose(
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
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose(
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaObject,
            n = o("WAWebMediaDebugString").getDebugString(t.filehash),
            a = { filehash: t.filehash, type: t.type };
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
          try {
            var c = yield t.rmr({ onMsgSelect: u });
            if (
              ((l.webcRmrStatusCode = c),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadManager.rmr: [",
                    "] status ",
                    "",
                  ])),
                n,
                c,
              ),
              c === 404)
            )
              throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
            if (c !== 200)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(c);
          } catch (e) {
            if (
              ((l.webcMediaRmrError = !0),
              e instanceof
                o("WAWebMiscErrors").RMRNotSupportedOnNewsletterMessagesError)
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
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose(
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
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose(
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
            var d = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .WARN(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose(
                      ["downloadManager.rmr: [", "] error ", "\n", ""],
                      ["downloadManager.rmr: [", "] error ", "\\n", ""],
                    )),
                  n,
                  d.message,
                  d.stack,
                )
                .verbose(),
              new (o("WAWebMiscErrors").MediaNeedsReupload)()
            );
          } finally {
            ((l.webcMediaRmrT = Math.ceil(self.performance.now() - i)),
              l.commit());
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        P.apply(this, arguments)
      );
    }
    function N(e) {
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
    function M(e) {
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
    var w = new k();
    l.downloadManager = w;
  },
  98,
);
