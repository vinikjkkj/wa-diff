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
    "WAWebHttpErrors",
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
      S,
      R,
      L = (function (e) {
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
      E = (function (e) {
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
      k = { THUMBNAIL: 1, LOW: 2, MID: 3, FULL: 4 },
      I = new WeakMap();
    function T(e) {
      e.getDownloadPromises().forEach(function (e) {
        var t;
        if (e != null) {
          var n = (t = I.get(e)) == null ? void 0 : t.abort;
          n != null && (I.delete(e), n());
        }
      });
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.downloadOrigin,
            r = e.mediaBlob,
            a = e.mediaObject,
            i = e.mediaType,
            l = e.mimetype,
            s = e.rmrReason;
          a.mediaBlob ||
            (yield o("WAWebMediaDataUtils").gatherAndSetMetadata(a, r),
            yield N({
              mimetype: l,
              mediaObject: a,
              downloadEvenIfExpensive: !1,
              mediaType: i,
              rmrReason: s,
              downloadOrigin: n,
              chatWid: t,
            }));
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
                progressiveJpegOpts: G({
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
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chatWid,
            i = t.downloadEvenIfExpensive,
            l = t.downloadOrigin,
            S = t.isAutoDownload,
            R = t.isFinalRmrRetry,
            k = t.isVcardOverMmsDocument,
            T = t.isViewOnce,
            D = t.mediaObject,
            x = t.mediaType,
            P = t.mimetype,
            M = t.mode,
            w = t.rmrData,
            A = t.rmrReason,
            F = t.shouldSequenceDownload,
            O = F === void 0 ? !1 : F,
            B = t.shouldThrow,
            W = t.signal,
            q = B === !0,
            U = S !== !0 || r("WAWebEnvironment").isWindows;
          if (D) {
            var V = D.filehash;
            if (!r("isStringNullOrEmpty")(V)) {
              var H = K(D, x);
              H && U && (H.shouldStoreInMemory = !0);
              var G = D.getDownloadPromise(x);
              if (G) return G;
              if (
                D.downloadStage !==
                  o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
                D.downloadStage !== o("WAWebMediaTypes").DownloadStage.PREPARING
              ) {
                if (D.mediaBlob) {
                  var z = yield D.mediaBlob.validate();
                  if (z) {
                    D.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.RESOLVED,
                    });
                    return;
                  }
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-download] blob invalid, clearing fh=",
                        " msgs=",
                        "",
                      ])),
                    V != null ? V : "none",
                    D.msgs.length,
                  ),
                    D.clearBlob(),
                    D.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                    }),
                    D.notifyMsgsAsync());
                  return;
                }
                var j = o(
                    "WAWebMediaInMemoryBlobCache",
                  ).InMemoryMediaBlobCache.get(V),
                  X,
                  Y,
                  J = new AbortController();
                return r("WARaceSignal")(
                  [J.signal, W].filter(Boolean),
                  function (e) {
                    var t,
                      F,
                      B = (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            if (j) Y = j;
                            else {
                              var t, n, d;
                              if (
                                ((X = D.entries.getDownloadEntry(
                                  o(
                                    "WAWebMediaCryptoEligibilityUtils",
                                  ).isMediaCryptoExpectedForMediaType(x),
                                )),
                                !X)
                              )
                                if (
                                  (o("WALogger").LOG(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[media-download] no blob/cache/entry fh=",
                                            " msgs=",
                                            " exp=",
                                            " rmr=",
                                            "",
                                          ],
                                        )),
                                    V != null ? V : "none",
                                    D.msgs.length,
                                    i,
                                    A,
                                  ),
                                  i &&
                                    o(
                                      "WAWebMediaCryptoEligibilityUtils",
                                    ).isRmrSupportedForMediaType(x))
                                ) {
                                  if (
                                    (yield o(
                                      "WAWebDownloadManager",
                                    ).downloadManager.rmr({
                                      mediaObject: D,
                                      signal: e,
                                      rmrReason: A,
                                      rmrData: w,
                                    }),
                                    (X = D.entries.getDownloadEntry(
                                      o(
                                        "WAWebMediaCryptoEligibilityUtils",
                                      ).isMediaCryptoExpectedForMediaType(x),
                                    )),
                                    !X)
                                  ) {
                                    if (
                                      x !==
                                      o("WAWebMmsMediaTypes").MEDIA_TYPES
                                        .STICKER
                                    )
                                      throw new L();
                                    return;
                                  }
                                } else {
                                  if (
                                    !o(
                                      "WAWebMediaCryptoEligibilityUtils",
                                    ).isRmrSupportedForMediaType(x)
                                  )
                                    throw new (o(
                                      "WAWebDownloadManagerErrors",
                                    ).MediaNotOnPhone)();
                                  D.consolidate({
                                    downloadStage:
                                      o("WAWebMediaTypes").DownloadStage
                                        .NEED_POKE,
                                  });
                                  return;
                                }
                              (D.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage.FETCHING,
                              }),
                                (X = r("WANullthrows")(X)));
                              var m = X,
                                p = m.directPath,
                                _ = m.scanLengths,
                                f = m.scansSidecar,
                                g = m.staticUrl;
                              if (
                                X instanceof
                                  o("WAWebMediaEntry").EncryptedMediaEntry &&
                                X.getEncfilehash() == null &&
                                r("isStringNullOrEmpty")(p) &&
                                r("isStringNullOrEmpty")(g)
                              ) {
                                var h;
                                throw (
                                  (h = X) == null || h.markWhetherOnServer(!1),
                                  new E()
                                );
                              }
                              if (r("justknobx")._("533")) {
                                var y;
                                if (
                                  x ===
                                    o("WAWebMmsMediaTypes").MEDIA_TYPES
                                      .NEWSLETTER_IMAGE &&
                                  P != null &&
                                  (y = P.toLowerCase()) != null &&
                                  y.includes("svg")
                                )
                                  throw r("err")(
                                    "Newsletter svg mimetype is not supported",
                                  );
                              }
                              var C = yield $({
                                directPath: p,
                                encFilehash:
                                  (t = X) == null ? void 0 : t.getEncfilehash(),
                                objFilehash: V,
                                isFinalRmrRetry: R,
                                mediaKey:
                                  (n = X) == null ? void 0 : n.getMediaKey(),
                                mediaKeyTimestamp:
                                  (d = X) == null
                                    ? void 0
                                    : d.getMediaKeyTimestamp(),
                                signal: e,
                                staticUrl: g,
                                mediaType: x,
                                mediaObject: D,
                                downloadOrigin: l,
                                mode: M,
                                scanLengths: _,
                                mimetype: P,
                                scansSidecar: f,
                                isViewOnce: T,
                                chatWid: a,
                                shouldSequenceDownload: O,
                              });
                              Q(x)
                                ? (Y = yield o("WAWebMediaLoad").transcode(C))
                                : (Y = C);
                            }
                            if (
                              (Y.type ===
                                o("WAWebStickerMimeUtils")
                                  .WhatsAppLottieStickerMimeType &&
                                (yield o(
                                  "WAWebInMemoryLottieStickerCache",
                                ).extractAndSetBothLottieJSONInMemoryCache(
                                  V,
                                  Y,
                                ),
                                D.consolidate({ isLottie: !0 })),
                              Y.type === "text/vcard" && k === !0)
                            )
                              try {
                                var b = yield o("WAWebFileUtils").blobToText(Y);
                                if (b) {
                                  var v = o(
                                    "WAWebVcardParsingUtils",
                                  ).parseMultiVcard(b);
                                  v.length > 0
                                    ? D.consolidate({ parsedVcards: v })
                                    : o("WALogger")
                                        .ERROR(
                                          u ||
                                            (u =
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
                                    c ||
                                      (c =
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
                              o("WAWebMediaDataUtils").shouldUseMediaCache(x) &&
                              o(
                                "WAWebMediaInMemoryBlobCache",
                              ).InMemoryMediaBlobCache.canFitFile(Y.size)
                            ) {
                              var S = K(D, x);
                              ((S != null && S.shouldStoreInMemory) || U) &&
                                (o(
                                  "WAWebMediaInMemoryBlobCache",
                                ).InMemoryMediaBlobCache.put(V, Y),
                                yield o(
                                  "WAWebMediaDataUtils",
                                ).gatherAndSetMetadataNoOpaque(D, Y));
                            } else {
                              var I = yield r(
                                "WAWebMediaOpaqueData",
                              ).createFromData(Y, Y.type);
                              yield o(
                                "WAWebMediaDataUtils",
                              ).gatherAndSetMetadata(D, I);
                            }
                            return (
                              D.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage.RESOLVED,
                              }),
                              D.clearDownloadPromise(x),
                              D.resolveWhenConsolidated()
                            );
                          },
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })(),
                      W = B()
                        .catch(
                          (F = o("WAFilteredCatch")).filteredCatch(
                            o("WAWebMmsClientErrors").MediaNotFoundError,
                            (function () {
                              var e = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (e) {
                                if (!X || (X.markWhetherOnServer(!1), !i))
                                  throw e;
                                return (
                                  yield o(
                                    "WAWebDownloadManager",
                                  ).downloadManager.rmr({
                                    mediaObject: D,
                                    signal: new AbortController().signal,
                                    rmrReason: A,
                                    rmrData: w,
                                  }),
                                  D.clearDownloadPromise(x),
                                  N({
                                    mimetype: P,
                                    mediaObject: D,
                                    downloadEvenIfExpensive: !1,
                                    mediaType: x,
                                    rmrReason: A,
                                    rmrData: w,
                                    downloadOrigin: l,
                                    isFinalRmrRetry: !0,
                                    isVcardOverMmsDocument: k,
                                    mode: M,
                                    isAutoDownload: S,
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
                                (D.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .ERROR_UNSUPPORTED,
                                }),
                                o("WALogger").WARN(
                                  d ||
                                    (d =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "downloadMedia: media unsupported error: ",
                                        ", ",
                                        ", ",
                                        "",
                                      ])),
                                  e.name,
                                  e.message,
                                  P || "",
                                ),
                                o("WALogger")
                                  .ERROR(
                                    m ||
                                      (m =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          ["Assertion failed!"],
                                        )),
                                  )
                                  .catching(e)
                                  .tags("non-sad")
                                  .sendLogs(
                                    "downloadMedia: media unsupported error:",
                                  ),
                                q)
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
                                (D.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .ERROR_MISSING,
                                }),
                                q)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          F.filteredCatch([L, E], function (e) {
                            if (
                              (D.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage
                                    .ERROR_MISSING,
                              }),
                              !(
                                e === L &&
                                x ===
                                  o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                              ) &&
                                (o("WALogger").WARN(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Unexpected download error: ",
                                        "",
                                      ])),
                                  e.name,
                                ),
                                o("WALogger")
                                  .ERROR(
                                    _ ||
                                      (_ =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          ["Assertion failed!"],
                                        )),
                                  )
                                  .tags("non-sad")
                                  .sendLogs(
                                    "unexpected download error: " + e.name,
                                  ),
                                q))
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
                              var t = D.progressiveStage;
                              if (
                                (J.abort(),
                                D.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .NEED_POKE,
                                  progressiveStage: null,
                                }),
                                D.notifyMsgsAsync(),
                                D.delete(),
                                o(
                                  "WAWebCryptoImageStreamer",
                                ).deleteFromInMemoryMediaBlobCache(V, t),
                                q)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          F.filteredCatch(
                            [
                              o("WAWebHttpErrors")
                                .MmsDownloadFilehashMismatchError,
                            ],
                            function (e) {
                              var t = D.progressiveStage;
                              (J.abort(), D.hashMismatchRetryCount++);
                              var n = 10,
                                r = D.hashMismatchRetryCount >= n;
                              if (
                                (D.consolidate({
                                  downloadStage: r
                                    ? o("WAWebMediaTypes").DownloadStage
                                        .ERROR_MISSING
                                    : o("WAWebMediaTypes").DownloadStage
                                        .NEED_POKE,
                                  progressiveStage: null,
                                }),
                                D.notifyMsgsAsync(),
                                D.delete(),
                                o(
                                  "WAWebCryptoImageStreamer",
                                ).deleteFromInMemoryMediaBlobCache(V, t),
                                q)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(function (e) {
                          if (
                            (D.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            }),
                            e instanceof o("WAWebMiscErrors").MediaLoadError)
                          ) {
                            if (
                              (o("WALogger").WARN(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "downloadMedia: media unsupported error: ",
                                    ", ",
                                    ", ",
                                    "",
                                  ])),
                                e.name,
                                e.message,
                                P || "",
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
                                .sendLogs("downloadMedia: media load error:", {
                                  sampling: 0,
                                }),
                              q)
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
                                h ||
                                  (h = babelHelpers.taggedTemplateLiteralLoose([
                                    "downloadMedia: error: ",
                                    ", ",
                                    "",
                                  ])),
                                e.message,
                                P || "",
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
                                  "downloadMedia: transcode blob too large",
                                  { sampling: 0 },
                                ),
                              q)
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
                                C ||
                                  (C = babelHelpers.taggedTemplateLiteralLoose([
                                    "downloadMedia: error: ",
                                    ", ",
                                    "",
                                  ])),
                                e.message,
                                P || "",
                              ),
                              o("WALogger")
                                .ERROR(
                                  b ||
                                    (b =
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
                              q)
                            )
                              throw e;
                            return;
                          }
                          if (e.name === o("WAAbortError").ABORT_ERROR) {
                            if (q) throw e;
                            return;
                          }
                          if (
                            (o("WALogger").LOG(
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
                                  "downloadMedia: error",
                                ])),
                            ),
                            q)
                          )
                            throw e;
                        })
                        .finally(function () {
                          D.clearDownloadPromise(x);
                        });
                    return (
                      I.set(W, {
                        abort: function () {
                          J.abort();
                        },
                        shouldStoreInMemory:
                          ((t = K(D, x)) == null
                            ? void 0
                            : t.shouldStoreInMemory) || U,
                      }),
                      D.setDownloadPromise(W, x),
                      W
                    );
                  },
                );
              }
            }
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return F(e, /animation\/animation.json$/);
    }
    function A(e) {
      return F(e, /animation\/animation_secondary.json$/);
    }
    function F(e, t) {
      var n = Object.keys(e).find(function (e) {
        return t.test(e);
      });
      return n != null ? e[n] : void 0;
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
            n = new Uint8Array(t);
          return o("fflate").unzipSync(n);
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = new (o(
                "WAWebStickerLatencyWamEvent",
              ).StickerLatencyWamEvent)({
                size: e.size,
                stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
                  .STICKER_LATENCY_ACTION.DECOMPRESSION,
              }),
              a = self.performance.now(),
              i = yield O(e),
              l = w(i);
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
              var d = A(i);
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaObject,
            n = e.mediaType,
            a = e.mimetype,
            i = t.filehash;
          if (
            !r("isStringNullOrEmpty")(i) &&
            t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
            !(yield z(t))
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "checkExistence: error",
                    ])),
                );
              }
            }
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
    }
    function G(e) {
      var t = e.mediaObject,
        n = e.mimetype,
        a = e.scanLengths,
        i = e.scansSidecar,
        l = e.signal;
      if (!H(a, i)) return null;
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
              n >= k.MID && !s.webcMidQualityT && s.markWebcMidQualityT(),
              n === k.FULL &&
                !s.webcFullQualityT &&
                (s.markWebcFullQualityT(), s.commit())));
        },
      };
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      var n = e.getDownloadPromise(t);
      return n ? I.get(n) : null;
    }
    function Q(e) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
      );
    }
    ((l.NoEntryAfterRMR = L),
      (l.MissingEncFilehash = E),
      (l.cancelDownloadMedia = T),
      (l.manuallySetMedia = D),
      (l.downloadMedia = N),
      (l.getContentsOfLottieJSONFile = w),
      (l.getContentsOfSecondaryLottieJSONFile = A),
      (l.extractBothLottieJSON = W),
      (l.checkExistence = U));
  },
  98,
);
