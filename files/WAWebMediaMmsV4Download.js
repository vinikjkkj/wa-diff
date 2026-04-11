__d(
  "WAWebMediaMmsV4Download",
  [
    "WAAbortError",
    "WABlobToArrayBuffer",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WARaceSignal",
    "WAWebCryptoImageStreamer",
    "WAWebDownloadManager",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebODS",
    "WAWebStartMediaDownloadQpl",
    "WAWebStickerErrorWamEvent",
    "WAWebStickerLatencyWamEvent",
    "WAWebStickerMimeUtils",
    "WAWebStickerUtils",
    "WAWebVcardParsingUtils",
    "WAWebWamEnumStickerErrorType",
    "WAWebWamEnumStickerLatencyAction",
    "WAWebWebcProgressiveImageWamEvent",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
    "lodash",
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
      S = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "NoEntryAfterRMR"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      R = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MissingEncFilehash"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      L = { THUMBNAIL: 1, LOW: 2, MID: 3, FULL: 4 },
      E = new WeakMap();
    function k(e) {
      e.getDownloadPromises().forEach(function (e) {
        var t;
        if (e != null) {
          var n = (t = E.get(e)) == null ? void 0 : t.abort;
          n != null && (E.delete(e), n());
        }
      });
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.downloadOrigin,
            r = e.mediaBlob,
            a = e.mediaObject,
            i = e.mediaType,
            l = e.mimetype,
            s = e.rmrReason;
          a.mediaBlob ||
            (yield o("WAWebMediaDataUtils").gatherAndSetMetadata(a, r),
            yield $({
              mimetype: l,
              mediaObject: a,
              downloadEvenIfExpensive: !1,
              mediaType: i,
              rmrReason: s,
              downloadOrigin: n,
              chatWid: t,
            }));
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
          var t = e.mimetype,
            n = r("lodash").throttle(function (t) {
              e.mediaObject.consolidate({ loadedSize: t.loaded });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "MediaDownload",
            });
          try {
            var i,
              l,
              s = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                shouldSequenceDownload: e.shouldSequenceDownload,
                directPath: e.directPath,
                encFilehash: e.encFilehash,
                filehash: e.objFilehash,
                isFinalRmrRetry: e.isFinalRmrRetry,
                mediaKey: e.mediaKey,
                mediaKeyTimestamp: e.mediaKeyTimestamp,
                signal: e.signal,
                staticUrl: e.staticUrl,
                type: e.mediaType,
                mimetype: t,
                onDecryptStart: function () {
                  e.mediaObject.consolidate({
                    downloadStage:
                      o("WAWebMediaTypes").DownloadStage.PROCESSING,
                  });
                },
                onProgress: n,
                userDownloadAttemptCount:
                  e.mediaObject.userDownloadAttemptCount,
                downloadOrigin: e.downloadOrigin,
                mode: e.mode,
                progressiveJpegOpts: V({
                  scanLengths: e.scanLengths,
                  scansSidecar: e.scansSidecar,
                  mimetype: t,
                  mediaObject: e.mediaObject,
                  signal: e.signal,
                }),
                isViewOnce: e.isViewOnce,
                imageDimensions:
                  e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
                    ? {
                        fileHeight:
                          (i = e.mediaObject.contentInfo.fullHeight) != null
                            ? i
                            : 0,
                        fileWidth:
                          (l = e.mediaObject.contentInfo.fullWidth) != null
                            ? l
                            : 0,
                      }
                    : void 0,
                chatWid: e.chatWid,
                downloadQpl: a,
              }),
              u =
                t != null && t !== ""
                  ? t
                  : o("WAWebMimeTypes").getMediaMimeType(
                      e.mediaType,
                      new Uint8Array(s),
                    ),
              c = new Blob([s], { type: u });
            return (a.endSuccess(), c);
          } catch (e) {
            throw (
              a.endFailWithError(
                "download_failed",
                r("getErrorSafe")(e).message,
              ),
              e
            );
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
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chatWid,
            i = t.downloadEvenIfExpensive,
            l = t.downloadOrigin,
            b = t.isAutoDownload,
            v = t.isFinalRmrRetry,
            L = t.isVcardOverMmsDocument,
            k = t.isViewOnce,
            I = t.mediaObject,
            T = t.mediaType,
            x = t.mimetype,
            P = t.mode,
            N = t.rmrData,
            M = t.rmrReason,
            w = t.shouldSequenceDownload,
            A = w === void 0 ? !1 : w,
            F = t.shouldThrow,
            O = t.signal,
            B = F === !0,
            W = b !== !0 || r("WAWebEnvironment").isWindows;
          if (I) {
            var q = I.filehash;
            if (!r("isStringNullOrEmpty")(q)) {
              var U = z(I, T);
              U && W && (U.shouldStoreInMemory = !0);
              var V = I.getDownloadPromise(T);
              if (V) return V;
              if (
                I.downloadStage !==
                  o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
                I.downloadStage !== o("WAWebMediaTypes").DownloadStage.PREPARING
              ) {
                if (I.mediaBlob) {
                  var H = yield I.mediaBlob.validate();
                  if (H) {
                    I.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.RESOLVED,
                    });
                    return;
                  }
                  (I.clearBlob(),
                    I.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                    }),
                    I.notifyMsgsAsync());
                  return;
                }
                var G = o(
                    "WAWebMediaInMemoryBlobCache",
                  ).InMemoryMediaBlobCache.get(q),
                  K,
                  Q,
                  X = new AbortController();
                return r("WARaceSignal")(
                  [X.signal, O].filter(Boolean),
                  function (t) {
                    var w,
                      F,
                      O = (function () {
                        var u = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            if (G) Q = G;
                            else {
                              var n, u, c;
                              if (
                                ((K = I.entries.getDownloadEntry(
                                  o(
                                    "WAWebMediaCryptoEligibilityUtils",
                                  ).isMediaCryptoExpectedForMediaType(T),
                                )),
                                !K)
                              )
                                if (
                                  i &&
                                  o(
                                    "WAWebMediaCryptoEligibilityUtils",
                                  ).isRmrSupportedForMediaType(T)
                                ) {
                                  if (
                                    (yield o(
                                      "WAWebDownloadManager",
                                    ).downloadManager.rmr({
                                      mediaObject: I,
                                      signal: t,
                                      rmrReason: M,
                                      rmrData: N,
                                    }),
                                    (K = I.entries.getDownloadEntry(
                                      o(
                                        "WAWebMediaCryptoEligibilityUtils",
                                      ).isMediaCryptoExpectedForMediaType(T),
                                    )),
                                    !K)
                                  ) {
                                    if (
                                      T !==
                                      o("WAWebMmsMediaTypes").MEDIA_TYPES
                                        .STICKER
                                    )
                                      throw new S();
                                    return;
                                  }
                                } else {
                                  if (
                                    !o(
                                      "WAWebMediaCryptoEligibilityUtils",
                                    ).isRmrSupportedForMediaType(T)
                                  )
                                    throw new (o(
                                      "WAWebDownloadManagerErrors",
                                    ).MediaNotOnPhone)();
                                  I.consolidate({
                                    downloadStage:
                                      o("WAWebMediaTypes").DownloadStage
                                        .NEED_POKE,
                                  });
                                  return;
                                }
                              (I.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage.FETCHING,
                              }),
                                (K = r("WANullthrows")(K)));
                              var d = K,
                                m = d.directPath,
                                p = d.scanLengths,
                                _ = d.scansSidecar,
                                f = d.staticUrl;
                              if (
                                K instanceof
                                  o("WAWebMediaEntry").EncryptedMediaEntry &&
                                K.getEncfilehash() == null &&
                                r("isStringNullOrEmpty")(m) &&
                                r("isStringNullOrEmpty")(f)
                              ) {
                                var g;
                                throw (
                                  (g = K) == null || g.markWhetherOnServer(!1),
                                  new R()
                                );
                              }
                              if (r("justknobx")._("533")) {
                                var h;
                                if (
                                  T ===
                                    o("WAWebMmsMediaTypes").MEDIA_TYPES
                                      .NEWSLETTER_IMAGE &&
                                  x != null &&
                                  (h = x.toLowerCase()) != null &&
                                  h.includes("svg")
                                )
                                  throw r("err")(
                                    "Newsletter svg mimetype is not supported",
                                  );
                              }
                              var y = yield D({
                                directPath: m,
                                encFilehash:
                                  (n = K) == null ? void 0 : n.getEncfilehash(),
                                objFilehash: q,
                                isFinalRmrRetry: v,
                                mediaKey:
                                  (u = K) == null ? void 0 : u.getMediaKey(),
                                mediaKeyTimestamp:
                                  (c = K) == null
                                    ? void 0
                                    : c.getMediaKeyTimestamp(),
                                signal: t,
                                staticUrl: f,
                                mediaType: T,
                                mediaObject: I,
                                downloadOrigin: l,
                                mode: P,
                                scanLengths: p,
                                mimetype: x,
                                scansSidecar: _,
                                isViewOnce: k,
                                chatWid: a,
                                shouldSequenceDownload: A,
                              });
                              j(T)
                                ? (Q = yield o("WAWebMediaLoad").transcode(y))
                                : (Q = y);
                            }
                            if (
                              (Q.type ===
                                o("WAWebStickerMimeUtils")
                                  .WhatsAppLottieStickerMimeType &&
                                (yield o(
                                  "WAWebInMemoryLottieStickerCache",
                                ).extractAndSetBothLottieJSONInMemoryCache(
                                  q,
                                  Q,
                                ),
                                I.consolidate({ isLottie: !0 })),
                              Q.type === "text/vcard" && L === !0)
                            )
                              try {
                                var C = yield o("WAWebFileUtils").blobToText(Q);
                                if (C) {
                                  var b = o(
                                    "WAWebVcardParsingUtils",
                                  ).parseMultiVcard(C);
                                  b.length > 0
                                    ? I.consolidate({ parsedVcards: b })
                                    : o("WALogger")
                                        .ERROR(
                                          e ||
                                            (e =
                                              babelHelpers.taggedTemplateLiteralLoose(
                                                ["Assertion failed!"],
                                              )),
                                        )
                                        .tags("non-sad")
                                        .sendLogs(
                                          "vcard_over_mms:Failed to parse vcard over mms contents",
                                        );
                                }
                              } catch (e) {
                                o("WALogger")
                                  .ERROR(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "Failed to retrieve blob text contents",
                                          ],
                                        )),
                                  )
                                  .catching(r("getErrorSafe")(e))
                                  .tags("non-sad")
                                  .sendLogs(
                                    "vcard_over_mms:blobToText failed with error",
                                  );
                              }
                            if (
                              o("WAWebMediaDataUtils").shouldUseMediaCache(T) &&
                              o(
                                "WAWebMediaInMemoryBlobCache",
                              ).InMemoryMediaBlobCache.canFitFile(Q.size)
                            ) {
                              var E = z(I, T);
                              ((E != null && E.shouldStoreInMemory) || W) &&
                                (o(
                                  "WAWebMediaInMemoryBlobCache",
                                ).InMemoryMediaBlobCache.put(q, Q),
                                yield o(
                                  "WAWebMediaDataUtils",
                                ).gatherAndSetMetadataNoOpaque(I, Q));
                            } else {
                              var $ = yield r(
                                "WAWebMediaOpaqueData",
                              ).createFromData(Q, Q.type);
                              yield o(
                                "WAWebMediaDataUtils",
                              ).gatherAndSetMetadata(I, $);
                            }
                            return (
                              I.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage.RESOLVED,
                              }),
                              I.clearDownloadPromise(T),
                              I.resolveWhenConsolidated()
                            );
                          },
                        );
                        return function () {
                          return u.apply(this, arguments);
                        };
                      })(),
                      U = O()
                        .catch(
                          (F = o("WAFilteredCatch")).filteredCatch(
                            o("WAWebMmsClientErrors").MediaNotFoundError,
                            (function () {
                              var e = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (e) {
                                if (!K || (K.markWhetherOnServer(!1), !i))
                                  throw e;
                                return (
                                  yield o(
                                    "WAWebDownloadManager",
                                  ).downloadManager.rmr({
                                    mediaObject: I,
                                    signal: new AbortController().signal,
                                    rmrReason: M,
                                    rmrData: N,
                                  }),
                                  I.clearDownloadPromise(T),
                                  $({
                                    mimetype: x,
                                    mediaObject: I,
                                    downloadEvenIfExpensive: !1,
                                    mediaType: T,
                                    rmrReason: M,
                                    rmrData: N,
                                    downloadOrigin: l,
                                    isFinalRmrRetry: !0,
                                    isVcardOverMmsDocument: L,
                                    mode: P,
                                    isAutoDownload: b,
                                    chatWid: a,
                                  })
                                );
                              });
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          ),
                        )
                        .catch(
                          F.filteredCatch(
                            o("WAWebMiscErrors").MediaUnsupportedError,
                            function (e) {
                              if (
                                (I.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .ERROR_UNSUPPORTED,
                                }),
                                o("WALogger").WARN(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "downloadMedia: media unsupported error: ",
                                        ", ",
                                        ", ",
                                        "",
                                      ])),
                                  e.name,
                                  e.message,
                                  x || "",
                                ),
                                o("WALogger")
                                  .ERROR(
                                    c ||
                                      (c =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          ["Assertion failed!"],
                                        )),
                                  )
                                  .catching(e)
                                  .tags("non-sad")
                                  .sendLogs(
                                    "downloadMedia: media unsupported error:",
                                  ),
                                B)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          F.filteredCatch(
                            o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                            function (e) {
                              if (
                                (I.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .ERROR_MISSING,
                                }),
                                B)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          F.filteredCatch([S, R], function (e) {
                            if (
                              (I.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage
                                    .ERROR_MISSING,
                              }),
                              !(
                                e === S &&
                                T ===
                                  o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                              ) &&
                                (o("WALogger").WARN(
                                  d ||
                                    (d =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Unexpected download error: ",
                                        "",
                                      ])),
                                  e.name,
                                ),
                                o("WALogger")
                                  .ERROR(
                                    m ||
                                      (m =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          ["Assertion failed!"],
                                        )),
                                  )
                                  .tags("non-sad")
                                  .sendLogs(
                                    "unexpected download error: " + e.name,
                                  ),
                                B))
                            )
                              throw e;
                          }),
                        )
                        .catch(
                          F.filteredCatch(
                            [
                              o("WAWebMiscErrors").MediaDecryptionError,
                              o("WAWebMiscErrors").MediaHashMismatch,
                            ],
                            function (e) {
                              var t = I.progressiveStage;
                              if (
                                (X.abort(),
                                I.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .NEED_POKE,
                                  progressiveStage: null,
                                }),
                                I.notifyMsgsAsync(),
                                I.delete(),
                                o(
                                  "WAWebCryptoImageStreamer",
                                ).deleteFromInMemoryMediaBlobCache(q, t),
                                B)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(function (e) {
                          if (
                            (I.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            }),
                            e instanceof o("WAWebMiscErrors").MediaLoadError)
                          ) {
                            if (
                              (o("WALogger").WARN(
                                p ||
                                  (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "downloadMedia: media unsupported error: ",
                                    ", ",
                                    ", ",
                                    "",
                                  ])),
                                e.name,
                                e.message,
                                x || "",
                              ),
                              o("WALogger")
                                .ERROR(
                                  _ ||
                                    (_ =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Assertion failed!",
                                      ])),
                                )
                                .catching(e)
                                .tags("non-sad")
                                .sendLogs("downloadMedia: media load error:", {
                                  sampling: 0,
                                }),
                              B)
                            )
                              throw e;
                            return;
                          }
                          if (
                            e instanceof
                            o("WAWebMiscErrors").TranscodeBlobTooLargeError
                          ) {
                            if (
                              (o("WALogger").WARN(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "downloadMedia: error: ",
                                    ", ",
                                    "",
                                  ])),
                                e.message,
                                x || "",
                              ),
                              o("WALogger")
                                .ERROR(
                                  g ||
                                    (g =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Assertion failed!",
                                      ])),
                                )
                                .catching(e)
                                .tags("non-sad")
                                .sendLogs(
                                  "downloadMedia: transcode blob too large",
                                  { sampling: 0 },
                                ),
                              B)
                            )
                              throw e;
                            return;
                          }
                          if (
                            e instanceof
                            o("WAWebMiscErrors").UnableToPlayVideoError
                          ) {
                            if (
                              (o("WALogger").WARN(
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "downloadMedia: error: ",
                                    ", ",
                                    "",
                                  ])),
                                e.message,
                                x || "",
                              ),
                              o("WALogger")
                                .ERROR(
                                  y ||
                                    (y =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Assertion failed!",
                                      ])),
                                )
                                .catching(e)
                                .tags("non-sad")
                                .sendLogs(
                                  "downloadMedia: unable to play video",
                                  { sampling: 0 },
                                ),
                              B)
                            )
                              throw e;
                            return;
                          }
                          if (e.name === o("WAAbortError").ABORT_ERROR) {
                            if (B) throw e;
                            return;
                          }
                          if (
                            (o("WALogger").LOG(
                              C ||
                                (C = babelHelpers.taggedTemplateLiteralLoose([
                                  "downloadMedia: error",
                                ])),
                            ),
                            B)
                          )
                            throw e;
                        })
                        .finally(function () {
                          I.clearDownloadPromise(T);
                        });
                    return (
                      E.set(U, {
                        abort: function () {
                          X.abort();
                        },
                        shouldStoreInMemory:
                          ((w = z(I, T)) == null
                            ? void 0
                            : w.shouldStoreInMemory) || W,
                      }),
                      I.setDownloadPromise(U, T),
                      U
                    );
                  },
                );
              }
            }
          }
        })),
        P.apply(this, arguments)
      );
    }
    var N = function (t) {
        return w(t, /animation\/animation.json$/);
      },
      M = function (t) {
        return w(t, /animation\/animation_secondary.json$/);
      };
    function w(e, t) {
      var n = Object.keys(e).find(function (e) {
        return t.test(e);
      });
      return n != null ? e[n] : void 0;
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
            n = new Uint8Array(t);
          return o("fflate").unzipSync(n);
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = new (o(
                "WAWebStickerLatencyWamEvent",
              ).StickerLatencyWamEvent)({
                size: e.size,
                stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
                  .STICKER_LATENCY_ACTION.DECOMPRESSION,
              }),
              a = self.performance.now(),
              i = yield A(e),
              l = N(i);
            if (!l) throw r("err")("animationContents missing");
            var s = new TextDecoder("utf-8").decode(l),
              u = yield o("WAWebStickerUtils").isLottieStickerFirstParty(i, s);
            if (!u)
              throw (
                r("WAWebODS") == null ||
                  r("WAWebODS").incr(
                    "web.stickers.lottie_sticker_not_first_party",
                  ),
                r("err")(
                  "Primary Lottie animation failed first-party verification",
                )
              );
            ((n.stickerLatencyTtAction = Math.ceil(self.performance.now() - a)),
              n.commit());
            var c = null;
            try {
              var d = M(i);
              if (d) {
                var m = new TextDecoder("utf-8").decode(d),
                  p = yield o(
                    "WAWebStickerUtils",
                  ).isSecondaryLottieStickerFirstParty(i, m);
                p && (c = m);
              }
            } catch (e) {}
            return { primary: s, secondary: c };
          } catch (e) {
            return (
              new (o("WAWebStickerErrorWamEvent").StickerErrorWamEvent)({
                stickerErrorType: o("WAWebWamEnumStickerErrorType")
                  .STICKER_ERROR_TYPE.DECOMPRESSION,
              }).commit(),
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to extract Lottie Sticker zip file",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("non-sad")
                .sendLogs(
                  "lottie_sticker:Failed to extract Lottie Sticker zip file",
                ),
              { primary: null, secondary: null }
            );
          }
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
          var t = e.mediaObject,
            n = e.mediaType,
            a = e.mimetype,
            i = t.filehash;
          if (
            !r("isStringNullOrEmpty")(i) &&
            t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
            !(yield H(t))
          ) {
            var l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                i,
              ),
              s = new AbortController();
            if (l) {
              t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                t.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.EXISTS,
                });
              return;
            }
            var u = t.entries.getDownloadEntry(
              o(
                "WAWebMediaCryptoEligibilityUtils",
              ).isMediaCryptoExpectedForMediaType(n),
            );
            if (!u) {
              t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                t.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                });
              return;
            }
            if (!(u instanceof o("WAWebMediaEntry").UnencryptedMediaEntry)) {
              var c = u.getEncfilehash();
              if (
                r("isStringNullOrEmpty")(c) &&
                r("isStringNullOrEmpty")(u.directPath) &&
                r("isStringNullOrEmpty")(u.staticUrl)
              ) {
                (u.markWhetherOnServer(!1),
                  t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                    t.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                    }));
                return;
              }
              try {
                (r("isStringNullOrEmpty")(u.staticUrl) &&
                  !r("isStringNullOrEmpty")(c) &&
                  (yield o(
                    "WAWebDownloadManager",
                  ).downloadManager.checkExistence({
                    directPath: u.directPath,
                    encFilehash: c,
                    signal: s.signal,
                    type: n,
                  })),
                  t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                    t.consolidate({
                      downloadStage: o("WAWebMediaTypes").DownloadStage.EXISTS,
                    }));
              } catch (e) {
                t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
                  t.consolidate({
                    downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                  });
                var d = r("getErrorSafe")(e);
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "checkExistence: error",
                    ])),
                );
              }
            }
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
    }
    function V(e) {
      var t = e.mediaObject,
        n = e.mimetype,
        a = e.scanLengths,
        i = e.scansSidecar,
        l = e.signal;
      if (!U(a, i)) return null;
      var s = new (o(
        "WAWebWebcProgressiveImageWamEvent",
      ).WebcProgressiveImageWamEvent)({ webcFirstRenderScans: 0 });
      return {
        mimetype: n,
        scansSidecar: r("WANullthrows")(i),
        scanLengths: r("WANullthrows")(a),
        onProgressiveUpdate: function (n) {
          l.aborted ||
            (t.downloadStage !== o("WAWebMediaTypes").DownloadStage.RESOLVED &&
              (t.consolidate({
                downloadStage:
                  o("WAWebMediaTypes").DownloadStage.PROGRESSIVE_READY,
                progressiveStage: n,
              }),
              s.webcFirstRenderScans ||
                ((s.webcFirstRenderScans = n), s.markWebcFirstRenderT()),
              n >= L.MID && !s.webcMidQualityT && s.markWebcMidQualityT(),
              n === L.FULL &&
                !s.webcFullQualityT &&
                (s.markWebcFullQualityT(), s.commit())));
        },
      };
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.mediaBlob) return !1;
          var t = yield e.mediaBlob.validate();
          return t
            ? (e.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
              }),
              !0)
            : (e.clearBlob(),
              e.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              }),
              e.notifyMsgsAsync(),
              !1);
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      var n = e.getDownloadPromise(t);
      return n ? E.get(n) : null;
    }
    function j(e) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
      );
    }
    ((l.NoEntryAfterRMR = S),
      (l.MissingEncFilehash = R),
      (l.cancelDownloadMedia = k),
      (l.manuallySetMedia = I),
      (l.downloadMedia = $),
      (l.getContentsOfLottieJSONFile = N),
      (l.getContentsOfSecondaryLottieJSONFile = M),
      (l.extractBothLottieJSON = O),
      (l.checkExistence = W));
  },
  98,
);
