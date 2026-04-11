__d(
  "WAWebMediaMmsV4Upload",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAMediaCalculateFilehash",
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
    "WAWebMediaMmsV4Download",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebMiscErrors",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new WeakMap();
    function _(e) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var t = p.get(e);
          t != null && (p.delete(e), t());
        }
      });
    }
    var f = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.blob,
            i = e.canEnableFastForward,
            l = i === void 0 ? !0 : i,
            s = e.earlyUpload,
            u = e.forwardedFromWeb,
            c = e.isViewOnce,
            d = e.mediaKeyInfo,
            m = e.mediaObject,
            p = e.mediaType,
            _ = e.signal,
            f = e.uploadEntry,
            g = e.uploadOrigin;
          if (
            f instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            f != null &&
            f.canReuseMediaKey() &&
            l
          )
            return (
              r("WAWebCreateMediaUploadMetrics")(
                p,
                g,
                0,
                u,
                c,
              ).handleCheckExistingSuccess(),
              f
            );
          var h = yield s;
          if (h != null)
            return m.entries.addEntry({
              deprecatedMms3Url: h.url,
              mediaKey: h.mediaKey,
              mediaKeyTimestamp: h.mediaKeyTimestamp,
              encFilehash: h.encFilehash,
              type: p,
              sidecar: h.sidecar,
              directPath: h.directPath,
              firstFrameSidecar: h.firstFrameSidecar,
              debugHint: "upload",
            });
          var y = function () {
              m.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.FINALIZING,
              });
            },
            C = r("lodash").throttle(function (e, t) {
              var n = e.loaded + t;
              Number.isFinite(n) && m.consolidate({ loadedSize: n });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            b = d ? d.key : f == null ? void 0 : f.getMediaKey(),
            v = d ? d.timestamp : f == null ? void 0 : f.getMediaKeyTimestamp(),
            S = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
              entryPoint: "MediaUpload",
            }),
            R = yield r("WAWebUploadManager").encryptAndUpload({
              blob: a,
              mediaKey: b,
              mediaKeyTimestamp: v,
              type: p,
              signal: _,
              userUploadAttemptCount: m.userUploadAttemptCount,
              forwardedFromWeb: u,
              uploadOrigin: g,
              onProgress: C,
              onFinalize: y,
              isViewOnce: c,
              isHdPhoto:
                p === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
                o("WAWebHDMediaUtils").isHdPhoto(
                  (t = m.contentInfo.fullHeight) != null ? t : 0,
                  (n = m.contentInfo.fullWidth) != null ? n : 0,
                ),
              uploadQpl: S,
            }),
            L = R.directPath,
            E = R.encFilehash,
            k = R.firstFrameSidecar,
            I = R.mediaKey,
            T = R.mediaKeyTimestamp,
            D = R.sidecar,
            x = R.url;
          return m.entries.addEntry({
            deprecatedMms3Url: x,
            mediaKey: I,
            mediaKeyTimestamp: T,
            encFilehash: E,
            type: p,
            sidecar: D,
            directPath: L,
            firstFrameSidecar: k,
            debugHint: "upload",
          });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.blob,
            n = e.calculateToken,
            a = e.isViewOnce,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.signal,
            u = e.uploadOrigin,
            c = yield o("WAWebFileUtils").blobToArrayBuffer(t),
            d = yield o("WAMediaCalculateFilehash").calculateFilehash(c),
            m = yield r("WAWebUploadManager").unencryptedUpload({
              file: c,
              isViewOnce: a,
              signal: s,
              type: l,
              uploadOrigin: u,
              hash: d,
              token: yield n == null ? void 0 : n(d),
              generateThumbnailOnServer: o(
                "WAWebMediaGatingUtils",
              ).isThumbnailGenerationOnServerEnabledForMediaType(l),
            });
          return i.entries.addUnencryptedEntry({
            directPath: m.directPath,
            debugHint: "upload",
            filehash: d,
            type: l,
            handle: m.handle,
            metadataUrl: m.metadataUrl,
            thumbnailDirectPath: m.thumbnailDirectPath,
            thumbnailSha256: m.thumbnailSha256,
            fbid: m.fbid,
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return S(e, g);
    }
    function v(e) {
      return S(e, y);
    }
    function S(t, a) {
      var i = t.calculateToken,
        l = t.canEnableFastForward,
        _ = l === void 0 ? !0 : l,
        g = t.earlyUpload,
        h = t.forwardedFromWeb,
        y = t.isViewOnce,
        C = t.mediaKeyInfo,
        b = t.mediaObject,
        v = t.mediaType,
        S = t.mimetype,
        L = t.uploadOrigin,
        E = C,
        k = b.getUploadPromise(v);
      if (k) return k;
      var I = new AbortController(),
        T = I.signal,
        D = (m || (m = n("Promise")))
          .resolve()
          .then(function () {
            b.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return R({
              mediaObject: b,
              mimetype: S,
              mediaType: v,
              abortSignal: T,
              uploadOrigin: L,
            });
          })
          .then(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n;
                  if (
                    (_ &&
                      (n = b.entries.getUploadEntry(
                        o(
                          "WAWebMediaCryptoEligibilityUtils",
                        ).isMediaCryptoExpectedForMediaType(v),
                      )),
                    n instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                      E &&
                      n.mediaKey !== E.key)
                  ) {
                    var l,
                      u,
                      c = E;
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "mediaKey mismatch, type: ",
                            "",
                          ])),
                        v,
                      )
                      .sendLogs("media-keys-not-the-same-" + v);
                    var d = !b.entries.entries.some(function (e) {
                        return e.getMediaKey() === c.key;
                      }),
                      m = (l = n.mediaKey) == null ? void 0 : l.length,
                      p = (u = c.key) == null ? void 0 : u.length;
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
                        m,
                        p,
                      ),
                      v === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      E = null;
                    else
                      throw r("err")(
                        "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                      );
                  }
                  var f = yield a({
                    blob: t,
                    canEnableFastForward: _,
                    forwardedFromWeb: h,
                    mediaKeyInfo: E,
                    mediaObject: b,
                    mediaType: v,
                    signal: T,
                    uploadEntry: n,
                    uploadOrigin: L,
                    isViewOnce: y,
                    earlyUpload: g,
                    calculateToken: i,
                  });
                  if (!f) throw r("err")("could not create media entry");
                  if (
                    (v === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
                      v === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) &&
                    !o("WAWebMediaDataUtils").canPlayOgg()
                  )
                    if (o("WAWebMediaDataUtils").shouldUseMediaCache(v)) {
                      var C = b.filehash;
                      if (C && b.mediaBlob) {
                        var S = yield o("WAWebMediaLoad").transcode(
                          b.mediaBlob.formData(),
                        );
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(C, S);
                      }
                    } else
                      b.mediaBlob &&
                        (yield o("WAWebMediaDataUtils").gatherAndSetMetadata(
                          b,
                          b.mediaBlob,
                        ));
                  var R = b.filehash;
                  if (r("WAWebEnvironment").isWindows && R != null) {
                    var k = yield o("WAWebFileUtils").blobToArrayBuffer(t);
                    yield o("WAWebMediaStore").LruMediaStore.put(R, k);
                  }
                  return f;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          )
          .then(function (e) {
            if (T.aborted) throw new (o("WAAbortError").AbortError)();
            return (
              b.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADED,
              }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: success",
                  ])),
              ),
              { kind: f.SUCCESS, mediaEntry: e }
            );
          })
          .catch(function (e) {
            throw (
              e.name === o("WAAbortError").ABORT_ERROR
                ? o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAlgo.uploadMedia: canceled",
                      ])),
                  )
                : o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAlgo.uploadMedia: ",
                        "",
                      ])),
                    e,
                  ),
              e
            );
          })
          .finally(function () {
            b.clearUploadPromise(v);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMiscErrors").FileNotReadableError,
              function () {
                return (
                  b.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE,
                  }),
                  { kind: f.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebDownloadManagerErrors").MediaNotOnPhone,
              function () {
                return (
                  b.consolidate({
                    uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_MISSING,
                  }),
                  { kind: f.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MediaTooLargeError,
              function () {
                return (
                  b.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE,
                  }),
                  { kind: f.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSForbiddenError,
              function () {
                return (
                  b.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN,
                  }),
                  { kind: f.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSThrottleError,
              function () {
                return (
                  b.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED,
                  }),
                  { kind: f.ERROR }
                );
              },
            ),
          )
          .catch(function (e) {
            return (
              b.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.NEED_UPLOAD,
              }),
              e.name === o("WAAbortError").ABORT_ERROR
                ? { kind: f.CANCELLATION }
                : { kind: f.ERROR }
            );
          });
      return (
        p.set(D, function () {
          I.abort();
        }),
        b.setUploadPromise(D, v),
        D
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.abortSignal,
            n = e.chatWid,
            a = e.mediaObject,
            i = e.mediaType,
            l = e.mimetype,
            s = e.uploadOrigin,
            u = E(a);
          if (u) return u;
          if (
            (yield o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: l,
              mediaObject: a,
              downloadEvenIfExpensive: !0,
              mediaType: i,
              signal: t,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .UPLOAD,
              downloadOrigin: o(
                "WAWebMediaGetDownloadOriginFromUploadOrigin",
              ).getDownloadOriginFromUploadOrigin(s),
              mode: "manual",
              chatWid: n,
            }),
            a.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING)
          )
            throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
          var c = E(a);
          if (c) return c;
          throw r("err")("cant upload media w/out mediaBlob after download");
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (e.filehash)
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = _),
      (l.UploadMediaResultKind = f),
      (l.uploadMedia = b),
      (l.uploadUnencryptedMedia = v),
      (l.getOrDownloadBlob = R),
      (l.getBlobFromMediaObject = E));
  },
  98,
);
