__d(
  "WAWebDownloadManager",
  [
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
    "WAWebSuspiciousContent",
    "WAWebValidateMediaFilehash",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamMsgUtils",
    "WAWebWebcMediaRmrWamEvent",
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
      E = { PRELOAD_MMS_MEDIA: 1, PRELOAD_MMS_THUMBNAIL: 2 },
      k = function (t) {
        switch (t) {
          case o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT:
            return E.PRELOAD_MMS_THUMBNAIL;
          case o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC:
          case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
          default:
            return E.PRELOAD_MMS_MEDIA;
        }
      },
      I = function () {
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
            function (n) {
              var a,
                i = n.downloadOrigin,
                l = n.downloadQpl,
                d = n.partialVideoOpts,
                m = (a = n.mimetype) != null ? a : "application/octet-stream",
                p = o("WAWebABProps").getABPropConfigValue(
                  "web_use_kaleidoscope_media_check_enabled",
                ),
                _ = function () {
                  return (
                    l.addPoint("download_and_decrypt_start"),
                    T(n).then(async function (t) {
                      l.addPoint("download_and_decrypt_end", {
                        int: { byteLength: t.byteLength },
                      });
                      var a = t;
                      if (
                        p &&
                        N({ downloadOrigin: i, partialVideoOpts: d }) &&
                        (await o(
                          "WAWebKaleidoscopeWasmFeatureSupport",
                        ).checkKaleidoscopeWasmFeatureSupport())
                      ) {
                        l.addPoint("kaleidoscope_classify_start");
                        var _ = await o("WAWebMediaWorkerProxy")
                          .kaleidoscopeClassifyInWorker({
                            mediaType: o(
                              "WAWebMmsMediaTypes",
                            ).mediaTypeToKaleidoscopeMediaType(n.type),
                            rawMimeType: m,
                            input: t,
                            eventFlow: l,
                          })
                          .catch(function (e) {
                            return {
                              transferredBuffer: t,
                              result: o("WAResultOrError").makeError({
                                errorName: "worker-connection-runtime-error",
                                errorMessage: r("getErrorSafe")(e).message,
                              }),
                            };
                          });
                        a = _.transferredBuffer;
                        var f = _.result;
                        if (f.success) {
                          var g = f.value,
                            h = g.mimetype,
                            y = g.score;
                          l.addPoint("kaleidoscope_classify_end", {
                            string: { ksMimeType: h },
                            int: { ksScore: y },
                          });
                          var C = P({
                            ksScore: y,
                            ksMimeType: h,
                            rawMimeType: m,
                            mediaType: n.type,
                          });
                          if (
                            C ===
                            o("WAWebSuspiciousContent").WAWebSuspiciousContent
                              .YES
                          )
                            throw new (o(
                              "WAWebMiscErrors",
                            ).InvalidMediaFileType)(
                              "Kaleidoscope dangerous score " +
                                y +
                                " for media type " +
                                n.type,
                              n.type,
                              m,
                            );
                          n.onSuspiciousContent == null ||
                            n.onSuspiciousContent(C);
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
                            l.addPoint(f.error.errorName, {
                              string: {
                                ksFailReason:
                                  (b = f.error.errorMessage) != null
                                    ? b
                                    : f.error.errorName,
                              },
                            }),
                            l.addPoint("kaleidoscope_classify_fail"));
                        }
                      }
                      if (
                        N({ downloadOrigin: i, partialVideoOpts: d }) &&
                        (o(
                          "WAWebMediaGatingUtils",
                        ).isDownloadMimeTypeCheckLogEnabled() ||
                          o(
                            "WAWebMediaGatingUtils",
                          ).isDownloadMimeTypeCheckBlockEnabled())
                      ) {
                        var v = o(
                            "WAWebMmsMediaTypes",
                          ).mediaTypeToMsgTypeSupportedByAllowlist(n.type),
                          S = !1;
                        if (v != null) {
                          var R = o("WAWebMmsMediaTypes").getValidMimeTypes(v);
                          R == null
                            ? (o("WALogger")
                                .WARN(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[DownloadManager] no mime type allowlist for msg type ",
                                        " (media type ",
                                        ")",
                                      ])),
                                  v,
                                  n.type,
                                )
                                .tags("media")
                                .sendLogs(
                                  "no-mimetype-allowlist-for-msg-type-" + v,
                                ),
                              (S = !0))
                            : R.has(m) ||
                              (o("WALogger")
                                .WARN(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[DownloadManager] unexpected mimetype ",
                                        " for media type ",
                                        "",
                                      ])),
                                  m,
                                  n.type,
                                )
                                .tags("media", "security")
                                .sendLogs(
                                  "unexpected-mimetype-for-media-type-" +
                                    n.type,
                                ),
                              (S = !0));
                        } else
                          m.toLowerCase() === "image/svg+xml" &&
                            (o("WALogger")
                              .WARN(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[DownloadManager] blocked SVG mimetype for media type ",
                                    "",
                                  ])),
                                n.type,
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
                          throw new (o("WAWebMiscErrors").InvalidMediaFileType)(
                            "Unexpected mimetype " +
                              m +
                              " for media type " +
                              n.type,
                            n.type,
                            m,
                          );
                      }
                      return a;
                    })
                  );
                },
                f = {
                  priority: -k(n.type),
                  group:
                    n.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC
                      ? "histSyncChunk"
                      : "thumbnail",
                  signal: n.signal,
                };
              return n.isPreload === !0
                ? t.preloader.enqueue(_, f)
                : n.shouldSequenceDownload === !0
                  ? t.loadSequence.enqueue(
                      _,
                      babelHelpers.extends({}, f, { group: "thumbnail" }),
                    )
                  : _();
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
          }, x)),
          o(
            "WAWebMmsDownloadUploadCrashLogger",
          ).downloadUploadCrashLogger.init());
      };
    async function T(e) {
      var t = e.chatWid,
        n = e.directPath,
        a = e.downloadOrigin,
        i = e.downloadQpl,
        l = e.encFilehash,
        s = e.filehash,
        u = e.imageDimensions,
        c = e.isViewOnce,
        y = e.mediaKey,
        C = e.mediaKeyTimestamp,
        b = e.mode,
        v = e.onDecryptStart,
        S = e.onProgress,
        R = e.partialVideoOpts,
        L = e.progressiveJpegOpts,
        E = e.staticUrl,
        k = e.type,
        I = e.userDownloadAttemptCount,
        T = o(
          "WAWebMediaCryptoEligibilityUtils",
        ).isMediaCryptoExpectedForMediaType(k);
      if (y == null && T)
        throw (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] expected media key for media type ",
                  "",
                ])),
              k,
            )
            .tags("media")
            .sendLogs("missing-media-key-for-media-type-" + k),
          new (o("WAWebMiscErrors").MediaDecryptionError)(
            "decryptMedia: missing key for type " + k,
          )
        );
      if (l == null && T) {
        if (k !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
          throw (
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] expected encFilehash for media type ",
                    "",
                  ])),
                k,
              )
              .tags("media")
              .sendLogs("missing-encfilehash-for-media-type-" + k),
            new (o("WAWebMiscErrors").MediaDecryptionError)(
              "decryptMedia: missing encFilehash for type " + k,
            )
          );
        if (E == null && n == null)
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
                k,
            )
          );
      }
      var D = L == null ? void 0 : L.scanCount,
        x =
          L != null &&
          (L.scanCount == null || L.scanCount === L.scanLengths.length),
        P = x ? null : D,
        N = await o(
          "WAWebCreateMediaDownloadMetrics",
        ).createMediaDownloadMetrics({
          directPath: n,
          downloadOrigin: a,
          type: k,
          userDownloadAttemptCount: I,
          isViewOnce: c,
          downloadMode: b,
          isPrefetch: L != null && !x,
          imageDimensions: u,
          chatWid: t,
          mediaKeyTimestamp: C,
        }),
        M = N.handleDownloadAndDecryptSuccess,
        w = N.handleDownloadAttemptError,
        A = N.handleDownloadAttemptSuccess,
        F = N.handleDownloadError,
        O = N.handleDownloadHostFound,
        B = N.handleDownloadSuccess,
        W = N.markDecryptionEnd,
        q = N.markDecryptionStart,
        U = N.markNetworkT,
        V = N.mediaId,
        H = N.startNetworkT,
        G = e.signal || new AbortController().signal,
        z = o("WAWebMediaDebugString").getDebugString(s),
        j = { directPath: n, encFilehash: l, staticUrl: E, type: k };
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "downloadManager.download: [",
            "] start",
          ])),
        z,
      );
      try {
        var K = $({
            progressiveJpegOpts: L,
            filehash: s,
            debugString: z,
            scanCount: P,
          }),
          Q = function (t) {
            (w(t),
              K != null &&
                (K = $({
                  progressiveJpegOpts: L,
                  filehash: s,
                  debugString: z,
                  scanCount: P,
                })));
          },
          X = r("WAWebGetMediaDownloadByterange")({
            partialVideoOpts: R,
            progressiveJpegOpts: L,
            scanCount: P,
          }),
          Y =
            P == null && L
              ? function (e, t) {
                  var n;
                  (n = K) == null || n.handleProgress(e.total, t);
                }
              : null,
          J =
            T && y != null
              ? r("WAWebCryptoCreateMediaKeys")(k, y).then(function (e) {
                  var t;
                  return ((t = K) == null || t.setCryptoKeys(e), e);
                })
              : Promise.resolve(null),
          Z = await Promise.all([
            J,
            (async function () {
              H();
              try {
                return await r("WAWebMmsClient").download({
                  directPath: n,
                  filehash: T ? l : s,
                  staticUrl: E,
                  type: k,
                  signal: G,
                  mode: b,
                  byteRange: X,
                  onData: Y,
                  onDownloadHostFound: O,
                  onDownloadAttemptSuccess: A,
                  onDownloadAttemptError: Q,
                  debugString: z,
                  onProgress: S,
                });
              } finally {
                U();
              }
            })(),
          ]),
          ee = Z[0],
          te = Z[1];
        B(te.byteLength);
        var ne = te;
        if (ee != null) {
          (o(
            "WAWebMmsDownloadUploadCrashLogger",
          ).downloadUploadCrashLogger.mark(
            V,
            o("WAWebMmsDownloadUploadCrashLogger").ProgressType
              .DOWNLOAD_DECRYPTION_STARTED,
          ),
            v == null || v(),
            q(),
            i.addPoint("decrypt_start", { int: { dataSize: te.byteLength } }),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.MediaProcessing,
            ));
          try {
            if (P != null && X != null) {
              var re,
                oe = X.end - X.start + 1,
                ae = await ((re = K) == null
                  ? void 0
                  : re.handleProgress(oe, te));
              if (ae == null)
                throw new (o("WAWebMiscErrors").MediaDecryptionError)(
                  "Partial PJPEG decryption returned no data (encryptedFileSize=" +
                    oe +
                    ", scanCount=" +
                    P +
                    ")",
                );
              return ae;
            } else if (R)
              ne = await o(
                "WAWebCryptoDecryptPartialMedia",
              ).decryptPartialMedia({ mediaKeys: ee, ciphertext: te });
            else {
              var ie =
                o("WAWebABProps").getABPropConfigValue(
                  "web_media_compute_in_worker_enabled",
                ) === !0;
              (i.addAnnotations({ string: { decrypt_path: ie ? "v2" : "v1" } }),
                ie
                  ? (ne = await r("WAWebCryptoDecryptMediaV2")({
                      mediaKeys: ee,
                      ciphertextHmac: te,
                      downloadQpl: i,
                      expectedPlaintextHash: s,
                      debugString: z,
                    }))
                  : (ne = await r("WAWebCryptoDecryptMedia")({
                      mediaKeys: ee,
                      ciphertextHmac: te,
                      expectedPlaintextHash: s,
                      debugString: z,
                    })));
            }
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.MediaProcessing,
            );
          }
          (i.addPoint("decrypt_end"),
            W(),
            o(
              "WAWebMmsDownloadUploadCrashLogger",
            ).downloadUploadCrashLogger.mark(
              V,
              o("WAWebMmsDownloadUploadCrashLogger").ProgressType
                .DOWNLOAD_DECRYPTION_FINISHED,
            ));
        } else {
          var le = R == null && P == null;
          if (le) {
            var se = await o("WAWebValidateMediaFilehash").validateFileash(
              ne,
              s,
            );
            if (!se) throw new (o("WAWebMiscErrors").MediaHashMismatch)();
          }
        }
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] success",
              ])),
            z,
          ),
          M(),
          ne
        );
      } catch (t) {
        throw (
          t instanceof o("WAWebMmsClientErrors").MediaNotFoundError
            ? (F(t, !!e.isFinalRmrRetry),
              o("WALogger")
                .LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        "downloadManager.download: [",
                        `] expected error
`,
                        "",
                      ],
                      [
                        "downloadManager.download: [",
                        "] expected error\\n",
                        "",
                      ],
                    )),
                  z,
                  r("WAWebSerializeError")(t),
                )
                .verbose())
            : (F(r("getErrorSafe")(t), !0),
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        "downloadManager.download: [",
                        `] error
`,
                        "",
                      ],
                      ["downloadManager.download: [", "] error\\n", ""],
                    )),
                  z,
                  r("WAWebSerializeError")(t),
                )
                .verbose()),
          o("WAWebMmsDownloadUploadCrashLogger").downloadUploadCrashLogger.mark(
            V,
            o("WAWebMmsDownloadUploadCrashLogger").ProgressType.DOWNLOAD_ERROR,
          ),
          t
        );
      }
    }
    async function D(e) {
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
          babelHelpers.extends({}, e.rmrData, { webcRmrReason: e.rmrReason }),
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
        (l.webcChatType == null && t && (l.webcChatType = t.getWebcChatType()),
          l.webcMessageT == null && (l.webcMessageT = e.t),
          (l.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(e)));
      }
      try {
        var c = await t.rmr({ onMsgSelect: u });
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
                  downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
                })
              : o("WALogger")
                  .WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "downloadManager.rmr: [",
                          "] error RMRNotSupportedOnNewsletterMessagesError",
                          `
`,
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
                      `] error MediaNotOnPhone
`,
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
                  [
                    "downloadManager.rmr: [",
                    "] error ",
                    `
`,
                    "",
                  ],
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
        ((l.webcMediaRmrT = Math.ceil(self.performance.now() - i)), l.commit());
      }
    }
    async function x(e) {
      var t = e.directPath,
        n = e.encFilehash,
        o = e.signal,
        a = e.type;
      await r("WAWebMmsClient").checkExistence({
        directPath: t,
        encFilehash: n,
        type: a,
        signal: o || new AbortController().signal,
      });
    }
    function $(e) {
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
    function P(e) {
      var t = e.ksMimeType,
        n = e.ksScore,
        r = e.mediaType,
        a = e.rawMimeType;
      return n >= 90
        ? (o("WALogger")
            .WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
    function N(e) {
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
    var M = new I();
    ((l.enforceKaleidoscopeScore = P), (l.downloadManager = M));
  },
  98,
);
