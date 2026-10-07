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
      L,
      E = (function (e) {
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
      k = (function (e) {
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
      I = { THUMBNAIL: 1, LOW: 2, MID: 3, FULL: 4 },
      T = new WeakMap();
    function D(e) {
      e.getDownloadPromises().forEach(function (e) {
        var t;
        if (e != null) {
          var n = (t = T.get(e)) == null ? void 0 : t.abort;
          n != null && (T.delete(e), n());
        }
      });
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.downloadOrigin,
            r = e.mediaBlob,
            a = e.mediaObject,
            i = e.mediaType,
            l = e.mimetype,
            s = e.rmrReason;
          if (!a.mediaBlob) {
            var u = yield P({
              downloadOrigin: n,
              mediaBlob: r,
              mediaObject: a,
              mediaType: i,
              mimetype: l,
            });
            !u ||
              a.mediaBlob ||
              (yield o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(
                a,
                r,
              ),
              yield A({
                mimetype: l,
                mediaObject: a,
                downloadEvenIfExpensive: !1,
                mediaType: i,
                rmrReason: s,
                downloadOrigin: n,
                chatWid: t,
              }));
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.downloadOrigin,
            a = t.mediaBlob,
            i = t.mediaObject,
            l = t.mediaType,
            s = t.mimetype,
            u = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "ManuallySetMedia",
            });
          try {
            return (
              yield o("WAWebDownloadManager").screenDecryptedMedia({
                input: yield o("WABlobToArrayBuffer").blobToArrayBuffer(
                  a.forceToBlob(),
                ),
                type: l,
                mimetype: s,
                downloadOrigin: n,
                downloadQpl: u,
                onSuspiciousContent: function (t) {
                  return o(
                    "WAWebMediaSetSuspiciousContent",
                  ).setSuspiciousContentOnMediaObject(i, t);
                },
              }),
              u.endSuccess(),
              !0
            );
          } catch (t) {
            var c = r("getErrorSafe")(t);
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-download] manually set media rejected: ",
                      " type=",
                      "",
                    ])),
                  c.name,
                  l,
                )
                .tags("media", "security"),
              O(u, c),
              !1
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              progressiveJpegOpts: Q({
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            a = e.downloadEvenIfExpensive,
            i = e.downloadOrigin,
            l = e.downloadQplContext,
            R = e.experienceIds,
            L = e.isAutoDownload,
            I = e.isFinalRmrRetry,
            D = e.isVcardOverMmsDocument,
            x = e.isViewOnce,
            $ = e.mediaObject,
            P = e.mediaType,
            N = e.mimetype,
            w = e.mode,
            F = e.rmrData,
            B = e.rmrReason,
            W = e.shouldSequenceDownload,
            q = W === void 0 ? !1 : W,
            U = e.shouldThrow,
            V = e.signal,
            H = U === !0,
            G =
              l != null
                ? l
                : {
                    qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                      entryPoint: "MediaDownload",
                    }),
                    rmrRetryCount: 0,
                  },
            z = G.qpl,
            j = G.rmrRetryCount;
          if (
            (j > 0 && z.addAnnotations({ bool: { hasRetry: !0 } }), $ == null)
          ) {
            z.endFail("missing_media_object", {
              string: { earlyExitReason: "missing_media_object" },
            });
            return;
          }
          var K = $.filehash;
          if (r("isStringNullOrEmpty")(K)) {
            z.endFail("missing_filehash", {
              string: { earlyExitReason: "missing_filehash" },
            });
            return;
          }
          if (
            $.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
          ) {
            z.endFail("error_missing_download_stage", {
              string: { earlyExitReason: "error_missing_download_stage" },
            });
            return;
          }
          var Q = L !== !0 || r("WAWebEnvironment").isWindows,
            X = $.getDownloadPromise(P);
          if (X) {
            z.addPoint("existing_download_promise");
            var Y = T.get(X);
            return (
              Y && Q && (Y.shouldStoreInMemory = !0),
              X.then(
                function () {
                  $.downloadStage ===
                  o("WAWebMediaTypes").DownloadStage.RESOLVED
                    ? z.endSuccess({
                        string: { downloadResult: "existing_download_promise" },
                      })
                    : z.endFail("existing_download_not_resolved", {
                        string: {
                          downloadResult: "existing_download_promise",
                          downloadStage: String($.downloadStage),
                        },
                      });
                },
                function (e) {
                  throw (O(z, e), e);
                },
              )
            );
          }
          var Z = $.mediaBlob;
          if (Z) {
            z.addPoint("legacy_media_blob_validation_start");
            var ee = yield Z.validate().catch(function (e) {
              throw (O(z, e), e);
            });
            if (
              (z.addPoint("legacy_media_blob_validation_end", {
                bool: { isValid: ee },
              }),
              ee)
            ) {
              ($.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
              }),
                z.endSuccess({
                  string: { downloadResult: "legacy_media_blob_hit" },
                }));
              return;
            }
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-download] blob invalid, clearing fh=",
                  " msgs=",
                  "",
                ])),
              K != null ? K : "none",
              $.msgs.length,
            ),
              $.clearBlob(),
              $.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              }),
              $.notifyMsgsAsync(),
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
              shouldStoreInMemory: Q,
            };
          return r("WARaceSignal")(
            [oe.signal, V].filter(Boolean),
            function (e) {
              var l,
                s = (function () {
                  var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      if (te) re = te;
                      else {
                        var n, l, s;
                        if (
                          ((ne = $.entries.getDownloadEntry(
                            o(
                              "WAWebMediaCryptoEligibilityUtils",
                            ).isMediaCryptoExpectedForMediaType(P),
                          )),
                          z.addPoint("download_entry_lookup", {
                            bool: { found: ne != null },
                          }),
                          !ne)
                        )
                          if (
                            (o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "[media-download] no blob/cache/entry fh=",
                                  " msgs=",
                                  " exp=",
                                  " rmr=",
                                  "",
                                ])),
                              K != null ? K : "none",
                              $.msgs.length,
                              a,
                              B,
                            ),
                            a &&
                              o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isRmrSupportedForMediaType(P))
                          ) {
                            if (
                              (z.addPoint("missing_entry_rmr_start"),
                              yield o(
                                "WAWebDownloadManager",
                              ).downloadManager.rmr({
                                mediaObject: $,
                                signal: e,
                                rmrReason: B,
                                rmrData: F,
                              }),
                              z.addPoint("missing_entry_rmr_end"),
                              (ne = $.entries.getDownloadEntry(
                                o(
                                  "WAWebMediaCryptoEligibilityUtils",
                                ).isMediaCryptoExpectedForMediaType(P),
                              )),
                              !ne)
                            ) {
                              if (
                                P !==
                                o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                              )
                                throw new E();
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
                              ).isRmrSupportedForMediaType(P)
                            )
                              throw new (o(
                                "WAWebDownloadManagerErrors",
                              ).MediaNotOnPhone)();
                            ($.consolidate({
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
                        ($.consolidate({
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
                            new k()
                          );
                        }
                        if (r("justknobx")._("533")) {
                          var y;
                          if (
                            P ===
                              o("WAWebMmsMediaTypes").MEDIA_TYPES
                                .NEWSLETTER_IMAGE &&
                            N != null &&
                            (y = N.toLowerCase()) != null &&
                            y.includes("svg")
                          )
                            throw r("err")(
                              "Newsletter svg mimetype is not supported",
                            );
                        }
                        var C = yield M({
                          directPath: p,
                          encFilehash:
                            (n = ne) == null ? void 0 : n.getEncfilehash(),
                          objFilehash: K,
                          isFinalRmrRetry: I,
                          mediaKey: (l = ne) == null ? void 0 : l.getMediaKey(),
                          mediaKeyTimestamp:
                            (s = ne) == null
                              ? void 0
                              : s.getMediaKeyTimestamp(),
                          signal: e,
                          staticUrl: g,
                          mediaType: P,
                          mediaObject: $,
                          downloadOrigin: i,
                          mode: w,
                          scanLengths: _,
                          mimetype: N,
                          scansSidecar: f,
                          isViewOnce: x,
                          chatWid: t,
                          shouldSequenceDownload: q,
                          experienceIds: R,
                          downloadQpl: z,
                        });
                        J(P)
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
                          $.consolidate({ isLottie: !0 })),
                        re.type === "text/vcard" && D === !0)
                      )
                        try {
                          var b = yield o("WAWebFileUtils").blobToText(re);
                          if (b) {
                            var v = o("WAWebVcardParsingUtils").parseMultiVcard(
                              b,
                            );
                            v.length > 0
                              ? $.consolidate({ parsedVcards: v })
                              : o("WALogger")
                                  .ERROR(
                                    c ||
                                      (c =
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
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
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
                        o("WAWebMediaDataUtils").shouldUseMediaCache(P) &&
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
                          ).gatherAndSetMetadataNoOpaque($, re));
                      else {
                        var S = yield r("WAWebMediaOpaqueData").createFromData(
                          re,
                          re.type,
                        );
                        yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata($, S);
                      }
                      return (
                        $.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.RESOLVED,
                        }),
                        $.clearDownloadPromise(P),
                        $.resolveWhenConsolidated()
                      );
                    },
                  );
                  return function () {
                    return l.apply(this, arguments);
                  };
                })(),
                W = s()
                  .catch(
                    (l = o("WAFilteredCatch")).filteredCatch(
                      o("WAWebMmsClientErrors").MediaNotFoundError,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            if (!ne || (ne.markWhetherOnServer(!1), !a))
                              throw e;
                            return (
                              z.addPoint("media_not_found_rmr_start"),
                              yield o(
                                "WAWebDownloadManager",
                              ).downloadManager.rmr({
                                mediaObject: $,
                                signal: new AbortController().signal,
                                rmrReason: B,
                                rmrData: F,
                              }),
                              z.addPoint("media_not_found_rmr_end"),
                              $.clearDownloadPromise(P),
                              A({
                                mimetype: N,
                                mediaObject: $,
                                downloadEvenIfExpensive: !1,
                                mediaType: P,
                                rmrReason: B,
                                rmrData: F,
                                downloadOrigin: i,
                                isFinalRmrRetry: !0,
                                isVcardOverMmsDocument: D,
                                mode: w,
                                isAutoDownload: L,
                                chatWid: t,
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
                    l.filteredCatch(
                      o("WAWebMediaLoadErrors").MediaUnsupportedError,
                      function (e) {
                        if (
                          (O(z, e),
                          $.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage
                                .ERROR_UNSUPPORTED,
                          }),
                          o("WALogger").WARN(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "downloadMedia: media unsupported error: ",
                                ", ",
                                ", ",
                                "",
                              ])),
                            e.name,
                            e.message,
                            N || "",
                          ),
                          o("WALogger")
                            .ERROR(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    l.filteredCatch(
                      o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                      function (e) {
                        if (
                          (O(z, e),
                          $.consolidate({
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
                    l.filteredCatch([E, k], function (e) {
                      if (
                        (O(z, e),
                        $.consolidate({
                          downloadStage:
                            o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                        }),
                        !(
                          e === E &&
                          P === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                        ) &&
                          (o("WALogger").WARN(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "Unexpected download error: ",
                                "",
                              ])),
                            e.name,
                          ),
                          o("WALogger")
                            .ERROR(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    l.filteredCatch(
                      [
                        o("WAWebMediaFileErrors").MediaDecryptionError,
                        o("WAWebMediaFileErrors").MediaHashMismatch,
                      ],
                      function (e) {
                        O(z, e);
                        var t = $.progressiveStage;
                        if (
                          (oe.abort(),
                          $.consolidate({
                            downloadStage:
                              o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            progressiveStage: null,
                          }),
                          $.notifyMsgsAsync(),
                          $.delete(),
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
                    l.filteredCatch(
                      [o("WAWebHttpErrors").MmsDownloadFilehashMismatchError],
                      function (e) {
                        O(z, e);
                        var t = $.progressiveStage;
                        (oe.abort(), $.hashMismatchRetryCount++);
                        var n = 10,
                          r = $.hashMismatchRetryCount >= n;
                        if (
                          ($.consolidate({
                            downloadStage: r
                              ? o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
                              : o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                            progressiveStage: null,
                          }),
                          $.notifyMsgsAsync(),
                          $.delete(),
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
                      (O(z, e),
                      $.consolidate({
                        downloadStage:
                          o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                      }),
                      e instanceof o("WAWebMediaLoadErrors").MediaLoadError)
                    ) {
                      if (
                        (o("WALogger").WARN(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: media unsupported error: ",
                              ", ",
                              ", ",
                              "",
                            ])),
                          e.name,
                          e.message,
                          N || "",
                        ),
                        o("WALogger")
                          .ERROR(
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
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
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: error: ",
                              ", ",
                              "",
                            ])),
                          e.message,
                          N || "",
                        ),
                        o("WALogger")
                          .ERROR(
                            C ||
                              (C = babelHelpers.taggedTemplateLiteralLoose([
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
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "downloadMedia: error: ",
                              ", ",
                              "",
                            ])),
                          e.message,
                          N || "",
                        ),
                        o("WALogger")
                          .ERROR(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
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
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
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
                    $.clearDownloadPromise(P);
                  });
              return (T.set(W, ae), $.setDownloadPromise(W, P), W);
            },
          ).catch(function (e) {
            throw (O(z, e), e);
          });
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      if (e.isActive()) {
        var n = r("getErrorSafe")(t);
        if (n.name === o("WAAbortError").ABORT_ERROR) {
          e.endCancel(void 0, { string: { earlyExitReason: "aborted" } });
          return;
        }
        e.endFailWithError("download_failed", n.message);
      }
    }
    function B(e) {
      return q(e, /animation\/animation.json$/);
    }
    function W(e) {
      return q(e, /animation\/animation_secondary.json$/);
    }
    function q(e, t) {
      var n = Object.keys(e).find(function (e) {
        return t.test(e);
      });
      return n != null ? e[n] : void 0;
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WABlobToArrayBuffer").blobToArrayBuffer(e),
            n = new Uint8Array(t);
          return o("fflate").unzipSync(n);
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = new (o(
                "WAWebStickerLatencyWamEvent",
              ).StickerLatencyWamEvent)({
                size: e.size,
                stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
                  .STICKER_LATENCY_ACTION.DECOMPRESSION,
              }),
              a = self.performance.now(),
              i = yield U(e),
              l = B(i);
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
              var d = W(i);
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mediaObject,
            n = e.mediaType,
            a = e.mimetype,
            i = t.filehash;
          if (
            !r("isStringNullOrEmpty")(i) &&
            t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
            !(yield X(t))
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "checkExistence: error",
                    ])),
                );
              }
            }
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return !!(e && t && e.length >= 2 && e.length * 10 === t.byteLength);
    }
    function Q(e) {
      var t = e.mediaObject,
        n = e.mimetype,
        a = e.scanLengths,
        i = e.scansSidecar,
        l = e.signal;
      if (!K(a, i)) return null;
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
              n >= I.MID && !s.webcMidQualityT && s.markWebcMidQualityT(),
              n === I.FULL &&
                !s.webcFullQualityT &&
                (s.markWebcFullQualityT(), s.commit())));
        },
      };
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
      );
    }
    ((l.NoEntryAfterRMR = E),
      (l.MissingEncFilehash = k),
      (l.cancelDownloadMedia = D),
      (l.manuallySetMedia = x),
      (l.downloadMedia = A),
      (l.getContentsOfLottieJSONFile = B),
      (l.extractBothLottieJSON = H),
      (l.checkExistence = z));
  },
  98,
);
