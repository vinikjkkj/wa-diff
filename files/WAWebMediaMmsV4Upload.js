__d(
  "WAWebMediaMmsV4Upload",
  [
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
    "err",
    "getErrorSafe",
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
    async function g(e) {
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
      var h = await s;
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
        C = o("WAThrottle").throttle(function (e, t) {
          var n = e.loaded + t;
          Number.isFinite(n) && m.consolidate({ loadedSize: n });
        }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
        b = d ? d.key : f == null ? void 0 : f.getMediaKey(),
        v = d ? d.timestamp : f == null ? void 0 : f.getMediaKeyTimestamp(),
        S = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
          entryPoint: "MediaUpload",
        }),
        R = await r("WAWebUploadManager").encryptAndUpload({
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
    }
    async function h(e) {
      var t = e.blob,
        n = e.calculateToken,
        a = e.isViewOnce,
        i = e.mediaObject,
        l = e.mediaType,
        s = e.signal,
        u = e.uploadOrigin,
        c = await o("WAWebFileUtils").blobToArrayBuffer(t),
        d = await o("WAMediaCalculateFilehash").calculateFilehash(c),
        m = await r("WAWebUploadManager").unencryptedUpload({
          file: c,
          isViewOnce: a,
          signal: s,
          type: l,
          uploadOrigin: u,
          hash: d,
          token: await (n == null ? void 0 : n(d)),
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
    }
    function y(e) {
      return b(e, g);
    }
    function C(e) {
      return b(e, h);
    }
    function b(t, n) {
      var a = t.calculateToken,
        i = t.canEnableFastForward,
        l = i === void 0 ? !0 : i,
        m = t.earlyUpload,
        _ = t.forwardedFromWeb,
        g = t.isViewOnce,
        h = t.mediaKeyInfo,
        y = t.mediaObject,
        C = t.mediaType,
        b = t.mimetype,
        S = t.uploadOrigin,
        R = h,
        L = y.getUploadPromise(C);
      if (L) return L;
      var E = new AbortController(),
        k = E.signal,
        I = Promise.resolve()
          .then(function () {
            y.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return v({
              mediaObject: y,
              mimetype: b,
              mediaType: C,
              abortSignal: k,
              uploadOrigin: S,
            });
          })
          .then(async function (t) {
            var i;
            if (
              (l &&
                (i = y.entries.getUploadEntry(
                  o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForMediaType(C),
                )),
              i instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                R &&
                i.mediaKey !== R.key)
            ) {
              var u,
                c,
                d = R;
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "mediaKey mismatch, type: ",
                      "",
                    ])),
                  C,
                )
                .sendLogs("media-keys-not-the-same-" + C);
              var p = !y.entries.entries.some(function (e) {
                  return e.getMediaKey() === d.key;
                }),
                f = (u = i.mediaKey) == null ? void 0 : u.length,
                h = (c = d.key) == null ? void 0 : c.length;
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[_uploadMediaAndManageErrors] isNew=",
                      " keyLen=",
                      "/",
                      "",
                    ])),
                  p,
                  f,
                  h,
                ),
                C === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
              )
                R = null;
              else
                throw r("err")(
                  "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                );
            }
            var b = await n({
              blob: t,
              canEnableFastForward: l,
              forwardedFromWeb: _,
              mediaKeyInfo: R,
              mediaObject: y,
              mediaType: C,
              signal: k,
              uploadEntry: i,
              uploadOrigin: S,
              isViewOnce: g,
              earlyUpload: m,
              calculateToken: a,
            });
            if (!b) throw r("err")("could not create media entry");
            if (
              (C === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
                C === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) &&
              !o("WAWebMediaDataUtils").canPlayOgg()
            )
              if (o("WAWebMediaDataUtils").shouldUseMediaCache(C)) {
                var v = y.filehash;
                if (v && y.mediaBlob) {
                  var L = await o("WAWebMediaLoad").transcode(
                    y.mediaBlob.formData(),
                  );
                  o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                    v,
                    L,
                  );
                }
              } else
                y.mediaBlob &&
                  (await o("WAWebMediaDataUtils").gatherAndSetMetadata(
                    y,
                    y.mediaBlob,
                  ));
            var E = y.filehash;
            if (r("WAWebEnvironment").isWindows && E != null) {
              var I = await o("WAWebFileUtils").blobToArrayBuffer(t);
              await o("WAWebMediaStore").LruMediaStore.put(E, I);
            }
            return b;
          })
          .then(function (e) {
            if (k.aborted) throw new (o("WAAbortError").AbortError)();
            return (
              y.consolidate({
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
            y.clearUploadPromise(C);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMiscErrors").FileNotReadableError,
              function () {
                return (
                  y.consolidate({
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
                  y.consolidate({
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
                  y.consolidate({
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
                  y.consolidate({
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
                  y.consolidate({
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
              y.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.NEED_UPLOAD,
              }),
              r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
                ? { kind: f.CANCELLATION }
                : { kind: f.ERROR }
            );
          });
      return (
        p.set(I, function () {
          E.abort();
        }),
        y.setUploadPromise(I, C),
        I
      );
    }
    async function v(e) {
      var t,
        n = e.abortSignal,
        a = e.chatWid,
        i = e.mediaObject,
        l = e.mediaType,
        s = e.mimetype,
        u = e.uploadOrigin,
        c = S(i);
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
        await o("WAWebMediaMmsV4Download").downloadMedia({
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
        i.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING)
      )
        throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
      var _ = S(i);
      if (_) return _;
      throw r("err")("cant upload media w/out mediaBlob after download");
    }
    function S(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (e.filehash)
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = _),
      (l.UploadMediaResultKind = f),
      (l.uploadMedia = y),
      (l.uploadUnencryptedMedia = C),
      (l.getOrDownloadBlob = v),
      (l.getBlobFromMediaObject = S));
  },
  98,
);
