__d(
  "WAWebMediaMmsV4Upload",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAThrottle",
    "WAWebCreateMediaUploadMetrics",
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
      f = new WeakMap();
    function g(e) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var t = f.get(e);
          t != null && (f.delete(e), t());
        }
      });
    }
    var h = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            l
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
          var C;
          try {
            C = yield s;
          } catch (e) {
            throw (
              y.endFailWithError(
                "early_upload_failed",
                e instanceof Error ? e.message : String(e),
              ),
              e
            );
          }
          if (C != null)
            return (
              y.addPoint("early_upload_success"),
              y.endSuccess(),
              p.entries.addEntry({
                deprecatedMms3Url: C.url,
                mediaKey: C.mediaKey,
                mediaKeyTimestamp: C.mediaKeyTimestamp,
                encFilehash: C.encFilehash,
                type: _,
                sidecar: C.sidecar,
                directPath: C.directPath,
                firstFrameSidecar: C.firstFrameSidecar,
                debugHint: "upload",
              })
            );
          var b = function () {
              p.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.FINALIZING,
              });
            },
            v = o("WAThrottle").throttle(function (e, t) {
              var n = e.loaded + t;
              Number.isFinite(n) && p.consolidate({ loadedSize: n });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            S = m ? m.key : g == null ? void 0 : g.getMediaKey(),
            R = m ? m.timestamp : g == null ? void 0 : g.getMediaKeyTimestamp(),
            L = yield r("WAWebUploadManager").encryptAndUpload({
              blob: a,
              mediaKey: S,
              mediaKeyTimestamp: R,
              type: _,
              signal: f,
              userUploadAttemptCount: p.userUploadAttemptCount,
              forwardedFromWeb: c,
              uploadOrigin: h,
              fileOrigin: u,
              onProgress: v,
              onFinalize: b,
              isViewOnce: d,
              isHdPhoto:
                _ === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
                o("WAWebHDMediaUtils").isHdPhoto(
                  (t = p.contentInfo.fullHeight) != null ? t : 0,
                  (n = p.contentInfo.fullWidth) != null ? n : 0,
                ),
              uploadQpl: y,
            }),
            E = L.directPath,
            k = L.encFilehash,
            I = L.firstFrameSidecar,
            T = L.mediaKey,
            D = L.mediaKeyTimestamp,
            x = L.sidecar,
            $ = L.url;
          return p.entries.addEntry({
            deprecatedMms3Url: $,
            mediaKey: T,
            mediaKeyTimestamp: D,
            encFilehash: k,
            type: _,
            sidecar: x,
            directPath: E,
            firstFrameSidecar: I,
            debugHint: "upload",
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return L(e, y);
    }
    function R(e) {
      return L(e, b);
    }
    function L(t, a) {
      var i = t.calculateToken,
        l = t.canEnableFastForward,
        m = l === void 0 ? !0 : l,
        p = t.earlyUpload,
        g = t.fileOrigin,
        y = t.forwardedFromWeb,
        C = t.isViewOnce,
        b = t.mediaKeyInfo,
        v = t.mediaObject,
        S = t.mediaType,
        R = t.mimetype,
        L = t.uploadOrigin,
        k = b,
        T = v.getUploadPromise(S);
      if (T) return T;
      var D = new AbortController(),
        x = D.signal,
        $ = (_ || (_ = n("Promise")))
          .resolve()
          .then(function () {
            v.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return E({
              mediaObject: v,
              mimetype: R,
              mediaType: S,
              abortSignal: x,
              uploadOrigin: L,
            });
          })
          .then(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n;
                  if (
                    (m &&
                      (n = v.entries.getUploadEntry(
                        o(
                          "WAWebMediaCryptoEligibilityUtils",
                        ).isMediaCryptoExpectedForMediaType(S),
                      )),
                    n instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                      k &&
                      n.mediaKey !== k.key)
                  ) {
                    var l,
                      u,
                      c = k;
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "mediaKey mismatch, type: ",
                            "",
                          ])),
                        S,
                      )
                      .sendLogs("media-keys-not-the-same-" + S);
                    var d = !v.entries.entries.some(function (e) {
                        return e.getMediaKey() === c.key;
                      }),
                      _ = (l = n.mediaKey) == null ? void 0 : l.length,
                      f = (u = c.key) == null ? void 0 : u.length;
                    if (
                      (o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[_uploadMediaAndManageErrors] isNew=",
                            " keyLen=",
                            "/",
                            "",
                          ])),
                        d,
                        _,
                        f,
                      ),
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      k = null;
                    else
                      throw r("err")(
                        "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                      );
                  }
                  var h = yield a({
                    blob: t,
                    canEnableFastForward: m,
                    forwardedFromWeb: y,
                    mediaKeyInfo: k,
                    mediaObject: v,
                    mediaType: S,
                    signal: x,
                    uploadEntry: n,
                    uploadOrigin: L,
                    fileOrigin: g,
                    isViewOnce: C,
                    earlyUpload: p,
                    calculateToken: i,
                  });
                  if (!h) throw r("err")("could not create media entry");
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
                  return (yield I(v.filehash, S, t), h);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: success",
                  ])),
              ),
              { kind: h.SUCCESS, mediaEntry: e }
            );
          })
          .catch(function (e) {
            var t = r("getErrorSafe")(e);
            throw (
              t.name === o("WAAbortError").ABORT_ERROR
                ? o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAlgo.uploadMedia: canceled",
                      ])),
                  )
                : o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  { kind: h.ERROR }
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
                  { kind: h.ERROR }
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
                  { kind: h.ERROR }
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
                  { kind: h.ERROR }
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
                  { kind: h.ERROR }
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
                ? { kind: h.CANCELLATION }
                : { kind: h.ERROR }
            );
          });
      return (
        f.set($, function () {
          D.abort();
        }),
        v.setUploadPromise($, S),
        $
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            a = e.chatWid,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.mimetype,
            u = e.uploadOrigin,
            c = D(i);
          if (c) return c;
          var d = (t = i.filehash) != null ? t : "none",
            p = i.entries.entries.length;
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
              p,
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
          var _ = D(i);
          if (_) return _;
          throw r("err")("can't upload media w/out mediaBlob after download");
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[media-upload] could not file the sent media for reuse",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("upload-lru-store-write-failed");
              }
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (e.filehash)
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = g),
      (l.UploadMediaResultKind = h),
      (l.uploadMedia = S),
      (l.uploadUnencryptedMedia = R),
      (l.getOrDownloadBlob = E),
      (l.getBlobFromMediaObject = D));
  },
  98,
);
