__d(
  "WAWebMediaMmsV4Upload",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAIsMediaKeyReusable",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAThrottle",
    "WATimeUtils",
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
      h,
      y = new WeakMap();
    function C(e, t) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var n = y.get(e);
          n != null && (y.delete(e), n(t));
        }
      });
    }
    var b = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function v(e, t) {
      var n = S(e);
      return n != null && n === S(t);
    }
    function S(t) {
      try {
        return o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(t);
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-upload] no media key type for ",
                  "",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("upload-media-key-type-unknown"),
          null
        );
      }
    }
    function R(e, t, n) {
      var r = e.getUploadEntry(t);
      if (!(r instanceof o("WAWebMediaEntry").EncryptedMediaEntry)) return r;
      var a = S(n);
      if (a == null || S(r.type) === a) return r;
      var i = e.getUploadEntryMatching(t, function (e) {
        return (
          e instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
          L(e) &&
          e.validateForDownloads() &&
          S(e.type) === a
        );
      });
      return i == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_media_fast_forward_match_key_type_entry_enabled",
        )
        ? r
        : i;
    }
    function L(e) {
      return (
        e.directPath != null &&
        o("WATimeUtils").happenedWithin(
          o("WATimeUtils").castToUnixTime(e.mediaKeyTimestamp),
          o("WAIsMediaKeyReusable").MMS_MEDIA_KEY_TTL,
        )
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (v(h.type, _) ||
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
          var b;
          try {
            b = yield s;
          } catch (e) {
            throw (
              C.endFailWithError(
                "early_upload_failed",
                e instanceof Error ? e.message : String(e),
              ),
              e
            );
          }
          if (b != null)
            return (
              C.addPoint("early_upload_success"),
              C.endSuccess(),
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return $(e, E);
    }
    function x(e) {
      return $(e, I);
    }
    function $(e, t) {
      var a = e.calculateToken,
        i = e.canEnableFastForward,
        l = i === void 0 ? !0 : i,
        p = e.earlyUpload,
        _ = e.fileOrigin,
        f = e.forwardedFromWeb,
        g = e.isViewOnce,
        C = e.mediaKeyInfo,
        v = e.mediaObject,
        S = e.mediaType,
        L = e.mimetype,
        E = e.uploadEntry,
        k = e.uploadOrigin,
        I = C,
        T = v.getUploadPromise(S);
      if (T) return T;
      var D = new AbortController(),
        x = D.signal,
        $ = null,
        P = (h || (h = n("Promise")))
          .resolve()
          .then(function () {
            v.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return M({
              mediaObject: v,
              mimetype: L,
              mediaType: S,
              abortSignal: x,
              uploadOrigin: k,
            });
          })
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = yield A(v.filehash, S, e),
                    i;
                  if (
                    (l &&
                      (i =
                        E !== void 0
                          ? E
                          : R(
                              v.entries,
                              o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isMediaCryptoExpectedForMediaType(S),
                              S,
                            )),
                    i instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                      I &&
                      i.mediaKey !== I.key)
                  ) {
                    var c,
                      d,
                      m = I;
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
                    var h = !v.entries.entries.some(function (e) {
                        return e.getMediaKey() === m.key;
                      }),
                      y = (c = i.mediaKey) == null ? void 0 : c.length,
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
                        h,
                        y,
                        C,
                      ),
                      S === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      I = null;
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
                    mediaKeyInfo: I,
                    mediaObject: v,
                    mediaType: S,
                    signal: x,
                    uploadEntry: i,
                    uploadOrigin: k,
                    fileOrigin: _,
                    isViewOnce: g,
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
                      var L = v.filehash;
                      if (L != null && L !== "" && v.mediaBlob) {
                        var T = yield o("WAWebMediaLoad").transcode(
                          v.mediaBlob.formData(),
                        );
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(L, T);
                      }
                    } else
                      v.mediaBlob &&
                        (yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata(v, v.mediaBlob));
                  return (
                    yield O(v.filehash, S, n != null ? n : e),
                    n != null && (yield W(v, n)),
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
              { kind: b.SUCCESS, mediaEntry: e }
            );
          })
          .catch(function (e) {
            var t = r("getErrorSafe")(e);
            throw (
              t.name === o("WAAbortError").ABORT_ERROR
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAlgo.uploadMedia: canceled",
                      ])),
                  ),
                  N(S, $))
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
            v.clearUploadPromise(S, P);
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
                  { kind: b.ERROR }
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
                  { kind: b.ERROR }
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
                  { kind: b.ERROR }
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
                  { kind: b.ERROR }
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
                  { kind: b.ERROR }
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
                ? { kind: b.CANCELLATION }
                : { kind: b.ERROR }
            );
          });
      return (
        y.set(P, function (e) {
          (($ = e), D.abort());
        }),
        v.setUploadPromise(P, S),
        P
      );
    }
    var P = {
      user: "media-upload-cancel-origin-user",
      media_object_delete: "media-upload-cancel-origin-media_object_delete",
      download_error: "media-upload-cancel-origin-download_error",
      thumbnail: "media-upload-cancel-origin-thumbnail",
      unknown: "media-upload-cancel-origin-unknown",
    };
    function N(e, t) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_media_fast_forward_match_key_type_entry_enabled",
        )
      ) {
        var n = t != null ? t : "unknown";
        o("WALogger")
          .LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[media-upload] upload cancelled, origin: ",
                ", type: ",
                "",
              ])),
            n,
            e,
          )
          .sendLogs(P[n], { sampling: 0.1 });
      }
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            a = e.chatWid,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.mimetype,
            u = e.uploadOrigin,
            c = V(i);
          if (c) return c;
          var d = (t = i.filehash) != null ? t : "none",
            m = i.entries.entries.length;
          if (
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          var p = V(i);
          if (p) return p;
          throw r("err")("can't upload media w/out mediaBlob after download");
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !U(e, t) ||
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
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n instanceof ArrayBuffer ? n.byteLength : n.size;
          if (
            !(
              e == null ||
              !U(e, t) ||
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-upload] could not file the sent media for reuse",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("upload-lru-store-write-failed");
            }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-upload] could not keep the sent media in memory",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return e == null
        ? !1
        : (o("WAWebMediaDataUtils").shouldUseLruMediaStore(t) &&
            r("justknobx")._("2918")) ||
            r("WAWebEnvironment").isWindows;
    }
    function V(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (!(e.filehash == null || e.filehash === ""))
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = C),
      (l.UploadMediaResultKind = b),
      (l.getUploadEntryForMediaType = R),
      (l.uploadMedia = D),
      (l.uploadUnencryptedMedia = x),
      (l.getOrDownloadBlob = M),
      (l.getBlobFromMediaObject = V));
  },
  98,
);
