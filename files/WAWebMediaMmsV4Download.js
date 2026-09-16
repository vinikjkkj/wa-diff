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
            (yield o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(
              a,
              r,
            ),
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
          var t,
            n,
            r = e.downloadQpl,
            a = e.mimetype,
            i = o("WAThrottle").throttle(function (t) {
              e.mediaObject.consolidate({ loadedSize: t.loaded });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            l = yield o(
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
              mimetype: a,
              onDecryptStart: function () {
                e.mediaObject.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.PROCESSING,
                });
              },
              onProgress: i,
              onSuspiciousContent: function (n) {
                return o(
                  "WAWebMediaSetSuspiciousContent",
                ).setSuspiciousContentOnMediaObject(e.mediaObject, n);
              },
              userDownloadAttemptCount: e.mediaObject.userDownloadAttemptCount,
              downloadOrigin: e.downloadOrigin,
              mode: e.mode,
              progressiveJpegOpts: z({
                scanLengths: e.scanLengths,
                scansSidecar: e.scansSidecar,
                mimetype: a,
                mediaObject: e.mediaObject,
                signal: e.signal,
              }),
              isViewOnce: e.isViewOnce,
              imageDimensions:
                e.mediaType === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
                  ? {
                      fileHeight:
                        (t = e.mediaObject.contentInfo.fullHeight) != null
                          ? t
                          : 0,
                      fileWidth:
                        (n = e.mediaObject.contentInfo.fullWidth) != null
                          ? n
                          : 0,
                    }
                  : void 0,
              chatWid: e.chatWid,
              downloadQpl: r,
              experienceIds: e.experienceIds,
            }),
            s =
              a != null && a !== ""
                ? a
                : o("WAWebMimeTypes").getMediaMimeType(
                    e.mediaType,
                    new Uint8Array(l),
                  );
          return new Blob([l], { type: s });
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
            S = t.downloadQplContext,
            R = t.experienceIds,
            k = t.isAutoDownload,
            T = t.isFinalRmrRetry,
            D = t.isVcardOverMmsDocument,
            x = t.isViewOnce,
            P = t.mediaObject,
            M = t.mediaType,
            A = t.mimetype,
            F = t.mode,
            O = t.rmrData,
            B = t.rmrReason,
            W = t.shouldSequenceDownload,
            q = W === void 0 ? !1 : W,
            U = t.shouldThrow,
            V = t.signal,
            H = U === !0,
            G =
              S != null
                ? S
                : {
                    qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                      entryPoint: "MediaDownload",
                    }),
                    rmrRetryCount: 0,
                  },
            z = G.qpl,
            j = G.rmrRetryCount;
          if (
            (j > 0 && z.addAnnotations({ bool: { hasRetry: !0 } }), P == null)
          ) {
            z.endFail("missing_media_object", {
              string: { earlyExitReason: "missing_media_object" },
            });
            return;
          }
          var K = P.filehash;
          if (r("isStringNullOrEmpty")(K)) {
            z.endFail("missing_filehash", {
              string: { earlyExitReason: "missing_filehash" },
            });
            return;
          }
          if (
            P.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
          ) {
            z.endFail("error_missing_download_stage", {
              string: { earlyExitReason: "error_missing_download_stage" },
            });
            return;
          }
          var X = k !== !0 || r("WAWebEnvironment").isWindows,
            Y = P.getDownloadPromise(M);
          if (Y) {
            z.addPoint("existing_download_promise");
            var J = I.get(Y);
            return (
              J && X && (J.shouldStoreInMemory = !0),
              Y.then(
                function () {
                  P.downloadStage ===
                  o("WAWebMediaTypes").DownloadStage.RESOLVED
                    ? z.endSuccess({
                        string: { downloadResult: "existing_download_promise" },
                      })
                    : z.endFail("existing_download_not_resolved", {
                        string: {
                          downloadResult: "existing_download_promise",
                          downloadStage: String(P.downloadStage),
                        },
                      });
                },
                function (e) {
                  throw (w(z, e), e);
                },
              )
            );
          }
          var Z = P.mediaBlob;
          if (Z) {
            z.addPoint("legacy_media_blob_validation_start");
            var ee = yield Z.validate().catch(function (e) {
              throw (w(z, e), e);
            });
            if (
              (z.addPoint("legacy_media_blob_validation_end", {
                bool: { isValid: ee },
              }),
              ee)
            ) {
              (P.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
              }),
                z.endSuccess({
                  string: { downloadResult: "legacy_media_blob_hit" },
                }));
              return;
            }
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-download] blob invalid, clearing fh=",
                  " msgs=",
                  "",
                ])),
              K != null ? K : "none",
              P.msgs.length,
            ),
              P.clearBlob(),
              P.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              }),
              P.notifyMsgsAsync(),
              z.endFail("invalid_legacy_media_blob", {
                string: { earlyExitReason: "invalid_legacy_media_blob" },
              }));
            return;
          }
          var te = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            K,
          );
          z.addPoint(
            te == null
              ? "in_memory_media_blob_cache_miss"
              : "in_memory_media_blob_cache_hit",
          );
          var ne,
            re,
            oe = new AbortController(),
            ae = {
              abort: function () {
                oe.abort();
              },
              shouldStoreInMemory: X,
            };
          return r("WARaceSignal")(
            [oe.signal, V].filter(Boolean),
            function (e) {
              var t,
                S = (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      if (te) re = te;
                      else {
                        var t, n, d;
                        if (
                          ((ne = P.entries.getDownloadEntry(
                            o(
                              "WAWebMediaCryptoEligibilityUtils",
                            ).isMediaCryptoExpectedForMediaType(M),
                          )),
                          z.addPoint("download_entry_lookup", {
                            bool: { found: ne != null },
                          }),
                          !ne)
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
                              K != null ? K : "none",
                              P.msgs.length,
                              i,
                              B,
                            ),
                            i &&
                              o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isRmrSupportedForMediaType(M))
                          ) {
                            if (
                              (z.addPoint("missing_entry_rmr_start"),
                              yield o(
                                "WAWebDownloadManager",
                              ).downloadManager.rmr({
                                mediaObject: P,
                                signal: e,
                                rmrReason: B,
                                rmrData: O,
                              }),
                              z.addPoint("missing_entry_rmr_end"),
                              (ne = P.entries.getDownloadEntry(
                                o(
                                  "WAWebMediaCryptoEligibilityUtils",
                                ).isMediaCryptoExpectedForMediaType(M),
                              )),
                              !ne)
                            ) {
                              if (
                                M !==
                                o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                              )
                                throw new L();
                              z.endFail("sticker_entry_missing_after_rmr", {
                                string: {
                                  earlyExitReason:
                                    "sticker_entry_missing_after_rmr",
                                },
                              });
                              return;
                            }
                          } else {
                            if (
                              !o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isRmrSupportedForMediaType(M)
                            )
                              throw new (o(
                                "WAWebDownloadManagerErrors",
                              ).MediaNotOnPhone)();
                            (P.consolidate({
                              downloadStage:
                                o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            }),
                              z.endFail("download_entry_missing", {
                                string: {
                                  earlyExitReason: "download_entry_missing",
                                },
                              }));
                            return;
                          }
                        (P.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.FETCHING,
                        }),
                          (ne = r("nullthrows")(ne)));
                        var m = ne,
                          p = m.directPath,
                          _ = m.scanLengths,
                          f = m.scansSidecar,
                          g = m.staticUrl;
                        if (
                          ne instanceof
                            o("WAWebMediaEntry").EncryptedMediaEntry &&
                          ne.getEncfilehash() == null &&
                          r("isStringNullOrEmpty")(p) &&
                          r("isStringNullOrEmpty")(g)
                        ) {
                          var h;
                          throw (
                            (h = ne) == null || h.markWhetherOnServer(!1),
                            new E()
                          );
                        }
                        if (r("justknobx")._("533")) {
                          var y;
                          if (
                            M ===
                              o("WAWebMmsMediaTypes").MEDIA_TYPES
                                .NEWSLETTER_IMAGE &&
                            A != null &&
                            (y = A.toLowerCase()) != null &&
                            y.includes("svg")
                          )
                            throw r("err")(
                              "Newsletter svg mimetype is not supported",
                            );
                        }
                        var C = yield $({
                          directPath: p,
                          encFilehash:
                            (t = ne) == null ? void 0 : t.getEncfilehash(),
                          objFilehash: K,
                          isFinalRmrRetry: T,
                          mediaKey: (n = ne) == null ? void 0 : n.getMediaKey(),
                          mediaKeyTimestamp:
                            (d = ne) == null
                              ? void 0
                              : d.getMediaKeyTimestamp(),
                          signal: e,
                          staticUrl: g,
                          mediaType: M,
                          mediaObject: P,
                          downloadOrigin: l,
                          mode: F,
                          scanLengths: _,
                          mimetype: A,
                          scansSidecar: f,
                          isViewOnce: x,
                          chatWid: a,
                          shouldSequenceDownload: q,
                          experienceIds: R,
                          downloadQpl: z,
                        });
                        Q(M)
                          ? (re = yield o("WAWebMediaLoad").transcode(C))
                          : (re = C);
                      }
                      if (
                        (re.type ===
                          o("WAWebStickerMimeUtils")
                            .WhatsAppLottieStickerMimeType &&
                          (yield o(
                            "WAWebInMemoryLottieStickerCache",
                          ).extractAndSetBothLottieJSONInMemoryCache(K, re),
                          P.consolidate({ isLottie: !0 })),
                        re.type === "text/vcard" && D === !0)
                      )
                        try {
                          var b = yield o("WAWebFileUtils").blobToText(re);
                          if (b) {
                            var v = o("WAWebVcardParsingUtils").parseMultiVcard(
                              b,
                            );
                            v.length > 0
                              ? P.consolidate({ parsedVcards: v })
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
                        o("WAWebMediaDataUtils").shouldUseMediaCache(M) &&
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.canFitFile(re.size)
                      )
                        ae.shouldStoreInMemory &&
                          (o(
                            "WAWebMediaInMemoryBlobCache",
                          ).InMemoryMediaBlobCache.put(K, re),
                          yield o(
                            "WAWebMediaGatherAndSetMetadataNoOpaque",
                          ).gatherAndSetMetadataNoOpaque(P, re));
                      else {
                        var S = yield r("WAWebMediaOpaqueData").createFromData(
                          re,
                          re.type,
                        );
                        yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata(P, S);
                      }
                      return (
                        P.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.RESOLVED,
                        }),
                        P.clearDownloadPromise(M),
                        P.resolveWhenConsolidated()
                      );
                    },
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
                W = S()
                  .catch(
                    (t = o("WAFilteredCatch")).filteredCatch(
                      o("WAWebMmsClientErrors").MediaNotFoundError,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            if (!ne || (ne.markWhetherOnServer(!1), !i))
                              throw e;
                            return (
                              z.addPoint("media_not_found_rmr_start"),
                              yield o(
                                "WAWebDownloadManager",
                              ).downloadManager.rmr({
                                mediaObject: P,
                                signal: new AbortController().signal,
                                rmrReason: B,
                                rmrData: O,
                              }),
                              z.addPoint("media_not_found_rmr_end"),
                              P.clearDownloadPromise(M),
                              N({
                                mimetype: A,
                                mediaObject: P,
                                downloadEvenIfExpensive: !1,
                                mediaType: M,
                                rmrReason: B,
                                rmrData: O,
                                downloadOrigin: l,
                                isFinalRmrRetry: !0,
                                isVcardOverMmsDocument: D,
                                mode: F,
                                isAutoDownload: k,
                                chatWid: a,
                                experienceIds: R,
                                downloadQplContext: {
                                  qpl: z,
                                  rmrRetryCount: j + 1,
                                },
                              })
                            );
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  )
                  .catch(
                    t.filteredCatch(
                      o("WAWebMediaLoadErrors").MediaUnsupportedError,
                      function (e) {
                        if (
                          (w(z, e),
                          P.consolidate({
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
                            A || "",
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
                          H)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(
                    t.filteredCatch(
                      o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                      function (e) {
                        if (
                          (w(z, e),
                          P.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                          }),
                          H)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(
                    t.filteredCatch([L, E], function (e) {
                      if (
                        (w(z, e),
                        P.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                        }),
                        !(
                          e === L &&
                          M === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
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
                          H))
                      )
                        throw e;
                    }),
                  )
                  .catch(
                    t.filteredCatch(
                      [
                        o("WAWebMediaFileErrors").MediaDecryptionError,
                        o("WAWebMediaFileErrors").MediaHashMismatch,
                      ],
                      function (e) {
                        w(z, e);
                        var t = P.progressiveStage;
                        if (
                          (oe.abort(),
                          P.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            progressiveStage: null,
                          }),
                          P.notifyMsgsAsync(),
                          P.delete(),
                          o(
                            "WAWebCryptoImageStreamer",
                          ).deleteFromInMemoryMediaBlobCache(K, t),
                          H)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(
                    t.filteredCatch(
                      [o("WAWebHttpErrors").MmsDownloadFilehashMismatchError],
                      function (e) {
                        w(z, e);
                        var t = P.progressiveStage;
                        (oe.abort(), P.hashMismatchRetryCount++);
                        var n = 10,
                          r = P.hashMismatchRetryCount >= n;
                        if (
                          (P.consolidate({
                            downloadStage: r
                              ? o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
                              : o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            progressiveStage: null,
                          }),
                          P.notifyMsgsAsync(),
                          P.delete(),
                          o(
                            "WAWebCryptoImageStreamer",
                          ).deleteFromInMemoryMediaBlobCache(K, t),
                          H)
                        )
                          throw e;
                      },
                    ),
                  )
                  .catch(function (e) {
                    if (
                      (w(z, e),
                      P.consolidate({
                        downloadStage:
                          o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                      }),
                      e instanceof o("WAWebMediaLoadErrors").MediaLoadError)
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
                          A || "",
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
                        H)
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
                          A || "",
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
                          .sendLogs("downloadMedia: transcode blob too large", {
                            sampling: 0,
                          }),
                        H)
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
                          A || "",
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
                        H)
                      )
                        throw e;
                      return;
                    }
                    if (e.name === o("WAAbortError").ABORT_ERROR) {
                      if (H) throw e;
                      return;
                    }
                    if (
                      (o("WALogger").LOG(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "downloadMedia: error",
                          ])),
                      ),
                      H)
                    )
                      throw e;
                  })
                  .then(function () {
                    z.isActive() && z.endSuccess();
                  })
                  .finally(function () {
                    P.clearDownloadPromise(M);
                  });
              return (I.set(W, ae), P.setDownloadPromise(W, M), W);
            },
          ).catch(function (e) {
            throw (w(z, e), e);
          });
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      if (e.isActive()) {
        var n = r("getErrorSafe")(t);
        if (n.name === o("WAAbortError").ABORT_ERROR) {
          e.endCancel(void 0, { string: { earlyExitReason: "aborted" } });
          return;
        }
        e.endFailWithError("download_failed", n.message);
      }
    }
    function A(e) {
      return O(e, /animation\/animation.json$/);
    }
    function F(e) {
      return O(e, /animation\/animation_secondary.json$/);
    }
    function O(e, t) {
      var n = Object.keys(e).find(function (e) {
        return t.test(e);
      });
      return n != null ? e[n] : void 0;
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
            n = new Uint8Array(t);
          return o("fflate").unzipSync(n);
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = new (o(
                "WAWebStickerLatencyWamEvent",
              ).StickerLatencyWamEvent)({
                size: e.size,
                stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
                  .STICKER_LATENCY_ACTION.DECOMPRESSION,
              }),
              a = self.performance.now(),
              i = yield B(e),
              l = A(i);
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
              var d = F(i);
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaObject,
            n = e.mediaType,
            a = e.mimetype,
            i = t.filehash;
          if (
            !r("isStringNullOrEmpty")(i) &&
            t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
            !(yield j(t))
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
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
    }
    function z(e) {
      var t = e.mediaObject,
        n = e.mimetype,
        a = e.scanLengths,
        i = e.scansSidecar,
        l = e.signal;
      if (!G(a, i)) return null;
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
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        K.apply(this, arguments)
      );
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
      (l.getContentsOfLottieJSONFile = A),
      (l.extractBothLottieJSON = q),
      (l.checkExistence = V));
  },
  98,
);
