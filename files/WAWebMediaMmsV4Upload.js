__d(
  "WAWebMediaMmsV4Upload",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAThrottle",
    "WAWebABProps",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoMediaTypeInfo",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebHDMediaUtils",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaGatingUtils",
    "WAWebMediaGetDownloadOriginFromUploadOrigin",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaMmsV4Download",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      g = new WeakMap();
    function h(e) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var t = g.get(e);
          t != null && (g.delete(e), t());
        }
      });
    }
    var y = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function C(t, n) {
      try {
        var a = o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(t);
        return (
          a != null && a === o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(n)
        );
      } catch (a) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-upload] no media key type for ",
                  " or ",
                  "",
                ])),
              t,
              n,
            )
            .catching(r("getErrorSafe")(a))
            .sendLogs("upload-media-key-type-unknown"),
          !1
        );
      }
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.blob,
            i = e.canEnableFastForward,
            l = i === void 0 ? !0 : i,
            s = e.earlyUpload,
            u = e.fileOrigin,
            c = e.forwardedFromWeb,
            d = e.isViewOnce,
            m = e.mediaKeyInfo,
            p = e.mediaObject,
            _ = e.mediaType,
            f = e.signal,
            g = e.uploadEntry,
            h = e.uploadOrigin,
            y = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
              entryPoint: "MediaUpload",
              mediaType: _,
              byteLength: a.size,
            });
          if (
            g instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            g != null &&
            g.canReuseMediaKey() &&
            l &&
            (C(g.type, _) ||
              !o("WAWebABProps").getABPropConfigValue(
                "wa_web_media_fast_forward_same_key_type_enabled",
              ))
          )
            return (
              y.addAnnotations({
                string: { media_entry_dedupe_result: "fast-forward" },
              }),
              r("WAWebCreateMediaUploadMetrics")({
                type: _,
                uploadOrigin: h,
                fileOrigin: u,
                userUploadAttemptCount: 0,
                forwardedFromWeb: c,
                isViewOnce: d,
                uploadQpl: y,
              }).handleCheckExistingSuccess(),
              y.endSuccess(),
              g
            );
          var b;
          try {
            b = yield s;
          } catch (e) {
            throw (
              y.endFailWithError(
                "early_upload_failed",
                e instanceof Error ? e.message : String(e),
              ),
              e
            );
          }
          if (b != null)
            return (
              y.addPoint("early_upload_success"),
              y.endSuccess(),
              p.entries.addEntry({
                deprecatedMms3Url: b.url,
                mediaKey: b.mediaKey,
                mediaKeyTimestamp: b.mediaKeyTimestamp,
                encFilehash: b.encFilehash,
                type: _,
                sidecar: b.sidecar,
                directPath: b.directPath,
                firstFrameSidecar: b.firstFrameSidecar,
                debugHint: "upload",
              })
            );
          var v = function () {
              p.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.FINALIZING,
              });
            },
            S = o("WAThrottle").throttle(function (e, t) {
              var n = e.loaded + t;
              Number.isFinite(n) && p.consolidate({ loadedSize: n });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            R = m ? m.key : g == null ? void 0 : g.getMediaKey(),
            L = m ? m.timestamp : g == null ? void 0 : g.getMediaKeyTimestamp(),
            E = yield r("WAWebUploadManager").encryptAndUpload({
              blob: a,
              mediaKey: R,
              mediaKeyTimestamp: L,
              type: _,
              signal: f,
              userUploadAttemptCount: p.userUploadAttemptCount,
              forwardedFromWeb: c,
              uploadOrigin: h,
              fileOrigin: u,
              onProgress: S,
              onFinalize: v,
              isViewOnce: d,
              isHdPhoto:
                _ === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
                o("WAWebHDMediaUtils").isHdPhoto(
                  (t = p.contentInfo.fullHeight) != null ? t : 0,
                  (n = p.contentInfo.fullWidth) != null ? n : 0,
                ),
              uploadQpl: y,
            }),
            k = E.directPath,
            I = E.encFilehash,
            T = E.firstFrameSidecar,
            D = E.mediaKey,
            x = E.mediaKeyTimestamp,
            $ = E.sidecar,
            P = E.url;
          return p.entries.addEntry({
            deprecatedMms3Url: P,
            mediaKey: D,
            mediaKeyTimestamp: x,
            encFilehash: I,
            type: _,
            sidecar: $,
            directPath: k,
            firstFrameSidecar: T,
            debugHint: "upload",
          });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.blob,
            n = e.calculateToken,
            a = e.fileOrigin,
            i = e.isViewOnce,
            l = e.mediaObject,
            s = e.mediaType,
            u = e.signal,
            c = e.uploadOrigin,
            d = yield o("WAWebFileUtils").blobToArrayBuffer(t),
            m = yield o("WAMediaCalculateFilehash").calculateFilehash(d),
            p = yield r("WAWebUploadManager").unencryptedUpload({
              file: d,
              isViewOnce: i,
              signal: u,
              type: s,
              uploadOrigin: c,
              fileOrigin: a,
              hash: m,
              token: yield n == null ? void 0 : n(m),
              generateThumbnailOnServer: o(
                "WAWebMediaGatingUtils",
              ).isThumbnailGenerationOnServerEnabledForMediaType(s),
            });
          return l.entries.addUnencryptedEntry({
            directPath: p.directPath,
            debugHint: "upload",
            filehash: m,
            type: s,
            handle: p.handle,
            metadataUrl: p.metadataUrl,
            dashManifestUrl: p.dashManifestUrl,
            thumbnailDirectPath: p.thumbnailDirectPath,
            thumbnailSha256: p.thumbnailSha256,
            fbid: p.fbid,
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return k(e, b);
    }
    function E(e) {
      return k(e, S);
    }
    function k(e, t) {
      var a = e.calculateToken,
        i = e.canEnableFastForward,
        l = i === void 0 ? !0 : i,
        p = e.earlyUpload,
        _ = e.fileOrigin,
        h = e.forwardedFromWeb,
        C = e.isViewOnce,
        b = e.mediaKeyInfo,
        v = e.mediaObject,
        S = e.mediaType,
        R = e.mimetype,
        L = e.uploadOrigin,
        E = b,
        k = v.getUploadPromise(S);
      if (k) return k;
      var T = new AbortController(),
        x = T.signal,
        $ = (f || (f = n("Promise")))
          .resolve()
          .then(function () {
            v.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return I({
              mediaObject: v,
              mimetype: R,
              mediaType: S,
              abortSignal: x,
              uploadOrigin: L,
            });
          })
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n;
                  if (
                    (l &&
                      (n = v.entries.getUploadEntry(
                        o(
                          "WAWebMediaCryptoEligibilityUtils",
                        ).isMediaCryptoExpectedForMediaType(S),
                      )),
                    n instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                      E &&
                      n.mediaKey !== E.key)
                  ) {
                    var i,
                      c,
                      d = E;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "mediaKey mismatch, type: ",
                            "",
                          ])),
                        S,
                      )
                      .sendLogs("media-keys-not-the-same-" + S);
                    var m = !v.entries.entries.some(function (e) {
                        return e.getMediaKey() === d.key;
                      }),
                      f = (i = n.mediaKey) == null ? void 0 : i.length,
                      g = (c = d.key) == null ? void 0 : c.length;
                    if (
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[_uploadMediaAndManageErrors] isNew=",
                            " keyLen=",
                            "/",
                            "",
                          ])),
                        m,
                        f,
                        g,
                      ),
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      E = null;
                    else
                      throw r("err")(
                        "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                      );
                  }
                  var y = yield t({
                    blob: e,
                    canEnableFastForward: l,
                    forwardedFromWeb: h,
                    mediaKeyInfo: E,
                    mediaObject: v,
                    mediaType: S,
                    signal: x,
                    uploadEntry: n,
                    uploadOrigin: L,
                    fileOrigin: _,
                    isViewOnce: C,
                    earlyUpload: p,
                    calculateToken: a,
                  });
                  if (!y) throw r("err")("could not create media entry");
                  if (
                    (S === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) &&
                    !o("WAWebMediaDataUtils").canPlayOgg()
                  )
                    if (o("WAWebMediaDataUtils").shouldUseMediaCache(S)) {
                      var b = v.filehash;
                      if (b && v.mediaBlob) {
                        var R = yield o("WAWebMediaLoad").transcode(
                          v.mediaBlob.formData(),
                        );
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(b, R);
                      }
                    } else
                      v.mediaBlob &&
                        (yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata(v, v.mediaBlob));
                  return (yield D(v.filehash, S, e), y);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .then(function (e) {
            if (x.aborted) throw new (o("WAAbortError").AbortError)();
            return (
              v.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADED,
              }),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: success",
                  ])),
              ),
              { kind: y.SUCCESS, mediaEntry: e }
            );
          })
          .catch(function (e) {
            var t = r("getErrorSafe")(e);
            throw (
              t.name === o("WAAbortError").ABORT_ERROR
                ? o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAlgo.uploadMedia: canceled",
                      ])),
                  )
                : o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "MediaAlgo.uploadMedia",
                        ])),
                    )
                    .catching(t),
              e
            );
          })
          .finally(function () {
            v.clearUploadPromise(S);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMediaLoadErrors").FileNotReadableError,
              function () {
                return (
                  v.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE,
                  }),
                  { kind: y.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebDownloadManagerErrors").MediaNotOnPhone,
              function () {
                return (
                  v.consolidate({
                    uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_MISSING,
                  }),
                  { kind: y.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MediaTooLargeError,
              function () {
                return (
                  v.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE,
                  }),
                  { kind: y.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSForbiddenError,
              function () {
                return (
                  v.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN,
                  }),
                  { kind: y.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSThrottleError,
              function () {
                return (
                  v.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED,
                  }),
                  { kind: y.ERROR }
                );
              },
            ),
          )
          .catch(function (e) {
            return (
              v.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.NEED_UPLOAD,
              }),
              r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
                ? { kind: y.CANCELLATION }
                : { kind: y.ERROR }
            );
          });
      return (
        g.set($, function () {
          T.abort();
        }),
        v.setUploadPromise($, S),
        $
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            a = e.chatWid,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.mimetype,
            u = e.uploadOrigin,
            c = $(i);
          if (c) return c;
          var d = (t = i.filehash) != null ? t : "none",
            m = i.entries.entries.length;
          if (
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "getOrDownloadBlob: no blob fh=",
                  " type=",
                  " msgs=",
                  " entries=",
                  " dlStage=",
                  "",
                ])),
              d,
              l,
              i.msgs.length,
              m,
              i.downloadStage,
            ),
            yield o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: s,
              mediaObject: i,
              downloadEvenIfExpensive: !0,
              mediaType: l,
              signal: n,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .UPLOAD,
              downloadOrigin: o(
                "WAWebMediaGetDownloadOriginFromUploadOrigin",
              ).getDownloadOriginFromUploadOrigin(u),
              mode: "manual",
              chatWid: a,
            }),
            i.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING)
          )
            throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
          var _ = $(i);
          if (_) return _;
          throw r("err")("can't upload media w/out mediaBlob after download");
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e != null) {
            var a =
              (o("WAWebMediaDataUtils").shouldUseLruMediaStore(t) &&
                r("justknobx")._("2918")) ||
              r("WAWebEnvironment").isWindows;
            if (a)
              try {
                yield o("WAWebMediaStore").LruMediaStore.put(
                  e,
                  yield o("WAWebFileUtils").blobToArrayBuffer(n),
                );
              } catch (e) {
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-upload] could not file the sent media for reuse",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("upload-lru-store-write-failed");
              }
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (e.filehash)
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = h),
      (l.UploadMediaResultKind = y),
      (l.uploadMedia = L),
      (l.uploadUnencryptedMedia = E),
      (l.getOrDownloadBlob = I),
      (l.getBlobFromMediaObject = $));
  },
  98,
);
