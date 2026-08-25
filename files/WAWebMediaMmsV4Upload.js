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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = new WeakMap();
    function f(e) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var t = _.get(e);
          t != null && (_.delete(e), t());
        }
      });
    }
    var g = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            thumbnailDirectPath: p.thumbnailDirectPath,
            thumbnailSha256: p.thumbnailSha256,
            fbid: p.fbid,
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return R(e, h);
    }
    function S(e) {
      return R(e, C);
    }
    function R(t, a) {
      var i = t.calculateToken,
        l = t.canEnableFastForward,
        m = l === void 0 ? !0 : l,
        f = t.earlyUpload,
        h = t.fileOrigin,
        y = t.forwardedFromWeb,
        C = t.isViewOnce,
        b = t.mediaKeyInfo,
        v = t.mediaObject,
        S = t.mediaType,
        R = t.mimetype,
        E = t.uploadOrigin,
        k = b,
        I = v.getUploadPromise(S);
      if (I) return I;
      var T = new AbortController(),
        D = T.signal,
        x = (p || (p = n("Promise")))
          .resolve()
          .then(function () {
            v.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return L({
              mediaObject: v,
              mimetype: R,
              mediaType: S,
              abortSignal: D,
              uploadOrigin: E,
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
                      p = (l = n.mediaKey) == null ? void 0 : l.length,
                      _ = (u = c.key) == null ? void 0 : u.length;
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
                        p,
                        _,
                      ),
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      k = null;
                    else
                      throw r("err")(
                        "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                      );
                  }
                  var g = yield a({
                    blob: t,
                    canEnableFastForward: m,
                    forwardedFromWeb: y,
                    mediaKeyInfo: k,
                    mediaObject: v,
                    mediaType: S,
                    signal: D,
                    uploadEntry: n,
                    uploadOrigin: E,
                    fileOrigin: h,
                    isViewOnce: C,
                    earlyUpload: f,
                    calculateToken: i,
                  });
                  if (!g) throw r("err")("could not create media entry");
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
                        (yield o("WAWebMediaDataUtils").gatherAndSetMetadata(
                          v,
                          v.mediaBlob,
                        ));
                  var L = v.filehash;
                  if (r("WAWebEnvironment").isWindows && L != null) {
                    var I = yield o("WAWebFileUtils").blobToArrayBuffer(t);
                    yield o("WAWebMediaStore").LruMediaStore.put(L, I);
                  }
                  return g;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          )
          .then(function (e) {
            if (D.aborted) throw new (o("WAAbortError").AbortError)();
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
              { kind: g.SUCCESS, mediaEntry: e }
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
                  { kind: g.ERROR }
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
                  { kind: g.ERROR }
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
                  { kind: g.ERROR }
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
                  { kind: g.ERROR }
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
                  { kind: g.ERROR }
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
                ? { kind: g.CANCELLATION }
                : { kind: g.ERROR }
            );
          });
      return (
        _.set(x, function () {
          T.abort();
        }),
        v.setUploadPromise(x, S),
        x
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            a = e.chatWid,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.mimetype,
            u = e.uploadOrigin,
            c = k(i);
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
          var _ = k(i);
          if (_) return _;
          throw r("err")("can't upload media w/out mediaBlob after download");
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (e.filehash)
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = f),
      (l.UploadMediaResultKind = g),
      (l.uploadMedia = v),
      (l.uploadUnencryptedMedia = S),
      (l.getOrDownloadBlob = L),
      (l.getBlobFromMediaObject = k));
  },
  98,
);
