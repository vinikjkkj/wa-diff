__d(
  "WAWebMediaMmsV4Download",
  [
    "WAAbortError",
    "WABlobToArrayBuffer",
    "WACustomError",
    "WAFilteredCatch",
    "WALogger",
    "WARaceSignal",
    "WAThrottle",
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
    "WAWebMediaFileErrors",
    "WAWebMediaGatherAndSetMetadataNoOpaque",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMediaSetSuspiciousContent",
    "WAWebMediaTypes",
    "WAWebMimeTypes",
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
    "nullthrows",
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
            n = o("WAThrottle").throttle(function (t) {
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
                onSuspiciousContent: function (n) {
                  return o(
                    "WAWebMediaSetSuspiciousContent",
                  ).setSuspiciousContentOnMediaObject(e.mediaObject, n);
                },
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
                experienceIds: e.experienceIds,
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
            S = t.experienceIds,
            R = t.isAutoDownload,
            k = t.isFinalRmrRetry,
            T = t.isVcardOverMmsDocument,
            D = t.isViewOnce,
            x = t.mediaObject,
            P = t.mediaType,
            M = t.mimetype,
            w = t.mode,
            A = t.rmrData,
            F = t.rmrReason,
            O = t.shouldSequenceDownload,
            B = O === void 0 ? !1 : O,
            W = t.shouldThrow,
            q = t.signal,
            U = W === !0,
            V = R !== !0 || r("WAWebEnvironment").isWindows;
          if (x) {
            var H = x.filehash;
            if (!r("isStringNullOrEmpty")(H)) {
              var G = K(x, P);
              G && V && (G.shouldStoreInMemory = !0);
              var z = x.getDownloadPromise(P);
              if (z) return z;
              if (
                x.downloadStage !==
                  o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
                x.downloadStage !== o("WAWebMediaTypes").DownloadStage.PREPARING
              ) {
                if (x.mediaBlob) {
                  var j = yield x.mediaBlob.validate();
                  if (j) {
                    x.consolidate({
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
                    H != null ? H : "none",
                    x.msgs.length,
                  ),
                    x.clearBlob(),
                    x.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                    }),
                    x.notifyMsgsAsync());
                  return;
                }
                var X = o(
                    "WAWebMediaInMemoryBlobCache",
                  ).InMemoryMediaBlobCache.get(H),
                  Y,
                  J,
                  Z = new AbortController();
                return r("WARaceSignal")(
                  [Z.signal, q].filter(Boolean),
                  function (e) {
                    var t,
                      O,
                      W = (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            if (X) J = X;
                            else {
                              var t, n, d;
                              if (
                                ((Y = x.entries.getDownloadEntry(
                                  o(
                                    "WAWebMediaCryptoEligibilityUtils",
                                  ).isMediaCryptoExpectedForMediaType(P),
                                )),
                                !Y)
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
                                    H != null ? H : "none",
                                    x.msgs.length,
                                    i,
                                    F,
                                  ),
                                  i &&
                                    o(
                                      "WAWebMediaCryptoEligibilityUtils",
                                    ).isRmrSupportedForMediaType(P))
                                ) {
                                  if (
                                    (yield o(
                                      "WAWebDownloadManager",
                                    ).downloadManager.rmr({
                                      mediaObject: x,
                                      signal: e,
                                      rmrReason: F,
                                      rmrData: A,
                                    }),
                                    (Y = x.entries.getDownloadEntry(
                                      o(
                                        "WAWebMediaCryptoEligibilityUtils",
                                      ).isMediaCryptoExpectedForMediaType(P),
                                    )),
                                    !Y)
                                  ) {
                                    if (
                                      P !==
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
                                    ).isRmrSupportedForMediaType(P)
                                  )
                                    throw new (o(
                                      "WAWebDownloadManagerErrors",
                                    ).MediaNotOnPhone)();
                                  x.consolidate({
                                    downloadStage:
                                      o("WAWebMediaTypes").DownloadStage
                                        .NEED_POKE,
                                  });
                                  return;
                                }
                              (x.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage.FETCHING,
                              }),
                                (Y = r("nullthrows")(Y)));
                              var m = Y,
                                p = m.directPath,
                                _ = m.scanLengths,
                                f = m.scansSidecar,
                                g = m.staticUrl;
                              if (
                                Y instanceof
                                  o("WAWebMediaEntry").EncryptedMediaEntry &&
                                Y.getEncfilehash() == null &&
                                r("isStringNullOrEmpty")(p) &&
                                r("isStringNullOrEmpty")(g)
                              ) {
                                var h;
                                throw (
                                  (h = Y) == null || h.markWhetherOnServer(!1),
                                  new E()
                                );
                              }
                              if (r("justknobx")._("533")) {
                                var y;
                                if (
                                  P ===
                                    o("WAWebMmsMediaTypes").MEDIA_TYPES
                                      .NEWSLETTER_IMAGE &&
                                  M != null &&
                                  (y = M.toLowerCase()) != null &&
                                  y.includes("svg")
                                )
                                  throw r("err")(
                                    "Newsletter svg mimetype is not supported",
                                  );
                              }
                              var C = yield $({
                                directPath: p,
                                encFilehash:
                                  (t = Y) == null ? void 0 : t.getEncfilehash(),
                                objFilehash: H,
                                isFinalRmrRetry: k,
                                mediaKey:
                                  (n = Y) == null ? void 0 : n.getMediaKey(),
                                mediaKeyTimestamp:
                                  (d = Y) == null
                                    ? void 0
                                    : d.getMediaKeyTimestamp(),
                                signal: e,
                                staticUrl: g,
                                mediaType: P,
                                mediaObject: x,
                                downloadOrigin: l,
                                mode: w,
                                scanLengths: _,
                                mimetype: M,
                                scansSidecar: f,
                                isViewOnce: D,
                                chatWid: a,
                                shouldSequenceDownload: B,
                                experienceIds: S,
                              });
                              Q(P)
                                ? (J = yield o("WAWebMediaLoad").transcode(C))
                                : (J = C);
                            }
                            if (
                              (J.type ===
                                o("WAWebStickerMimeUtils")
                                  .WhatsAppLottieStickerMimeType &&
                                (yield o(
                                  "WAWebInMemoryLottieStickerCache",
                                ).extractAndSetBothLottieJSONInMemoryCache(
                                  H,
                                  J,
                                ),
                                x.consolidate({ isLottie: !0 })),
                              J.type === "text/vcard" && T === !0)
                            )
                              try {
                                var b = yield o("WAWebFileUtils").blobToText(J);
                                if (b) {
                                  var v = o(
                                    "WAWebVcardParsingUtils",
                                  ).parseMultiVcard(b);
                                  v.length > 0
                                    ? x.consolidate({ parsedVcards: v })
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
                              o("WAWebMediaDataUtils").shouldUseMediaCache(P) &&
                              o(
                                "WAWebMediaInMemoryBlobCache",
                              ).InMemoryMediaBlobCache.canFitFile(J.size)
                            ) {
                              var R = K(x, P);
                              ((R != null && R.shouldStoreInMemory) || V) &&
                                (o(
                                  "WAWebMediaInMemoryBlobCache",
                                ).InMemoryMediaBlobCache.put(H, J),
                                yield o(
                                  "WAWebMediaGatherAndSetMetadataNoOpaque",
                                ).gatherAndSetMetadataNoOpaque(x, J));
                            } else {
                              var I = yield r(
                                "WAWebMediaOpaqueData",
                              ).createFromData(J, J.type);
                              yield o(
                                "WAWebMediaDataUtils",
                              ).gatherAndSetMetadata(x, I);
                            }
                            return (
                              x.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage.RESOLVED,
                              }),
                              x.clearDownloadPromise(P),
                              x.resolveWhenConsolidated()
                            );
                          },
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })(),
                      q = W()
                        .catch(
                          (O = o("WAFilteredCatch")).filteredCatch(
                            o("WAWebMmsClientErrors").MediaNotFoundError,
                            (function () {
                              var e = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (e) {
                                if (!Y || (Y.markWhetherOnServer(!1), !i))
                                  throw e;
                                return (
                                  yield o(
                                    "WAWebDownloadManager",
                                  ).downloadManager.rmr({
                                    mediaObject: x,
                                    signal: new AbortController().signal,
                                    rmrReason: F,
                                    rmrData: A,
                                  }),
                                  x.clearDownloadPromise(P),
                                  N({
                                    mimetype: M,
                                    mediaObject: x,
                                    downloadEvenIfExpensive: !1,
                                    mediaType: P,
                                    rmrReason: F,
                                    rmrData: A,
                                    downloadOrigin: l,
                                    isFinalRmrRetry: !0,
                                    isVcardOverMmsDocument: T,
                                    mode: w,
                                    isAutoDownload: R,
                                    chatWid: a,
                                    experienceIds: S,
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
                          O.filteredCatch(
                            o("WAWebMediaLoadErrors").MediaUnsupportedError,
                            function (e) {
                              if (
                                (x.consolidate({
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
                                  M || "",
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
                                U)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          O.filteredCatch(
                            o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                            function (e) {
                              if (
                                (x.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .ERROR_MISSING,
                                }),
                                U)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          O.filteredCatch([L, E], function (e) {
                            if (
                              (x.consolidate({
                                downloadStage:
                                  o("WAWebMediaTypes").DownloadStage
                                    .ERROR_MISSING,
                              }),
                              !(
                                e === L &&
                                P ===
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
                                U))
                            )
                              throw e;
                          }),
                        )
                        .catch(
                          O.filteredCatch(
                            [
                              o("WAWebMediaFileErrors").MediaDecryptionError,
                              o("WAWebMediaFileErrors").MediaHashMismatch,
                            ],
                            function (e) {
                              var t = x.progressiveStage;
                              if (
                                (Z.abort(),
                                x.consolidate({
                                  downloadStage:
                                    o("WAWebMediaTypes").DownloadStage
                                      .NEED_POKE,
                                  progressiveStage: null,
                                }),
                                x.notifyMsgsAsync(),
                                x.delete(),
                                o(
                                  "WAWebCryptoImageStreamer",
                                ).deleteFromInMemoryMediaBlobCache(H, t),
                                U)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(
                          O.filteredCatch(
                            [
                              o("WAWebHttpErrors")
                                .MmsDownloadFilehashMismatchError,
                            ],
                            function (e) {
                              var t = x.progressiveStage;
                              (Z.abort(), x.hashMismatchRetryCount++);
                              var n = 10,
                                r = x.hashMismatchRetryCount >= n;
                              if (
                                (x.consolidate({
                                  downloadStage: r
                                    ? o("WAWebMediaTypes").DownloadStage
                                        .ERROR_MISSING
                                    : o("WAWebMediaTypes").DownloadStage
                                        .NEED_POKE,
                                  progressiveStage: null,
                                }),
                                x.notifyMsgsAsync(),
                                x.delete(),
                                o(
                                  "WAWebCryptoImageStreamer",
                                ).deleteFromInMemoryMediaBlobCache(H, t),
                                U)
                              )
                                throw e;
                            },
                          ),
                        )
                        .catch(function (e) {
                          if (
                            (x.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            }),
                            e instanceof
                              o("WAWebMediaLoadErrors").MediaLoadError)
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
                                M || "",
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
                              U)
                            )
                              throw e;
                            return;
                          }
                          if (
                            e instanceof
                            o("WAWebMediaLoadErrors").TranscodeBlobTooLargeError
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
                                M || "",
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
                              U)
                            )
                              throw e;
                            return;
                          }
                          if (
                            e instanceof
                            o("WAWebMediaLoadErrors").UnableToPlayVideoError
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
                                M || "",
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
                              U)
                            )
                              throw e;
                            return;
                          }
                          if (e.name === o("WAAbortError").ABORT_ERROR) {
                            if (U) throw e;
                            return;
                          }
                          if (
                            (o("WALogger").LOG(
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
                                  "downloadMedia: error",
                                ])),
                            ),
                            U)
                          )
                            throw e;
                        })
                        .finally(function () {
                          x.clearDownloadPromise(P);
                        });
                    return (
                      I.set(q, {
                        abort: function () {
                          Z.abort();
                        },
                        shouldStoreInMemory:
                          ((t = K(x, P)) == null
                            ? void 0
                            : t.shouldStoreInMemory) || V,
                      }),
                      x.setDownloadPromise(q, P),
                      q
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
        scansSidecar: r("nullthrows")(i),
        scanLengths: r("nullthrows")(a),
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
      (l.extractBothLottieJSON = W),
      (l.checkExistence = U));
  },
  98,
);
