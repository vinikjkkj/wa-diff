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
    "WAWebChatModelDerivedMethods",
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
      k = { PRELOAD_MMS_MEDIA: 1, PRELOAD_MMS_THUMBNAIL: 2 };
    function I(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT:
          return k.PRELOAD_MMS_THUMBNAIL;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC:
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO:
        default:
          return k.PRELOAD_MMS_MEDIA;
      }
    }
    var T = function () {
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
              s = function () {
                return (
                  a.addPoint("download_and_decrypt_start"),
                  D(t).then(function (e) {
                    return (
                      a.addPoint("download_and_decrypt_end", {
                        int: { byteLength: e.byteLength },
                      }),
                      W({ downloadOrigin: r, partialVideoOpts: i })
                        ? A({
                            input: e,
                            type: t.type,
                            rawMimeType: l,
                            downloadQpl: a,
                            failClosed: !1,
                            onSuspiciousContent: t.onSuspiciousContent,
                          })
                        : e
                    );
                  })
                );
              },
              u = {
                priority: -I(t.type),
                group:
                  t.type === o("WAWebMmsMediaTypes").MEDIA_TYPES.HISTORY_SYNC
                    ? "histSyncChunk"
                    : "thumbnail",
                signal: t.signal,
              };
            return t.isPreload === !0
              ? e.preloader.enqueue(s, u)
              : t.shouldSequenceDownload === !0
                ? e.loadSequence.enqueue(
                    s,
                    babelHelpers.extends({}, u, { group: "thumbnail" }),
                  )
                : s();
          },
        )),
        (this.downloadAndMaybeDecrypt = async function (t) {
          var n,
            r = t.downloadOrigin,
            o = t.downloadQpl,
            a = t.partialVideoOpts,
            i = t.type,
            l = (n = t.mimetype) != null ? n : "application/octet-stream";
          return (
            o.addAnnotations({
              bool: { ksClassifyEnabled: !0, isPartialVideo: a != null },
              string: {
                mediaType: i,
                rawMimeType: l,
                downloadOrigin: r == null ? "unknown" : r.toString(),
              },
              int: {
                activeDownloadCount:
                  e.preloader.getRunningTasksCount() +
                  e.loadSequence.getRunningTasksCount(),
              },
            }),
            W({ downloadOrigin: r, partialVideoOpts: a }) &&
              B(i, l, t.isMimetypeAllowed),
            e.$1(t)
          );
        }),
        (this.rmr = r("WAMemoizeConcurrent")(function (e) {
          return e.mediaObject.filehash || "";
        }, $)),
        (this.checkExistence = r("WAMemoizeConcurrent")(function (e) {
          var t,
            n = (t = e.encFilehash) != null ? t : e.directPath;
          if (n == null)
            throw r("err")("checkExistence requires encFilehash or directPath");
          return n;
        }, P)));
    };
    async function D(t) {
      var n = t.chatWid,
        a = t.directPath,
        i = t.downloadOrigin,
        l = t.downloadQpl,
        _ = t.encFilehash,
        f = t.experienceIds,
        g = t.filehash,
        h = t.imageDimensions,
        y = t.isViewOnce,
        C = t.mediaKey,
        b = t.mediaKeyTimestamp,
        v = t.mode,
        S = t.onDecryptStart,
        R = t.onProgress,
        L = t.partialVideoOpts,
        E = t.progressiveJpegOpts,
        k = t.staticUrl,
        I = t.type,
        T = t.userDownloadAttemptCount,
        D = o(
          "WAWebMediaCryptoEligibilityUtils",
        ).isMediaCryptoExpectedForMediaType(I);
      if (C == null && D)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] expected media key for media type ",
                  "",
                ])),
              I,
            )
            .tags("media")
            .sendLogs("missing-media-key-for-media-type-" + I),
          new (o("WAWebMediaFileErrors").MediaDecryptionError)(
            "decryptMedia: missing key for type " + I,
          )
        );
      if (_ == null && D) {
        if (I !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT)
          throw (
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] expected encFilehash for media type ",
                    "",
                  ])),
                I,
              )
              .tags("media")
              .sendLogs("missing-encfilehash-for-media-type-" + I),
            new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "decryptMedia: missing encFilehash for type " + I,
            )
          );
        if (k == null && a == null)
          throw (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] product media missing encFilehash and directPath/staticUrl",
                  ])),
              )
              .tags("media")
              .sendLogs("missing-encfilehash-and-path-for-product"),
            new (o("WAWebMediaFileErrors").MediaDecryptionError)(
              "decryptMedia: missing encFilehash and directPath/staticUrl for type " +
                I,
            )
          );
      }
      var x = E == null ? void 0 : E.scanCount,
        $ =
          E != null &&
          (E.scanCount == null || E.scanCount === E.scanLengths.length),
        P = $ ? null : x,
        M = await o(
          "WAWebCreateMediaDownloadMetrics",
        ).createMediaDownloadMetrics({
          directPath: a,
          downloadOrigin: i,
          type: I,
          userDownloadAttemptCount: T,
          isViewOnce: y,
          downloadMode: v,
          isPrefetch: E != null && !$,
          imageDimensions: h,
          chatWid: n,
          mediaKeyTimestamp: b,
          experienceIds: f,
        }),
        w = M.handleDownloadAndDecryptSuccess,
        A = M.handleDownloadAttemptError,
        F = M.handleDownloadAttemptSuccess,
        O = M.handleDownloadError,
        B = M.handleDownloadHostFound,
        W = M.handleDownloadSuccess,
        q = M.markDecryptionEnd,
        U = M.markDecryptionStart,
        V = M.markNetworkT,
        H = M.startNetworkT,
        G = t.signal || new AbortController().signal,
        z = o("WAWebMediaDebugString").getDebugString(g),
        j = { directPath: a, encFilehash: _, staticUrl: k, type: I };
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "downloadManager.download: [",
            "] start",
          ])),
        z,
      );
      try {
        var K = N({
            progressiveJpegOpts: E,
            filehash: g,
            debugString: z,
            scanCount: P,
          }),
          Q = function (t) {
            (A(t),
              K != null &&
                (K = N({
                  progressiveJpegOpts: E,
                  filehash: g,
                  debugString: z,
                  scanCount: P,
                })));
          },
          X = r("WAWebGetMediaDownloadByterange")({
            partialVideoOpts: L,
            progressiveJpegOpts: E,
            scanCount: P,
          }),
          Y =
            P == null && E
              ? function (e, t) {
                  var n;
                  (n = K) == null || n.handleProgress(e.total, t);
                }
              : null,
          J =
            D && C != null
              ? r("WAWebCryptoCreateMediaKeys")(I, C).then(function (e) {
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
                  directPath: a,
                  filehash: D ? _ : g,
                  staticUrl: k,
                  type: I,
                  signal: G,
                  mode: v,
                  byteRange: X,
                  onData: Y,
                  onDownloadHostFound: B,
                  onDownloadAttemptSuccess: F,
                  onDownloadAttemptError: Q,
                  debugString: z,
                  onProgress: R,
                });
              } finally {
                V();
              }
            })(),
          ]),
          ee = Z[0],
          te = Z[1];
        W(te.byteLength);
        var ne = te;
        if (ee != null) {
          (S == null || S(),
            U(),
            l.addPoint("decrypt_start", { int: { dataSize: te.byteLength } }),
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
                throw new (o("WAWebMediaFileErrors").MediaDecryptionError)(
                  "Partial PJPEG decryption returned no data (encryptedFileSize=" +
                    oe +
                    ", scanCount=" +
                    P +
                    ")",
                );
              ne = ae;
            } else if (L)
              ne = await o(
                "WAWebCryptoDecryptPartialMedia",
              ).decryptPartialMedia({ mediaKeys: ee, ciphertext: te });
            else {
              var ie =
                o("WAWebABProps").getABPropConfigValue(
                  "web_media_compute_in_worker_enabled",
                ) === !0;
              (l.addAnnotations({ string: { decrypt_path: ie ? "v2" : "v1" } }),
                ie
                  ? (ne = await r("WAWebCryptoDecryptMediaV2")({
                      mediaKeys: ee,
                      ciphertextHmac: te,
                      downloadQpl: l,
                      expectedPlaintextHash: g,
                      debugString: z,
                    }))
                  : (ne = await r("WAWebCryptoDecryptMedia")({
                      mediaKeys: ee,
                      ciphertextHmac: te,
                      expectedPlaintextHash: g,
                      debugString: z,
                    })));
            }
          } finally {
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.MediaProcessing,
            );
          }
          (l.addPoint("decrypt_end"), q());
        } else {
          var le = L == null && P == null;
          if (le) {
            var se = await o("WAWebValidateMediaFilehash").validateFileash(
              ne,
              g,
            );
            if (!se) throw new (o("WAWebMediaFileErrors").MediaHashMismatch)();
          }
        }
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "downloadManager.download: [",
                "] success",
              ])),
            z,
          ),
          w(),
          ne
        );
      } catch (e) {
        throw (
          e instanceof o("WAWebMmsClientErrors").MediaNotFoundError
            ? (O(e, !!t.isFinalRmrRetry),
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose(
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
                  r("WAWebSerializeError")(e),
                )
                .verbose())
            : (O(r("getErrorSafe")(e), !0),
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose(
                      [
                        "downloadManager.download: [",
                        `] error
`,
                        "",
                      ],
                      ["downloadManager.download: [", "] error\\n", ""],
                    )),
                  z,
                  r("WAWebSerializeError")(e),
                )
                .verbose()),
          e
        );
      }
    }
    var x = 6e4;
    async function $(e) {
      var t = e.mediaObject,
        n = o("WAWebMediaDebugString").getDebugString(t.filehash),
        a = { filehash: t.filehash, type: t.type };
      (o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        (l.webcChatType == null &&
          t &&
          (l.webcChatType = o("WAWebChatModelDerivedMethods").getWebcChatTypeFn(
            t,
          )),
          l.webcMessageT == null && (l.webcMessageT = e.t),
          (l.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(e)));
      }
      var c = null;
      try {
        var d = t.rmr({ onMsgSelect: u });
        c = window.setTimeout(function () {
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "downloadManager.rmr: [",
                  "] RMR still pending after ",
                  "ms, type ",
                  "",
                ])),
              n,
              x,
              String(t.type),
            )
            .tags("non-sad")
            .sendLogs("media-rmr-slow");
        }, x);
        var m = await d;
        if (
          ((l.webcRmrStatusCode = m),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
                })
              : o("WALogger")
                  .WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose(
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose(
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
        var p = r("getErrorSafe")(e);
        throw (
          o("WALogger")
            .WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose(
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
    }
    async function P(e) {
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
    async function M(e) {
      var t = e.downloadOrigin,
        n = e.downloadQpl,
        r = e.input,
        o = e.mimetype,
        a = e.onSuspiciousContent,
        i = e.type,
        l = e.withStreamCheck;
      if (!W({ downloadOrigin: t, partialVideoOpts: null })) return r;
      var s = o != null ? o : "application/octet-stream";
      return (
        B(i, s),
        A({
          input: r,
          type: i,
          rawMimeType: s,
          downloadQpl: n,
          failClosed: !0,
          onSuspiciousContent: a,
          withStreamCheck: l,
        })
      );
    }
    function w(e) {
      return W({ downloadOrigin: e, partialVideoOpts: null });
    }
    async function A(e) {
      var t = e.downloadQpl,
        n = e.failClosed,
        a = e.input,
        i = e.onSuspiciousContent,
        l = e.rawMimeType,
        s = e.type,
        u = e.withStreamCheck;
      if (
        !(await o(
          "WAWebKaleidoscopeWasmFeatureSupport",
        ).checkKaleidoscopeWasmFeatureSupport())
      )
        return a;
      t.addPoint("kaleidoscope_classify_start");
      var c = await o("WAWebMediaWorkerProxy")
          .kaleidoscopeClassifyInWorker({
            mediaType:
              o("WAWebMmsMediaTypes").mediaTypeToKaleidoscopeMediaType(s),
            rawMimeType: l,
            input: a,
            eventFlow: t,
            withStreamCheck: u,
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
        var f = F({ ksScore: _, ksMimeType: p, rawMimeType: l, mediaType: s });
        if (f === o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES)
          throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)(
            "Kaleidoscope dangerous score " + _ + " for media type " + s,
            s,
            l,
          );
        i == null || i(f);
      } else {
        var g;
        if (
          (o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
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
          throw r("err")("kaleidoscope classify failed: " + d.error.errorName);
        O(s) &&
          (t.addPoint("kaleidoscope_classify_fail_warned"),
          i == null ||
            i(o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES_KEEP));
      }
      return c.transferredBuffer;
    }
    function F(e) {
      var t = e.ksMimeType,
        n = e.ksScore,
        r = e.mediaType,
        a = e.rawMimeType;
      return n >= 90
        ? (o("WALogger")
            .WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
    function O(e) {
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
    function B(e, t, n) {
      var r = o("WAWebMmsMediaTypes").mediaTypeToMsgTypeSupportedByAllowlist(e),
        a = !1;
      if (r != null) {
        var i,
          l = o("WAWebMmsMediaTypes").getValidMimeTypes(r);
        l == null
          ? (o("WALogger")
              .WARN(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] no mime type allowlist for msg type ",
                    " (media type ",
                    ")",
                  ])),
                r,
                e,
              )
              .tags("media")
              .sendLogs("no-mimetype-allowlist-for-msg-type-" + r),
            (a = !0))
          : ((i = n == null ? void 0 : n(t)) != null ? i : l.has(t)) ||
            (o("WALogger")
              .WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[DownloadManager] unexpected mimetype ",
                    " for media type ",
                    "",
                  ])),
                t,
                e,
              )
              .tags("media", "security")
              .sendLogs("unexpected-mimetype-for-media-type-" + e),
            (a = !0));
      } else
        t.toLowerCase() === "image/svg+xml" &&
          (o("WALogger")
            .WARN(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[DownloadManager] blocked SVG mimetype for media type ",
                  "",
                ])),
              e,
            )
            .tags("media", "security")
            .sendLogs("blocked-svg-mimetype"),
          (a = !0));
      if (a)
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
    var q = new T();
    ((l.screenDecryptedMedia = M),
      (l.isMediaScreenedForOrigin = w),
      (l.enforceKaleidoscopeScore = F),
      (l.downloadManager = q));
  },
  98,
);
