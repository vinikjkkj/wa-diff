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
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMediaSetSuspiciousContent",
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
    "err",
    "fflate",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
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
    async function D(e) {
      var t = e.chatWid,
        n = e.downloadOrigin,
        r = e.mediaBlob,
        a = e.mediaObject,
        i = e.mediaType,
        l = e.mimetype,
        s = e.rmrReason;
      a.mediaBlob ||
        (await o("WAWebMediaDataUtils").gatherAndSetMetadata(a, r),
        await $({
          mimetype: l,
          mediaObject: a,
          downloadEvenIfExpensive: !1,
          mediaType: i,
          rmrReason: s,
          downloadOrigin: n,
          chatWid: t,
        }));
    }
    async function x(e) {
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
          s = await o(
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
                downloadStage: o("WAWebMediaTypes").DownloadStage.PROCESSING,
              });
            },
            onProgress: n,
            onSuspiciousContent: function (n) {
              return o(
                "WAWebMediaSetSuspiciousContent",
              ).setSuspiciousContentOnMediaObject(e.mediaObject, n);
            },
            userDownloadAttemptCount: e.mediaObject.userDownloadAttemptCount,
            downloadOrigin: e.downloadOrigin,
            mode: e.mode,
            progressiveJpegOpts: B({
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
                      (l = e.mediaObject.contentInfo.fullWidth) != null ? l : 0,
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
          a.endFailWithError("download_failed", r("getErrorSafe")(e).message),
          e
        );
      }
    }
    async function $(t) {
      var n = t.chatWid,
        a = t.downloadEvenIfExpensive,
        i = t.downloadOrigin,
        l = t.isAutoDownload,
        S = t.isFinalRmrRetry,
        R = t.isVcardOverMmsDocument,
        k = t.isViewOnce,
        T = t.mediaObject,
        D = t.mediaType,
        P = t.mimetype,
        N = t.mode,
        M = t.rmrData,
        w = t.rmrReason,
        A = t.shouldSequenceDownload,
        F = A === void 0 ? !1 : A,
        O = t.shouldThrow,
        B = t.signal,
        W = O === !0,
        V = l !== !0 || r("WAWebEnvironment").isWindows;
      if (T) {
        var H = T.filehash;
        if (!r("isStringNullOrEmpty")(H)) {
          var G = q(T, D);
          G && V && (G.shouldStoreInMemory = !0);
          var z = T.getDownloadPromise(D);
          if (z) return z;
          if (
            T.downloadStage !==
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
            T.downloadStage !== o("WAWebMediaTypes").DownloadStage.PREPARING
          ) {
            if (T.mediaBlob) {
              var j = await T.mediaBlob.validate();
              if (j) {
                T.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
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
                T.msgs.length,
              ),
                T.clearBlob(),
                T.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                }),
                T.notifyMsgsAsync());
              return;
            }
            var K = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                H,
              ),
              Q,
              X,
              Y = new AbortController();
            return r("WARaceSignal")(
              [Y.signal, B].filter(Boolean),
              function (e) {
                var t,
                  A,
                  O = async function () {
                    if (K) X = K;
                    else {
                      var t, l, d;
                      if (
                        ((Q = T.entries.getDownloadEntry(
                          o(
                            "WAWebMediaCryptoEligibilityUtils",
                          ).isMediaCryptoExpectedForMediaType(D),
                        )),
                        !Q)
                      )
                        if (
                          (o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[media-download] no blob/cache/entry fh=",
                                " msgs=",
                                " exp=",
                                " rmr=",
                                "",
                              ])),
                            H != null ? H : "none",
                            T.msgs.length,
                            a,
                            w,
                          ),
                          a &&
                            o(
                              "WAWebMediaCryptoEligibilityUtils",
                            ).isRmrSupportedForMediaType(D))
                        ) {
                          if (
                            (await o(
                              "WAWebDownloadManager",
                            ).downloadManager.rmr({
                              mediaObject: T,
                              signal: e,
                              rmrReason: w,
                              rmrData: M,
                            }),
                            (Q = T.entries.getDownloadEntry(
                              o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isMediaCryptoExpectedForMediaType(D),
                            )),
                            !Q)
                          ) {
                            if (
                              D !== o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                            )
                              throw new L();
                            return;
                          }
                        } else {
                          if (
                            !o(
                              "WAWebMediaCryptoEligibilityUtils",
                            ).isRmrSupportedForMediaType(D)
                          )
                            throw new (o(
                              "WAWebDownloadManagerErrors",
                            ).MediaNotOnPhone)();
                          T.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                          });
                          return;
                        }
                      (T.consolidate({
                        downloadStage:
                          o("WAWebMediaTypes").DownloadStage.FETCHING,
                      }),
                        (Q = r("WANullthrows")(Q)));
                      var m = Q,
                        p = m.directPath,
                        _ = m.scanLengths,
                        f = m.scansSidecar,
                        g = m.staticUrl;
                      if (
                        Q instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                        Q.getEncfilehash() == null &&
                        r("isStringNullOrEmpty")(p) &&
                        r("isStringNullOrEmpty")(g)
                      ) {
                        var h;
                        throw (
                          (h = Q) == null || h.markWhetherOnServer(!1),
                          new E()
                        );
                      }
                      if (r("justknobx")._("533")) {
                        var y;
                        if (
                          D ===
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
                      var C = await x({
                        directPath: p,
                        encFilehash:
                          (t = Q) == null ? void 0 : t.getEncfilehash(),
                        objFilehash: H,
                        isFinalRmrRetry: S,
                        mediaKey: (l = Q) == null ? void 0 : l.getMediaKey(),
                        mediaKeyTimestamp:
                          (d = Q) == null ? void 0 : d.getMediaKeyTimestamp(),
                        signal: e,
                        staticUrl: g,
                        mediaType: D,
                        mediaObject: T,
                        downloadOrigin: i,
                        mode: N,
                        scanLengths: _,
                        mimetype: P,
                        scansSidecar: f,
                        isViewOnce: k,
                        chatWid: n,
                        shouldSequenceDownload: F,
                      });
                      U(D)
                        ? (X = await o("WAWebMediaLoad").transcode(C))
                        : (X = C);
                    }
                    if (
                      (X.type ===
                        o("WAWebStickerMimeUtils")
                          .WhatsAppLottieStickerMimeType &&
                        (await o(
                          "WAWebInMemoryLottieStickerCache",
                        ).extractAndSetBothLottieJSONInMemoryCache(H, X),
                        T.consolidate({ isLottie: !0 })),
                      X.type === "text/vcard" && R === !0)
                    )
                      try {
                        var b = await o("WAWebFileUtils").blobToText(X);
                        if (b) {
                          var v = o("WAWebVcardParsingUtils").parseMultiVcard(
                            b,
                          );
                          v.length > 0
                            ? T.consolidate({ parsedVcards: v })
                            : o("WALogger")
                                .ERROR(
                                  u ||
                                    (u =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "Assertion failed!",
                                      ])),
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
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to retrieve blob text contents",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .tags("non-sad")
                          .sendLogs(
                            "vcard_over_mms:blobToText failed with error",
                          );
                      }
                    if (
                      o("WAWebMediaDataUtils").shouldUseMediaCache(D) &&
                      o(
                        "WAWebMediaInMemoryBlobCache",
                      ).InMemoryMediaBlobCache.canFitFile(X.size)
                    ) {
                      var I = q(T, D);
                      ((I != null && I.shouldStoreInMemory) || V) &&
                        (o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(H, X),
                        await o(
                          "WAWebMediaDataUtils",
                        ).gatherAndSetMetadataNoOpaque(T, X));
                    } else {
                      var $ = await r("WAWebMediaOpaqueData").createFromData(
                        X,
                        X.type,
                      );
                      await o("WAWebMediaDataUtils").gatherAndSetMetadata(T, $);
                    }
                    return (
                      T.consolidate({
                        downloadStage:
                          o("WAWebMediaTypes").DownloadStage.RESOLVED,
                      }),
                      T.clearDownloadPromise(D),
                      T.resolveWhenConsolidated()
                    );
                  },
                  B = O()
                    .catch(
                      (A = o("WAFilteredCatch")).filteredCatch(
                        o("WAWebMmsClientErrors").MediaNotFoundError,
                        async function (e) {
                          if (!Q || (Q.markWhetherOnServer(!1), !a)) throw e;
                          return (
                            await o("WAWebDownloadManager").downloadManager.rmr(
                              {
                                mediaObject: T,
                                signal: new AbortController().signal,
                                rmrReason: w,
                                rmrData: M,
                              },
                            ),
                            T.clearDownloadPromise(D),
                            $({
                              mimetype: P,
                              mediaObject: T,
                              downloadEvenIfExpensive: !1,
                              mediaType: D,
                              rmrReason: w,
                              rmrData: M,
                              downloadOrigin: i,
                              isFinalRmrRetry: !0,
                              isVcardOverMmsDocument: R,
                              mode: N,
                              isAutoDownload: l,
                              chatWid: n,
                            })
                          );
                        },
                      ),
                    )
                    .catch(
                      A.filteredCatch(
                        o("WAWebMiscErrors").MediaUnsupportedError,
                        function (e) {
                          if (
                            (T.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage
                                  .ERROR_UNSUPPORTED,
                            }),
                            o("WALogger").WARN(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
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
                                  (m = babelHelpers.taggedTemplateLiteralLoose([
                                    "Assertion failed!",
                                  ])),
                              )
                              .catching(e)
                              .tags("non-sad")
                              .sendLogs(
                                "downloadMedia: media unsupported error:",
                              ),
                            W)
                          )
                            throw e;
                        },
                      ),
                    )
                    .catch(
                      A.filteredCatch(
                        o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                        function (e) {
                          if (
                            (T.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage
                                  .ERROR_MISSING,
                            }),
                            W)
                          )
                            throw e;
                        },
                      ),
                    )
                    .catch(
                      A.filteredCatch([L, E], function (e) {
                        if (
                          (T.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                          }),
                          !(
                            e === L &&
                            D === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                          ) &&
                            (o("WALogger").WARN(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "Unexpected download error: ",
                                  "",
                                ])),
                              e.name,
                            ),
                            o("WALogger")
                              .ERROR(
                                _ ||
                                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "Assertion failed!",
                                  ])),
                              )
                              .tags("non-sad")
                              .sendLogs("unexpected download error: " + e.name),
                            W))
                        )
                          throw e;
                      }),
                    )
                    .catch(
                      A.filteredCatch(
                        [
                          o("WAWebMiscErrors").MediaDecryptionError,
                          o("WAWebMiscErrors").MediaHashMismatch,
                        ],
                        function (e) {
                          var t = T.progressiveStage;
                          if (
                            (Y.abort(),
                            T.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                              progressiveStage: null,
                            }),
                            T.notifyMsgsAsync(),
                            T.delete(),
                            o(
                              "WAWebCryptoImageStreamer",
                            ).deleteFromInMemoryMediaBlobCache(H, t),
                            W)
                          )
                            throw e;
                        },
                      ),
                    )
                    .catch(
                      A.filteredCatch(
                        [o("WAWebHttpErrors").MmsDownloadFilehashMismatchError],
                        function (e) {
                          var t = T.progressiveStage;
                          (Y.abort(), T.hashMismatchRetryCount++);
                          var n = 10,
                            r = T.hashMismatchRetryCount >= n;
                          if (
                            (T.consolidate({
                              downloadStage: r
                                ? o("WAWebMediaTypes").DownloadStage
                                    .ERROR_MISSING
                                : o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                              progressiveStage: null,
                            }),
                            T.notifyMsgsAsync(),
                            T.delete(),
                            o(
                              "WAWebCryptoImageStreamer",
                            ).deleteFromInMemoryMediaBlobCache(H, t),
                            W)
                          )
                            throw e;
                        },
                      ),
                    )
                    .catch(function (e) {
                      if (
                        (T.consolidate({
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
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "Assertion failed!",
                                ])),
                            )
                            .catching(e)
                            .tags("non-sad")
                            .sendLogs("downloadMedia: media load error:", {
                              sampling: 0,
                            }),
                          W)
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
                                (y = babelHelpers.taggedTemplateLiteralLoose([
                                  "Assertion failed!",
                                ])),
                            )
                            .catching(e)
                            .tags("non-sad")
                            .sendLogs(
                              "downloadMedia: transcode blob too large",
                              { sampling: 0 },
                            ),
                          W)
                        )
                          throw e;
                        return;
                      }
                      if (
                        e instanceof o("WAWebMiscErrors").UnableToPlayVideoError
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
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "Assertion failed!",
                                ])),
                            )
                            .catching(e)
                            .tags("non-sad")
                            .sendLogs("downloadMedia: unable to play video", {
                              sampling: 0,
                            }),
                          W)
                        )
                          throw e;
                        return;
                      }
                      if (e.name === o("WAAbortError").ABORT_ERROR) {
                        if (W) throw e;
                        return;
                      }
                      if (
                        (o("WALogger").LOG(
                          v ||
                            (v = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: error",
                            ])),
                        ),
                        W)
                      )
                        throw e;
                    })
                    .finally(function () {
                      T.clearDownloadPromise(D);
                    });
                return (
                  I.set(B, {
                    abort: function () {
                      Y.abort();
                    },
                    shouldStoreInMemory:
                      ((t = q(T, D)) == null
                        ? void 0
                        : t.shouldStoreInMemory) || V,
                  }),
                  T.setDownloadPromise(B, D),
                  B
                );
              },
            );
          }
        }
      }
    }
    function P(e) {
      return M(e, /animation\/animation.json$/);
    }
    function N(e) {
      return M(e, /animation\/animation_secondary.json$/);
    }
    function M(e, t) {
      var n = Object.keys(e).find(function (e) {
        return t.test(e);
      });
      return n != null ? e[n] : void 0;
    }
    async function w(e) {
      var t = await o("WABlobToArrayBuffer").blobToArrayBuffer(e),
        n = new Uint8Array(t);
      return o("fflate").unzipSync(n);
    }
    async function A(e, t) {
      try {
        var n = new (o("WAWebStickerLatencyWamEvent").StickerLatencyWamEvent)({
            size: e.size,
            stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
              .STICKER_LATENCY_ACTION.DECOMPRESSION,
          }),
          a = self.performance.now(),
          i = await w(e),
          l = P(i);
        if (!l) throw r("err")("animationContents missing");
        var s = new TextDecoder("utf-8").decode(l),
          u = await o("WAWebStickerUtils").isLottieStickerFirstParty(i, s);
        if (!u)
          throw (
            r("WAWebODS") == null ||
              r("WAWebODS").incr("web.stickers.lottie_sticker_not_first_party"),
            r("err")("Primary Lottie animation failed first-party verification")
          );
        ((n.stickerLatencyTtAction = Math.ceil(self.performance.now() - a)),
          n.commit());
        var c = null;
        try {
          var d = N(i);
          if (d) {
            var m = new TextDecoder("utf-8").decode(d),
              p = await o(
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
    }
    async function F(e) {
      var t = e.mediaObject,
        n = e.mediaType,
        a = e.mimetype,
        i = t.filehash;
      if (
        !r("isStringNullOrEmpty")(i) &&
        t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
        !(await W(t))
      ) {
        var l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(i),
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
                  downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                }));
            return;
          }
          try {
            (r("isStringNullOrEmpty")(u.staticUrl) &&
              !r("isStringNullOrEmpty")(c) &&
              (await o("WAWebDownloadManager").downloadManager.checkExistence({
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
    }
    function O(e, t) {
      return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
    }
    function B(e) {
      var t = e.mediaObject,
        n = e.mimetype,
        a = e.scanLengths,
        i = e.scansSidecar,
        l = e.signal;
      if (!O(a, i)) return null;
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
    async function W(e) {
      if (!e.mediaBlob) return !1;
      var t = await e.mediaBlob.validate();
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
    }
    function q(e, t) {
      var n = e.getDownloadPromise(t);
      return n ? I.get(n) : null;
    }
    function U(e) {
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
      (l.downloadMedia = $),
      (l.getContentsOfLottieJSONFile = P),
      (l.getContentsOfSecondaryLottieJSONFile = N),
      (l.extractBothLottieJSON = A),
      (l.checkExistence = F));
  },
  98,
);
