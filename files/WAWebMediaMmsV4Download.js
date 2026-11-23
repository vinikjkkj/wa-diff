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
    "WAWebABProps",
    "WAWebCryptoImageStreamer",
    "WAWebDownloadManager",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebHttpErrors",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaBoundedUnzip",
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
    "WAWebWamMediaMetricUtils",
    "WAWebWebcProgressiveImageWamEvent",
    "err",
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
      E,
      k = (function (e) {
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
      I = (function (e) {
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
      T = { THUMBNAIL: 1, LOW: 2, MID: 3, FULL: 4 },
      D = new WeakMap();
    function x(e) {
      e.getDownloadPromises().forEach(function (e) {
        var t;
        if (e != null) {
          var n = (t = D.get(e)) == null ? void 0 : t.abort;
          n != null && (D.delete(e), n());
        }
      });
    }
    async function $(e) {
      var t = e.chatWid,
        n = e.downloadOrigin,
        r = e.mediaBlob,
        a = e.mediaObject,
        i = e.mediaType,
        l = e.mimetype,
        s = e.rmrReason;
      if (!a.mediaBlob) {
        var u = await P({
          downloadOrigin: n,
          mediaBlob: r,
          mediaObject: a,
          mediaType: i,
          mimetype: l,
        });
        !u ||
          a.mediaBlob ||
          (await o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(
            a,
            r,
          ),
          await M({
            mimetype: l,
            mediaObject: a,
            downloadEvenIfExpensive: !1,
            mediaType: i,
            rmrReason: s,
            downloadOrigin: n,
            chatWid: t,
          }));
      }
    }
    async function P(t) {
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
          await o("WAWebDownloadManager").screenDecryptedMedia({
            input: await o("WABlobToArrayBuffer").blobToArrayBuffer(
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
          w(u, c),
          !1
        );
      }
    }
    async function N(e) {
      var t,
        n,
        r = e.downloadQpl,
        a = e.mimetype,
        i = o("WAThrottle").throttle(function (t) {
          e.mediaObject.consolidate({ loadedSize: t.loaded });
        }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
        l = await o(
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
          progressiveJpegOpts: V({
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
                    (t = e.mediaObject.contentInfo.fullHeight) != null ? t : 0,
                  fileWidth:
                    (n = e.mediaObject.contentInfo.fullWidth) != null ? n : 0,
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
    }
    async function M(e) {
      var t = e.chatWid,
        n = e.downloadEvenIfExpensive,
        a = e.downloadOrigin,
        i = e.downloadQplContext,
        l = e.experienceIds,
        L = e.isAutoDownload,
        E = e.isFinalRmrRetry,
        T = e.isVcardOverMmsDocument,
        x = e.isViewOnce,
        $ = e.mediaObject,
        P = e.mediaType,
        A = e.mimetype,
        F = e.mode,
        O = e.rmrData,
        B = e.rmrReason,
        W = e.shouldSequenceDownload,
        q = W === void 0 ? !1 : W,
        U = e.shouldThrow,
        V = e.signal,
        H = U === !0,
        j =
          i != null
            ? i
            : {
                qpl: o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                  entryPoint: "MediaDownload",
                }),
                rmrRetryCount: 0,
              },
        K = j.qpl,
        Q = j.rmrRetryCount;
      if ((Q > 0 && K.addAnnotations({ bool: { hasRetry: !0 } }), $ == null)) {
        K.endFail("missing_media_object", {
          string: { earlyExitReason: "missing_media_object" },
        });
        return;
      }
      var X = $.filehash;
      if (r("isStringNullOrEmpty")(X)) {
        K.endFail("missing_filehash", {
          string: { earlyExitReason: "missing_filehash" },
        });
        return;
      }
      if (
        $.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
      ) {
        K.endFail("error_missing_download_stage", {
          string: { earlyExitReason: "error_missing_download_stage" },
        });
        return;
      }
      var Y = L !== !0 || r("WAWebEnvironment").isWindows,
        J = $.getDownloadPromise(P);
      if (J) {
        K.addPoint("existing_download_promise");
        var Z = D.get(J);
        return (
          Z && Y && (Z.shouldStoreInMemory = !0),
          J.then(
            function () {
              $.downloadStage === o("WAWebMediaTypes").DownloadStage.RESOLVED
                ? K.endSuccess({
                    string: { downloadResult: "existing_download_promise" },
                  })
                : K.endFail("existing_download_not_resolved", {
                    string: {
                      downloadResult: "existing_download_promise",
                      downloadStage: String($.downloadStage),
                    },
                  });
            },
            function (e) {
              throw (w(K, e), e);
            },
          )
        );
      }
      var ee = $.mediaBlob;
      if (ee) {
        K.addPoint("legacy_media_blob_validation_start");
        var te = await ee.validate().catch(function (e) {
          throw (w(K, e), e);
        });
        if (
          (K.addPoint("legacy_media_blob_validation_end", {
            bool: { isValid: te },
          }),
          te)
        ) {
          ($.consolidate({
            downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
          }),
            K.endSuccess({
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
          X != null ? X : "none",
          $.msgs.length,
        ),
          $.clearBlob(),
          $.consolidate({
            downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
          }),
          $.notifyMsgsAsync(),
          K.endFail("invalid_legacy_media_blob", {
            string: { earlyExitReason: "invalid_legacy_media_blob" },
          }));
        return;
      }
      var ne = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(X);
      K.addPoint(
        ne == null
          ? "in_memory_media_blob_cache_miss"
          : "in_memory_media_blob_cache_hit",
      );
      var re,
        oe,
        ae = new AbortController(),
        ie = {
          abort: function () {
            ae.abort();
          },
          shouldStoreInMemory: Y,
        };
      return r("WARaceSignal")([ae.signal, V].filter(Boolean), function (e) {
        var i,
          s = async function () {
            if ((($.lastDownloadFailureResult = null), ne)) oe = ne;
            else {
              var i, s, m;
              if (
                ((re = $.entries.getDownloadEntry(
                  o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForMediaType(P),
                )),
                K.addPoint("download_entry_lookup", {
                  bool: { found: re != null },
                }),
                !re)
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
                    X != null ? X : "none",
                    $.msgs.length,
                    n,
                    B,
                  ),
                  n &&
                    o(
                      "WAWebMediaCryptoEligibilityUtils",
                    ).isRmrSupportedForMediaType(P))
                ) {
                  if (
                    (K.addPoint("missing_entry_rmr_start"),
                    await o("WAWebDownloadManager").downloadManager.rmr({
                      mediaObject: $,
                      signal: e,
                      rmrReason: B,
                      rmrData: O,
                    }),
                    K.addPoint("missing_entry_rmr_end"),
                    (re = $.entries.getDownloadEntry(
                      o(
                        "WAWebMediaCryptoEligibilityUtils",
                      ).isMediaCryptoExpectedForMediaType(P),
                    )),
                    !re)
                  ) {
                    if (P !== o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                      throw new k();
                    K.endFail("sticker_entry_missing_after_rmr", {
                      string: {
                        earlyExitReason: "sticker_entry_missing_after_rmr",
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
                    downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                  }),
                    K.endFail("download_entry_missing", {
                      string: { earlyExitReason: "download_entry_missing" },
                    }));
                  return;
                }
              ($.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.FETCHING,
              }),
                (re = r("nullthrows")(re)));
              var p = re,
                _ = p.directPath,
                f = p.scanLengths,
                g = p.scansSidecar,
                h = p.staticUrl;
              if (
                re instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                re.getEncfilehash() == null &&
                r("isStringNullOrEmpty")(_) &&
                r("isStringNullOrEmpty")(h)
              ) {
                var y;
                throw ((y = re) == null || y.markWhetherOnServer(!1), new I());
              }
              if (r("justknobx")._("533")) {
                var C;
                if (
                  P === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE &&
                  A != null &&
                  (C = A.toLowerCase()) != null &&
                  C.includes("svg")
                )
                  throw r("err")("Newsletter svg mimetype is not supported");
              }
              var b = await N({
                directPath: _,
                encFilehash: (i = re) == null ? void 0 : i.getEncfilehash(),
                objFilehash: X,
                isFinalRmrRetry: E,
                mediaKey: (s = re) == null ? void 0 : s.getMediaKey(),
                mediaKeyTimestamp:
                  (m = re) == null ? void 0 : m.getMediaKeyTimestamp(),
                signal: e,
                staticUrl: h,
                mediaType: P,
                mediaObject: $,
                downloadOrigin: a,
                mode: F,
                scanLengths: f,
                mimetype: A,
                scansSidecar: g,
                isViewOnce: x,
                chatWid: t,
                shouldSequenceDownload: q,
                experienceIds: l,
                downloadQpl: K,
              });
              G(P) ? (oe = await o("WAWebMediaLoad").transcode(b)) : (oe = b);
            }
            if (
              (oe.type ===
                o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType &&
                (await o(
                  "WAWebInMemoryLottieStickerCache",
                ).extractAndSetBothLottieJSONInMemoryCache(X, oe),
                $.consolidate({ isLottie: !0 })),
              oe.type === "text/vcard" && T === !0)
            )
              try {
                var v = await o("WAWebFileUtils").blobToText(oe);
                if (v) {
                  var S = o("WAWebVcardParsingUtils").parseMultiVcard(v);
                  S.length > 0
                    ? $.consolidate({ parsedVcards: S })
                    : o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to retrieve blob text contents",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("non-sad")
                  .sendLogs("vcard_over_mms:blobToText failed with error");
              }
            if (
              o("WAWebMediaDataUtils").shouldUseMediaCache(P) &&
              o(
                "WAWebMediaInMemoryBlobCache",
              ).InMemoryMediaBlobCache.canFitFile(oe.size)
            )
              ie.shouldStoreInMemory &&
                (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                  X,
                  oe,
                ),
                await o(
                  "WAWebMediaGatherAndSetMetadataNoOpaque",
                ).gatherAndSetMetadataNoOpaque($, oe));
            else {
              var R = await r("WAWebMediaOpaqueData").createFromData(
                oe,
                oe.type,
              );
              await o("WAWebMediaDataUtils").attachBlobAndGatherAndSetMetadata(
                $,
                R,
              );
            }
            return (
              $.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.RESOLVED,
              }),
              $.clearDownloadPromise(P),
              $.resolveWhenConsolidated()
            );
          },
          W = s()
            .catch(async function (e) {
              if (
                (($.lastDownloadFailureResult = o(
                  "WAWebWamMediaMetricUtils",
                ).getMetricDownloadErrorResultType(r("getErrorSafe")(e))),
                re == null ||
                  !z({
                    downloadEvenIfExpensive: n,
                    error: e,
                    isFinalRmrRetry: E,
                    mediaType: P,
                    mode: F,
                  }))
              )
                throw e;
              return (
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-download] hash mismatch, requesting re-upload, type: ",
                      "",
                    ])),
                  P,
                ),
                re.markWhetherOnServer(!1),
                K.addPoint("hash_mismatch_rmr_start"),
                await o("WAWebDownloadManager").downloadManager.rmr({
                  mediaObject: $,
                  signal: new AbortController().signal,
                  rmrReason: B,
                  rmrData: O,
                }),
                K.addPoint("hash_mismatch_rmr_end"),
                $.clearDownloadPromise(P),
                M({
                  mimetype: A,
                  mediaObject: $,
                  downloadEvenIfExpensive: !1,
                  mediaType: P,
                  rmrReason: B,
                  rmrData: O,
                  downloadOrigin: a,
                  isFinalRmrRetry: !0,
                  isVcardOverMmsDocument: T,
                  mode: F,
                  isAutoDownload: L,
                  chatWid: t,
                  experienceIds: l,
                  downloadQplContext: { qpl: K, rmrRetryCount: Q + 1 },
                })
              );
            })
            .catch(
              (i = o("WAFilteredCatch")).filteredCatch(
                o("WAWebMmsClientErrors").MediaNotFoundError,
                async function (e) {
                  if (!re || (re.markWhetherOnServer(!1), !n)) throw e;
                  return (
                    K.addPoint("media_not_found_rmr_start"),
                    await o("WAWebDownloadManager").downloadManager.rmr({
                      mediaObject: $,
                      signal: new AbortController().signal,
                      rmrReason: B,
                      rmrData: O,
                    }),
                    K.addPoint("media_not_found_rmr_end"),
                    $.clearDownloadPromise(P),
                    M({
                      mimetype: A,
                      mediaObject: $,
                      downloadEvenIfExpensive: !1,
                      mediaType: P,
                      rmrReason: B,
                      rmrData: O,
                      downloadOrigin: a,
                      isFinalRmrRetry: !0,
                      isVcardOverMmsDocument: T,
                      mode: F,
                      isAutoDownload: L,
                      chatWid: t,
                      experienceIds: l,
                      downloadQplContext: { qpl: K, rmrRetryCount: Q + 1 },
                    })
                  );
                },
              ),
            )
            .catch(
              i.filteredCatch(
                o("WAWebMediaLoadErrors").MediaUnsupportedError,
                function (e) {
                  if (
                    (w(K, e),
                    $.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.ERROR_UNSUPPORTED,
                    }),
                    o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
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
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!",
                          ])),
                      )
                      .catching(e)
                      .tags("non-sad")
                      .sendLogs("downloadMedia: media unsupported error:"),
                    H)
                  )
                    throw e;
                },
              ),
            )
            .catch(
              i.filteredCatch(
                o("WAWebDownloadManagerErrors").MediaNotOnPhone,
                function (e) {
                  if (
                    (w(K, e),
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
              i.filteredCatch([k, I], function (e) {
                if (
                  (w(K, e),
                  $.consolidate({
                    downloadStage:
                      o("WAWebMediaTypes").DownloadStage.ERROR_MISSING,
                  }),
                  !(
                    e === k && P === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER
                  ) &&
                    (o("WALogger").WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "Unexpected download error: ",
                          "",
                        ])),
                      e.name,
                    ),
                    o("WALogger")
                      .ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
              i.filteredCatch(
                [
                  o("WAWebMediaFileErrors").MediaDecryptionError,
                  o("WAWebMediaFileErrors").MediaHashMismatch,
                ],
                function (e) {
                  w(K, e);
                  var t = $.progressiveStage;
                  if (
                    (ae.abort(),
                    $.consolidate({
                      downloadStage:
                        o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                      progressiveStage: null,
                    }),
                    $.notifyMsgsAsync(),
                    $.delete("download_error"),
                    o(
                      "WAWebCryptoImageStreamer",
                    ).deleteFromInMemoryMediaBlobCache(X, t),
                    H)
                  )
                    throw e;
                },
              ),
            )
            .catch(
              i.filteredCatch(
                [o("WAWebHttpErrors").MmsDownloadFilehashMismatchError],
                function (e) {
                  w(K, e);
                  var t = $.progressiveStage;
                  (ae.abort(), $.hashMismatchRetryCount++);
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
                    $.delete("download_error"),
                    o(
                      "WAWebCryptoImageStreamer",
                    ).deleteFromInMemoryMediaBlobCache(X, t),
                    H)
                  )
                    throw e;
                },
              ),
            )
            .catch(function (e) {
              if (
                (w(K, e),
                $.consolidate({
                  downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
                }),
                e instanceof o("WAWebMediaLoadErrors").MediaLoadError)
              ) {
                if (
                  (o("WALogger").WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
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
                    .sendLogs("downloadMedia: transcode blob too large", {
                      sampling: 0,
                    }),
                  H)
                )
                  throw e;
                return;
              }
              if (
                e instanceof o("WAWebMediaLoadErrors").UnableToPlayVideoError
              ) {
                if (
                  (o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "downloadMedia: error: ",
                        ", ",
                        "",
                      ])),
                    e.message,
                    A || "",
                  ),
                  o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "downloadMedia: error",
                    ])),
                ),
                H)
              )
                throw e;
            })
            .then(function () {
              K.isActive() && K.endSuccess();
            })
            .finally(function () {
              $.clearDownloadPromise(P);
            });
        return (D.set(W, ie), $.setDownloadPromise(W, P), W);
      }).catch(function (e) {
        throw (w(K, e), e);
      });
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
    async function B(e) {
      return o("WAWebMediaBoundedUnzip").unzipBlobWithLimits(
        e,
        o("WAWebMediaBoundedUnzip").LOTTIE_ZIP_LIMITS,
      );
    }
    async function W(e, t) {
      try {
        var n = new (o("WAWebStickerLatencyWamEvent").StickerLatencyWamEvent)({
            size: e.size,
            stickerLatencyAction: o("WAWebWamEnumStickerLatencyAction")
              .STICKER_LATENCY_ACTION.DECOMPRESSION,
          }),
          a = self.performance.now(),
          i = await B(e),
          l = A(i);
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
          var d = F(i);
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
    async function q(e) {
      var t = e.mediaObject,
        n = e.mediaType,
        a = e.mimetype,
        i = t.filehash;
      if (
        !r("isStringNullOrEmpty")(i) &&
        t.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT &&
        !(await H(t))
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
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "checkExistence: error",
                ])),
            );
          }
        }
      }
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
              n >= T.MID && !s.webcMidQualityT && s.markWebcMidQualityT(),
              n === T.FULL &&
                !s.webcFullQualityT &&
                (s.markWebcFullQualityT(), s.commit())));
        },
      };
    }
    async function H(e) {
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
    function G(e) {
      return (
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO ||
        e === o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO
      );
    }
    function z(e) {
      var t = e.downloadEvenIfExpensive,
        n = e.error,
        r = e.isFinalRmrRetry,
        a = e.mediaType,
        i = e.mode;
      return (
        t &&
        i === "manual" &&
        r !== !0 &&
        o("WAWebMediaCryptoEligibilityUtils").isRmrSupportedForMediaType(a) &&
        j(n) &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_media_download_rmr_on_hash_mismatch_enabled",
        )
      );
    }
    function j(e) {
      return e instanceof
        o("WAWebHttpErrors").MmsDownloadFilehashMismatchError ||
        e instanceof o("WAWebMediaFileErrors").MediaHashMismatch
        ? !0
        : e instanceof o("WAWebMediaFileErrors").MediaDecryptionError &&
            (e.message.includes(
              o("WAWebMediaFileErrors").HMAC_MISMATCH_ERROR,
            ) ||
              e.message.includes(
                o("WAWebMediaFileErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
              ));
    }
    ((l.NoEntryAfterRMR = k),
      (l.MissingEncFilehash = I),
      (l.cancelDownloadMedia = x),
      (l.manuallySetMedia = $),
      (l.downloadMedia = M),
      (l.getContentsOfLottieJSONFile = A),
      (l.extractBothLottieJSON = W),
      (l.checkExistence = q));
  },
  98,
);
