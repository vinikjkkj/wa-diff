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
    "WAWebMediaOpaqueData",
    "WAWebMediaStore",
    "WAWebMediaStoreLruImpl",
    "WAWebMediaTypes",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebUploadManagerBase",
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
      g,
      h = new WeakMap();
    function y(e) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var t = h.get(e);
          t != null && (h.delete(e), t());
        }
      });
    }
    var C = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function b(t, n) {
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            f = e.plaintext,
            g = e.signal,
            h = e.uploadEntry,
            y = e.uploadOrigin,
            C = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
              entryPoint: "MediaUpload",
              mediaType: _,
              byteLength: a.size,
            });
          if (
            h instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            h != null &&
            h.canReuseMediaKey() &&
            l &&
            (b(h.type, _) ||
              !o("WAWebABProps").getABPropConfigValue(
                "wa_web_media_fast_forward_same_key_type_enabled",
              ))
          )
            return (
              C.addAnnotations({
                string: { media_entry_dedupe_result: "fast-forward" },
              }),
              r("WAWebCreateMediaUploadMetrics")({
                type: _,
                uploadOrigin: y,
                fileOrigin: u,
                userUploadAttemptCount: 0,
                forwardedFromWeb: c,
                isViewOnce: d,
                uploadQpl: C,
              }).handleCheckExistingSuccess(),
              C.endSuccess(),
              h
            );
          var v;
          try {
            v = yield s;
          } catch (e) {
            throw (
              C.endFailWithError(
                "early_upload_failed",
                e instanceof Error ? e.message : String(e),
              ),
              e
            );
          }
          if (v != null)
            return (
              C.addPoint("early_upload_success"),
              C.endSuccess(),
              p.entries.addEntry({
                deprecatedMms3Url: v.url,
                mediaKey: v.mediaKey,
                mediaKeyTimestamp: v.mediaKeyTimestamp,
                encFilehash: v.encFilehash,
                type: _,
                sidecar: v.sidecar,
                directPath: v.directPath,
                firstFrameSidecar: v.firstFrameSidecar,
                debugHint: "upload",
              })
            );
          var S = function () {
              p.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.FINALIZING,
              });
            },
            R = o("WAThrottle").throttle(function (e, t) {
              var n = e.loaded + t;
              Number.isFinite(n) && p.consolidate({ loadedSize: n });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            L = m ? m.key : h == null ? void 0 : h.getMediaKey(),
            E = m ? m.timestamp : h == null ? void 0 : h.getMediaKeyTimestamp(),
            k = yield r("WAWebUploadManager").encryptAndUpload({
              blob: f != null ? f : a,
              mediaKey: L,
              mediaKeyTimestamp: E,
              type: _,
              signal: g,
              userUploadAttemptCount: p.userUploadAttemptCount,
              forwardedFromWeb: c,
              uploadOrigin: y,
              fileOrigin: u,
              onProgress: R,
              onFinalize: S,
              isViewOnce: d,
              isHdPhoto:
                _ === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
                o("WAWebHDMediaUtils").isHdPhoto(
                  (t = p.contentInfo.fullHeight) != null ? t : 0,
                  (n = p.contentInfo.fullWidth) != null ? n : 0,
                ),
              uploadQpl: C,
            }),
            I = k.directPath,
            T = k.encFilehash,
            D = k.firstFrameSidecar,
            x = k.mediaKey,
            $ = k.mediaKeyTimestamp,
            P = k.sidecar,
            N = k.url;
          return p.entries.addEntry({
            deprecatedMms3Url: N,
            mediaKey: x,
            mediaKeyTimestamp: $,
            encFilehash: T,
            type: _,
            sidecar: P,
            directPath: I,
            firstFrameSidecar: D,
            debugHint: "upload",
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.blob,
            n = e.calculateToken,
            a = e.fileOrigin,
            i = e.isViewOnce,
            l = e.mediaObject,
            s = e.mediaType,
            u = e.plaintext,
            c = e.signal,
            d = e.uploadOrigin,
            m = u != null ? u : yield o("WAWebFileUtils").blobToArrayBuffer(t),
            p = yield o("WAMediaCalculateFilehash").calculateFilehash(m),
            _ = yield r("WAWebUploadManager").unencryptedUpload({
              file: m,
              isViewOnce: i,
              signal: c,
              type: s,
              uploadOrigin: d,
              fileOrigin: a,
              hash: p,
              token: yield n == null ? void 0 : n(p),
              generateThumbnailOnServer: o(
                "WAWebMediaGatingUtils",
              ).isThumbnailGenerationOnServerEnabledForMediaType(s),
            });
          return l.entries.addUnencryptedEntry({
            directPath: _.directPath,
            debugHint: "upload",
            filehash: p,
            type: s,
            handle: _.handle,
            metadataUrl: _.metadataUrl,
            dashManifestUrl: _.dashManifestUrl,
            thumbnailDirectPath: _.thumbnailDirectPath,
            thumbnailSha256: _.thumbnailSha256,
            fbid: _.fbid,
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return I(e, v);
    }
    function k(e) {
      return I(e, R);
    }
    function I(e, t) {
      var a = e.calculateToken,
        i = e.canEnableFastForward,
        l = i === void 0 ? !0 : i,
        p = e.earlyUpload,
        _ = e.fileOrigin,
        f = e.forwardedFromWeb,
        y = e.isViewOnce,
        b = e.mediaKeyInfo,
        v = e.mediaObject,
        S = e.mediaType,
        R = e.mimetype,
        L = e.uploadOrigin,
        E = b,
        k = v.getUploadPromise(S);
      if (k) return k;
      var I = new AbortController(),
        D = I.signal,
        $ = (g || (g = n("Promise")))
          .resolve()
          .then(function () {
            v.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return T({
              mediaObject: v,
              mimetype: R,
              mediaType: S,
              abortSignal: D,
              uploadOrigin: L,
            });
          })
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = yield x(v.filehash, S, e),
                    i;
                  if (
                    (l &&
                      (i = v.entries.getUploadEntry(
                        o(
                          "WAWebMediaCryptoEligibilityUtils",
                        ).isMediaCryptoExpectedForMediaType(S),
                      )),
                    i instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                      E &&
                      i.mediaKey !== E.key)
                  ) {
                    var c,
                      d,
                      m = E;
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
                    var g = !v.entries.entries.some(function (e) {
                        return e.getMediaKey() === m.key;
                      }),
                      h = (c = i.mediaKey) == null ? void 0 : c.length,
                      C = (d = m.key) == null ? void 0 : d.length;
                    if (
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[_uploadMediaAndManageErrors] isNew=",
                            " keyLen=",
                            "/",
                            "",
                          ])),
                        g,
                        h,
                        C,
                      ),
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      E = null;
                    else
                      throw r("err")(
                        "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                      );
                  }
                  var b = yield t({
                    blob: e,
                    plaintext: n,
                    canEnableFastForward: l,
                    forwardedFromWeb: f,
                    mediaKeyInfo: E,
                    mediaObject: v,
                    mediaType: S,
                    signal: D,
                    uploadEntry: i,
                    uploadOrigin: L,
                    fileOrigin: _,
                    isViewOnce: y,
                    earlyUpload: p,
                    calculateToken: a,
                  });
                  if (!b) throw r("err")("could not create media entry");
                  if (
                    (S === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) &&
                    !o("WAWebMediaDataUtils").canPlayOgg()
                  )
                    if (o("WAWebMediaDataUtils").shouldUseMediaCache(S)) {
                      var R = v.filehash;
                      if (R && v.mediaBlob) {
                        var k = yield o("WAWebMediaLoad").transcode(
                          v.mediaBlob.formData(),
                        );
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(R, k);
                      }
                    } else
                      v.mediaBlob &&
                        (yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata(v, v.mediaBlob));
                  return (
                    yield P(v.filehash, S, n != null ? n : e),
                    n != null && (yield M(v, n)),
                    b
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: success",
                  ])),
              ),
              { kind: C.SUCCESS, mediaEntry: e }
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
            v.clearUploadPromise(S, $);
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
                  { kind: C.ERROR }
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
                  { kind: C.ERROR }
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
                  { kind: C.ERROR }
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
                  { kind: C.ERROR }
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
                  { kind: C.ERROR }
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
                ? { kind: C.CANCELLATION }
                : { kind: C.ERROR }
            );
          });
      return (
        h.set($, function () {
          I.abort();
        }),
        v.setUploadPromise($, S),
        $
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            a = e.chatWid,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.mimetype,
            u = e.uploadOrigin,
            c = F(i);
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
          var _ = F(i);
          if (_) return _;
          throw r("err")("can't upload media w/out mediaBlob after download");
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !A(e, t) ||
            n.size >
              r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES ||
            o("WAWebUploadManagerBase").shouldStreamEncrypt(t, n)
          )
            return null;
          try {
            return yield o("WAWebFileUtils").blobToArrayBuffer(n);
          } catch (e) {
            return null;
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n instanceof ArrayBuffer ? n.byteLength : n.size;
          if (
            !(
              e == null ||
              !A(e, t) ||
              a > r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES
            )
          )
            try {
              yield o("WAWebMediaStore").LruMediaStore.put(
                e,
                n instanceof ArrayBuffer
                  ? n
                  : yield o("WAWebFileUtils").blobToArrayBuffer(n),
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
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = e.mediaBlob;
            if (n == null || !(n.forceToBlob() instanceof File)) return;
            var a = yield r("WAWebMediaOpaqueData").createFromData(t, n.type());
            e.consolidate({ mediaBlob: a });
            var i = e.filehash;
            (i != null &&
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                i,
              ) instanceof File &&
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.replace(
                i,
                a.forceToBlob(),
              ),
              a.autorelease());
          } catch (e) {
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-upload] could not keep the sent media in memory",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return e == null
        ? !1
        : (o("WAWebMediaDataUtils").shouldUseLruMediaStore(t) &&
            r("justknobx")._("2918")) ||
            r("WAWebEnvironment").isWindows;
    }
    function F(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (e.filehash)
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = y),
      (l.UploadMediaResultKind = C),
      (l.uploadMedia = E),
      (l.uploadUnencryptedMedia = k),
      (l.getOrDownloadBlob = T),
      (l.getBlobFromMediaObject = F));
  },
  98,
);
